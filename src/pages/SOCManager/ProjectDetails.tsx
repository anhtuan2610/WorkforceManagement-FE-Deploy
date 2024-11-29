import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectDetails } from "../../services/soc-manager-api";
import CountVulStatusDetailsChart from "../../components/SOCManager/CountVulStatusDetailsChart";
import OrgChartMember from "../../components/SOCManager/OrgChartMember";
import SeverityCountDetails from "../../components/SOCManager/SeverityCountDetails";
import DashboardByDate from "../../components/SOCManager/DashboardByDate";
import VulTableProjectDetails from "../../components/SOCManager/VulTableProjectDetails";
import GanttChart from "../../components/SOCManager/GanttChart";
import { useEffect } from "react";

export default function ProjectDetails() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["fetchProductDetails", id],
    queryFn: async () => {
      if (id) {
        const response = getProjectDetails({ projectId: Number(id) });
        return response;
      }
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="p-5 bg-gradient-to-r to-neutral-300 from-stone-400 rounded-lg shadow-md text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {data?.data?.name || "Project Name"}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          {data?.data?.description || "No description available."}
        </p>
        <div className="flex text-sm text-gray-700">
          <p>
            <span className="font-semibold">Start Date:</span>{" "}
            {data?.data?.startDate
              ? new Date(data.data.startDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "Not specified"}
          </p>
          <p>
            <span className="font-semibold">&nbsp;- End Date:</span>{" "}
            {data?.data?.endDate
              ? new Date(data.data.endDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "Not specified"}
          </p>
        </div>
      </div>

      <div className="my-6 border-t border-gray-300"></div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 space-x-4">
        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-lg border">
            {id && <CountVulStatusDetailsChart projectId={id} />}
          </div>
          <div>
            <SeverityCountDetails id={id} />
          </div>
        </div>
        <div>
          <OrgChartMember id={id} />
        </div>
      </div>

      <div className="my-14">
        <DashboardByDate />
      </div>
      <div>
        <GanttChart id={id} />
      </div>
      <div className="">{id && <VulTableProjectDetails id={id} />}</div>
    </div>
  );
}
