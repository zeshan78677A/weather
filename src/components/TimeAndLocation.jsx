import React from 'react'

const TimeAndLocation = ({ weather: { formattedLocalTime, name, country }, }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className='text-xl font-extralight mt-5'>
          {formattedLocalTime}
        </p>

      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='mt-5 text-3xl font-medium'>
          {name}, {country}
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation