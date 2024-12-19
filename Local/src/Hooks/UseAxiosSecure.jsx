import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvier';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL:'http://localhost:5000/',
    withCredentials:true
})

const UseAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
      axiosInstance.interceptors.response.use(response =>{
        return response
      },error =>{
        console.log("error caught in interceptor",error)
        if(error.status === 401 || error.status === 403 ){
            console.log("Need to LogOut ")
            logOut().then(()=>{
                console.log("LogOut User")
                navigate('/login')
            })
        }
        return Promise.reject(error)
      })
    },[])
    return axiosInstance
};

export default UseAxiosSecure;