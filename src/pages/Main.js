import React from 'react'
import shopBusket from '../img/main/shop-busket.png'

const Main = () => {
  return (
    <div>
        <header>
          <h1>
              Shah Shop
          </h1>
        </header>
        <nav>
            <a href="">Main</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Сatalog</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </nav>
        <div className="content">
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem molestias tempora expedita natus, incidunt eveniet veritatis nam ab earum nihil ratione corrupti veniam, a deleniti illum illo dolores, excepturi quia.
          </p>
          <img src={shopBusket} alt={shopBusket} width={500} />
        </div>
        <footer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla molestias dolores aspernatur dolorem excepturi vel! Commodi pariatur esse minus.
        </footer>
    </div>
  )
}

export default Main