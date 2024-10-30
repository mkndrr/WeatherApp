import React from "react";

class Weather extends React.Component {
    render(){
        return(
            <div>
                { this.props.city && //делаем так, чтобы вначале эти параграфы не отображались и выводились только тогда, когда вводим город
                    <div>
                        <p>Местоположение: {this.props.city}, {this.props.country}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>Давление: {this.props.pressure}</p> 
                        <p>Заход солнца: {this.props.sunset}</p>
                    </div>
                }
                <p>{ this.props.error }</p>
            </div>
        );

    }
}

export default Weather;