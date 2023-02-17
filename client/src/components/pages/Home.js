import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import BlogList from "../pages/BlogList"
import { getBlogs } from '../../redux/actions/blogAction';
import {useDispatch} from "react-redux"

function Home () {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  


  useEffect(()=>{
    dispatch(getBlogs())
    navigate("/blogList")
  },[])

  return (
    <div>
     
    </div>
  )
}

export default Home