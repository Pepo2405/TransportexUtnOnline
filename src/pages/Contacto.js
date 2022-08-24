import '../styles/components/pages/ContactoPage.css'
const ContactoPage = (props) => {
  return(
  <main className="holder contacto-page main"> 
  <div>
    <h2>Contacto rapido</h2>
    <form action="" method="" className="formulario">
      <p>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name=""></input>
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="text" name=""></input>
      </p>
      <p>
        <label htmlFor="telefono">Telefono</label>
        <input type="text" name=""></input>
      </p>
      
      <p>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea name=""></textarea>
      </p>
      <p className="acciones">
        <input type="submit" value="Enviar"></input>
      </p>
    </form>
  </div>
  <div  className="datos">
    <h2>Otras vias de comunicacion</h2>
    <p>Tambien puede contactarse con nosotros usando
      los siguientes medios
    </p>
    <ul>
    <li>Telefono: 1123548796</li>
    <li>Email: transporte@x.com</li>
    <li>Facebook: Transporte X Facebook</li>
    <li>Twitter: Transporte X twittero</li>
    <li>Skype: Transporte SkypeX</li>
    </ul>
  </div>
  </main>
  )
};

export default ContactoPage;
