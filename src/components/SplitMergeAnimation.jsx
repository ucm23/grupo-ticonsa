import PropTypes from 'prop-types'

const SplitMergeAnimation = ({ imageUrl, numParts = 6, children }) => {
    const imageParts = [];

    for (let i = 0; i < numParts; i++) {
        const position = (i / numParts) * 100;
        const newPosition = ((i + 1) / numParts) * 100;

        const imagePartStyle = {
            objectFit: 'cover',
            backgroundImage: `url('${imageUrl}')`,
            '--position': `${position}%`,
            '--new-position': `${newPosition}%`,
            '--num-parts': numParts,
            //'opacity': 0,
            'transition': 'opacity 1s ease-in-out',
        };

        imageParts.push(
            <div
                key={i}
                className="image-part"
                style={imagePartStyle}
            ></div>
        );
    }

    return (
        <>
            <div
                className="image-container"
            >
                {imageParts}
            </div>
            {children}
        </>
    );
};

SplitMergeAnimation.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    numParts: PropTypes.number,
    children: PropTypes.node,
}

export default SplitMergeAnimation;