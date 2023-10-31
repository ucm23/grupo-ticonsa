import {
    Stack,
} from '@chakra-ui/react';


export default function CardSimple(props) {

    const {
        title,
        descrip,
    } = props;

    return (
        <Stack style={{ width: '40%' }}>
            <p className="font-50">{title}</p>
            <p className="font--50">{descrip}</p>
        </Stack>
    );
}

/*ServicesCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    newTab: PropTypes.bool,
    onPress: PropTypes.func,
    onPress_: PropTypes.string,
}*/