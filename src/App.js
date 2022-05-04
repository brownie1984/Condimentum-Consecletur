import React, { Component } from 'react'
import car from './img/car.png';
import './App.css';

import { data } from './data.json';

class App extends Component {
  constructor(){
	super();
	this.state = {
		main_title: "Condimentum Consecletur",
		data
	}
  }
  
  render(){
	const cards = this.state.data.map((dat,i) => {
		
	  //Onsale
      const renderOnsale = () => {
        if (dat.onsale) {
          return <div className="on-sale">on sale</div>;
        }
      }
	
	  return (
	    <div className="col">
		  <div className="col-md-12 card">
		    <div className="row on-sale-stock">
			  <div className="col-7">
			    { renderOnsale() }
				<div className="in-stock">In Stock</div>
			  </div>
			  <div className="col-5">
			    <input type="number" className="form-control" value="1" />
			  </div>
			</div>
			<div className="row item-image">
			  <div className="col-12">
			    <img src={dat.image} alt={dat.title} className="img-thumbnail" />
			  </div>
			</div>
			<div className="row title-area">
			  <div className="col-7">
			    {dat.title}
			  </div>
			  <div className="col-5">
			    <img src={dat.logo} alt={dat.logo} className="img-thumbnail img-logo" />
			  </div>
			</div>
			<div className="row price-area">
			  <div className="col-12">
			    <span className="price">{dat.price}</span> <span className="offer">{dat.offer}</span>
			  </div>
			</div>
			<div className="row content-area">
			  <div className="col-12">
			    {dat.content}
			  </div>
			</div>
			<div className="row button-area">
			  <div className="col-12">
			    <button type="button" className="btn btn-primary btn-lg details">details</button>
				<button type="button" className="btn btn-primary btn-lg add">add <img src={car} alt="car" /></button>
			  </div>
			</div>
		  </div>
		</div>
	  )
	})
	
    return (
      <div className="App">
        <div className="App-container">
		  <div className="container">
		    <div className="row">
	          <h2>{this.state.main_title}</h2>
		    </div>
		  </div>
	      <div className="container App-container-card">
		    <div className="row">
			{ cards }
		    </div>
		  </div>
	    </div>
      </div>
    );
  }
}

export default App;
