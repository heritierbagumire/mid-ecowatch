import Map from '@/components/map'
import React from 'react'

const Locationpage = () => {
  return (
    <div>
      <h1>Locationpage</h1>
      <div className="w-100"><iframe width="100%" height="600"  scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lake%20Kivu,%20Blarirwa+(EcoWatch%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>

       <Map />
    </div>
  )
}

export default Locationpage