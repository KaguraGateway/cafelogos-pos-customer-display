import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props= {
    totalAmount: number;
    recievedAmount: number;
}

export function ReturnAmountBar(props:Props) {
    return(
        <>
            <Flex flexDirection="row" justifyContent="space-between" alignItems="center" w="100%"  bg={"white"} >
                    <Text fontSize={"5xl"} fontWeight={"semibold"} color="gray.900" p={10} px={20} height={"100%"} >
                        おつり
                    </Text>
                {props.recievedAmount - props.totalAmount >= 0 ?(
                    <Text fontSize={"6xl"} fontWeight={"semibold"} color="gray.900" mx={10}>
                        ¥{props.recievedAmount - props.totalAmount}
                    </Text>
                ) : (
                    <Text fontSize={"6xl"} fontWeight={"semibold"} color="red.900" mx={10}>
                        エラー
                    </Text>
                )}
                
        </Flex>
        </>
    )
}