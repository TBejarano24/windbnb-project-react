import CardPreset from "./CardPreset";
import useStaysData from "../hooks/useStaysData";

export default function StaysContainer({ guestsQuantity, location }) {
  const [data, error, loading] = useStaysData("/stays.json");

  if (loading) {
    return <p className="text-[26px] font-bold mt-10">Loading content...</p>;
  }

  if (error) {
    return (
      <p className="text-[26px] font-bold mt-10 text-[#4b1414]">
        Something went wrong...
      </p>
    );
  }

  const filteredStays = data?.filter(
    (stay) =>
      stay.maxGuests >= guestsQuantity &&
      stay.city.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="max-w-[320px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]">
      <div className="flex justify-between items-center m-[8px_0px_20px_0px]">
        <h2 className="font-bold text-[#333] text-[24px]">Stays in Finland</h2>
        <span className="text-[12px] text-[#605a59]">
          {filteredStays?.length > 12 ? "12+" : filteredStays?.length ?? 0}{" "}
          stays
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredStays?.map((stay) => {
          return <CardPreset info={stay} />;
        })}
      </div>
    </div>
  );
}
