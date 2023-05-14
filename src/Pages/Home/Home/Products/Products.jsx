import { Rating, Typography } from '@mui/material';
import product1 from '../../../../assets/images/products/1.png';
import product2 from '../../../../assets/images/products/2.png';
import product3 from '../../../../assets/images/products/3.png';
import product4 from '../../../../assets/images/products/4.png';
import product5 from '../../../../assets/images/products/5.png';
import product6 from '../../../../assets/images/products/6.png';
import { useState } from 'react';

const Products = () => {
    const [value, setValue] =useState(4);
    
    return (
        <div>
            <div className="text-center my-2">
                <h3 className="text-2xl text-orange-500 font-bold">Products</h3>
                <h2 className="text-4xl font-bold">Browse Our Products</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* Static Product Showed every Card  */}
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-3/4' src={product5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-center ">Car Engine Plug</h2>
    
      <Rating name="read-only" value={value} readOnly />
                        <p className='font-bold text-xl text-orange-500'>$ 20.00</p> 
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-3/4' src={product6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-center ">Car Engine Plug</h2>
                        <Rating name="read-only" value={value} readOnly />
                        <p className='font-bold text-xl text-orange-500'>$ 20.00</p> 
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-3/4' src={product4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-center ">Car Engine Plug</h2>
                        <Rating name="read-only" value={value} readOnly />
                        <p className='font-bold text-xl text-orange-500'>$ 20.00</p> 
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-3/4' src={product4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-center ">Car Engine Plug</h2>
                        <Rating name="read-only" value={value} readOnly />
                        <p className='font-bold text-xl text-orange-500'>$ 20.00</p> 
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-3/4' src={product5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-center ">Car Engine Plug</h2>
                        <Rating name="read-only" value={value} readOnly />
                        <p className='font-bold text-xl text-orange-500'>$ 20.00</p> 
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-3/4' src={product6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-center ">Car Engine Plug</h2>
                        <Rating name="read-only" value={value} readOnly />
                        <p className='font-bold text-xl text-orange-500'>$ 20.00</p> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;