import axios from "axios";

const API = "http://localhost:3000/api/novedades";

const cargarNovedades = async () => {
    const response = await axios.get(API);
    return response;
};
export default cargarNovedades;