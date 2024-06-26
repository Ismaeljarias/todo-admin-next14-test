import { ReactNode } from "react";
import { Sidebar, TopMenu } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Layout",
  description: "Dashboard layout for the application",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />

        <div className="px-6 pt-6">{children}</div>
      </div>
    </>
  );
}
