import {React, useState} from 'react'
import { useQRCode } from 'next-qrcode';
import './QR.css'
import './Input.css'

const QR = () => {
    const [QRText, SetQRText] = useState('')
    const [showQR, SetShowQR] = useState(false)
    const { Canvas } = useQRCode();

    const makeQR = (e) => {
        SetShowQR(false)
        SetQRText(e.target.value)
    }

    const QRVisibility = () => {
        if(QRText !== ''){
            SetShowQR(true)
        } 
        
    }

  return (
    <div>
        <h1>QR Code Generator</h1>
        <input
        className='input'
            type='text'
            Placeholder='Enter data ...'    
            onChange={makeQR}
        />
        <br />
        <button onClick={QRVisibility}>Generate QR</button>
        <br />
        {
            showQR && 
            <Canvas
                text={`${QRText}`}
                options={{
                    level: 'M',
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                    dark: '#010599FF',
                    light: '#FFBF60FF',
                    },
                }}
            />
        }
    </div>
  )
}

export default QR