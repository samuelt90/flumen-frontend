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
  fuel: number;
  transfers: number;
};

const data: Item[] = [
  { date: "2026-01-18", fuel: 85000, transfers: 12000 },
  { date: "2026-01-19", fuel: 91000, transfers: 14000 },
  { date: "2026-01-20", fuel: 88000, transfers: 13500 },
  { date: "2026-01-21", fuel: 93000, transfers: 16000 },
];

export default function FuelVsTransfersChart() {
  return (
    <div className="rounded-2xl border p-4">
      <h3 className="text-sm font-medium mb-3">
        Combustible vs Transferencias
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip
                    formatter={(value) =>
                        typeof value === "number"
                        ? `Q ${value.toLocaleString("es-GT")}`
                        : value
                    }
                    />
            <Line
              type="monotone"
              dataKey="fuel"
              stroke="#111827"
              strokeWidth={2}
              name="Combustible"
            />
            <Line
              type="monotone"
              dataKey="transfers"
              stroke="#6B7280"
              strokeWidth={2}
              name="Transferencias"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
