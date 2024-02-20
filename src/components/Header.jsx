import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




function Header() {

  const wishlist = useSelector((state)=>state.whishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)


  return (
    <>
        
      <Navbar style={{zIndex: '1'}} expand="lg" className="bg-body-tertiary  position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand href="#home">
        <Link to={'/'} style={{textDecoration:'none', fontSize:'25px'}}><i class="fa-solid fa-truck-fast fa-2xl"></i>
            E-cart
           </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
            <Link to={'/wishlist'} style={{textDecoration:'none', fontSize:'20px',fontWeight:'bold'}}>
            <i class="fa-solid fa-heart"></i> Wishlist<Badge bg="secondary" className='ms-1'>{wishlist.length}</Badge>
           </Link>
            </Nav.Link>
            <Nav.Link>
            <Link to={'/cart'} style={{textDecoration:'none', fontSize:'20px',fontWeight:'bold'}}>
            <i class="fa-solid fa-cart-shopping"></i>Cart<Badge bg="secondary" className='ms-1'>{cart.length}</Badge>
           </Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header