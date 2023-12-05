import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react';

const BGPoints = ({ children }) => {
    return (
        <Box
            bgGradient={
                useColorModeValue(
                    'radial(#B6B6B650 1px, transparent 1px)',
                    'radial(#B6B6B650 1px, transparent 1px)'
                )
            }
            backgroundSize="20px 20px"
            opacity="1"
            height="100%"
        >
            {children}
        </Box>
    )
}

export default BGPoints
