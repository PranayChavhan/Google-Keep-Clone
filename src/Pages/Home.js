import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center pt-5">
        <input
          type="text"
          className="bg-transparent border-[1px] h-10 w-[35rem] border-[rgba(241,243,244,0.7)] rounded-lg drop-shadow-2xl placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold pl-4"
          placeholder="Take a note..."
        />
      </div>
    </div>
  );
};

export default Home;
