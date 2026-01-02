import BackgroundLayout from "./components/BackgroundLayout";
import CategoryCard from "./components/CategoryCards";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <>
      <BackgroundLayout>
        <Navbar />

        <main className="absolute bottom-24 left-8 md:bottom-28 md:left-10 z-20 max-w-md md:max-w-lg">
          <h2 className="text-3xl font-bold mb-3">Happy Holidays from Sagido</h2>
          <p className="text-xl mb-6">
            Beautiful clothes, and a  sleek style with Sagido Line.
          </p>
        </main>
      </BackgroundLayout>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          <h3 className="text-2xl font-bold mb-8">Explore Collections</h3>
          <CategoryCard/>
        </div>
      </section>
    </>
  );
};

export default App;