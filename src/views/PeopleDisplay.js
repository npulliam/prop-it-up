import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ApiWalker from './ApiWalker';
import {Link} from '@reach/router';

const People = props => {
    const [person, setPerson] = useState({});
    const [homeworldData, setHomeworldData] = useState({});
    const [homeworldPath, setHomeworldPath] = useState("");
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + props.num + "/")
            .then(response => {
                setPerson(response.data);
                setHomeworldPath("/"+ response.data.homeworld.slice(21))
            });


    }, [props.num])
    
    useEffect(() => {
        axios.get(person.homeworld)
            .then(response => setHomeworldData(response.data))
    }, [person.homeworld])

//     const Homeworld = (planet) =>{
//         console.log('This is the homeworld function',planet)
//         axios.get(planet)
//         .then(response =>{ console.log('Here is the planets axios',response)
//         setPlanet(response.data)
//     })
//     .catch(err=> console.log(err)) ///TA solution
// }
    return (
        <div className="container">
            <ApiWalker/>
            {person.name?
            <div className="col">
                <h3>{person.name}</h3>
                <p>height: {person.height}</p>
                <p>mass: {person.mass}</p>
                <p>hair color: {person.hair_color}</p>
                <p>skin color: {person.skin_color}</p>
                <p>homeworld: {homeworldData.name}</p>
                <Link to={homeworldPath}>View {homeworldData.name}</Link>
            </div> :
            <div className="col">
                <p>These aren't the droids you're looking for.</p>
                <img src="https://static.wikia.nocookie.net/heroes-v-villains/images/3/32/Ben_Kenobi.png/revision/latest?cb=20191003182300"/>
            </div>
            }
        </div>
    )
}

export default People;