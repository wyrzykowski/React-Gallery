import React, {Component} from 'react';

class ShowImage extends Component {


    render() {
        return (
            <div>
                <div id="show_image">
                    <div id="showed_image">
                        <div id="picture">
                            <img src={this.props.image} alt="picture-1"/>
                        </div>
                        <div id="close" onClick={this.props.imageClose}>
                            &#10006;
                        </div>

                        <div id="forward" onClick={this.props.imageForward}>
                            {'>'}
                        </div>

                        <div id="back" onClick={this.props.imageBack}>
                            {"<"}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowImage;