import React, { useEffect, useRef, useState } from "react"


function INPUT(props){
    const [citys, setCitys] = useState([])
    let inputRef=useRef()
    
    useEffect(()=> {
        getCitys()
    },[])


const History=()=>{ 
    props.setSearchCity( JSON.parse(localStorage["id"]))
    
}

async function getCitys(){
            let url=`https://countriesnow.space/api/v0.1/countries/population/cities`
            let resp=await fetch(url)
            let data=await resp.json()
            setCitys(data.data); 
            console.log(data);
}



return(
        <div className="container-fluid p-3">
        <div className="container">
            <div className="row">
                <div className="col lg-4">
                    <h2 style={{fontSize: "45px"}}>Welcome to the weather site</h2>
                </div>
                <div className="col lg-8 d-flex align-items-center justify-content-end" >
                    <input ref={inputRef} placeholder="search..." type="search" className="form-control w-25" list="ice-cream-flavors" />
                    <datalist id="ice-cream-flavors">
                    {citys.map((item, index)=>  <option value={item.city} key={index}/>)}
                </datalist> 
                    <button onClick={()=>{
                        props.setSearchCity(inputRef.current.value)
                        localStorage.setItem("id",JSON.stringify(inputRef.current.value))
                    }} className="btn btn-dark">search</button>
                    <button className="btn btn-dark" onClick={History}>History </button> 
                    {/* <button onClick={()=>{A()}}>ergegb</button> */}
                    <div className="mx-2"></div>
                    </div>
        </div>
        </div>
        </div>
    )
}


export default INPUT;