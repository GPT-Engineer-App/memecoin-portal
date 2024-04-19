import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaRocket, FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <VStack spacing={8}>
          <Image src="https://images.unsplash.com/photo-1542649761-0bdd3753c8a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwcm9ja2V0fGVufDB8fHx8MTcxMzQ4NzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" alt="MemeCoin Rocket" />
          <Heading as="h1" size="2xl" textAlign="center">
            MemeCoin
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Join the next generation of cryptocurrency and take your investments to the moon!
          </Text>
          <Button rightIcon={<FaRocket />} colorScheme="purple" size="lg">
            Buy MemeCoin
          </Button>
          <Flex gap={6}>
            <Button leftIcon={<FaTwitter />} colorScheme="twitter" variant="outline">
              Twitter
            </Button>
            <Button leftIcon={<FaDiscord />} colorScheme="purple" variant="outline">
              Discord
            </Button>
            <Button leftIcon={<FaGithub />} colorScheme="gray" variant="outline">
              GitHub
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
