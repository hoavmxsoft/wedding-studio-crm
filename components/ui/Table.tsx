
import React, { ReactNode } from 'react';

interface TableProps<T> {
  columns: {
    header: string;
    accessor: keyof T | ((item: T) => ReactNode);
  }[];
  data: T[];
}

const Table = <T extends { id: string | number }>(
    { columns, data }: TableProps<T>
) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th key={String(col.header)} scope="col" className="px-6 py-3">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
              {columns.map((col) => (
                <td key={String(col.header)} className="px-6 py-4">
                  {typeof col.accessor === 'function'
                    ? col.accessor(item)
                    : (item[col.accessor] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && <p className="text-center py-8 text-gray-500">Không có dữ liệu</p>}
    </div>
  );
};

export default Table;
