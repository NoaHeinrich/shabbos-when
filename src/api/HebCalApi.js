let getLocation = () => {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(getTimezone)
    }
    return null
}

let fetchShabbosTimeByZip = (zip) => {
    return fetch(`https://www.hebcal.com/shabbat?cfg=json&zip=${zip}&M=on`)
    .then(resp => resp.json())
}

let getTimezone = (position) => {
    let API_KEY = '6HVSGCS21SNR'
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${latitude}&lng=${longitude}`)
    .then(resp => resp.json())
    .then(tz => getShabbosTimeByCoords(tz, latitude, longitude))
}

let getShabbosTimeByCoords = (tz, latitude, longitude) => {
    return fetch(`https://www.hebcal.com/shabbat?cfg=json&geo=pos&latitude=${latitude}&longitude=${longitude}&tzid=${tz.zoneName}&M=on`)
    .then(resp => resp.json())
    .then(time => console.log(time))
}

export default {
    getLocation,
    fetchShabbosTimeByZip
}