import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  
  const years = Array.from({ length: 10 }, (_, index) => 2015 + index);
  const loanRates = [5.4, 5.1, 4.9, 4.65, 4.85, 4.3, 4.15, 3.9, 4.25, 4.1];
  const homePrices = [86, 89, 91, 94, 99, 103, 108, 112, 118, 121];

  const chartWidth = 560;
  const chartHeight = 180;
  const chartPadding = 20;

  const rateMin = Math.min(...loanRates);
  const rateMax = Math.max(...loanRates);
  const priceMin = Math.min(...homePrices);
  const priceMax = Math.max(...homePrices);

  const toChartPoints = (
    data: number[],
    minValue: number,
    maxValue: number
  ) =>
    data.map((value, index) => {
      const x =
        chartPadding +
        (index / (data.length - 1)) * (chartWidth - chartPadding * 2);
      const normalized =
        maxValue === minValue ? 0.5 : (value - minValue) / (maxValue - minValue);
      const y =
        chartPadding +
        (1 - normalized) * (chartHeight - chartPadding * 2);
      return { x, y, value };
    });

  const ratePoints = toChartPoints(loanRates, rateMin, rateMax);
  const pricePoints = toChartPoints(homePrices, priceMin, priceMax);

  const toPath = (points: { x: number; y: number }[]) =>
    points
      .map((point, index) =>
        index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
      )
      .join(' ');

  useEffect(() => {
    // 1. Counter Animation (Non-linear for realism)
    const duration = 2200; 
    const startTime = Date.now();

    const animateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quartic function for smooth slowdown at end
      const easeOut = 1 - Math.pow(1 - progress, 4); 
      
      setCount(easeOut * 100);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        // Animation complete sequence
        setTimeout(() => setIsExiting(true), 200);
        setTimeout(() => onComplete(), 1200); // Wait for exit animation
      }
    };

    requestAnimationFrame(animateCounter);

    return () => {
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-glc-red text-white overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isExiting ? '-translate-y-full rounded-b-[100px] shadow-2xl' : 'translate-y-0 rounded-b-none'
      }`}
    >
      <style>
        {`
          @keyframes lineDraw {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes pointPop {
            0% {
              opacity: 0;
              transform: scale(0.4);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      {/* Dynamic Background Grid (White lines on Red background) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }}>
      </div>

      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-start gap-4 p-8 md:p-12 z-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">
            数据自动搜索中
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase">
          <span className="text-white/70">近十年趋势</span>
          <span className="text-glc-gold bg-white/10 px-3 py-1 rounded-full border border-white/10">
            2015-2024
          </span>
        </div>
      </div>

      {/* Center Main Content */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 px-8 md:px-12">
        <div
          className={`transition-all duration-500 transform ${
            isExiting ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-white/60 uppercase">
                动态数据载入
              </p>
              <h1 className="text-3xl md:text-5xl font-black italic tracking-tight text-white">
                贷款利率 &amp; 房价浮动
              </h1>
              <p className="mt-3 text-sm text-white/70 max-w-xl">
                模拟过去 10 年利率与房价走势，实时绘制双轨迹曲线，等待加载完成即可进入页面。
              </p>
            </div>
            <div className="flex flex-col gap-3 text-xs font-semibold text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"></span>
                贷款利率（%）
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-glc-gold shadow-[0_0_10px_rgba(204,164,59,0.6)]"></span>
                房价指数
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="w-full h-[220px] md:h-[260px]"
              role="img"
              aria-label="近十年贷款利率与房价指数变化图"
            >
              <defs>
                <linearGradient id="priceGlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#CCA43B" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#CCA43B" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <path
                d={toPath(ratePoints)}
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: 1000,
                  animation: 'lineDraw 2.2s ease forwards',
                }}
              />
              <path
                d={toPath(pricePoints)}
                fill="none"
                stroke="url(#priceGlow)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: 1000,
                  animation: 'lineDraw 2.6s ease forwards',
                }}
              />
              {ratePoints.map((point, index) => (
                <circle
                  key={`rate-${point.x}`}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="#FFFFFF"
                  style={{
                    transformOrigin: `${point.x}px ${point.y}px`,
                    animation: 'pointPop 0.6s ease forwards',
                    animationDelay: `${0.2 + index * 0.08}s`,
                    opacity: 0,
                  }}
                />
              ))}
              {pricePoints.map((point, index) => (
                <circle
                  key={`price-${point.x}`}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="#CCA43B"
                  style={{
                    transformOrigin: `${point.x}px ${point.y}px`,
                    animation: 'pointPop 0.6s ease forwards',
                    animationDelay: `${0.3 + index * 0.08}s`,
                    opacity: 0,
                  }}
                />
              ))}
              {years.map((year, index) => (
                <text
                  key={year}
                  x={ratePoints[index].x}
                  y={chartHeight - 4}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="10"
                >
                  {year}
                </text>
              ))}
            </svg>
            <div className="mt-4 flex flex-wrap justify-between gap-3 text-xs text-white/70">
              <div>
                利率区间：{rateMin.toFixed(2)}% - {rateMax.toFixed(2)}%
              </div>
              <div>
                房价指数区间：{priceMin} - {priceMax}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Giant Number */}
      <div className="p-8 md:p-12 z-10 w-full flex items-end justify-between relative">
        
        {/* Decorative Lines */}
        <div className="w-full absolute bottom-12 left-0 h-[1px] bg-white/20"></div>
        <div 
          className="absolute bottom-12 left-0 h-[2px] bg-glc-gold transition-all duration-100 ease-linear shadow-[0_0_15px_#CCA43B]"
          style={{ width: `${count}%` }}
        ></div>

        <div className="text-xs font-mono text-white/70 hidden md:block">
          DATA STREAM LOCKED<br />
          UPDATE MODE: REAL-TIME
        </div>

        <div className="flex items-baseline">
          <div className="text-[5rem] md:text-[10rem] leading-[0.8] font-black font-sans tracking-tighter text-white select-none relative drop-shadow-xl">
            {Math.floor(count)}
            {/* Subtle glow behind the number */}
            <div className="absolute inset-0 blur-3xl bg-white/20 -z-10"></div>
          </div>
          <span className="text-2xl md:text-4xl font-bold text-glc-gold mb-4 md:mb-8 ml-2">
            %
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
