import { useState } from "react";
import LogoAndFilter from "./components/LogoAndFilter";
import StaysContainer from "./components/StaysContainer";

export default function App() {
  const [guestsQuantity, setGuestsQuantity] = useState(0);
  const [location, setLocation] = useState("");

  return (
    <div className="flex flex-col items-center">
      <LogoAndFilter
        setGuestsQuantity={setGuestsQuantity}
        guestsQuantity={guestsQuantity}
        setLocation={setLocation}
      />
      <StaysContainer guestsQuantity={guestsQuantity} location={location} />
    </div>
  );
}
