import * as React from 'react';

export default function Hero({ retracted, title, content }) {
  const [height, setHeight] = React.useState('0px');

  const contentSpace = React.useRef(null);

  React.useEffect(() => {
    const toggleAccordion = () => {
      setHeight(!retracted ? '0px' : `${contentSpace.current.scrollHeight}px`);
    };

    toggleAccordion();
  }, [retracted]);

  return (
    <div className="flex flex-col flex-grow flex-center justify-center items-center">
      <div className="bg-blueGray-800 p-8 rounded-3xl backdrop-filter backdrop-blur-lg bg-opacity-70">
        <div className="text-8xl text-white uppercase text-center transition-all duration-500 ease-in-out">
          {title}
        </div>
        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="overflow-hidden transition-max-height duration-700 ease-in-out self-center font-bold text-white max-w-screen-md"
        >
          <div className="pt-8 pb-2 text-justify text-lg">{content}</div>
        </div>
      </div>
    </div>
  );
}
