import * as React from 'react';

export default function StatusBarTop({ retracted, temp_c, weatherDesc }) {
  const [dt, setDt] = React.useState({
    hour: 0,
    minute: 0,
    day: 0,
    month: 0,
    year: 0,
    dayUntilExam: 0
  });

  React.useEffect(() => {
    let secTimer = setInterval(() => {
      const month = ('0' + new Date().getMonth()).slice(-2);
      setDt({
        hour: ('0' + new Date().getHours()).slice(-2),
        minute: ('0' + new Date().getMinutes()).slice(-2),
        second: ('0' + new Date().getSeconds()).slice(-2),
        day: ('0' + new Date().getDate()).slice(-2),
        month: parseInt(month) + 1,
        year: new Date().getFullYear()
      });
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <div
      className={
        'bg-blueGray-800 backdrop-filter backdrop-blur-xl bg-opacity-70 flex rounded-b-lg justify-center transition-all duration-500 ease-in-out ' +
        (retracted ? 'h-12' : 'h-32')
      }
    >
      <div className="grid grid-cols-3 divide-x h-full self-center divide-sky-400 ">
        <div className="flex flex-col text-white justify-center items-stretch">
          <div
            className={
              'text-align-center transition-all duration-500 ease-in-out self-center px-5 ' +
              (retracted ? 'text-3xl' : 'text-5xl')
            }
          >
            Corrihud
          </div>
          <div
            className={
              'transition-all duration-500 ease-in-out self-center ' +
              (retracted
                ? 'opacity-0 scale-0 h-0'
                : 'opacity-100 scale-100 h-auto')
            }
          >
            by JFrelik
          </div>
        </div>
        <div className="flex flex-col text-white justify-center items-stretch ">
          <div
            className={
              'transition-all duration-500 ease-in-out self-center ' +
              (retracted ? 'text-3xl' : 'text-5xl')
            }
          >
            {`${dt.hour}:${dt.minute}:${dt.second}`}
          </div>
          <div
            className={
              'transition-all duration-500 ease-in-out self-center px-5 ' +
              (retracted
                ? 'opacity-0 scale-0 h-0'
                : 'opacity-100 scale-100 h-auto')
            }
          >
            {`${dt.day}.${dt.month}.${dt.year}`}
          </div>
        </div>
        <div className="flex flex-col text-white justify-center items-stretch">
          <div
            className={
              'text-align-center transition-all duration-500 ease-in-out self-center px-5 ' +
              (retracted ? 'text-3xl' : 'text-5xl')
            }
          >
            {`${temp_c}°C`}
          </div>
          <div
            className={
              'transition-all duration-500 ease-in-out self-center ' +
              (retracted
                ? 'opacity-0 scale-0 h-0'
                : 'opacity-100 scale-100 h-auto')
            }
          >
            {weatherDesc}
          </div>
        </div>
      </div>
    </div>
  );
}
