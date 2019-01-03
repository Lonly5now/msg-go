"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { initNotes, addNote, deleteNote } from "../action/action.jsx";
import Msgs_header from "../component/Msgs_header.jsx";
import Msgs_form from "../component/Msgs_form.jsx";
import Msgs_list from "../component/Msgs_list.jsx";
import "../../stylesheets/style.scss";

class Notes extends React.Component{
	constructor(props){
		super(props);
		this.state={
			formDisplayed : false
		};
	}

	componentDidMount(){
		this.props.dispatch( initNotes() );
	}

	onToggleForm(){
		this.setState({
			formDisplayed : !this.state.formDisplayed
		});
	}

	onNewNote(newNote){
		this.props.dispatch( addNote(newNote) );
	}

	onDeleteNote(date){
		/*根据日期来删除笔记*/
		var delete_date={
			date : date
		};
		this.props.dispatch( deleteNote(delete_date) );
	}

	render(){
		const { notes } = this.props;
		return(
			<div className="container">
				<Msgs_header onToggleForm={ this.onToggleForm.bind(this) }/>
				<div className="container_main">
					<Msgs_form onToggleForm={ this.onToggleForm.bind(this) } 
					formDisplayed={ this.state.formDisplayed } onNewNote={ this.onNewNote.bind(this) }/>
					<Msgs_list notes={ notes } onDeleteNote={ this.onDeleteNote.bind(this) }/>
				</div>
			</div>
		);
	}
}

Notes.propTypes = {
	notes : PropTypes.arrayOf(
			PropTypes.shape({
				title : PropTypes.string.isRequired,
				email : PropTypes.string.isRequired,
				description : PropTypes.string.isRequired,
				date : PropTypes.string.isRequired
			}).isRequired
		).isRequired
}

function select(state){
	return{
		notes : state.notes
	}
}

export default connect(select)(Notes);