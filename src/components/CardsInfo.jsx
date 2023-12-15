import {
    Box,
    Center,
} from '@chakra-ui/react';
import color from '../color';

import { MdAspectRatio, MdEngineering, MdSquareFoot } from 'react-icons/md'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import services_prefa from '../assets/services_prefa.json'

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
    }
    const titles = {
        1: 'ÁREA DE SUPERFICIE',
        2: 'CAPACIDAD',
        3: 'ELEMENTOS DE FABRICACIÓN',
    }

    const getIcon = () => icons[id]
    const getsup = () => sups[id]
    const getTitle = () => titles[id]
    const getText = () => id !== 3;

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
                    getText() ? (
                        <h1
                            key={`cards-info-${index}`}
                            style={{
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                fontSize: 12,
                            }}
                        >
                            {item} {getsup() && <sup>{getsup()}</sup>}
                        </h1>
                    ) : (
                        <OverlayTrigger
                            key={`cards-info-${index}`}
                            trigger='hover'
                            placement={'auto-end'}
                            overlay={
                                <Popover id={`popover-positioned-bottom`}>
                                    <Popover.Header as="h1">{item}</Popover.Header>
                                    <Popover.Body>
                                        <div>
                                        <img
                                            src={services_prefa[item]?.img}
                                            style={{ width: 'auto', height: 100, objectFit: 'cover', }}
                                        />
                                        </div>
                                        {services_prefa[item]?.text}
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <h1
                                style={{
                                    fontFamily: 'monospace',
                                    textAlign: 'center',
                                    fontSize: 12,
                                }}
                            >
                                {item} ℹ️
                            </h1>
                        </OverlayTrigger>
                    )
                ))}
            </div>
        </Box>
    );
}

