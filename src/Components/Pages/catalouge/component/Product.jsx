import React, {useContext, useState} from 'react'
import {UserContext} from '../../../../App';

const Product = ({data}) => {
    const [numOfItem, setNumOfItem] = useState(1);
    const user = useContext(UserContext);
    return (
        <div className="col">
            <div className="card product-card m-3 p-1"  key={data.id}>
                <img className="card-img-top" height="206" src={data.image} alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title text-truncate text-truncate--3">{data.name}</h4>
                    <p>{data.description}</p>
                    <h5>1 {data.quantity}</h5>
                    <div className="row">
                        <div className="col-5">
                            <div className=' mt-3'><h5 className='text-danger'>&#8377; {data.price}</h5></div>
                        </div>
                        <div className="col">
                            {data.status.startsWith("In") ? <>
                                    <p className="dot d-inline-block bg-success rounded-circle mb-0 mt-4"></p>
                                    <p className="mb-0 d-inline-block av-text">In Stock</p>
                                </> : <>
                                    <p className="dot d-inline-block bg-danger rounded-circle mb-0 mt-4"></p>
                                    <p className="mb-0 d-inline-block av-text">Out Of Stock</p>
                            </>}
                        </div>
                    </div>
                    {user && user?.rolecode === 1 && <div>
                        <button className='btn btn-dark' onClick={e=> {numOfItem !== 1 && setNumOfItem((current)=>current-1)}}>-</button> 
                        <span className='mx-2'>{numOfItem}</span> 
                        <button className='btn btn-dark' onClick={e=> setNumOfItem((current)=>current+1)}>+</button> 
                        <button className='btn btn-warning text-light rounded ml-4' onClick={e=> alert('Product added to cart successfully!(NOTE: NO API CALL.)')}>Add to cart</button>
                    </div>}

                    {user && user?.rolecode === 0 && <div className="text-center">
                        <button className='btn btn-danger'>DELETE</button> 
                    </div>}
                </div>
                
            </div>
        </div> 
    )
}

export default Product