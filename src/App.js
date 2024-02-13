import './App.css';
import Typewriter from './Typewriter';
import { useState } from 'react';
import firstImg from './media/1st.gif';
import secondImg from './media/2nd.gif';
import thirdImg from './media/3rd.gif';

import yesImg from './media/yes.gif';

function App() {
  const [renderPage, setRenderPage] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [renderYes, setRenderYes] = useState(false);

  const imgArr = [firstImg, secondImg, thirdImg];
  const noArr = ["", "Are you sure?", "Are you really really sure?", 
                  "Do you really really really not want to be my valentine? 🤨"];
  const yesArr = ["Yes!!", "I accidentally hit no 🤓", "You convinced me, so yes <3"];

  const handleOnComplete = () => {
    setRenderPage(true);
  }

  const handleChoiceNo = () => {
    setImgIndex(imgIndex + 1 < imgArr.length ? imgIndex + 1 : imgIndex);
    // console.log(imgIndex + 1 < imgArr.length ? imgIndex + 1 : imgIndex);
  }

  const handleChoiceYes = () => {
    setRenderYes(true);
    setRenderPage(false);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1><Typewriter text="Hello my lovely beautiful darling pookie wookie, 
          Candace. I have just one question for you..." delay={90} onComplete={handleOnComplete} /></h1>
        </header>
        <div className="App-body">
        { renderPage === true && !renderYes &&
          <>
            <h3>Will you be my <span className='valText'>Valentine</span>?</h3>
            <h4>{noArr[imgIndex]}</h4>
            <img src={imgArr[imgIndex]} alt='' height={300} width={320}/>
            <button onClick={handleChoiceYes}>{yesArr[imgIndex]}</button>
            <button onClick={handleChoiceNo}>No</button>
          </> 
        }
        { renderYes === true && 
        <>
          <img src={yesImg} alt='' height={300} width={320}/>
          <h2>YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY<br></br>
          YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY<br></br>
          YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY<br></br>
          YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY<br></br>
          YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY</h2>
        </>
        }
        </div>
        <footer>
          Made for Candace by Andres
        </footer>
      </div>
      
    </>
  );
}

export default App;
