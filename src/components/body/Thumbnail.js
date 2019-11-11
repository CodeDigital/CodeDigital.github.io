import React from 'react';
import {Link} from 'react-router-dom';

const Thumbnail = (props) => {

    //let bg = "projects/" + props.project.dir + "/thumbnail.png";
    //console.log(bg);


    const bg = ('/projects/' + props.project.dir + '/thumbnail.png');

    return (
        <Link to={"/" + props.project.dir} style={{backgroundImage:'url('+bg+')'}} className='project-thumbnail'>
            <div>
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            </div>
            <small> Tags: {props.project.tags.join(', ')}</small>

        </Link>
    )
}

export default Thumbnail;
