import { useEffect, useState } from "react";
import LogoHeader from "../components/LogoHeader";
import Blocks from "../components/Blocks";
import Footer from "../components/Footer";

function SecondScreen() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://movies.slideworks.cc/movies?limit=24",
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
        <Blocks dados={dados.slice(12, 16)} />
        <Blocks dados={dados.slice(16, 20)} />
        <Blocks dados={dados.slice(20, 24)} />
      </div>

      <div className="mx-24">
        <Footer />
      </div>
    </div>
  );
}
export default SecondScreen;
