import React from 'react'

const AddItem = () => {
  return (
    <div>
        <header>
            <h1>Add item</h1>
        </header>
        <div>
            <form action="">
                <input type="text" name="" id="" placeholder='Name'/><br />
                <input type="text" name="" id="" placeholder='Cost'/><br />
                <label>
                    Click me
                    <input type="radio" name="" id="" /><br />
                </label>
                <label>
                    Click me
                    <input type="checkbox" name="" id="" /><br />
                </label>
                <button>Create</button>
            </form>
        </div>
    </div>
  )
}

export default AddItem