import React, {
    Component
} from 'react';

import {
    Switch,
    Route
  } from "react-router-dom";

import Popup from  './Popup';
import Navigator from './Navigator';
import ProjectList from './ProjectList';
import Footer from './Footer';
import Project from './Project';

export class Body extends Component {
    constructor() {;
        super();

        this.state = {
            weblog: false,
            isSearching: true,
            searchValue: "",
            projectList: [],
            postList: [],
            showList: []
        };

        this.startSearching = this.startSearching.bind(this);
        this.loadList = this.loadList.bind(this);
        this.projectPages = this.projectPages.bind(this);
        this.weblogMode = this.weblogMode.bind(this);
    };

    componentDidMount(){
        this.loadList();
    }

    loadList(){
        let projects, posts;

        fetch('projects/projects.json').then((r) => {
            return r.json();
        }).then((json) => {
            projects = json;
            fetch('weblog/posts.json').then((r) => {
                return r.json();
            }).then((json) => {
                //console.log(json);
                posts = json;
                this.setState({
                    projectList:projects,
                    postList:posts
                }, ()=>{
                    this.startSearching(this.state.searchValue);
                });
            });
    
        });
    }

    projectPages(){
        //console.log('ran showlist');

        return this.state.projectList.map((pr,i) => {
                return <Route key={i} path={"/" + pr.dir}><Project project={pr} weblog={false}></Project></Route>;

        });
    }

    postPages(){
        return this.state.postList.map((pr,i) => {
            return <Route key={i} path={"/weblog/" + pr.dir}><Project project={pr} weblog={true}></Project></Route>;

        });
    }

    weblogMode(value){
        console.log(value);

            this.setState({
                weblog: value
            }, () => {
                this.startSearching(this.state.searchValue);
            });

        console.log(this.state.weblog);

    }

    startSearching(value) {
        //console.log(value);
        let newShow = [];
        if(this.state.weblog){
                this.state.postList.forEach((p)=>{
                    if(p.name.toLowerCase().includes(value.toLowerCase())){
                    
                        newShow.push(p);
                    }else{
                        var tagFound = false;
                        p.tags.forEach((t) => {
                            if(t.toLowerCase().includes(value.toLowerCase()) || value.toLowerCase().includes(t.toLowerCase())){
                                tagFound = true;
                            }
                        });
                        if(tagFound){
                            newShow.push(p);
                        }
                    }
                });
            newShow.sort((a,b)=>{
                if ( a.date > b.date ){
                return -1;
                }
                if ( a.date < b.date ){
                return 1;
                }
                return 0;
            });
        }else{
                this.state.projectList.forEach((p)=>{
                    if(p.name.toLowerCase().includes(value.toLowerCase())){
                    
                        newShow.push(p);
                    }else{
                        var tagFound = false;
                        p.tags.forEach((t) => {
                            if(t.toLowerCase().includes(value.toLowerCase()) || value.toLowerCase().includes(t.toLowerCase())){
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
        }
        this.setState({
            showList:newShow,
            searchValue:value
        });

    };

    render() {
        return ( <div className="main-body">
            {/* <Popup></Popup> */}
            <div id="scripts"></div>
                <Switch>
                    {this.projectPages()}
                    {this.postPages()}
                    <Route key={this.state.projectList.length} path="/about"><Project project={{
                        "name": "About",
                        "dir":"about",
                        "scripts":[]
                    }}></Project></Route>
                    <Route key={this.state.projectList.length+1} path="/contact"><Project project={{
                        "name":"Contact",
                        "dir":"contact",
                        "scripts":[]
                    }}></Project></Route>
                    <Route exact path="/">
                        <Navigator show={this.state.isSearching} onSearch={this.startSearching} onWeblog={this.weblogMode} weblog={this.state.weblog}></Navigator>
                        <ProjectList openPage={this.openPage} weblog={this.state.weblog} showList={this.state.showList}></ProjectList>
                    </Route>
                </Switch>
                <Footer></Footer>
        </div>
        )
    };
};

export default Body;