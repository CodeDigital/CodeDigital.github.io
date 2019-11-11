import React, {Component} from 'react';

import searchIcon from '../../assets/img/searchIcon.png';

export class Navigator extends Component {
    onSearch;
    constructor(props) {
        super();
        this.state = {
            value:'',
            onSearch : props.onSearch
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event){
        this.setState({
            value:event.target.value
        });
        this.state.onSearch(event.target.value);
    }
    
    render() {
        return (
            <div className="navigator">
            <img alt="n/a" src={searchIcon}></img>
            <input autoComplete="on" autoFocus placeholder="Search projects by name or tag" type="search" value={this.state.value} onChange={this.handleSearch}></input>
        </div>
        )
    }


}

export default Navigator
