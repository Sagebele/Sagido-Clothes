import BackgroundLayout from './components/BackgroundLayout';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BackgroundLayout>
      <Navbar />

      <main className="fixed bottom-24 left-8 md:bottom-28 md:left-10 z-20 max-w-md md:max-w-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Happy Holidays from Sagido</h2>
          <p className="text-xl mb-12">
            Beautiful clothes, and a sleek style with Sagido Line.
          </p>

          {/* other sections or pages  */}
        </div>
      </main>
    </BackgroundLayout>
  );
};

export default App;