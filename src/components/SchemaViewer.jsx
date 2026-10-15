import React from 'react';
import { Key, Shield, Hash, Type, Calendar, MapPin } from 'lucide-react';

export default function SchemaViewer({ table }) {
  if (!table) return null;

  const getTypeIcon = (type) => {
    if (type.includes('INT')) return <Hash className="w-3.5 h-3.5 text-blue-400" />;
    if (type.includes('DECIMAL')) return <Hash className="w-3.5 h-3.5 text-amber-400" />;
    if (type.includes('VARCHAR')) return <Type className="w-3.5 h-3.5 text-emerald-400" />;
    return <Type className="w-3.5 h-3.5 text-gray-400" />;
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
            <span>Table Schema:</span>
            <span className="font-mono text-brand normal-case">{table.name}</span>
          </h4>
          <p className="text-[11px] text-text-secondary mt-0.5">{table.description}</p>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded bg-panel-light text-text-secondary border border-panel-border">
          {table.columns.length} columns
        </span>
      </div>

      <div className="border border-panel-border rounded-lg overflow-hidden bg-panel">
        <table className="w-full text-left text-xs">
          <thead className="bg-panel-light text-text-secondary border-b border-panel-border font-medium">
            <tr>
              <th className="py-2 px-3">Column</th>
              <th className="py-2 px-3">Type</th>
              <th className="py-2 px-3">Key</th>
              <th className="py-2 px-3 hidden sm:table-cell">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-border/60">
            {table.columns.map((col) => (
              <tr key={col.name} className="hover:bg-panel-light/60 transition-colors">
                <td className="py-2 px-3 font-mono font-medium text-text-primary flex items-center gap-1.5">
                  {getTypeIcon(col.type)}
                  <span>{col.name}</span>
                </td>
                <td className="py-2 px-3 font-mono text-text-secondary text-[11px]">
                  {col.type}
                </td>
                <td className="py-2 px-3">
                  {col.isPrimary ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded">
                      <Key className="w-3 h-3" /> PK
                    </span>
                  ) : (
                    <span className="text-[11px] text-text-muted">—</span>
                  )}
                </td>
                <td className="py-2 px-3 text-[11px] text-text-secondary hidden sm:table-cell">
                  {col.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
