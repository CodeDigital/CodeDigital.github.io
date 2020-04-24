//update to latest date only if popup is updated.
const popupVersion = '23/02/2020';

export class Popup extends React.Component {
    constructor(){
        super();
        this.onPopupClicked = this.onPopupClicked.bind(this);
        this.el = React.createRef();
    }

    componentDidMount(){
        if(localStorage.getItem('popupVersion') === popupVersion){
            this.el.current.style.display = 'none';
        }
    }

    onPopupClicked(){
        localStorage.setItem('popupVersion', popupVersion);
        this.el.current.style.display = 'none';
    }

    render() {
        return (
            <button className="popup" ref={this.el} onClick={this.onPopupClicked}>
                    {/* <img className="close-icon" alt="Close" src={closeIcon}></img> */}
                    <div>
                <h1>Welcome to &lt;Code&gt;Digital</h1>
                <hr></hr><br/>
                <p>To get started, use the <code>Search Bar</code> or scroll through the project/weblog list to see what is going on,</p>
                <small>Click anywhere outside of this popup to continue.</small>
                    </div>
            </button>
        )
    }
}

export default Popup
