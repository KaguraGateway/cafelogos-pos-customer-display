import { Flex, Text } from '@chakra-ui/react';
import LogosLogo from 'public/logosLogo.svg';

export function ThanksUse() {
    return (
        <>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%" h="100%" bg={'gray.100'} >
            <LogosLogo width="60%" 
            boxShadow={"md"}/>
            <Text fontSize="6xl" fontWeight={"semibold"} color="gray.600" m={20}>
                ご利用いただきまして、
                <br />
                ありがとうございます。
            </Text>
            </Flex>
        </>
    );
}