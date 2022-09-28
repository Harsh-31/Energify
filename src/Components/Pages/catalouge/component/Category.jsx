import React, {useState} from 'react'
import "../../../styles/category.css"
import Product from './Product';

const Category = ({name, products}) => {
    const [showData, setshowData] = useState(true);

    return (
        <>
            <div>
                <div className="d-flex justify-content-between border-bottom border-danger p-3 pb-0">
                    <h3 className="text-yellow">{name}</h3>
                    <div className="yellow" onClick={e=> setshowData(!showData)}>
                        {showData ? 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"/></svg>
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg> 
                        }
                    </div>
                </div>
                <div className={`row ${showData ? "" : "d-none"}`}>
                    {products.length !== 0 ? products.map((product, index)=> <Product data={product}/>): <h5 className="text-center mt-2">No Product Found</h5>}
                </div> 
            </div>
        </>
    )
}

export default Category