import React, {useState, useEffect} from 'react'
import Category from './component/Category';
import "../../styles/category.css"
import Footer from '../../Inc/Footer'
import { useQuery,gql } from '@apollo/client';

const productsFilter = (PRODUCTS)=>{
    let adjustedData = PRODUCTS.reduce(function(acc,curr){
        if(acc[curr.categoryName]){
            acc[curr.categoryName].push(curr);
        }
        else{
            acc[curr.categoryName]=[]
            acc[curr.categoryName].push(curr);
        }
        return acc;
    },{});
    return adjustedData;
}

const filteredProducts = (products, searchString) => {

    

    let query = searchString.toLowerCase();
    let temp = {...products};
    let result = Object.keys(products).map((value)=>{
        temp[value] = products[value].filter((pro)=> pro.name.toLowerCase().includes(query))
    });
    return temp;
}

const ProductList = ({isAdmin}) => {

    const [searchString, setSearchString] = useState("")
    const [products, setProducts] = useState([]);
    const [list, setList] = useState([])
    const SELECT_QUERY = gql`
        query{
            getproducts{
                name
                image
                price
                description
                quantity
                measurement
                categoryName
                status
            }
        }
    ` 
    const {error, data, loading} = useQuery(SELECT_QUERY);

    useEffect(() => {
        if(!loading){
            if(data){
                setProducts(productsFilter(data.getproducts))
                setList(productsFilter(data.getproducts))
            }
        }
    }, [loading])

    useEffect(() => {
        if(searchString !== ""){
            setList(filteredProducts(products, searchString));
        }
    }, [searchString])

    return (
        <div className='container-fluid'>
            <div className="input-group mb-4 mt-4 search-bar mx-auto">
                <input type="text" className="form-control" placeholder="Search" value={searchString} onChange={e => setSearchString(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-warning" type="button" onClick={e=> {setSearchString(''); setList({...products});}}><svg className="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
                </div>
            </div>
            {Object.keys(list).length !== 0 ? Object.keys(list).map((value, index)=>{
                return <Category name={value} products={list[value]} key={value}/>
            }) : <h3 className="text-center">No Product Found</h3>
            }
            <Footer/>
        </div>
    )
}

export default ProductList