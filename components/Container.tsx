import React from "react";

type Props = {
  words: string[];
  isInputCorrect: boolean;
};

const Container = (props: Props) => {
  return (
    <div className="max-h-32 rounded-xl overflow-hidden    p-4 lg:p-5 leading-9 md:leading-[3rem] bg-[#eee]">
      <span
        className={`font-medium text-2xl md:text-xl lg:text-4xl ${
          props.isInputCorrect ? "text-[#0070f3]" : "text-red-500"
        } rounded-md text-gray-900 px-1`}
      >
        {props.words ? props.words[0] : "asdf"}
      </span>
      {props.words
        ? props.words.slice(1).map((word, index) => (
            <span
              className="font-medium text-base md:text-base lg:text-base text-gray-900 "
              key={index}
            >
              {word}{" "}
            </span>
          ))
        : "ere"}
    </div>
  );
};

export default Container;
