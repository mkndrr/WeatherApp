import React from "react";
import Info from "./Components/Info";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const api_key = '047a0e565c799d833d8c522b34f72957';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault(); //убрали перезагрузку страницы
        var city_name = e.target.elements.city.value;
        

        if(city_name){ //проверка ввели ли мы что то в поле, если да - присваиваем значения погоды и выводим потом
            const api_url = await 
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`);
            const data = await api_url.json();

            var sunset = data.sys.sunset;
            var date = new Date();
            date.setTime(sunset);
            var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: sunset_date,
                error: undefined
            });
        } else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города"
            });
        }
        
    }

    render() {
        return(
            <div>
                <Info />
                <Form WeatherRequest = {this.gettingWeather} />
                <Weather 
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;