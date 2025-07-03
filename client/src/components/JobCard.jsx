import React from 'react'
import { assets, jobsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'



const JobCard = ( {job} ) => {

  const navigate = useNavigate()

  return (
    <div className='border p-6 shadow rounded'>
      <div className='flex items-center justify-between '>
        <img className='h-8' src={assets.company_icon} alt="" />
      </div>
      <h4 className='font-medium text-xl mt-2'>{job.title}</h4>
      <div className='flex items-center gap-3 mt-2 text-xs'>
        <span className='bg-purple-100 border border-purple-200 px-4 py-1.5 rounded'>
            {job.location}
        </span>
        <span className='bg-purple-100 border border-purple-200 px-4 py-1.5 rounded'>
            {job.level}
        </span>
      </div >
      <p className='text-grey-500 text-sm mt-4' dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}></p>
      <div className='flex item gap-3 mt-2 text-xs'>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='bg-purple-600 text-white px-4 py-1.5 rounded'>Apply Now</button>
        <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='text-gray-500 border border-purple-500 px-4 py-1.5 rounded'>Learn More</button>
      </div>
    </div>
  )
}

export default JobCard
