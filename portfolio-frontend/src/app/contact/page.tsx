"use client";

import { useContactMutation } from "@/redux/apis/blogs.slice";

import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

type UserData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {

  const { register, handleSubmit, formState: { errors } ,reset} = useForm<UserData>();
  const [registerUser] = useContactMutation();

  const onSubmit = async (formData: UserData) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await registerUser(formData).unwrap();
      if (res.success) {
        toast.success("Message Sent", { id: toastId, duration: 2000 });
        reset()
      } else {
        toast.error("Message send failed", { id: toastId });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err.message);
      toast.error(err.message || "Email already exist", { id: toastId });
    }
  };
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto  w-full max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium dark:text-white text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-3 dark:text-white block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="mb-3 dark:text-white block text-base font-medium text-[#07074D]">
              Message
            </label>
            <textarea
              rows={4}
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full border border-red-500 dark:border-red-500 text-red-500 dark:text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-400 hover:text-black dark:hover:bg-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Toaster richColors/>
    </div>
  );
};

export default ContactPage;
