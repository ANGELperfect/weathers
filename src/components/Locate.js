import React from 'react'



var Locate = (p) =>{
        return(
            <form onSubmit={p.weather}>
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country" />
                <input type="submit" value="Get weather" />
            </form>
        )
    }




export default Locate