import React from "react"
import "./NavBar.css"
import DSi from "./DSI.png"
import Mail from "./mail.png"
import shuffle from "./shuffle.png"
import Union from "./Union.png"


function NavBar() {
    return (
        <div className="Navbar_container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid nav_main">

                    <div className="logo">
                        <div className="logo_left">
                            <img class="navbar-brand" src={DSi} alt="dsi-image"></img>
                        </div>
                        <div className="logo_right">
                            <p className="dwidasa_logo">DWIDASA</p>
                            <p className="samara_logo">SAMSARA</p>
                            <p className="indonesia_logo">INDONESIA</p>
                        </div>
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="nav_mid">
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul class="nav nav_header_container">
                                <li class="nav-item">
                                    <a class="nav-link nav_header" href="">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav_header" href="">Product</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav_header" href="" >Technology</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle nav_header" href="#">About</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle nav_header" href="#">Client</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link nav_header" href="#">Partner</a>
                                </li>
                            </ul>
                            <img className="union_image" src={Union} alt="union-image"></img>
                            <img className="mail_image " src={Mail} alt="mail-image"></img>
                            <img className="shuffle_image " src={shuffle} alt="shuffle-image"></img>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default NavBar