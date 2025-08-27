import AnimationPartCom from "./parts/AnimationPartCom"
const AboutCom = () => {
  return (
    <div className=" reveal  mx-auto px-4 mb-32">
      <AnimationPartCom/>
      <h1 className="w-full my-24 text-center text-4xl md:text-5xl lg:text-6xl font-semibold">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <div className="reveal bg-amber-50 w-full max-w-[320px] sm:max-w-[340px] md:max-w-[300px] lg:max-w-[400px] h-[500px] lg:h-[600px]  rounded-md p-4" style={{ boxShadow: "4px 8px 20px rgba(94, 234, 212, 0.4)" }}>
          <div className="flex justify-center h-[40%]">
            <img className="rounded-full m-3" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" alt="123" />
          </div>
          <div className="text-center text-black px-2">
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 underline">موقع شخصي</h2>
            <p className="text-base md:text-lg mt-10 lg:mt-28 lg:text-xl">صممت وبرمجت موقع شخصي باستخدام HTML وCSS ,Next.js، يحتوي على أقسام عني، مهاراتي، وأعمالي السابقة مع تصميم بسيط وجذاب.</p>
          </div>
        </div>
        <div className="reveal bg-amber-50 w-full max-w-[320px] sm:max-w-[340px] md:max-w-[300px] lg:max-w-[400px] h-[500px] lg:h-[600px]  rounded-md p-4" style={{ boxShadow: "4px 8px 20px rgba(94, 234, 212, 0.4)" }}>
          <div className="flex justify-center h-[40%]">
            <img className="rounded-full m-3" src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" alt="123" />
          </div>
          <div className="text-center text-black px-2">
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 underline">تصميم متجاوب</h2>
            <p className="text-base md:text-lg mt-10 lg:mt-28 lg:text-xl">أنشأت واجهات متجاوبة باستخدام CSS Grid وFlexbox وTailwind لتتناسب مع جميع الشاشات مثل الموبايل والتابلت واللابتوب.</p>
          </div>
        </div>
        <div className="reveal bg-amber-50 w-full max-w-[320px] sm:max-w-[340px] md:max-w-[300px] lg:max-w-[400px] h-[500px] lg:h-[600px]  rounded-md p-4" style={{ boxShadow: "4px 8px 20px rgba(94, 234, 212, 0.4)" }}>
          <div className="flex justify-center h-[40%]">
            <img className="rounded-full m-3" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150" alt="123" />
          </div>
          <div className="text-center text-black px-2">
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 underline">تحريك وتفاعل</h2>
            <p className="text-base md:text-lg mt-10 lg:mt-28 lg:text-xl">أضفت تأثيرات انتقال وتفاعل (Hover, Scroll Animations) باستخدام CSS وJavaScript لتحسين تجربة المستخدم وإضفاء طابع حيوي على الواجهة.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCom