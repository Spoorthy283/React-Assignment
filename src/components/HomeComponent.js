import React from 'react';
import {baseurl} from '../shared/baseurl';
import { Loading } from './LoadingComponent';

function Home(props) {
    if(props.home.isLoading)
    {
        return(
            <div className="container">
                <Loading/>
            </div>
        );
    }
    else if(props.home.errmsg) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.home.errmsg}</h4>
                </div>
            </div>
        );
    } 
    else if(props.home.home)   {
        const h = props.home.home.map((h) => {
            return(
                <div key={h.id} className="col-md-6 col-sm-12  mt-1 mb-1">
                   <a href={h.url} className="card siteColor">
                        <img className="card-img-top" height="250px" src={baseurl + h.image}/>
                        <div className="card-body">
                            <h5 className="card-title">{h.page}</h5>
                            <p className="card-text siteColor">{h.description}</p>
                        </div>
                    </a>
                    
                </div>
            )
        })
        return(
            <>
                <div className="mb-2">
                    <img src="assets/home.jpg" width="100%" height="350px" alt =""/>
                </div>
                <div className="container mb-2">               
                    <div className="row">
                        <h1 className = "siteTextColor">NPS Preschool Helsingborg</h1>
                        <p>Maybe you already speak English at home? Maybe you have plans to move abroad eventually?
                            Maybe you just see the benefits of having the child access to English from a young age? Then National Preschool is the preschool for your family.</p>

                        <p>With us, your child will be learning English skills while we explore the world together.</p>

                        <p>Maybe you already speak English at home? Or you may have future plans of moving abroad? Or 
                        simply you might just realize the benefits of learning English from an early age? In any case, National Preschool is the preschool for your family!</p>

                        <p>With us, your child will learn English through play as we explore the world together.</p>
                    </div>
                    <div className="row">
                        {h}
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

export default Home;