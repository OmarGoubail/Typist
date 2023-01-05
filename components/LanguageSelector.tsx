import React, { ChangeEvent } from "react";
type Props = {
  disabled: boolean;
  language: string;
  onChange: (languageSelected: string) => void;
};

const LanguageSelector = (props: Props) => (
  <div className="md:flex-initial w-full md:w-1/2 lg:w-1/3 md:ml-3 ml:0">
    <select
      value={props.language}
      disabled={props.disabled}
      onChange={(event: ChangeEvent<HTMLSelectElement>) =>
        props.onChange(event.target.value)
      }
      className="w-full rounded appearance-none bg-white border-2 border-gray-300 py-2 focus:outline-none focus:border-gray-500 text-base pl-3 pr-7"
    >
      <option value="easy_en">English</option>
      <option value="en">English (hard)</option>
    </select>
  </div>
);

export default LanguageSelector;
