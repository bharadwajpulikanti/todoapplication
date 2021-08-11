import React from 'react'
import './Todo.css'
import TodoList from './TodoList'
class TodoApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            todosList: [],
            currentItem: {
                key: '',
                item: ''
            }
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.editItem = this.editItem.bind(this)
    }


    handleChangeEvent = (event) => {
        this.setState({
            currentItem: {
                key: Date.now(),
                item: event.target.value
            }
        })
    }

    addItem = (event) => {
        event.preventDefault();
        if (this.state.currentItem.item != null && this.state.currentItem.item.trim() != "") {

            const todoItem = this.state.currentItem
            const todoItems = this.state.todosList

            const newTodoList = [...todoItems, todoItem]



            this.setState({
                todosList: newTodoList,
                currentItem: {
                    key: '',
                    item: ''
                }
            })


        }
        else {
            alert("Input Field cannot be empty or should not have blank spaces !!!")
        }
    }

    deleteItem(key) {
        const list = this.state.todosList
        const filteredItems = list.filter(item => item.key !== key)

        this.setState({
            todosList: filteredItems
        })
    }

    editItem(value, key) {
        const listItems = this.state.todosList
        listItems.map((item) => {
            if (item.key === key) {
                item.item = value
            }
        })

        this.setState({
            todosList: listItems
        })
    }
    render() {
        return (
            <div className='TodoApp'>
                <header>
                    <form id='todo-form-id' onSubmit={this.addItem}>
                        <input type='text' placeholder='Enter Text' value={this.state.currentItem.item} onChange={this.handleChangeEvent}></input>
                        <button type='submit'>Add</button>
                    </form>
                </header>

                <div >
                    <TodoList datas={this.state.todosList} deleteItem={this.deleteItem} editItem={this.editItem} />
                </div>
            </div>


        )
    }
}

export default TodoApp