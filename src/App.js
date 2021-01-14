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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentWillMount() {
    this.fetchTasks()

  }

  fetchTasks() {
    console.log("Fetching ...")
    fetch('http://127.0.0.1:8000/api/task-list/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          todoList: data
        })
        console.log(data)
      })
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    console.log(name, value)

    this.setState({
      activeItem: {
        ...this.state.activeItem,
        title: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Item:", this.state.activeItem)
    const url = 'http://127.0.0.1:8000/api/task-create/'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.state.activeItem)
    }).then(res => {
      this.fetchTasks()
      this.setState({
        activeItem: {
          id: null,
          title: '',
          completed: false
        }
      })
    }).catch(err => console.log('ERROR:', err))
  }

  render() {
    const tasks = this.state.todoList

    return (
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <form if="form" onSubmit={this.handleSubmit}>
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input onChange={this.handleChange} className="form-control" id="title" type="text" name="title" placeholder="Add task"></input>
                </div>
                <div style={{ flex: 1 }}>
                  <input id="submit" className="btn btn-warning" type="submit" name="Add"></input>
                </div>
              </div>
            </form>
          </div>
          <div id="list-wrapper">
            {
              tasks.map((task, index) => {
                return (
                  <div key={index} className="task-wrapper flex-wrapper">
                    <div style={{ flex: 7 }}>
                      <span>{task.title}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <button className="btn btn-sm btn-outline-info">Edit</button>
                    </div>
                    <div style={{ flex: 1 }}>
                      <button className="btn btn-sm btn-outline-danger delete">Delete</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
