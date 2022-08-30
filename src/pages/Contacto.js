import "../styles/components/pages/ContactoPage.css";
import axios from "axios";
import { useState } from "react";
import {BiAdjust,BiCheckCircle} from "react-icons/bi"
import {AiFillFacebook,AiFillTwitterSquare,AiFillMail,AiFillPhone} from "react-icons/ai";

const ContactoPage = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value, //Dinamico
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`,
      formData
    );
    setSending(false);
    setMsg(response.data.msg);
    if(response.data.error === false){
      setFormData(initialForm)
    }
  };

  return (
    <main className="holder contacto-page main">
      <div className="form">
        <h2>Contacto rapido</h2>
        <form
          action="/contacto"
          method="post"
          className="formulario"
          onSubmit={handleSubmit}
        >
          <p>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </p>
          <p>
            <label htmlFor="telefono">Telefono</label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            ></input>
          </p>

          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </p>
          {sending ? <div className="contacto-enviando">Enviando <BiAdjust className="enviando-icono"/></div>: null}
          {msg ? <div className="contacto-enviando">{msg} <BiCheckCircle/></div>: null}
          <p className="acciones">
            <input type="submit" value="Enviar" className="boton"></input>
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>
          Tambien puede contactarse con nosotros usando los siguientes medios
        </p>
        <ul>
          <li className="icono-contacto"><AiFillPhone /> 1123548796</li>
          <li className="icono-contacto"><AiFillMail /> transporte@xmail.com</li>
          <li className="icono-contacto"><AiFillFacebook /> Transporte X</li>
          <li className="icono-contacto"><AiFillTwitterSquare/>Transporte X</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
