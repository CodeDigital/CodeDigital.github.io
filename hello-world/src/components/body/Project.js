/*eslint-disable no-eval */
/*eslint-disable */

import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import closeIcon from '../../assets/img/closeIcon.png';

var projectProps;

export class Project extends Component {

    constructor(props) {
        super(props);
        this.fetchProject = this.fetchProject.bind(this);
        this.addScripts = this.addScripts.bind(this);
        projectProps = props;

        this.state = {
            'html': ''
        };

        this.fetchProject();
        if(this.props.project.scripts !== undefined){
            this.props.project.scripts.forEach((s) => {
                var newS = document.createElement('script');
                newS.src = "assets/" + s;
                newS.async = false;
                //document.getElementById('scripts').appendChild(newS)
            });
        }
    }

    componentDidMount(){
        //this.addScripts();

    }

    componentWillUnmount() {
        console.log('Clearing p5 Sketches');
        var newS = document.createElement('script');
        newS.type = 'text/javascript';
        newS.async = false;
        newS.innerHTML = "try{remove();}catch{console.log('no p5');}"
        + "try{unmountScript()}catch{console.log('no Unmount Script');}"
        + "endSound();";
        this.instance.appendChild(newS);
        this.instance.innerHTML = '';
        document.getElementById('scripts').innerHTML = '';
    }

    fetchProject() {
        fetch('projects/' + this.props.project.dir + '/page.html').then((r) => {
            return (r.text());
        }).then((html) => {
            this.setState({'html': html});
        });
    }

    addScripts(){
        if(this.props.project.scripts !== undefined){
            this.props.project.scripts.forEach((s) => {
                var newS = document.createElement('script');
                //newS.async = true;
                newS.src = "assets/" + s;
                console.log('loading sc')
                document.getElementById('scripts').appendChild(newS)
                
            });
        }
    }

    render() {
        return (
            <div className="project-page" id="project-page">
                <Link to="/">
                    <img className="close-icon" alt="Close" src={closeIcon}></img>
                </Link>
                <div ref={el => (this.instance = el)} onLoad={el => this.addScripts(el)}>
                    {parse(this.state.html, {
                        replace: function (domNode) {
                            //console.log(domNode);
                            if (domNode.type === 'script') {
                                var script = document.createElement('script');
                                script.src = domNode.attribs.src;
                                script.async = false;
                                script.onload = function (s) {
                                    console.log('Script Loaded');
                                    var node = domNode;
                                    loadNew(node);
                                };

                                fetch(domNode.attribs.src).then((r) => {
                                    return r.text();
                                }).then((js) => {
                                    //console.log(js);
                                    window.eval(js);
                                    //Function(js);
                                    loadNew(domNode);
                                });

                                //document.getElementById('scripts').appendChild(script);
                            }

                            const loadNew = (node) => {

                                if(projectProps.project.scripts !== undefined){
                                    projectProps.project.scripts.forEach((s) => {
                                        var newS = document.createElement('script');
                                        newS.async = false;
                                        newS.src = "assets/" + s;
                                        //document.getElementById('scripts').appendChild(newS)
                                    });
                                }

                                if(node.next && node.next.type === 'script'){

                                }else{
                                    if(node.next){
                                        loadNew(node.next);
                                    }else{
                                        if(projectProps.project.scripts !== undefined){
                                            projectProps.project.scripts.forEach((s) => {
                                                var newS = document.createElement('script');
                                                newS.async = false;
                                                newS.src = "assets/" + s;
                                                console.log('source: ' + s)
                                                document.getElementById('scripts').appendChild(newS)
                                                fetch("assets/" + s).then((r) => {
                                                    return r.text();
                                                }).then((js) => {
                                                    //console.log(js);
                                                    //window.eval(js);
                                                    //loadNew(domNode);
                                                });
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Project
