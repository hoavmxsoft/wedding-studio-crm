
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import { Icon } from '../../components/ui/Icon';
import Badge from '../../components/ui/Badge';
import { mockBookings, mockTasks } from '../../data/mockData';
import type { Booking } from '../../types/types';

const chartData = [
  { name: 'Tháng 2', DoanhThu: 40, "Dự kiến": 50 },
  { name: 'Tháng 3', DoanhThu: 60, "Dự kiến": 75 },
  { name: 'Tháng 4', DoanhThu: 50, "Dự kiến": 60 },
  { name: 'Tháng 5', DoanhThu: 70, "Dự kiến": 80 },
  { name: 'Tháng 6', DoanhThu: 90, "Dự kiến": 100 },
  { name: 'Tháng 7', DoanhThu: 110, "Dự kiến": 120 },
];

const StatCard: React.FC<{ icon: keyof typeof Icon, title: string, value: string, color: string }> = ({ icon, title, value, color }) => (
    <Card className="flex items-center p-5">
        <div className={`p-3 rounded-full mr-4 ${color}`}>
            <Icon name={icon} className="h-6 w-6 text-white" />
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </Card>
);

const DashboardPage: React.FC = () => {

    const todayBookings = mockBookings.filter(b => 
        b.start.getDate() === new Date().getDate() &&
        b.start.getMonth() === new Date().getMonth() &&
        b.start.getFullYear() === new Date().getFullYear()
    );

    const urgentTasks = mockTasks.filter(t => t.status !== 'Done').slice(0, 5);

    const getPriorityBadgeColor = (priority: 'Cao' | 'Trung bình' | 'Thấp') => {
        if (priority === 'Cao') return 'red';
        if (priority === 'Trung bình') return 'yellow';
        return 'green';
    }

    return (
        <PageContainer title="Dashboard" breadcrumb={['Dashboard']}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard icon="users" title="Lead mới trong tuần" value="12" color="bg-blue-500" />
                <StatCard icon="calendar" title="Booking trong tháng" value="25" color="bg-pink-500" />
                <StatCard icon="briefcase" title="Jobs sắp diễn ra (7 ngày)" value="8" color="bg-indigo-500" />
                <StatCard icon="chart" title="Doanh thu dự kiến" value="250M" color="bg-green-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card title="Doanh thu 6 tháng gần nhất (đơn vị: triệu VNĐ)">
                         <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer>
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Dự kiến" fill="#a5b4fc" />
                                    <Bar dataKey="DoanhThu" fill="#6366F1" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card title="Lịch hôm nay">
                        <div className="space-y-4">
                            {todayBookings.length > 0 ? todayBookings.map((booking: Booking) => (
                                <div key={booking.id} className="flex items-center">
                                    <div className="bg-indigo-100 text-primary font-bold p-2 rounded-lg text-center w-16 mr-4">
                                        <p className="text-sm">{booking.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">{booking.coupleName}</p>
                                        <p className="text-sm text-gray-500">{booking.serviceType}</p>
                                    </div>
                                </div>
                            )) : <p className="text-gray-500 text-center py-4">Không có lịch hẹn nào hôm nay.</p>}
                        </div>
                    </Card>
                </div>
            </div>
            
            <div className="mt-6">
                <Card title="Việc cần làm gấp">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-gray-600">
                                    <th className="p-2">Task</th>
                                    <th className="p-2">Deadline</th>
                                    <th className="p-2">Ưu tiên</th>
                                </tr>
                            </thead>
                            <tbody>
                                {urgentTasks.map(task => (
                                    <tr key={task.id} className="border-t">
                                        <td className="p-2 font-medium">{task.title}</td>
                                        <td className="p-2">{new Date(task.deadline).toLocaleDateString('vi-VN')}</td>
                                        <td className="p-2">
                                            <Badge color={getPriorityBadgeColor(task.priority)}>{task.priority}</Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </PageContainer>
    );
};

export default DashboardPage;
