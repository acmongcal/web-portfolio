// Description: ACFImage component will display images from ACFs.
// acfImageObject (Required): The ACF image array from the REST API.
// acfImageSize (Optional): Add if you want a specific size. For example: 'medium', 'medium_large', 'large'.

function ACFImage({ acfImageObject, acfImageSize }) {

    let imgWidth = acfImageObject.media_details.width;
    let imgHeight = acfImageObject.media_details.height;
    let imgURL = acfImageObject.source_url;
    let size = acfImageSize;

    return (
        <>
            {acfImageObject.media_details.sizes[size] ?
                <figure className="acf-image">
                    <img
                        src={acfImageObject.media_details.sizes[size]}
                        width={acfImageObject.media_details.sizes[`${size}-width`]}
                        height={acfImageObject.media_details.sizes[`${size}-height`]}
                        alt={acfImageObject.alt_text}
                    />
                </figure>
                :
                <figure className="acf-image">
                    <img
                        src={imgURL}
                        width={imgWidth}
                        height={imgHeight}
                        alt={acfImageObject.alt_text}
                        srcSet={`
                            ${imgURL} ${imgWidth}w,
                            ${acfImageObject.media_details.sizes.large ? acfImageObject.media_details.sizes.large + ' ' + acfImageObject.media_details.sizes['large-width'] + 'w,' : ''}
                            ${acfImageObject.media_details.sizes.medium_large ? acfImageObject.media_details.sizes.medium_large + ' ' + acfImageObject.media_details.sizes['medium_large-width'] + 'w,' : ''}
                        `}
                    />
                </figure>
            }
        </>
    );
};

export default ACFImage;
