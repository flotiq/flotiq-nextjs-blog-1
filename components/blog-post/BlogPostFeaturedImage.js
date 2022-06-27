import React from 'react';
import Image from 'next/image';
import FlotiqImage from '../../lib/flotiqImage';

const BlogPostFeaturedImage = ({ headerImage, title }) => (
    <div className="pt-12 bg-gradient-to-r from-primary to-secondary rounded-xl leading-[0]">
        <Image
            priority
            alt={title}
            src={FlotiqImage.getSrc(headerImage, 1280, 718)}
            className="w-full rounded-xl"
            width="1280px"
            height="718px"
        />
    </div>
);

export default BlogPostFeaturedImage;
