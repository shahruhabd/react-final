import React from 'react'
import '../css/main.css'

const AddItem = () => {
  return (
    <div className='wrapper wrapper_add_item'>
        <header>
            <h1>Add item</h1>
        </header>
        <div className='content'>
            <form action="">
                <input type="text" name="" id="" placeholder='Name' className='add-item_input'/><br />
                <input type="text" name="" id="" placeholder='Cost' className='add-item_input'/><br />
                <label>
                    Click me <input type="radio" name="" id="" /><br />
                </label>
                <label>
                    Click me <input type="checkbox" name="" id="" /><br />
                </label>
                <button>Create</button>
            </form>
        </div>
    </div>
  )
}

export default AddItem