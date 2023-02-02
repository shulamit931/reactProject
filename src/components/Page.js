import React, { useContext } from "react";
import List from "./List";
import  ProductsContext  from "./ProductsContext";

export default function Page() {



    return (
        <>
           
            <ProductsContext>
                <List ></List>
            </ProductsContext>
        </>

    );

}