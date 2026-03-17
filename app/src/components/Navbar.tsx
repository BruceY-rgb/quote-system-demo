import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Bell, HelpCircle, Heart } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: '工作台', path: '/' },
  {
    label: '客户',
    children: [
      { label: '客户管理', path: '/customer/manage' },
      { label: '商机管理', path: '/customer/opportunity' },
      { label: '数据导入', path: '/customer/import' },
      { label: '数据导出', path: '/customer/export' },
    ],
  },
  {
    label: '产品目录',
    children: [
      { label: '产品', path: '/product/manage' },
      { label: '产品属性', path: '/product/attr' },
      { label: '价目表', path: '/product/pricelist' },
    ],
  },
  {
    label: '报价',
    children: [
      { label: '报价管理', path: '/quote/manage' },
      { label: '模板管理', path: '/quote/template' },
    ],
  },
  {
    label: '运营',
    children: [
      { label: '报价审批', path: '/operation/approval' },
      { label: '客户分配', path: '/operation/assign' },
      { label: '通知公告', path: '/operation/notice' },
    ],
  },
  {
    label: '配置',
    children: [
      { label: '组织架构', path: '/config/organization' },
      { label: '角色权限', path: '/config/role' },
      { label: '数据字典', path: '/config/datadict' },
      { label: '审批流程', path: '/config/approvalflow' },
      { label: '基础设置', path: '/config/basic' },
      { label: '邮件设置', path: '/config/email' },
      { label: '日志检索', path: '/config/log' },
    ],
  },
];

export default function Navbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const isChildActive = (children?: { label: string; path: string }[]) => {
    if (!children) return false;
    return children.some((child) => location.pathname === child.path);
  };

  return (
    <nav className="h-14 bg-[#1E2A3A] flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-[#F56C4A] text-2xl font-bold flex items-center">
            <svg className="w-8 h-8 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.5 2 5.5 5 5.5 8.5c0 2.5 1.5 4.5 3.5 5.5v2c0 1.5-1 2.5-2 3h11c-1-.5-2-1.5-2-3v-2c2-.5 3.5-2.5 3.5-5.5C19.5 5 16.5 2 12 2zm-1 15c0 .5.5 1 1 1s1-.5 1-1v-1h-2v1zm-3-5c0-1.5 1-2.5 2-3V8c0-.5.5-1 1-1s1 .5 1 1v1c1 .5 2 1.5 2 3h-6z"/>
            </svg>
            订阅蜂
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <DropdownMenu
                open={openDropdown === item.label}
                onOpenChange={(open) => setOpenDropdown(open ? item.label : null)}
              >
                <DropdownMenuTrigger asChild>
                  <button
                    className={`px-4 h-14 flex items-center gap-1 text-sm text-white hover:bg-white/10 transition-colors ${
                      isChildActive(item.children) ? 'border-b-2 border-white' : ''
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="bg-[#1E2A3A] border-none min-w-[160px]"
                  align="start"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.path} asChild>
                      <Link
                        to={child.path}
                        className="text-white hover:bg-white/10 cursor-pointer focus:bg-white/10 focus:text-white"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to={item.path || '/'}
                className={`px-4 h-14 flex items-center text-sm text-white hover:bg-white/10 transition-colors ${
                  isActive(item.path) ? 'border-b-2 border-white' : ''
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Version Badge */}
        <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm">
          <Heart className="w-4 h-4 text-[#F56C4A] fill-[#F56C4A]" />
          <span className="text-[#333]">标准版</span>
        </div>

        {/* Notification */}
        <button className="p-2 text-white hover:bg-white/10 rounded-full">
          <Bell className="w-5 h-5" />
        </button>

        {/* Help */}
        <button className="p-2 text-white hover:bg-white/10 rounded-full">
          <HelpCircle className="w-5 h-5" />
        </button>

        {/* User */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 text-white hover:bg-white/10 rounded-full px-2 py-1">
              <Avatar className="w-8 h-8 bg-[#4A5568]">
                <AvatarFallback className="bg-[#4A5568] text-white text-sm">
                  B
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">Bruce</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white" align="end">
            <DropdownMenuItem className="cursor-pointer">
              个人设置
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              退出登录
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
