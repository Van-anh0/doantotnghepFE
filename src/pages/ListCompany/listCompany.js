import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import DocPage from '../../components/DocPage/docPage';
import ListCompany from '../../components/LstCompany/lstComany';
import Ins from "../../components/InstructContainer/insContainer"
function CompanyPage() {
  return (
    <div>
      <Header />
      <ListCompany/>
      <Ins/>
      <Footer />
    </div>
  );
}

export default CompanyPage;
