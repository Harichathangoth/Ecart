import React from 'react'
import {  Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addwhishlistslice } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'


function Home() {

  const data = useFetch("https://dummyjson.com/products")
  // console.log(data)
  const dispatch = useDispatch()
  

  return (
    <>
       <Row className='ms-5' style={{marginTop:'100px'}}>
       {
          data?.length>0?data?.map((product,index)=>(
            
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card  style={{ width: '18rem'}}>
      <Card.Img style={{height:'200px'}} variant="top" src={product?.thumbnail}/>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
        <p>{product?.description.slice(0,40)}...</p>
          <p className='fw-bolder mt-2'>${product?.price}</p>
        </Card.Text>
      <div className='w-100 d-flex justify-content-between'>
      <button onClick={()=>dispatch(addwhishlistslice(product))} className='btn'><i class="fa-solid fa-heart fa-xl"></i></button>
      <button onClick={()=>dispatch(addToCart(product))} className='btn '><i class="fa-solid fa-cart-shopping fa-xl"></i></button>
      </div>
      </Card.Body>
    </Card>
            </Col>
          
          )):<p className='fw-bolder'>Nothing To display</p>
        }
       </Row>
    </>
  )
}

export default Home