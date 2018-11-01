import React from 'react'

const Send=()=>{
	let studentNum
	let money

	return(
		<div>
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
		<input ref={node=>studentNum=node}/>
		<input ref={node=>money=node}/>
		<button type="submit">
		Send
		</button>
		</form>
		</div>
	)
}

export default Send
