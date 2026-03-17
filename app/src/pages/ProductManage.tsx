import { useState } from 'react';
import { Plus, Search, ChevronDown, Settings, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import DataTable from '@/components/DataTable';
import { products } from '@/data/mock';
import type { Product } from '@/types';

export default function ProductManage() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: products.length,
  });

  const columns = [
    { key: 'code', title: '产品编码' },
    { key: 'name', title: '产品名称' },
    { key: 'category', title: '产品分类' },
    {
      key: 'status',
      title: '产品状态',
      render: (record: Product) => (
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#52C41A]"></span>
          <span>{record.status === 'on' ? '已上架' : '已下架'}</span>
        </div>
      ),
    },
    { key: 'createTime', title: '创建时间' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="text-[#F56C4A] text-sm">详情</button>
          <button className="text-[#F56C4A] text-sm">下架</button>
          <button className="text-[#999]">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Left Sidebar */}
      <div className="w-56 bg-white border-r border-[#e8e8e8] p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-[#333]">产品分类</h3>
          <button className="text-[#F56C4A]">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 px-3 bg-[#FFF5F2] text-[#F56C4A] rounded">
            <span>产品</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between py-2 px-3 text-[#666] hover:bg-gray-50 rounded">
            <span>服务</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between py-2 px-3 text-[#666] hover:bg-gray-50 rounded">
            <span>插件</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <button className="flex items-center gap-2 text-[#666]">
            <Settings className="w-4 h-4" />
            设置
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Plus className="w-4 h-4 mr-1" />
            创建产品
          </Button>
          <div className="flex items-center gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="状态" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部</SelectItem>
                <SelectItem value="on">已上架</SelectItem>
                <SelectItem value="off">已下架</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="编码/产品名称/定价计划名称/计费明细项名称"
              className="w-80"
            />
            <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
              <Search className="w-4 h-4 mr-1" />
              搜索
            </Button>
          </div>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={products}
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
