import React from 'react';
import './Info.css';

const Info = (props) => {
    // console.log(props.info);
    const { info } = props;
    // console.log(info);

    let hours = 0;
    for (const time of info) {
        // console.log(time.covidOursPerDay);
        hours += time.covidOursPerDay;
    }



    return (
        <div className="cart">
            <h2><small>Working Hour Info</small></h2>
            <div className="info">
                <div className="time">
                    <h2>Total Hours:</h2>
                    <h2><i className="far fa-clock"></i> {hours}</h2>
                </div>
                <div>
                    <h3 className="doctor-name"><small>Doctor's Name : </small></h3>
                    <ul><small>{info.map(doctor => <li key={doctor.id}> {doctor.name}</li>)}</small></ul>
                </div>
            </div>
        </div>
    );
};

export default Info;