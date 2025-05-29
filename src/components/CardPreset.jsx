export default function CardPreset({ info }) {
  return (
    <div className="place-self-center w-[270px] m-[10px_10px_0_10px] flex flex-col gap-1">
      <img
        className="rounded-xl object-cover h-[190px]"
        src={info.photo}
        alt=""
      />
      <div
        className={`grid items-center justify-center ${
          info.superHost ? "grid-cols-[1.5fr_2.9fr_1fr]" : "grid-cols-[2fr_1fr]"
        }`}
      >
        {info.superHost && (
          <span className="text-[11px] font-bold border border-[#605a59] px-2 rounded-lg text-[#605a59]">
            SUPERHOST
          </span>
        )}

        <span className="text-[12px] ml-1.5 text-[#8d8d8d]">
          {info.type} {info.beds ? `. ${info.beds} beds` : ""}
        </span>
        <span className="text-[11px] mr-1.5 text-[#605a59] flex gap-1 justify-self-end">
          <img src="/icons/star.svg" alt="" width="13px" />
          {info.rating}
        </span>
      </div>
      <h3 className="text-[12px] font-bold text-[#605a59] ml-1.5">
        {info.title}
      </h3>
    </div>
  );
}
