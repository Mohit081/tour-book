import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllTour } from "../store/slice/tourSlice";

const useGetAllTour = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllTour = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/selling");
        // console.log(res.data);
        dispatch(setAllTour(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTour();
  }, []);

  return <div></div>;
};

export default useGetAllTour;
