import AnimationPartCom from "./parts/AnimationPartCom"
const ContactCom = () => {
  return (
<div className="mb-20 reveal  px-4 max-w-screen-xl mx-auto">
  <AnimationPartCom/>
  <h1 className="w-full my-16  md:my-24 text-center text-4xl md:text-5xl lg:text-6xl font-semibold">
    Contact
  </h1>

  <div className="w-full flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start">
    
    <div className="lg:w-1/2">
      <h4 className="text-2xl md:text-3xl mb-6">Quick Contact</h4>
      <h1 className="text-3xl md:text-5xl font-semibold mb-6">Leave a Message</h1>
      <p className="text-base md:text-lg">
        If you like my portfolio, send a message from here and you will be answered shortly.
      </p>
    </div>

    
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <input className="w-full p-3 rounded-md text-black text-base md:text-lg bg-white" placeholder="Username" type="text"/>
      <input className="w-full p-3 rounded-md text-black text-base md:text-lg bg-white" placeholder="Email" type="email"/>
      <textarea className="w-full p-3 rounded-md text-black text-base md:text-lg bg-white" name="message" placeholder="Your message" rows={5} defaultValue=""></textarea>
      <button className="w-full p-3 text-white rounded-lg cursor-pointer text-base md:text-lg bg-black hover:bg-cyan-950 transition">
        Submit
      </button>
    </div>
  </div>
</div>

  )
}

export default ContactCom