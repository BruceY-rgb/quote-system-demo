import { useState } from 'react';
import { Plus, Upload, Search, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import DataTable from '@/components/DataTable';
import { opportunities } from '@/data/mock';
import type { Opportunity } from '@/types';

export default function OpportunityManage() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 30,
    total: opportunities.length,
  });

  const columns = [
    { key: 'name', title: '机会名称' },
    { key: 'manager', title: '销售经理' },
    { key: 'customerName', title: '客户名称' },
    {
      key: 'amount',
      title: '销售金额',
      render: (record: Opportunity) => (
        <span>¥{record.amount.toLocaleString()}.00</span>
      ),
    },
    { key: 'stage', title: '销售阶段' },
    {
      key: 'status',
      title: '状态',
      render: (record: Opportunity) => (
        <Switch checked={record.status} className="data-[state=checked]:bg-[#F56C4A]" />
      ),
    },
    { key: 'creator', title: '创建人' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="text-[#F56C4A] text-sm">详情</button>
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
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Plus className="w-4 h-4 mr-1" />
            创建销售机会
          </Button>
          <Button variant="outline" className="border-[#F56C4A] text-[#F56C4A]">
            <Upload className="w-4 h-4 mr-1" />
            导入销售机会
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Input
            placeholder="输入客户名称搜索"
            className="w-64"
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
        data={opportunities}
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
