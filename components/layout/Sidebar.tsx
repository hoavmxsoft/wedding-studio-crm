
import React from 'react';
import type { Page } from '../../types/types';
import { Icon } from '../ui/Icon';
import Avatar from '../ui/Avatar';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate, isOpen, setOpen }) => {
  const menuItems: { name: Page; icon: keyof typeof Icon }[] = [
    { name: 'Dashboard', icon: 'home' },
    { name: 'Khách hàng', icon: 'users' },
    { name: 'Lịch chụp', icon: 'calendar' },
    { name: 'Việc cần làm', icon: 'clipboard' },
    { name: 'Nhân viên', icon: 'briefcase' },
    { name: 'Gói dịch vụ', icon: 'package' },
    { name: 'Hợp đồng & thanh toán', icon: 'document' },
    { name: 'Tài chính', icon: 'chart' },
    { name: 'Nhật ký hoạt động', icon: 'activity' },
    { name: 'Cài đặt', icon: 'settings' },
  ];

  const NavLink: React.FC<{ item: { name: Page; icon: keyof typeof Icon } }> = ({ item }) => (
    <li
      className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
        currentPage === item.name
          ? 'bg-indigo-100 text-primary font-semibold'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={() => onNavigate(item.name)}
    >
      <div className="w-6 h-6 mr-4">
        <Icon name={item.icon} />
      </div>
      <span className="md:inline">{item.name}</span>
    </li>
  );
  
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 z-20 bg-black opacity-50 md:hidden" onClick={() => setOpen(false)}></div>}
      
      <aside className={`fixed md:relative inset-y-0 left-0 z-30 flex flex-col w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex-shrink-0`}>
        <div className="flex items-center justify-center h-20 border-b">
          <h1 className="text-2xl font-bold text-primary">Studio Wedding CRM</h1>
        </div>
        <nav className="flex-1 px-4 py-4">
          <ul>
            {menuItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center">
            <Avatar src="https://picsum.photos/seed/admin/100/100" alt="Admin User" size="md" />
            <div className="ml-3">
              <p className="font-semibold text-gray-800">Thu Trang</p>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
