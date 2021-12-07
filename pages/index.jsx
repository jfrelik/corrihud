import * as React from 'react';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

import StatusBarTop from '../components/StatusBarTop/StatusBarTop';
import Hero from '../components/Hero/Hero';
import StatusBarBottom from '../components/StatusBarBottom/StatusBarBottom';

export default function Home() {
  const { data: covidData, error: covidError } = useSWR('/api/covid', fetcher);
  const { data: weatherData, error: weatherError } = useSWR(
    '/api/weather',
    fetcher
  );

  const [retracted, setRetracted] = React.useState(true);
  React.useEffect(() => {
    let retractInterval = setInterval(() => {
      setRetracted(!retracted);
    }, 5000);

    return () => clearInterval(retractInterval);
  }, [retracted]);

  if (!covidData) return <h1>Loading...</h1>;
  if (!weatherData) return <h1>Loading...</h1>;
  const { todayCases, todayDeaths, todayRecovered } = covidData;
  const {
    current: {
      temp_c,
      condition: { text: weatherDesc }
    }
  } = weatherData;

  // Temp for tests
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus lorem, efficitur elementum venenatis id, pulvinar a orci. Suspendisse at lacus arcu. Sed vehicula tellus non nibh ornare, ac ullamcorper massa pharetra. Nullam in vehicula ligula. Aenean at magna lacus. Proin lorem nisi, dictum vel velit ut, interdum rutrum odio. Nulla id tempus sapien. Aenean accumsan ante ut cursus consequat. Sed eu lectus sit amet massa venenatis vehicula eget sed sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis turpis tellus, at rutrum mi tempor eget. Donec semper vulputate magna, in accumsan erat iaculis vel. Fusce vulputate consequat purus, vitae aliquet eros tincidunt eget. Suspendisse fringilla dignissim sapien, vitae eleifend massa lobortis vitae. Nulla facilisi. ';

  return (
    <div className="overflow-hidden">
      <div className="bg-hero w-screen h-screen absolute z-0 brightness-75" />
      <div className="flex flex-col h-screen w-screen relative z-50 items-center">
        <StatusBarTop
          retracted={retracted}
          weatherDesc={weatherDesc}
          temp_c={temp_c}
        />
        <Hero retracted={retracted} title={'Ogłoszenie'} content={text} />
        <StatusBarBottom
          retracted={retracted}
          todayCases={todayCases}
          todayDeaths={todayDeaths}
          todayRecovered={todayRecovered}
        />
      </div>
    </div>
  );
}
