import * as React from 'react';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

import HomeDataBox from '../components/HomeDataBox/HomeDataBox';

export default function Home() {
  const { data: covidData, error: covidError } = useSWR('/api/covid', fetcher);
  const { data: weatherData, error: weatherError } = useSWR(
    '/api/weather',
    fetcher
  );
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
      const examDate = new Date(2022, 4, 5);
      let dayMilliseconds = 1000 * 60 * 60 * 24;
      const month = ('0' + new Date().getMonth()).slice(-2);
      setDt({
        hour: ('0' + new Date().getHours()).slice(-2),
        minute: ('0' + new Date().getMinutes()).slice(-2),
        day: ('0' + new Date().getDate()).slice(-2),
        month: parseInt(month) + 1,
        year: new Date().getFullYear(),
        dayUntilExam: Math.ceil(
          (examDate.getTime() - new Date().getTime()) / dayMilliseconds
        )
      });
    }, 15000);

    return () => clearInterval(secTimer);
  }, []);

  if (!covidData) return <h1>Loading...</h1>;
  if (!weatherData) return <h1>Loading...</h1>;
  const { todayCases, todayDeaths, todayRecovered } = covidData;
  const {
    current: {
      temp_c,
      condition: { text: weatherDesc }
    }
  } = weatherData;

  return (
    <>
      <div className="bg-hero blur-sm w-screen h-screen absolute z-0 brightness-75" />
      <div className="flex h-screen w-screen justify-center relative content-center p-20 z-50">
        <div className="grid grid-flow-col grid-cols-12 grid-rows-3 gap-6 h-full">
          <div className="col-start-1 row-start-1 col-span-3">
            <HomeDataBox
              title="Zakażonych"
              data={todayCases}
              css="text-red-500 w-max"
            />
          </div>

          <div className="col-start-1 row-start-2 col-span-3">
            <HomeDataBox
              title="Zmarłych"
              data={todayDeaths}
              css="text-black w-max"
            />
          </div>
          <div className="col-start-1 row-start-3 col-span-3">
            <HomeDataBox
              title="Wyzdrowiałych"
              data={todayRecovered}
              css="text-green-500 w-max"
            />
          </div>
          <div className="row-start-1 col-start-9 col-span-4 transform scale-110">
            <HomeDataBox
              title={`${dt.day}.${dt.month}.${dt.year}r`}
              data={`${dt.hour}:${dt.minute}`}
            />
          </div>
          <div className="row-start-2 col-start-9 col-span-4 transform translate-x-12">
            <HomeDataBox title={weatherDesc} data={`${temp_c}°C`} />
          </div>
          <div className="row-start-3 col-start-7 col-span-5 transform scale-110">
            <HomeDataBox
              title="Matura 2022"
              data={`${dt.dayUntilExam} dni`}
              css="text-blue-600"
            />
          </div>
        </div>
      </div>
    </>
  );
}
