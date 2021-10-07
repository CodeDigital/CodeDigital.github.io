
import Link from 'next/link';
// import Link from './Link'

const Footer = () => {
    var d = new Date();

    return (
        <div className="footer">
            <Link href="/[project].js" as="/about"><a>About</a></Link>
            <Link href="/[project].js" as="/contact"><a>Contact</a></Link>
            <a rel="noopener noreferrer" href="https://github.com/CodeDigital" target="_blank">Github</a>
            <p className="copyright">&copy; Copyright {d.getFullYear()}, CodeDigital</p>
        </div>
    );

}

export default Footer;
