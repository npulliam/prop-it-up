import React from "react"

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        //     firstName: this.props.firstName,
        //     lastName: this.props.lastName,
        //     hairColor: this.props.hairColor
        }
    
    }
    birthdayClick = (event) => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col bg-dark text-light mx-4">
                        <h2>{this.props.lastName}, {this.props.firstName}</h2>
                        <p>Age: {this.state.age}</p>
                        <p>Hair Color: {this.props.hairColor}</p>
                        <button onClick={this.birthdayClick} className="btn btn-danger w-25" >{this.props.firstName} {this.props.lastName}'s {this.state.age + 1} birthday!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonCard