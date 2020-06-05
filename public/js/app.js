
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const url = '/weather?address=' + location
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(url).then((repsonse) => {
        repsonse.json().then((data) => {
            if (data.error){
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = (data.forecast.currentcondition + ',  Temp ' + data.forecast.temperature + ' degrees,  Feels like ' +  data.forecast.feelslike + ' degrees,  Wind speed ' + data.forecast.windspeed + ' mph.' )
            }
        })
    })
})