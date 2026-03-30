import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../contexts/ThemeContext';

interface ChartProps {
  data: any[];
  lines: { dataKey: string; stroke: string; dashed?: boolean }[];
  height?: number | string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs py-1.5 px-3 rounded-lg shadow-lg">
        <p className="font-semibold">${payload[0].value}</p>
        <p className="text-gray-400 dark:text-gray-500 text-[10px]">{label}</p>
      </div>
    );
  }
  return null;
};

export const Chart = ({ data, lines, height = 256 }: ChartProps) => {
  const { theme } = useTheme();
  const gridColor = theme === 'dark' ? '#374151' : '#f3f4f6';
  const textColor = theme === 'dark' ? '#9ca3af' : '#9ca3af';
  const cursorColor = theme === 'dark' ? '#4b5563' : '#e5e7eb';
  const activeDotStroke = theme === 'dark' ? '#111827' : '#fff';

  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: textColor }} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: textColor }} tickFormatter={(value) => `$${value}`} />
          <RechartsTooltip content={<CustomTooltip />} cursor={{ stroke: cursorColor, strokeWidth: 1, strokeDasharray: '3 3' }} />
          {lines.map((line, i) => (
            <Line 
              key={i} 
              type="monotone" 
              dataKey={line.dataKey} 
              stroke={line.stroke} 
              strokeWidth={2} 
              dot={false} 
              strokeDasharray={line.dashed ? "5 5" : ""} 
              activeDot={!line.dashed ? { r: 4, fill: line.stroke, stroke: activeDotStroke, strokeWidth: 2 } : false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
