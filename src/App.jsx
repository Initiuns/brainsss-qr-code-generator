import QRCode from 'qrcode';
import { useState } from 'react';
import brainsssImg from './assets/BRAINSSS.png';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');
  
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#000000ff',
        light: '#ffffffff'
      },
      errorCorrectionLevel: 'H'
    },(err, url) => {
      if (err) return console.log(err);
      setQrcode(url);
    })
  }
  
  return (
    <div className="App">
      <div className="card">
        <h1>QR Code Generator</h1>
        <input 
          type="text"  
          placeholder="e.g. https://google.com, test, etc..."
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
        />
        <button onClick={GenerateQRCode}>Generate</button>
        {!qrcode && 
          <>
            <h4>Enter a url or any desired text in the field above</h4>
            <img src={brainsssImg} />
          </>
        }
        {qrcode && 
          <>
            <img src={qrcode} />
            <br />
            <h3>{url}</h3>
            <br />
            <p>
              
            </p>
            <a href={qrcode} download="qrcode.png">Download</a>
          </>
        }
      </div>
    </div>
  )
}

export default App
