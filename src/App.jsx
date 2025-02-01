import { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    extendTheme
} from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
};

const customTheme = extendTheme({ config });

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ChakraProvider theme={customTheme}>
            <Box bg={darkMode ? 'gray.800' : 'gray.100'} minHeight="100vh">
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    p={4}
                    bg={darkMode ? 'gray.700' : 'white'}
                    boxShadow="sm"
                >
                    <Heading as="h1" size="lg">
                        Small Business ROI Marketing Platform
                    </Heading>
                    <Button onClick={toggleDarkMode} colorScheme="teal">
                        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </Button>
                </Flex>
                <Box as="main" p={4}>
                    <VStack spacing={8} align="stretch">
                        <Box
                            p={6}
                            bg={darkMode ? 'gray.600' : 'white'}
                            borderRadius="md"
                            boxShadow="md"
                        >
                            <Heading as="h2" size="md" mb={2}>
                                Maximize Your ROI
                            </Heading>
                            <Text>
                                Empowering small businesses like plumbers, lawyers, and doctors with
                                targeted marketing strategies and a user-friendly interface.
                            </Text>
                        </Box>
                        <Box
                            p={6}
                            bg={darkMode ? 'gray.600' : 'white'}
                            borderRadius="md"
                            boxShadow="md"
                        >
                            <Heading as="h3" size="md" mb={2}>
                                Features
                            </Heading>
                            <VStack align="start" spacing={2}>
                                <Text>- Modern Frontend Architecture with React and Vite</Text>
                                <Text>
                                    - Responsive and Adaptive Layouts for an optimal experience
                                    across devices
                                </Text>
                                <Text>
                                    - Customizable User Interface with dark mode and theme
                                    customization
                                </Text>
                                <Text>
                                    - Future Analytics Dashboard for detailed campaign performance
                                </Text>
                                <Text>
                                    - Modular Component Library for scalable marketing campaigns
                                </Text>
                                <Text>
                                    - Enhanced User Experience with micro-interactions and
                                    animations
                                </Text>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
                <Box
                    as="footer"
                    p={4}
                    textAlign="center"
                    bg={darkMode ? 'gray.700' : 'white'}
                    boxShadow="sm"
                >
                    <Text>Empowering small businesses to thrive in the digital age.</Text>
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default App;
