import './App.css'
import Apropos from './Components/Apropos'
import Experiences from './Components/Experiences'
import Form from './Components/Form'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import Services from './Components/Services'


function App() {
  return (
    <>
      
      <div>
      
        <Header/>
        <Apropos/>
        <Portfolio/>
        <Services/>
        <Experiences/>
        <Form/>
      </div>
    </>
  )
}

export default App
