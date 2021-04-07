import React from "react"
import "./Content.css"
import laptop from "./laptop.png"
import lapbottom from "./lapbottom.png"
import tabb from "./tabb.png"
import phone from "./phone.jpg"

function Content() {
    return (
        <div className="Banner">
            <div className="Banner_left">
                <h1 className="Banner_heading">Making the most of the ever-growing <h1 className="Information_design">Information Technology</h1></h1>
                <p className="Banner_subheading">Managed by a team of professional experts with extensive experience and impressive track records</p>

                <button type="button" class="btn btn-danger btn-lg" href="#">Read More</button>
            </div>

            <div className="Banner_right">
                <div className="lap_tab">
                    <div className="tablet">
                        <img className="ta" src={tabb}></img>
                    </div>
                    <div className="laptop">
                        <img className="la" src={laptop}></img>
                        <img className="lp" src={lapbottom}></img>
                    </div>
                </div>

                <div className="phone">

                    <img className="ph" src={phone}></img>

                </div>


            </div>


        </div>
    )
}
export default Content