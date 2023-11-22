import React from 'react'
import "./InfoList.css"
import InfoItem from './InfoItem'

const InfoList = () => {
  return (
    <main className='InfoList'>
        <InfoItem itemTitle="Chinese Name" itemName="葉昕語" />
        <InfoItem itemTitle="English Name" itemName="Johnny" />
        <InfoItem itemTitle="Birth" itemName="1996/06/27" />
        <InfoItem itemTitle="Age" itemName="28" />
        <InfoItem itemTitle="Gmail" itemName="xxszcvfh@gmail.com" />
        <InfoItem itemTitle="Master's Degree" itemName="National Taipei University, Department of Electrical Engineering" />

    </main>
  )
}

export default InfoList