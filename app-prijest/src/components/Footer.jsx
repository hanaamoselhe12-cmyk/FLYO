import { useState } from "react"
import { FaFacebookF , FaTwitter ,FaInstagram} from "react-icons/fa"

const Footer = () => {
  const[contact ]=useState([
    {
      icon:"icon-phone.svg",
      text:"+20179272981"
    },
     {
      icon:"icon-email.svg",
      text:"example@fylo.com"
    },
  ]);
  const[links ]=useState([
  "About Us",
  "Contast Us",
  "Jobs",
  "Terms",
  "Press",
  "Privacy",
  "Blog",

  ]);
  const[socail]=useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
   <section className="pt-60 bg-[#0c1524] md:pt-50 pb-25 text-white">
    <div className="container"> 
      <a href="/">
      <img src="/src/assets/images/logo.svg" 
      alt="logo"
      className="w-44 h-16 object-contain"
      />
      </a>
      <div className="mt-8  flex justify-between  flex-wrap  flex-col  md:flex-row gap-7.5 ">
        <div className="flex items-start gap-3.5 w-85 max-w-full   ">
          <img src="/src/assets/images/icon-location.svg" 
           alt="icon"
           className="w-3.5 h-3.5 object-contain"
           />
           <p className="font-normal text-sm tracking-[0.8px] ">
            lorem insum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor indipiscing ut labore et dolor mangn aliqua
           </p>
        </div>
        <div>
           {contact.map((item)=>(
             <div key={item.text} className="flex items-center gap-3.5 mb-3.5 last-of-type:mb-0">
               <img src={`/src/assets/images/${item.icon}`}
                alt="icon"
                className="w-3.5 h-3.5 object-contain"
                />
                <p>{item.text}</p>
             </div>
           ))}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        
           {links.map((link)=>(
           <li key={link}>
             <a href={`/${link.toLowerCase()}`} className="hover:text-[#67dbda] transition-colors duration-200 text-base">
              {link}</a>
           </li>
          ))}
         
        </ul>
        <ul className="flex gap-3.5 w-full justify-center md:w-auto">
          {socail.map((sol)=>(
            <li key={sol}>
               <a href='' className="group ">
                <div className="w-10 h-10 element-center border border-white rounded-full ">
                  {sol === "facebook" ?(
                      <FaFacebookF className="group-hover:text-[#67dbda]   transition-all duration-200  "/>
                  )
                   :
                    sol ===  "twitter" ? (
                        <FaTwitter className="group-hover:text-[#67dbda]   transition-all duration-200 "/>
                    )
                    :(
                     <FaInstagram className="group-hover:text-[#67dbda] transition-all duration-200 "/>)
                     }
                </div>
               </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
   </section>
  )
}

export default Footer
