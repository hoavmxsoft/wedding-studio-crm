
import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import Button from '../ui/Button';

interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex-shrink-0 bg-white shadow-sm h-16 flex items-center justify-between px-6 z-10">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="md:hidden text-gray-600 focus:outline-none">
          <Icon name="menu" className="h-6 w-6"/>
        </button>
        <div className="relative hidden md:block ml-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
             <Icon name="search" className="h-5 w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Tìm khách hàng, SĐT, hợp đồng..."
            className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-primary focus:border-primary transition"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative text-gray-500 hover:text-gray-700">
          <Icon name="bell" className="h-6 w-6"/>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </button>

        <div className="relative">
          <Button onClick={() => setDropdownOpen(!dropdownOpen)} icon={<Icon name="plus" className="h-5 w-5 mr-2" />}>
            Tạo mới
          </Button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tạo lead mới</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tạo booking</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tạo hợp đồng</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
