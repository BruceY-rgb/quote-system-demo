import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataTable from '@/components/DataTable';
import { roles } from '@/data/mock';
// Role type not needed in this file

export default function RolePermission() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: roles.length,
  });

  const columns = [
    { key: 'name', title: '角色名称' },
    { key: 'description', title: '角色描述' },
    { key: 'createTime', title: '创建时间' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <button className="text-[#F56C4A] text-sm">编辑</button>
      ),
    },
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <div className="mb-4">
        <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
          <Plus className="w-4 h-4 mr-1" />
          创建角色
        </Button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={roles}
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
