import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Settings, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const steps = [
  '报价基本信息',
  '客户信息',
  '公司信息',
  '产品明细',
  '预览',
];

export default function QuoteCreate() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="bg-white min-h-screen">
      {/* Step Bar */}
      <div className="border-b border-[#e8e8e8] px-6 py-4">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= currentStep
                      ? 'bg-[#F56C4A] text-white'
                      : 'bg-[#f0f0f0] text-[#999]'
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`text-xs mt-2 ${
                    index <= currentStep ? 'text-[#F56C4A]' : 'text-[#999]'
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-24 h-0.5 mx-2 ${
                    index < currentStep ? 'bg-[#F56C4A]' : 'bg-[#e8e8e8]'
                  }`}
                />
              )}
            </div>
          ))}
          <Button variant="ghost" size="icon" className="ml-4">
            <Settings className="w-5 h-5 text-[#666]" />
          </Button>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex">
        {/* Left Form */}
        <div className="flex-1 p-6 max-w-3xl">
          <div className="space-y-6">
            {/* Quote Template */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">
                <span className="text-[#F56C4A]">*</span> 报价单模板:
              </Label>
              <Select defaultValue="theme1">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="theme1">主题1</SelectItem>
                  <SelectItem value="theme2">主题2</SelectItem>
                  <SelectItem value="theme3">主题3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Customer Selection */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">
                <span className="text-[#F56C4A]">*</span> 选择报价客户:
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer1">璀璨未来科技有限公司</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Final Customer */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">
                <span className="text-[#F56C4A]">*</span> 选择最终客户:
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer1">璀璨未来科技有限公司</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Price List */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">价目表:</Label>
              <Select defaultValue="default">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="请选择" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">默认报价单</SelectItem>
                  <SelectItem value="standard">标准价目表</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sales Opportunity */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">销售机会:</Label>
              <Input placeholder="请输入商机名称" />
              <button className="text-sm text-[#F56C4A]">+ 设置可访问商机</button>
            </div>

            {/* Quote Name */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">
                <span className="text-[#F56C4A]">*</span> 报价单名称:
              </Label>
              <Input placeholder="请输入报价单名称" />
            </div>

            {/* Expiry Date & Owner */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm text-[#666]">
                  <span className="text-[#F56C4A]">*</span> 失效日期:
                </Label>
                <Input type="date" defaultValue="2026-04-16" />
                <button className="text-sm text-[#F56C4A]">+ 添加默认天数</button>
              </div>
              <div className="space-y-2">
                <Label className="text-sm text-[#666]">报价所有人:</Label>
                <Input defaultValue="Bruce" readOnly />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">附加备注:</Label>
              <div className="border border-[#e8e8e8] rounded">
                <div className="flex items-center gap-2 p-2 border-b border-[#e8e8e8] bg-[#fafafa]">
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">正文</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">B</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded italic">I</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded underline">U</button>
                  <span className="text-[#e8e8e8]">|</span>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">默认字号</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">默认字体</button>
                </div>
                <Textarea
                  placeholder="请输入内容..."
                  className="border-0 min-h-[100px] resize-none"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">条款协议:</Label>
              <div className="border border-[#e8e8e8] rounded">
                <div className="flex items-center gap-2 p-2 border-b border-[#e8e8e8] bg-[#fafafa]">
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">正文</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">B</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded italic">I</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded underline">U</button>
                </div>
                <Textarea
                  placeholder="请输入内容..."
                  className="border-0 min-h-[100px] resize-none"
                />
              </div>
            </div>

            {/* Internal Info */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666]">内部信息:</Label>
              <div className="border border-[#e8e8e8] rounded">
                <div className="flex items-center gap-2 p-2 border-b border-[#e8e8e8] bg-[#fafafa]">
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">正文</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded">B</button>
                  <button className="text-sm px-2 py-1 hover:bg-gray-200 rounded italic">I</button>
                </div>
                <Textarea
                  placeholder="请输入内容..."
                  className="border-0 min-h-[100px] resize-none"
                />
              </div>
            </div>

            {/* Attachments */}
            <div className="space-y-2">
              <Label className="text-sm text-[#666] flex items-center gap-1">
                报价单附件
                <span className="w-4 h-4 rounded-full bg-[#999] text-white text-xs flex items-center justify-center">?</span>
              </Label>
              <div className="border border-dashed border-[#d9d9d9] rounded-lg p-8 flex flex-col items-center justify-center">
                <Upload className="w-8 h-8 text-[#999] mb-2" />
                <span className="text-sm text-[#999]">点击或拖拽文件到此处上传</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Preview */}
        <div className="w-[400px] bg-[#fafafa] p-6 border-l border-[#e8e8e8]">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-[#333]">默认报价单</h3>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#999]">To</span>
                <span className="text-[#999]">From</span>
              </div>
              <div className="text-right">
                <div>羊了个羊</div>
                <div className="text-[#999] text-xs mt-1">报价人: Bruce</div>
                <div className="text-[#999] text-xs">1038794832@qq.com</div>
                <div className="text-[#999] text-xs">159****1276</div>
              </div>
              <div className="border-t border-[#e8e8e8] pt-4">
                <div className="text-xs text-[#999]">
                  <div>报价单编码: Q-00000002</div>
                  <div>报价单创建日期: 2026-03-16</div>
                  <div>报价单有效期至: 2026-04-16</div>
                </div>
              </div>
              <table className="w-full text-xs border border-[#e8e8e8]">
                <thead className="bg-[#1E2A3A] text-white">
                  <tr>
                    <th className="p-2 text-left">产品&描述</th>
                    <th className="p-2 text-left">产品定价计划</th>
                    <th className="p-2 text-left">产品明细项</th>
                    <th className="p-2 text-right">价格</th>
                    <th className="p-2 text-right">数量</th>
                    <th className="p-2 text-right">单位</th>
                    <th className="p-2 text-right">金额</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-[#999]">
                      暂无数据
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end gap-8 text-sm">
                <span>小计</span>
                <span>¥0.00</span>
              </div>
              <div className="flex justify-end gap-8 text-sm font-medium">
                <span>总计</span>
                <span>¥0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e8e8e8] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-1 text-sm text-[#F56C4A]"
            onClick={() => navigate('/quote/manage')}
          >
            <ChevronLeft className="w-4 h-4" />
            返回
          </button>
          <button
            className="text-sm text-[#666]"
            onClick={() => navigate('/')}
          >
            关闭
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">保存</Button>
          <Button
            className="bg-[#F56C4A] hover:bg-[#E55A38] text-white"
            onClick={() => setCurrentStep(Math.min(currentStep + 1, steps.length - 1))}
          >
            下一步
          </Button>
        </div>
      </div>
    </div>
  );
}
