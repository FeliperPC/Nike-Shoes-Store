import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./data";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav/>
      <ShoeDetail />
      <NewArrivalsSection shoeList={SHOE_LIST} />
      <SideBar/>
    </div>
  );
}

export default App
