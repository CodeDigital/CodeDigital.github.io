import React, {Component} from 'react';

import searchIcon from '../../assets/img/searchIcon.png';

const SEARCHPARAM = "?search=";
const WEBLOGPARAM = "&weblog=";
function checkURLSearch(){
    let lsearch = window.location.search;
    //let query = lsearch.substr(lsearch.indexOf(SEARCHPARAM)+SEARCHPARAM.length,lsearch.indexOf(WEBLOGPARAM));
    if(lsearch){
        let query = lsearch.substring(lsearch.indexOf(SEARCHPARAM)+SEARCHPARAM.length,(lsearch.includes(WEBLOGPARAM) ? lsearch.indexOf(WEBLOGPARAM):lsearch.length-1));
        let weblog = lsearch.substring(lsearch.indexOf(WEBLOGPARAM)+WEBLOGPARAM.length);
        let isWeblog = (weblog.includes("true") ? true:false);
        return {
            search:query,
            weblog:isWeblog
        };
    }else{
        return false;
    }
}

export class Navigator extends Component {
    onSearch;
    constructor(props) {
        super(props);
        this.state = {
            value:(props.searchValue.length > 0 ? props.searchValue:""),
            weblog: props.weblog,
            onSearch : props.onSearch,
            onWeblog : props.onWeblog
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.weblogMode = this.weblogMode.bind(this);
        this.weblogButton = this.weblogButton.bind(this);
    }

    // componentDidMount(){
    //     var urlSearch = checkURLSearch();

    //     if(urlSearch != false){
    //         if(urlSearch.search.length > 0){
    //             this.handleSearch({
    //                 target:{
    //                     value:urlSearch.search}
    //             });
    //         }
    //         if(urlSearch.weblog){
    //             this.weblogMode({
    //                 target: {
    //                     checked:urlSearch.weblog
    //                 }
    //             });
        
    //             this.setState({
    //                 weblog:urlSearch.weblog
    //             });
    //         }
    //     }
    // }

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
