import {
    chakra,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'

export default function SocialButton({
    children,
    href,
}) {
    return (
        <chakra.button
            rounded={'full'}
            w={8}
            h={8}
            cursor={'crosshair'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            color={'white'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            {children}
        </chakra.button>
    )
}