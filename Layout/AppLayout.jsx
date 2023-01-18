import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar"

function AppLayout({ children, isOpen, setIsOpen }) {
  return (
    <div>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} textColor="black"/>
      <Sidebar />
         {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
