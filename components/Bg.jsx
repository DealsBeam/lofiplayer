export default function Background({ bgClass }) {
  return (
    <div className={`w-screen h-screen bg-lofi-day bg-no-repeat bg-center bg-cover ${bgClass}`} />
  );
}
