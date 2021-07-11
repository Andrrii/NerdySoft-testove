import React from 'react'
import "./addOrEdit.css"

export default class AddOrEdit extends React.Component {

    render() {
        let {active,closeModal,saveModal,itemList} = this.props
        let changed = {}
        if(active === true){
            return (
                <div className="modal">
                    <div className="modal__content" onClick={e => e.stopPropagation()}>
                        {itemList.map(item =>{
                        changed = {...item}
                        return (
                            <div key={item.id}>
                            <div>
                              <label className = "w3-text-blue" htmlFor="name">Name</label>
                              <input 
                                id="name" 
                                className="w3-input w3-animate-input" 
                                type="text" defaultValue={item.name} 
                                onChange = {(e) => {
                                    changed.name = e.currentTarget.value
                                }}
                                required
                              />
                              <br />
                              <label className = "w3-text-blue" htmlFor="description">Description</label>
                              <textarea 
                                cols="80"
                                rows = "10"
                                id="description" 
                                className="w3-input" 
                                defaultValue={item.description} 
                                onChange = {(e) => {
                                    changed.description = e.currentTarget.value
                                }}
                                required
                              />        
                            </div>
                            <br />
                            <div className="w3-bar">
                                <button className = "w3-button w3-red w3-margin-right" onClick={() => closeModal()}>Close</button>
                                <button className = "w3-button w3-teal" onClick={() =>{
                                    changed.id = item.id
                                    if(changed.name.length === 0){
                                        alert("Fill name")
                                    }
                                    else{
                                        saveModal(changed,item.id)
                                        closeModal()
                                    }
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                            </div>
                        )})}
                        
                    </div>
                </div>
            )
        }
        else{return (<></>)}
    }
}