import React from 'react'
import {withRouter} from 'react-router-dom';
import AddOrEdit from '../addOrEdit';

import "./listItems.scss"

class List extends React.Component {

    state = {
        active : false,
        new:[],
        search : ""
    }

    nextPath(path) {
        this.props.history.push(path);
      } 
    
    closeModal = () => {
        this.setState({active:false})
    }

    formatDate =(date) => {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
      
        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
      
        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;
      
        return dd + '.' + mm + '.' + yy;
      }

    handleInputChange = (event) => {
    
        const query = event.currentTarget.value;
        this.setState({
          search:query
        })
      }

    render() {
        const {personList} = this.props
        return (
            <div className="container">
                {this.state.active===true? <AddOrEdit saveModal = {this.props.saveModal} itemList={this.state.new} closeModal = {this.closeModal} active = {this.state.active} />:
               
                
                <div className="items">

                <div className="items-head">
                    <p>Announcements</p>
                </div>  
                <div className="items-body">
                <input 
                        onChange = {(event) => this.handleInputChange(event)} 
                        type = "text" 
                        className = "w3-input w3-animate-input w3-margin-right search" 
                        placeholder = "Search by name"  
                    />
                { personList.filter(item => item.name.includes(this.state.search)).map(item =>
                    { 
                    return (
                        <div key={item.id} className="items-body-content w3-display-container">
                            <span onClick={() => {
                                this.props.onAnnSelected(item.id)
                                this.nextPath(`/detail/${item.id}`)
                            }}>
                                {item.name}
                            </span>
                            <span onClick={() =>this.props.onDelete(item.id)} className="w3-button w3-circle w3-display-right">&times;</span>
                            <i className="fa fa-angle-right"></i>
                        </div>
                    )
                    })}
                <button className="w3-btn w3-blue w3-border" onClick ={() => {
                    const newAnn = {
                        name: "",id:Math.random().toString(),createdAt: this.formatDate(new Date()),description:""
                    }
                    this.setState({
                        new:[newAnn]
                    })
                  
                    this.setState({active:true})
                }}>
                    Add new announcement
                </button>
                </div>
            </div>
            }
            </div>
        )
    }
}

export default withRouter(List)