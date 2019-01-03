"use strict";
import React, { Component, PropTypes } from "react";
import Msgs_item from "./Msgs_item.jsx";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "../../stylesheets/transition.scss";

class Msgs_list extends React.Component{
	render(){
		var notes=this.props.notes;
		var Msgs_items=notes.map( (note,index) => {
			return <Msgs_item key={ index } title={ note.title } description={ note.description } email={ note.email }
				date={ note.date } onDeleteNote={ this.props.onDeleteNote }/>;
		});
		return(
			<div className="Msgs_list">
				<ReactCSSTransitionGroup 
				transitionName="notes" 
				transitionEnterTimeout={500}
          				transitionLeaveTimeout={500}>
					{ Msgs_items }
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

Msgs_list.propTypes = {
	notes : PropTypes.arrayOf(
			PropTypes.shape({
				title : PropTypes.string.isRequired,
				email : PropTypes.string.isRequired,
				description : PropTypes.string.isRequired,
				date : PropTypes.string.isRequired
			}).isRequired
		).isRequired
}

export default Msgs_list;