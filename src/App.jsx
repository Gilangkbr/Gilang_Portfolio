import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import WorkProcess from "./components/process/WorkProcess";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
