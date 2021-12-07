import * as React from 'react';

export default function StatusBarBottom({
  retracted,
  todayRecovered,
  todayDeaths,
  todayCases
}) {
  return (
    <div
      className={
        'bg-blueGray-800 backdrop-filter backdrop-blur-xl bg-opacity-70 flex rounded-t-lg justify-center transition-all duration-500 ease-in-out ' +
        (retracted ? 'h-12' : 'h-32')
      }
    >
      <div className="grid grid-cols-3 divide-x h-full self-center divide-sky-500 ">
        <div className="flex flex-col text-red-500 justify-center items-stretch">
          <div
            className={
              'text-align-center transition-all duration-500 ease-in-out self-center px-5 ' +
              (retracted ? 'text-3xl' : 'text-5xl')
            }
          >
            {todayCases}
          </div>
          <div
            className={
              'transition-all duration-500 text-white ease-in-out font-bold self-center ' +
              (retracted
                ? 'opacity-0 scale-0 h-0'
                : 'opacity-100 scale-100 h-auto')
            }
          >
            Zakażonych
          </div>
        </div>
        <div className="flex flex-col text-sky-300 justify-center items-stretch px-5 ">
          <div
            className={
              'transition-all duration-500 ease-in-out self-center ' +
              (retracted ? 'text-3xl' : 'text-5xl')
            }
          >
            {todayDeaths}
          </div>
          <div
            className={
              'transition-all duration-500 ease-in-out self-center font-bold text-white ' +
              (retracted
                ? 'opacity-0 scale-0 h-0'
                : 'opacity-100 scale-100 h-auto')
            }
          >
            Zmarłych
          </div>
        </div>
        <div className="flex flex-col text-green-400 justify-center items-stretch">
          <div
            className={
              'text-align-center transition-all duration-500 ease-in-out self-center px-5 ' +
              (retracted ? 'text-3xl' : 'text-5xl')
            }
          >
            {todayRecovered}
          </div>
          <div
            className={
              'transition-all duration-500 ease-in-out self-center font-bold text-white ' +
              (retracted
                ? 'opacity-0 scale-0 h-0'
                : 'opacity-100 scale-100 h-auto')
            }
          >
            Wyzdrowiałych
          </div>
        </div>
      </div>
    </div>
  );
}
