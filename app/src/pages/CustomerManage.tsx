import { useState } from 'react';
import { Plus, Upload, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { customers } from '@/data/mock';

export default function CustomerManage() {
  const [pageSize, setPageSize] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Plus className="w-4 h-4 mr-1" />
            创建客户
          </Button>
          <Button variant="outline" className="border-[#F56C4A] text-[#F56C4A]">
            <Upload className="w-4 h-4 mr-1" />
            导入客户
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Input
            placeholder="输入公司名称搜索"
            className="w-64"
          />
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Search className="w-4 h-4 mr-1" />
            搜索
          </Button>
        </div>
      </div>

      {/* Customer Cards */}
      <div className="space-y-3">
        {customers.map((customer) => (
          <Card key={customer.id} className="p-4 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-medium text-[#333] mb-2">
                  {customer.companyName}
                </h4>
                <div className="flex items-center gap-4 text-sm text-[#666]">
                  <span>{customer.contactName}</span>
                  <span>{customer.phone}</span>
                </div>
                <div className="text-sm text-[#999] mt-2">
                  创建时间: {customer.createTime}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-4 mt-4">
        <span className="text-sm text-[#666]">共 {customers.length} 条</span>
        <select
          className="h-8 px-2 border border-[#e8e8e8] rounded text-sm"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value={10}>10条/页</option>
          <option value={20}>20条/页</option>
          <option value={50}>50条/页</option>
        </select>
        <button
          className="h-8 px-3 border border-[#e8e8e8] rounded text-sm disabled:opacity-50"
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt;
        </button>
        <span className="text-sm text-[#F56C4A] font-medium">{currentPage}</span>
        <button
          className="h-8 px-3 border border-[#e8e8e8] rounded text-sm disabled:opacity-50"
          disabled={currentPage >= Math.ceil(customers.length / pageSize)}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;
        </button>
        <span className="text-sm text-[#666]">前往</span>
        <Input
          type="number"
          className="w-14 h-8 text-center"
          defaultValue={1}
        />
        <span className="text-sm text-[#666]">页</span>
      </div>
    </div>
  );
}
