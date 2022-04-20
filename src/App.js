import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import UseRoutes from './hooks/useRoutes';
import './css/style.css'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      route: ""
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(route){
    this.setState({route})
  }

  render(){
    const {route} = this.state
    return(
      <div className='App'>
        <NavBar onChange={this.onChange}/>
        <div>
          { <UseRoutes route={route} handleRoute={this.onChange}/> }
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    )
  }
}