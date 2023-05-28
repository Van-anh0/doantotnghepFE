import React from 'react'
import DetailCV1 from '../../components/CVDetail/CVDetail1/detailCV1'
import DetailCV2 from '../../components/CVDetail/CVDetail2/detailCV2'
import DetailCV3 from '../../components/CVDetail/CVDetail3/detailCV3'
import DetailCV4 from '../../components/CVDetail/CVDetail4/detailCV4'
import DetailCV5 from '../../components/CVDetail/CVDetail5/detailCV5'
import DetailCV6 from '../../components/CVDetail/CVDetail6/detailCV6'

import Footer from "../../components/Footer/footer"
import PanelClick from '../../components/PanelClick/PanelClick'
import {useParams} from 'react-router-dom'
function Detail() {
  const { id } = useParams();
  console.log('id',id)

  let detailCVComponent;

  // Kiểm tra id và import phiên bản tương ứng của DetailCV
  if (id === 'CV1') {
    detailCVComponent = <DetailCV1 />;
  } else if (id === 'CV2') {
    detailCVComponent = <DetailCV2 />;
  } else if (id === 'CV3') {
    detailCVComponent = <DetailCV3 />;
  } else if (id === 'CV4') {
    detailCVComponent = <DetailCV4 />;
  } else if (id === 'CV5') {
    detailCVComponent = <DetailCV5 />;
  } else if (id === 'CV6') {
    detailCVComponent = <DetailCV6 />;
  } else {
    detailCVComponent = <div>Không tìm thấy phiên bản chi tiết của CV.</div>;
  }
  return (
    <div>
      
        <PanelClick/>
        {detailCVComponent}
        <Footer/>
    </div>
  )
}

export default Detail