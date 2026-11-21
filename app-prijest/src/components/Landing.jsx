

const Landing = () => {
  return (
   <section className="bg-[#1c2230] ">
    <div className="container">
       <div className=" element-center flex-col ">
           <div className="w-187.5 max-w-full pt-50  ">
            <img src="/src/assets/images/illustration-intro.png" 
            className="w-full h-fit  "
            alt="landing"/>
            </div>
           <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-4 ">
               All you files in one secure lacation
               <br/>
               accessible anywhere.
            </h1>
           <p className="font-normal text-lg px-3.5 md:w-150 max-w-full md:mx-auto ">
            Fly stores all your most important files in one secures lacation.
            Access them where you need, share and collborate with friends family,and co-workes.
           </p>
        </div>
        <a href="/" className="btn w-50 h-15 mt-6 rounded-[30px] element-center mx-auto text-white font-medium  ">
           Get Started
        </a>
       </div>
    </div>
    <div className="w-full h-50 ">
      <img src='/src/assets/images/bg-curvy-desktop.svg'
        alt='image'
        className="w-full h-full"
      />
    </div>
   </section>
  )
}

export default Landing
