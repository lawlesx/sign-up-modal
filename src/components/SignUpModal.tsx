import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import useOutsideClick from "../hooks/useOutsideClick";
import Input from "./Input";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
  termsAccepted: z.boolean().refine((val) => val, {
    message: "You must accept the terms and conditions",
  }),
});

const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
    toast.success("Successfully Signed Up!");
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      onClose();
    }, 2000);
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
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        {showSuccessMessage ? (
          <div className="text-green-500 text-center">
            <p>Sign Up Successful!</p>
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
                label="Name"
                name="name"
                type="text"
                register={register}
                error={{ message: errors.name?.message as string }}
                placeholder="Enter your name"
                autoFocus
              />
              <Input
                label="Email"
                name="email"
                type="email"
                register={register}
                error={{ message: errors.email?.message as string }}
                placeholder="Enter your email"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                register={register}
                error={{ message: errors.password?.message as string }}
                placeholder="Enter your password"
              />
              {/* Terms and Condition check box */}
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    {...register("termsAccepted")}
                  />
                  I agree to the{" "}
                  <a
                    href="https://youtu.be/xvFZjo5PgG0?si=tAv80ptSAk6LIo_H"
                    className="text-blue-500 hover:underline pl-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>
                </label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.termsAccepted.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Sign Up
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

export default SignUpModal;
