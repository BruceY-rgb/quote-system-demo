# 订阅蜂 - 技术规格文档

## 1. 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui
- **图表**: Recharts
- **路由**: React Router DOM
- **状态管理**: React Context + useState

## 2. 项目结构

```
/mnt/okcomputer/output/app/
├── src/
│   ├── components/          # 公共组件
│   │   ├── Navbar.tsx       # 顶部导航栏
│   │   ├── Sidebar.tsx      # 侧边栏
│   │   ├── DataTable.tsx    # 数据表格
│   │   ├── FilterPanel.tsx  # 筛选面板
│   │   ├── StatCard.tsx     # 统计卡片
│   │   └── ChartCard.tsx    # 图表卡片
│   ├── pages/               # 页面组件
│   │   ├── Dashboard.tsx    # 工作台
│   │   ├── QuoteCreate.tsx  # 创建报价单
│   │   ├── QuoteManage.tsx  # 报价管理
│   │   ├── CustomerManage.tsx # 客户管理
│   │   ├── OpportunityManage.tsx # 商机管理
│   │   ├── DataImport.tsx   # 数据导入
│   │   ├── DataExport.tsx   # 数据导出
│   │   ├── ProductManage.tsx # 产品管理
│   │   ├── ProductAttr.tsx  # 产品属性
│   │   ├── PriceList.tsx    # 价目表
│   │   ├── TemplateManage.tsx # 模板管理
│   │   ├── QuoteApproval.tsx # 报价审批
│   │   ├── CustomerAssign.tsx # 客户分配
│   │   ├── Notice.tsx       # 通知公告
│   │   ├── Organization.tsx # 组织架构
│   │   ├── RolePermission.tsx # 角色权限
│   │   ├── DataDict.tsx     # 数据字典
│   │   ├── ApprovalFlow.tsx # 审批流程
│   │   ├── BasicSettings.tsx # 基础设置
│   │   ├── EmailSettings.tsx # 邮件设置
│   │   └── LogSearch.tsx    # 日志检索
│   ├── hooks/               # 自定义Hooks
│   ├── types/               # TypeScript类型
│   ├── data/                # Mock数据
│   ├── App.tsx              # 主应用
│   └── main.tsx             # 入口
├── public/                  # 静态资源
└── package.json
```

## 3. 组件清单

### shadcn/ui 组件
- Button
- Card
- Input
- Select
- Table
- Tabs
- Dialog
- DropdownMenu
- Checkbox
- Switch
- DatePicker
- Textarea
- Badge
- Avatar
- Tooltip
- Separator
- ScrollArea
- Collapsible

### 自定义组件
- Navbar: 顶部导航栏
- Sidebar: 左侧菜单
- DataTable: 带分页的表格
- FilterPanel: 可展开的筛选面板
- StatCard: 统计数字卡片
- ChartCard: 图表卡片
- StepForm: 多步骤表单
- RichTextEditor: 富文本编辑器 (简化版)

## 4. 路由设计

```typescript
const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/quote/create', element: <QuoteCreate /> },
  { path: '/quote/manage', element: <QuoteManage /> },
  { path: '/customer/manage', element: <CustomerManage /> },
  { path: '/customer/opportunity', element: <OpportunityManage /> },
  { path: '/customer/import', element: <DataImport /> },
  { path: '/customer/export', element: <DataExport /> },
  { path: '/product/manage', element: <ProductManage /> },
  { path: '/product/attr', element: <ProductAttr /> },
  { path: '/product/pricelist', element: <PriceList /> },
  { path: '/quote/template', element: <TemplateManage /> },
  { path: '/operation/approval', element: <QuoteApproval /> },
  { path: '/operation/assign', element: <CustomerAssign /> },
  { path: '/operation/notice', element: <Notice /> },
  { path: '/config/organization', element: <Organization /> },
  { path: '/config/role', element: <RolePermission /> },
  { path: '/config/datadict', element: <DataDict /> },
  { path: '/config/approvalflow', element: <ApprovalFlow /> },
  { path: '/config/basic', element: <BasicSettings /> },
  { path: '/config/email', element: <EmailSettings /> },
  { path: '/config/log', element: <LogSearch /> },
];
```

## 5. 状态管理

使用 React Context 管理全局状态:
- 当前用户
- 当前页面
- 导航状态

## 6. Mock数据

所有数据使用静态mock数据，包括:
- 报价单列表
- 客户列表
- 产品列表
- 商机列表
- 用户列表

## 7. 图表实现

使用 Recharts 实现:
- 折线图 (报价单数、报价单总金额)
- 支持时间范围切换
- 数据点tooltip

## 8. 开发顺序

1. 初始化项目 + 安装依赖
2. 创建公共组件 (Navbar, Sidebar, DataTable, etc.)
3. 开发工作台页面 (Dashboard)
4. 开发创建报价单页面
5. 开发报价管理页面
6. 开发客户管理页面
7. 开发商机管理页面
8. 开发产品相关页面
9. 开发运营模块页面
10. 开发配置模块页面
11. 整合测试
12. 构建部署
