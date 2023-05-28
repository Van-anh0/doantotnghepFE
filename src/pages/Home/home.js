import React from 'react'
import Header from '../../components/Header/header'
import ListCV from '../../components/ListCV/listCV'
import Footer from '../../components/Footer/footer'
import ModalView from '../../components/ListCV/Modal/modalView'
import BoxText from "../../components/BoxText/boxText"
import Ins from "../../components/InstructContainer/insContainer"
import ComBox from "../../components/Company/companyBox"
function Home() {
  return (
    <div>
       
        <ListCV/>
        <BoxText/>
        <Ins/>
        <ComBox/>
        <Footer/>
    </div>
  )
}

export default Home