import { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DataTable from '@/components/DataTable';

interface ApprovalRecord {
  id: string;
  taskName: string;
  approvalType: string;
  creditCode: string;
  customerCompany: string;
  category: string;
  address: string;
  creator: string;
  createTime: string;
  salesManager: string;
  status: string;
}

export default function QuoteApproval() {
  const [activeTab, setActiveTab] = useState('todo');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 30,
    total: 0,
  });

  const tabs = [
    { key: 'todo', label: '待办事项' },
    { key: 'done', label: '已办事项' },
    { key: 'my', label: '我发起的' },
    { key: 'cc', label: '抄送我的' },
    { key: 'all', label: '全部' },
  ];

  const data: ApprovalRecord[] = [];

  const columns = [
    { key: 'taskName', title: '任务名称' },
    { key: 'approvalType', title: '审批类型' },
    { key: 'creditCode', title: '公司社会统一信用代码' },
    { key: 'customerCompany', title: '客户公司' },
    { key: 'category', title: '所属分类' },
    { key: 'address', title: '公司地址' },
    { key: 'creator', title: '创建人名称' },
    { key: 'createTime', title: '创建时间' },
    { key: 'salesManager', title: '销售经理' },
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
    { key: 'status', title: '状态' },
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Tabs */}
      <div className="flex items-center gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 text-sm rounded ${
              activeTab === tab.key
                ? 'bg-[#F56C4A] text-white'
                : 'bg-white text-[#666] hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
        <div className="flex items-center gap-3 ml-auto">
          <Input placeholder="请输入任务名称" className="w-64" />
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Search className="w-4 h-4 mr-1" />
            搜索
          </Button>
        </div>
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
