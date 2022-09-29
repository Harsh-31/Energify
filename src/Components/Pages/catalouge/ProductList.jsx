import React, {useState, useEffect, useRef, useContext} from 'react'
import Category from './component/Category';
import "../../styles/category.css"
import {UserContext} from '../../../App';
import Footer from '../../Inc/Footer'
import { useQuery,gql,useMutation } from '@apollo/client';
import {useNavigate} from 'react-router-dom';

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
    const formRef = useRef();

    const user = useContext(UserContext);
    const navigate = useNavigate();

    const ADD_PRODUCT = gql`
    mutation Addproduct($name:String!,$cost:Int!,$quantity:Int!,$status:String!,$desc:String!,$cat:String!,$img:String!,$measure:String!){
        addproduct(newproduct:{
            name:$name,
            price:$cost,
            quantity:$quantity,
            status:$status,
            description:$desc,
            categoryName:$cat,
            image:$img,
            measurement:$measure
        })
        {
        id
        name
        price
        quantity
        status
        description
        categoryName
        image
        measurement
        }
    }`

    const [addproduct,addProMut] = useMutation(ADD_PRODUCT);


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
    const {error, data, loading, refetch} = useQuery(SELECT_QUERY);

    useEffect(() => {refetch()},[])

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
        }else{
            setList({...products});
        }
    }, [searchString])


    function addProductHandler(e) {
        
        e.preventDefault();

        addproduct({
            variables:{
                name: e.target.name.value,
                cost: parseInt(e.target.price.value),
                quantity: parseInt(e.target.quantity.value),
                status: e.target.status.value,
                desc: e.target.description.value,
                cat: e.target.categoryname.value,
                img: e.target.image.value,
                measure: e.target.measurement.value
            }
        })

        formRef.current.reset();
        setTimeout(refetch(), 10000);
    }

    return (
        <div className='container-fluid'>
            <div className="input-group mb-4 mt-4 search-bar mx-auto">
                <input type="text" className="form-control" placeholder="Search" value={searchString} onChange={e => setSearchString(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-warning" type="button" onClick={e=> {setSearchString(''); setList({...products});}}><svg className="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
                </div>
            </div>
            {user && user?.rolecode === 0 && <button type="button" className="btn btn-warning ml-auto text-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> + &nbsp;Add Product</button>}

            {Object.keys(list).length !== 0 ? Object.keys(list).map((value, index)=>{
                return <Category name={value} products={list[value]} key={value}/>
            }) : <h3 className="text-center">No Product Found</h3>
            }

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Add product</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={addProductHandler} ref={formRef}>
                        <div className="mb-3">
                            <label htmlFor="product-name" className="col-form-label">Product name</label>
                            <input type="text" className="form-control" id="product-name" name="name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="col-form-label">Description</label>
                            <textarea className="form-control" id="description" name="description"></textarea>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="price" className="col-form-label">Price</label>
                                    <input type="text" className="form-control" id="price" name="price"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="category-name" className="col-form-label">Category name</label>
                                    <input type="text" className="form-control" id="category-name" name="categoryname"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="mb-3">
                            <label htmlFor="quantity" className="col-form-label">Quantity</label>
                            <input type="text" className="form-control" id="quantity" name="quantity"/>
                        </div>
                            </div>
                            <div className="col">
                        <div className="mb-3">
                            <label htmlFor="measurement" className="col-form-label">Measurement</label>
                            <input type="text" className="form-control" id="measurement" name="measurement"/>
                        </div>
                        </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="col-form-label">Status</label>
                            <select className="form-select" id="status" name="status">
                                <option value="In Stock" selected>In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="col-form-label">Image URL</label>
                            <input type="text" className="form-control" id="image" name="image"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mx-auto">Add Product</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
            <Footer/>

        </div>
    )
}

export default ProductList