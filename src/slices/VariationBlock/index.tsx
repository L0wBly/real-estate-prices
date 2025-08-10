"use client";
import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

export type VariationBlockProps = SliceComponentProps<Content.VariationBlockSlice>;

const VariationBlock: FC<VariationBlockProps> = ({ slice }) => {
  // Simulated data – replace with real API/Prismic data later
  const variationData = [
    { month: "Sept", value: 0 },
    { month: "Oct", value: 0.4 },
    { month: "Nov", value: 0.7 },
    { month: "Dec", value: 1.1 },
    { month: "Jan", value: 1.6 },
    { month: "Feb", value: 1.8 },
    { month: "Mar", value: 2.1 },
    { month: "Apr", value: 2.0 },
    { month: "May", value: 2.5 },
    { month: "Jun", value: 2.8 },
    { month: "Jul", value: 3.5 },
    { month: "Aug", value: 3.2 },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Price Variation Over 12 Months
        </h2>

        <p className="text-sm text-gray-500 mb-8">
          Simulated data from September 2024 to August 2025
        </p>

        <div className="bg-gray-50 rounded-xl shadow-sm p-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={variationData}>
              <XAxis dataKey="month" />
              <YAxis
                domain={["auto", "auto"]}
                tickFormatter={(value) => `${value.toFixed(1)}%`}
              />
              <Tooltip
                formatter={(value: number) => `${value.toFixed(2)}%`}
                labelClassName="font-medium text-sm"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default VariationBlock;
