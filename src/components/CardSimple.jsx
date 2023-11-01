import {
    Stack,
} from '@chakra-ui/react';

import { Fade } from "react-awesome-reveal";
import CountUp from 'react-countup';

export default function CardSimple(props) {

    const {
        title,
        descrip,
        prefix,
        suffix,
    } = props;

    return (
        <Stack style={{ width: '40%' }}>
            <Fade direction="down">
                <p className="font-50">
                    {prefix}
                    <CountUp end={title} duration={title*0.009} enableScrollSpy={true} scrollSpyDelay={1000} />
                    {suffix}
                </p>
            </Fade>
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