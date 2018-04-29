import React, { Component } from 'react';
import Iframe from 'react-iframe';

class LabelMe extends Component {
    render() {
        return (
            <div className="content">
                
                <Iframe url="http://13.57.29.36/LabelMeAnnotationTool/tool.html?collection=LabelMe&mode=f&folder=example_folder&image=img1.jpg"
                        width="100%"
                        height="100%"
                        display="initial"
                        position="relative"
                        allowFullScreen/>
            </div>
        );
    }
}

export default LabelMe;
