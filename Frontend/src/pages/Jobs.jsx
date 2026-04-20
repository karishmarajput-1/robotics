import React, { useEffect, useState } from "react";
import "./jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.log(err));
  }, []);



  return (
    <div className="jobs-page">

      {/* 🔥 Heading */}
      <h1 className="jobs-title">🚀 Robotics Opportunities</h1>

      {/* 🔥 Grid */}
      <div className="jobs-container">
        {jobs.length === 0 ? (
          <p className="no-jobs">No Jobs Available 😔</p>
        ) : (
          jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h2>{job.title}</h2>
              <p>{job.description}</p>

              <button className="apply-btn">Apply Now</button>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Jobs;


















// import React, { useEffect, useState } from 'react'

// export default function Jobs() {
//     const [jobs, setJobs] = useState([]);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     useEffect(() => {
//         fetch("http"//localhost:5000/jobs)
//             .then(res => res.json())
//             .then(data => setJobs(data)));
//     }, [])

//     const apply = async (jobId) => {
//         await fetch("http://localhost:5000/apply", {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify({name, email, jobId})
//         });
//         alert("Applied Successfully")
//     }

//   return (
//     <div>
//       <h2>Available Jobs</h2>
//       {jobs.map(job => (
//         <div key={job._id} style={{border: "1px solid", margin:"10px", padding: "10px"}}>
//             <h3>{job.tittle}</h3>
//             <p>{job.description}</p>

//             <input placeholder='Name' onChange={e => setName(e.target.value)} />

//             <input placeholder='Email' onChange={e => setEmail(e.target.value)} />
//             <button onClick={() => apply(job._id)}>Apply</button>
//         </div>
//       ))}
//     </div>
//   )
// }
