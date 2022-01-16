import React from 'react';
import './App.css';
import {Item} from "./Item/Item";
import {Wrapper} from "./App.styles";
import {useQuery} from "react-query";
import {Grid, LinearProgress} from "@material-ui/core";

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number
}
const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json()

function App() {
    const {data, isLoading, error} = useQuery<CartItemType[]>(
        'products',
        getProducts
    );
    console.log(data)

    const getTotalIttem = () => null;
    const handleAddToCart = (clickedItem: CartItemType) => null;
    const handleRemoveFormCart = () => null;

    if(isLoading) return <LinearProgress/>
    if (error) return <div>Something went wrong ...</div>
    return (
       <Wrapper>
            <Grid container spacing={3}>
                {data?.map(item =>(
                    <Grid item key={item.id} xs={12} sm={4}>
                        <Item item={item} handleAddToCart={handleAddToCart}/>
                    </Grid>
                ))}
            </Grid>
       </Wrapper>
    );
}

export default App;
