interface InputProps {
  label: string;
  type?: string;
  register: any;
  error?: { message: string };
  placeholder?: string;
}

const Input = ({ label, type, register, error, placeholder }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        className="w-full px-3 py-2 border border-gray-300 rounded"
        placeholder={placeholder}
        {...register(label.toLowerCase())} // Assuming label is unique and lowercase
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
