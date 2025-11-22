
import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Modal from '../../components/ui/Modal';
import { mockPackages } from '../../data/mockData';
import type { Package } from '../../types/types';

const PackageCard: React.FC<{ pkg: Package; onClick: () => void }> = ({ pkg, onClick }) => (
  <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
        <div className="flex space-x-1">
          {pkg.tags.map(tag => (
            <Badge key={tag} color={tag === 'Best Seller' ? 'pink' : 'yellow'} size="sm">{tag}</Badge>
          ))}
        </div>
      </div>
      <p className="text-2xl font-bold text-primary my-3">
        {pkg.price.toLocaleString('vi-VN')} VNĐ
      </p>
      <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
    </div>
    <Button onClick={onClick}>Xem chi tiết</Button>
  </Card>
);

const PackagesPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  return (
    <PageContainer title="Gói dịch vụ" breadcrumb={['Dashboard', 'Gói dịch vụ']}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPackages.map(pkg => (
          <PackageCard key={pkg.id} pkg={pkg} onClick={() => setSelectedPackage(pkg)} />
        ))}
      </div>

      <Modal isOpen={!!selectedPackage} onClose={() => setSelectedPackage(null)} title={selectedPackage?.name || ''}>
        {selectedPackage && (
          <div>
            <p className="text-3xl font-bold text-primary mb-4">
              {selectedPackage.price.toLocaleString('vi-VN')} VNĐ
            </p>
            <p className="text-gray-700 mb-4">{selectedPackage.description}</p>
            <h4 className="font-semibold mb-2">Bao gồm:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {selectedPackage.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </PageContainer>
  );
};

export default PackagesPage;
