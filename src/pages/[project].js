//TODO: Convert this to function component!

import Body from '../components/Body';
import Sharing from "../components/Sharing";
import parse from 'html-react-parser';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {getProjectThumbnailData, getProject,getScriptHTML} from '../../lib/pages';
import {getFullURL} from '../../lib/urls';

const Project = (props) => {

    const router = useRouter();
    // console.log(router);
    const [share, setShare] = React.useState(false);

    const onShareClick = () => {
        setShare(true);
    }

    const onShareClose = () => {
        setShare(false);
    }

    React.useEffect(() => {
        return () => {
            console.log('Clearing p5 Sketches');
            try{remove();}catch{console.log('P5 Sketch Not Removed');}
            try{unmountScript()}catch{console.log('No Unmount Script');}
            try{endSound();}catch{console.log('No "endsound" Script');}
        }
    }, [])

    return (
        <Body>
        <div className="project-page" id="project-page">
            {parse(props.scripts)}
            <Link href="/">
                <img className="close-icon" alt="Close" src="/assets/img/closeIcon.png"></img>
            </Link>
            <img onClick={onShareClick} src="/assets/img/shareIcon.png" alt="" className="share-icon"/>
            <Head>
                <title>{props.project.name + " | Code Digital"}</title>
                <link rel="icon" href="/favicon.ico"/>

                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content={props.project.name + " | Code Digital"}/>
                <meta name="description" content={props.project.description}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={getFullURL(router.asPath)}/>
                <meta property="og:title" content={props.project.name + " | Code Digital"}/>
                <meta property="og:description" content={props.project.description}/>
                <meta property="og:image" content={getFullURL('/_posts/projects' + router.asPath + '/thumbnail.png')}/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={getFullURL(router.asPath)}/>
                <meta property="twitter:title" content={props.project.name + " | Code Digital"}/>
                <meta property="twitter:description" content={props.project.description}/>
                <meta property="twitter:image" content={getFullURL('/_posts/projects' + router.asPath + '/thumbnail.png')}/>
            </Head>
            <div id="projectHTMLContainer">
                {parse(props.project.html)}
            </div>
            <Sharing project={props.project} disp={share} onClose={onShareClose}></Sharing>

        </div>
        </Body>
    );
}

export async function getStaticProps({params}) {
    const scriptHTML = getScriptHTML();
    
    const projectDir = params.project;
    // console.log(projectDir);
    const loadedProject = getProject(projectDir);

    return {props: {
        scripts:scriptHTML,
        project:loadedProject
    }};
  }

export async function getStaticPaths() {
    const projectList = getProjectThumbnailData();

    let projectPaths = projectList.map(p => {
        return "/" + p.dir
    });
    // projectPaths.push({params:'about'})
    // projectPaths.push({params:'contact'})
    // console.log(projectPaths)
    return {paths:
        projectPaths,
    'fallback':false}
}

export default Project;