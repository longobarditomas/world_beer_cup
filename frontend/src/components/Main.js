import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
/* import { actions } from 'react-redux-form'; */
import { loginUser, logoutUser, signinUser } from '../redux/auth/actionCreators';
import { fetchBeers } from '../redux/beer/actionCreators';
import { fetchComments, postComment } from '../redux/comment/actionCreators';
import { fetchFavorites, postFavorite, deleteFavorite } from '../redux/favorite/actionCreators';
import { fetchReservations, deleteReservation } from '../redux/reservation/actionCreators';
import { fetchRates } from '../redux/rate/actionCreators';
import Beers from './Beers';
import Favorites from './Favorite';
import BeerDetail from './BeerDetail';
import Home from './Home';
import LoginForm from './LoginForm';
import Signin from './Signin';
import SigninForm from './SigninForm';
import Reservations from './Reservations';
import Header from './Header';
import Footer from './Footer';

const mapStateToProps = state => {
  return {
    beers: state.beers,
    comments: state.comments,
    auth: state.auth,
    favorites: state.favorites,
    reservations: state.reservations,
    rates: state.rates,
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (beerId, rating, comment) => dispatch(postComment(beerId, rating, comment)),
  fetchComments: (beerId, page) => dispatch(fetchComments(beerId, page)),
  fetchBeers: () => { dispatch(fetchBeers())},
  fetchRates: () => { dispatch(fetchRates())},
  loginUser: (creds) => dispatch(loginUser(creds)),
  signinUser: (creds) => dispatch(signinUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  fetchFavorites: () => dispatch(fetchFavorites()),
  postFavorite: (beerId) => dispatch(postFavorite(beerId)),
  deleteFavorite: (beerId) => dispatch(deleteFavorite(beerId)),
  fetchReservations: () => dispatch(fetchReservations()),
  deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
});

class Main extends Component {

  componentDidMount() {
    console.log(this.props.fetchRates())
    this.props.fetchBeers();
    this.props.fetchRates();
    this.props.fetchComments();
    this.props.fetchReservations();
    if (this.props.auth.isAuthenticated === true) {
      this.props.fetchFavorites();
    }
  }
  
  componentDidUpdate(prevState) {
    if (prevState.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
      if (this.props.auth.isAuthenticated === true) {
        this.props.fetchFavorites();
      }
    }
  }

  render() {
    const BeerWithId = ({match}) => {
      return(
        this.props.favorites.favorites || !this.props.auth.isAuthenticated ?  
        <BeerDetail beer={this.props.beers.beers.filter((beer) => beer.id == match.params.beerId)[0]} 
          isLoading={this.props.beers.isLoading}
          errMess={this.props.beers.errMess}
          favorite={this.props.auth.isAuthenticated ? this.props.favorites.favorites.some((favorite) => favorite.beerID == match.params.beerId) : false}
          postFavorite={this.props.postFavorite}
          fetchComments={this.props.fetchComments}
          comments={this.props.comments.comments.filter((comment) => comment.beerID == match.params.beerId)}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          auth={this.props.auth.isAuthenticated}
        />
        :
        <Redirect to={{
          pathname: '/beers',
        }} />
      );
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/',
              state: { from: props.location }
            }} />
      )} />
    );

    return (
        <Router>
          <Header auth={this.props.auth} 
              loginUser={this.props.loginUser} 
              logoutUser={this.props.logoutUser} 
          />  
          <Switch>
              <Route exact path='/' component={() => <Home rates={this.props.rates} />} />
              <Route exact path='/beers' component={() => <Beers beers={this.props.beers} isLoading={this.props.beers.isLoading} fetchComments={this.props.fetchComments} />} />
              <Route path='/beers/:beerId' component={BeerWithId} />
              <Route exact path="/reservations" component={() => <Reservations reservations={this.props.reservations} deleteReservation={this.props.deleteReservation} auth={this.props.auth} />} />
              <PrivateRoute exact path="/favorites" component={() => <Favorites favorites={this.props.favorites} deleteFavorite={this.props.deleteFavorite} />} />
              <Route path='/login' component={() => <LoginForm auth={this.props.auth} 
                loginUser={this.props.loginUser} 
                logoutUser={this.props.logoutUser} />} 
              />
              <Route path='/signin' component={() => <SigninForm auth={this.props.auth} signinUser={this.props.signinUser} />} />
{/*               <Route path='/signin' component={() => <Signin auth={this.props.auth} signinUser={this.props.loginUser} />} /> */}
          </Switch>
          <Footer />
        </Router>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
