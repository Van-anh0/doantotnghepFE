import React from 'react'
import Header from '../../components/Header/header'
import ListCV from '../../components/ListCV/listCV'
import Footer from '../../components/Footer/footer'
import ModalView from '../../components/ListCV/Modal/modalView'
function Home() {
  return (
    <div>
        <Header/>
        <ListCV/>
        <Footer/>
    </div>
  )
}

export default Home