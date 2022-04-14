import React from 'react';
import {config} from "../../lib/config";

const BlogPostFeaturedImage = ({headerImage, title}) => {
    const url = headerImage[0].dataUrl;
    const imageName = url.substring(url.lastIndexOf('/') + 1);
    return (
        <div className="pt-12 bg-gradient-to-r from-primary to-secondary rounded-xl">
            {headerImage && headerImage[0] && (
                <div style={{maxHeight: '80%'}}>
                    <img
                        alt={title}
                        src={`${config.api.url}/image/0x0/${imageName}.jpg`}
                        className="w-full rounded-xl"
                    />
                </div>
            )}
        </div>
    )
};

export default BlogPostFeaturedImage;
