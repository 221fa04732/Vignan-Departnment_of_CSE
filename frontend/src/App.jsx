import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Content from './Components/Content';


function App() {

  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Content />     
          <Footer />  
        </BrowserRouter> 
      </RecoilRoot>
    </div>
  )
}

export default App
