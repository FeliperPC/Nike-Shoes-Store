import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./data";


function App() {
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav/>
      <ShoeDetail />
      <NewArrivalsSection shoeList={SHOE_LIST} />
    </div>
  );
}

export default App
