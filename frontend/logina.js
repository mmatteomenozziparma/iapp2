import  React from  'react' 
import { useState } from 'react';
import {Nick,password, email} from '/componenti/Login'
class LogInA extends Component {
  render() {
    return (
      <LogInForma />
    );
  }
}
  useEffects=>{

  }
  const errorEmail= (email,error) => {
    let filtered = this.state.likes.filter(like => like.email == SignIn.email);
    this.setState({
      likes: [...filteredEmail, email]

    },
    const errorPassword= (password,error) => {
        let filtered = this.state.likes.filter(like => like.password == SignIn.password);
        this.setState({
          likes: [...filteredPassword, Password]
    
        }

    )
  return  error 
}

class LogInUserA extends React.Component {
 render()
 {
   constructor(props){
     super (props)
     this.state = {value: ''};
    credenzialiA={  
      
      [email=this.props.email,
      password=this.props.password
    ]
    }, 
      this.state.errors:
      {
       Email='',
       password='',
         };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
        }
   }
  
 
  // handle button click of login form
  const handleLoginA = () => {
    props.history.push('/logout');
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
   switch (Credenzialia) {
        case 'email': 
        
          errorEmail(email, error)
          ?'email gia inserita'  
           :''
      break;
      case 'password':
        errors.password =(password,error)
           
            ? 'password sbagliata'
            : '';
          };
      break;

    };
    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }  
  return (
      <div className="Login">
        {Login.map((data, key) => {
          return (
            <div key={key}>
            <div className='Nick' >
            <Nick ><input type:text name='nick' onChange={this.handleChange}> {this.props.nick} Nickname</input> </Nick>
            </div>
            <div className='email' >
            <email><input type:text name='email' onChange={this.handleChange}>{this.props.email} email </input></email>
            </div>
            <div className='password' >
             <password ><input type:text name='password' onChange={this.handleChange}>{this.props.password} Password </input></password>
             </div>
         </div> 
          );
        })}
       </div>};
 export default LogInA
