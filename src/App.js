import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Clients from "./components/pages/Clients";
import AboutUs from "./components/pages/AboutUs";
import ClientsJourney from "./components/pages/ClientsJourney";
import EmailForm from "./components/pages/EmailForm";
import Services from "./components/pages/Services";
import Footer from "./components/pages/Footer";
import Testimonials from "./components/pages/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Clients />
      <Services />
      <ClientsJourney />
      <Testimonials />
      <AboutUs />
      <EmailForm />
      <Footer />
    </div>
  );
}

export default App;
