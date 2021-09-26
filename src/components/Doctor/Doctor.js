import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    // console.log(props.doctor);
    const { img, name, specialist, age, salary, covidOursPerDay } = props.doctor;
    // console.log(img);

    return (
        <div className="doctor">
            <div className="doctor-pic">
                <img src={img} alt="" />
            </div>
            <div className="doctor-info">
                <h2>{name} </h2>
                <h4><small>Age: <b>{age}</b> </small></h4>
                <h3><small>Specialist in: <b>{specialist}</b> </small></h3>
                <p><small>Covid-19 dedicated hours: <b>{covidOursPerDay}</b></small></p>
                <h3><small>Salary: <b>${salary}k</b></small></h3>
                <div className="btn-container">
                    <button onClick={() => props.handleInfo(props.doctor)} className="btn"><i className="fas fa-user-md"></i>Add to Sheet</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;