import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DataTable from '@/components/DataTable';
import { customers } from '@/data/mock';

interface AssignRecord {
  id: string;
  companyName: string;
  creditCode: string;
  address: string;
  salesManager: string;
  status: string;
}

export default function CustomerAssign() {
  const [activeTab, setActiveTab] = useState('assign');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: customers.length,
  });

  const tabs = [
    { key: 'assign', label: '分配客户' },
    { key: 'my', label: '我的客户' },
    { key: 'resigned', label: '离职客户' },
    { key: 'all', label: '全部' },
  ];

  const data: AssignRecord[] = customers.map((c) => ({
    id: c.id,
    companyName: c.companyName,
    creditCode: '91110108MA7H9PF91Y',
    address: '北京市海淀区璀璨路未来园区888号',
    salesManager: 'Bruce',
    status: '在职',
  }));

  const columns = [
    { key: 'companyName', title: '公司名称' },
    { key: 'creditCode', title: '公司社会统一信用代码' },
    { key: 'address', title: '公司地址' },
    { key: 'salesManager', title: '销售经理' },
    {
      key: 'status',
      title: '状态',
      render: (record: AssignRecord) => (
        <span className="text-[#52C41A]">{record.status}</span>
      ),
    },
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
          <Input placeholder="输入公司名称搜索" className="w-64" />
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
      />
    </div>
  );
}
