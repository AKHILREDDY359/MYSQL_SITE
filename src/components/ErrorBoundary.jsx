import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('SQLForge Application Crash caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleResetAndReload = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {
      console.warn('Storage clear error:', e);
    }
    window.location.href = window.location.origin;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0F1D',
          color: '#E2E8F0',
          fontFamily: 'Inter, system-ui, sans-serif',
          padding: '24px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '560px',
            width: '100%',
            backgroundColor: '#111827',
            border: '1px solid #374151',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#EF4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                ⚠️
              </div>
              <div>
                <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0, color: '#F9FAFB' }}>
                  SQLForge Recovery
                </h1>
                <p style={{ fontSize: '12px', color: '#9CA3AF', margin: '4px 0 0 0' }}>
                  The application caught a runtime exception.
                </p>
              </div>
            </div>

            <div style={{
              backgroundColor: '#030712',
              borderRadius: '8px',
              border: '1px solid #1F2937',
              padding: '12px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: '#F87171',
              maxHeight: '160px',
              overflowY: 'auto',
              marginBottom: '24px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all'
            }}>
              {this.state.error?.toString() || 'Unknown runtime error'}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={this.handleReload}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  backgroundColor: '#3B82F6',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Reload Page
              </button>
              <button
                onClick={this.handleResetAndReload}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  backgroundColor: '#1F2937',
                  color: '#D1D5DB',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Clear Cache & Restart
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
