import BackgroundLayout from "./components/BackgroundLayout";
import CategoryCard from "./components/CategoryCards";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <BackgroundLayout>
        <Navbar />

        <main className="absolute bottom-24 left-8 md:bottom-15 md:left-10 lg:left-50 z-20 max-w-md md:max-w-lg bg-black/10 border-transparent rounded-xl">
          <h2 className="text-3xl font-bold mb-3 text-stone-300 ">Happy Holidays from Sagido</h2>
          <p className="text-xl mb-6 text-stone-300">
            Beautiful clothes, and a  sleek style with Sagido Line.
          </p>
        </main>
      </BackgroundLayout>
      <section className="relative z-10 bg-white py-16">
        <CategoryCard />
        <AboutUs />
      </section>
    </>
  );
};

export default App;