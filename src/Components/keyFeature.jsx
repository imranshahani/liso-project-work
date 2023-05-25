import React from "react";
import img7 from "../Image/Group 619.png"
import "../styles/keyFeatures.css"

export default function keyFeature() {
  return (
    <div className="main-feature-text">
        <h1>KEY FEATURES</h1>
      <div className="text-key">
        <p>
          <span>Configure as Transmitter (Encoder) or Receiver (Decoder)
         </span>
         <br/>
          4K UHD over 1G CAT 5e/6/6a<br/> HDMI 2.0, HDCP 2.2<br/> Visually Lossless with
          only 1.5 Frame Latency <br/> 128 per Source with HDCP, Larger for
          Non-Encrypted Sources<br/> Video Wall with Image Rotation <br/> 1G LAN PoE <br/> 1 SFP
          for Single/Multimode Fiber or Second RJ-45 <br/> 2 HDMI Inputs, 1 HDMI
          Output <br/> Line In/Out Stereo <br/> RS-232 Serial Port and IR (In/Out)<br/> On Screen
          Display (OSD)<br/> Integrated Web Server for Configuration <br/>USB 2.0
          Host/Device Port <br/>2 USB 1.1 for HID Devices<br/> Dante® IP Option<br/> Front
          Keypad and IR Remote<br/> Rack and Under Table Mounting
        </p>
        </div>

        <div className="file">
          <h1>Guide File(s)</h1>
          <img src={img7} alt="image7" />
          <p>Datasheet<br/>103kb</p>
        </div>
    
    </div>
  );
}
