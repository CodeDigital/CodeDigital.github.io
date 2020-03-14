import React from 'react'
import Thumbnail from './Thumbnail';
import {Helmet} from "react-helmet";


const ProjectList = (props) => {

    const showList = props.showList;
    const isWeblog = props.weblog;
    var helm;
    const toShow = showList.map((t,i) => {
        if(t.disabled){
            return null;
        }else{
            if(isWeblog){
                return <Thumbnail key={i} weblog={true} project={t}></Thumbnail>   
            }else{
                return <Thumbnail key={i} weblog={false} project={t}></Thumbnail>
            }
        }
    });

    return (
        <div className="project-list">
                <Helmet ref={helm => (helm = helm)}>
                    <title>Code Digital</title>
                    <meta name="title" content="Code Digital"/>
                    <meta charset="UTF-8"/>
                    <meta name="description" content="A portfolio website made by/for Xavier Travers (DigitalData)."/> 
                    <meta name="keywords" content="HTML,CSS,React,Node,Code,P5js,jquery,JavaScript"/> 
                    <meta name="author" content="Xavier Travers"/> 
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 

{/* OG/Facebook */}
                    <meta property="og:type" content="website"/> 
                    <meta property="og:url" content="https://codedigital.github.io/"/> 
                    <meta property="og:title" content="Code Digital"/> 
                    <meta property="og:description" content="A portfolio website made by/for Xavier Travers (DigitalData)."/> 
                    <meta property="og:image" content="https://github.com/CodeDigital/CodeDigital.github.io/blob/master/assets/img/codeArrowIconNoBackground.png"/> 

{/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image"/> 
                    <meta property="twitter:url" content="https://codedigital.github.io/"/> 
                    <meta property="twitter:title" content="Code Digital"/> 
                    <meta property="twitter:description" content="A portfolio website made by/for Xavier Travers (DigitalData)."/> 
                    <meta property="twitter:image" content="https://github.com/CodeDigital/CodeDigital.github.io/blob/master/assets/img/codeArrowIconNoBackground.png"/>            
                </Helmet>

           {toShow}
        </div>
    )
}

export default ProjectList

