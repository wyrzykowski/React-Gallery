import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import logo from './logo.svg';
import './css/main.css';
import GlleryGrid from './gallery_components/gallery-grid'
import './gallery_components/show-image'
import ShowImage from "./gallery_components/show-image";


class App extends Component {
state={
    images:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg'],
    show:false,
    showImage:null,
    showImageIndex:null,
    showForward:false,
    showBack:false
}

handleClick=(image)=>{
    const show=true;
    const showImageIndex = this.state.images.indexOf(image);
    this.setState({show,showImageIndex});
    this.performShowImage(showImageIndex);
}

handleClose=()=>{
    const show=false;
    this.setState({show});
}
handleForward=()=>{
    if(this.state.showImageIndex<this.state.images.length-1) {
        const showImageIndex = ++this.state.showImageIndex;
        console.log("forward");
        this.setState({showImageIndex});
        this.performShowImage(showImageIndex);
    }

}
handleBack=()=>{
    if(this.state.showImageIndex>0)
    {
        console.log("back")
        const showImageIndex=--this.state.showImageIndex;
        console.log(showImageIndex);
        this.setState({showImageIndex});
        this.performShowImage(showImageIndex);
    }

}

performShowImage=(showImageIndex)=>{
var showImage;
    if(showImageIndex >=0 && showImageIndex<this.state.images.length)
    {
        showImage=this.state.images[showImageIndex];
        console.log(showImageIndex)
        this.setState({showImage})
    }

}
  render() {
    return (
<div>
    <GlleryGrid onClick={this.handleClick} images={this.state.images}/>
    { this.state.show ? <ShowImage imageBack={this.handleBack} imageForward={this.handleForward} imageClose={this.handleClose} image={this.state.showImage}/> : ''}
</div>


    );
  }
}

export default App;
