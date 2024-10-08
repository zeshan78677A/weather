import { BiSolidDropletHalf } from "react-icons/bi"
import { FaThermometer, FaThermometerEmpty } from "react-icons/fa"
import { FiDownload, FiWind } from "react-icons/fi"
import { GiSunrise, GiSunset } from "react-icons/gi"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"


const TempAndDetails = ({
  weather:{
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  }
}) => {
  const verticalDetail = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()} °`
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()} %`
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} km/h`
    }
  ]

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()} °`
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()} °`
    }
  ]
  return (
    <div>
      <div className="flex justify-center items-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row  justify-between py-2">
        <img className="w-20" src={icon} alt="Weather icon" />
        <p className="text-6xl">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {
            verticalDetail.map(({ id, Icon, title, value }) => (
              <div key={id} className="flex font-light text-sm items-center justify-center">
                <Icon size={18} className="mr-1" />
                {`${title}:`} <span className="font-medium">{value}</span>
              </div>
            ))
          }

        </div>
      </div>

          <div className="flex flex-row items-center justify-center space-x-10 py-3 text-sm">
            {
              horizontalDetails.map(({id,Icon,title,value})=>(
                <div key={id} className="flex flex-row items-center">
                  <Icon size={30} className="mr-1" />
                  {`${title}:`} <span className="font-medium ml-1">{value}</span>
                </div>
              ))
            }
          </div>

    </div>
  )
}

export default TempAndDetails