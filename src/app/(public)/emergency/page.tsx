import EmergencyInstructions from "@/components/emergency-instructions/page";
import { Header } from "@/components/ui/auth-header-section";
import React from "react";

const page = () => {
  return (
    <div className=" bg-[#F1F5F8]">
      <Header
        title="Emergency"
        description="Below you will find the emergency instructions."
      />

      {/* Main Content */}
      <main className="py-16 bg  max-w-7xl mx-auto">
        <div className="max-w-md px-4 md:px-6 lg:px-6 xl:p-0">
          <EmergencyInstructions />
        </div>
      </main>
    </div>
  );
};
export default page;
