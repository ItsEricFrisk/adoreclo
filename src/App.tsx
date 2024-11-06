import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col items-center">
        <Outlet />
      </div>
      <Menu />
    </>
  );
}

export default App;
