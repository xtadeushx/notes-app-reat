import { Footer } from "./layout/footer/footer"
import { Header } from "./layout/header/header"
import { HomePage } from "./pages/home-page/home-page"


const App: React.FC = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
}

export { App };
