import { timers } from 'npm';
import  React from  'react' 
import sendEmail from  './sendEmail'
import react,  { useState,useEffect } from 'react';
import {Credenziali } from '/frontend/componenti/Signin.js';
class SignIn extends Component {
  render() {
    return (
      <Register />
    );
  }
}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<SignIn>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  
  } 
  return valid;
  const errorEmail= (email,error) => {
    let filtered = this.state.likes.filter(like => like.email == SignIn.email);
    this.setState({
      likes: [...filteredEmail, email]

    }

    )
  return  error 
}

class Register extends React.Component {
 render()
 {
   constructor(props){
     super (props)
     this.state = {value: ''};
     
      this.state.error=
      {
       Nick:'',
       Email:['',''],
       password:'',
       retypepassword:'',
       Nome:'',
       cognomen='',
       età='',
       foto=''


      }
         };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   
   };
   //# data fetched from  fronted
   function fetchCredenziali() {
    const Credenzaili , setCredenzaili] = useState([]);
    useEffect(() => {
      async function fetchCredenziali() {
        const response = await fetch('/employees');
        const fetchedCredenziali = await response.json(response);
        setCredenzaili(fetchedCredenziali);
      }
      fetchCredenziali();
    }, []);
  //#data fetched to backend
   useEffects(()=>{
    fetch('/validation').then(response=>{
      if (response.ok){
        return response.json();
      }      
    }).then(credenziali=>console.log(credenziali))
 }
 )
  
  // handle button click of login form
  

  handleChange = (event) => 
  {event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) 
   {
      case 'Nome': 
        errors.Nome = 
          value.length <=0
            ? 'il nome non puo essere vuoto '
            : '';
        break;
        case 'cognomen': 
        errors.cognomen = 
          value.length <=0
            ? 'il cognomen non puo essere vuoto '
            : '';
        break;
      case 'email': 
        errors.email ={ 
          {validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!'};
          errorEmail(email, error)
          ?'email gia inserita'  
           :'';
          };
      break;
      case 'password':
        {errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
          }
        };
      break;
      case retypepassword:
        errors.retypepassword = 
         !(retypepassword===password)
          ? 'Password must be the same!'
          : '';
      break;
      case eta:
        errors.eta= 
          eta<16
          ? 'too young to work '
          : '';
      break;
      default:
    break;
    };
    this.setState({errors, [name]: value}); 

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
      sendEmail(this.props.email)
    }else{
      console.error('Invalid Form')
    }
  }



 {return 
  (<div>
    this.state.SignIn.map((Credenziali,i){
     <div className="SignInPage">
      <form onSubmit={handleSubmit}>
        {nick=><div className="Nick">
          <input type="text" name='Nick' autocomplete='true' onSubmit={this.handleSubmit}>
            Nick:{Credenziali.Nick}
            </input>
          </div>}
          {Email=><div className="Email">
          <input type="text" name='Email' autocomplete='true' onSubmit={this.handleSubmit}>
           Email:{Credenziali.Email}
            </input>
          </div>}
          {Email=><div className="Email">
          <input type="text" name='Email' autocomplete='true' onSubmit={this.handleSubmit}>
            Re_Type Email:{Credenziali.Email}
            </input>
          </div>}
          {Password=><div className="Password">
          <input type="text" name='Password' autocomplete='true' onSubmit={this.handleSubmit}>
            Password:{Credenziali.password}
            </input>
          </div>}
          {Password=><div className="Password">
          <input type="text" name='Password' autocomplete='true' onSubmit={this.handleSubmit}>
            Re type Password:{Credenziali.Password}
            </input>
          </div>}
          {Nome=><div className="Nome">
          <input type="text" name='Nome' autocomplete='true' onSubmit={this.handleSubmit}>
            Nome:{Credenziali.Password}
            </input>
          </div>}
          {cognomen=><div className="Cognomen">
          <input type="text" name='Cognomen' autocomplete='true' onSubmit={this.handleSubmit}>
            Cognomen:{Credenziali.cognomen}
            </input>
          </div>}
          {matricola=><div className="Matr">
          <input type="text" name='Matr' autocomplete='true' onSubmit={this.handleSubmit}>
            matricola:{Credenziali.Matr}
            </input>
          </div>}
          {Foto=><div className="foto">
          <input type="button" name='Sfoglia' autocomplete='true' onSubmit={this.handleSubmit}>
             <button >
               sfoglia
             </button>
            </input>
          </div>}

          <div className='button'>
          <button submit={this.handleSubmit} onClick={
            ()=>sendEmail({Nome:'Nome'},{Cognomen:'Cognomen'},{email:'email'},"thank you for your register in our app")} >
            
          </button>
        </div>
    </form>  
  </div>
  }
 )
  </div> )
  };

 
export default SignIn
