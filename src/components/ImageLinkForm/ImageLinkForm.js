import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'This recognition app works like magic. You should give it a try'}
			</p>
			<div className='center'>
				<div className='form center pa4 ba3 shadow-5'>
					<input className='f4 pa2 -70 center' 
						placeholder='Enter image url here' 
						type='text' 
						autoFocus 
						onChange={onInputChange}
					/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-purple'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
				
			</div>	
		</div>
		
	)

}


export default ImageLinkForm;