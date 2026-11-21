

const GetStarted = () => {
  return (
    <section>
        <div className="container relative text-white">
           
           <div className="bg-[#1c2230]  p-7.5 absolute left-[50%] translate-x-[-50%] -top-38 rounded-[5px] element-center flex-col w-216 max-w-full  min-h-67">
               <h3 className="text-[25px] md:text-[35px] font-semibold mb-4">Get Early Access Today</h3>
               <p className="font-normal w-155 max-w-full mx-auto mb-7.5">it only taskes a minute to sign up our free starter is extremely generous.if you have any question , our support team would be happy to help you.</p>
               <form className="w-full flex justify-between items-center flex-wrap md:px-15 gap-7.5 ">
                <input type="email"
                 placeholder="email@example.com" 
                 className="w-full md:flex-1 h-13 rounded-[30px]  pl-7.5 bg-white text-black outline-none border-none text-sm font-medium "
                  />
                <button 
                type="submit"
                 className="w-full md:w-50 h-13 bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px] ">
                     Get Started For Free
                     </button>
               </form>
           </div>
        </div>
    </section>
  )
}

export default GetStarted
