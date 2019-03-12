import React, {Component} from 'react';
import keydown from 'react-keydown';
class ShowImage extends Component {

    @keydown( 'enter' ) // or specify `which` code directly, in this case 13
    submit( event ) {
        // do something, or not, with the keydown event, maybe event.preventDefault()
        console.log("sdssa");
    }

    render() {
        return (
            <div onKeyDown={(e) => console.log(e)} >
                <div id="show_image">
                    <div id="showed_image">
                        <div id="picture">
                            <img src={this.props.image} alt="picture-1"/>
                        </div>
                        <div id="close" onClick={this.props.imageClose}>
                            &#10006;
                        </div>

                        <div id="forward" onClick={this.props.imageForward}>
                            <p>{'>'}</p>
                        </div>

                        <div id="back" onClick={this.props.imageBack}>
                            <p>{"<"}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowImage;