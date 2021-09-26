import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Info from '../Info/Info';
import './Hospital.css';

const Hospital = () => {

    const [doctors, setDoctors] = useState([]);
    const [info, setinfo] = useState([]);

    const handleInfo = doctor => {
        console.log(doctor);
        const newDoctorList = [...info, doctor];
        setinfo(newDoctorList);


        // const exist = [...info];
        // console.log(exist);
        // // console.log(exist[doctor]);

        // if (exist.map(one=>one.id)) {
        //     const newDoctorList = [...info, doctor];
        //     setinfo(newDoctorList);
        // }
        
    }


    useEffect(() => {
        fetch('./doctor.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    return (
        <div className="doctors">
            <div className="doctors-info">
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor} handleInfo={handleInfo}></Doctor> )
                }
            </div>
            <div className="salary-info">
                <Info info={info}></Info>
            </div>
        </div>
    );
};

export default Hospital;