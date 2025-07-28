import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import AppRouter from './router';
import { ErrorBoundary, ScrollToTop } from './components/common';

function App() {
  return (
    <ErrorBoundary>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0ea5e9',
            colorSuccess: '#22c55e',
            colorWarning: '#f59e0b',
            colorError: '#ef4444',
            borderRadius: 12,
            borderRadiusLG: 16,
            borderRadiusSM: 8,
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 14,
            fontSizeLG: 16,
            fontSizeSM: 12,
            lineHeight: 1.5,
            colorBgContainer: '#ffffff',
            colorBgElevated: '#ffffff',
            colorBgLayout: '#f8fafc',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            boxShadowSecondary: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
          components: {
            Button: {
              borderRadius: 8,
              fontWeight: 600,
              primaryShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.3)',
            },
            Card: {
              borderRadius: 16,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
            Menu: {
              borderRadius: 8,
              itemBorderRadius: 6,
            },
            Input: {
              borderRadius: 8,
            },
            Select: {
              borderRadius: 8,
            },
            Drawer: {
              borderRadius: 16,
            },
            Modal: {
              borderRadius: 16,
            },
          },
        }}
      >
        <Router>
          <ScrollToTop />
          <AppRouter />
        </Router>
      </ConfigProvider>
    </ErrorBoundary>
  );
}

export default App;
