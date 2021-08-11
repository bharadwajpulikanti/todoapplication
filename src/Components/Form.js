import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic: 'react-js'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(
            `${this.state.username} -${this.state.comments} - ${this.state.topic}`
        )
    }
    render() {
        const { username, comments, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type='text' value={username} onChange={this.handleUsernameChange}></input>
                </div>

                <div>
                    <label>Comments : </label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>

                <div>
                    <label>Topic : </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='react-js'>React-JS</option>
                        <option value='angular-js'>Angular-JS</option>
                        <option value='vue-js'>Vue-js</option>
                    </select>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>
        )
    }
}

export default Form