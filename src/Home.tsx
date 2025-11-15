import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Products from "./components/products";
import Services from "./components/services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
    </>
  );
};

export default Home;
