import { useState } from "react"
import TestmonialsBox from "./TestmonialsBox"


const Testmonials = () => {
    const[testDate ]=useState([
        {
        id:1 ,
         desc:"Flyo has improved our team productivity by an order of mangnitude.Since making the switch our team has become a well-oiled collaboration machine.",
         image:"profile-1.jpg",
         position:"Founderc & CEO , Huddle",
         name:"Ahmed Ali"
        },
         {
        id:2,
         desc:"Flyo has improved our team productivity by an order of mangnitude.Since making the switch our team has become a well-oiled collaboration machine.",
         image:"profile-2.jpg",
         position:"Founderc & CEO , Huddle",
         name:"Hassan Mahmoud"
        },
         {
        id:3,
         desc:"Flyo has improved our team productivity by an order of mangnitude.Since making the switch our team has become a well-oiled collaboration machine.",
         image:"profile-3.jpg",
         position:"Founderc & CEO , Huddle",
         name:"Samaa Ahmed"
        },
    ])
  return (
    <section className="pb-88">
        <div className="container relative  ">
            <div className="absolute left-5 -top-7 ">
                <img src='/src/assets/images/bg-quotes.png'
                alt="quotes"
                className=""
                />
            </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {testDate.map((item)=> (
                <TestmonialsBox
                  key={item.id}
                  desc={item.desc}
                  image={item.image}
                  position={ item.position}
                  name={item.name}
                />
            ))}
         </div>
 
        </div>
    </section>
  )
}

export default Testmonials
