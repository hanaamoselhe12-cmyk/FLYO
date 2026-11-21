

const FeaturesBox = ({title, desc , icon}) => {
  return (
    <div className="text-white element-center flex-col text-center ">
        <img src={`../src/assets/images/${icon}`} 
        alt="icon-imagr" 
        className="w-20 h-20 object-contain"
        />
        <h4 className="text-xl font-semibold my-3.5 ">{title}</h4>
        <p className="font-normal text-sm">{desc}</p>
      
    </div>
  )
}

export default FeaturesBox
