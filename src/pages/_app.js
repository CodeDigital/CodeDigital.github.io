import '../assets/css/index.scss';

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/themes/prism-funky.css'
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers'; // class="line-numbers"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/match-braces/prism-match-braces'; // class="match-braces"
import 'prismjs/plugins/match-braces/prism-match-braces.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/download-button/prism-download-button';

// Prism.highlightAll();

// import App from 'next/app'

const MyApp = (props) => {

  React.useEffect(()=>{
    Prism.highlightAll();
  },[]);

    const { Component, pageProps } = props;
    return (
        <Component {...pageProps} />
    );
}

export default MyApp;