"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type = "text",
  required = false,
  register,
  errors,
  disabled = false,
}) => {
  return (
    <div>
      <label
        className={clsx(
          `block text-sm font-medium leading-6 `,
          errors[id] && "text-rose-500",
          !errors[id] && "text-gray-900"
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          id={id}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required: true })}
          className={clsx(
            "form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6",
            errors[id] && "focus:ring-rose-500 ring-rose-500",
            disabled && "opacity-50 cursor-default",
            !disabled && !errors[id] && "focus:ring-sky-600 ring-gray-300"
          )}
        />
        {errors[id] && (
          <p className="mt-2 text-sm text-rose-500" id={`${id}-error`}>
            {"This field is required"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
