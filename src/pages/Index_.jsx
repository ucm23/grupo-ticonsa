import NavBar from "../components/NavBar"
import {
    Stack,
    useBreakpointValue,
    Button
} from '@chakra-ui/react';
import NavBar_ from "../components/NavBar_";

const Index_ = () => {
    const mobile = useBreakpointValue({ base: true, md: false });
    return (
        <>
            <NavBar_ photo={true} mobile={mobile}>
              
            </NavBar_>
        </>
    )
}

export default Index_;