import SButton from "./components/SButton";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
import { Container } from "@mui/material";
import SCard from "./components/SCard";

export default function App() {
  const [url, setUrl] = useState("http://localhost:3000/notes");
  const { data, isPending, error } = useFetch(url);

  return (
    <Container>
      <SCard
        backgroundImage=
        "linear-gradient(to right, #1D976C 0%, #93F9B9  51%, #1D976C  100%)",
        width={200}
        height={200}
      />
    </Container>
    // <div>
    //   {isPending && <div>Loading...</div>}
    //   {error && <div>{error}</div>}
    //   {data && data.map((d) => <div key={d.id}>{d.title}</div>)}
    //   <SButton
    //     title="Fetch All Data"
    //     onClick={() => setUrl("http://localhost:3000/notes")}
    //   />
    //   <SButton
    //     title="Fetch Work Data"
    //     onClick={() => setUrl("http://localhost:3000/notes?category=work")}
    //   />
    // </div>
  );
}