import React from 'react'

class AnotherForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter your Name',
            checkbox: true,
            isClicked: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.isClicked) {
            this.setState({
                name: '',
                isClicked: true
            });
        }
    }

    handleChange(event) {
        const target = event.target;
        const valueToChange = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: valueToChange
        });
    }

    render() {
        return (
            <form>
                <label> Yes/No </label>
                <input name="checkbox" type="checkbox" checked={this.state.checkbox} onChange={this.handleChange}/>
                <label> Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} onClick={this.handleClick}/>
            </form>
        );
    }
}

export default AnotherForm;