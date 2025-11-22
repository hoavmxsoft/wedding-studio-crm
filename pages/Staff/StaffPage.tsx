
import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import Table from '../../components/ui/Table';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Modal from '../../components/ui/Modal';
import Avatar from '../../components/ui/Avatar';
import { mockStaff } from '../../data/mockData';
import type { Staff } from '../../types/types';

const StaffPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

  const handleViewProfile = (staff: Staff) => {
    setSelectedStaff(staff);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStaff(null);
  };

  const statusColorMap: { [key in Staff['status']]: 'green' | 'yellow' | 'gray' } = {
    'Đang làm': 'green',
    'Part-time': 'yellow',
    'Nghỉ': 'gray',
  };

  const columns = [
    {
      header: 'Tên nhân viên',
      accessor: (item: Staff) => (
        <div className="flex items-center">
          <Avatar src={item.avatarUrl} alt={item.name} size="md" />
          <span className="font-semibold ml-3">{item.name}</span>
        </div>
      ),
    },
    { header: 'Vai trò', accessor: 'role' as keyof Staff },
    { header: 'Số điện thoại', accessor: 'phone' as keyof Staff },
    { header: 'Email', accessor: 'email' as keyof Staff },
    {
      header: 'Trạng thái',
      accessor: (item: Staff) => <Badge color={statusColorMap[item.status]}>{item.status}</Badge>,
    },
    {
      header: 'Hành động',
      accessor: (item: Staff) => (
        <Button variant="ghost" size="sm" onClick={() => handleViewProfile(item)}>
          Xem Profile
        </Button>
      ),
    },
  ];

  return (
    <PageContainer title="Nhân viên" breadcrumb={['Dashboard', 'Nhân viên']}>
      <Card>
        <div className="flex justify-end mb-4">
          <Button>+ Thêm nhân viên</Button>
        </div>
        <Table columns={columns} data={mockStaff} />
      </Card>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Thông tin nhân viên" size="sm">
        {selectedStaff && (
          <div className="text-center">
            <Avatar src={selectedStaff.avatarUrl} alt={selectedStaff.name} size="lg" />
            <h3 className="text-xl font-bold mt-4">{selectedStaff.name}</h3>
            <p className="text-gray-500">{selectedStaff.role}</p>
            <Badge color={statusColorMap[selectedStaff.status]} >{selectedStaff.status}</Badge>

            <div className="text-left mt-6 space-y-2">
              <p><strong>Điện thoại:</strong> {selectedStaff.phone}</p>
              <p><strong>Email:</strong> {selectedStaff.email}</p>
              <p><strong>Số booking phụ trách:</strong> 5</p>
            </div>
          </div>
        )}
      </Modal>
    </PageContainer>
  );
};

export default StaffPage;
