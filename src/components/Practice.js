import React, {useState} from 'react'
import './style.css'

 const Practice = () => {
    const [isGoingOut,setIsGoingOut] = useState (true)
    function handleClick (){
      
        setIsGoingOut( prevState => !prevState)

        
        }
    
    
  
    return(
       <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div  onClick = {handleClick} className="state--value" >
                <h1> {isGoingOut ? "yes" : "No"} </h1>
            </div>
        </div>
    )
}

export default Practice