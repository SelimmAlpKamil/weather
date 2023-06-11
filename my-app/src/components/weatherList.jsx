import moment from 'moment';
import 'moment-timezone';


const WeatherList = ({ weather }) => {
    console.log(weather)

    if (weather === undefined) {

        return
    }
    else {
        const sunrise = weather.sys.sunrise;
        const sunset = weather.sys.sunset;



        console.log(sunrise)
        return (
            <div
                className="flex mx-auto flex-col mt-[2rem] bg-[rgba(0,0,0,0.4)] w-[90%] rounded-[1rem]
            sm:w-[35%]
            "

            >
                <h3 className="text-center text-[1.8rem] text-white font-mono sm:text-[2rem]">{weather.name}/{weather.sys.country}</h3>
                <h3 className="text-center text-[2.6rem] text-white font-bold sm:text-[2rem]">{Math.ceil(weather.main.temp)}°C</h3>
                <h3 className="text-center text-[1.8rem] text-white font-mono sm:text-[2rem]">{weather.weather[0].description}</h3>
                <h3 className="text-center text-[1.8rem] text-white font-mono sm:text-[2rem]">{Math.ceil(weather.main.temp_min)}°C/{Math.ceil(weather.main.temp_max)}°C</h3>
                <h3 className="text-center text-[1.3rem] text-white font-mono sm:text-[2rem]">Hissedilen {Math.ceil(weather.main.feels_like)}°C</h3>
                <h3 className="text-center text-[1rem] text-white font-mono sm:text-[2rem]">Gün Doğumu: {moment.unix(sunrise).utc().local().format('HH:mm')}</h3>
                <h3 className="text-center text-[1rem] text-white font-mono sm:text-[2rem]">Gün Batımı: {moment.unix(sunset).utc().add(3, 'hours').format('HH:mm')}</h3>
            </div>
        )

    }


}

export default WeatherList