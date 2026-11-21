

const StayProduct = () => {
  return (
   <section className=" pb-30 pt-30">
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-7.5 place-items-center ">
        <div>
            <img src='/src/assets/images/illustration-stay-productive.png'
              alt="image"
              className=""
            />
        </div>
        <div className="text-white ">
            <h3 className="font-medium text-[35px] leading-12.5  ">
             Stay Productive ,
              <br/>
              Wherever you are
            </h3>
            <div className="my-4 font-normal text-sm tracking-[0.8px] ">
                <p className="mb-4">
                  Never let location be an issue when accessing your files.Fylo has you covered for all of file storage needs.
                </p>
                <p>
                    Securely share files and folders with friends,family and colleagues for live collaboration.No email attachment required.
                </p>
            </div>
            <a href="/" className="text-[#67dbda] hover:text-[#42b0d1]  transition-colors duration-200 border-b pb-1 flex items-center gap-4 w-fit">
              See how Fylo works
            <img src='/src/assets/images/icon-arrow.svg' 
            alt='arrow'
            className="w-5 h-5 object-contain animate-bounce "
            />
            </a>
        </div>
    </div>
   </section>
  )
}

export default StayProduct
