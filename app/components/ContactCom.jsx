import AnimationPartCom from "./parts/AnimationPartCom";
import FormContactCom from "./FormContactCom";
const ContactCom = () => {
  return (
    <div className="mb-20 reveal  px-4 max-w-screen-xl mx-auto">
      <AnimationPartCom />
      <h1 className="w-full my-16  md:my-24 text-center text-4xl md:text-5xl lg:text-6xl font-semibold">
        Contact
      </h1>

      <div className="w-full flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start">
        <div className="lg:w-1/2">
          <h4 className="text-2xl md:text-3xl mb-6">Quick Contact</h4>
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Leave a Message
          </h1>
          <p className="text-base md:text-lg">
            If you like my portfolio, send a message from here and you will be
            answered shortly.
          </p>
        </div>

        <FormContactCom />
      </div>
    </div>
  );
};

export default ContactCom;
