import {React, useState} from 'react'
import { useQRCode } from 'next-qrcode';
import BodyQR from './BodyQR'
import Input from './Input'
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
        <Input 
            makeQR={makeQR}
        />
        <br />
        <button onClick={QRVisibility}>Generate QR</button>
        <br />
        { 
            showQR && 
            <BodyQR 
                Canvas={Canvas}
                QRText={QRText}
            />
        }
    </div>
  )
}

export default QR