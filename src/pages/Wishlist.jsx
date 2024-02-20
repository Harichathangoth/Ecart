import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice'
import { removeFromWsihlist } from '../redux/wishlistSlice'





function Wishlist() {

  const dispatch = useDispatch()

  const wishlistArray = useSelector((state)=>state.whishlistReducer)
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWsihlist(product.id))
  }
  

  return (
    <div style={{marginTop:"100px",marginLeft:"100px"}}>
    <Row>
    {
        wishlistArray.length>0?
        wishlistArray.map((product,index)=>(
          <Col key={index} className='' sm={12} md={6} lg={4} xl={3}>
            <Card  style={{ width: '18rem'}}>
      <Card.Img style={{height:'200px'}} variant="top" src={product?.thumbnail}/>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
        <p>{product?.description.slice(0,40)}...</p>
          <p className='fw-bolder mt-2'>${product?.price}</p>
        </Card.Text>
      <div className='w-100 d-flex justify-content-between'>
      <button onClick={()=>dispatch(removeFromWsihlist(product.id))}  className='btn'><i class="fa-solid fa-trash fa-lg" style={{color:"#e62d2d"}}></i></button>
      <button onClick={()=>handleWishlistCart(product)} className='btn '><i class="fa-solid fa-cart-shopping fa-xl"></i></button>
      </div>
      </Card.Body>
    </Card>
            </Col>
        )):<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img style={{width:'400px',height:'400px'}} src="https://imgs.search.brave.com/Wix50tDYcX2hHYhjnpfX_cuxPI0eQXCf-iN37-FKS2I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/VWsxbl9IdXBrZGtB/QUFBai90cm9sbGV5/LXNob3BwaW5nLmdp/Zg.gif" alt="" />
          <h3 className='text-center text-danger'>Wishlist Is Empty!</h3>
          <Link style={{textDecoration: 'none'}} className='btn btn-warning rounded' to={'/'}>Back to home</Link>
        </div>

      }

    </Row>
    </div>
  )
}

export default Wishlist