import React from 'react'
import {withRouter} from 'react-router-dom';
import AddOrEdit from '../addOrEdit'
import SimiliarAnn from '../similiarAnn/similiarAnn';
import "./itemDetails.css"


class ItemDetails extends React.Component {
    
    state = {active:false}

    nextPath(path) {
        this.props.history.push(path);
      } 

    closeModal = () => {
        this.setState({active:false})
    }
    render() {
        const {personList,annId} = this.props
        const annDetails = [personList.find(item => item.id === annId)]
        if(annDetails === undefined || annDetails.length === 0 || annDetails === null || annDetails[0] === undefined){
            this.nextPath(`/`)
            return (
                <h1>Go to List Page</h1>
                )
        }
        return (
            <>
                <div className="w3-container">
                <AddOrEdit saveModal = {this.props.saveModal} itemList={annDetails} closeModal = {this.closeModal} active = {this.state.active} />
                    {  
                        annDetails.map(item => {
                        return (
                        <div key={item.id} className="w3-card " width = {'60%'}>
                            <header className="w3-container w3-light-grey">
                            <h3>{item.name}</h3>
                            </header>
                            <div className="w3-container bg">
                                <p>{item.createdAt}</p>
                                <hr />
                                <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="Avatar" className="w3-left w3-circle w3-margin-right w3-margin-bottom" width = {"150px"} />
                                {item.description.split("\n").map(item => (
                                    <p className = "paragraph" key = {Math.random()}>{item}</p>
                                ))}<br />
                            </div>
                            <div className="w3-row">
                                <div className="w3-col s6 w3-center">
                                    <div className="w3-col s5 w3-center">
                                        <button 
                                            className="w3-button w3-block w3-border w3-hover-amber"
                                            onClick={() => this.setState({active:true})}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                    <div className="w3-col s5 w3-center">
                                        <button className="w3-button w3-block w3-border w3-hover-red" 
                                            onClick={() => {
                                                this.props.onDelete(item.id)
                                                this.nextPath(`/`)
                                            }}
                                        >
                                                Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                    )
                    }     
                </div>
                <SimiliarAnn onAnnSelected = {this.props.onAnnSelected}  oneItem={annDetails} items={personList} />
            </>
        )
    }
}


export default withRouter(ItemDetails)