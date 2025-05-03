'use client';

import { Box, Container, Grid, GridItem, Stack, Text, Heading, Link } from '@chakra-ui/react';
import Image from 'next/image'; // Import Image from Next.js for image optimization

const Footer = () => {
  return (
    <Box
      bg="green.700"
      color="white"
      py="30px"
      width="100%"
      position="relative"
      mt="50px"
      boxShadow="0 4px 10px rgba(0, 0, 0, 0.2)"
      transform="scale(1)"
      transition="all 0.3s ease-in-out"
    >
      <Container maxW="container.xl" position="relative">
        <Grid
          templateColumns={{
            base: "1fr", // 1 column for small screens
            md: "1fr 1fr", // 2 columns for medium screens
            lg: "1fr 1fr 1fr 1fr", // 4 columns for large screens
          }}
          gap={8}
          alignItems="flex-start"
        >
          {/* First Column - Technical Support */}
          <GridItem ml={{ base: "0", md: "20px" }}>
            <Stack spacing={4}>
              <Text fontWeight="bold" fontSize="lg" mb='-10'>সার্ভিক তত্ত্বাবধানে</Text>
              <Box mt={2} display="flex" >
                <Image
                  src="/logo_bgRemove.png" // Use the image path from the public folder
                  alt="OSS Platform"
                  width={150} // Set width and height for optimization
                  height={150}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Text fontWeight="bold" fontSize="lg" mt='-11'>কারিগরি সহযোগিতায়</Text>
              <Box display="flex" >
                <Image
                  src="/company.png" // Use the image path from the public folder
                  alt="Business Automation"
                  width={150} // Set width and height for optimization
                  height={150}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Stack>
          </GridItem>

          {/* Second Column - Services */}
          <GridItem ml={{ base: "0", md: "20px" }}>
            <Heading as="h3" size="md" mb={4}>সেবা</Heading>
            <Stack spacing={2}>
              <Link href="#">প্রাক-নিবন্ধন</Link>
              <Link href="#">নিবন্ধন</Link>
              <Link href="#">প্রাক-নিবন্ধন বিষয়ক</Link>
              <Link href="#">অভিযোগ</Link>
            </Stack>
          </GridItem>

          {/* Third Column - Others */}
          <GridItem ml={{ base: "0", md: "20px" }}>
            <Heading as="h3" size="md" mb={4}>অন্যান্য</Heading>
            <Stack spacing={2}>
              <Link href="#">শর্তাবলী</Link>
              <Link href="#">জিজ্ঞাসা</Link>
            </Stack>
          </GridItem>

          {/* Fourth Column - Important Links */}
          <GridItem mr={{ base: "0", lg: "20px" }}>
            <Heading as="h3" size="md" mb={4}>গুরুত্বপূর্ণ লিংকসমূহ</Heading>
            <Stack spacing={2}>
              <Link href="#">ধর্ম বিষয়ক মন্ত্রণালয়</Link>
              <Link href="#">বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয়</Link>
              <Link href="#">বিমান বাংলাদেশ এয়ারলাইন্স</Link>
              <Link href="#">বাংলাদেশ হোমিওপ্যাথি</Link>
              <Link href="#">ইসলামিক ফাউন্ডেশন</Link>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
