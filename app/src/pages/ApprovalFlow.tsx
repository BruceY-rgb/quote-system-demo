import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import DataTable from '@/components/DataTable';
import { approvalFlows } from '@/data/mock';
import type { ApprovalFlow as ApprovalFlowType } from '@/types';

export default function ApprovalFlow() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: approvalFlows.length,
  });

  const columns = [
    { key: 'name', title: '流程名称' },
    {
      key: 'status',
      title: '状态',
      render: (record: ApprovalFlowType) => (
        <div className="flex items-center gap-2">
          <Switch checked={record.status} className="data-[state=checked]:bg-[#F56C4A]" />
          <span>{record.status ? '已发布' : '未发布'}</span>
        </div>
      ),
    },
    { key: 'createTime', title: '创建时间' },
    { key: 'version', title: '版本' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <button className="text-[#F56C4A] text-sm">删除</button>
      ),
    },
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
          <Plus className="w-4 h-4 mr-1" />
          创建审批流程
        </Button>
        <div className="flex items-center gap-3">
          <Input placeholder="流程名称" className="w-64" />
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Search className="w-4 h-4 mr-1" />
            搜索
          </Button>
        </div>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={approvalFlows}
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
