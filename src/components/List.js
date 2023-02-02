import React, { useContext, useEffect, useRef, useState } from "react";
import { productsC } from "./ProductsContext";

export default function List() {

    const productsCtx = useContext(productsC);
    const productsList = productsCtx.products;
    const setProductsList = productsCtx.setProducts;
    const [isOpen, SetIsOPen] = useState(false)
    const animalName = useRef();

    const animalDescription = useRef();
    const aminmalPrice = useRef();
    const click = () => {
        SetIsOPen(true)
    }
    const add = () => {
        SetIsOPen(false)
        setProductsList([...productsList, { name: animalName.current.value, price: aminmalPrice.current.value, description: animalDescription.current.value, img: "" }])

    }

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>

            {
                !productsList.length ?
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button> :
                    <>
                        {productsList.map((x, index) =>
                            <div key={index} className="card" style={{ width: "200px", height: "400px", margin: "10px", border: "black 5px solid" }}>
                                <img src={x.img} className="card-img-top" />
                                <div className="card-body">
                                    <h5>{x.name} </h5>
                                    <p className="card-text">{x.description}</p>
                                    <p> price: {x.price}</p>
                                </div>
                            </div>
                        )
                        }
                        <button onClick={click}>new animal</button>
                    </>

            }
            {isOpen && <div>
                <input type="text" placeholder="name" ref={animalName}></input>
                <input type="text" placeholder="description" ref={animalDescription}></input>
                <input type="number" placeholder="price" ref={aminmalPrice}></input>
                <input type=""></input>
                <button onClick={add}>add</button>
            </div>
            }

        </div>
    );


}