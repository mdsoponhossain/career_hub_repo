import { useLoaderData, useParams } from "react-router-dom";
import { MdLocationOn } from 'react-icons/md';
import { BiDollarCircle } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const handleApplyJob =()=>{
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }


    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4 ">


                <div className="border md:col-span-3 p-2 font-extrabold">

                    <p>Job description : {job.job_description}</p><br></br><br></br>
                    <h2> Job Responsibility :{job.job_responsibility} </h2><br></br><br></br>
                    <p>Educational Requirements:{job.educational_requirements}</p>
                    <br></br><br></br>
                    <p>Experiences :{job.experiences}</p>


                </div>


                <div className="border md:col-span-1 p-2 ">
                    <h3 className="text-4xl">Job Details</h3>
                    {/* <h2 className='flex mr-2'>  < MdLocationOn className='text-2xl '></ MdLocationOn>{job.location}  </h2> */}
                    <h2 className='flex mr-2 items-center'><BiDollarCircle className='text-2xl'></BiDollarCircle>Salary : {job.salary} {'(Per Month)'}</h2>
                    <p>Job title : {job.job_title}</p><br></br><br></br>
                    <h2>Contact Information</h2>
                    <hr></hr><br></br>
                    <div>
                        <p>Phone : {job.contact_information.phone}</p>
                        <p>Email : {job.contact_information.email}</p>
                        <p>Address : {job.contact_information.address}</p>

                    </div>



                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;