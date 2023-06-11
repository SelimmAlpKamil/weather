import { useRef, useState } from "react";
import WeatherList from "./weatherList";
import axios from "axios";

const Body = () => {
    const [weather, setWeather] = useState();
    const [background, setBackgroun] = useState("https://w0.peakpx.com/wallpaper/242/45/HD-wallpaper-dunya-cosmos-earth-official-phone.jpg");
    const inputRef = useRef();


    const handledInput = () => {
        const data = inputRef.current.value.trim().toUpperCase()
        getBackgroundImg(data)
        getWeather(data)
    }


    const getWeather = async (cityName) => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=22737b1fc60a6ebd205f5cfb95c6a20c&lang=tr&units=metric`)
            .then(ref => setWeather(ref.data))
            .catch(err => {
                alert("şehir Bulunamdı");
                setWeather(undefined);
            })

    }



    const getBackgroundImg = async (img) => {
        await axios.get(`https://api.unsplash.com/search/photos?query=${img}`, {
            method: "GET",
            headers: {
                Authorization: "Client-ID slER7KjInCr6rpIag1f7aiXFzJnLUpNehv7yqCvwylA"
            }
        })
            .then(ref => setBackgroun(ref.data.results[0].urls.full))
            .catch(err => console.log(err))
    }

    console.log(background)

    return (
        <div
            className="h-[100vh] w-[100%] flex flex-col  items-center bg-cover bg-no-repeat object-center  "
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="w-[90%] mx-auto mt-[40%] z-10 sm:mt-[5%] w-[50%] ">
                <h1 className="text-center text-[1.8rem] font-bold text-orange-500 sm:text-[3rem]">Hava durumu</h1>
                <div className="flex mx-auto items-center justify-center">
                    <input
                        className="flex mt-[1rem] w-[60%] text-[1rem] justify-center items-center  border-b-[.2rem] text-white bg-transparent border-orange-500 outline-none text-[2rem]  placeholder:  text-center font-bold text-[1.5rem] z-10 placeholder-white: 
                        sm:mt-[1rem] w-[40%] text-[1rem] 
                        "
                        type="text"
                        placeholder="Şehir Giriniz..."
                        ref={inputRef}
                    />
                    <button
                        className="bg-transparent text-orange-500 flex justify-center items-center text-[1.2rem] sm:text-[1.5rem]"
                        onClick={handledInput}
                    >
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>
            <WeatherList weather={weather} />



        </div>
    )
}

export default Body;