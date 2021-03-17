import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
/* import { Loading } from './Loading'; */
import { baseUrl } from '../shared/baseUrl';
import RatingStars from './RatingStars';

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
            this.props.postComment(this.props.beerId, values.rating, values.comment);
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
											className="form-control" />
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
				firstPage: (this.state.countFrom-5) == 0,
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
			console.log('HHH');
			console.log(this.props.comments);
			console.log(this.props.comments.length);
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
					<div className="row col-12 col-md-6">
						<div className="col-1 align-h">
					{/* 	{this.props.commentPagination.currentPage > 1 ? 
							<Button onClick={() => this.props.fetchComments(this.props.beerId, this.props.commentPagination.currentPage-1)} color="black"><i class="fa fa-arrow-left"></i></Button>
						: '' } */}
						{!this.state.firstPage ?
							<Button onClick={() => this.prevPage()} color="black"><i class="fa fa-arrow-left"></i></Button>
						: ''}
						</div>
						<div className="col-10">
							<h4 className='App-subtitle'>Comments</h4>
							<ul className='list-unstyled'>
								{comentarios}
							</ul>
							<CommentForm beerId={this.props.beerId} postComment={this.props.postComment} />
						</div>
						<div className="col-1 align-h">
						{!this.state.lastPage ?
							<Button onClick={() => this.nextPage()} color="black"><i class="fa fa-arrow-right"></i></Button>
						: ''}
					{/* 	{this.props.commentPagination.currentPage < this.props.commentPagination.lastPage ? 
							<Button onClick={() => this.props.fetchComments(this.props.beerId, this.props.commentPagination.currentPage+1)} color="black"><i class="fa fa-arrow-right"></i></Button>
						: '' } */}
						</div>
					</div>
				)
			}
			else {
				return (
					<div className="col-12 col-md-6">
						<h4 className='App-subtitle'>Comments</h4>
						<CommentForm beerId={this.props.beerId} postComment={this.props.postComment} />
					</div>
				)
			} 
		}
	}

	function RenderBeer({beer, favorite, postFavorite, auth}) {
		const history = useHistory();
		if (beer != null) {
			return(
				<div className="col-12 col-md-6">
                    <Card className={`beer-color-${beer.color}`}>
                        <CardImg top src={baseUrl + beer.image} alt={beer.name} />
						<CardImgOverlay>
                                <Button outline className={`pull-right beer-color-text-${beer.color}`} color="primary" onClick={() => !auth ? history.push('/login') : favorite ? console.log('Already favorite') : postFavorite(beer.id)}>
                                    {favorite ?
                                        <span className="fa fa-heart"></span>
                                        : 
                                        <span className="fa fa-heart-o"></span>
                                    }
                                </Button>
                            </CardImgOverlay>
                        <CardBody>
                            <CardTitle className="item-title"><h4>{beer.name}</h4></CardTitle>
                            <CardText tag="div">
								<p className="item-description">{beer.description}</p>
								<hr style={{backgroundColor: 'white'}}/>
								<div className="item-type">
									<Row xs="3" className="show-grid">
										<Col><b>Alcohol</b></Col>
										<Col><b>Country</b></Col>
										<Col><b>Color</b></Col>
										<Col>{beer.alcohol}</Col>
										<Col>{beer.country}</Col>
										<Col>{beer.color}</Col>
									</Row>
								</div>
							</CardText>
                        </CardBody>
                    </Card>
				</div>
			);
		} 
		else {
			return(<div></div>);
		} 
	}

    const Beer = (props) => {
		if (props.isLoading) {
			return(
				<div className="container">
                    <div className="row">            
                        {/* <Loading /> */}
                        <h3>LOADING...</h3>
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
			return(
				<div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.beer != null) {
			return (
				<div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/beers">Beers</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.beer.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3 className='App-subtitle'>Beers</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
						<RenderBeer beer={props.beer} favorite={props.favorite} postFavorite={props.postFavorite} auth={props.auth} />
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
							beerId={props.beer.id}
							fetchComments={props.fetchComments}
							/* commentPagination={props.commentPagination} */
                        />
                    </div>
                </div>
            );
		}
		else {
            return (<div></div>)
		}
    }

export default Beer;