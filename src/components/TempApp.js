import React, { useEffect, useState } from "react";
import classes from "./TempApp.module.css";

const key = '091a992237a2d900ab0c80febe121f2d';
const TempApp = () => {

   const [city, setCity] = useState('');
   const [search, setSearch] = useState('');
   const [condition, setCondition] = useState('');

   useEffect( () => {
    const fetchApi = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        const data = await response.json();
        console.log(data);
        setCity(data.main);
        setCondition(data.weather[0]);
    }
    
    fetchApi();

   }, [search])

    return (
       <>
       <div className={classes.main_box}>
          <div className={classes.box}>
            <div className={classes.inputData}>
                <input
                 type='search'
                 className={classes.inputField}
                 onChange={ (event) => {
                     console.log(event.target.value);
                    setSearch(event.target.value);
                 }}
                />
            </div>
           </div>
      

       {!city  ? (
        <p>No Data Found</p>
       ) : 
       (<div className={classes.info}>
          <h2 className={classes.location}>{search}</h2>
          <h1 className={classes.temp}>
           {city.temp}
          </h1>
          <h2>{condition.main}</h2>
          <h4>{condition.description }</h4>
          <h3 className={classes.tempmin_max}>Min : {city.temp_min} | Max : {city.temp_max}</h3>
       </div>
        )
       }
       </div>
       </>
    );
}


export default TempApp;