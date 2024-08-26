import BlogPostMetaDetailsPresentation from './BlogPostMetaDetailsPresentation';

const BlogPostMetaDetails = ({ date, readingTime, tags, additionalClass }) => (
    <div
        className={[
            'px-6 md:px-12 flex flex-wrap ' +
                'items-center justify-between font-light',
            ...additionalClass,
        ].join(' ')}
    >
        <div className="basis-full md:basis-1/2 flex flex-wrap items-center justify-center md:justify-start space-x-6">
            <BlogPostMetaDetailsPresentation
                date={date}
                readingTime={readingTime}
            />
            <div />
        </div>
    </div>
);

export default BlogPostMetaDetails;
