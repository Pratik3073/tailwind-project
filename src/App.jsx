import "./App.css";
import  Navbar  from "./components/Navbar";
import  Hero  from "./components/Hero";
import  Features  from "./components/Features";
import  Pricing  from "./components/Pricing";
import  Testimoials  from "./components/Testimoials";
import  Footer  from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimoials />
      <Footer />
    </div>
  );
}

export default App;
