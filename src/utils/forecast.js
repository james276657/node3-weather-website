const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=cfb93321dce50a1958c70b902c66e4d3&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'
    request({url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to forecast services', undefined)
        } else if (body.error) {
            callback('Invalid location. Try another search', undefined)
        } else {
            callback(undefined, {
                currentcondition: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                windspeed: body.current.wind_speed
            })
        }
    })

}
module.exports = forecast
