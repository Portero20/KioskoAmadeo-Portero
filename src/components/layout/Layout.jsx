import React from 'react'

const Layout = (props) => {  //llamamos mediante props.children para que me los muestre

    console.log(props);

    return <div style={{fontSize:'20px'}}>{props.children}</div>
    
    
  
}

export default Layout