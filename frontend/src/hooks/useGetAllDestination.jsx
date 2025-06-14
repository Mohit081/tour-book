import axios from "axios"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setAllDestination } from "../store/slice/destinationSlice"

const useGetAllDestination = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        const fetchAllDestination = async() => {
            try {
             const res = await axios.get("http://localhost:3000/api/v1/destinations")
             dispatch(setAllDestination(res.data))  
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllDestination();
    },[])


  return (
    <div></div>
  )
}

export default useGetAllDestination