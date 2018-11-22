import React from 'react'
import { Redirect } from 'react-router-dom'

const LoginCheck = (props) => ((props.flag) ? null : <Redirect to={'/'}/>)

export default LoginCheck;
