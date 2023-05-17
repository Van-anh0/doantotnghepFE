import React from 'react'
import DetailCV from '../../components/CVDetail/detailCV'
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import PanelClick from '../../components/PanelClick/PanelClick'
function Detail() {
  return (
    <div>
        <Header/>
        <PanelClick/>
        <DetailCV/>   
        <Footer/>
    </div>
  )
}

export default Detail