// Importing sharing buttons from react
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookShareCount,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LineShareButton,
    LineIcon,
    LinkedinShareButton,
    LinkedinIcon,
    PinterestShareButton,
    PinterestShareCount,
    PinterestIcon,
    RedditShareButton,
    RedditShareCount,
    RedditIcon,
    TumblrShareButton,
    TumblrShareCount,
    TumblrIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";


export default class Sharing extends React.Component {
    constructor(props){
        super(props);
        this.onPopupClicked = this.onPopupClicked.bind(this);
        this.copyLinkToClipboard = this.copyLinkToClipboard.bind(this);
    }

    onPopupClicked(){
        this.props.onClose();
    }

    selectAllLink(){
        let copyText = document.getElementById("share-link");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/        
    }

    copyLinkToClipboard(){
        /* Get the text field */
        let copyText = document.getElementById("share-link");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");
    }

    render(){
               
        if(this.props.disp){
        return (
        <div className="popup">
            <button className="popup-button" onClick={this.onPopupClicked}>
                {/* <img className="close-icon" alt="Close" src={closeIcon}></img> */}

            </button>
            <div className="popup-container">
                <div className="popup-div">
                    <h1>Share "{this.props.project.name}"</h1>
                    <br></br>
                    <p>Select one of the buttons below to share!</p>
                    <br></br>
                    <div className="share-link-container">
                        <input readOnly value={this.props.url} onClick={this.selectAllLink} type="text" className="share-link" id="share-link"></input>
                        <button className="share-link-copy" onClick={this.copyLinkToClipboard}>Copy Link</button>
                    </div>
                    <br></br>
                    <div className="share-button-div">
                        <EmailShareButton 
                            url={this.props.url}
                            subject={'Check out "' + this.props.project.name + '" on CodeDigital!'}>
                            <EmailIcon round='true' className="share-button-icon"></EmailIcon>
                        </EmailShareButton>
                        <FacebookShareButton 
                            url={this.props.url}
                            quote={'Check out "' + this.props.project.name + '" on CodeDigital!'}
                            hashtag="#codedigital">
                            <FacebookIcon round="true" className="share-button-icon"></FacebookIcon>
                            {/* <span className="share-count-wrapper">
                                <FacebookShareCount url={this.props.url}>
                                    accesstoken="2064569620236469|x6ta_gwliHL76uJ6BeNm0NabmCE"
                                    {count => count}
                                </FacebookShareCount>
                            </span> */}
                        </FacebookShareButton>
                        <FacebookMessengerShareButton url={this.props.url} appId="2064569620236469">
                            <FacebookMessengerIcon round="true" className="share-button-icon"></FacebookMessengerIcon>
                        </FacebookMessengerShareButton>
                        <LineShareButton 
                            url={this.props.url} 
                            title={this.props.project.name}>
                            <LineIcon round="true" className="share-button-icon"></LineIcon>
                        </LineShareButton>
                        <LinkedinShareButton 
                            url={this.props.url} 
                            title={this.props.project.name} 
                            summary={this.props.project.description}>
                            <LinkedinIcon round="true" className="share-button-icon"></LinkedinIcon>
                        </LinkedinShareButton>
                        {/* <PinterestShareButton 
                            url={this.props.url} 
                            media={this.props.project}>
                            <PinterestIcon round="true"></PinterestIcon>
                            <span className="share-count-wrapper">
                                <PinterestShareCount url={this.props.url}>
                                    {count => {
                                            console.log(count)
                                            return count}}
                                </PinterestShareCount>
                            </span>
                        </PinterestShareButton> */}
                        <RedditShareButton url={this.props.url} title={this.props.project.name}>
                            <RedditIcon round="true" className="share-button-icon"></RedditIcon>
                            <span className="share-count-wrapper">
                                {/* <RedditShareCount url={this.props.url}>
                                    {shareCount => shareCount}
                                </RedditShareCount> */}
                            </span>
                        </RedditShareButton>
                        <TumblrShareButton 
                            url={this.props.url} 
                            title={this.props.project.name} 
                            caption={this.props.project.description} 
                            tags={['codedigital', 'project', 'digitaldata']}>
                            
                            <TumblrIcon round="true" className="share-button-icon"></TumblrIcon>
                            <span className="share-count-wrapper">
                                <TumblrShareCount url={this.props.url}>
                                    {count => count}
                                </TumblrShareCount>
                            </span>
                        </TumblrShareButton>
                        <TwitterShareButton 
                            url={this.props.url} 
                            title={'Check out "' + this.props.project.name + '" on CodeDigital!'} 
                            hashtags={['codedigital', 'digitaldata']}
                            related={["@DigitalDataGame"]}>
                            <TwitterIcon round="true" className="share-button-icon"></TwitterIcon>
                        </TwitterShareButton>
                        <WhatsappShareButton 
                        url={this.props.url} 
                        title={'Check out "' + this.props.project.name + '" on CodeDigital!'}>
                            <WhatsappIcon round="true" className="share-button-icon"></WhatsappIcon>
                        </WhatsappShareButton>
                    </div>
                    <br></br>
                    <small>Click anywhere outside of this popup to return.</small>
                    {/* <h1>Sharing Coming Soon!</h1> */}
                    {/* <small>Click anywhere outside of this popup to return.</small> */}
                </div>
            </div>
        </div>)
        }else{
            return <div></div>
        }
    };
}

