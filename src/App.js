import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './css/main.css';
import GlleryGrid from './gallery_components/gallery-grid'
import './gallery_components/show-image'
import ShowImage from "./gallery_components/show-image";


class App extends Component {
state={
    images:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'],
    show:false,
    showImage:null,
    showIndex:null,
    showForward:false,
    showBack:false,
    alt:"alt example"
};

handleClick=(image)=>{
    const show=true;
    const showIndex = this.state.images.indexOf(image);
    this.setState({show,showIndex});
    this.performShowImage(showIndex);
}

handleClose=()=>{
    const show=false;
    this.setState({show});
}
handleForward=()=>{
    if(this.state.showIndex<this.state.images.length-1) {
        const showIndex = ++this.state.showIndex;
        this.setState({showIndex});
        this.performShowImage(showIndex);
    }

}
handleBack=()=>{
    if(this.state.showIndex>0)
    {
        const showIndex=--this.state.showIndex;
        this.setState({showIndex});
        this.performShowImage(showIndex);
    }

}

    performShowImage=(showIndex)=>{
        var showForward, showBack = false;
        if(showIndex >=0 && showIndex<this.state.images.length)
        {
            if(showIndex>0) showBack = true;
            if(showIndex<this.state.images.length-1) showForward = true;

            const showImage=this.state.images[showIndex];
            this.setState({showImage,showForward,showBack})
        }
    }


  render() {
    return (
        <div>
            <GlleryGrid onClick={this.handleClick} images={this.state.images}/>
            { this.state.show ? <ShowImage  alt ={this.state.alt} showForward={this.state.showForward} showBack={this.state.showBack} imageBack={this.handleBack} imageForward={this.handleForward} imageClose={this.handleClose} image={this.state.showImage}/> : ''}
        </div>
    );
  }
}

export default App;
