import React from "react"

// class PersonCard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             age: this.props.age,
//         //     firstName: this.props.firstName,
//         //     lastName: this.props.lastName,
//         //     hairColor: this.props.hairColor
//         }
    
//     }
//     birthdayClick = (event) => {
//         this.setState({
//             age: this.state.age + 1
//         })
//     }

//     render() {
//         const {firstName, lastName, hairColor} = this.props
//         const {age} = this.state
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="card col bg-dark text-light mx-4">
//                         <h2>{lastName}, {firstName}</h2>
//                         <p>Age: {age}</p>
//                         <p>Hair Color: {hairColor}</p>
//                         <button onClick={this.birthdayClick} className="btn btn-danger w-25" >{firstName} {lastName}'s {age + 1} birthday!</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }   ////////// this is the component class method

const PersonCard = props => {
    const {firstName, lastName, hairColor, age} = props
    return (
        <div className="container">
                <div className="row">
                    <div className="card col bg-dark text-light mx-4">
                        <h2>{lastName}, {firstName}</h2>
                        <p>Age: {age}</p>
                        <p>Hair Color: {hairColor}</p>
                        {/* <button onClick={this.birthdayClick} className="btn btn-danger w-25" >{firstName} {lastName}'s {age + 1} birthday!</button> */}
                    </div>
                </div>
            </div>
    )
}

export default PersonCard