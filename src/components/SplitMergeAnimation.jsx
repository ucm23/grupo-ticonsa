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
            'transition': 'opacity 1s ease-in-out',
        };

        imageParts.push(
            <div
                key={i}
                className="image-part"
                style={imagePartStyle}
            />
        );
    }

    return (
        <>
            <div className="image-container">
                {imageParts}
            </div>
            {children}
        </>
    );
};

export default SplitMergeAnimation;