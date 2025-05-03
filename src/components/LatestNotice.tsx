'use client';

import { Box, Text, Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { FaRegShareSquare } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link for routing

const Notice = () => {
  return (
    <Box maxW="1000px" mx="auto" p={5}>
      <Heading textAlign="center" mt="80px" as="h2" size="3xl" color="green.700">
        Latest Notice
      </Heading>

      {/* Latest Notice Section */}
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={6} mt={12}>
        <Box
          borderWidth={1}
          borderRadius="lg"
          p={6}
          flex="1"
          maxW={{ base: '100%', md: '65%' }}
        >
          <Box>
            <Text fontSize="lg" color="gray.500" mt="200px">
              29 December, 2024
            </Text>
            <Text mt={2} fontSize="xl" fontWeight="semibold" color="gray.700">
              Create Notice English
            </Text>
            <Text mt={2} fontSize="sm" color="gray.400">
              Details (বাংলা): Details (বাংলা): Details (বাংলা): Details (বাংলা): Details (বাংলা):
            </Text>

            {/* See More Button with Link */}
            <Button
              mt={4}
              variant="outline"
              color="black"
              borderColor="black"
              _hover={{ bg: 'green.100', color: 'green.700', borderColor: 'green.600' }}
              as={Link}
              href="/notice/1" // Update path to match the dynamic route
            >
              See More
            </Button>

            {/* Share Button with Icon */}
            <Button
              mt={4}
              variant="outline"
              color="black"
              borderColor="black"
              _hover={{ bg: 'green.100', color: 'green.700', borderColor: 'green.600' }}
              ml={4} // Adds space between the buttons
              leftIcon={<FaRegShareSquare />} // Directly use the icon from react-icons
            >
              Share
            </Button>
          </Box>
        </Box>

        {/* See More Notice Section */}
        <Box flex="1" maxW={{ base: '100%', md: '30%' }}>
          <Text fontSize="2xl" fontWeight="bold" color="green.800" textAlign="center">
            See More Notice
          </Text>
          <Box mt={4} display="flex" flexDirection="column" gap={2}>
            {[1, 2, 3].map((_, index) => (
              <Box
                key={index}
                borderWidth={1}
                borderRadius="md"
                p={4}
                width="100%"
                mb={4}
                _hover={{ boxShadow: 'lg', cursor: 'pointer' }}
                as={Link} // Turned each card into a clickable link
                href={`/notice/${index + 1}`} // Fixed path to `/notice/1`, `/notice/2`, etc.
              >
                <Text fontSize="xl" fontWeight="semibold" color="gray.700">
                  Create Notice English
                </Text>
                <Text fontSize="sm" color="gray.400">
                  29 December, 2024
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Notice;
