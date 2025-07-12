// // /app/dashboard/page.tsx

// import { auth } from "@/auth";
// import { Header } from "@/components/ui/auth-header-section";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { redirect } from "next/navigation";

// export default async function DashboardPage() {
//   const session = await auth();

//   if (!session) redirect("/auth/login");
//   console.log("session", session);
//   return (
//     <div className=" bg-[#F1F5F8] relative">
//       <Header
//         title="Dashboard"
//         description="Below you will find the emergency instructions."
//       />

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto mt-[-36px] relative z-10">
//         <Tabs defaultValue="account" className="w-full">
//           {/* Tabs Header */}
//           <TabsList>
//             <TabsTrigger value="account">Account</TabsTrigger>
//             <TabsTrigger value="password">Password</TabsTrigger>
//           </TabsList>

//           {/* Tabs Content */}
//           <div className="py-16">
//             <TabsContent value="account">
//               Make changes to your account here.
//             </TabsContent>
//             <TabsContent value="password">
//               Change your password here.
//             </TabsContent>
//           </div>
//         </Tabs>
//       </main>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="bg-[#1F3C50] text-white">
      <div className="max-w-7xl mx-auto  px-4">
        <div className="py-16">
          <h1 className="text-4xl mb-4 font-bold">My dashboard</h1>
          <p className="text-lg text-gray-200">
            You find your test details and personal information below.
          </p>
        </div>
        {/* Tabs Header */}
        <div className="mt-6 flex space-x-2 bg-[#1F3C50]  ">
          <button
            className={`px-4 py-2 rounded-t-sm cursor-pointer text-sm font-medium transition-all duration-200 ${
              activeTab === "info"
                ? "bg-white text-[#1F3C50]"
                : "text-white hover:bg-[#2c4f6c]"
            }`}
            onClick={() => setActiveTab("info")}
          >
            My info
          </button>
          <button
            className={`px-4 py-2 rounded-t-sm cursor-pointer text-sm font-medium transition-all duration-200 ${
              activeTab === "tests"
                ? "bg-white text-[#1F3C50]"
                : "text-white hover:bg-[#2c4f6c]"
            }`}
            onClick={() => setActiveTab("tests")}
          >
            My tests
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-[#F1F5F8] text-black py-8">
        <div className="max-w-7xl mx-auto px-4">
          {activeTab === "info" ? (
            <div>
              <div className="py-8">
                <h2 className="text-lg  font-semibold">Personal information</h2>
                <p className="text-sm text-gray-600 mb-6">
                  You find your test details and personal information below.
                </p>
              </div>
              <div className="space-y-4">
                <InfoRow label="First name" value="hassan" />
                <InfoRow label="Last name" value="shafique" />
                <InfoRow label="Email" value="hassan.shafique@mpq.mpg.de" />
                <InfoRow label="Password" value="•••••••" />
                <InfoRow label="Department" value="Administration" />
                <InfoRow label="Leader" value="Isabell Schmidt" />
                <InfoRow label="Role" value="Student / Employee" />
              </div>
            </div>
          ) : (
            <>
              <div className="py-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 ">
                  Tests taken
                </h2>
                <p className="text-sm text-gray-600 mb-8 ">
                  Test you’ve taken so far or required to take
                </p>
              </div>
              <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="divide-y">
                  <TestRow label="Course" value="work_and_fire_protection" />
                  <TestRow
                    label="Status"
                    value={
                      <span className="text-green-800 bg-green-200 px-3 py-0.5 rounded-md text-sm font-semibold">
                        Passed
                      </span>
                    }
                  />
                  <TestRow label="Last passed" value="30 May 2025" />
                  <TestRow label="Valid till" value="30 May 2026" />
                  <TestRow
                    label="Download form"
                    value={
                      <a
                        href="#"
                        className="text-blue-600 hover:underline text-sm font-medium"
                      >
                        PDF
                      </a>
                    }
                  />
                  <TestRow
                    label="Renew validity"
                    value={
                      <a
                        href="#"
                        className="text-blue-600 hover:underline text-sm font-medium"
                      >
                        Please repeat the test.
                      </a>
                    }
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div>
        <span className="text-gray-700 font-medium">{label}:</span>
        <span className="ml-2 text-gray-900">{value}</span>
      </div>
      <button className="text-gray-500 hover:text-gray-700">✎</button>
    </div>
  );
}
function TestRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-4 px-6 py-4 text-sm text-gray-700">
      <div className="col-span-5 text-gray-500">{label}</div>
      <div className="col-span-7 font-medium">{value}</div>
    </div>
  );
}
