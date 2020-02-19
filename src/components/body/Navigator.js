import React, {Component} from 'react';

import searchIcon from '../../assets/img/searchIcon.png';

export class Navigator extends Component {
    onSearch;
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            weblog:this.props.weblog,
            onSearch : props.onSearch,
            onWeblog : props.onWeblog
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.weblogMode = this.weblogMode.bind(this);
        this.weblogButton = this.weblogButton.bind(this);
    }

    handleSearch(event){
        this.setState({
            value:event.target.value
        });
        this.state.onSearch(event.target.value);
    }

    weblogMode(event){
        this.state.onWeblog(event.target.checked);
    }

    weblogButton(){
        var isWeblog = !this.state.weblog;
        this.weblogMode({
            target: {
                checked:isWeblog
            }
        });

        this.setState({
            weblog:isWeblog
        });
    }
    
    render() {
        //if(this.props.weblog){
            return (
                <div className="navigator">
                    <img alt="n/a" src={searchIcon}></img>
                    <button onClick={this.weblogButton}><input type="checkbox" id="webLogMode" name="webLogMode" checked={this.state.weblog} onChange={this.weblogMode}></input>
                    <label>Weblog</label></button>
                    <input autoComplete="on" placeholder="Search projects by name or tag" type="search" value={this.state.value} onChange={this.handleSearch}></input>
                </div>
            );
        //}else{
            // return (
            //     <div className="navigator">
            //         <img alt="n/a" src={searchIcon}></img>
            //         <button onClick={this.weblogButton}><input type="checkbox" id="webLogMode" name="webLogMode" onChange={this.weblogMode}></input>
            //         <label>Weblog</label></button>
            //         <input autoComplete="on" autoFocus placeholder="Search projects by name or tag" type="search" value={this.state.value} onChange={this.handleSearch}></input>
            //     </div>
            // )
        //}
    }


}

export default Navigator
