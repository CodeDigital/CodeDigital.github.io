/*eslint-disable no-eval */
/*eslint-disable */

import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import {Helmet} from "react-helmet";
import closeIcon from '../../assets/img/closeIcon.png';

var htmlContent;

export class Project extends Component {

    constructor(props) {
        super(props);
        this.fetchProject = this.fetchProject.bind(this);
        this.addScripts = this.addScripts.bind(this);

        this.state = {
            'html': ''
        };

        this.fetchProject();
        //this.addScripts();
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
        console.log('mounted');
        //this.addScripts();
    }

    componentWillUnmount() {

        console.log('Clearing p5 Sketches');
        var newS = document.createElement('script');
        newS.type = 'text/javascript';
        newS.async = false;
        newS.defer = true;
        newS.innerHTML = "try{remove();}catch{console.log('P5 Sketch not removed');}"
        +"try{unmountScript()}catch{console.log('no Unmount Script');}"
        + "endSound();";
        newS.onload = function() {
            document.getElementById('projectHTMLContainer').innerHTML = '';
            //document.getElementById('scripts').innerHTML = '';
        }
       this.instance.appendChild(newS);
       this.instance.removeChild(newS);


    }

    fetchProject() {
        fetch('projects/' + this.props.project.dir + '/page.html').then((r) => {
            return (r.text());
        }).then((html) => {
            this.setState({'html': html})
            htmlContent = html;
            //console.log(htmlContent);
            this.addScripts();
        
        });
    }

    addScripts(){
        var html = htmlContent;
        if(html != undefined){
        var scripts = [];
            while(html.includes('<script')){
                console.log(html);
                var index = html.indexOf('<script');
                while(index < html.length){
                    //console.log(html.substring(index,index+3));
                    if(html.substring(index,index+5).includes('src="')){
                        console.log('found it!');
                        index += 5;
                        let n = 1;
                        while (n<html.length) {
                            if(html.substring(index,index+n).includes('"')){
                                n--;
                                break;
                            }
                            n++;
                        }
                        console.log(html.substring(index,index+n));
                        if(!scripts.includes(html.substring(index,index+n))){
                            scripts.push(html.substring(index,index+n));
                        }
                        html = html.replace(html.substring(html.indexOf("<script"),html.indexOf("</script>")),"");
                        break;
                    }
                    index ++;
                }
            }

            this.props.project.scripts.forEach(src => {
                var script = document.createElement('script');
                script.src = "assets/" + src;
                script.async = false;
                script.defer = true;

                script.onload = function (s) {
                    console.log(src + ' - Script Loaded');
                                    document.getElementById('scripts').removeChild(script);
                };
    
                document.getElementById('scripts').appendChild(script);

            });

            console.log(scripts)

            scripts.forEach((src, i) => {
                var script = document.createElement('script');
                script.src = src;
                script.async = false;
                script.defer = true;

                script.onload = function (s) {
                    console.log(src + ' - Script Loaded');
                    document.getElementById('scripts').removeChild(script);
                    //var node = domNode;
                    //loadNew(node);
                };

    
                document.getElementById('scripts').appendChild(script);

            });

            this.props.project.scripts.forEach(src => {
                var script = document.createElement('script');
                script.name = src;
                script.src = "assets/" + src;
                script.async = false;
                script.defer = true;
                script.onload = function (s) {
                    console.log(src + ' - Script Loaded');
                    document.getElementById('scripts').removeChild(script);
                };
    
                document.getElementById('scripts').appendChild(script);

            });

        }
    }

    // checkScript(domNode){
    //     if (domNode.type === 'script') {
    //         if(!this.state.scripts.includes(domNode.attribs.src)){
    //             var scArr = this.state.scripts;
    //             scArr.push(domNode.attribs.src)
    //             setState({
    //                 "html":state.html,
    //                 "scripts":scArr
    //             });
    //         }
    //     }
    // }

    render() {
        return (
            <div className="project-page" id="project-page">
                <Link to="/">
                    <img className="close-icon" alt="Close" src={closeIcon}></img>
                </Link>
                <Helmet ref={helm => (this.helm = helm)}>
                    <title>{this.props.project.name + " | Code Digital"}</title>
                    {/* {this.props.project.scripts.map((s, i) => {
                        return <script key={i} src={"assets/" + s} type="text/javascript" />
                    })} */}

                </Helmet>
                {/* <div ref={el => (this.instance = el)} onLoad={el => this.addScripts(el)}> */}
                <div id="projectHTMLContainer" ref={el => (this.instance = el)}>
                    {parse(this.state.html, {
                        // replace: function(domNode){checkScript(domNode)}
                        replace: function (domNode) {
                            //console.log(domNode);
                            if (domNode.type === 'script') {
                                //useScript(domNode.attribs.src);
                                // if(!scripts.includes(domNode.attribs.src)){
                                //     scripts.push(domNode.attribs.src);
                                // }
                                // var script = document.createElement('script');
                                // script.src = domNode.attribs.src;
                                // script.async = true;
                                // script.onload = function (s) {
                                //     console.log('Script Loaded');
                                //     //var node = domNode;
                                //     //loadNew(node);
                                // };

                                //document.getElementById('scripts').appendChild(script);

                                fetch(domNode.attribs.src).then((r) => {
                                    return r.text();
                                }).then((js) => {
                                    //console.log(js);
                                    //window.eval(js);
                                    //Function(js);
                                    //loadNew(domNode);
                                });

                                //this.helm.appendChild(script);
                            }

                            // const loadNew = (node) => {

                            //     if(projectProps.project.scripts !== undefined){
                            //         projectProps.project.scripts.forEach((s) => {
                            //             var newS = document.createElement('script');
                            //             newS.async = false;
                            //             newS.src = "assets/" + s;
                            //             //document.getElementById('scripts').appendChild(newS)
                            //         });
                            //     }

                            //     if(node.next && node.next.type === 'script'){

                            //     }else{
                            //         if(node.next){
                            //             loadNew(node.next);
                            //         }else{
                            //             if(projectProps.project.scripts !== undefined){
                            //                 projectProps.project.scripts.forEach((s) => {
                            //                     var newS = document.createElement('script');
                            //                     newS.async = false;
                            //                     newS.src = "assets/" + s;
                            //                     console.log('source: ' + s)
                            //                     document.getElementById('scripts').appendChild(newS)
                            //                     fetch("assets/" + s).then((r) => {
                            //                         return r.text();
                            //                     }).then((js) => {
                            //                         //console.log(js);
                            //                         //window.eval(js);
                            //                         //loadNew(domNode);
                            //                     });
                            //                 });
                            //             }
                            //         }
                            //     }
                            // }
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Project