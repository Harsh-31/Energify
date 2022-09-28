import React from 'react'

const Product = ({data}) => {
    // const [numOfItems, setNumOfItems] = useState(1);
    return (
        <div className="col">
            <div className="card product-card m-3 p-1"  key={data.id}>
                <img className="card-img-top" height="206" src={data.logo} alt="Card image"/>
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
                </div>
                
            </div>
        </div> 
    )
}

export default Product