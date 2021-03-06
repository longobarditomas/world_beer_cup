import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
		this.toggleModal();
		var rating = values.rating > 0 ? values.rating : 1; 
		this.props.postComment(this.props.beerId, rating, values.comment);
	}

	render() {
		return(
			<React.Fragment>
				<Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating" md={12}>Rating</Label>
								<Col md={12}>
									<Control.select model=".rating" name="rating"
										className="form-control">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment" md={12}>Comment</Label>
								<Col md={12}>
									<Control.textarea model=".comment" id="comment" name="comment"
										rows="6"
										placeholder="Your Comment"
										className="form-control"
										validators={{
											required, minLength: minLength(5), maxLength: maxLength(150)
										}}
										/>
									<Errors
										className="text-danger"
										model=".comment"
										show="touched"
										messages={{
											required: 'Required. ',
											minLength: 'Must be greater than 5 characters.',
											maxLength: 'Must be 150 characters or less.'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col md={12}>
									<Button type="submit" color="primary">
									Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default CommentForm;