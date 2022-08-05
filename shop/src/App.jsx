import React, { PureComponent } from 'react';
import { Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import style from'./App.module.css';

export default class App extends PureComponent {

  constructor (props){
    super(props);

    this.navActive = this.navActive.bind(this);

  }

  navActive = ({isActive})=>({color:isActive?'#1D2026':'#69707D'});

  render() {

    return (
      <div className={style.App}>
        <Routes>
          <Route path="/" element={ <Layout isActive = {this.navActive} /> }>
            <Route index element={ <Homepage images ={this.props.images} /> } />
            <Route path="/Collections" element={ <Homepage images ={this.props.images} /> } />
            <Route path="/Men" element={ <Homepage images ={this.props.images}  />} />
            <Route path="/Women" element={ <Homepage images ={this.props.images}  />} />
            <Route path="/About" element={ <Homepage images ={this.props.images}  />} />
            <Route path="/Contact" element={ <Homepage images ={this.props.images}  />} />
          </Route>
        </Routes>
      </div>
    )
  }
}


