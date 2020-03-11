import React from 'react';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Row, Button, Label} from 'reactstrap';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Queries extends React.Component {
    constructor(props){
        super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
   handleSubmit(values) {
       this.props.sendQuery(values.name, values.email, values.message);
       
   }
    render(){
        return(
            <div className="container">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor = ".name">Your Name:</Label>
                        <Control.text model=".name" id="name" className="form-control" placeholder="Your Name"
                        validators = {{required, minLength : minLength(2), maxLength: maxLength(15)}} />
                        <Errors className="text-danger"
                            model=".name" 
                            show="touched"
                            messages = {{
                                required : 'Required',
                                minLength : ' Name should atleast contain 2 characters',
                                maxLength : 'Name can maximum 15 characters'
                            }}/>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor = ".email">Email:</Label>
                        <Control.text model=".email" id="email" className="form-control" placeholder="Email"
                        validators = {{required,validEmail }} />
                        <Errors className="text-danger"
                            model=".email" 
                            show="touched"
                            messages = {{
                                required : 'Required',
                                validEmail : 'Please enter valid email address'
                            }}/>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor = ".message">Message:</Label>
                        <Control.textarea model=".message" id="message" className="form-control" placeholder="Message" rows="6"
                        validators = {{required, minLength : minLength(5), maxLength: maxLength(200)}} />
                        <Errors className="text-danger"
                            model=".message" 
                            show="touched"
                            messages = {{
                                required : 'Required',
                                minLength : 'Message should atleast contain 5 characters',
                                maxLength : 'Message can contain maximum 200 characters'
                            }}/>
                    </Row>

                    <Row className="form-group">
                        <Button type="submit" color="primary">Submit</Button>
                    </Row>
                </LocalForm>
            </div>
        );
    }
}

export default Queries;