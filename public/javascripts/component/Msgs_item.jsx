"use strict";
import React, { Component, PropTypes } from "react";

class Msgs_item extends React.Component{

	handleOver(){
		this.refs.delete.style.display="block";
	}

	handleOut(){
		this.refs.delete.style.display="none";
	}

	handleDelete(){
		var date=this.props.date;
		this.props.onDeleteNote(date);
	}

	render(){
		return(
			<div>
				<div className="Msgs_item" onMouseOver={ this.handleOver.bind(this) } onMouseOut={ this.handleOut.bind(this) }>
					<h4>{ this.props.title }</h4>
					<p>{ this.props.description }</p>
					<div className="delete" ref="delete" type="button" onClick={ this.handleDelete.bind(this) }><img src="../../icon/del_icon.png" width="15px" height="15px"></img></div>
					<div><span className="date" >{ this.props.email}</span>
					<span className="date">{ this.props.date }</span></div>
					
				</div>
			</div>
		);
	}
}

Msgs_item.propTypes = {
	title : PropTypes.string.isRequired,
	email : PropTypes.string.isRequired,
	description : PropTypes.string.isRequired,
	date : PropTypes.string.isRequired,
	onDeleteNote : PropTypes.func.isRequired
}

export default Msgs_item;