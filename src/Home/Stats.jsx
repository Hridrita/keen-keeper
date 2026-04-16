import React, { useContext } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { friendContext } from "../Context/FriendContext";

const Stats = () => {
  const { timeline } = useContext(friendContext);
  const COLORS = ["#2D4F3F", "#8B3DFF", "#4CAF6C"];

  const interactionCounts = timeline.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(interactionCounts).map((key) => ({
    name: key,
    value: interactionCounts[key],
  }));
  return (
    <div className="container mx-auto max-w-7xl p-4 md:p-8">
      <h2 className="font-bold text-2xl md:text-3xl mb-3">Friendship Analytics</h2>
      <div className="bg-base-100 rounded-2xl shadow-sm overflow-hidden">
        <h2 className="p-3 text-[#244d3fFF]">By Interaction Type</h2>
        <div className="h-62.5 md:h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData} 
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-10 justify-center p-4">
          <div className="flex gap-1 items-center">
            <div className="w-2 h-2 border border-[#2D4F3F] bg-[#2D4F3F] rounded-full"></div>
            <h3 className="text-[#64748bFF]">Text</h3>
          </div>

          <div className="flex gap-1 items-center">
            <div className="w-2 h-2 border border-[#8B3DFF] bg-[#8B3DFF] rounded-full"></div>
            <h3 className="text-[#64748bFF]">Video</h3>
          </div>

          <div className="flex gap-1 items-center">
            <div className="w-2 h-2 border border-[#4CAF6C] bg-[#4CAF6C] rounded-full"></div>
            <h3 className="text-[#64748bFF]">Call</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
