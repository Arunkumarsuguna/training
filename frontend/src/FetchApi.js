import React from "react";

function FetchApi(){

    const getApi=() =>{
        
        fetch('http://127.0.0.1:8080/LoginCheck?&username=vignesh&password=123')
        .then((response)=>response.text())
        .then((ans)=>{
           
           // console.log("ANSWER IS :"+ans)
           if(ans==="yes"){

           }
        });
    }

    return(
       <div>
            API Example

            <button onClick={getApi}> Fetch </button>
       </div>
    )
}

export default FetchApi;

/*

,{
            method: "GET",
            headers: {
            "Content-Type": "text/plain"
            },
            credentials: "include"
          }*/
