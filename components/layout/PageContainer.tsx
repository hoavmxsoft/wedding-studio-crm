
import React, { ReactNode } from 'react';
import type { Page } from '../../types/types';
import { Icon } from '../ui/Icon';

interface PageContainerProps {
  title: Page;
  breadcrumb: string[];
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ title, breadcrumb, children }) => {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <span><Icon name="home" className="h-4 w-4 mr-2" /></span>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-2">/</span>}
              <span className={index === breadcrumb.length - 1 ? 'font-medium text-gray-700' : ''}>
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageContainer;
