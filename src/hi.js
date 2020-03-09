import React, {Component} from 'react'
import './App.css'
const Count = ({count,addOne,minusOne,message}) => {
  return(
    <div>
      <h1>{count}</h1>
      <button onClick = {addOne}>Add One</button>
      <button onClick = {minusOne}>Minus One</button>
    </div>
  )
}
const FeedBack = ({feedback}) => <p>{feedback}</p>
class App extends Component  {
  constructor(props) {
    super(props)
    //Will be called first
    console.log('I am from constructor')
    this.state  = {
      countries : [],
      names : ['Mangalam', 'Sanjay', 'Sharanya','Shwetha','Unknown'],
      currName : '',
      index : 0,
      count : 0,
      message: ''
    }
  }
  //Component did mount to fetch data
  componentDidMount() {
    let index = Math.floor(Math.random() * this.state.names.length)
    let currName = this.state.names[index]
    this.setState({currName})
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url).then(response => response.json()).then(data => {
      this.setState({countries : data,
                     count : 0})
      //console.log(data)
    })
    console.log('I am from component did mount')
  }
componentDidUpdate(prevProps,prevState) {
  console.log('I am from component did update')
  console.log('Previous props',prevProps,'Previous state',prevState)
}
shouldComponentUpdate(nextProps,nextState) {
  if(nextState.currName === 'Unknown') {
     return false
  }
  console.log('I am from should component did update')
  console.log('Next props',nextProps,'Next state',nextState)
  if(nextState.count <= 10) {
    return true
  }
  return false
}
 addOne = () => {
   this.setState({count : this.state.count+1})
 }
 minusOne = () =>{
  this.setState({count : this.state.count-1})
 }
  render () {
    console.log('I am from render ')
    return (
      <div className = 'App'>
        <h1>React Life Cycle</h1>
        <h2>Countries: {this.state.countries.length}</h2>
        <Count
        count = {this.state.count}
        addOne = {this.addOne}
        minusOne = {this.minusOne}
        />
        
        {
         ( this.state.count >= 9 && this.state.count!==10 )  ? <FeedBack feedback = "Your trial is about to finish"/> : ''
          
        }
                {
          this.state.count === 10  ? <FeedBack feedback = 'Your trial is finished'/> : ''
          
        }
        <h4>{this.state.currName}</h4>
      </div>
    )
  }
  
}
export default App