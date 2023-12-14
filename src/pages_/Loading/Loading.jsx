import React from "react";
import { Spinner } from "@material-tailwind/react";
const Loading = () => {
  return (
    <div className="flex items-end gap-8">
      <Spinner className="h-16 w-16 text-Green" />
    </div>
  );
};
export default Loading;
