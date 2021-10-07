import Head from 'next/head';
import { useRouter } from 'next/router';

import {getFullURL} from '../../lib/urls';

export default function Custom404() {

    const name404 = "Page not found";
    const desc404 = "Yeah, this is not right. I've triple checked... This link... I don't have it here.";
    const img404 = getFullURL('/assets/img/codeArrowIconNoBackground.png');
    const router = useRouter();

    return <div className="page-404">

        <Head>
        <title>{name404 + " | Code Digital"}</title>
                <link rel="icon" href="/favicon.ico"/>

                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content={name404 + " | Code Digital"}/>
                <meta name="description" content={desc404}/>

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={getFullURL(router.asPath)}/>
                <meta property="og:title" content={name404 + " | Code Digital"}/>
                <meta property="og:description" content={desc404}/>
                <meta property="og:image" content={img404}/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={getFullURL(router.asPath)}/>
                <meta property="twitter:title" content={name404 + " | Code Digital"}/>
                <meta property="twitter:description" content={desc404}/>
                <meta property="twitter:image" content={img404}/>  
        </Head>

{/* public\assets\img\codeArrowIconNoBackground.png */}

        <h1>404 - Sorry, I haven't made this link yet.</h1>
        
        <a href="/">
            <img alt="N/A" src="/assets/img/codeArrowOnlyIcon.png"></img>
            <h2>Return to Safety</h2>
        </a>
    </div>
  }