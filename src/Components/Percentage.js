import React, { useState } from 'react'

function Percentage() {
    const[update , setUpdate] = useState(0);
    const[update1 , setUpdate1] = useState(0);

    function Percentage(){
       if(update==="bad" && update1==="bad")
         
       if(update==="average" && update==="average")

       if(update==="good" && update1==="good")
         return 50%50
       if(update==="amazing" && update1==="amazing")
       return "excellent";
    }
  return (
    <div className='percentage'>
        <span>How did you like the service!</span>
        <select className='select1' value={update} onChange={(e)=>setUpdate(e.target.value)}>
            <option value="bad">It was bad (30%)🤮</option>
            <option value="average">It was Average(50%)🙂</option>
            <option value="good">It was Good(75%)😊🤤</option>
            <option value="amazing">It was Amazing(100%)😍😚</option>
        </select>
        <span>How did your friend like the service!</span>
        <select className='select2' value={update1} onChange={(e)=>setUpdate1(e.target.value)}>
            <option value="bad">It was bad(30%)🤮</option>
            <option value="average">It was Average(50%)🙂</option>
            <option value="good">It was Good(75%)😊🤤</option>
            <option value="amazing">It was Amazing(100%)😍😚</option>
        </select>
    </div>
  )
}

export default Percentage