import React from "react"
import "./Product.css"
import product from "./product.png"
import service from "./service.png"
import technology from "./technology.png"


function Product() {
    return (
        <div className="Product_Container">
            <div className="Product_headline">
                <h2 className="Product_head">Product and Service</h2>
            </div>
            <div className="Product_middle_container">

                <div className="Product_middle">
                    <img className="product_image" src = {product}></img>

                    <h3 className="Product_middle_heading">Our Product</h3>

                    <p className = "product_paragraph">Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>

                    <button type="button" class="btn btn-danger btn-lg" href="#">Read More</button>
                </div>

                <div className = "Product_middle">
                    <img className="service_image" src = {service}></img>

                    <h3 className="Product_middle_heading">Our Service</h3>

                    <p className = "product_paragraph">DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>

                    <button type="button" class="btn btn-danger btn-lg" href="#">Read More</button>
                </div>

                <div className = "Product_middle">
                    <img className="technology_image" src = {technology}></img>

                    <h3 className="Product_middle_heading">Our Technology</h3>

                    <p className = "product_paragraph">First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>

                    <button type="button" class="btn btn-danger btn-lg" href="#">Read More</button>
                </div>

            </div>
        </div>
    )
}
export default Product