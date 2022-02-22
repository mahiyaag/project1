import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import Message from '../components/Message'
import { addToWishlist, removeFromWishlist } from '../actions/wishlistActions'
import { useParams, useNavigate } from 'react-router-dom'

const WishlistScreen = () => {
  const [qty] = useState(1)
  const params = useParams()
  const navigate = useNavigate()
  const productId = params.id

  const dispatch = useDispatch()

  const wishlist = useSelector((state) => state.wishlist)
  const { wishlistItems } = wishlist

  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails

  useEffect(() => {
    if (productId) {
      dispatch(addToWishlist(productId))
    }
  }, [dispatch, productId])

  const removeFromWishlistHandler = (id) => {
    dispatch(removeFromWishlist(id))
  }
  //const addToWishlistHandler = () => {
  //navigate(`../wishlist/${params.id}?quantity=${qty}`)
  //}
  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`)
  }
  return (
    <Row>
      <Col md={8}>
        <h1>YOUR WISHLIST</h1>
        {wishlistItems.length === 0 ? (
          <Message>
            Your wishlist is Empty <Link to='/'>Go Back </Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {wishlistItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>₹{item.price}</Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromWishlistHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-black'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  )
}

export default WishlistScreen
