// import { useFetch } from "./hooks/useFetch";
// import { useState } from "react";
import { Container } from "@mui/material";
import SCard from "./components/SCard/SCard";
import SGradientButton from "./components/SGradientButton/SGradientButton";

export default function App() {
  // const [url, setUrl] = useState("http://localhost:3000/notes");
  // const { data, isPending, error } = useFetch(url);

  return (
    <Container>
      <SCard />
      <SGradientButton />
    </Container>
  );
}
