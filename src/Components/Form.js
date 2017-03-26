import React from 'react'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                value: 'Enter your name',
                preferredFlavor: 'Chocolate',
                isClicked: false
            };

        this.handleClick = this.handleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleListChange = this.handleListChange.bind(this);
    }

    handleClick() {
        if (!this.state.isClicked) {
            this.setState({
                value: '',
                isClicked: true
            });
        }
    }

    handleNameChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleListChange(event) {
        this.setState({
            preferredFlavor: event.target.preferredFlavor
        });
    }

    handleSubmit(event) {
        alert('A name was submitted:' + this.state.value + ' \nPreferred Flavor: ' + this.state.preferredFlavor);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name: </label>
                <textarea type="text" value={this.state.value} onChange={this.handleNameChange}
                          onClick={this.handleClick}/>
                <select value={this.state.preferredFlavor} onChange={this.handleListChange}>
                    <option value="chocolate">Chocolate</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="strawberry">Strawberry</option>
                    <option value="melon">Melon</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;
