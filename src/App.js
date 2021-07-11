import React from 'react'
import List from './components/listOf-Items/List';
import ItemDetails from './components/itemDetails'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import NerdyService from './services/nerdyService'
import './App.css';
class App extends React.Component  {

  nerdy = new NerdyService()

  state  = {
    onAnnSelected : null,
    personList:[]  
  }

  componentDidMount(){
    this.update()
  }

 
  update = () => {
    this.nerdy.getAllAnnouncements().then(people => {
      this.setState({personList: people})
   })
  }


  onAnnSelected = id => {
    this.setState({
      onAnnSelected:id
    })
  }

  onDelete = id => {
    const itemIndex = this.state.personList.findIndex(item => item.id === id)
    const changed =  [
                         ...this.state.personList.slice(0,itemIndex),
                         ...this.state.personList.slice(itemIndex+1)
                      ]
    this.setState({
      personList: changed
    })
  }

  saveModal = (item,id) => {
    const itemIndex = this.state.personList.findIndex(item => item.id === id)
    const changed =  [
                         ...this.state.personList.slice(0,itemIndex),
                         item,
                         ...this.state.personList.slice(itemIndex+1)
                      ]
    this.setState({
      personList: changed
    })
  }

  addNewAnn = (item,id) => {
    const changed = [
      ...this.state.personList,
      item
    ]
    this.setState({personList:changed})
  }

  render() {
    return (
      <div className="App">
            <Router>
              <Switch>
                  <Route path = '/' exact render = {() => (<List saveModal = {this.addNewAnn} personList = {this.state.personList} onAnnSelected = {this.onAnnSelected} onDelete = {this.onDelete} />)}/>
                  <Route path = '/detail/:id?' exact component = {() => (<ItemDetails saveModal = {this.saveModal} personList = {this.state.personList} onAnnSelected = {this.onAnnSelected} annId = {this.state.onAnnSelected} onDelete = {this.onDelete} />)}/>
              </Switch>
            </Router>
            
      </div>
    );
  }
}

export default App;
