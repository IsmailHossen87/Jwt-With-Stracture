import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../Components/Cards';

const MyPostedJobs = () => {

    const [allJobs,setAllJobs]= useState([])
    useEffect(()=>{
        func()
    },[])
    const func = async()=>{
        const {data} = await axios.get(`http://localhost:5000/jobAll`)
        setAllJobs(data)
    }
    console.log(allJobs)
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-3 mx-2'>
            {allJobs?.map(card => <Cards card={card}></Cards>)}
        </div>
    );
};

export default MyPostedJobs;