import enterIcon from "@/assets/enter.svg";

import "./Layout.scss";

const Layout = (): React.ReactElement => {
  return (
    <div className="container">
      <h1>Exercici sesió 4: Formulari</h1>
      <form className="user-data">
        <div>
          <label htmlFor="name">Nom:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="surname">Cognom:</label>
          <input type="text" name="surname" />
        </div>
        <div>
          <label htmlFor="phone">Telèfon:</label>
          <input type="tel" id="phone" />
        </div>
        <div>
          <label htmlFor="address">Adreça:</label>
          <input type="text" id="address" />
        </div>
        <div>
          <label htmlFor="address">Adreça electrònica:</label>
          <input type="text" id="address" required />
        </div>
      </form>
      <div>
        <button type="submit">
          <img src={enterIcon} />
        </button>
      </div>
    </div>
  );
};

export default Layout;
