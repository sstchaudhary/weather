import React, { useEffect, useState } from 'react'
import "./css/style.css";
const  Tempapp=()=> {
  const [city,setCity]=useState(null);
  const [search,setSearch]=useState("noida");
  //4e52d6671310766e05fb746d597725d7
  //const url='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={4e52d6671310766e05fb746d597725d7}';
   useEffect(()=>{
    const apicall=async()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4e52d6671310766e05fb746d597725d7`;
         const data= await fetch(url);
        const rejson= await data.json();
          setCity(rejson.main);
         console.log(rejson);
   }
            apicall();
},[search]);
       
  return (
            
    <>
        <div className='box'>
             <div className='inputdata'>
             <input type={'search'} className="inputfield" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
             </div>

             {!city ? (
                  <p>No Data Found</p>
              )    
              :(

                    <div>
                    <div className='location'>
             
             <h2><i className='fa-solid fa-street-view'></i>{search}</h2>
          </div>

         
          <div className='tempposition'>
         <h2 className='temp'>
             {city.temp}°Cel 
         </h2>
           <h3 className='tempmi_max'>
           Min:{city.temp_min}°Cel  |Max: {city.temp_max}°Cel  
           </h3>
       
        </div>
        </div>
             )}
             
             </div>         
           
    </>
                 
                 
  )
}

export default Tempapp