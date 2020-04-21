/*eslint-disable no-eval */
/*eslint-disable */
// TODO: Clean up the commented out code.

import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import {Helmet} from "react-helmet";
import Sharing from "./Sharing";
import closeIcon from '../../assets/img/closeIcon.png';
import shareIcon from '../../assets/img/shareIcon.png';

var htmlContent;

export class Weblog extends Component {

    constructor(props) {
        super(props);
        this.fetchProject = this.fetchProject.bind(this);
        this.addScripts = this.addScripts.bind(this);
        this.onShareClick = this.onShareClick.bind(this);
        this.onShareClose = this.onShareClose.bind(this);


        this.state = {
            'html': '',
            'share':false
        };

        this.fetchProject();
        if(this.props.project.scripts !== undefined){
            this.props.project.scripts.forEach((s) => {
                var newS = document.createElement('script');
                newS.src = "assets/" + s;
                newS.async = false;
            });
        }

    }

    componentDidMount(){
        console.log('mounted');
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
        }
       this.instance.appendChild(newS);
       this.instance.removeChild(newS);


    }

    fetchProject() {
        fetch('weblog/' + this.props.project.dir + '/page.html').then((r) => {
            return (r.text());
        }).then((html) => {
            this.setState({'html': html})
            htmlContent = html;
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
                if(this.props.project.scripts){
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
            }

            console.log(scripts)

            if(scripts){
                scripts.forEach((src, i) => {
                    var script = document.createElement('script');
                    script.src = src;
                    script.async = false;
                    script.defer = true;

                    script.onload = function (s) {
                        console.log(src + ' - Script Loaded');
                        document.getElementById('scripts').removeChild(script);
                    };
                    document.getElementById('scripts').appendChild(script);
                });
            }

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

    onShareClick(){
        this.setState({
            'share':true
        });
    }

    onShareClose(){
        this.setState({
            'share':false
        });
    }

    render() {
        return (
            <div className="project-page" id="project-page">
                <Link to="/">
                    <img className="close-icon" alt="Close" src={closeIcon}></img>
                </Link>
                <img onClick={this.onShareClick} src={shareIcon} alt="" className="share-icon"/>
                <Helmet ref={helm => (this.helm = helm)}>
                    <title>{this.props.project.name + " | Code Digital"}</title>
                </Helmet>

                <div id="projectHTMLContainer" ref={el => (this.instance = el)}>
                    {parse(this.state.html)}
                </div>
                <Sharing disp={this.state.share} onClose={this.onShareClose}></Sharing>

            </div>
        )
    }
}

export default Weblog