import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      activeItem: {
        id: null,
        title: '',
        completed: false
      },
      editing: false
    }
    this.fetchTasks = this.fetchTasks.bind(this)
  }

  componentWillMount() {
    this.fetchTasks()

  }

  fetchTasks() {
    console.log("Fetching ...")
    fetch('http://127.0.0.1:8000/api/task-list/')
      .then(res => res.json())
      .then(data => console.log(data))
  }

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
