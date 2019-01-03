"use strict";
import React, { Component, PropTypes } from "react";
import { width } from "window-size";

class Msgs_form extends React.Component{

	handleSubmit(event){
		event.preventDefault();
		if(this.refs.title.value=="") return;
		var newNote={
			title : this.refs.title.value,
			email : this.refs.email.value,
			description : this.refs.description.value,
			date : "留言于  "+new Date().getFullYear()+"."+(new Date().getMonth()+1)+"."+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes() +":"+new Date().getSeconds()
		};
		this.refs.yout_form.reset();
		this.props.onNewNote(newNote);
	}

	render(){
		var style={
			display : this.props.formDisplayed ? "block" : "none"
		};
		return(
			<div className="note_form_wrap">
				<form ref="yout_form" action="#" className="note_form" style={ style } onSubmit={ this.handleSubmit.bind(this) }>
					<div>
						<input ref="title" type="text" className="your_title" placeholder="你的昵称"/>
						<input ref="email" type="text" className="your_title" placeholder="你的邮箱"/>
					</div>
					{/* <h5>昵称h5</h5>
					<span>ni</span><input ref="title" type="text" className="your_title" placeholder="你的笔记的标题"/> */}
					<textarea ref="description" className="your_description" placeholder="留言内容"/>
					<input type="submit" value="确认" className="confirm_btn"/>
					<input type="button" value="取消" className="cancel_btn" onClick={ this.props.onToggleForm }/>
				</form>
			</div>
		);
	}
}

Msgs_form.propTypes = {
	onToggleForm : PropTypes.func.isRequired,
	formDisplayed : PropTypes.bool.isRequired,
	onNewNote : PropTypes.func.isRequired
}

export default Msgs_form; 