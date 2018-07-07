import React from 'react';

const Bouton = (props) => {
	return(
		<div>
			<input onClick={props.btn} type="button" value="0"/>
			<input onClick={props.btn} type="button" value="1"/>
			<input onClick={props.btn} type="button" value="2"/>
			<input onClick={props.btn} type="button" value="3"/>
			<input onClick={props.btn} type="button" value="4"/>
			<input onClick={props.btn} type="button" value="5"/>
			<input onClick={props.btn} type="button" value="6"/>
			<input onClick={props.btn} type="button" value="7"/>
			<input onClick={props.btn} type="button" value="8"/>
			<input onClick={props.btn} type="button" value="9"/>
			<input onClick={props.btn} type="button" value=","/>
			<input onClick={props.btn} type="button" value="="/>
			<input onClick={props.btn} type="button" value="+"/>
			<input onClick={props.btn} type="button" value="-"/>
			<input onClick={props.btn} type="button" value="*"/>
			<input onClick={props.btn} type="button" value="/"/>
		</div>
	)
}

export default Bouton;
