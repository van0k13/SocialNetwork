import logo from './kot.jpg' // relative path to image 
import React from 'react'

class Img extends React.Component { 
    render() { 
        return ( 
            <img src={logo} alt={"logo"}/> 
        )  
    }
}

export default Img