import './App.css';
import Typewriter from './Typewriter';
import { useState } from 'react';
import firstImg from './media/1st.gif'

function App() {
  const [renderPage, setRenderPage] = useState(false);

  const handleOnComplete = () => {
    setRenderPage(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1><Typewriter text="Hello my lovely beautiful darling pookie wookie, 
        Candace. I have just one question for you..." delay={90} onComplete={handleOnComplete} /></h1>
      </header>
      { renderPage === true && 
      <body className="App-body">
        <h3>Will you be my <span className='valText'>Valentine</span>?</h3>
        <img src={firstImg} alt='' />
      </body>
      }
      
    </div>
  );
}

export default App;
