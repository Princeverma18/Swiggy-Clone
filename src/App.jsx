import Header from "./components/header";
import Category from "./components/Category";
import TopRest from "./components/TopRest";
import OnlineDelievery from "./components/OnlineDelievery";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <Header />
    <Category />
    <TopRest />
    <OnlineDelievery />
    <hr className="mt-20 border-[1px]"/>

    <Footer />
    </>
  )
}

export default App
