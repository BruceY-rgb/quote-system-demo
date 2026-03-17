import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataTable from '@/components/DataTable';

interface NoticeRecord {
  id: string;
  title: string;
}

export default function Notice() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: 0,
  });

  const data: NoticeRecord[] = [];

  const columns = [
    { key: 'title', title: '标题' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <button className="text-[#F56C4A] text-sm">详情</button>
      ),
    },
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
          系统通知
        </Button>
        <button className="text-[#F56C4A] text-sm flex items-center gap-1">
          <Plus className="w-4 h-4" />
          新增系统通知
        </button>
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
