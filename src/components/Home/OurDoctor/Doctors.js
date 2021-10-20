import React, { useEffect, useState } from "react";
import OurDoctor from "./OurDoctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://glacial-everglades-10374.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <section className="doctors">
      <div className="container">
        <h2 className="text-center text-primary p-3">Our Doctors</h2>
        <div className="row">
          {doctors.map((doctor) => (
            <OurDoctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
