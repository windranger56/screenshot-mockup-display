
import React from 'react';
import MetricCard from '@/components/MetricCard';
import VehicleStatus from '@/components/VehicleStatus';
import RouteMap from '@/components/RouteMap';
import ProgressChart from '@/components/ProgressChart';

const Index = () => {
  // Mock data for progress dynamics
  const progressData = [
    { value: 25, time: '020' },
    { value: 30, time: '' },
    { value: 22, time: '' },
    { value: 35, time: '' },
    { value: 28, time: '' },
    { value: 40, time: '' },
    { value: 33, time: '' },
    { value: 45, time: '' },
    { value: 38, time: '' },
    { value: 50, time: '' },
    { value: 42, time: '' },
    { value: 55, time: '' },
    { value: 48, time: '' },
    { value: 60, time: '' },
    { value: 52, time: '' },
    { value: 65, time: '' },
    { value: 58, time: '' },
    { value: 70, time: '' },
    { value: 62, time: '' },
    { value: 75, time: '20' },
    { value: 68, time: '' },
    { value: 80, time: '' },
    { value: 72, time: '' },
    { value: 85, time: '' },
    { value: 78, time: '' },
    { value: 90, time: '' },
    { value: 82, time: '' },
    { value: 95, time: '' },
    { value: 88, time: '' },
    { value: 100, time: '150' },
    { value: 92, time: '' },
    { value: 105, time: '' },
    { value: 98, time: '' },
    { value: 110, time: '' },
    { value: 102, time: '104' }
  ];

  const speedData = [
    { value: 45, time: '220' },
    { value: 48, time: '' },
    { value: 52, time: '' },
    { value: 49, time: '' },
    { value: 55, time: '' },
    { value: 51, time: '' },
    { value: 58, time: '' },
    { value: 54, time: '' },
    { value: 61, time: '' },
    { value: 57, time: '' },
    { value: 64, time: '' },
    { value: 60, time: '6.0' }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-screen">
          {/* Left Column */}
          <div className="xl:col-span-1 space-y-6">
            {/* Vehicle Status */}
            <VehicleStatus />
            
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                title="DEPTH"
                value="26.4"
                unit="m"
              />
              <MetricCard
                title="SPEED"
                value="12.5"
                unit="m/h"
              />
              <MetricCard
                title="DISTANCE"
                value="875"
                unit="m"
              />
              <MetricCard
                title="STATUS"
                value="Active"
                unit=""
                status="active"
              />
            </div>
            
            {/* Progress Dynamics Chart */}
            <ProgressChart
              title="PROGRESS DYNAMICS"
              data={progressData}
              color="hsl(180 100% 50%)"
              height={160}
            />
          </div>
          
          {/* Right Column */}
          <div className="xl:col-span-2 space-y-6">
            {/* Route Map */}
            <div className="h-2/3">
              <RouteMap />
            </div>
            
            {/* Bottom Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-1/3">
              <ProgressChart
                title="SPEED ANALYTICS"
                data={speedData}
                color="hsl(180 100% 60%)"
                height={120}
              />
              
              <div className="bg-card/50 border-glow backdrop-blur-sm rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                    SYSTEM STATUS
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Navigation</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Communication</span>
                      <div className="w-2 h-2 bg-aqua-glow rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Propulsion</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Life Support</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
