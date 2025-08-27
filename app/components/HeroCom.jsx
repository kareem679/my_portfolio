import AnimationPartCom from "./parts/AnimationPartCom"

const HeroCom = ({src,title}) => {
  return (
    <div>
      <AnimationPartCom/>
        <div className='reveal  w-full h-[80vh] relative bg-cover bg-center bg-black/40 bg-blend-multiply'  style={{ backgroundImage: `url(${src})` }}>
            <h1 className="absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] text-4xl lg:text-7xl font-bold text-white">#{title}</h1>
        </div>
    </div>
  )
}

export default HeroCom