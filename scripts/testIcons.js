async function testImports() {
  try {
    const lucide = await import('lucide-react');
    const iconsToCheck = [
      'Database', 'Terminal', 'BookOpen', 'BarChart3', 'Settings', 'LayoutDashboard', 'RefreshCw', 'CheckCircle2',
      'CheckCircle', 'AlertCircle', 'Info', 'X', 'AlertTriangle',
      'Key', 'Shield', 'Hash', 'Type', 'Calendar', 'MapPin',
      'Table', 'ChevronRight', 'ChevronDown', 'Eye', 'FileCode', 'Copy', 'Check',
      'ChevronUp', 'Maximize2', 'Minimize2',
      'Clock', 'Bookmark', 'Search', 'Filter', 'ChevronLeft', 'HelpCircle', 'EyeOff', 'Lightbulb', 'ListOrdered', 'BookMarked', 'Sparkles',
      'Play', 'Send', 'RotateCcw', 'AlignLeft', 'Trash2',
      'Download', 'ShieldCheck',
      'TrendingUp', 'Zap', 'Award', 'Compass', 'ArrowRight',
      'Code', 'Upload', 'FileText', 'HardDrive', 'Cpu', 'ExternalLink', 'Server'
    ];

    for (const icon of iconsToCheck) {
      if (!lucide[icon]) {
        console.error(`MISSING ICON: ${icon}`);
      }
    }
    console.log('All icons checked!');
  } catch (err) {
    console.error('Error testing imports:', err);
  }
}

testImports();
