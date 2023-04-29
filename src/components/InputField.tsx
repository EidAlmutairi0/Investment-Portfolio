import React from "react";

const InputField = (props: propTypes) => {
  return (
    <div className="relative gap-2 flex">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        {props.prefixIcon}
      </div>
      <input
        type={props.type}
        name={props.name}
        onChange={props.handelChange}
        className={`${props.className} bg-gray-10 border focus:outline-primary  border-gray-300 rounded-lg py-4 px-6 placeholder:text-[12px] placeholder:font-cairo text-gray-900 text-sm   block w-full ps-10 p-2.5 `}
        placeholder={props.placeholder}
      />
    </div>
  );
};

type propTypes = {
  type: string;
  value: string;
  handelChange(): any;
  className: string;
  name: string;
  placeholder: string;
  prefixIcon: React.ReactNode;
};

export default InputField;
