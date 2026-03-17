import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

interface SettingItem {
  label: string;
  enabled: boolean;
}

export default function BasicSettings() {
  const [activeTab, setActiveTab] = useState('pricing');
  const [settings, setSettings] = useState<Record<string, SettingItem[]>>({
    pricing: [
      { label: '一次性', enabled: true },
      { label: '年', enabled: true },
      { label: '半年', enabled: true },
      { label: '季', enabled: true },
      { label: '月', enabled: true },
    ],
  });

  const tabs = [
    { key: 'pricing', label: '定价周期设置' },
    { key: 'event', label: '事件通知设置' },
    { key: 'approval', label: '审批设置' },
    { key: 'subscribe', label: '事件订阅设置' },
    { key: 'push', label: '消息推送设置' },
    { key: 'feature', label: '功能开关' },
  ];

  const toggleSetting = (tab: string, index: number) => {
    setSettings((prev) => ({
      ...prev,
      [tab]: prev[tab].map((item, i) =>
        i === index ? { ...item, enabled: !item.enabled } : item
      ),
    }));
  };

  return (
    <div className="p-6 bg-[#f5f5f5] min-h-screen">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 bg-white rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 text-sm rounded ${
              activeTab === tab.key
                ? 'bg-[#F56C4A] text-white'
                : 'text-[#666] hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-6">
        {activeTab === 'pricing' && (
          <div className="space-y-4">
            {settings.pricing?.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-3 border-b border-[#f0f0f0] last:border-0"
              >
                <span className="text-sm text-[#333]">{item.label}</span>
                <Switch
                  checked={item.enabled}
                  onCheckedChange={() => toggleSetting('pricing', index)}
                  className="data-[state=checked]:bg-[#F56C4A]"
                />
              </div>
            ))}
          </div>
        )}
        {activeTab !== 'pricing' && (
          <div className="text-center py-16 text-[#999]">
            暂无配置项
          </div>
        )}
      </div>
    </div>
  );
}
