import React from 'react';
import Image from 'next/image';
import config from '../../lib/config';

const BlogPostFeaturedImage = ({ headerImage, title }) => {
    const url = headerImage[0].dataUrl;
    const imageName = url.substring(url.lastIndexOf('/') + 1);
    return (
        <div className="pt-12 bg-gradient-to-r from-primary to-secondary rounded-xl">
            {headerImage && headerImage[0] && (
                <Image
                    alt={title}
                    src={`${config.api.url}/image/0x0/${imageName}.jpg`}
                    className="w-full rounded-xl"
                    width="1280px"
                    height="718px"
                />
            )}
        </div>
    );
};

export default BlogPostFeaturedImage;
