import React from 'react'
const InfoItem = ({itemTitle, itemName}) => {
  return (
    <li className='InfoItem'>
    <a className='InfoItem-Title'>{itemTitle}</a>
    <a className='InfoItem-Name'>{itemName}</a>
</li>
  )
}

export default InfoItem