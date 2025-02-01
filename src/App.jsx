import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  extendTheme,
  useColorMode,
  useColorModeValue,
  Container
} from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const customTheme = extendTheme({ config });

function AppContent() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgMain = useColorModeValue('gray.100', 'gray.900');
  const headerBg = useColorModeValue('blue.600', 'blue.800');
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box bg={bgMain} minH="100vh">
      <Flex as="header" align="center" justify="space-between" p={4} bg={headerBg} color="white">
        <Heading as="h1" size="lg">
          Small Business ROI Marketing Platform
        </Heading>
        <Button onClick={toggleColorMode} colorScheme="teal">
          {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </Flex>
      <Container maxW="container.xl" py={6}>
        <VStack spacing={10} align="stretch">
          <Box p={6} bg={cardBg} borderRadius="md" shadow="md">
            <Heading as="h2" size="lg" mb={4} textAlign="center">
              Overview
            </Heading>
            <Text textAlign="center">
              This platform is designed to maximize ROI for businesses such as plumbers, lawyers,
              and doctors through targeted, scalable, and user-friendly marketing strategies.
            </Text>
          </Box>
          <Box p={6} bg={cardBg} borderRadius="md" shadow="md">
            <Heading as="h2" size="lg" mb={4} textAlign="center">
              Key Features
            </Heading>
            <VStack align="start" spacing={2}>
              <Text>- Modern Frontend Architecture using React and Vite</Text>
              <Text>- Responsive and Adaptive Design for all devices</Text>
              <Text>
                - Customizable User Interface with dark mode and theme customization via Chakra UI
              </Text>
              <Text>- Future Integration of Advanced Analytics Dashboard</Text>
              <Text>- Modular & Reusable Component Library</Text>
              <Text>- Enhanced User Experience with animations and micro-interactions</Text>
            </VStack>
          </Box>
          <Box p={6} bg={cardBg} borderRadius="md" shadow="md">
            <Heading as="h2" size="lg" mb={4} textAlign="center">
              Pricing Tiers
            </Heading>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-around" align="stretch" gap={4}>
              <Box flex="1" p={4} bg={cardBg} borderRadius="md" shadow="sm" textAlign="center">
                <Heading as="h3" size="md" mb={2}>
                  Starter
                </Heading>
                <Text fontSize="xl" mb={2}>
                  $19/month
                </Text>
                <Text mb={4}>Basic analytics and single-user support.</Text>
                <Button colorScheme="blue">Get Started</Button>
              </Box>
              <Box flex="1" p={4} bg={cardBg} borderRadius="md" shadow="sm" textAlign="center">
                <Heading as="h3" size="md" mb={2}>
                  Professional
                </Heading>
                <Text fontSize="xl" mb={2}>
                  $49/month
                </Text>
                <Text mb={4}>
                  Advanced analytics, multi-user support, and customization options.
                </Text>
                <Button colorScheme="blue">Get Started</Button>
              </Box>
              <Box flex="1" p={4} bg={cardBg} borderRadius="md" shadow="sm" textAlign="center">
                <Heading as="h3" size="md" mb={2}>
                  Enterprise
                </Heading>
                <Text fontSize="xl" mb={2}>
                  $99/month
                </Text>
                <Text mb={4}>
                  All features including dedicated support and advanced marketing tools.
                </Text>
                <Button colorScheme="blue">Get Started</Button>
              </Box>
            </Flex>
          </Box>
          <Box p={6} bg={cardBg} borderRadius="md" shadow="md">
            <Heading as="h2" size="lg" mb={4} textAlign="center">
              About the Project
            </Heading>
            <Text textAlign="center">
              Organized with a modular architecture, this project prioritizes performance,
              scalability, and an exceptional user experience. It evolves with community
              contributions and a focus on maximizing ROI.
            </Text>
          </Box>
          <Box p={6} textAlign="center">
            <Button colorScheme="teal" size="lg">
              Join Now
            </Button>
          </Box>
        </VStack>
      </Container>
      <Box as="footer" p={4} bg={headerBg} color="white" textAlign="center">
        <Text>Empowering small businesses to thrive in the digital age.</Text>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AppContent />
    </ChakraProvider>
  );
}

export default App;