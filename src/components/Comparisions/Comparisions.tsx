import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { useFormik } from "formik";
import axios from "axios";
import { API_BASE_URL } from "..";

export const Comparisons = () => {
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [responseData, setResponseData] = useState<any>(null);
  const options = ["Reels", "Static Images", "Carousel"];

  console.log(responseData);

  const formik = useFormik({
    initialValues: {
      dropdown1: "",
      dropdown2: "",
    },
    onSubmit: async (values) => {
      if (values.dropdown1 && values.dropdown2) {
        try {
          // const response: any = {
          //   conclusion:
          //     "Reels generally have higher engagement metrics compared to Static Images.",
          //   avg: {
          //     likes: {
          //       reel: 3260.75,
          //       static_image: 3075.75,
          //     },
          //     comments: {
          //       reel: 265.25,
          //       static_image: 451.25,
          //     },
          //     shares: {
          //       reel: 399.75,
          //       static_image: 438.75,
          //     },
          //   },
          // };

          const response: any = await axios.post(
            `${API_BASE_URL}api/typeComp`,
            values
          );

          const avgData = response.data.avg;
          const graphKeys = Object.keys(avgData.likes); // Keys like 'reel', 'static_image', etc.

          // Extract the averages for the graph
          const graphData = {
            likes: graphKeys.map((key) => avgData.likes[key]),
            comments: graphKeys.map((key) => avgData.comments[key]),
            shares: graphKeys.map((key) => avgData.shares[key]),
          };

          const object = {
            graphData,
            conclusion: response.data.conclusion,
          };

          setResponseData(object);
          console.log("API Response:", response.data);
        } catch (error) {
          console.error("API Error:", error);
        }
      }
    },
  });

  const handleDropdownChange = (
    value: any,
    setDropdown: any,
    otherDropdown: any
  ) => {
    if (value !== otherDropdown) {
      setDropdown(value);
      formik.setFieldValue(
        setDropdown === setDropdown1 ? "dropdown1" : "dropdown2",
        value
      );
    }
  };

  useEffect(() => {
    if (dropdown1 && dropdown2) {
      formik.handleSubmit();
    }
  }, [dropdown1, dropdown2]);

  useEffect(() => {
    const options = {
      chart: {
        type: "bar",
        height: 300,
        toolbar: { show: false },
      },
      series: [
        { name: "Like", data: responseData?.graphData.likes },
        { name: "Comment", data: responseData?.graphData.comments },
        { name: "Share", data: responseData?.graphData.shares },
      ],
      colors: ["#17C653", "#e63427", "#000000"], // Green for Like, Red for Comment, Black for Share
      plotOptions: {
        bar: {
          borderRadius: 5,
          horizontal: false, // Vertical bars
        },
      },
      xaxis: {
        categories: [dropdown1, dropdown2], // Bar labels
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    };

    let chart: any;
    const chartElement = document.querySelector("#bar-chart");
    if (chartElement) {
      chart = new ApexCharts(chartElement, options);
      chart.render();
      return () => chart.destroy();
    }
  }, [responseData, dropdown1, dropdown2]);

  return (
    <div className="p-6 relative">
      <div className="absolute inset-0 bg-manga-pattern bg-cover bg-center opacity-20"></div>
      <h2 className="text-5xl lg:text-6xl font-bold text-center mb-12 font-manga relative z-10">
        <span className="relative z-10">Type Comparisons</span>
        <span className="absolute -top-1 right-1 text-5xl lg:text-6xl font-bold text-purple-300 -z-10 font-manga w-full">
          Type Comparisons
        </span>
      </h2>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-10 flex-wrap">
          <select
            className="w-52 px-4 py-3 border-4 border-black rounded-lg shadow-lg bg-white text-black font-bold text-lg font-mono hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            value={dropdown1}
            onChange={(e) =>
              handleDropdownChange(e.target.value, setDropdown1, dropdown2)
            }
          >
            <option value="">Select Option</option>
            {options
              .filter((option) => option !== dropdown2)
              .map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
          <div className="text-2xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 shadow-md transform rotate-3">
            V/S
          </div>
          <select
            className="w-52 px-4 py-3 border-4 border-black rounded-lg shadow-lg bg-white text-black font-bold text-lg font-mono hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
            value={dropdown2}
            onChange={(e) =>
              handleDropdownChange(e.target.value, setDropdown2, dropdown1)
            }
          >
            <option value="">Select Option</option>
            {options
              .filter((option) => option !== dropdown1)
              .map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </div>

        {/* Tables */}
        {/* {responseData?.tableData && (
          <div className="grid grid-cols-2 gap-10 mb-10">
            {responseData?.tableData.map((_post: any, index: any) => (
              <div key={index} className="w-full">
                <h3 className="text-xl font-bold mb-2">
                  Post Type: {dropdown1}
                </h3>
                <table className="min-w-full bg-white border-collapse border border-gray-400">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-2">
                        Metric
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        Likes
                      </td>
                      <td className="border border-gray-400 px-4 py-2">123</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        Shares
                      </td>
                      <td className="border border-gray-400 px-4 py-2">45</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )} */}

        {responseData?.graphData && (
          <div className="w-full flex justify-center mb-10">
            <div className="w-96 h-auto bg-white border-4 border-black rounded-lg p-4 shadow-lg">
              <h2 className="text-center text-2xl font-bold font-kanit text-black mb-4">
                Comparison Chart
              </h2>
              <div id="bar-chart"></div>
            </div>
          </div>
        )}

        {/* Conclusion Section */}
        {responseData?.conclusion && (
          <div className="w-full bg-white border-4 border-black rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
            <p className="text-lg">{responseData?.conclusion}</p>
          </div>
        )}

        {/* Response Box */}
        {/* {responseData && (
          <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-bold mb-2">API Response:</h3>
            <pre className="bg-gray-200 p-2 rounded">
              {JSON.stringify(responseData, null, 2)}
            </pre>
          </div>
        )} */}
      </div>
    </div>
  );
};
