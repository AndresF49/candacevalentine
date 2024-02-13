import './App.css';
import Typewriter from './Typewriter';
import { useState, useEffect } from 'react';
import firstImg from './media/1st.gif';
import secondImg from './media/2nd.gif';
import thirdImg from './media/3rd.gif';
import fourthImg from './media/4th.gif';
import yesImg from './media/yes.gif';
import andres from './media/andres.jpg'

function App() {
  const [renderPage, setRenderPage] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [renderYes, setRenderYes] = useState(false);

  const imgArr = [firstImg, secondImg, thirdImg, fourthImg];
  const noArr = ["", "Are you sure?", "Are you really really sure?", 
                  "Do you really really really not want to be my valentine? 🤨"];
  const yesArr = ["Yes!!", "I accidentally hit no 🤓", "You convinced me, so yes <3", "I accidentally hit no 3 times 🤧"];
  const yesSizeArr = [24, 32, 40, 48];
  const noSizeArr = [24, 20, 16, 12];

  const handleOnComplete = () => {
    setRenderPage(true);
  }

  const handleChoiceNo = () => {
    setImgIndex(imgIndex + 1 < imgArr.length ? imgIndex + 1 : imgIndex);
  }

  const handleChoiceYes = () => {
    setRenderYes(true);
    setRenderPage(false);
  }

  const noBtn = document.getElementById("noBtn");

  useEffect(() => {
    if (imgIndex === 3) {
      noBtn.remove();
    }
  }, [imgIndex, noBtn]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1><Typewriter text="Hello my lovely beautiful darling pookie wookie, 
          Candace. I have just one question for you..." delay={90} onComplete={handleOnComplete} /></h1>
        </header>
        { renderPage === true && !renderYes &&
          <div className="App-body">
            <div className='valentineDiv'>
              <div className='textWrapper'>
                <h3>Will you be my <span className='valText'>Valentine</span>?</h3>
              </div>
              <div className='imageWrapper'>
                <img className='andresPic' alt='' src={andres} height={"100px"} width={"90px"} />
              </div>  
            </div>
            <h4>{noArr[imgIndex]}</h4>
            <img src={imgArr[imgIndex]} alt='' height={300} width={320}/>
            <div className='buttonCtn'>
              <button style={{fontSize: yesSizeArr[imgIndex] + "px"}} onClick={handleChoiceYes}><span>{yesArr[imgIndex]}</span></button>
              <button id="noBtn" style={{fontSize: noSizeArr[imgIndex] + "px"}} onClick={handleChoiceNo}>No</button>
            </div>
          </div> 
        }
        { renderYes === true && 
        <div className="App-body">
          <img src={yesImg} alt='' height={300} width={320}/>
          <h2>YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY<br></br>
          YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY<br></br>
          YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY<br></br>
          YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY<br></br>
          YAYAYAYYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYAYYAYAYAY</h2>
        </div>
        }
        <footer>
          Made for Candace by Andres
        </footer>
      </div>
    </>
  );
}

export default App;
