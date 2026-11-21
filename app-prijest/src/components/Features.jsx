import { useState } from "react"
import FeaturesBox from "./FeaturesBox";

const Features = () => {
    const[items ]=useState([

        {
            icon:"icon-access-anywhere.svg",
        title:"Access your files,anywhere",
        desc:"the ability to use a smartphone,tablet, or computer to access your account means your files follow you everywhere."
    },
     {
            icon:"icon-security.svg",
        title:"Security you can trust",
        desc:" Factor authentication and user-controlled encryption are just a couple of the security features wh allow to to help secure your files."
    },
     {
            icon:"icon-collaboration.svg",
        title:"Real-time collaboration",
        desc:"Securely share files ND Folderes whith friends, family and colleagues for live collaboration.No email attachments required."
    },
     {
            icon:"icon-any-file.svg",
        title:"Store any type of file",
        desc:"whether you 're sharing holidays phots or work documents,Fylo has you covered allwing for all fille types to be securely stored and shared."
    },
]);
  return (
   <section>
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-25 w-216.5 mx-auto max-w-full ">
            {items.map((item)=>{
                return(
                 <FeaturesBox 
                 key={item.title} 
                 title={item.title}
                  icon={item.icon} 
                  desc={item.desc}/>

                );
            })}
            
        </div>
    </div>
   </section>
  )
}

export default Features
