"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  total: number;
  diario: number;
  semanal: number;
};

export default function CuponesBarChart({ total, diario, semanal }: Props) {
  const data = [
    { name: "Total", value: total },
    { name: "Prom. diario", value: diario },
    { name: "Prom. semanal", value: semanal },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
