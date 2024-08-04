import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState()
    useEffect(()=>{
        fetch('https://api.github.com/users/Saurabh-ghub')
        .then((res) =>res.json())
        .then((data) => {
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-400 text-center p-4 text-3xl text-white' >
        <h1>Github</h1> 
        Username : {data.name}
        <img src={data.avatar_url}/>
        </div>
  )
}

export default Github