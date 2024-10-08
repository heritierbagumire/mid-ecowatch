import Image from 'next/image'
import React from 'react'

const Notification = () => {
  return (
      <div>
          <Image src="/notification.svg" alt='nots' width={50} height={50} />
      </div>
  )
}

export default Notification