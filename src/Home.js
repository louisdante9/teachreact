import React, { Component} from 'react';
import Nav from './Nav';
import Button from './Button';
import Section from './Section';
import data from './data.json'

class Home extends Component{
    state = {
        data: data,
        color: "lightpink"
    }
    changeColor = (e) => {
        e.preventDefault();
        this.setState({
            color: 'white'
        })
        console.log('hello there')
    }
    render() {
        console.log('hello')
        return (
            <div style={{background: this.state.color}}>
                <Nav />
                <h1>Welcome to Home page!</h1>
                {/* <div className="btn">send</div> */}
                <Button name={'send'} />
                <Section students={this.state.data} />
                <Button name={'change'} onClick={this.changeColor}/>
            </div>
        )
    }
}

export default Home;