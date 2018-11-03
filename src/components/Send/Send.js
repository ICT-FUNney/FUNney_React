import React from 'react'
import './Send.css'

const Send=()=>{
	let studentNum=''
	let money=''

	return(
		<div className='box'>
			<form
				onSubmit={e=>{
				e.preventDefault()
				if(!studentNum.value.trim()){
					return
				}
				if(!money.value.trim()){
					return
				}
				studentNum.value=''
				money.value=''
			}}
			>
				<div>
					<input placeholder="送り先 学籍番号" ref={node=>studentNum=node}/>
				</div>
				<div>
					<input placeholder="送金金額" ref={node=>money=node}/>
				</div>
				<button type="submit">
					Send
				</button>
			</form>
		</div>
	)
}

export default Send
