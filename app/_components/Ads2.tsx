import { Flex, Text } from '@chakra-ui/react';
import OrderLinkAds from 'public/Ads2.svg';

export function Ads2() {
    return (
        <>
            <Flex flexDirection="column" justifyContent="end" alignItems="center" w="100%" h="100%" bg={'gray.100'} >
            <OrderLinkAds height="85vh"/>
            </Flex>
        </>
    );
}