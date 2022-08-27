import "../styles/components/pages/NovedadesPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";
import Loading from '../components/Loading'


const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);
  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      console.log("cargandp data")
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);
  return (
    <section className="holder-novedades">
      <h2>Novedades</h2>
      <div className="cards">
        {loading ? (
          <Loading/>
        ) : (
          novedades.map((item) => (
            <NovedadItem
              key={item.id}
              title={item.titulo}
              subtitle={item.subtitulo}
              image={item.image}
              body={item.cuerpo}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default NovedadesPage;
