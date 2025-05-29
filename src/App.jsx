import { useState } from "react";
import LogoAndFilter from "./components/LogoAndFilter";
import StaysContainer from "./components/StaysContainer";

export default function App() {
  const [guestsQuantity, setGuestsQuantity] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <LogoAndFilter
        setGuestsQuantity={setGuestsQuantity}
        guestsQuantity={guestsQuantity}
      />
      <StaysContainer guestsQuantity={guestsQuantity} />
    </div>
  );
}
