"use client";

import useActiveChannel from "@/app/hooks/useActiveChannel";

const ActiveStatus = () => {
  useActiveChannel();
  return <div className=""></div>;
};

export default ActiveStatus;
