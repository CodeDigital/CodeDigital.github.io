//TODO: Convert this to function component!

import Body from '../../components/Body';
import Sharing from "../../components/Sharing";
import parse from 'html-react-parser';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {getWeblogThumbnailData, getWeblog,getScriptHTML} from '../../../lib/pages';
import {getFullURL} from '../../../lib/urls';

const Weblog = (props) => {

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
                <title>{props.weblog.name + " | Code Digital Weblog"}</title>
                <link rel="icon" href="/favicon.ico"/>

                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content={props.weblog.name + " | Code Digital Weblog"}/>
                <meta name="description" content={props.weblog.description}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={getFullURL(router.asPath)}/>
                <meta property="og:title" content={props.weblog.name + " | Code Digital Weblog"}/>
                <meta property="og:description" content={props.weblog.description}/>
                <meta property="og:image" content={getFullURL("/_posts" + router.asPath + '/thumbnail.png')}/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={getFullURL(router.asPath)}/>
                <meta property="twitter:title" content={props.weblog.name + " | Code Digital Weblog"}/>
                <meta property="twitter:description" content={props.weblog.description}/>
                <meta property="twitter:image" content={getFullURL("/_posts" + router.asPath + '/thumbnail.png')}/>
            </Head>
            <div id="projectHTMLContainer">
                {parse(props.weblog.html)}
            </div>
            <Sharing url={getFullURL(router.asPath)} project={props.weblog} disp={share} onClose={onShareClose}></Sharing>

        </div>
        </Body>
    );
}

export async function getStaticProps({params}) {
    const scriptHTML = getScriptHTML();
    // console.log(scriptHTML);
    const weblogDir = params.weblog;
    // console.log(weblogDir);
    const loadedWeblog = getWeblog(weblogDir);

    return {props: {
        scripts:scriptHTML,
        weblog:loadedWeblog
    }};
  }

export async function getStaticPaths() {
    const weblogList = getWeblogThumbnailData();

    let weblogPaths = weblogList.map(p => {
        // console.log("/weblog/" + p.dir);
        return "/weblog/" + p.dir
    });
    // projectPaths.push({params:'about'})
    // projectPaths.push({params:'contact'})
    // console.log(weblogPaths)
    return {paths:
        weblogPaths,
    'fallback':false}
}

export default Weblog;