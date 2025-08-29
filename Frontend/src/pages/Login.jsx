import React from "react";

export default function Login() {
  return (
    <div className="bg-[#f8fafc] font-['Inter','Noto Sans',sans-serif] flex flex-col min-h-screen justify-center items-center">
      
      {/* --- ADDED OUTER CARD CONTAINER --- */}
       <div className="w-full max-w-2xl bg-[#f1f5f9] shadow-2xl shadow-gray-400 rounded-2xl p-6 sm:p-8 lg:p-10">

        
        
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#f0f2f4] pb-3">
          <div className="flex items-center gap-3 sm:gap-4 text-[#111318]">
            <div className="size-5 sm:size-6">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-[-0.015em]">
              Attendance Tracker
            </h2>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center">
          {/* Title */}
          <h2 className="text-[#111318] text-2xl sm:text-3xl font-bold text-center pb-3 pt-5">
            Welcome to Attendance Tracker
          </h2>

          {/* Login as */}
          <h3 className="text-[#111318] text-lg font-bold tracking-[-0.015em] w-full px-2 sm:px-4 pb-2 pt-4">
            Login as
          </h3>
          <div className="w-full px-2 sm:px-4 py-3">
            <select className="form-input w-full rounded-lg border border-[#dbdfe6] bg-white h-14 text-base text-[#111318] placeholder:text-[#616f89] focus:border-[#1152d4] focus:ring-1 focus:ring-[#1152d4] px-4">
              <option value="one">Select Role</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Student Details */}
          <h3 className="text-[#111318] text-lg font-bold tracking-[-0.015em] w-full px-2 sm:px-4 pb-2 pt-4">
            Student Details
          </h3>

          {/* Roll No */}
          <div className="w-full px-2 sm:px-4 py-3">
            <input
              placeholder="Student Roll No."
              className="form-input w-full rounded-lg border border-[#dbdfe6] bg-white h-14 px-4 text-base text-[#111318] placeholder:text-[#616f89] focus:border-[#1152d4] focus:ring-1 focus:ring-[#1152d4]"
            />
          </div>

          {/* Name */}
          <div className="w-full px-2 sm:px-4 py-3">
            <input
              placeholder="Name"
              className="form-input w-full rounded-lg border border-[#dbdfe6] bg-white h-14 px-4 text-base text-[#111318] placeholder:text-[#616f89] focus:border-[#1152d4] focus:ring-1 focus:ring-[#1152d4]"
            />
          </div>

          {/* Email */}
          <div className="w-full px-2 sm:px-4 py-3">
            <input
              placeholder="Email"
              className="form-input w-full rounded-lg border border-[#dbdfe6] bg-white h-14 px-4 text-base text-[#111318] placeholder:text-[#616f89] focus:border-[#1152d4] focus:ring-1 focus:ring-[#1152d4]"
            />
          </div>

          {/* Button */}
          <div className="w-full px-2 sm:px-4 py-3">
            <button className="w-full h-12 bg-[#1152d4] text-white font-bold text-sm sm:text-base rounded-lg hover:bg-[#0f47bb] transition">
              Login
            </button>
          </div>
        </main>
      </div>
      {/* --- END CARD CONTAINER --- */}

    </div>
  );
}
