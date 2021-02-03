import HebCalApi from '../../api/HebCalApi.js'
import React, {useState, useEffect} from 'react'

function TimeDisplay() {
    let [data, setData] = useState({})

    useEffect(async () => {
        let hebcalData = await HebCalApi.getLocation()
        setData(hebcalData)
    }, [])

    return (
        <div>

        </div>
    )
}

export default TimeDisplay