import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import Queries from './QueriesComponent';
import { sendQuery } from '../redux/ActionCreators';

class Contact extends React.Component {
    constructor(props){
        super(props);
      
    }
   
    render(){
       if(this.props.contact.isLoading) {
           return(
               <Loading/>
           );
       }
       if(this.props.contact.errmess) {
            return(
                <div>{this.props.contact.errmess}</div>
            );
        }
       else if(this.props.contact.contact != null){
           const contacts = this.props.contact.contact.map(con => {
               return(
                   <li key={con.id}>
                        <h5>{con.name}, {con.designation}</h5>
                        <p>Email: <a href={"mailto:" + con.email}>{con.email}</a> <br/>
                        Phone: {con.phone}</p>
                   </li>
                   
               );
               
           });
            return(
                <div>
                    <div className="">
                        <img width="100%" height="350px" src="assets/contactus.jpg" alt="ContactUS"/>
                    </div>
                   
                    <div className="container">
                        <div className="row mt-2">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                            </Breadcrumb>       
                        </div>
                        <div className="row mt-2">
                            <h1 className="siteTextColor"> Contact Us</h1>
                        </div>
                        <div className="row mt-2">
                            <p>Are you curious to know more about preschool? Feel free to contact us. </p>  
                            <p>Are you curious about our preschool and want to know more? Please do not hesitate to contact us.</p>                        
                        </div>
                        
                        <div className="row mt-2">
                            <div className="col-12">
                                <ul className="noBullets lileftmarg">
                                    {contacts}
                                </ul>
                            </div>                           
                        </div>
                        <div className="row mt-2 mb-2">
                            <h4>For more queries</h4>
                            <Queries sendQuery = {this.props.sendQuery}/>
                        </div>
                    </div>

                </div>
            );
       }
       else{
           return(
               <div></div>
           );
       }
        
    }
}

export default Contact;