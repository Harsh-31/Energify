import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from '../Inc/Footer';


export default function Gas() {
    const [name, setName] = useState("");
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState("");
    const [fuel, setFuel] = useState("LPG");
    const [city, setCity] = useState("")



    // const handleChange = (event) => {

    //     const name = event.target.name;
    //     const value = event.target.value;
    //     const city=event.target.city;
    //     setInputs(values => ({...values, [name]:value,[city]: value}))
    //     setTextarea(event.target.value)
    //     setFuel(event.target.value)

    //   }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Application successfully submitted: ${name}`)
    }

    return (
        <div>
        <div className="wrapper">
            <div className="overlay" >
                <h3 className="text-center mb-2">New Connection</h3>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" required></input>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" required></input>
                        </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"></label>
                        <input type="text" className="form-control" placeholder="Enter Complete Address" required></input>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" className="form-text text-muted">You will recieve a confirmation on this mail</small>
                    </div>
                    <label htmlFor="exampleInputEmail1">Gas type</label>
                    <div className="form-check">

                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label className="form-check-label" for="exampleRadios1">
                            PNG   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;       Price:54 Rs per SCM
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                        <label className="form-check-label" for="exampleRadios2">
                            CNG  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   Price:91 Rs per Kg
                        </label>
                    </div>
                    <div className="form-row">

                        <div className="form-group col-md-4">
                            <label for="inputState">House type</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option value="1">Row House</option>
                                <option value="2">Apartment</option>
                                <option value="3">Bunglow</option>
                            </select>
                        </div>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1">I agree</label>
                    </div>

                    <button type="submit" className="btn btn-primary">Apply</button>

                </form>

            </div>
        </div>
        <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gas />);
