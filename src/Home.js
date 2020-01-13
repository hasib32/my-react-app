import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'hasib32@gmail.com',
            firstName: ''
        }
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState({email: 'new@email.com'})
    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({firstName : event.target.value})
    }
    render() {
        const {name} = this.props
        return (
            <div>
                <h1>New Home page</h1>
                <h2>Hello, {name}</h2>
                <h2>My Name is: {this.state.firstName}</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <br/>
                <a href="#" onClick={this.handleClick}>
                    Update Name
                </a>
            </div>
        )
    }
}
export default Home