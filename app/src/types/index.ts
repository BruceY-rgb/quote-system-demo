// 报价单
export interface Quote {
  id: string;
  name: string;
  code: string;
  round: string;
  customer: string;
  totalAmount: number;
  status: 'draft' | 'created' | 'accepted' | 'rejected' | 'following';
  opportunity: string;
  creator: string;
  createTime: string;
}

// 客户
export interface Customer {
  id: string;
  companyName: string;
  contactName: string;
  phone: string;
  createTime: string;
}

// 商机
export interface Opportunity {
  id: string;
  name: string;
  manager: string;
  customerName: string;
  amount: number;
  stage: string;
  status: boolean;
  creator: string;
}

// 产品
export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  status: 'on' | 'off';
  createTime: string;
}

// 用户
export interface User {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

// 导航菜单项
export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

// 表格列定义
export interface TableColumn<T> {
  key: string;
  title: string;
  render?: (record: T) => React.ReactNode;
}

// 分页信息
export interface Pagination {
  current: number;
  pageSize: number;
  total: number;
}

// 审批流程
export interface ApprovalFlow {
  id: string;
  name: string;
  status: boolean;
  createTime: string;
  version: number;
}

// 角色
export interface Role {
  id: string;
  name: string;
  description: string;
  createTime: string;
}

// 员工
export interface Employee {
  id: string;
  employeeNo: string;
  name: string;
  gender: string;
  phone: string;
  department: string;
  position: string;
  role: string;
  status: string;
}
