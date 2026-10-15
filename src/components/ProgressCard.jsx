import React from 'react';

export default function ProgressCard({ title, value, subtitle, icon: Icon, color = 'brand', trend }) {
  const colorMap = {
    brand: 'text-brand bg-brand/10 border-brand/20',
    success: 'text-success bg-success/10 border-success/20',
    warning: 'text-warning bg-warning/10 border-warning/20',
    danger: 'text-danger bg-danger/10 border-danger/20',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  };

  return (
    <div className="p-4 rounded-xl bg-panel border border-panel-border shadow-sm hover:border-panel-lighter transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
          {title}
        </span>
        {Icon && (
          <div className={`p-2 rounded-lg border ${colorMap[color] || colorMap.brand}`}>
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold font-mono tracking-tight text-text-primary">
          {value}
        </span>
        {trend && (
          <span className="text-xs font-medium text-text-secondary">
            {trend}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="mt-1 text-[11px] text-text-muted truncate">
          {subtitle}
        </p>
      )}
    </div>
  );
}
