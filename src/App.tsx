import { useEffect, useState } from "react";
import "./index.css";
import LogoHeader from "./components/LogoHeader";
import Blocks from "./components/Blocks";
import Footer from "./components/Footer";

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://movies.slideworks.cc/movies?limit=12",
        { method: "GET" }
      );
      let dataApi = await response.json();
      dataApi = dataApi.data;
      setDados(dataApi);
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-yellow space-y-28 ">
      <div className="gap-2 space-y-6 mx-1">
        <LogoHeader dados={dados} />
      </div>

      <div className="mx-24 space-y-8">
        <Blocks dados={dados.slice(0, 4)} />
        <Blocks dados={dados.slice(4, 8)} />
        <Blocks dados={dados.slice(8, 12)} />
      </div>

      <div className="mx-24">
        <Footer />
      </div>
    </div>
  );
}

export default App;
