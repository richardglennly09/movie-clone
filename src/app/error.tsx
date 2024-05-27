"use client"

import { useEffect } from "react";



function error({error, reset}) {
    useEffect( () => {
        console.log(error);
    }, [error])


  return (
    <div>
      <h1>Something went wrong. Please try again</h1>
      {/* <button className="hover:bg-amber-500" onClick={() => reset()}>Reset</button> */}
    </div>
  )
}

export default error
