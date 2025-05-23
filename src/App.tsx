import { BackedBy } from "./components/BackedBy";
import { Explaination } from "./components/Explaination";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { Layers } from "./components/Layer";
import { LogicCompiler } from "./components/LogicCompiler";
import { LogicExplain } from "./components/LogicExplain";
import { Partner } from "./components/Partners";
import { ProgramableStorage } from "./components/ProgramableStorage";
import { Provider } from "./components/Provider";
import { Slider } from "./components/Slider";
import { ZoanOs } from "./components/ZoanOs";

function App() {
  return (
    <div className="flex flex-col items-start w-full bg-black">
      <Header />
      <main className="flex flex-col items-center w-full">
        <HeroBanner />
        <Explaination />
        <Partner />
        <Features />
        <Layers />
        <Provider />
        <ZoanOs />
        <LogicExplain />
        <ProgramableStorage />
        <LogicCompiler />
        <BackedBy />
        <Slider />
        <Footer />
      </main>
    </div>
  );
}

export default App;
