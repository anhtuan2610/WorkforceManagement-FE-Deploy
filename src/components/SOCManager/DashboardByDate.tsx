import { DatePicker } from "antd";
import VulStatusByDateChart from "./VulStatusByDateChart";
import { useState } from "react";

export default function DashboardByDate() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
    setSelectedDate(formattedDate);
  };

  return (
    <div className="flex flex-col py-2 rounded-lg space-y-4 relative">
      <div className="absolute top-10 left-10">
        <h1 className="text-3xl font font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#a4c6b8] to-[#5e435d]">
          Work Progress for{" "}
          <span className="underline">
            {selectedDate || "*(Select a date)"}
          </span>
        </h1>
      </div>

      <div className="flex items-center space-x-10">
        <div className="flex w-2/3 rounded-lg shadow-lg pl-3">
          <div className="flex flex-col items-center mr-3">
            <DatePicker
              aria-label="Basic date picker"
              placement="bottomLeft"
              size="large"
              style={{ height: "40px" }}
              onChange={handleDateChange}
            />
          </div>
          <div className="h-auto border-l border-gray-300"></div>
          <div className="bg-gray-50 pl-2 w-full space-y-3 max-h-[200px] min-h-[200px] overflow-y-auto rounded-md py-2">
            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full bg-gray-200"
                src="https://bumbeishvili.github.io/avatars/avatars/portrait12.png"
                alt="Leader Avatar"
              />
              <div className="flex flex-col w-full">
                <div className="flex items-center mb-2 gap-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Task Name 1
                  </h2>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                    Doing
                  </span>
                </div>
                <p className="text-sm text-gray-600">Task Description 1</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full bg-gray-200"
                src="https://bumbeishvili.github.io/avatars/avatars/portrait12.png"
                alt="Leader Avatar"
              />
              <div className="flex flex-col w-full">
                <div className="flex items-center mb-2 gap-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Task Name 1
                  </h2>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                    Doing
                  </span>
                </div>
                <p className="text-sm text-gray-600">Task Description 1</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full bg-gray-200"
                src="https://bumbeishvili.github.io/avatars/avatars/portrait12.png"
                alt="Leader Avatar"
              />
              <div className="flex flex-col w-full">
                <div className="flex items-center mb-2 gap-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Task Name 1
                  </h2>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                    Doing
                  </span>
                </div>
                <p className="text-sm text-gray-600">Task Description 1</p>
              </div>
            </div>
          </div>
        </div>
        <VulStatusByDateChart />
      </div>
    </div>
  );
}
