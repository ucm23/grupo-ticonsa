const SplitMergeAnimation = ({ imageUrl, numParts = 6, children }) => {
    const imageParts = [];

    for (let i = 0; i < numParts; i++) {
        const position = (i / numParts) * 100;
        const newPosition = ((i + 0.4) / numParts) * 100;

        const imagePartStyle = {
            objectFit: 'cover',
            backgroundColor: "#03296A30",
            backgroundImage: `url('bg_index/${imageUrl}')`,
            '--position': `${position}%`,
            '--new-position': `${newPosition}%`,
            '--num-parts': numParts,
            'transition': 'opacity 1s ease-in-out',
            backgroundBlendMode: "soft-light",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: 'fixed'
        };

        imageParts.push(
            <div
                key={`split-merge-part-${i}`}
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