import React from 'react'
import shopBusket from '../img/main/shop-busket.png'
import '../css/main.css'

const Main = () => {
  return (
    <div className='wrapper'>
        <header>
          <h1>
              Shah Shop
          </h1>
          <nav>
            <label for="cars">Choose a car:</label>

            <select name="cars" id="cars">
              <option value="Main">Main</option>
              <option value="About">About</option>
              <option value="Products">Products</option>
              <option value="Сatalog">Сatalog</option>
              <option value="About">About</option>
              <option value="Contact">Contact</option>
            </select><br />

            <a href="">Main</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Сatalog</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </nav>
        </header>

        <div className="content">
          <h3 style={{'maxWidth': '800px', 'margin':'0 auto'}}>
            Merry Moments, Charismatic Prices
          </h3>
          <img src={shopBusket} alt={shopBusket} width={500} style={{'maxWidth': '500px', 'margin':'0 auto'}}/>
        </div>
        <footer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla molestias dolores aspernatur dolorem excepturi vel! Commodi pariatur esse minus.
        </footer>
    </div>
  )
}

export default Main