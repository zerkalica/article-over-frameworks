import React, { Component } from "react"
import mermaid from "mermaid"

export class Mermaid extends Component {
    constructor(props) {
        super(props);

        mermaid.initialize({
            mermaid : {
                startOnLoad: true,
            }
        })
    }

    componentDidMount() {
        mermaid.contentLoaded()
    }

    render() {
        return <div className="mermaid">
            {this.props.children}
        </div>
    }
}

export default Mermaid;
