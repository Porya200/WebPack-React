import React , { Component } from 'react';
class App extends Component {

    state = {
        task : {
            builder : 'سازنده',
            title : 'پوریا حدادی',
            done : true
        }
    }

    handleClick = () => {
        const task = this.state.task;
        task.done = !task.done;
        this.setState({task});

    }

    render () {
        return (
            <div>
            <div class="d-flex justify-content-center align-items-center">
                <h5 class="ml-2">{this.state.task.builder} :</h5>
                <h3>{this.state.task.title}</h3>
            </div>
            <h1>{this.state.task.done.toString()}</h1>
            <button class="btn btn-success" onClick = {this.handleClick}>
                کلیک کن
            </button>
            </div>
        )
    }

}

export default App;