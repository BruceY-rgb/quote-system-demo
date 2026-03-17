import { useState } from 'react';
import { Plus, Upload, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataTable from '@/components/DataTable';
import { employees } from '@/data/mock';

export default function Organization() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 50,
    total: employees.length,
  });

  const columns = [
    { key: 'employeeNo', title: '工号' },
    { key: 'name', title: '姓名' },
    { key: 'gender', title: '性别' },
    { key: 'phone', title: '手机号' },
    { key: 'department', title: '所属部门' },
    { key: 'position', title: '职位' },
    { key: 'role', title: '角色' },
    { key: 'status', title: '状态' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <button className="text-[#F56C4A] text-sm">详情</button>
      ),
    },
  ];

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-[#e8e8e8] p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-[#333]">羊了个羊</h3>
          <button className="text-[#F56C4A] text-sm">切换组织</button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 py-2 px-3 text-[#F56C4A] bg-[#FFF5F2] rounded">
            <span className="w-2 h-2 rounded-full bg-[#F56C4A]"></span>
            <span>羊了个羊</span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="outline" className="w-full border-[#F56C4A] text-[#F56C4A]">
            退出当前组织
          </Button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Plus className="w-4 h-4 mr-1" />
            添加员工
          </Button>
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-1" />
            批量导入员工
          </Button>
          <Button variant="outline" className="ml-auto">
            <Edit className="w-4 h-4 mr-1" />
            启动编辑
          </Button>
        </div>

        {/* Table */}
        <DataTable
          columns={columns}
          data={employees}
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
