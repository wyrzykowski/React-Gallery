import React from 'react';

function GalleryGrid(props) {

  const  {images,onClick} = props;
    return (

            <div id="gallery" className="container">
                <div className="row">

                    {
                        images.map(image=>
                            <div key={image} className="col-xl-3 col-lg-4 col-md-6  col-xs-12">
                                <div id="gallery_img" onClick={()=>onClick(image)}>
                                    <img src={image} alt="picture-1"/>
                                </div>
                            </div>
                        )

                    }






                </div>
            </div>

    );
}

export default GalleryGrid;