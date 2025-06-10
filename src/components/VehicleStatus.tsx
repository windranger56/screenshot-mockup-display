
import React from 'react';
import { Card } from '@/components/ui/card';
import SubmarineIcon from './SubmarineIcon';

const VehicleStatus = () => {
  return (
    <Card className="p-6 bg-card/50 border-glow backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-aqua-bright mb-1">Alexandrovsky Sad</h2>
          <p className="text-muted-foreground">Current Location</p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-bold text-aqua-bright mb-1">Kievskaya</h2>
          <p className="text-muted-foreground">Destination</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center my-8">
        <SubmarineIcon isMoving={true} className="scale-150" />
      </div>
      
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-ocean-light rounded-full border border-aqua-glow/30">
          <div className="w-2 h-2 bg-aqua-glow rounded-full animate-pulse"></div>
          <span className="text-sm text-aqua-bright font-medium">m/in</span>
        </div>
      </div>
    </Card>
  );
};

export default VehicleStatus;
