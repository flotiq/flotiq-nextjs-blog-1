import React from 'react';

const BlogPostMetaDetailsPresentation = ({ date, readingTime }) => (
    <>
        <p>
            Date:&nbsp;
            {date}
        </p>
        <p>
            Reading Time:&nbsp;
            {readingTime}
        </p>
    </>
);

export default BlogPostMetaDetailsPresentation;
