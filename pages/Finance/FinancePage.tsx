
import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import Table from '../../components/ui/Table';
import { mockFinanceTransactions } from '../../data/mockData';
import type { FinanceTransaction } from '../../types/types';

const packageRevenueData = [
  { name: 'Gói Đà Lạt', value: 250 },
  { name: 'Gói Studio', value: 80 },
  { name: 'Gói Lễ + Tiệc', value: 150 },
  { name: 'Gói Phóng sự', value: 120 },
];

const sourceRevenueData = [
  { name: 'Facebook', value: 400 },
  { name: 'Giới thiệu', value: 300 },
  { name: 'Website', value: 200 },
  { name: 'Zalo', value: 100 },
];
const COLORS = ['#6366F1', '#EC4899', '#10B981', '#F59E0B'];

const FinancePage: React.FC = () => {

  const transactionColumns = [
    { header: 'Ngày', accessor: 'date' as keyof FinanceTransaction },
    { header: 'Khách hàng', accessor: 'customerName' as keyof FinanceTransaction },
    { header: 'Loại GD', accessor: 'type' as keyof FinanceTransaction },
    { 
      header: 'Số tiền', 
      accessor: (item: FinanceTransaction) => (
        <span className={item.amount > 0 ? 'text-green-600' : 'text-red-600'}>
          {item.amount.toLocaleString('vi-VN')} đ
        </span>
      )
    },
    { header: 'Ghi chú', accessor: 'notes' as keyof FinanceTransaction },
  ];

  return (
    <PageContainer title="Tài chính" breadcrumb={['Dashboard', 'Tài chính']}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card title="Doanh thu dự kiến tháng"><p className="text-3xl font-bold text-blue-600">350,000,000 đ</p></Card>
        <Card title="Đã thu tháng này"><p className="text-3xl font-bold text-green-600">180,000,000 đ</p></Card>
        <Card title="Công nợ còn lại"><p className="text-3xl font-bold text-red-600">95,000,000 đ</p></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card title="Doanh thu theo gói dịch vụ (triệu VNĐ)">
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={packageRevenueData}>
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Tỷ lệ doanh thu theo nguồn">
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie data={sourceRevenueData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {sourceRevenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card title="Giao dịch gần đây">
        <Table columns={transactionColumns} data={mockFinanceTransactions} />
      </Card>
    </PageContainer>
  );
};

export default FinancePage;
