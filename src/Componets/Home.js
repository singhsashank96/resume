import React from 'react'

function Home() {
  return (
    <div className='mx-5 my-4' >
    <h2> Home </h2> 
    <div className='cart-wrapper mx-4' style={{height:'100px',width:'500px' ,border:'1px solid orange',marginLeft:'20px'}}>
        <div  className='img-wrapper item'>
            <img src='https://i.pinimg.com/736x/5b/95/b0/5b95b05d61d9d6c2e055f33b31c1d16d.jpg' style={{height:'100px'}}   />
        </div>
        <div className='text-img-wrapper item'>
        <span>I-Phone</span>
        </div>
        <div  className='text-img-wrapper item'>
            <span>Price : $12000</span>
        </div>
        <div className='btn-wrapper item'>
        <button   style={{color:'red',border:'4px '}}>Add to cart</button>
        </div>
    </div>
    </div>
  )
}
 
export default Home
