import '../styles/components/pages/NosotrosPage.css'
const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>Lore ipsum</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          at laoreet arcu, a condimentum sapien. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Duis cursus
          sapien ut diam laoreet porttitor. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Vestibulum risus sapien, rutrum nec mattis
          aliquet, volutpat quis sapien. Praesent eget turpis a ligula venenatis
          venenatis. Duis ante enim, dictum lobortis lectus vitae, scelerisque
          porta justo. Praesent maximus nisl ut mauris cursus iaculis. Aliquam
          erat volutpat. Suspendisse enim est, maximus a libero cursus, viverra
          consequat sem. Suspendisse malesuada feugiat sapien, sit amet tempor
          turpis aliquam ac. Morbi quis diam luctus, sollicitudin metus vel,
          mattis eros. Aenean vulputate varius ante nec commodo. Curabitur at
          ultricies quam, eu elementum risus. Donec porttitor tellus justo, nec
          lobortis ligula pharetra eget.
        </p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <img
              src="images/nosotros/nosotrosharle.jpg"
              alt="Juan gomes"
              width="200px"
              height="200px"
            />
            <h5>Elba Sura</h5>
            <h6>Gerente General</h6>
            <p>Condecorado heroe de guerra</p>
          </div>
          <div className="persona">
            <img
              src="images/nosotros/nosotrosharle2.jpg"
              alt="Ernesto Perez"
              width="200px"
              height="200px"
            />
            <h5>Esteban Quito</h5>
            <h6>Supervisor Superior</h6>
            <p>Luchador por los derechos de los niños</p>
          </div><div className="persona">
            <img
              src="images/nosotros/nosotrosharle3.jpg"
              alt="Juan gomes"
              width="200px"
              height="200px"
            />
            <h5>Aitor Menta</h5>
            <h6>Contador Publico</h6>
            <p>Contribuyente a la educacion</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
