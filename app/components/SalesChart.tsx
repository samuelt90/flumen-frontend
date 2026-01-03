"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Item = {
  date: string;
  total_sold: number;
};

export default function SalesChart({ data }: { data: Item[] }) {
  const formatMoney = (v?: number) =>
  v ? `Q ${v.toLocaleString("es-GT")}` : "Q 0";

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={formatMoney} />
          <Tooltip formatter={(value) => formatMoney(Number(value))} />
          <Line
            type="monotone"
            dataKey="total_sold"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
