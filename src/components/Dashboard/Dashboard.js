import React from "react";
import img from "../../assets/dashboard.webp";
const Dashboard = () => {
  return (
    <div className="">
      <div className="lg:flex  h-[95vh] gap-20 justify-center items-center">
        <div>
          <h3 className="text-3xl text-center lg:text-start my-10 py-5 lg:py-0 lg:my-0 lg:text-5xl font-bold">
            Welcome to your <span className="text-purple-400">dashboard</span>
          </h3>
        </div>
        <div>
          <img src={img} alt="" className="w-full lg:w-[800px] h-full" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
