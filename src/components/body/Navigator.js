import React, {Component} from 'react';

import searchIcon from '../../assets/img/searchIcon.png';

export class Navigator extends Component {
    onSearch;
    constructor(props) {
        super();
        this.state = {
            value:'',
            onSearch : props.onSearch,
            onWeblog : props.onWeblog
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.weblogMode = this.weblogMode.bind(this);
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
    
    render() {
        if(this.props.weblog){
            return (
                <div className="navigator">
                    <img alt="n/a" src={searchIcon}></img>
                    <div><input type="checkbox" id="webLogMode" name="webLogMode" checked onChange={this.weblogMode}></input>
                    <label >Weblog</label></div>
                    <input autoComplete="on" autoFocus placeholder="Search projects by name or tag" type="search" value={this.state.value} onChange={this.handleSearch}></input>
                </div>
            )
        }else{
            return (
                <div className="navigator">
                    <img alt="n/a" src={searchIcon}></img>
                    <div><input type="checkbox" id="webLogMode" name="webLogMode" onChange={this.weblogMode}></input>
                    <label >Weblog</label></div>
                    <input autoComplete="on" autoFocus placeholder="Search projects by name or tag" type="search" value={this.state.value} onChange={this.handleSearch}></input>
                </div>
            )
        }
    }


}

export default Navigator
