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
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="First name" required></input>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" required></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <input type="text" class="form-control" placeholder="Enter Complete Address" required></input>

                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1"></label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">You will recieve a confirmation on this mail</small>
                    </div>
                    <label for="exampleInputEmail1">Gas type</label>
                    <div class="form-check">

                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            PNG   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;       Price:54 Rs per SCM
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                        <label class="form-check-label" for="exampleRadios2">
                            CNG  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   Price:91 Rs per Kg
                        </label>
                    </div>
                    <div class="form-row">

                        <div class="form-group col-md-4">
                            <label for="inputState">House type</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option value="1">Row House</option>
                                <option value="2">Apartment</option>
                                <option value="3">Bunglow</option>
                            </select>
                        </div>

                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">I agree</label>
                    </div>

                    <button type="submit" class="btn btn-primary">Apply</button>

                </form>

            </div>
        </div>
        <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gas />);
