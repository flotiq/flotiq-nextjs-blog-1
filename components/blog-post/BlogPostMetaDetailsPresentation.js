import React from 'react';

const BlogPostMetaDetailsPresentation = ({date, readingTime}) => (
    <>
        <p>
            Date:
            {date}
        </p>
        <p>
            Reading Time:
            {readingTime}
        </p>
    </>
);

export default BlogPostMetaDetailsPresentation;
