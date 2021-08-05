
import React,{ Component } from 'react'
//import axios from 'axios';


class Form extends Component{
  constructor(props){
    super(props)
    this.state = { name:'',location:'', startdate:'', enddate:'',transportation:''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  


  // Form submitting logic, prevent default page refresh 
  handleSubmit(event){
    const { name, location, startdate, enddate, transportation } = this.state
    event.preventDefault()
    const req = {
        'name': name
    }

    alert(`
      ____Your Details____\n
      Name : ${name}
      Location : ${location}
      Startdate : ${startdate}
      Enddate : ${enddate}
      Transportation: ${transportation}
    `)
  }
  
  // Method causes to store all the values of the 
  // input field in react state single method handle 
  // input changes of all the input field using ES6 
  // javascript feature computed property names
  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }

  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='name'>Name Your Trip:</label>
          <input 
            name='name'
            placeholder='name' 
            value = {this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='location'>Where are you going?</label>
          <input
            name='location' 
            placeholder='location'
            value={this.state.location}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='startdate'>Start Date</label>
          <input
            name='startdate' 
            placeholder='mm/dd/yyyy'
            value={this.state.startdate}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='enddate'>End Date</label>
          <input
            name='enddate' 
            placeholder='mm/dd/yyyy'
            value={this.state.enddate}
            onChange={this.handleChange}
          />
        </div>
        <div>
        <label htmlFor='transportation'>Transportation</label>
        <ul>
        <li>
          <label>
            <input
              type="radio"
              name="transportation"
              value="car"
              checked={this.state.transportation === "car"}
              onChange={this.handleChange}
            />
            car
          </label>
        </li>
        
        <li>
          <label>
            <input
              type="radio"
              name="transportation"
              value="plane"
              checked={this.state.transportation === "plane"}
              onChange={this.handleChange}
            />
            plane
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="transportation"
              value="bus"
              checked={this.state.transportation === "bus"}
              onChange={this.handleChange}
            />
            bus
          </label>
        </li>
        </ul>
        </div>
        <div>
          <button>Next</button>
        </div>
      </form>
    )
  }
}
  
export default Form