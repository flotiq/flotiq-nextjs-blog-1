export const getMediaUrl = (imageObject, width, height) =>
    `https://api.flotiq.com/image/${width}x${height}/${imageObject.id}.${imageObject.extension}`;
