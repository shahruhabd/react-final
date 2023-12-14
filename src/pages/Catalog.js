import React from 'react'
import '../css/main.css'

const Catalog = () => {
  return (
    <div className='wrapper'>
        <header>
            <h1>Catalog</h1>
        </header>
        <div className='content'>
            <table style={{'width': '500px'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Watermelon</td>
                        <td>50tg</td>
                    </tr>
                    <tr>
                        <td>Banana</td>
                        <td>100tg</td>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>75tg</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Catalog