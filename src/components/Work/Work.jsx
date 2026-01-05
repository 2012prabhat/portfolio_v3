"use client"
import React from 'react'
import { useSelector } from 'react-redux';

function Work() {
  const { themeColors } = useSelector((state) => state.themeReducer);

  return (
    <div>
        This is work component 
    </div>
  )
}

export default Work