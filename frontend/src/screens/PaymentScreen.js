import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const navigate = useNavigate()

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Credit Card')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>

          <Col>
            <Form.Check
              type='radio'
              label='Credit Card'
              id='Credit Card'
              name='paymentMethod'
              value='Credit Card'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>{' '}
            <Form.Check
              type='radio'
              label='Cash On Delivery (COD)'
              id='Cash On Delivery'
              name='paymentMethod'
              value='Cash On Delivery'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>{' '}
            <Form.Check
              type='radio'
              label='Net Banking'
              id='NetBanking'
              name='paymentMethod'
              value='Net Banking'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>{' '}
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
