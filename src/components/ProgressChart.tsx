
import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface ProgressChartProps {
  title: string;
  data: Array<{ value: number; time?: string }>;
  color?: string;
  height?: number;
}

const ProgressChart = ({ title, data, color = 'hsl(180 100% 50%)', height = 120 }: ProgressChartProps) => {
  return (
    <Card className="p-4 bg-card/50 border-glow backdrop-blur-sm">
      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
        {title}
      </h4>
      <div style={{ height: height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(180 50% 70%)', fontSize: 10 }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: color }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProgressChart;
