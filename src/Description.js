import React from "react"
import "./Description.css"
import cp from "./cp.png"
import lapneck from "./lapneck.png"
import tableline from "./tableline.png"
import table from "./table.png"
import mouse from "./mouse.png"
import coffee from "./coffee.png"
import coffeetop from "./coffeetop.png"
import coffeetopmid from "./coffeetopmid.png"

function Description() {
    return (
        <div className="Middle_container">
            <div className="Container_left">
                <div className="cp">
                    <img  className = "desktop" src={cp}></img>
                    {/* <img src = {coffeetop}></img> */}
                    
                </div>
                <div className="cp_neck">
                    <div>
                    <img className="lapneck" src={lapneck}></img>
                    {/* <img className = "coffee_cup" src = {coffee}></img> */}
                    </div>
                </div>
                <div className = "table">
                    <img className = "table_line" src={tableline}></img>
                    <img className="table_box" src={table}></img>
                </div>
            </div>


            <div className="Container_right">
                <div className="Container_heading">
                    <h1 className="Heading">Welcome to <span className="Heading_design">Dwidasa Samsara Indonesia (DSI)</span></h1>
                    <p className="Container_Paragraph">Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className="color">DSI</span>’s distinct front-end based application concept.</p>
                    <p className="Container_paragraph2"> Managed by a team of professional experts with extensive experience and impressive track records, <span className="color">DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                </div>

            </div>
        </div>
    )
}
export default Description