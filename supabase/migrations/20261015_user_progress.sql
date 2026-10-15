-- SQLForge: User Progress Synchronization Schema & Row-Level Security
-- Run this migration in your Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- 1. Create the user_progress table
create table if not exists public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  question_id integer not null,
  status text not null check (status in ('not_started', 'attempted', 'solved', 'needs_review')),
  draft_sql text,
  attempts_count integer default 0 not null,
  is_bookmarked boolean default false not null,
  last_error text,
  solved_at timestamp with time zone,
  last_attempt_at timestamp with time zone,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  constraint user_progress_user_question_unique unique (user_id, question_id)
);

-- Ensure all columns exist non-destructively if the table was created previously
alter table public.user_progress add column if not exists draft_sql text;
alter table public.user_progress add column if not exists attempts_count integer default 0;
alter table public.user_progress add column if not exists is_bookmarked boolean default false;
alter table public.user_progress add column if not exists last_error text;
alter table public.user_progress add column if not exists solved_at timestamp with time zone;
alter table public.user_progress add column if not exists last_attempt_at timestamp with time zone;
alter table public.user_progress add column if not exists updated_at timestamp with time zone default timezone('utc'::text, now());

-- 2. Performance indexes
create index if not exists idx_user_progress_user_id on public.user_progress(user_id);
create index if not exists idx_user_progress_user_question on public.user_progress(user_id, question_id);
create index if not exists idx_user_progress_status on public.user_progress(user_id, status);

-- 3. Enable Row-Level Security (RLS)
alter table public.user_progress enable row level security;

-- 4. Clean up any existing policies before re-creating
drop policy if exists "Users can view own progress" on public.user_progress;
drop policy if exists "Users can insert own progress" on public.user_progress;
drop policy if exists "Users can update own progress" on public.user_progress;
drop policy if exists "Users can delete own progress" on public.user_progress;
drop policy if exists "Users can manage their own progress" on public.user_progress;

-- 5. Granular RLS Policies strictly scoped to auth.uid()
create policy "Users can view own progress"
  on public.user_progress for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on public.user_progress for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.user_progress for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete own progress"
  on public.user_progress for delete
  to authenticated
  using (auth.uid() = user_id);
