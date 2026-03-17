import type { Quote, Customer, Opportunity, Product, Employee, Role, ApprovalFlow } from '@/types';

// 报价单数据
export const quotes: Quote[] = [
  {
    id: '1',
    name: '',
    code: 'Q-00000002',
    round: '第1轮',
    customer: '',
    totalAmount: 0,
    status: 'draft',
    opportunity: '',
    creator: 'Bruce',
    createTime: '2026-03-16 17:43:26',
  },
  {
    id: '2',
    name: '示例报价单',
    code: 'Q-00000001',
    round: '第1轮',
    customer: '璀璨未来科技有限公司',
    totalAmount: 8795.50,
    status: 'created',
    opportunity: '璀璨未来CPQ项目',
    creator: 'Bruce',
    createTime: '2026-03-16 17:43:26',
  },
];

// 客户数据
export const customers: Customer[] = [
  {
    id: '1',
    companyName: '璀璨未来科技有限公司',
    contactName: '璀璨未来',
    phone: '159****1276',
    createTime: '2026-03-16 17:43:26',
  },
];

// 商机数据
export const opportunities: Opportunity[] = [
  {
    id: '1',
    name: '璀璨未来CPQ项目',
    manager: 'Bruce',
    customerName: '璀璨未来科技有限公司',
    amount: 10000,
    stage: '初步接洽',
    status: true,
    creator: 'Bruce',
  },
];

// 产品数据
export const products: Product[] = [
  {
    id: '1',
    code: 'P-00000003',
    name: '短信包',
    category: '插件',
    status: 'on',
    createTime: '2026-03-16 17:43:26',
  },
  {
    id: '2',
    code: 'P-00000002',
    name: '数据迁移服务',
    category: '服务',
    status: 'on',
    createTime: '2026-03-16 17:43:26',
  },
  {
    id: '3',
    code: 'P-00000001',
    name: '订阅蜂 CPQ',
    category: '产品',
    status: 'on',
    createTime: '2026-03-16 17:43:26',
  },
];

// 员工数据
export const employees: Employee[] = [
  {
    id: '1',
    employeeNo: '',
    name: 'Bruce',
    gender: '',
    phone: '159****1276',
    department: '羊了个羊',
    position: '',
    role: '超级管理员',
    status: '在职',
  },
];

// 角色数据
export const roles: Role[] = [
  {
    id: '1',
    name: '超级管理员',
    description: '拥有全部权限',
    createTime: '2026-03-16 17:43:26',
  },
  {
    id: '2',
    name: '默认角色',
    description: '用于租户邀请赋予的默认权限',
    createTime: '2026-03-16 17:43:26',
  },
];

// 审批流程数据
export const approvalFlows: ApprovalFlow[] = [
  {
    id: '1',
    name: '报价单流程',
    status: true,
    createTime: '2026-03-16 17:43:26',
    version: 1,
  },
];

// 图表数据
export const chartData = [
  { month: '2025-9', value: 0 },
  { month: '2025-10', value: 0 },
  { month: '2025-11', value: 0 },
  { month: '2025-12', value: 0 },
  { month: '1月', value: 0 },
  { month: '2月', value: 0 },
  { month: '本月', value: 1 },
];

export const amountChartData = [
  { month: '2025-9', value: 0 },
  { month: '2025-10', value: 0 },
  { month: '2025-11', value: 0 },
  { month: '2025-12', value: 0 },
  { month: '1月', value: 0 },
  { month: '2月', value: 0 },
  { month: '本月', value: 8795.50 },
];

// 模板数据
export const templates = [
  { id: '1', name: '主题1', isDefault: true, status: '生效' },
  { id: '2', name: '主题2', isDefault: false, status: '生效' },
  { id: '3', name: '主题3', isDefault: false, status: '生效' },
  { id: '4', name: '主题4', isDefault: false, status: '生效' },
];

// 产品属性数据
export const productAttrs = [
  { id: '1', name: '版本', options: '专业版', createTime: '2026-03-16 17:43:26', status: 'on' },
  { id: '2', name: '规格', options: '5000', createTime: '2026-03-16 17:43:26', status: 'on' },
];

// 价目表数据
export const priceLists = [
  { id: '1', name: '标准价目表', createTime: '2026-03-16 17:43:26', productCount: 0 },
];
