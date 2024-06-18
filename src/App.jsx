import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <Stack gap={5}>
        <NavBar />
        <Section />
        <Stack direction="horizontal" gap={5} className='mx-auto'>
          <Cards props={"Hello"} />
          <Cards props={"Ako"} />
          <Cards props={"Si"} />
          <Cards props={"Aira"} />
        </Stack>
        <Contact />
        <Footer />
      </Stack>
    </>
  )
}

export default App
