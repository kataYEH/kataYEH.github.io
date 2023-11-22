import React from 'react'

const HT = ({t , color = 'var(--Blue)'}) => {
    const highLightText = {
        color : color,
        fontWeight : "bold",
        zoom : 1.2
        // fontWeight : "blod"
    }
    return (
    <a style={highLightText}>{t}</a>
  )
}

export default HT