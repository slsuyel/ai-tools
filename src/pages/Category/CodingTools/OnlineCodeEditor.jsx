import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../../../hooks/useLocalStorage';

function OnlineCodeEditor() {
    const [html, setHtml] = useLocalStorage('html', '');
    const [css, setCss] = useLocalStorage('css', '');
    const [javascript, setJavascript] = useLocalStorage('javascript', '');
    const [srcDoc, setSrcDoc] = useState('');

    useEffect(() => {
        const updateSrcDoc = () => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
      `);
        };

        const timeoutId = setTimeout(updateSrcDoc, 250);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [html, css, javascript]);

    return (
        <div className="app">
            <div className="d-flex flex-wrap top-pane w-100 py-3">
                <Editor language="xml" label="HTML" value={html} onChange={setHtml} />
                <Editor language="css" label="CSS" value={css} onChange={setCss} />
                <Editor language="javascript" label="JavaScript" value={javascript} onChange={setJavascript} />
            </div>
            <div className="bottom-pane">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
        </div>
    );
}

export default OnlineCodeEditor;
