import Link from 'next/link';

const Thumbnail = (props) => {

    if(props.weblog){
        const bg = ('/_posts/weblog/' + props.project.dir + '/thumbnail.png');
        return (
            <Link href="/weblog/[weblog].js" as={"/weblog/" + props.project.dir}>
                <a style={{backgroundImage:'url('+bg+')'}} className='post-thumbnail'>
                <div>
                <h2>{props.project.name}</h2>
                <p>{props.project.date}</p>
                </div>
                <small> Tags: {props.project.tags.join(', ')}</small>
                </a>
            </Link>
        )
    }else{
        const bg = ('/_posts/projects/' + props.project.dir + '/thumbnail.png');
        return (
            <Link href="/[project].js" as={"/" + props.project.dir}>
                                <a style={{backgroundImage:'url('+bg+')'}} className='project-thumbnail'>
                <div>
                <h2>{props.project.name}</h2>
                <p>{props.project.description}</p>
                </div>
                <small> Tags: {props.project.tags.join(', ')}</small>
                </a>
            </Link>
        )
    }
}

export default Thumbnail;
