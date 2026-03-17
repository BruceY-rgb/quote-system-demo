import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import DataTable from '@/components/DataTable';

interface EmailTemplate {
  id: string;
  name: string;
  isDefault: boolean;
  createTime: string;
}

export default function EmailSettings() {
  const [activeMenu, setActiveMenu] = useState('quote');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: 1,
  });

  const menus = [
    { key: 'quote', label: '报价单邮件模板' },
    { key: 'pricelist', label: '价目表邮件模板' },
    { key: 'server', label: '邮件服务器' },
  ];

  const data: EmailTemplate[] = [
    { id: '1', name: '默认模板', isDefault: true, createTime: '' },
  ];

  const columns = [
    { key: 'name', title: '模板名称' },
    {
      key: 'isDefault',
      title: '默认',
      render: (record: EmailTemplate) => (
        <Checkbox checked={record.isDefault} />
      ),
    },
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
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Left Sidebar */}
      <div className="w-56 bg-white border-r border-[#e8e8e8] p-4">
        <h3 className="font-medium text-[#333] mb-4">邮件设置</h3>
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
        <div className="mb-4">
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Plus className="w-4 h-4 mr-1" />
            创建邮件模板
          </Button>
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
    </div>
  );
}
