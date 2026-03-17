import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ChevronUp, ChevronDown, MoreHorizontal } from 'lucide-react';
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
import { quotes } from '@/data/mock';
import type { Quote } from '@/types';

export default function QuoteManage() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(true);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 30,
    total: quotes.length,
  });

  const columns = [
    { key: 'name', title: '报价名称' },
    { key: 'code', title: '报价单编号' },
    { key: 'round', title: '报价轮次' },
    { key: 'customer', title: '客户' },
    {
      key: 'totalAmount',
      title: '报价总金额',
      render: (record: Quote) => (
        <span>¥{record.totalAmount.toFixed(2)}</span>
      ),
    },
    {
      key: 'status',
      title: '状态',
      render: (record: Quote) => {
        const statusMap: Record<string, string> = {
          draft: '草稿',
          created: '已创建',
          accepted: '客户已接受',
          rejected: '客户已拒绝',
          following: '跟进中',
        };
        return <span>{statusMap[record.status]}</span>;
      },
    },
    { key: 'opportunity', title: '商机' },
    { key: 'creator', title: '报价人' },
    {
      key: 'action',
      title: '操作',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="text-[#F56C4A] text-sm">详情</button>
          <button className="text-[#F56C4A] text-sm">查看报价单</button>
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
      <div className="mb-4">
        <Button
          className="bg-[#F56C4A] hover:bg-[#E55A38] text-white"
          onClick={() => navigate('/quote/create')}
        >
          <Plus className="w-4 h-4 mr-1" />
          创建报价
        </Button>
      </div>

      {/* Filter Panel */}
      <div className="bg-white rounded-lg shadow-sm mb-4">
        <div className="p-4">
          {/* First Row */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666]">报价单</span>
              <div className="flex bg-[#f5f5f5] rounded">
                <button className="px-3 py-1.5 text-sm bg-white border border-[#e8e8e8] rounded">
                  不限
                </button>
                <button className="px-3 py-1.5 text-sm text-[#666]">我创建的</button>
                <button className="px-3 py-1.5 text-sm text-[#666]">其他人创建的</button>
                <button className="px-3 py-1.5 text-sm text-[#666]">自定义</button>
              </div>
            </div>
            <Input
              placeholder="请输入报价单名称/编号"
              className="w-64"
            />
            <button className="text-sm text-[#F56C4A] ml-auto">
              清空筛选
            </button>
          </div>

          {/* Second Row */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
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
            </div>
            <div className="flex items-center gap-2">
              <Input placeholder="开始日期" className="w-32" />
              <span className="text-[#999]">-</span>
              <Input placeholder="结束日期" className="w-32" />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666]">报价状态(多选)</span>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="不限" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">不限</SelectItem>
                  <SelectItem value="draft">草稿</SelectItem>
                  <SelectItem value="created">已创建</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666]">产品相关</span>
              <span className="w-4 h-4 rounded-full bg-[#999] text-white text-xs flex items-center justify-center">?</span>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="不限" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">不限</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666]">报价人</span>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="不限" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">不限</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666]">客户</span>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="不限" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">不限</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666]">商机</span>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="不限" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">不限</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-[#666]">排序方式</span>
              <Select defaultValue="time">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="time">修改时间</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="desc">
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">倒序</SelectItem>
                  <SelectItem value="asc">正序</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Fourth Row */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666]">邮件发送</span>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="不限" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">不限</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666]">报价总金额</span>
              <Input placeholder="最小值" className="w-24" />
              <span className="text-[#999]">-</span>
              <Input placeholder="最大值" className="w-24" />
            </div>
          </div>
        </div>

        {/* Collapse Button */}
        <button
          className="w-full flex items-center justify-center py-1 border-t border-[#e8e8e8] text-[#999] hover:bg-gray-50"
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={quotes}
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
