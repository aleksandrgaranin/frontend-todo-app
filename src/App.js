import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <form if="form">
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input className="form-control" id="title" type="text" name="title" placeholder="Add task"></input>
                </div>
                <div style={{ flex: 1 }}>
                  <input id="submit" className="btn btn-warning" type="submit" name="Add"></input>
                </div>
              </div>
            </form>
          </div>
          <div id="list-wrapper">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
