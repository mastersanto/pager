import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

const Button = (props) =>
    <Link to={props.path} className={`btn ${props.className}`}>
      Next
    </Link>

export default Button