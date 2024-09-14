import { useState, useEffect } from "react";


export const WeatherAPI = () => {
  const [city, setCity] = useState("Oakland");
  const [state, setState] = useState("US-CA");
  const [country, setCountry] = useState("US");
  const [weatherData, setWeatherData] = useState([]);
  const [station, setStation] = useState('40693') //default Berkeley
  const [season, setSeason] = useState(1) //default Spring season
  const [frostDateSpring, setFrostDateSpring] = useState('')


//   useEffect(() => {
//     async function getWeather() {
//       const url = `http://localhost:8081/weather?city=${city}&state=${state}&country=${country}`;
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setWeatherData(data);
//       }
//     }
//     getWeather();
//   }, [city, state, country, setWeatherData]);

  useEffect(()=> {
    async function getFrostDate() {


        const url = `https://api.farmsense.net/v1/frostdates/probabilities/?station=${station}&season=${season}`
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json()

            let defaultTempThreshold = data[0].temperature_threshold
            let temp36array = data[0]
            let count = 0
            let highestProb = ''
            let frostDateSpring = 0
            let month = ''
            let day = ''
            for (const [k,v] of Object.entries(temp36array)) {
                if (count < 2) {
                    count++
                    continue
                }

                if (v === '0000') {
                    continue
                } else {
                    frostDateSpring = v
                    month = v.slice(0, 2)
                    day = v.slice(2)

                    highestProb = `Highest Probability is ${k.slice(5)}% on ${month}-${day}-2024`
                    break;
                }

            }

            setFrostDateSpring(highestProb)
        }
    }
    getFrostDate()
  }, [station, season])
  return (
    <>


<div id="sticky-banner" tabIndex="-1" className="absolute start-0  flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600" style={{ fontFamily: "'Fugaz One', sans-serif", fontWeight: 400, fontStyle: 'normal'}}>
    <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">

                {weatherData.tempMax > 65 ? (
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO2ZT0vDMBjGo0xQEYRteBJEBwp6UcGp7IN51KPfYHXCPIgbghed4tWDMBXUyzz55yAqYj/EI6/dXE2TLHXp1kBfeKGkWfP8miXvk42xJJJIIrJAkW2hyLaZteIdhp+0DQJ+8bZBQCTeFgioxMcdAjri+wkBXXGGkvUdoDwEVEe9pOvYA5QGgNMscD8HfKwBbuFvUhvdoz7UN1YAtQzwshwULUvqe5KJAQC9yasZfeF83uSksxE9AA3cWPi/+FY25oUQ0QNc57oX7zaTZrGnAPSdNyXebeZJOjqAP0WKpvs5xIINs7BLA+aLXaDC0jbID/5VAB4XgadFtchO/WpZsxVbaA9oL/cP+rkOHI2379P1p6AO6PS7mzVnO6Tehi9SF5Ne+8EIsD/sXVMbD6DT72NVXBfCQkjFkyXghT0seFP/ngfe8sBZ1mv7b79yqjsIpausjJpfvC6X5J1k4+tAwGEb0gdUewBQUQA4bFNvFmQQe6noAcqp7sR3hBA5zdYOcjiml3fcTuZ2WMRhxSshZIO/rgClQaXD/MndQa+v6Bm3s+bESyFEhUzhaQJZV7jXWsaseCHEDlmJJTUEvWXRm1dZ7xfOSpgS74NoP5wOI6qFSPt8fRo4n/CShFOb6jPHEZq5AID1dtppHWjmLT7QOE2IyylLj5SOf02kwx3q6TzBfefRV4DWbJBZo4Im/Fll1btHW2XsflZxBEmWgHwNpdweIL4AXSbrdShdbDDNFqkeQ8RTvCZEvMV3gLBDvATCLvHc36xbvw1JJJEEMx3f6ERo6Ch9JdQAAAAASUVORK5CYII="/>
                ) : <img src="https://cdn-icons-png.flaticon.com/512/3750/3750747.png"/>}
            </span>
            <span> {weatherData.name}, {weatherData.country} - {weatherData.weather} - Average Temp {weatherData.temp} - High {weatherData.tempMax} - {frostDateSpring}</span>
        </p>
    </div>
</div>


    </>
  );
};
