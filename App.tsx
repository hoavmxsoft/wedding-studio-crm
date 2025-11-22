
import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import DashboardPage from './pages/Dashboard/DashboardPage';
import CustomersPage from './pages/Customers/CustomersPage';
import CalendarPage from './pages/Calendar/CalendarPage';
import TasksPage from './pages/Tasks/TasksPage';
import StaffPage from './pages/Staff/StaffPage';
import PackagesPage from './pages/Packages/PackagesPage';
import ContractsPage from './pages/Contracts/ContractsPage';
import FinancePage from './pages/Finance/FinancePage';
import ActivityLogPage from './pages/ActivityLog/ActivityLogPage';
import SettingsPage from './pages/Settings/SettingsPage';
import type { Page } from './types/types';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
    if (window.innerWidth < 768) {
        setSidebarOpen(false);
    }
  }, []);
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Khách hàng':
        return <CustomersPage />;
      case 'Lịch chụp':
        return <CalendarPage />;
      case 'Việc cần làm':
        return <TasksPage />;
      case 'Nhân viên':
        return <StaffPage />;
      case 'Gói dịch vụ':
        return <PackagesPage />;
      case 'Hợp đồng & thanh toán':
        return <ContractsPage />;
      case 'Tài chính':
        return <FinancePage />;
      case 'Nhật ký hoạt động':
        return <ActivityLogPage />;
      case 'Cài đặt':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-light-bg font-sans text-gray-800">
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} isOpen={isSidebarOpen} setOpen={setSidebarOpen}/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
