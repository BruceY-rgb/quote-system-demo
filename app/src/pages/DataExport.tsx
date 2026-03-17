import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataTable from '@/components/DataTable';

interface ExportRecord {
  id: string;
  category: string;
  fileName: string;
  exporter: string;
  createTime: string;
  status: string;
  completeTime: string;
}

export default function DataExport() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: 0,
  });

  const data: ExportRecord[] = [];

  const columns = [
    { key: 'category', title: '数据类别' },
    { key: 'fileName', title: '文件名称' },
    { key: 'exporter', title: '导出人' },
    { key: 'createTime', title: '创建时间' },
    { key: 'status', title: '状态' },
    { key: 'completeTime', title: '完成时间' },
    { key: 'action', title: '操作' },
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <div className="mb-4">
        <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
          <Plus className="w-4 h-4 mr-1" />
          导出数据
        </Button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={data}
        pagination={{
          ...pagination,
          onChange: (page) => setPagination({ ...pagination, current: page }),
          onPageSizeChange: (pageSize) =>
            setPagination({ ...pagination, pageSize, current: 1 }),
        }}
        emptyText="暂无数据"
      />
    </div>
  );
}
