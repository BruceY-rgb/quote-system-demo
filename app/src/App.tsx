import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Dashboard from '@/pages/Dashboard';
import QuoteCreate from '@/pages/QuoteCreate';
import QuoteManage from '@/pages/QuoteManage';
import CustomerManage from '@/pages/CustomerManage';
import OpportunityManage from '@/pages/OpportunityManage';
import DataImport from '@/pages/DataImport';
import DataExport from '@/pages/DataExport';
import ProductManage from '@/pages/ProductManage';
import ProductAttr from '@/pages/ProductAttr';
import PriceList from '@/pages/PriceList';
import TemplateManage from '@/pages/TemplateManage';
import QuoteApproval from '@/pages/QuoteApproval';
import CustomerAssign from '@/pages/CustomerAssign';
import Notice from '@/pages/Notice';
import Organization from '@/pages/Organization';
import RolePermission from '@/pages/RolePermission';
import DataDict from '@/pages/DataDict';
import ApprovalFlow from '@/pages/ApprovalFlow';
import BasicSettings from '@/pages/BasicSettings';
import EmailSettings from '@/pages/EmailSettings';
import LogSearch from '@/pages/LogSearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f5f5]">
        <Navbar />
        <div className="pt-14">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quote/create" element={<QuoteCreate />} />
            <Route path="/quote/manage" element={<QuoteManage />} />
            <Route path="/customer/manage" element={<CustomerManage />} />
            <Route path="/customer/opportunity" element={<OpportunityManage />} />
            <Route path="/customer/import" element={<DataImport />} />
            <Route path="/customer/export" element={<DataExport />} />
            <Route path="/product/manage" element={<ProductManage />} />
            <Route path="/product/attr" element={<ProductAttr />} />
            <Route path="/product/pricelist" element={<PriceList />} />
            <Route path="/quote/template" element={<TemplateManage />} />
            <Route path="/operation/approval" element={<QuoteApproval />} />
            <Route path="/operation/assign" element={<CustomerAssign />} />
            <Route path="/operation/notice" element={<Notice />} />
            <Route path="/config/organization" element={<Organization />} />
            <Route path="/config/role" element={<RolePermission />} />
            <Route path="/config/datadict" element={<DataDict />} />
            <Route path="/config/approvalflow" element={<ApprovalFlow />} />
            <Route path="/config/basic" element={<BasicSettings />} />
            <Route path="/config/email" element={<EmailSettings />} />
            <Route path="/config/log" element={<LogSearch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
