// TODO: find a way to make searchValue and weblog persist!

import Head from 'next/head';
import Body from '../components/Body';
import Navigator from '../components/Navigator';
import SearchList from '../components/SearchList';
import { useRouter } from 'next/router';

import {getProjectThumbnailData, getWeblogThumbnailData} from '../../lib/pages';
import {getFullURL} from '../../lib/urls';

const Index = (props) => {
    
    const router = useRouter();
    // console.log(router);
    //const [isSearching, setIsSearching] = React.useState(true);
    const [weblog, setWeblog] = React.useState(false);    
    // var weblog = false;
    const [searchValue, setSearchValue] = React.useState("");
    const [projectList, setProductList] = React.useState(props.projectList);
    const [postList, setPostList] = React.useState(props.postList);
    const [showList, setShowList] = React.useState([]);
    const [updateCounter, setUpdateCounter] = React.useState(0);

    // const [, updateState] = React.useState();
    // const forceUpdate = React.useCallback(() => {
    //     console.log('Forcing a rerender');
    //     updateState({})
    // }, []);


    const weblogMode = (value) => {
        setWeblog(value);
    }

    const startSearching = (value) => {
        setSearchValue(value);
        let newShow = [];
        if(weblog){
                postList.forEach((p)=>{
                    if(p.name.toLowerCase().includes(value.toLowerCase())){
                    
                        newShow.push(p);
                    }else{
                        var tagFound = false;
                        p.tags.forEach((t) => {
                            if(t.toLowerCase().includes(value.toLowerCase()) || value.toLowerCase().includes(t.toLowerCase())){
                                tagFound = true;
                            }
                        });
                        if(tagFound){
                            newShow.push(p);
                        }
                    }
                });
            newShow.sort((a,b)=>{
                if ( a.date > b.date ){
                return -1;
                }
                if ( a.date < b.date ){
                return 1;
                }
                return 0;
            });
        }else{
            projectList.forEach((p)=>{
                if(p.name.toLowerCase().includes(value.toLowerCase())){
                
                    newShow.push(p);
                }else{
                    var tagFound = false;
                    p.tags.forEach((t) => {
                        if(t.toLowerCase().includes(value.toLowerCase()) || value.toLowerCase().includes(t.toLowerCase())){
                            tagFound = true;
                        }
                    });
                    if(tagFound){
                        newShow.push(p);
                    }
                }
            });
        newShow.sort((a,b)=>{
            if ( a.name < b.name ){
            return -1;
            }
            if ( a.name > b.name ){
            return 1;
            }
            return 0;
        });
        }
        setShowList(newShow);
    }

    return (
    <Body>
        <Head>
        <title>Code Digital</title>
        <link rel="icon" href="/favicon.ico"/>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Code Digital"/>
        <meta name="description" content="The official portfolio website for Xavier Travers (DigitalData). Browse various projects here."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content={getFullURL('')}/>
        <meta property="og:title" content="Code Digital"/>
        <meta property="og:description" content="The official portfolio website for Xavier Travers (DigitalData). Browse various projects here."/>
        <meta property="og:image" content={getFullURL('/assets/img/codeArrowIconNoBackground.png')}/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={getFullURL('')}/>
        <meta property="twitter:title" content="Code Digital"/>
        <meta property="twitter:description" content="The official portfolio website for Xavier Travers (DigitalData). Browse various projects here."/>
        <meta property="twitter:image" content={getFullURL('/assets/img/codeArrowIconNoBackground.png')}/>
        </Head>
        <Navigator onSearch={startSearching} onWeblog={weblogMode} weblog={weblog} searchValue={searchValue}></Navigator>
        <SearchList weblog={weblog} showList={showList}></SearchList>
    </Body>
    );
};

// export async function getInitialProps(){
// }

export async function getStaticProps() {
    // const scriptHTML = getScriptHTML();

  const projectList = getProjectThumbnailData();
  const weblogList = getWeblogThumbnailData();

  return {props: {
    //   'scripts':scriptHTML,
    'projectList':projectList,
    'postList':weblogList
  }};
}


export default Index;