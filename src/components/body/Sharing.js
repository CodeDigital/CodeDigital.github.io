import React, {Component} from 'react';

export default class Sharing extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.onPopupClicked = this.onPopupClicked.bind(this);
    }

    onPopupClicked(){
        this.props.onClose();
    }

    render(){
               
        if(this.props.disp){
        return (
        <div className="popup">
            <button className="popup-button" onClick={this.onPopupClicked}>
                {/* <img className="close-icon" alt="Close" src={closeIcon}></img> */}

            </button>
            <div className="popup-container">
                <div className="popup-div">
                    <h1>Sharing Coming Soon!</h1>
                    <small>Click anywhere outside of this popup to return.</small>
                </div>
            </div>
        </div>)
        }else{
            return <div></div>
        }
    };
}

