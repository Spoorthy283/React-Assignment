import React from 'react';
import { baseurl } from '../shared/baseurl';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
function About(props) {
   
    if(props.about.isLoading)
    {
        return(
            <div className="container">
                <Loading/>
            </div>
        );
    }
    else if(props.about.errmsg) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.about.errmsg}</h4>
                </div>
            </div>
        );
    }
    else if(props.about.about != null){    
        const p = props.about.about.map((about) => {
                    return(
                        <div key={about.id} className="media mt-4 ml-1">
                            <img src={baseurl + about.image} className="align-self-start mr-3" height="100px" width="150px" alt={about.name}/>
                            <div className="media-body">
                                <p><b>{about.name}</b> {about.description}</p>
                            </div>
                        </div>
                    );
                });  
           
        return(        
            <div className="container">
                <div className="row mt-2">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>       
                </div>
                 <div className="row mt-2">
                    <h1 className="siteTextColor">About Us</h1>
                 </div>                
                <div className="row mt-2">
                    <img src="/assets/aboutus.jpg" width="100%" height="365px" className="mr-1" alt="About Us"/>
                </div>
                <div className="row mt-2">
                    <h4>National Preschool is a bilingual preschool. With us, your child is developing English skills while exploring the world together.</h4>
    
                    <p>We see the children as citizens of the world by giving children the opportunity for linguistic and cultural meetings from the very beginning of life.
                        We see differences as an asset and welcome a diversity of both children and staff.</p>
    
                    <p>National Preschool can seat up to 50 children aged 1-5. 
                        We are located in newly renovated premises on Larmvägen 31 in Fredriksdal. In the vicinity of the preschool we have many different natural areas and playgrounds to explore. A stone's throw away is Fredriksdal's museums and gardens, a wonderful environment where we can learn more about animals and nature.
                        By city bus we take the children on excursions to exciting places around Helsingborg.</p>
                </div>
                <div className="row mt-2 mb-2">
                   {p}
                </div>    
            </div>
           
        );
    }
    else {
        return(<div></div>);
    }
    
}

export default About;