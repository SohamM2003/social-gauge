// import Tabs from "./components/Analytics";
import {
  Features,
  Footer,
  Header,
  HeroSection,
  MeetOurTeam,
} from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      {/* <Tabs /> */}
      <HeroSection />
      <Features />
      <MeetOurTeam />
      <Footer />
    </>
  );
}

export default App;
