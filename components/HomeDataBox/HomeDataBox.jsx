export default function HomeDataBox({ data, title, css }) {
  return (
    <div className="rounded-lg h-full flex flex-col justify-center shadow-2xl bg-white backdrop-filter backdrop-blur-md bg-opacity-70">
      <p
        className={`antialiased self-center p-3 font-black text-center text-8xl ${css}`}
      >
        {data}
      </p>
      <p className="antialiased font-medium text-center text-xl">{title}</p>
    </div>
  );
}
