import { Card } from '@/components/ui/card';

interface StatItem {
  label: string;
  value: number | string;
}

interface StatCardProps {
  title: string;
  stats: StatItem[];
  action?: React.ReactNode;
}

export default function StatCard({ title, stats, action }: StatCardProps) {
  return (
    <Card className="p-5 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-medium text-[#333]">{title}</h3>
        {action}
      </div>
      <div className="flex items-center justify-between">
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex-1">
            <div className="text-3xl font-semibold text-[#333] mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-[#999]">{stat.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
