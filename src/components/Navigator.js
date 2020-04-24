const SEARCHPARAM = "?search=";
const WEBLOGPARAM = "&weblog=";
function checkURLSearch(){
    let lsearch = window.location.search;
    //let query = lsearch.substr(lsearch.indexOf(SEARCHPARAM)+SEARCHPARAM.length,lsearch.indexOf(WEBLOGPARAM));
    if(lsearch){
        let query = lsearch.substring(lsearch.indexOf(SEARCHPARAM)+SEARCHPARAM.length,(lsearch.includes(WEBLOGPARAM) ? lsearch.indexOf(WEBLOGPARAM):lsearch.length-1));
        let weblog = lsearch.substring(lsearch.indexOf(WEBLOGPARAM)+WEBLOGPARAM.length);
        let isWeblog = (weblog.includes("true") ? true:false);
        return {
            search:query,
            weblog:isWeblog
        };
    }else{
        return false;
    }
}

const Navigator = (props) => {
    // onSearch;
        //console.log(props.value)
        const [searchValue, setSearchValue] = React.useState(props.searchValue.length > 0 ? props.searchValue:"");
        const [weblog, setWeblog] = React.useState(props.weblog);
        // const [onSearch,] = React.useState(props.onSearch);
        // const [onWeblog,] = React.useState(props.onWeblog);

        // this.handleSearch = this.handleSearch.bind(this);
        // this.weblogMode = this.weblogMode.bind(this);
        // this.weblogButton = this.weblogButton.bind(this);

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
        props.onSearch(event.target.value);
    }

    const weblogMode = (event) => {
        setWeblog(event.target.checked);
        props.onWeblog(event.target.checked);
    }

    const weblogButton = () => {
        var isWeblog = !weblog;
        weblogMode({
            target: {
                checked:isWeblog
            }
        });
    }

    React.useEffect(() => {
        if(sessionStorage.getItem("searchValue")){
            let newSearch = ' ' + sessionStorage.getItem("searchValue");
            newSearch = newSearch.slice(1);
            // console.log(newSearch);
            handleSearch({
                target:{
                    value:newSearch
                }
            });
        }else{
            handleSearch({
                target:{
                    value:searchValue
                }
            });
        }

        if(typeof sessionStorage.getItem("weblog") !== undefined){
            let newWeblog = (sessionStorage.getItem("weblog") == 'true');
            // console.log("In postMount:", newWeblog);
            document.getElementById('webLogMode').checked = newWeblog;
            weblogMode({
                target:{
                    checked:newWeblog
                }
            });
        }

        // console.log(weblog);
    }, []);


  React.useEffect(() => {
    sessionStorage.setItem("weblog",weblog);
    // console.log("In setWeblog:", weblog);
    handleSearch({
        target:{
            value:searchValue
        }
    });
  }, [weblog]);

  React.useEffect(()=>{
    if(searchValue.length > 0){
        sessionStorage.setItem("searchValue",searchValue);
        handleSearch({
            target:{
                value:searchValue
            }
        });
    }

},[searchValue]);
    
        //if(this.props.weblog){
        return (
            <div className="navigator">
                <img alt="n/a" src='assets/img/searchIcon.png'></img>
                <button onClick={weblogButton}><input type="checkbox" id="webLogMode" name="webLogMode" checked={weblog} onChange={weblogMode}></input>
                <label>Weblog</label></button>
                <input autoComplete="on" placeholder="Search projects by name or tag" type="search" value={searchValue} onChange={handleSearch}></input>
            </div>
            );
}

export default Navigator;
