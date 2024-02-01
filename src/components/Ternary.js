import React from 'react';



 const Ternary = () =>{
    const isGoingOut = false

  
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" >
                <h1>{isGoingOut ? "yes" : "No"}</h1>
            </div>
        </div>
    )
}
export default Ternary

/*
 if(isGoingOut === true){
        answer = "yes"
    } else {
        answer = "No"
    }

    */