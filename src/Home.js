import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Slider from 'rc-slider/lib/Slider';

import 'rc-slider/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().subtract(30, 'years'),
      lifeExpectancy: 90
    }
    //this.handleChange = this.handleChange.bind(this);
  }
  go = () => {
    const { startDate, lifeExpectancy } = this.state;
    const date = startDate.format('/YYYY/MM/DD');
    const uri = `${date}?=${lifeExpectancy}`
    window.location = uri;
  }
  render(){
    return (
      <div>
        <h1>Life Calendar</h1>
        <DatePicker
          selected={this.state.startDate}
          onChange={startDate => this.setState({ startDate })}
        />
        <Slider
          max={100}
          onChange={lifeExpectancy => this.setState({lifeExpectancy})}
          defaultValue={this.state.lifeExpectancy}
        />
        <button onClick={ this.go }>Tempus Fugit</button>
      </div>
    )
  }
};

export default Main;
