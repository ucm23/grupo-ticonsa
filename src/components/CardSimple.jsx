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
        icon,
    } = props;

    return (
        <Stack style={{ width: '45%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ marginTop: -30 }}>
            {icon}
            </div>

            <div>
                <Fade direction="down">
                    <p className="font-50">
                        {prefix}
                        <CountUp end={title} duration={title * 0.009} enableScrollSpy={true} scrollSpyDelay={1000} />
                        {suffix}
                    </p>
                </Fade>
                <p className="font--50">{descrip}</p>
            </div>
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