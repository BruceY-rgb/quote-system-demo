import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DataTable from '@/components/DataTable';

interface DictItem {
  id: string;
  name: string;
  status: string;
}

export default function DataDict() {
  const [activeMenu, setActiveMenu] = useState('customer');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: 0,
  });

  const menus = [
    { key: 'customer', label: '客户分类' },
    { key: 'unit', label: '数量单位' },
    { key: 'group', label: '报价分组' },
  ];

  const data: DictItem[] = [];

  const columns = [
    { key: 'name', title: '名称' },
    { key: 'status', title: '状态' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <button className="text-[#F56C4A] text-sm">编辑</button>
      ),
    },
  ];

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Left Sidebar */}
      <div className="w-56 bg-white border-r border-[#e8e8e8] p-4">
        <h3 className="font-medium text-[#333] mb-4">数据字典</h3>
        <div className="space-y-2">
          {menus.map((menu) => (
            <div
              key={menu.key}
              className={`py-2 px-3 rounded cursor-pointer ${
                activeMenu === menu.key
                  ? 'text-[#F56C4A] bg-[#FFF5F2]'
                  : 'text-[#666] hover:bg-gray-50'
              }`}
              onClick={() => setActiveMenu(menu.key)}
            >
              {menu.label}
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">
            {menus.find((m) => m.key === activeMenu)?.label}
          </h3>
          <div className="flex items-center gap-3">
            <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
              <Plus className="w-4 h-4 mr-1" />
              创建{menus.find((m) => m.key === activeMenu)?.label}
            </Button>
            <Input placeholder="可输入字典名称" className="w-64" />
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
    </div>
  );
}
