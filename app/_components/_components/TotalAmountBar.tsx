import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props= {
    totalQuantity: number;
    totalAmount: number;
    recievedAmount?: number;
}

export function ToTalAmountBar(props:Props) {
    return(
        <>
            <Flex flexDirection="row" justifyContent="space-between" alignItems="center" w="100%"  bg={"gray.300"} >
                    <Text fontSize={"5xl"} fontWeight={"semibold"} color="white" p={10} px={20} bg={"gray.600"} height={"100%"} >
                        合計
                    </Text>
                <Text fontSize={"6xl"} fontWeight={"semibold"} color="gray.800">
                    {props.totalQuantity}点
                </Text>
                <Text fontSize={"6xl"} fontWeight={"semibold"} color="gray.800" mx={10}>
                    ¥{props.totalAmount}
                </Text>
        </Flex>
        </>
    )
}