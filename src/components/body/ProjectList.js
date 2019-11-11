import React from 'react'
import Thumbnail from './Thumbnail';


const ProjectList = (props) => {

    const showList = props.showList;

    const toShow = showList.map((t,i) => {
        return <Thumbnail key={i} project={t}></Thumbnail>
    });

    return (
        <div className="project-list">
           {toShow}
        </div>
    )
}

export default ProjectList

