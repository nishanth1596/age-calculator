import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../App";

type InputElementProps = {
  name: keyof FormValues;
  id: string;
  monthValue?: number;
  yearValue?: number;
  register: UseFormRegister<FormValues>;
  error?: string | undefined;
};

function InputElement({
  name,
  id,
  monthValue,
  register,
  error,
  yearValue,
}: InputElementProps) {
  const registerOptions = {
    required: `${name} is required`,
    ...(name === "day"
      ? {
          validate: (value: number) => {
            if (!monthValue) return true;

            if (monthValue === 2) {
              if (
                yearValue &&
                ((yearValue % 4 === 0 && yearValue % 100 !== 0) ||
                  yearValue % 400 === 0)
              ) {
                return (
                  (value >= 1 && value <= 29) ||
                  "Invalid day for February in Leap Year"
                );
              }
              return (value >= 1 && value <= 28) || "Invalid day for February";
            }

            if ([4, 6, 9, 11].includes(monthValue)) {
              return (
                (value >= 1 && value <= 30) || "Invalid day for this month"
              );
            }

            return (value >= 1 && value <= 31) || "Invalid day";
          },
        }
      : {
          min: {
            value: name === "month" ? 1 : 1900,
            message: `${name} must be minimum valid`,
          },
          max: {
            value: name === "month" ? 12 : new Date().getFullYear(),
            message: `${name} must be maximum valid`,
          },
        }),
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="text-Grey text-xs leading-[18px] font-bold tracking-[0.25] uppercase"
      >
        {name}
      </label>
      <input
        id={id}
        type="number"
        {...register(name, registerOptions)}
        className="border-Line text-Black mt-1 block max-w-[87px] rounded-lg border-[1px] px-4 py-3 text-xl leading-[30px] font-bold tracking-[1%]"
      />
      {error && <p className="">{error}</p>}
    </div>
  );
}

export default InputElement;
