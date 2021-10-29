import React, { Component } from "react";
import menu from 'menu.js'
import Page from ' page.html'
import footer from 'footer.html'

class HomePage extends React.Component {
render(){
return(
<div className="home">
  <div className="header">
    <div className="menu">
      <menu>
      </menu> 
    </div> 
  <div className="field">
    <page>
    </page>
  </div>
  <div className="footer" >
    <footer> 
    </footer>
  </div>    
</div> };
)
</div> 
}
}
export default HomePage
