import CardPreset from "./CardPreset";
import useStaysData from "../hooks/useStaysData";

export default function StaysContainer({ guestsQuantity, location }) {
  const [data, error, loading, staysCount] = useStaysData("/stays.json");

  if (loading) {
    return <p>Loading content...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="max-w-[320px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]">
      <div className="flex justify-between items-center m-[8px_0px_20px_0px]">
        <h2 className="font-bold text-[#333] text-[24px]">Stays in Finland</h2>
        <span className="text-[12px] text-[#605a59]">
          {staysCount > 12 ? "12+" : staysCount} stays
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((stay) => {
          if (
            stay.maxGuests >= guestsQuantity &&
            stay.city.toLowerCase().includes(location.toLowerCase())
          ) {
            return <CardPreset info={stay} />;
          }
        })}
      </div>
    </div>
  );
}
