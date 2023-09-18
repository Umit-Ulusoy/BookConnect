import { Link } from "react-router-dom";
import hero from "../assets/hero.png"


const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>BookConnect</h1>
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button >Sign up</button>
          </Link>
        </div>
      </header>
      <section>
        <img src={hero}/>
      </section>
      <hr />
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas
          quia suscipit dicta nostrum consectetur exercitationem iusto tenetur
          iure magnam.
        </p>
      </section>
      <hr />
      <main>
        {/* Ana içerik buraya gelecek */}
      </main>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
          porro rem dolore ut illum assumenda iusto possimus reiciendis
          eveniet!
        </p>
      </section>
      <footer>
        <p>Copyright © 2023 - All right reserved by BookConnect</p>
      </footer>
    </div>
  );
};

export default LandingPage;
