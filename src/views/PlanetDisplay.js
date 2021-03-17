import axios from 'axios';
import React, {useEffect, useState} from 'react';
import ApiWalker from './ApiWalker';

const Planet = props => {
    const [planet, setPlanet] = useState({});
    
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + props.num + "/")
            .then(response => setPlanet(response.data))
    }, [props.num])
    
    return (
        <div className="container">
            <ApiWalker/>
            { planet.name?
                <div className="col">
                    <h3>{planet.name}</h3>
                    <p>climate: {planet.climate}</p>
                    <p>terrain: {planet.terrain}</p>
                    <p>surface water: {planet.surface_water}</p>
                    <p>population: {planet.population}</p>    
                </div> :
                <div className="col">
                    <p>These aren't the droids you're looking for.</p>
                    <img src="https://static.wikia.nocookie.net/heroes-v-villains/images/3/32/Ben_Kenobi.png/revision/latest?cb=20191003182300"/>
                </div>
            }
        </div>
    )
}

export default Planet;