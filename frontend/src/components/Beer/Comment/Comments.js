import React, { Component } from 'react';
import { Button } from 'reactstrap';
import RatingStars from '../RatingStars';
import CommentForm from './Form';

class RenderComments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countFrom: 0,
			countTo: 5,
			firstPage: true,
			lastPage: this.props.comments.length >= 0 && this.props.comments.length <= 5,
			lastComment: this.props.comments.length
		};
	}
	
	prevPage() {
		this.setState({
			countFrom: this.state.countFrom - 5,
			countTo: this.state.countTo - 5,
			firstPage: (this.state.countFrom-5) === 0,
			lastPage: false
		});
	}

	nextPage() {
		this.setState({
			countFrom: this.state.countFrom + 5,
			countTo: this.state.countTo + 5,
			firstPage: false,
			lastPage: this.state.lastComment >= (this.state.countFrom+5) && this.state.lastComment <= (this.state.countTo+5) ? true : false
		});
	}
	render() {
		if (this.props.comments != null) {
			const comentarios = this.props.comments.slice(this.state.countFrom, this.state.countTo).map(comment => {
				return (
					<li key={comment.id}>
						<RatingStars rating={comment.rating} />
						<p>{comment.comment}</p>
						<p>-- {comment.user.name}, {new Intl.DateTimeFormat('en-US', {month:'short',day:'2-digit',year:'numeric'}).format(new Date(comment.created_at))} </p>
					</li>
				)
			})
			return (
				<div className="col-12 col-md-6">
					<div className="row">
						<div className="col-1 pag-arrow">
						{!this.state.firstPage ?
							<Button className="pag-button" onClick={() => this.prevPage()} color="black"><i className="fa fa-arrow-left"></i></Button>
						: ''}
						</div>
						<div className="col-10">
							<h4 className='App-subtitle'>Comments</h4>
							<ul className='list-unstyled'>
								{comentarios}
							</ul>
						{ this.props.auth.isAuthenticated ?  
							<CommentForm beerId={this.props.beerId} postComment={this.props.postComment} />
						: ''}
						</div>
						<div className="col-1 pag-arrow">
						{!this.state.lastPage ?
							<Button className="pag-button" onClick={() => this.nextPage()} color="black"><i className="fa fa-arrow-right"></i></Button>
						: ''}
						</div>
					</div>
				</div>
			)
		}
		else {
			return (
				<div className="col-12 col-md-6">
					<h4 className='App-subtitle'>Comments</h4>
				{ this.props.auth.isAuthenticated ?  
					<CommentForm beerId={this.props.beerId} postComment={this.props.postComment} />
				: ''}
				</div>
			)
		} 
	}
}

export default RenderComments;