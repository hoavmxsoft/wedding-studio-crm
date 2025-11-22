
import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { mockBookings, mockStaff } from '../../data/mockData';
import type { Booking } from '../../types/types';

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month'); // 'month', 'week', 'day'
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const statusColorMap: { [key in Booking['status']]: string } = {
    'Đang chờ': 'bg-yellow-200 border-yellow-400 text-yellow-800',
    'Đã chốt': 'bg-blue-200 border-blue-400 text-blue-800',
    'Hoàn thành': 'bg-green-200 border-green-400 text-green-800',
    'Hủy': 'bg-red-200 border-red-400 text-red-800',
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" onClick={() => setCurrentDate(new Date())}>Hôm nay</Button>
          <Button variant="ghost" onClick={() => setCurrentDate(prev => new Date(prev.setMonth(prev.getMonth() - 1)))}>&lt;</Button>
          <Button variant="ghost" onClick={() => setCurrentDate(prev => new Date(prev.setMonth(prev.getMonth() + 1)))}>&gt;</Button>
          <h2 className="text-xl font-semibold text-gray-700">
            {currentDate.toLocaleString('vi-VN', { month: 'long', year: 'numeric' })}
          </h2>
        </div>
        <div>
          {/* View switcher can be implemented here */}
        </div>
      </div>
    );
  };
  
  const renderDays = () => {
    const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    return (
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
        {days.map(day => <div key={day} className="py-2 border-b">{day}</div>)}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDate = new Date(monthStart);
    startDate.setDate(startDate.getDate() - monthStart.getDay());
    const endDate = new Date(monthEnd);
    endDate.setDate(endDate.getDate() + (6 - monthEnd.getDay()));

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = new Date(day);
        const bookingsForDay = mockBookings.filter(b => 
            b.start.getDate() === cloneDay.getDate() &&
            b.start.getMonth() === cloneDay.getMonth() &&
            b.start.getFullYear() === cloneDay.getFullYear()
        );

        days.push(
          <div
            key={day.toString()}
            className={`p-2 border-r border-b h-32 overflow-y-auto ${day.getMonth() !== currentDate.getMonth() ? 'bg-gray-50 text-gray-400' : ''}`}
          >
            <span className={`font-medium ${new Date().toDateString() === cloneDay.toDateString() ? 'bg-primary text-white rounded-full px-2 py-1' : ''}`}>
              {cloneDay.getDate()}
            </span>
            <div className="mt-1 space-y-1">
              {bookingsForDay.map(booking => (
                <div 
                  key={booking.id} 
                  className={`p-1 text-xs rounded-md border cursor-pointer ${statusColorMap[booking.status]}`}
                  onClick={() => setSelectedBooking(booking)}
                >
                  <p className="font-semibold truncate">{booking.coupleName}</p>
                  <p className="truncate">{booking.serviceType}</p>
                </div>
              ))}
            </div>
          </div>
        );
        day.setDate(day.getDate() + 1);
      }
      rows.push(<div className="grid grid-cols-7" key={day.toString()}>{days}</div>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <PageContainer title="Lịch chụp" breadcrumb={['Dashboard', 'Lịch chụp']}>
      <Card>
        {renderHeader()}
        <div className="border-t border-l">
          {renderDays()}
          {renderCells()}
        </div>
      </Card>
      <Modal isOpen={!!selectedBooking} onClose={() => setSelectedBooking(null)} title="Chi tiết Booking">
        {selectedBooking && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold">{selectedBooking.coupleName}</h3>
            <p><strong>Dịch vụ:</strong> {selectedBooking.serviceType}</p>
            <p><strong>Thời gian:</strong> {selectedBooking.start.toLocaleString('vi-VN')} - {selectedBooking.end.toLocaleString('vi-VN')}</p>
            <p><strong>Địa điểm:</strong> {selectedBooking.location}</p>
            <p><strong>Trạng thái:</strong> {selectedBooking.status}</p>
            <div>
              <strong>Nhân sự:</strong>
              <ul className="list-disc list-inside ml-4">
                {selectedBooking.assignedStaffIds.map(id => {
                  const staff = mockStaff.find(s => s.id === id);
                  return <li key={id}>{staff ? `${staff.name} (${staff.role})` : 'Unknown'}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </PageContainer>
  );
};

export default CalendarPage;
