'use client';

import { Box, Text, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Correct import for Next.js

const Navbar = () => {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'BN' : 'EN'));
  };

  const paddingX = useBreakpointValue({ base: "20px", md: "200px" });

  return (
    <>
      {/* Topbar */}
      <Box
        position="fixed" // Fixed topbar
        top="0"
        left="0"
        right="0"
        zIndex="999" // Make sure the topbar is above other content
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={paddingX}
        py="15px"
        backgroundColor="green.700"
        color="white"
      >
        {/* Contact Info */}
        <Flex direction={['column', 'row']} alignItems="center" gap="10px">
          <Text fontSize="sm" fontWeight="bold" color="white">
            09639655565
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="white">
            <Link href="mailto:support@ba-systems.com">support@ba-systems.com</Link>
          </Text>
        </Flex>

        {/* Language Toggle and Help */}
        <Flex alignItems="center" gap="1rem">
          <Flex alignItems="center" role="group" title={language === 'EN' ? 'Switch to Bangla' : 'Switch to English'}>
            <Flex
              onClick={toggleLanguage}
              cursor="pointer"
              position="relative"
              alignItems="center"
              width="60px"
              height="24px"
              borderRadius="12px"
              bg="rgba(255, 255, 255, 0.2)"
              overflow="hidden"
            >
              <Box
                width="30px"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={language === 'EN' ? 'green.700' : 'white'}
                bg={language === 'EN' ? 'white' : 'transparent'}
                fontWeight="bold"
                fontSize="xs"
                transition="all 0.3s"
              >
                EN
              </Box>

              <Box
                width="30px"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color={language === 'BN' ? 'green.700' : 'white'}
                bg={language === 'BN' ? 'white' : 'transparent'}
                fontWeight="bold"
                fontSize="xs"
                transition="all 0.3s"
              >
                বাং
              </Box>
            </Flex>
          </Flex>

          <Text fontSize="sm" fontWeight="bold" color="white">
            {language === 'EN' ? 'Need Help?' : 'সহায়তা লাগবে?'}
          </Text>
        </Flex>
      </Box>

      {/* Navbar Action Buttons */}
      <Box
        position="fixed" // Fixed navbar
        top="50px" // Placed below the topbar
        left="0"
        right="0"
        zIndex="998" // Ensure it is below the topbar
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={paddingX}
        bg="white"
        boxShadow="lg"
        background="linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,240,240,0.9) 100%)"
        backdropFilter="blur(10px)"
        borderRadius="xl"
      >
        {/* Logo aligned right */}
        <Link href="/" passHref>
          <Box width="100px" height="100px" position="relative">
            <Image
              src="/logo_bgRemove.png"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Link>

        {/* Action Buttons aligned left */}
        <Flex gap="1rem" flexWrap="wrap">
          <Button
            variant="outline"
            color="black"
            borderColor="black"
            _hover={{ bg: 'green.100', color: 'green.700', borderColor: 'green.600' }}
          >
            {language === 'EN' ? 'About OSSP' : 'ওএসএসপি সম্পর্কে'}
          </Button>

          <Button
            variant="outline"
            color="black"
            borderColor="black"
            _hover={{ bg: 'green.100', color: 'green.700', borderColor: 'green.600' }}
          >
            {language === 'EN' ? 'Why OSSP' : 'কেন ওএসএসপি'}
          </Button>

          <Button
            variant="solid"
            fontSize="md"
            bgColor="blue.500"
            color="white"
            _hover={{ bg: 'blue.500' }}
          >
            {language === 'EN' ? 'Login' : 'লগইন'}
          </Button>

          <Button
            variant="outline"
            color="black"
            borderColor="black"
            _hover={{ bg: 'green.100', color: 'green.700', borderColor: 'green.600' }}
          >
            {language === 'EN' ? 'Sign Up' : 'সাইন আপ'}
          </Button>
        </Flex>
      </Box>

      {/* Add some padding to the top of the page content to avoid overlap */}
      <Box paddingTop="160px">
        {/* The rest of your page content goes here */}
      </Box>
    </>
  );
};

export default Navbar;
