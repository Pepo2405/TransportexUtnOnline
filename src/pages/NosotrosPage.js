import '../styles/components/pages/NosotrosPage.css'
import '../styles/components/Loading.css'

import EmpleadoItem from '../components/empleados/empleadoItem'
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from '../components/Loading'



const NosotrosPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    const cargarEmpleados = async () => {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/empleados`);
      setEmpleados(response.data);
      setLoading(false);

    };

    cargarEmpleados();
  }, []);




  return (
    <main className="holder main">
      <div className="historia">
        <h2>Historia</h2>
        <p>Lore ipsum</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          at laoreet arcu, a condimentum sapien. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Duis cursus
          sapien ut diam laoreet porttitor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Vestibulum risus sapien, rutrum nec mattis
        </p>
      </div>
        <h2>Staff</h2>
      <div className="staff">
        <div className="personas">
          {loading ? (<Loading className="loader"/>) : empleados.map((empleado)=>(
            <EmpleadoItem 
            key={empleado.id} 
            nombre={empleado.nombre}
            puesto={empleado.puesto}
            datos={empleado.datos}
            foto={empleado.image}
            />
           
          ))}  
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
