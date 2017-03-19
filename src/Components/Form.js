import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                value: 'Enter your name',
                isClicked: false
            };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        if (!this.state.isClicked) {
            this.setState({
                value: '',
                isClicked: true
            });
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name: </label>
                <textarea type="text" value={this.state.value} onChange={this.handleChange} onClick={this.handleClick}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;
