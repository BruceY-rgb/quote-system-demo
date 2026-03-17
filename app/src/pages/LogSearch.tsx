import { useState } from 'react';
import { Search, RotateCcw } from 'lucide-react';
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

interface LogRecord {
  id: string;
  time: string;
  user: string;
  object: string;
  content: string;
  more: string;
}

export default function LogSearch() {
  const [activeMenu, setActiveMenu] = useState('audit');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 30,
    total: 0,
  });

  const menus = [
    { key: 'audit', label: '审计日志' },
    { key: 'event', label: '事件日志检索' },
    { key: 'push', label: '消息推送日志检索' },
  ];

  const data: LogRecord[] = [];

  const columns = [
    { key: 'index', title: '序号' },
    { key: 'time', title: '时间' },
    { key: 'user', title: '用户' },
    { key: 'object', title: '操作对象' },
    { key: 'content', title: '操作内容' },
    { key: 'more', title: '更多信息' },
  ];

  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Left Sidebar */}
      <div className="w-56 bg-white border-r border-[#e8e8e8] p-4">
        <h3 className="font-medium text-[#333] mb-4">日志检索</h3>
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
        {activeMenu === 'audit' && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-[#333] mb-1">
                审计日志检索
              </h3>
              <p className="text-sm text-[#999]">
                可查询近两年内系统操作日志
              </p>
            </div>

            {/* Filter Form */}
            <div className="bg-white rounded-lg p-6 mb-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-[#666]">
                    <span className="text-[#F56C4A]">*</span> 起止时间段
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="datetime-local"
                      defaultValue="2026-02-14T21:47:00"
                      className="flex-1"
                    />
                    <span className="text-[#999]">至</span>
                    <Input
                      type="datetime-local"
                      defaultValue="2026-03-16T21:47:00"
                      className="flex-1"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <button className="text-[#666] hover:text-[#F56C4A]">
                      昨天
                    </button>
                    <button className="text-[#666] hover:text-[#F56C4A]">
                      过去七天
                    </button>
                    <button className="text-[#F56C4A]">过去30天</button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#666]">操作对象</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#666]">用户</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#666]">操作内容</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <Button className="bg-[#F56C4A] hover:bg-[#E55A38] text-white">
                  <Search className="w-4 h-4 mr-1" />
                  查询
                </Button>
                <Button variant="outline">
                  <RotateCcw className="w-4 h-4 mr-1" />
                  重置
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
          </>
        )}
        {activeMenu !== 'audit' && (
          <div className="text-center py-16 text-[#999]">暂无数据</div>
        )}
      </div>
    </div>
  );
}
