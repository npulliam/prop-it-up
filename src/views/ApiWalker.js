import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ApiWalker = (props) => {
    const [selectedSearch, setSelected] = useState("people");
    const [selectedNum, setSelectedNum] = useState("");
    const [maxInput, setMaxInput] = useState("80");
    
    
    const handleForm = (e) => {
        e.preventDefault();
        navigate("/" + selectedSearch + "/" + selectedNum + "/");
    }  


    const searchChange = (e) => {
        setSelected(e.target.value);
        if(e.target.value == "planets") {
            setMaxInput("60");
        } else if (e.target.value == "people") {
            setMaxInput("80")
        }
        if(parseInt(selectedNum) > 60 && e.target.value == "planets") {
            e.target.nextElementSibling.value = 60;
        }
    }

    return(
        <div className="container">
            <div className="d-flex w-50 justify-content-between">
                <label className="mx-3">Search Type:</label>
                <label className="mx-5">Search #</label>
            </div>
            <div className="row">
                <form className="d-flex w-50" onSubmit={handleForm}>
                    <select className="form-control m-3" onChange={searchChange}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    <input className="form-control m-3" type="number" min="1" max={maxInput} onChange={(e) => setSelectedNum(e.target.value)}/>
                    <button className="btn btn-sm btn-dark h-50 align-self-center" onSubmit={handleForm}>Fetch</button>
                </form>
            </div>
        </div>
    )
}

export default ApiWalker;