"use client"
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const FormContactCom = () => {
    const [state, handleSubmit] = useForm("xyzndova");
    useEffect(() => {
        if (state.succeeded) {
        toast.success("✅ Your message has been sent successfully!");
        }
  }, [state.succeeded]);
  return (
    <form
      className="w-full lg:w-1/2 flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full p-3 rounded-md text-black text-base md:text-lg bg-white"
        placeholder="Username"
        type="text"
        name="name"
      />
      <input
        className="w-full p-3 rounded-md text-black text-base md:text-lg bg-white"
        placeholder="Email"
        type="email"
        name="email"
      />
      <textarea
        className="w-full p-3 rounded-md text-black text-base md:text-lg bg-white"
        name="message"
        placeholder="Your message"
        rows={5}
        defaultValue=""
      ></textarea>
      <button className="w-full p-3 text-white rounded-lg cursor-pointer text-base md:text-lg bg-black hover:bg-cyan-950 transition">
        Submit
      </button>
    </form>
  );
};

export default FormContactCom;
