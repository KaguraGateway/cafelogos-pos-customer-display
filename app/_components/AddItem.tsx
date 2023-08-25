import { Yen } from '@/ui/Yen';
import { Box, Center, Container, Flex, Text } from '@chakra-ui/react';

export function AddItem() {
  return (
    <Flex position="relative" flexDir="column" justifyContent="space-between" h="100vh">
      <Container maxW="container.md" h="calc(100% - 105px)">
        <Flex flexDir="column" justifyContent="center" h="100%" gap={{ base: '64px', sm: '32px' }}>
          <Box>
            <Text fontSize="6xl">ハルメリアブレンド</Text>
            <Text fontSize="5xl">(ネル)</Text>
          </Box>
          <Flex>
            <Flex gap="32px">
              <Text fontSize="6xl">1点</Text>
              <Text fontSize="6xl">
                <Yen yen={500} />
              </Text>
            </Flex>
            <Box></Box>
          </Flex>
        </Flex>
      </Container>
      <Box borderTop="1px" px="16" py="4" position="absolute" bottom="0" left="0" right="0">
        <Flex justifyContent="space-between">
          <Text fontSize="5xl">4点</Text>
          <Text fontSize="5xl">
            計 <Yen yen={1000} />
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
