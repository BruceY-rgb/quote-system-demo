import { useState } from 'react';
import { Plus, Mail, Share2, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { priceLists } from '@/data/mock';

export default function PriceList() {
  const [pageSize, setPageSize] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Left Sidebar */}
      <div className="w-56 bg-white border-r border-[#e8e8e8] p-4">
        <div className="space-y-2">
          <div className="py-2 px-3 text-[#F56C4A] bg-[#FFF5F2] rounded">
            价目表管理
          </div>
          <div className="py-2 px-3 text-[#666] hover:bg-gray-50 rounded">
            我分享的价目表
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
            <Plus className="w-4 h-4 mr-1" />
            自定义价目表
          </Button>
        </div>

        {/* Filter */}
        <Card className="p-4 mb-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#666]">价目表</span>
              <div className="flex bg-[#f5f5f5] rounded">
                <button className="px-3 py-1.5 text-sm bg-white border border-[#e8e8e8] rounded">
                  不限
                </button>
                <button className="px-3 py-1.5 text-sm text-[#666]">我创建的</button>
                <button className="px-3 py-1.5 text-sm text-[#666]">其他人创建的</button>
                <button className="px-3 py-1.5 text-sm text-[#666]">自定义</button>
              </div>
              <Input placeholder="请输入价目表名称/编号" className="w-64" />
              <button className="text-sm text-[#F56C4A] ml-auto">清空筛选</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#666]">有效期至</span>
              <div className="flex bg-[#f5f5f5] rounded">
                <button className="px-3 py-1.5 text-sm bg-white border border-[#e8e8e8] rounded">
                  不限
                </button>
                <button className="px-3 py-1.5 text-sm text-[#666]">今天</button>
                <button className="px-3 py-1.5 text-sm text-[#666]">3天内</button>
                <button className="px-3 py-1.5 text-sm text-[#666]">一周内</button>
                <button className="px-3 py-1.5 text-sm text-[#666]">一个月内</button>
                <button className="px-3 py-1.5 text-sm text-[#666]">自定义</button>
              </div>
              <div className="flex items-center gap-2">
                <Input placeholder="开始日期" className="w-32" />
                <span className="text-[#999]">-</span>
                <Input placeholder="结束日期" className="w-32" />
              </div>
            </div>
          </div>
        </Card>

        {/* Price List Cards */}
        <div className="space-y-3">
          {priceLists.map((item) => (
            <Card key={item.id} className="p-4 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-medium text-[#333] mb-1">
                    {item.name}
                  </h4>
                  <div className="text-sm text-[#999]">
                    {item.createTime}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-[#999]">
                    <span className="flex items-center gap-1">
                      <span className="w-4 h-4 rounded-full border border-[#999] flex items-center justify-center text-xs">
                        ✓
                      </span>
                      {item.productCount}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-[#666] hover:text-[#F56C4A]">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="text-[#666] hover:text-[#F56C4A]">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="text-[#999]">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-4 mt-4">
          <span className="text-sm text-[#666]">共 {priceLists.length} 条</span>
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
            disabled={currentPage >= Math.ceil(priceLists.length / pageSize)}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &gt;
          </button>
          <span className="text-sm text-[#666]">前往</span>
          <Input type="number" className="w-14 h-8 text-center" defaultValue={1} />
          <span className="text-sm text-[#666]">页</span>
        </div>
      </div>
    </div>
  );
}
