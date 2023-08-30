import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

import { Yen } from '@/ui/Yen';

export function Thanks() {
  return (
    <Container maxW="container.md" position="absolute" top={0} bottom={0} left={0} right={0}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        my={{ base: '32px', lg: '64px' }}
      >
        <Box>
          <CheckCircleIcon w={{ base: '6rem', lg: '12rem' }} h={{ base: '6rem', lg: '12rem' }} color="green.500" />
        </Box>
        <Box mt="16px">
          <Text fontSize={{ base: '4xl', lg: '6xl' }}>ありがとうございました</Text>
        </Box>
        <Box w="100%" mt={{ base: '32px', lg: '64px' }}>
          <Flex
            justifyContent="space-between"
            borderBottom="1px"
            mb={{ base: '16px', lg: '24px' }}
            pb={{ base: '16px', lg: '24px' }}
          >
            <Text fontSize={{ base: '3xl', lg: '5xl' }}>合計</Text>
            <Text fontSize={{ base: '3xl', lg: '5xl' }}>
              <Yen yen={1000} />
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize={{ base: '3xl', lg: '5xl' }}>おつり</Text>
            <Text fontSize={{ base: '3xl', lg: '5xl' }}>
              <Yen yen={500} />
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}
