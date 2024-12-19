import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvier';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const EmailJobs = () => {
    const axiosInstance = UseAxiosSecure()
    const {user} = useContext(AuthContext)
    const [emailData,setData]= useState([])
    useEffect(()=>{
        func()
    },[])

    const func =async ()=>{
      const {data}= await  axiosInstance.get(`jobs/${user.email}`)
      setData(data)
    }
    console.log(emailData)
    return (
        <div>
            EMAIUL JOBS
        </div>
    );
};

export default EmailJobs;