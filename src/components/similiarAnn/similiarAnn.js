import React from 'react'
import {withRouter} from 'react-router-dom';

import "./similiarAnn.css"

class SimiliarAnn extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
    } 

    render() {
        const {oneItem,items} = this.props
        const wrapNoSplit = oneItem[0].name
        const wrap = oneItem[0].name.split(" ")
        const itemIndex = items.findIndex(item => item.name === wrapNoSplit)
        const changed =  [
                             ...items.slice(0,itemIndex),
                             ...items.slice(itemIndex+1)
                          ]
        const test = []
        changed.map(item => 
            item.name.split(" ").filter(value => 
                {
                    if(wrap.includes(value)){
                        test.push(item)
                    }
                })
        )
        const unique = test.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
        return (
            <>
            <div className="w3-row">
                {unique.map(item => (
                    <div className="w3-col s4 w3-center" key={item.id}>
                        <div className="w3-card-4 w3-margin-left w3-margin-right w3-margin-bottom w3-margin-top ">
                            <header className="w3-container w3-light-grey">
                                <h3>{item.name.slice(0,30)}...</h3>
                            </header>
                        <div className="w3-container">
                            <p>{item.createdAt}</p>
                            <hr />
                            <p>{item.description.slice(0,80)}...</p><br/>
                        </div>
                        <button className="w3-button w3-block w3-dark-grey" onClick ={() =>  {
                            this.props.onAnnSelected(item.id)
                            this.nextPath(`/detail/${item.id}`)
                        }}>Go</button>
                        </div>
                    </div>
                ))}
            </div>
            </>
        )
    }

}

export default withRouter(SimiliarAnn)