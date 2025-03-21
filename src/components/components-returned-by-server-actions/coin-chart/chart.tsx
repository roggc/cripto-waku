"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { formatDate } from "@/src/utils/date";

export default function Chart({
  data,
}: {
  data: { date: Date; price: number }[];
}) {
  return (
    <div className="w-full flex-1">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={(value) => formatDate(value)} />
          <YAxis />
          <Tooltip labelFormatter={(value) => formatDate(value)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
