import React from 'react'
import { Redirect } from 'react-router-dom'

const LoginCheck = (props) => ((props.flag) ? props.children : <Redirect to={'/'}/>)

export default LoginCheck;
