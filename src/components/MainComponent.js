import React, { Component } from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent'
import Contact from './ContactComponent';
import Work from './WorkComponent';
import {fetchAbout,fetchContact, fetchWork, fetchHome, sendQuery} from '../redux/ActionCreators';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    about : state.about,
    contact : state.contact,
    work : state.work,
    home : state.home,
    query : state.query
})

const mapDispatchToProps = (dispatch) => ({
    sendQuery : (name, email, message) => dispatch(sendQuery(name, email, message)),
    fetchAbout : () => {dispatch(fetchAbout())},
    fetchContact : () => {dispatch(fetchContact())},
    fetchWork : () => {dispatch(fetchWork())},
    fetchHome : () => {dispatch(fetchHome())}
    
})

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAbout();
        this.props.fetchContact();
        this.props.fetchWork();
        this.props.fetchHome();
    }
    render() {
        return(
            <div>
                <Header/>
                    <Switch>
                        <Route path="/home" component={() => <Home home = {this.props.home}/>}></Route>
                        <Route path="/about" component = {() => <About about = {this.props.about}/>}/>
                        <Route path="/contact" component = {() => <Contact sendQuery = {this.props.sendQuery} contact = {this.props.contact} />}/>
                        <Route path="/work" component = {() => <Work work = {this.props.work}/>}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));