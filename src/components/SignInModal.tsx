import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import useOutsideClick from "../hooks/useOutsideClick";
import Input from "./Input";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string({
      message: "Password is required",
    })
    .min(8, "Your password must be at least 8 characters long"),
});

const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  console.log("errors", errors);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    toast.success("Sign In Successful!");
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      onClose();
    }, 3000);
  };

  const ref = useOutsideClick(() => {
    if (isOpen) {
      onClose();
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed w-full h-full flex items-center justify-center bg-black/50 transition-opacity`}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-3/5 lg:w-[30rem]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        ref={ref}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
        {showSuccessMessage ? (
          <div className="text-green-500 text-center">
            <p>Sign In Successful!</p>
            <p>Redirecting you to the homepage in a few seconds...</p>
            <button
              onClick={onClose}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Email"
                type="email"
                register={register}
                error={{ message: errors.email?.message as string }}
                placeholder="Enter your email"
                name="email"
              />
              <Input
                label="Password"
                type="password"
                register={register}
                error={{ message: errors.password?.message as string }}
                placeholder="Enter your password"
                name="password"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Sign In
              </button>
            </form>
            <button
              onClick={onClose}
              className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors mt-4 cursor-pointer"
            >
              Close
            </button>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SignInModal;
