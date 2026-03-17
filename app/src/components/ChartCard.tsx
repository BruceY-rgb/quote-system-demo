import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '@/components/ui/button';

interface ChartCardProps {
  title: string;
  data: { month: string; value: number }[];
  yAxisFormatter?: (value: number) => string;
  showDownload?: boolean;
}

export default function ChartCard({
  title,
  data,
  yAxisFormatter,
  showDownload = true,
}: ChartCardProps) {
  return (
    <Card className="p-5 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium text-[#333]">{title}</h3>
        {showDownload && (
          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#999]">
            <Download className="w-4 h-4" />
          </Button>
        )}
      </div>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={{ stroke: '#e8e8e8' }}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 12 }}
              tickFormatter={yAxisFormatter}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e8e8e8',
                borderRadius: '4px',
                padding: '8px 12px',
              }}
              formatter={(value: number) => [value, '']}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#F56C4A"
              strokeWidth={2}
              dot={{ fill: '#F56C4A', strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: '#F56C4A' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
