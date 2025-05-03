'use client';
import { Box, Button, Icon, Text, Flex, useMediaQuery } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

// Framer Motion components
const MotionText = motion(Text);
const MotionButton = motion(Button);

// Component Constants (Best Practice)
const SLIDES = [
  {
    id: 1,
    imageUrl: 'https://api-devreact.oss.net.bd/uploads/sliderImage/d95b9a6b-4c36-4a1e-ab97-c6986081fa3c.jpg',
    title: 'Welcome to OSSP',
    buttonText: 'View All Services',
    buttonLink: '/services'
  },
  {
    id: 2,
    imageUrl: 'https://api-devreact.oss.net.bd/uploads/sliderImage/8d7da292-a8dc-4405-a1c7-28984240684d.jpg',
    title: 'Explore Our Services',
    buttonText: 'Get Started',
    buttonLink: '/get-started'
  }
];

const CustomSlider = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box w="100%" maxW="2000px" mt='20px' position="relative" overflow="hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
      >
        {SLIDES.map(slide => (
          <SwiperSlide key={slide.id}>
            <Box
              bgImage={`url(${slide.imageUrl})`}
              bgSize="cover"
              bgPos="center"
              height={{ base: '200px', md: '100px', lg: '500px' }}
              display="flex"
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-start' }}
              position="relative"
              px={{ base: 6, md: 12, lg: 20 }}
              borderRadius="md"
              overflow="hidden"
            >
              {/* Text Section */}
              <Flex
                alignItems="center"
                zIndex={2}
                flexDirection={{ base: 'column', md: 'row' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                {/* Yellow box - visible only on non-mobile */}
                {!isMobile && (
                  <Box w="6px" bg="yellow.400" mr={6} height="120px" />
                )}

                <Box>
                  {/* Title: Animate from top to bottom on mobile */}
                  <MotionText
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    color="white"
                    mb={4}
                    initial={{ opacity: 0, y: isMobile ? -30 : 0 }}  // For mobile, start above
                    animate={{ opacity: 1, y: 0 }}  // End at normal position
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {slide.title}
                  </MotionText>

                  {/* Button: Animate from bottom to top on mobile */}
                  <MotionButton
                    colorScheme="green"
                    size="md"
                    onClick={() => window.location.href = slide.buttonLink}
                    initial={{ opacity: 0, y: isMobile ? 30 : 0 }}  // For mobile, start below
                    animate={{ opacity: 1, y: 0 }}  // End at normal position
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    {slide.buttonText}
                  </MotionButton>
                </Box>
              </Flex>

              {/* Overlay Effect */}
              <Box position="absolute" top="0" left="0" right="0" bottom="0" bgGradient="linear(to-r, blackAlpha.700, transparent)" />
            </Box>
          </SwiperSlide>
        ))}

        {/* Custom Left Arrow */}
        <Box
          className="custom-prev"
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          zIndex={3}
          bg="white"
          p={3}
          borderRadius="50%"
          boxShadow="lg"
          cursor="pointer"
         
          transition="transform 0.3s ease, box-shadow 0.3s ease"
        >
          <Icon as={FaChevronLeft} w={6} h={6} />
        </Box>

        {/* Custom Right Arrow */}
        <Box
          className="custom-next"
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          zIndex={3}
          bg="white"
          p={3}
          borderRadius="50%"
          boxShadow="lg"
          cursor="pointer"
          transition="transform 0.3s ease, box-shadow 0.3s ease"
        >
          <Icon as={FaChevronRight} w={6} h={6} />
        </Box>
      </Swiper>
    </Box>
  );
};

export default CustomSlider;
