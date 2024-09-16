import React from "react";

function WhiteSpace(isLoaded: any) {
  return (
    <div className={`absolute inset-y-0 left-0 right-0 flex justify-between pointer-events-none ${isLoaded ? 'animate-fadeInTwo' : 'opacity-0'}`}>
      {/* Left side floating dots */}
      <div className="relative w-1/6 h-full flex flex-col justify-center items-center space-y-2 md:space-y-8">
        <div className="w-1 h-1 md:w-3 md:h-3 bg-light rounded-full animate-float"></div>
        <div className="w-2 h-2 md:w-4 md:h-4 bg-light rounded-full animate-float"></div>
        <div className="w-1 h-1 md:w-2 md:h-2 bg-light rounded-full animate-float"></div>
      </div>
      {/* Right side floating dotss */}
      <div className="relative w-1/6 h-full flex flex-col justify-center items-center space-y-2 md:space-y-8">
        <div className="w-1 h-1 md:w-2 md:h-2 bg-light rounded-full animate-float"></div>
        <div className="w-2 h-2 md:w-4 md:h-4 bg-light rounded-full animate-float"></div>
        <div className="w-1 h-1 md:w-3 md:h-3 bg-light rounded-full animate-float"></div>
      </div>
    </div>
  );
}

export default WhiteSpace;