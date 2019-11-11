import React, {
    Component
} from 'react';

import {
    Switch,
    Route
  } from "react-router-dom";

import Navigator from './Navigator';
import ProjectList from './ProjectList';
import Footer from './Footer';
import Project from './Project';

export class Body extends Component {
    constructor() {;
        super();

        this.state = {
            isSearching: true,
            projectList: [],
            showList: []
        };

        this.startSearching = this.startSearching.bind(this);
        this.loadList = this.loadList.bind(this);
        this.projectPages = this.projectPages.bind(this);
    };

    componentDidMount(){
        this.loadList();

    }

    loadList(){
        fetch('projects/projects.json').then((r) => {
            return r.json();
        }).then((json) => {
            console.log(json);
            this.setState({
                isSearching:this.state.isSearching,
                projectList:json,
                showList:json.sort((a,b)=>{
                    if ( a.name < b.name ){
                      return -1;
                    }
                    if ( a.name > b.name ){
                      return 1;
                    }
                    return 0;
                  })
            });
        });
    }

    projectPages(){
        console.log('ran showlist');

        return this.state.projectList.map((pr,i) => {
            return <Route key={i} path={"/" + pr.dir}><Project project={pr}></Project></Route>;
        });
    }

    startSearching(value) {
        console.log(value);
        let newShow = [];
        this.state.projectList.forEach((p)=>{
            if(p.name.toLowerCase().includes(value.toLowerCase())){
            
                newShow.push(p);
            }else{
                var tagFound = false;
                p.tags.forEach((t) => {
                    if(t.toLowerCase().includes(value.toLowerCase())){
                        tagFound = true;
                    }
                });
                if(tagFound){
                    newShow.push(p);
                }
            }
        });
        newShow.sort((a,b)=>{
            if ( a.name < b.name ){
              return -1;
            }
            if ( a.name > b.name ){
              return 1;
            }
            return 0;
          });
        this.setState({
            isSearching:this.state.isSearching,
            projectList:this.state.projectList,
            showList:newShow
        });
    };

    render() {
        return ( <div className="main-body">
            <div id="scripts"></div>
                <Switch>
                    {this.projectPages()}
                    <Route key={this.state.projectList.length} path="/about"><Project project={{
                        "name": "About",
                        "dir":"about"
                    }}></Project></Route>
                    <Route key={this.state.projectList.length+1} path="/contact"><Project project={{
                        "name":"Contact",
                        "dir":"contact"
                    }}></Project></Route>
                    <Route exact path="/">
                        <Navigator show={this.state.isSearching} onSearch={this.startSearching}></Navigator>
                        <ProjectList openPage={this.openPage} showList={this.state.showList}></ProjectList>
                    </Route>
                </Switch>
                <Footer></Footer>
        </div>
        )
    };
};

export default Body;