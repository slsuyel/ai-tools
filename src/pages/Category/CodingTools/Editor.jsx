/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import "./OnlineCodeEditor.css"

const Editor = (props) => {
    const [open, setOpen] = useState(true)
    const { launguage, label, value, onChange } = props

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <div className={`col-md-4 editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title ">
                {label}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="expand-collapse-btn"
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <CodeMirror
                value={value}
                className="code-mirror-wrapper"
                onBeforeChange={handleChange}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: launguage,
                    lineNumbers: true,
                    theme: "material"
                }}
            />
        </div>
    )
}

export default Editor