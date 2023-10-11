import { Flex, Spacer } from "@chakra-ui/react";
import { ItemCard } from "./_components/ItemCard";
import { ToTalAmountBar } from "./_components/TotalAmountBar";
import { ChargeAmoutBar } from "./_components/ChargeAmountBar";
import { ReturnAmountBar } from "./_components/ReturnAmountBar";

export function Payment() {
    return (
        <>
        <Flex flexDirection="column" alignItems={"center"} w="100%" h="100%" bg={'gray.100'} overflow={"scroll"}>
            <ItemCard color={0} name="ロゴスブレンド〜豊穣〜" amount={400} quantity={1} />
            <ItemCard color={1} name="茜ブレンド" amount={400} quantity={12} />
            <ItemCard color={0} name="薄皮饅頭" amount={200} quantity={2} />
            <ItemCard color={1} name="薄皮饅頭" amount={200} quantity={2} />
            <ItemCard color={0} name="薄皮饅頭" amount={200} quantity={2} />
            
        </Flex>
        <Flex flexDirection="column" position="fixed" bottom="0" left="0" right="0" alignItems={"center"} w="100%" bg={'gray.100'} borderTop="4px" borderColor="gray.500">
            <ToTalAmountBar totalAmount={1200} totalQuantity={2}/>
            <ChargeAmoutBar totalAmount={1200} recievedAmount={1500} />
        </Flex>
        </>
    );
}