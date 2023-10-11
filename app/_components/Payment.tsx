import { Yen } from '@/ui/Yen';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Logo from 'public/next.svg';

export function Payment() {
  return (
    <Container maxW="container.md" position="absolute" top={0} bottom={0} left={0} right={0}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" w="100%" h="100%">
        < Logo />
        <Flex justifyContent="space-between" w="100%">
          <Flex flexDirection="column" justifyContent="end">
            <Text fontSize="4xl">合計</Text>
            <Text fontSize="5xl">4点</Text>
          </Flex>
          <Box>
            <Text textAlign="center" fontSize="9xl">
              <Yen yen={1000} />
            </Text>
          </Box>
        </Flex>
        <Flex borderTop="1px" mt="8px" pt="8px" w="100%">
          <Text fontSize="6xl">不足</Text>
          <Text fontSize="6xl">
            <Yen yen={1000} />
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
