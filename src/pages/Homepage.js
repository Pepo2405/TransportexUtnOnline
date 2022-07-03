import '../styles/components/pages/HomePage.css'
const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img id='avion' src="/images/home/img01.jpg" alt="Avion"></img>
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at laoreet arcu, a condimentum sapien. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Duis cursus
            sapien ut diam laoreet porttitor. Interdum et malesuada fames ac
            ante ipsum primis in faucibus
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at laoreet arcu, a condimentum sapien. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Duis cursus
            sapien ut diam laoreet porttitor. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
          </p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span class="cita">Simplemente Excelente</span>
            <span class="autor">Juan Perez - zapatos.com</span>
          </div>
          <div className="testimonio">
            <span class="cita">Espectacular</span>
            <span class="autor">Esteban Quito - Pantalones.com</span>
          </div>
          <div className="testimonio">
            <span class="cita">Salvo mi matrimonio</span>
            <span class="autor">Aitor Menta - Camiseta.com</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
