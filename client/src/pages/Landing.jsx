const LandingPage = () => {
  return (
    <div className="w-full h-full ">
      <header className="w-full h-(92px)">
        <h2>BookConnect</h2>
        <div>
          <button aria-label="login">Login</button>
          <button aria-label="sign up">Sign up</button>
        </div>
      </header>
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
