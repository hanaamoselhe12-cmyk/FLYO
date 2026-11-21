

const TestmonialsBox = ({name , desc ,image, position}) => {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-8 shadow-lg  ">
      <p className="text-sm font-normal tracking-[0.8px] mb-7.5 ">{desc}</p>
      <div className="flex items-center gap-4 ">
        <img src={`src/assets/images/${image}`} 
        className="w-13 h-13 rounded-full object-contain "
        alt="image"        
        />
        <div>
            <strong className="block mb-1.5 ">{name}</strong>
            <p className="font-normal text-sm">{position}</p>
        </div>
      </div>

    </div>
  )
}

export default TestmonialsBox
