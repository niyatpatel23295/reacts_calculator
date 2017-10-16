import React, {Component} from 'react';
import * as API from '../api/API';

class HomePage extends Component {

    state = {
        result: '',
        num_1: '',
        num_2: ''
    };

    handleSum = () => {
        API.doSum({num_1: this.state.num_1, num_2: this.state.num_2})
            .then(res => {
                    this.setState({
                        ...this.state,
                        result: res.result
                    });
            });
    };

    handleSub = () => {
        API.doSub({num_1: this.state.num_1, num_2: this.state.num_2})
            .then((res) => {
                     this.setState({
                        ...this.state,
                        result: res.result
                    });
            });
    };

    handleMul = () => {
        API.doMul({num_1: this.state.num_1, num_2: this.state.num_2})
            .then((res) => {
                     this.setState({
                        ...this.state,
                        result: res.result
                    });
            });
    };

    handleDiv = () => {
        API.doDiv({num_1: this.state.num_1, num_2: this.state.num_2})
            .then((res) => {
                     this.setState({
                        ...this.state,
                        result: res.result
                    });
            });
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <h1>Calculator</h1>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Number_1"
                                    placeholder="Number 1"
                                    value={this.state.num_1}
                                    onChange={(event) => {
                                        this.setState({
                                            ...this.state,
                                            num_1: event.target.value
                                        });
                                    }}
                                />

                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Number_2"
                                    placeholder="Number 2"
                                    value={this.state.num_2}
                                    onChange={(event) => {
                                        this.setState({
                                            ...this.state,
                                            num_2: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="btn-group"> 
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() => this.handleSum()}>
                                            +
                                        </button>
                                        
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() => this.handleSub()}>
                                            -
                                        </button>
                                        
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() => this.handleMul()}>
                                            X
                                        </button>
                                        
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={() => this.handleDiv()}>
                                            /
                                        </button>
                            </div>
                             
                            <div className="form-group">

                                result= {this.state.result}
                                        
                            </div>                           
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;