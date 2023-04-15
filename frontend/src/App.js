import { useState } from "react";
import style from "./App.module.css";

function App() {
  let arr = [
    "Onboarding Call",
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Technical Audit",
    "Anchor Text and Semantic Analysis",
    "Competitor Analysis",
    "Anchor Text/URL Mapping",
    'Google Data Studio Report + Local Reporting Sulte',
    'Site Level Optimization',
    'On Page Optimization',
    'Content Creation',
    'Content Publishing',
    'Premium Press Release',
    'Authority Niche Placements',
    'Review Management',
    'Index Links',
    'Video Recap'
  ];

  //process 1  (from line no 28-53)
  
//   const[value,setValue]=useState({
//   "Onboarding Call":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Google Search Console Access":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Google Analytics Access":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Website Access":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Technical Audit":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Anchor Text and Semantic Analysis":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Competitor Analysis":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Anchor Text/URL Mapping":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Google Data Studio Report + Local Reporting Sulte":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Site Level Optimization":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "On Page Optimization":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Content Creation":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Content Publishing":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Premium Press Release":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Authority Niche Placements":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Review Management":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Index Links":{"A":null,"B":null,"C":null,"D":null,"E":null},
//   "Video Recap":{"A":null,"B":null,"C":null,"D":null,"E":null},
// })

// function Change(name,target,e){
//   let data=value
//   data[name][target]=e.target.value
//   setValue(data)
//   }


//  process 2(from line no 59-65)


const[value,setValue]=useState({})

function Change(name,target,e){
let data=value
data[name]={...data[name],[target]:e.target.value}
setValue(data)
}





function con(){
  console.log(value)
}


  return (
    <>
    <table className={style.container}>
      <thead className={style.heading}>
        <tr>
          <th>MONTH1</th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>

        </tr>
      </thead>

      {arr.map((ele,index)=>
   
        <tbody className={style.body}>
        <tr>
          <td>{ele}</td>
          <td><input type="text" onChange={(e)=>Change(ele,"A",e)}/></td>
          <td><input type="text" onChange={(e)=>Change(ele,"B",e)}/></td>
          <td><input type="text" onChange={(e)=>Change(ele,"C",e)}/></td>
          <td><input type="text" onChange={(e)=>Change(ele,"D",e)}/></td>
          <td><input type="text" onChange={(e)=>Change(ele,"E",e)}/></td>
        </tr>
        </tbody>

      )}

 
    </table>

    {/* { <button onClick={()=>con()}>btn</button> } */}
    </>
  );
}

export default App;
