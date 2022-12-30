import Header from "@/components/Header";
import Home from "@/components/Home";
import Menu from "@/components/Menu";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import ContactButton from "./shared/ContactButton";
import { useEffect, useState } from "react";
import { SelectPage } from "@/shared/types";
import { BsMessenger } from "react-icons/bs";
function App() {
  const [selectPage, setSelectPage] = useState<SelectPage>(SelectPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectPage(SelectPage.Home);
      }
      if (window.scrollY > 100) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-orange-50 overflow-hidden">
     
      <Header
        isTopOfPage={isTopOfPage}
        selectPage={selectPage}
        setSelectPage={setSelectPage}
      />
      <Home setSelectPage={setSelectPage} />
      <Menu setSelectPage={setSelectPage} />
      <AboutUs setSelectPage={setSelectPage} />
      <Footer setSelectPage={setSelectPage} />
    </div>
  );
}

export default App;
