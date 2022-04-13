import React from 'react';
import Image from 'next/image';

const BlogPostFeaturedImage = ({ headerImage, title }) => (
    <div className="pt-12 bg-gradient-to-r from-primary to-secondary rounded-xl">
        {headerImage && headerImage[0] && (
            <Image
                alt={title}
                src={headerImage[0].localFile}
                className="w-full rounded-xl"
            />
        )}
    </div>
);

export default BlogPostFeaturedImage;
