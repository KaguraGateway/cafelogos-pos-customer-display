import { Flex, Text } from '@chakra-ui/react';
import InteractiveLogo from 'public/interactive.svg';


export function Logo() {
    return (
        <>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%" h="100%" bg={'regiBrown.500'}  >
            <InteractiveLogo width="80%" boxShadow={"md"}/>
        </Flex>
        </>
    );
}