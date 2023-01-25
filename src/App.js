// import logo from './logo.svg';
import './App.css';
import INPUT from './componnts/input';
import React, { useEffect, useState } from "react"
import List from './componnts/list';
import A from './componnts/a';

function App() {
  const key="2c60b07276856d27101548f46d85dc35"
  let[searchCity,setSearchCity]=useState("Bnei Brak")    
  let [data,setdata]=useState(null)
  
  useEffect(()=>{
    doSearchApi()
  },[searchCity])
  
  const doSearchApi=async()=>{
      let url=`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${key}&units=metric`
      let resp=await fetch(url)
      let data=await resp.json()
      console.log(data);
      setdata(data)
      
  }
 
  
  return (
    <div className="bg">
    <div className="App">
      <INPUT setSearchCity={setSearchCity} searchCity={searchCity} />
        {data ? <List city={data.city.name} List={data.list}/> : undefined} 
        
     </div>
    </div>
  );
}

export default App;

