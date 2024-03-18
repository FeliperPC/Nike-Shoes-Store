import { IoIosArrowDown } from "react-icons/io"; 
type SelectType = {
  options: number[];
  title: string;
};

function Select({ options, title }: SelectType) {
  return (
    <div className="relative">
      <select
        defaultValue={title}
        className="w-24 appearance-none border border-gray-300 bg-white p-4"
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
      <div className="absolute right-0 inset-y-0 flex-center pr-3">
        <IoIosArrowDown/>
      </div>
    </div>
  );
}

export default Select;
