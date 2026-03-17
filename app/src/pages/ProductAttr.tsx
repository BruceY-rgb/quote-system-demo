import { useState } from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataTable from '@/components/DataTable';
import { productAttrs } from '@/data/mock';

interface ProductAttr {
  id: string;
  name: string;
  options: string;
  createTime: string;
  status: string;
}

export default function ProductAttr() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: productAttrs.length,
  });

  const columns = [
    { key: 'name', title: '属性名称' },
    { key: 'options', title: '属性选项' },
    { key: 'createTime', title: '创建时间' },
    {
      key: 'status',
      title: '状态',
      render: () => (
        <button className="text-[#F56C4A] text-sm">添加至产品</button>
      ),
    },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <button className="text-[#999]">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Left Sidebar */}
      <div className="w-56 bg-white border-r border-[#e8e8e8] p-4">
        <div className="space-y-2">
          <div className="py-2 px-3 text-[#F56C4A] bg-[#FFF5F2] rounded">
            属性名称
          </div>
          <div className="py-2 px-3 text-[#666] hover:bg-gray-50 rounded">
            版本
          </div>
          <div className="py-2 px-3 text-[#666] hover:bg-gray-50 rounded">
            规格
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-4">
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Plus className="w-4 h-4 mr-1" />
            自定义产品属性
          </Button>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={productAttrs}
          pagination={{
            ...pagination,
            onChange: (page) => setPagination({ ...pagination, current: page }),
            onPageSizeChange: (pageSize) =>
              setPagination({ ...pagination, pageSize, current: 1 }),
          }}
        />
      </div>
    </div>
  );
}
