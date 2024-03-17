"use client"
import { useEffect } from "react"

const BootsrapClient = () => {
    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.bundle.min.js")
    },[])
  return (
    <div>
      
    </div>
  )
}

export default BootsrapClient
