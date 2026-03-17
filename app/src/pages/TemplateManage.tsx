import { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import DataTable from '@/components/DataTable';
import { templates } from '@/data/mock';

interface Template {
  id: string;
  name: string;
  isDefault: boolean;
  status: string;
}

export default function TemplateManage() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 30,
    total: templates.length,
  });

  const columns = [
    {
      key: 'isDefault',
      title: '默认',
      render: (record: Template) => (
        <Checkbox checked={record.isDefault} />
      ),
    },
    { key: 'name', title: '模板名称' },
    { key: 'status', title: '状态' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="text-[#F56C4A] text-sm">编辑</button>
          <button className="text-[#999]">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <div className="mb-4">
        <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
          <Plus className="w-4 h-4 mr-1" />
          自定义报价单模板
        </Button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={templates}
        pagination={{
          ...pagination,
          onChange: (page) => setPagination({ ...pagination, current: page }),
          onPageSizeChange: (pageSize) =>
            setPagination({ ...pagination, pageSize, current: 1 }),
        }}
      />
    </div>
  );
}
