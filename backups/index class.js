// TODO: find a way to make searchValue and weblog persist!

import Head from 'next/head';
import Body from '../components/Body';
import Navigator from '../components/Navigator';
import SearchList from '../components/SearchList';

import {getProjectThumbnailData, getWeblogThumbnailData} from '../../lib/pages';

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weblog:false,
            searchValue:'',
            projectList:props.projectList,
            portList:props.postList,
            showList:[]
        }

        this.weblogMode = this.weblogMode.bind(this);
        this.startSearching = this.startSearching.bind(this);
    }

    async getStaticProps() {
        // const scriptHTML = getScriptHTML();
    
      const projectList = getProjectThumbnailData();
      const weblogList = getWeblogThumbnailData();
        
      return {props: {
        //   'scripts':scriptHTML,
        'projectList':projectList,
        'postList':weblogList
      }};
    }

    weblogMode(value){
        setWeblog(value);
    }

    startSearching(value){
        let searchVal = value;
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

        this.setState({
            searchValue:searchVal,
            showList:newShow
        });
    }

    render(){
      return (
        <Body>
            {/* {parse(props.scripts)} */}
          <Head>
            <title>Code Digital</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navigator onSearch={this.startSearching} onWeblog={this.weblogMode} weblog={this.state.weblog} searchValue={this.state.searchValue}></Navigator>
          <SearchList weblog={this.state.weblog} showList={this.state.showList}></SearchList>
        </Body>
      );
    }
};

