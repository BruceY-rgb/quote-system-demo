import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FileCheck, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import StatCard from '@/components/StatCard';
import ChartCard from '@/components/ChartCard';
import { chartData, amountChartData } from '@/data/mock';

export default function Dashboard() {
  const navigate = useNavigate();
  const [timeRange1, setTimeRange1] = useState<'week' | 'month'>('month');
  const [timeRange2, setTimeRange2] = useState<'month' | 'year' | '3months' | '6months' | '12months'>('year');

  const quoteStats = [
    { label: '全部报价单', value: 1 },
    { label: '客户已接受', value: 0 },
    { label: '客户已拒绝', value: 0 },
    { label: '跟进中', value: 1 },
    { label: '草稿', value: 0 },
  ];

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* First Row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* My Quotes Card */}
        <div className="col-span-2">
          <StatCard
            title="我的报价"
            stats={quoteStats}
            action={
              <Button
                className="bg-[#F56C4A] hover:bg-[#E55A38] text-white text-sm"
                onClick={() => navigate('/quote/create')}
              >
                <Plus className="w-4 h-4 mr-1" />
                创建报价单
              </Button>
            }
          />
        </div>

        {/* Announcement Card */}
        <Card className="p-5 bg-white rounded-lg shadow-sm">
          <h3 className="text-base font-medium text-[#333] mb-4">公告提醒</h3>
          <p className="text-sm text-[#999]">暂无新公告</p>
        </Card>
      </div>

      {/* Second Row - My Collaboration */}
      <Card className="p-5 bg-white rounded-lg shadow-sm mb-4">
        <h3 className="text-base font-medium text-[#333] mb-4">我的协同</h3>
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFF5F2] rounded-lg flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-[#F56C4A]" />
            </div>
            <div>
              <div className="text-sm text-[#666]">需要我审批</div>
              <div className="text-2xl font-semibold text-[#333]">0</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFF5F2] rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-[#F56C4A]" />
            </div>
            <div>
              <div className="text-sm text-[#666]">需要我协同</div>
              <div className="text-2xl font-semibold text-[#333]">0</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Third Row - Charts */}
      <div className="grid grid-cols-2 gap-4">
        {/* Quote Count Chart */}
        <div>
          {/* Time Range Tabs */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex bg-white rounded overflow-hidden">
              <button
                className={`px-6 py-2 text-sm ${
                  timeRange1 === 'week'
                    ? 'bg-[#F56C4A] text-white'
                    : 'text-[#666] hover:bg-gray-50'
                }`}
                onClick={() => setTimeRange1('week')}
              >
                周
              </button>
              <button
                className={`px-6 py-2 text-sm ${
                  timeRange1 === 'month'
                    ? 'bg-[#F56C4A] text-white'
                    : 'text-[#666] hover:bg-gray-50'
                }`}
                onClick={() => setTimeRange1('month')}
              >
                月
              </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#666]">
              <Calendar className="w-4 h-4" />
              <span>2025-03-16</span>
              <span>至</span>
              <span>2026-03-16</span>
            </div>
          </div>
          <ChartCard title="报价单数" data={chartData} />
        </div>

        {/* Quote Amount Chart */}
        <div>
          {/* Time Range Tabs */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex bg-white rounded overflow-hidden">
              {(['month', 'year', '3months', '6months', '12months'] as const).map(
                (range) => (
                  <button
                    key={range}
                    className={`px-3 py-2 text-sm ${
                      timeRange2 === range
                        ? 'bg-[#F56C4A] text-white'
                        : 'text-[#666] hover:bg-gray-50'
                    }`}
                    onClick={() => setTimeRange2(range)}
                  >
                    {range === 'month'
                      ? '本月'
                      : range === 'year'
                      ? '今年'
                      : range === '3months'
                      ? '3个月'
                      : range === '6months'
                      ? '6个月'
                      : '12个月'}
                  </button>
                )
              )}
            </div>
          </div>
          <ChartCard
            title="报价单总金额"
            data={amountChartData}
            yAxisFormatter={(value) => `¥${value.toLocaleString()}`}
          />
        </div>
      </div>
    </div>
  );
}
