import './index.css';
import Header from "./components/Header/Header"
import NavBar from "./components/Navbar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget"
import React from 'react'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (

    <div>

<Header/>
<NavBar/>
<CartWidget/>
<ItemListContainer greeting= "Bienvenidos a Kalaka"/>

    </div>
  )
}

export default App