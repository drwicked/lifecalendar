import React, { Component } from 'react';
import moment from 'moment';
import pad from 'pad';
import styled from 'styled-components';

import './App.css';

const Wrap = styled.div`
  background-color: ${props => props.current ? 'green' : 'transparent'};
  border-radius: 6px;
  display: inline;
  width: 16px;
  height: 16px;
  padding: 2px 0 0 2px;
`;

function fillArrayWithNumbers(n) {
  var arr = Array.apply(null, Array(n));
  return arr.map(function (x, i) { return i });
}

class App extends Component {
  render() {
    const expectancy = this.props.location.search.match(/\d+/)[0] || 90;
    const lifeInWeeks = Math.floor(expectancy * 52);
    const lifeArray = fillArrayWithNumbers(lifeInWeeks);
    const params = this.props.location.pathname.split('/');
    const [,y,m,d] = params;
    const padM = pad(2,m,'0');
    const padD = pad(2,d,'0');
    const birth = moment(`${y}-${padM}-${padD}`);
    const weekOfLife = moment().diff(birth, 'weeks');
    return (
      <div className="App">
        { `expectancy: ${expectancy} weeks: ${weekOfLife}/${lifeInWeeks}` }
        <div className="calendar">
          {
            lifeArray.map((week,i) => {
              const isCurrent = week === weekOfLife;
              return (
                <Wrap className={isCurrent && "pulseOpacity"} key={i} current={ isCurrent }>
                  {
                    week % 52 === 0 ? '🎂' :
                    <input
                      title={ weekOfLife }
                      className={isCurrent && "pulseScale"}
                      type="checkbox"
                      readOnly
                      value={week}
                      checked={ week < weekOfLife } />
                  }
                </Wrap>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
