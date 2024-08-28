import Image from 'next/image';
import { getMediaUrl } from '../../lib/flotiqImage';

const BlogPostFeaturedImage = ({ headerImage, title }) => (
    <div className="pt-12 bg-gradient-to-r from-primary to-secondary rounded-xl leading-[0]">
        <Image
            priority
            alt={title}
            src={getMediaUrl(headerImage, 1280, 718)}
            className="w-full rounded-xl"
            width={1280}
            height={718}
        />
    </div>
);

export default BlogPostFeaturedImage;
