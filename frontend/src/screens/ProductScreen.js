import React from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Csrd,
  Button,
} from 'react-router-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  const products = products.find((p) => p._id === match.params.id)
  return <div>{products.name}</div>
}

export default ProductScreen
