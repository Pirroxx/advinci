import Clients from "./components/pages/Clients";
import ClientsJourney from "./components/pages/ClientsJourney";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Clients />
      <Services />
      <ClientsJourney />
    </div>
  );
}

export default App;
