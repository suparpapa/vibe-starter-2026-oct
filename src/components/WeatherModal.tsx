import React, { useState } from 'react';
import { X, Sun, CloudRain, Cloud, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface WeatherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeatherModal: React.FC<WeatherModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'F' | 'C'>('F');

  if (!isOpen) return null;

  const toTemp = (f: number) => {
    return unit === 'F' ? `${f}°F` : `${Math.round(((f - 32) * 5) / 9)}°C`;
  };

  const cities = [
    { name: 'New York', tempF: 64, cond: 'Sunny', highF: 68, lowF: 52 },
    { name: 'Washington, D.C.', tempF: 66, cond: 'Partly Cloudy', highF: 70, lowF: 54 },
    { name: 'London', tempF: 57, cond: 'Cloudy', highF: 61, lowF: 49 },
    { name: 'Paris', tempF: 61, cond: 'Sunny', highF: 64, lowF: 50 },
    { name: 'Tokyo', tempF: 71, cond: 'Clear', highF: 75, lowF: 62 }
  ];

  const markets = [
    { name: 'S&P 500', value: '5,853.98', change: '+0.38%', isUp: true },
    { name: 'Dow Jones', value: '42,924.89', change: '+0.21%', isUp: true },
    { name: 'Nasdaq Composite', value: '18,573.13', change: '+0.54%', isUp: true },
    { name: 'Russell 2000', value: '2,241.60', change: '-0.14%', isUp: false },
    { name: '10-Yr Treasury', value: '4.20%', change: '+0.04', isUp: true }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div className="bg-white text-[#121212] w-full max-w-[520px] rounded-sm shadow-2xl p-6 relative border border-gray-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
          <h3 className="font-serif font-bold text-xl text-gray-900">
            Weather &amp; Market Snapshot
          </h3>
          <div className="flex items-center border border-gray-300 rounded text-xs font-sans">
            <button
              onClick={() => setUnit('F')}
              className={`px-2 py-0.5 ${unit === 'F' ? 'bg-black text-white font-bold' : 'text-gray-600'}`}
            >
              °F
            </button>
            <button
              onClick={() => setUnit('C')}
              className={`px-2 py-0.5 ${unit === 'C' ? 'bg-black text-white font-bold' : 'text-gray-600'}`}
            >
              °C
            </button>
          </div>
        </div>

        {/* Weather section */}
        <div className="mb-6">
          <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-600 mb-2.5">
            Regional Forecasts
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
            {cities.map((city) => (
              <div
                key={city.name}
                className="p-2.5 rounded bg-gray-50 border border-gray-200 flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-gray-900 block">{city.name}</span>
                  <span className="text-[10px] text-gray-500">{city.cond}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-base text-gray-900 block">
                    {toTemp(city.tempF)}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    H: {toTemp(city.highF)} L: {toTemp(city.lowF)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Markets section */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-600 mb-2.5">
            Financial Indices
          </h4>
          <div className="space-y-1.5 font-sans text-xs">
            {markets.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between p-2 rounded hover:bg-gray-50 border-b border-gray-100"
              >
                <span className="font-medium text-gray-800">{m.name}</span>
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-gray-900">{m.value}</span>
                  <span
                    className={`font-semibold flex items-center ${
                      m.isUp ? 'text-emerald-700' : 'text-red-700'
                    }`}
                  >
                    {m.change}
                    {m.isUp ? (
                      <TrendingUp className="w-3 h-3 ml-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 ml-1" />
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
