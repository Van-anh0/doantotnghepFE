import React from 'react'
import Header from '../../components/Header/header'
import ListCV from '../../components/ListCV/listCV'
import Footer from '../../components/Footer/footer'
import ModalView from '../../components/ListCV/Modal/modalView'
import BoxText from "../../components/BoxText/boxText"
import Ins from "../../components/InstructContainer/insContainer"
function Home() {
  return (
    <div>
        <Header/>
        <ListCV/>
        <BoxText/>
        <Ins/>
        <Footer/>
    </div>
  )
}

export default Home