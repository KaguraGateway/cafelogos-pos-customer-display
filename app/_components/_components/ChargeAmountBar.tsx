import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props= {
    totalAmount: number;
    recievedAmount: number;
}

export function ChargeAmoutBar(props:Props) {
    return(
        <>
            <Flex flexDirection="row" justifyContent="space-between" alignItems="center" w="100%"  bg={"orange.200"} >
                    <Text fontSize={"5xl"} fontWeight={"semibold"} color="yellow.900" p={10} px={20} height={"100%"} >
                        不足
                    </Text>
                {props.recievedAmount - props.totalAmount < 0 ?(
                    <Text fontSize={"6xl"} fontWeight={"semibold"} color="yellow.900" mx={10}>
                        ¥{props.totalAmount - props.recievedAmount}
                    </Text>
                ) : (
                    <Text fontSize={"6xl"} fontWeight={"semibold"} color="yellow.900" mx={10}>
                        ¥0
                    </Text>
                )}
                
        </Flex>
        </>
    )
}