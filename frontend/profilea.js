import React from 'react'
import Indirizzi from '../signina.js' 
import map from'//maps.js'
import {profilea}from 'App.css'
import {AzUser} from 'menuaz.js'
export default class Profilea {
    constructor(props){
        const AProfile =[
         {  Nomea:this.props.Nomea,
            email:this.props.email,
            password:this.props.password,
            nCivico:this.props.nCivico,
            viaa:this.props.viaa,
            nomeviaa:this.props.nomeviaa,
            Citta :this.props.citta,
            provincia:this.props.provincia,
            nazione:this.props.nazione,
            zipcode:this.props.zipcode}


        ]
    };
    render(){
    return(
        <div>     
        <div className="Profilea">
            <div className="hedaera">
             <menuaz className="srb"></menuaz>
             <menuaz className="slb"></menuaz>
            </div>
            <div className="fielda">
            {
                   this.state.AProfile.map((aprofile,i)=>{
                   <ul>
                   <div >
                   {Nomea=><div>nomea:{i.Nomea}
                              </div>}
                              {nCivico=>
                              <div>
                               nCivico:{i.nCivico}
                               </div>} 
                               {viaa=>
                             <div>
                              viaa:{i.viaa}
                              </div>}
                              {nomeviaa=>
                              <div>
                               nomeviaa:{i.nomeviaa}
                               </div>} 
                               {Citta=>
                             <div>
                              Citta:{i.Citta}
                              </div>}
                              {provincia=>
                              <div>
                              provincia:{i.provincia}
                               </div>}
                                   
                              </div>{Stato=>
                               <div>
                               Stato:{i.stato}
                              </div>}
                              {zipcode=>
                              <div>
                               zipcode:{i.zipcode}
                               </div>}
                       </ul>}
                    )  
                    }
                    </div>
                    <div className="map">
                    <render>
                    <map>
                    </map>
                    </render>                    
                    </div>
         </div>  
          };
    </div>
    };
       
};

