import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  tick() {
    /* mostly call this on functions and not state fields*/

    this.setState({
      date: new Date()
    });

  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    // interval call tick
    return (
    <div>
      <h1>Hello, worldddd!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  );

  }
}


function tick() {
  root.render(<Clock />);
}

setInterval(tick, 1000);
// root.render(
//   <React.StrictMode>
    
//     // <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
