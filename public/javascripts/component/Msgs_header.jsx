"use strict";
import React, { Component, PropTypes } from "react";

class Msgs_header extends React.Component{
	handleOver(){
		this.refs.add.style.display="block";
	}
	handleOut(){
		this.refs.add.style.display="none";
	}
	render(){
		return(
			<div className="header" onMouseOver={ this.handleOver.bind(this) } onMouseOut={ this.handleOut.bind(this)}>
				<div className="header_main">
					<img src="../../icon/favicon.ico" width="80px" height="80px"><span className="toptitle">Msg  Go</span></img>
					<input ref='add' type="button" value="添加留言" className="add_note_btn" onClick={ this.props.onToggleForm } />
				</div>
			</div>
		);
	}
}

Msgs_header.propTypes = {
	onToggleForm : PropTypes.func.isRequired
}

export default Msgs_header;