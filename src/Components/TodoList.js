import React from 'react'
import './TodoList.css'
function TodoList(props) {
    const todoData = props.datas;
    const todos = todoData.map(item => {
        return <div key={item.key} className='TodoList'><p>
            <input type='text' id={item.key} value={item.item} onChange={(event) => props.editItem(event.target.value, item.key)}></input>
            <span><button className='deleteIcon' onClick={() => props.deleteItem(item.key)}>X</button></span></p></div>
    })

    return (
        <div>
            {todos}
        </div>
    )
}

export default TodoList
