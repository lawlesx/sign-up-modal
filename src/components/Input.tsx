import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: { message: string };
  placeholder?: string;
  autoFocus?: boolean;
}

const Input = <T extends FieldValues>({
  label,
  type,
  register,
  name,
  error,
  placeholder,
  autoFocus = false,
}: InputProps<T>) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        className="w-full px-3 py-2 border border-gray-300 rounded"
        placeholder={placeholder}
        {...register(name)}
        autoFocus={autoFocus}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
