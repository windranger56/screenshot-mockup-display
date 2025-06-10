
import React from 'react';
import { Card } from '@/components/ui/card';

const RouteMap = () => {
  // Mock route data based on the image
  const stations = [
    { name: 'Sokolnikheskaya', x: 380, y: 50, status: 'active' },
    { name: 'Utkinaya', x: 320, y: 60, status: 'completed' },
    { name: 'Komeskaya', x: 280, y: 90, status: 'completed' },
    { name: 'Zum-skukoroetskaya', x: 420, y: 70, status: 'upcoming' },
    { name: 'Chearoveskaya', x: 400, y: 120, status: 'upcoming' },
    { name: 'Alexarinkeseskaya', x: 460, y: 130, status: 'upcoming' },
    { name: 'Taveskaya', x: 280, y: 130, status: 'completed' },
    { name: 'Sokolnicheskaya', x: 240, y: 160, status: 'completed' },
    { name: 'Alltisaneskaya', x: 340, y: 180, status: 'paused' },
    { name: 'Pousaya', x: 380, y: 150, status: 'upcoming' },
    { name: 'Jubinaeskaya', x: 420, y: 180, status: 'upcoming' },
    { name: 'Tnylaskaya', x: 460, y: 200, status: 'upcoming' },
    { name: 'Tukthakovaya', x: 200, y: 210, status: 'completed' },
    { name: 'Arbviskachaxranskaya', x: 300, y: 230, status: 'completed' },
    { name: 'Tignkovleskaya', x: 440, y: 240, status: 'upcoming' },
    { name: 'Kopokysessaya', x: 350, y: 270, status: 'completed' },
    { name: 'Alkuororecisky', x: 440, y: 280, status: 'upcoming' },
    { name: 'Zamoskvoresetsaya', x: 220, y: 290, status: 'completed' },
    { name: 'Alexandessheskaya', x: 320, y: 310, status: 'completed' },
    { name: 'Tylaminescskaya', x: 450, y: 320, status: 'upcoming' },
    { name: 'leerinunktikyeskaya', x: 200, y: 340, status: 'completed' },
    { name: 'Aktovlavy', x: 240, y: 380, status: 'completed' },
    { name: 'Kaclapshtcheskaya', x: 300, y: 380, status: 'completed' },
    { name: 'Sholvioveskaya', x: 430, y: 370, status: 'upcoming' },
    { name: 'Tetlanskaya', x: 210, y: 410, status: 'completed' },
    { name: 'Sheckleveskaya', x: 380, y: 420, status: 'upcoming' },
    { name: 'Completed', x: 270, y: 450, status: 'completed' },
    { name: 'Inotoskovecskaya', x: 390, y: 460, status: 'upcoming' }
  ];

  const connections = [
    // Main horizontal lines
    { from: 0, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 },
    { from: 1, to: 2 }, { from: 2, to: 6 }, { from: 6, to: 7 },
    { from: 7, to: 8 }, { from: 8, to: 9 }, { from: 9, to: 10 }, { from: 10, to: 11 },
    { from: 12, to: 13 }, { from: 13, to: 15 }, { from: 15, to: 16 },
    { from: 17, to: 18 }, { from: 18, to: 19 },
    { from: 20, to: 21 }, { from: 21, to: 22 }, { from: 22, to: 23 },
    { from: 24, to: 26 }, { from: 26, to: 25 }, { from: 25, to: 27 },
    // Vertical connections
    { from: 0, to: 9 }, { from: 1, to: 8 }, { from: 6, to: 13 },
    { from: 9, to: 15 }, { from: 13, to: 21 }, { from: 15, to: 22 },
    { from: 21, to: 25 }, { from: 4, to: 10 }, { from: 10, to: 14 },
    { from: 14, to: 16 }, { from: 16, to: 19 }, { from: 19, to: 23 },
    { from: 23, to: 25 }
  ];

  const getStationColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'aqua-glow';
      case 'paused':
        return 'submarine-orange';
      case 'completed':
        return 'green-400';
      case 'upcoming':
        return 'gray-500';
      default:
        return 'gray-500';
    }
  };

  return (
    <Card className="p-6 bg-card/50 border-glow backdrop-blur-sm h-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-aqua-bright mb-2">Route Network</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-aqua-glow animate-pulse-glow"></div>
            <span className="text-muted-foreground">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-submarine-orange"></div>
            <span className="text-muted-foreground">Paused</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="text-muted-foreground">Completed</span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full h-96 overflow-hidden rounded-lg bg-ocean-deep border border-border/50">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
          {/* Connection lines */}
          {connections.map((connection, index) => {
            const fromStation = stations[connection.from];
            const toStation = stations[connection.to];
            const isActive = fromStation.status === 'completed' && toStation.status === 'completed';
            
            return (
              <line
                key={index}
                x1={fromStation.x}
                y1={fromStation.y}
                x2={toStation.x}
                y2={toStation.y}
                stroke={isActive ? 'hsl(180 100% 50%)' : 'hsl(180 50% 30%)'}
                strokeWidth={isActive ? "2" : "1"}
                opacity={isActive ? "0.8" : "0.3"}
                className={isActive ? "animate-pulse" : ""}
              />
            );
          })}
          
          {/* Stations */}
          {stations.map((station, index) => (
            <g key={index}>
              <circle
                cx={station.x}
                cy={station.y}
                r={station.status === 'active' ? "6" : "4"}
                fill={`hsl(var(--${getStationColor(station.status).replace('-', '-')}))`}
                className={station.status === 'active' ? "animate-pulse-glow" : ""}
                opacity={station.status === 'upcoming' ? "0.5" : "1"}
              />
              <text
                x={station.x + 10}
                y={station.y - 8}
                fill="hsl(180 100% 90%)"
                fontSize="8"
                opacity="0.7"
                className="select-none"
              >
                {station.name}
              </text>
            </g>
          ))}
          
          {/* Current position indicator */}
          <circle
            cx="340"
            cy="180"
            r="8"
            fill="none"
            stroke="hsl(180 100% 50%)"
            strokeWidth="2"
            opacity="0.8"
            className="animate-ping"
          />
        </svg>
      </div>
    </Card>
  );
};

export default RouteMap;
