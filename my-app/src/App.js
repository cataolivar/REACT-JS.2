import './index.css';
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import React from 'react'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (

    <div>

<Header/>
<NavBar/>
<ItemListContainer greeting= "Bienvenidos a Kalaka"/>

    </div>
  )
}

export default App