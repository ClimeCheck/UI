import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ContForm from "../components/contribute/form";


function Contribute() {
    return ( 
        <div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="main w-screen m-auto justify-center items-center">
        <ContForm />
      </main>
      <Footer />
    </div>
     );
}

export default Contribute;