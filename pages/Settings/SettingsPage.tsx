
import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import Tabs from '../../components/ui/Tabs';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const StudioInfoTab: React.FC = () => (
    <Card title="Thông tin Studio">
        <form className="space-y-4">
            <Input label="Tên Studio" name="studioName" defaultValue="My Wedding Studio" />
            <Input label="Địa chỉ" name="address" defaultValue="123 Đường ABC, Quận 1, TP. HCM" />
            <Input label="Số điện thoại" name="phone" defaultValue="028 1234 5678" />
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                <input type="file" className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary hover:file:bg-violet-100"/>
            </div>
            <div className="pt-2">
                <Button type="submit">Lưu thay đổi</Button>
            </div>
        </form>
    </Card>
);

const SourcesTab: React.FC = () => (
    <Card title="Nguồn khách hàng">
        <p className="mb-4 text-gray-600">Quản lý các nguồn khách hàng để theo dõi hiệu quả marketing.</p>
        <div className="space-y-2">
            {['Facebook', 'Zalo', 'Website', 'Giới thiệu', 'Walk-in'].map(source => (
                <div key={source} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span>{source}</span>
                    <Button variant="ghost" size="sm">Xóa</Button>
                </div>
            ))}
        </div>
        <div className="mt-4 flex space-x-2">
            <Input placeholder="Thêm nguồn mới..." wrapperClassName="flex-1" />
            <Button>Thêm</Button>
        </div>
    </Card>
);

const SettingsPage: React.FC = () => {
    const tabs = [
        { label: 'Thông tin Studio', content: <StudioInfoTab /> },
        { label: 'Nguồn khách hàng', content: <SourcesTab /> },
    ];

    return (
        <PageContainer title="Cài đặt" breadcrumb={['Dashboard', 'Cài đặt']}>
            <Tabs tabs={tabs} />
        </PageContainer>
    );
};

export default SettingsPage;
