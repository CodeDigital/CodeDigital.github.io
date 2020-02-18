import React from 'react'
import Thumbnail from './Thumbnail';


const ProjectList = (props) => {

    const showList = props.showList;
    const isWeblog = props.weblog;

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
           {toShow}
        </div>
    )
}

export default ProjectList

