import React, { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const LocationBarChart = () => {
  const data = [
    { year: "2022", value: 27, color: "#298CDF" },
    { year: "2023", value: 32, color: "#1068B2" },
    { year: "2024", value: 288, color: "#0D528B" },
    { year: "2025", value: 351, color: "#073F6D" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) observer.unobserve(chartRef.current);
    };
  }, []);

  const CustomLabel = (props) => {
    const { x, y, width, value } = props;
    return (
      <text
        x={x + width / 2}
        y={y - 8}
        fill="#212121"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
      >
        {value}
      </text>
    );
  };

  const animatedData = data.map((d) => ({
    ...d,
    value: isVisible ? d.value : 0,
  }));

  return (
    <div className="w-full px-2 sm:px-0" ref={chartRef}>
      <div
        className="relative w-full max-w-[400px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[420px] 2xl:h-[440px] mx-auto"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={animatedData} barCategoryGap={0} maxBarSize={140}>
            <XAxis
              dataKey="year"
              axisLine={{ stroke: "#374151", strokeWidth: 2 }}
              tickLine={{ stroke: "#374151", strokeWidth: 1 }}
              tick={{
                fill: "#212121",
                fontSize: 14,
                fontWeight: 500,
              }}
              dy={10}
            />
            <YAxis
              domain={[0, 400]}
              axisLine={{ stroke: "#374151", strokeWidth: 2 }}
              tickLine={{ stroke: "#374151", strokeWidth: 1 }}
              tick={{
                fill: "#374151",
                fontSize: 0,
              }}
            />
            <Bar
              dataKey="value"
              label={<CustomLabel />}
              radius={[0, 0, 0, 0]}
              isAnimationActive={true}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Y-axis label */}
        <div
          className="absolute text-sm sm:text-base text-[#212121] font-semibold font-HVD"
          style={{
            left: "45px",
            top: "70%",
            transform: "rotate(-90deg) translateY(-50%)",
            transformOrigin: "left center",
            whiteSpace: "nowrap",
          }}
        >
          Number of locations
        </div>
      </div>
    </div>
  );
};

export default LocationBarChart;
