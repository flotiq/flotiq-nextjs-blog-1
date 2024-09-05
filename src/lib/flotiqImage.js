export const getMediaUrl = (imageObject, width, height) =>
    `${process.env.NEXT_PUBLIC_FLOTIQ_API_URL}/image/${width}x${height}/${imageObject.id}.${imageObject.extension}`;
