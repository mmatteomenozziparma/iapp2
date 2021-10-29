import React from 'react'
import {profile} from 'App.css'
import Credenziali from '../signin.js' 
class Profile extends React.Component{
    constructor(props){
        const Profile =[
            {
            Nome:this.props.Nome,
            Cognomen:this.props.cognomen,
            Foto: this.props.Foto}

        ]
    };
    render()
    {
         return(
        <div className="profile">
        <div className="header">
            <div className="menu">       
            <button name="signout" onClick={this.handleClick} >
              <a href="Home.js">signout</a>
            </button>
            </div>
        </div>
            <div>
            {
                   this.state.profile.map((Profile,i)=>{
                    <ul>
                    <div id="field" className="field" >
                    {Foto=><div className="Foto">
                          Foto:{Profile.Foto}
                          </div>}
                            <div className="info">
                             {Nome=><div>
                              nome:{Profile.Nome}
                              </div>}
                              {Cognomen=><div className="Cognomen">
                               Cognomen:{Profile.Cognomen}
                               </div>}
                       </div>      
                    </div>}
                    )  
                    </ul>}
        </div>
         <div className="footer">
          <br><button className="button" name="invita" onSubmit={this.handleSubmit}>invita</button></br>
          <br><button className="button" name="addfriend"></button></br>  
         </div>
         </div>  
             )
    </div>
    }
}
export default Profile
