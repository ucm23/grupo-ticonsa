const SplitMergeAnimation = ({ imageUrl, numParts = 6, children }) => {
    const imageParts = [];

    for (let i = 0; i < numParts; i++) {
        const position = (i / numParts) * 100;
        const newPosition = ((i + 1) / numParts) * 100;

        const imagePartStyle = {
            objectFit: 'cover',
            backgroundColor: "#03296a99",
            backgroundImage: `url('${imageUrl}')`,
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