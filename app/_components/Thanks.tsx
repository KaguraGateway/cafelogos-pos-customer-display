import { Flex, Spacer, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { ReturnAmountBar } from './_components/ReturnAmountBar';
import { ToTalAmountBar } from './_components/TotalAmountBar';


export function Thanks() {
    return (
        <>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%" h="100%" bg={'gray.100'} >
            <CheckCircleIcon w={150} h={150} color="green.500" />
            <Text fontSize="5xl" fontWeight={"bold"} color="green.500" m={20} marginBottom={250} align={'center'}>
                ありがとうございました。
                <br />
                またのご来店をお待ちしております。
            </Text>
            </Flex>
            <Flex flexDirection="column" position="fixed" bottom="0" left="0" right="0" alignItems={"center"} w="100%" bg={'gray.100'} borderTop="4px" borderColor="gray.500">
            <ToTalAmountBar totalAmount={1200} totalQuantity={2}/>
            <ReturnAmountBar totalAmount={1200} recievedAmount={1500} />
        </Flex>
        </>
    );
}