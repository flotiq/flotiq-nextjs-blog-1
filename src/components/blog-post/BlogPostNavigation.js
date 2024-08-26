import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const BlogPostNavigation = ({
    additionalClass,
    prevText,
    nextText,
    previousSlug,
    nextSlug,
}) => (
    <nav
        className={[
            'max-w-7xl mx-auto px-6 md:px-0 flex items-center justify-between',
            ...additionalClass,
        ].join(' ')}
    >
        <div className="-mt-px w-0 flex-1 flex">
            {previousSlug && (
                <Link
                    href={`/post/${encodeURIComponent(previousSlug)}`}
                    className="border-t-2 border-transparent pt-4 pr-1
                                inline-flex items-center text-sm md:text-lg font-medium hover:text-secondary"
                >
                    <ArrowLeftIcon
                        className="mr-2 h-5 md:h-7 w-5 md:w-7"
                        aria-hidden="true"
                    />
                    {prevText}
                </Link>
            )}
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end">
            {nextSlug && (
                <Link
                    href={`/post/${encodeURIComponent(nextSlug)}`}
                    className="border-t-2 border-transparent pt-4 pr-1
                            inline-flex items-center text-sm md:text-lg font-medium hover:text-secondary"
                >
                    {nextText}
                    <ArrowRightIcon
                        className="ml-2 h-5 md:h-7 w-5 md:w-7"
                        aria-hidden="true"
                    />
                </Link>
            )}
        </div>
    </nav>
);

export default BlogPostNavigation;
