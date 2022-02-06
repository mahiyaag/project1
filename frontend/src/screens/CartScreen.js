import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import{ Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
import { useParams, Navigate, useNavigate } from 'react-router-dom'


const CartScreen = ({location, history}) => {
  const params = useParams()
  const navigate = useNavigate()


  const productId = params.id 

  const qty =  1
 
  // const qty =  location.search ? Number(location.search.split('=')[1]) : 1, is the original code
  // but I think react 6 does not have location.search as it says

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const{ cartItems } = cart

  

  useEffect(() => {
    if (productId){
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

   
  
  const addToCartHandler = () => {
   navigate(`../cart/${params.id}?quantity=${qty}`);
 }

  const removeFromCartHandler =(id) => {
    console.log('remove')
  }

  return <Row>
    <Col md = {8}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? <Message>Your Cart is Empty<Link to= '/'>Go Back</Link></Message>:(
        <ListGroup variant='flush'>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control as='select'
                        value={item.qty} 
                        onChangeCapture={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                        >
                        
                          {
                        
                          
                          [...Array(item.countInStock).keys()].map( (x) => (
                            <option key={x + 1} value={ x + 1}>
                              {x+1}
                            </option>
                          ))}
                        
                        </Form.Control>

                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
              </Row>
            </ListGroup.Item>
          ))}

        </ListGroup>
      )}

    </Col> 
    <Col md = {2}>

    </Col>

    <Col md = {2}>

    </Col>

  </Row>
}

export default CartScreen
