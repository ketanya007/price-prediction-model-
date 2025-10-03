import React from "react";
import pic5 from "../images/Most-Beautiful-House-in-the-World.jpg";
import { Margin } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Axios from "../config/Axios"

export const AvailableHouse = () => {
    var temp = [1,2,3,4,5,6,7,8,9,10];
    const [houses, setHouses] = useState([]);

    const getHouses = async()=> {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        
        const result = await Axios.get("/house/availableHouses", config);
        console.log(result.data.houses);
        let temp = result.data.houses;
        for(let i = 0; i < temp.length; i++) {
            console.log(temp[i])
            const email = await  Axios.post("/auth/getEmailId", {id:temp[i].userId} , config);
            console.log(email.data.emailId)
            temp[i]['emailId'] = (email.data.emailId)
        }
        console.log(temp)
        setHouses(temp);
    } 

    useEffect(()=>{
        getHouses();
    }, []);

    

    return (
        <div>
        <div>
          <h1 style={{margin:"auto",textAlign:"center",marginTop:"1rem"}}>Availabe houses for rent </h1>
          <div>
          <div class="cards">
        
        {
            houses.map((item, index)=>{
                return (<div class="card">
                    <div class="card__image-holder">
                        <img class="card__image" src={pic5} alt="beach" />
                    </div>
                    <div class="card-title">
                        <h2>Home {index+1}</h2>
                    </div>
                    <div>
                        <div class="card-description">
                        Area: {item.area}
                        </div>
                        <div class="card-description">
                        Location: {item.location}
                        </div>
                        <div class="card-description">
                        City: {item.city}
                        </div>
                        <div class="card-description">
                        Contact Email: {item.emailId}
                        </div>
                    </div>
                </div>
            )})
        }
        

      </div>
          </div>
        </div>
        </div>
    )
}