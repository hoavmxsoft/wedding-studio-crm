
import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import Table from '../../components/ui/Table';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Modal from '../../components/ui/Modal';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import { Icon } from '../../components/ui/Icon';
import { mockCustomers } from '../../data/mockData';
import type { Customer } from '../../types/types';

const CustomersPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleViewDetails = (customer: Customer) => {
    setSelectedCustomer(customer);
    setModalOpen(true);
  };
  
  const handleAddNew = () => {
      setSelectedCustomer(null);
      setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCustomer(null);
  };

  const statusColorMap: { [key in Customer['status']]: 'green' | 'blue' | 'yellow' | 'red' | 'gray' } = {
    'Lead mới': 'blue',
    'Đã tư vấn': 'yellow',
    'Đã chốt': 'green',
    'Đã hủy': 'red',
    'Khách cũ': 'gray',
  };

  const columns = [
    {
      header: 'Tên cặp đôi',
      accessor: (item: Customer) => <span className="font-semibold text-gray-800">{item.coupleName}</span>
    },
    { header: 'Số điện thoại', accessor: 'phone' as keyof Customer },
    { header: 'Nguồn', accessor: 'source' as keyof Customer },
    {
      header: 'Trạng thái',
      accessor: (item: Customer) => <Badge color={statusColorMap[item.status]}>{item.status}</Badge>
    },
    { header: 'NV Phụ trách', accessor: 'assignedStaff' as keyof Customer },
    { header: 'Ngày tạo', accessor: 'createdAt' as keyof Customer},
    {
      header: 'Hành động',
      accessor: (item: Customer) => (
        <Button variant="ghost" size="sm" onClick={() => handleViewDetails(item)}>
          <Icon name="eye" className="h-5 w-5"/>
        </Button>
      )
    },
  ];
  
  const statusOptions = [
    { value: 'all', label: 'Tất cả trạng thái' },
    { value: 'Lead mới', label: 'Lead mới' },
    { value: 'Đã tư vấn', label: 'Đã tư vấn' },
    { value: 'Đã chốt', label: 'Đã chốt' },
    { value: 'Đã hủy', label: 'Đã hủy' },
    { value: 'Khách cũ', label: 'Khách cũ' },
  ];

  return (
    <PageContainer title="Khách hàng" breadcrumb={['Dashboard', 'Khách hàng']}>
      <Card>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-4">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Input type="text" placeholder="Tìm theo tên, SĐT..." />
          </div>
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <Select options={statusOptions} />
            <Button onClick={handleAddNew} icon={<Icon name="plus" className="h-5 w-5 mr-1" />}>
              Thêm khách hàng
            </Button>
          </div>
        </div>
        <Table columns={columns} data={mockCustomers} />
      </Card>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedCustomer ? 'Chi tiết khách hàng' : 'Thêm khách hàng mới'}>
        {selectedCustomer ? (
          <div className="space-y-4">
            <p><strong>Tên cặp đôi:</strong> {selectedCustomer.coupleName}</p>
            <p><strong>Chú rể:</strong> {selectedCustomer.groomName}</p>
            <p><strong>Cô dâu:</strong> {selectedCustomer.brideName}</p>
            <p><strong>Điện thoại:</strong> {selectedCustomer.phone}</p>
            <p><strong>Email:</strong> {selectedCustomer.email}</p>
            <p><strong>Ngày cưới dự kiến:</strong> {selectedCustomer.weddingDate || 'Chưa có'}</p>
            <p><strong>Trạng thái:</strong> <Badge color={statusColorMap[selectedCustomer.status]}>{selectedCustomer.status}</Badge></p>
          </div>
        ) : (
          <form className="space-y-4">
            <Input name="coupleName" label="Tên cặp đôi" placeholder="Vd: Anh Khoa & Mỹ Linh" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="groomName" label="Tên chú rể" />
                <Input name="brideName" label="Tên cô dâu" />
            </div>
            <Input name="phone" label="Số điện thoại" type="tel" required />
            <Input name="email" label="Email" type="email" />
            <Select name="source" label="Nguồn khách hàng" options={[
                { value: 'Facebook', label: 'Facebook' },
                { value: 'Zalo', label: 'Zalo' },
                { value: 'Website', label: 'Website' },
                { value: 'Giới thiệu', label: 'Giới thiệu' },
                { value: 'Walk-in', label: 'Walk-in' },
            ]} />
             <div className="flex justify-end pt-4 space-x-2">
                <Button type="button" variant="ghost" onClick={closeModal}>Hủy</Button>
                <Button type="submit">Lưu</Button>
            </div>
          </form>
        )}
      </Modal>
    </PageContainer>
  );
};

export default CustomersPage;
