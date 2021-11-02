import react from "react" 
import ReactDom from "react-dom"
import  DropdownCalendar from '/calendario/ddd.js'
import  {Nome,Cognomen} from '/componenti/Signin.js'
import addfriend from './friendlist.js'
import GoogleMapsClient  from "../backend/connection/geoclient.py"
handleSelect(Nick){

<friendlist>this.props.nick=Nick</friendlist>
};
handleSelect(NomeR){

  <NomeR>this.props.NomeR=NomeR</NomeR>
  };
handleSubmit(email,e){

}
handleSubmit(e){

}
function CardS() {
  return(
        <div className="wrapper">
          <CardUv/>
        </div>)
},
function CardUv(){
  return(
  <div>
      <div>  
      <CardAppS/>
      </div>
      <div className="invia">
      <button onSubmit={this.handleSubmit}>
           send
      </button>    
      </div>    
    </div> )   
}
function CardAppS(){
  return(
    <div>
        <div>
        msg:""caro<button onSelect={(handleSelect)}>{this.i.name}</button> il Giorno" <DropdownCalendar></DropdownCalendar>"il sottoscritto"/n
            <estraigeneralita/> ti invita ad un lauch metting dll 1 alle 2 al <></> "" 
        </div>
        
    </div>
    )

}
function estraigeneralita(Nome,Cognomen){
 return(
    <div>
        <ul>
          this.props.Credenziali.map.Nome((nome,i)=>
          {
              <nome>{i.nome}</nome>
          })  
        </ul>   
    </div> 
 )
 return(
    <div>
        <ul>
          this.props.Credenziali.map.Cognomen((cognomen,i)=>
          {
              <cognomen>{i.cognomen}</cognomen>
          })  
        </ul>   
    </div> 
 )
}
ReactDOM.render(<CardAppS/>, document.getElementById("CardAppR"))
function CardAppR(){
  return(
  <div className="wrapper">
    <div> <CardS/></div>
    <button className='Accetta' name='accetta' onSubmit={thisHandleSubmit}></button>
  
  </div>)
}

ReactDOM.render(<CardAppR/>, document.getElementById("CardAppR"))
