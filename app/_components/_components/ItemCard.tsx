import { Flex, Text } from "@chakra-ui/react";

type Props= {
    color: number;
    name: string;
    amount: number;
    quantity: number;
}

export function ItemCard(props: Props){

    return (
        <>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%"  bg={props.color == 0 ? ("gray.300") : ("white")} p={10}>
            <Flex flexDirection="row" justifyContent="start" alignItems="start" w="100%" h="100%" >
                <Text fontSize={"5xl"} fontWeight={"semibold"} color="gray.800">
                    {props.name}
                </Text>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-between" alignItems="center" w="100%" h="100%" paddingTop={8}>
                <Text fontSize={"5xl"} fontWeight={"semibold"} color="gray.800">
                    ¥{props.amount}
                </Text>
                <Text fontSize={"5xl"} fontWeight={"semibold"} color="gray.800">
                    {props.quantity}点
                </Text>
                <Text fontSize={"5xl"} fontWeight={"semibold"} color="gray.800">
                    ¥{props.amount * props.quantity}
                </Text>
            </Flex>
        </Flex>
        </>
    );
}