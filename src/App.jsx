import Cursor    from "./components/Cursor/Cursor"
import Navbar    from "./components/Navbar/Navbar"
import Hero      from "./components/Hero/Hero"
import Divider   from "./components/Divider/Divider"
import Areas     from "./components/Areas/Areas"
import Statement from "./components/Statement/Statement"
import Casos     from "./components/Casos/Casos"
import Contacto  from "./components/Contacto/Contacto"
import Footer    from "./components/Footer/Footer"

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Divider />
      <Areas />
      <Statement />
      <Casos />
      <Contacto />
      <Footer />
    </>
  )
}
