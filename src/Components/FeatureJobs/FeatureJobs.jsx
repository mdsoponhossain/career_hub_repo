import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    //This sis not the best way to lead show all data.
    const [dataLength, setDataLength] = useState(4)




    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));

    }, [])
    return (
        <section>

            <div>
                <div className="text-center">
                    <h2 className="text-5xl">Featured Jobs   :{jobs.length} </h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} ></Job>)
                    }
                </div>
            </div>
                    <div className="justify-center grid mt-10 mb-32">

                        <div className={dataLength === jobs.length && 'hidden'}><button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button></div>
                    </div>

        </section>
    );
};

export default FeatureJobs;