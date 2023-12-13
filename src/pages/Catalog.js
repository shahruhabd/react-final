import React from 'react'

const Catalog = () => {
  return (
    <div>
        <header>
            <h1>Catalog</h1>
        </header>
        <div>
            <table>
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