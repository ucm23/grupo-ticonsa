import {
    Box,
    Center,
} from '@chakra-ui/react';
import color from '../color';

import { MdAspectRatio, MdEngineering, MdSquareFoot } from 'react-icons/md'

export default function CardsInfo(props) {

    const {
        id,
        properties,
    } = props;

    const icons = {
        1: <MdAspectRatio color={color.primaryLight} size="70px" />,
        2: <MdEngineering color={color.primaryLight} size="70px" />,
        3: <MdSquareFoot color={color.primaryLight} size="70px" />,
    }

    const sups = {
        1: 2,
        2: 3,
        3: null,
    }
    const titles = {
        1: 'ÁREA DE SUPERFICIE',
        2: 'CAPACIDAD',
        3: 'ELEMENTOS DE FABRICACIÓN',
    }

    const getIcon = () => icons[id]
    const getsup = () => sups[id]
    const getTitle = () => titles[id]

    return (
        <Box
            maxW='350px'
            minW='250px'
            w='full'
            cursor={'pointer'}
            style={{ paddingTop: 20 }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {getIcon()}
                <h3
                    style={{
                        fontFamily: 'monospace',
                        color: color.primary,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18,
                        padding: '12px 0 8px 0'
                    }}
                >
                    {getTitle()}
                </h3>

                {properties.map((item, index) => (
                    <h1
                        key={`cards-info-${index}`}
                        style={{
                            fontFamily: 'monospace',
                            textAlign: 'center',
                            fontSize: 12,
                        }}
                    >
                        {item}
                        {<sup>{getsup()}</sup>}
                    </h1>
                )
                )}
            </div>
        </Box>
    );
}
