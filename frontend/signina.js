import  React from  'react' 
import react,  { useState } from 'react';
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
    this.props.credenzialia=
    {  
    nick:this.props.nick,
    email:this.props.email,
    password:this.props.password, 
    nomea:this.props.nomea,
    viaa:this.props.viaa,
    citta:this.props.citta,
    provincia:this.props.provincia;
    regione:this.props.regione,
    stato:this.props.stato,
    zipcode:this.props.zipcode,}
    this.state.error=
    {  
       Nick:'',
       Email:['',''],
       password:'',
       retypepassword:'',
       Nomea:'',
       viaa='',
       citta='',
       provincia='',
       regione:'',
       stato:'',
       zipcode:'',


      }
         };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   
   }
   useEffects(()=>{
    fetch('/validationa').then(response=>{
      if (response.ok){
        return response.json();
      }      
    }).then(indirizzo=>console.log(indirizzo))
 }
 )
  
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/logout');
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
   switch (name) {
      case 'Nomea': 
        errors.Nomea = 
          value.length <=0
            ? 'il nome dell azienda non puo essere vuoto '
            : '';
        break;
        case 'nick':
          strlen(nomea!=nick)
          ? 'il nick dev essere uguale al nome azienda  '
          :'',
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
          {errorEmail(email, error)
          ?'email gia inserita'  
           :'';
          }
          }
        break;      
        case 'password':
        {errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
          };
      break;
      case retypepassword:
        errors.retypepassword = 
         !(retypepassword===password)
          ? 'Password must be the same!'
          : '';
      break,
      case viaa:
        errors.viaa= 
          (value.length<0)&&(value.lenght>5)
          ? 'riimetti nome via'
          : '';
      break;
    case nomeviaa:
        errors.nomeviaa= 
          errors.length<1
          ? 'field must be no empty'
          : '';
      break;
    case citta:
        errors.citta= 
          error.length<1
          ? 'field must no empty '
          : '';
      break;
    case provincia:
        errors.eta= 
          errors.length<1
          ? 'field must be no empty '
          : '';
      break;
  default:
    break;
    };
    this.setState({errors, [name]: value})
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }



 {return 
  (<div>
    this.state.SignIn.map((Credenzialia,i)=>({
     <div className="SignInPage">
      <form onSubmit={handleSubmit}>
        {nick=><div className="Nick">
          <input type="text" name='Nick' autocomplete='true' onSubmit={this.handleSubmit}>
            Nick:{Credenzialia.Nick}
            </input>
          </div>}
          {Email=><div className="Email">
          <input type="text" name='Email' autocomplete='true' onSubmit={this.handleSubmit}>
           Email:{Credenzialia.Email}
            </input>
          </div>}
          {Email=><div className="Email">
          <input type="text" name='Email' autocomplete='true' onSubmit={this.handleSubmit}>
            Re_Type Email:{Credenzialia.Email}
            </input>
          </div>}
          {Password=><div className="Password">
          <input type="text" name='Password' autocomplete='true' onSubmit={this.handleSubmit}>
            Password:{Credenzialia.password}
            </input>
          </div>}
          {Password=><div className="Password">
          <input type="text" name='Password' autocomplete='true' onSubmit={this.handleSubmit}>
            Re type Password:{Credenzialia.Password}
            </input>
          </div>}
          {Nomea=><div className="Nomea">
          <input type="text" name='Nome azienda' autocomplete='true' onSubmit={this.handleSubmit}>
            Nome:{Credenzialia.nomea}
            </input>
          </div>}
          {viaa=><div className="viaaz">
          <input type="text" name='viaaz' autocomplete='true' onSubmit={this.handleSubmit}>
            Cognomen:{Credenzialia.viaa}
            </input>
          </div>}
          {nomeviaa=><div className="nomeviaa">
          <input type="text" name='nomeviaa' autocomplete='true' onSubmit={this.handleSubmit}>
            nomeviaa:{Credenzialia.nomeviaa}
            </input>
          </div>}
          {citta=><div className="citta">
          <input type="text" name='citta' autocomplete='true' onSubmit={this.handleSubmit}>
            citta:{Credenzialia.citta}
            </input>
          </div>}
          {provincia=><div className="provincia">
          <input type="text" name='provincia' autocomplete='true' onSubmit={this.handleSubmit}>
            provincia:{Credenzialia.provincia}
            </input>
          </div>}
          {regione=><div className="regione">
          <input type="text" name='regione' autocomplete='true' onSubmit={this.handleSubmit}>
            regione:{Credenzialia.regione}
            </input>
          </div>}
          {nazione=><div className="nazione">
          <input type="text" name='nazione' autocomplete='true' onSubmit={this.handleSubmit}>
            nazione:{Credenzialia.nazione}
            </input>
          </div>}
          {zipcode=><div className="zipcode">
          <input type="int" name='zipcode' autocomplete='true' onSubmit={this.handleSubmit}>
            </input>
          </div>}

          <div className='button'>
          <button submit={this.handleSubmit} onClick={
            ()=>sendEmail({Nomea:'Nomea'},{email:'email'},"thank you for your register in our app")} >
            
          </button>
        </div>
    </form>  
  </div>
  }
 )
  </div> )
  };
}
 
export default SignIna
