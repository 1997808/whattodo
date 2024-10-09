import { Outlet } from "react-router-dom";

export default function BlankLayout() {
  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:p-6 2xl:p-10">
        <Outlet />
      </div>
    </div>
  );
}
