
import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import { mockActivityLog } from '../../data/mockData';

const ActivityLogPage: React.FC = () => {
  return (
    <PageContainer title="Nhật ký hoạt động" breadcrumb={['Dashboard', 'Nhật ký hoạt động']}>
      <Card>
        <div className="relative border-l-2 border-gray-200 ml-3">
          {mockActivityLog.map((log, index) => (
            <div key={log.id} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg className="w-3 h-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                {log.action} <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 ml-3">{log.user}</span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{log.timestamp}</time>
              <p className="text-base font-normal text-gray-500">{log.details}</p>
            </div>
          ))}
        </div>
      </Card>
    </PageContainer>
  );
};

export default ActivityLogPage;
