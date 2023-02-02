import React, { createContext, useEffect, useState } from "react"
import axios from 'axios'
export const productsC = createContext();
export default function ProductsContext(props) {

    const [products, setProducts] = useState([])
    useEffect(() => {
       
        axios.get('./products.json')
            .then(
                data => setProducts(data.data)
            )
            .catch(
                error=>console.log(error)
                )
    }, [])

    return (

        <productsC.Provider value={{ products, setProducts }}>
            {props.children}
        </productsC.Provider>
    );
}