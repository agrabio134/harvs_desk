import Footer from "../partials/footer/footer";
import Header from "../partials/header/header"

const Main = ({ children }) => {
  return (
    <div className="container">
        <Header/>
      {children}
        <Footer/>
    </div>
   
  );
};

export default Main;
