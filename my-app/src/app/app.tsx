import { Navigation } from "components/layouts/navigation";
import { Splash } from "components/layouts/splash";

const App = (): JSX.Element => {
  return (
    <main className="bg-lime-400">
      <Navigation />


      
      <Splash />

      <footer className="">
        And I, a footer
      </footer>
    </main>
  );
};

export default App;
