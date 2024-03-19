import { IoIosArrowDown } from "react-icons/io"; 
import { twMerge } from "tw-merge";
import { SelectType } from "../types";


function Select({ options, title, className='' }: SelectType) {
  return (
    <div className="relative">
      <select
        defaultValue={title}
        className={twMerge(`w-24 appearance-none border border-gray-300 bg-white p-4 ${className}`)}
        // twMerge assures that whatever tailwind that comes in the props will for sure overwrite any priority css before
      >
        <option value={title} disabled hidden>
          {title}
        </option>
        {/* Carries the title name but is disabled and hidden, exist but can't see */}
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="absolute pointer-events-none right-0 inset-y-0 flex-center pr-3 ">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default Select;
