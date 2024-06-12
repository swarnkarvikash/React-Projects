import React, { useEffect, useState } from "react";
import './Home.css'
import axios from 'axios';


function Home() {

    const [data, setData] = useState({
        celcius:10,
        name:'London',
        humidity: 10,
        speed:2
    });

    const [name, setName] = useState('');

    useEffect(() => {


    }, [])

    const handleClick = () => {
        if(name != ""){
                    const Api_Url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fa7ea6038cec50dd22909e53df18cb26&&units=metric`;
            axios.get(Api_Url)
            .then(res => {
                
                setData({...data, celcius:res.data.main.temp, 
                        name: res.data.name,
                        humidity: res.data.main.humidity,
                        speed: res.data.wind.speed    
                    })
            })
            .catch( err => console.log(err));
        }
    }

    return (
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder="Enter City name" onChange={e => setName(e.target.value)} />
                    <button><img className="img" src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg" alt="search" onClick={handleClick}></img></button>
                </div>
                <div className="winfo">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/7133/7133364.png" alt="clouds" />
                    <h1>{Math.round(data.celcius)}°C</h1>
                    <h2>
                        {data.name}
                    </h2>
                    <div className="details">
                        <div className="col">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_LlLLK46Bh5QcX0_pG1v_EP5CvVnXg8brw&s" alt="humidity" />
                            <div className="humidity">
                                <p>
                                    {Math.round(data.humidity)}%
                                </p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaiRIlEjuUFTrB_J_kaOZsu5l6w_lpuHy_Q&s" alt="wind" />
                            <div className="wind">
                                <p>{Math.round(data.speed)}km/h</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;