import React from "react"
import "./Information.css"
import android from "./android.png"
import blackberry from "./blackberry.png"
import ios from "./ios.png"
import java from "./java.png"
import microsoft from "./microsoft.png"
import silverlight from "./silverlight.png"
import Dsi from "./DSI.png"
import Dwidasa from "./DWIDASA.png"
import Indonesia from "./INDONESIA.png"
import Samsara from "./SAMSARA.png"

function Information() {
    return (
        <div className="Information_Container">

            <div className="Information_bottom_container">
                <div className="info_top">
                    <img className="" src={Dsi} alt="ios-image"></img>
                    <div className="dsi_side">
                        <img className="" src={Dwidasa} alt="ios-image"></img>
                        <img className="" src={Samsara} alt="ios-image"></img>
                        <img className="" src={Indonesia} alt="ios-image"></img>
                    </div>
                </div>

                <div>
                <h3 className ="Top_Information">PT Dwidasa Samsara Indonesia</h3>
                <p className ="Address_Information">Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323</p>
                </div>
                
            </div>

            <div className="Contact_bottom_middle">
                <h2 className = "Contact_Information">Contact</h2>
                <div className ="phone_fax_email">
                <p className = "Phone_Information">Phone : +62.21.5314.1135 </p>
                <p className = "fax_Information">Fax : +62.21.5314.1135</p>
                <p className = "email_Information">Email:community@dwidasa.com</p> 
                </div>
                   
            </div>

            <div className="Image_bottom_left">
                <img className="silverlight_image" src={silverlight} alt="microsoft-silver-light-image"></img>
                <img className="microsoft_image" src={microsoft} alt="microsoft.net-image"></img>
                <img className="java_image" src={java} alt="java-image"></img>
                <img className="ios_image" src={ios} alt="ios-image"></img>
                <img className="android_image" src={android} alt="android-image"></img>
                <img className="blackberry_image" src={blackberry} alt="blackberry-image"></img>

            </div>


        </div>
    )
}
export default Information