import React, { useEffect, useState } from 'react'
import "./css/style.css";


const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("noida");

  useEffect(() => {
    async function apicall() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`;
      const data = await fetch(url);
      const rejson = await data.json();
      setCity(rejson.main);
      //console.log(rejson);
    }
    apicall();
  }, [search])






  return (

    <>
      <div className='main_div'>
        <div className='center_div'>
        <div className='search'>
          <input type={'search'} className="inputfield" value={search} onChange={(e) => { setSearch(e.target.value) }} />
        </div>

          {!city ? (
            <p>No Data Found</p>
          )
            : (

              <div className='top_div'>
                <h1><i className='fa-solid fa-street-view'></i>{search}</h1>
                   <h2 className='temp'>
                    {city.temp}°Cel
                  </h2>
                  <h3>
                    Min:{city.temp_min}°Cel  |Max: {city.temp_max}°Cel
                  </h3>

                
              </div>
            )}

        </div>
      </div>
    </>


  )
}

export default Tempapp