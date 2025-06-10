
import React from 'react';
import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  status?: 'active' | 'paused' | 'completed';
}

const MetricCard = ({ title, value, unit, status }: MetricCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return 'text-aqua-glow';
      case 'paused':
        return 'text-submarine-orange';
      case 'completed':
        return 'text-green-400';
      default:
        return 'text-aqua-glow';
    }
  };

  const getStatusDot = () => {
    if (!status) return null;
    
    return (
      <div className="flex items-center gap-2 mb-2">
        <div 
          className={`w-2 h-2 rounded-full ${
            status === 'active' ? 'bg-aqua-glow animate-pulse-glow' :
            status === 'paused' ? 'bg-submarine-orange' :
            'bg-green-400'
          }`}
        />
        <span className={`text-sm capitalize ${getStatusColor()}`}>
          {status}
        </span>
      </div>
    );
  };

  return (
    <Card className="p-6 bg-card/50 border-glow backdrop-blur-sm">
      {getStatusDot()}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-aqua-bright">
            {value}
          </span>
          <span className="text-lg text-muted-foreground">
            {unit}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
