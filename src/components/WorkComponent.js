import React from 'react';
import {Breadcrumb, BreadcrumbItem,UncontrolledCarousel} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';


function Work(props) {

    if(props.work.isLoading){
        return(
            <div className="container">
                <Loading/>
            </div>
        );
    }
    else if(props.work.errmess){
        return(
            <div className="container">
                <div className="row">
                    {props.errmess}
                </div>
            </div>
        );
    }
    else if(props.work.work != null){  
        return(
            <>
                <div className="">
                    <img width="100%" height="350px" src="assets/work1.jpg" alt="how we work"/>
                </div>
        
                <div className="container">
                    <div className="row mt-2">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>That's How We Work</BreadcrumbItem>
                        </Breadcrumb>       
                    </div>
                    <div className="row">
                        <h1 className="siteTextColor">That is how we work</h1>
                    </div>
                    <div className="row">
                        <p><b>We follow the Swedish curriculum for preschool  with the difference that all our activities take place in two languages, Swedish and English.</b></p>
                        <p>Swedish and English permeate our daily work and follow us in everything we do, be it collection, saga, picture, music, drama, science and technology, motor skills, mathematics, play, fruit time or time for diaper change.</p>
                        <p>We change our learning environments based on the children's needs and interests so that they challenge and inspire the children's curiosity, exploration and play. We attach great importance to the participation of children and see ourselves as co-discoverers.</p>
                        <p>The children of course work with modern technology and use digital learning tools for communication, creation and learning. We document children's learning so that it becomes visible to themselves, to parents and to us educators.</p>
                    </div>                    
                </div>
            </>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

export default Work;