
import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import Table from '../../components/ui/Table';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { mockContracts, mockCustomers, mockPackages } from '../../data/mockData';
import type { Contract } from '../../types/types';

const ContractsPage: React.FC = () => {
  const statusColorMap: { [key in Contract['status']]: 'yellow' | 'green' | 'blue' | 'red' } = {
    'Đang thương lượng': 'yellow',
    'Đã ký': 'blue',
    'Hoàn thành': 'green',
    'Hủy': 'red',
  };

  const dataWithDetails = mockContracts.map(contract => {
    const customer = mockCustomers.find(c => c.id === contract.customerId);
    const pkg = mockPackages.find(p => p.id === contract.packageId);
    return {
      ...contract,
      customerName: customer?.coupleName || 'N/A',
      packageName: pkg?.name || 'N/A',
    };
  });

  const columns = [
    { header: 'Mã HĐ', accessor: 'id' as keyof typeof dataWithDetails[0] },
    { header: 'Khách hàng', accessor: 'customerName' as keyof typeof dataWithDetails[0] },
    { header: 'Gói dịch vụ', accessor: 'packageName' as keyof typeof dataWithDetails[0] },
    {
      header: 'Tổng giá trị',
      accessor: (item: any) => `${item.totalValue.toLocaleString('vi-VN')} đ`
    },
    {
      header: 'Đã thanh toán',
      accessor: (item: any) => `${item.paidAmount.toLocaleString('vi-VN')} đ`
    },
    {
      header: 'Còn lại',
      accessor: (item: any) => <span className="font-semibold text-red-600">{item.remainingAmount.toLocaleString('vi-VN')} đ</span>
    },
    {
      header: 'Trạng thái',
      accessor: (item: Contract) => <Badge color={statusColorMap[item.status]}>{item.status}</Badge>
    },
  ];

  return (
    <PageContainer title="Hợp đồng & Thanh toán" breadcrumb={['Dashboard', 'Hợp đồng & Thanh toán']}>
      <Card>
        <div className="flex justify-end mb-4">
            <Button>+ Tạo hợp đồng</Button>
        </div>
        <Table columns={columns} data={dataWithDetails} />
      </Card>
    </PageContainer>
  );
};

export default ContractsPage;
