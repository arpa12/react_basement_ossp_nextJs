'use client';

import { Box, Flex, Button, Text, Image, Tag, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { keyframes } from '@emotion/react';
import Link from 'next/link'; // Import Link for routing

const MediaSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const videos = [
    {
      title: 'Youth Leadership Summit 2023',
      category: 'Leadership',
      duration: '4 min 20 sec',
      image: '/media_image_two.jpg',
      videoUrl: 'https://www.youtube.com/embed/O5VOdMbBZlI?autoplay=1',
    },
    {
      title: 'Leadership Summit',
      category: 'Leadership',
      duration: '4 min 20 sec',
      image: '/media_image_one.jpg',
      videoUrl: 'https://www.youtube.com/embed/O5VOdMbBZlI?autoplay=1',
    },
    {
      title: 'Sustainable Development Goals Webinar',
      category: 'Webinar',
      duration: '7 min 45 sec',
      image: '/media_image_three.jpg',
      videoUrl: 'https://www.youtube.com/embed/O5VOdMbBZlI?autoplay=1',
    },
    {
      title: 'High-level political forum 2020',
      category: 'General',
      duration: '5 min 30 sec',
      image: '/media_image_four.jpg',
      videoUrl: 'https://www.youtube.com/embed/O5VOdMbBZlI?autoplay=1',
    },
  ];

  const repeatedVideos = [...videos, ...videos, ...videos]; // Duplicating to simulate infinite scroll
  const cardWidth = 300;

  const scrollSmoothly = (container: HTMLDivElement | null, offset: number) => {
    if (!container) return;

    const currentScroll = container.scrollLeft;
    const maxScroll = cardWidth * videos.length * 2;

    container.scrollBy({ left: offset, behavior: 'smooth' });

    setTimeout(() => {
      if (currentScroll >= maxScroll) {
        container.scrollTo({ left: videos.length * cardWidth, behavior: 'smooth' });
      }
    }, 1000);
  };

  useEffect(() => {
    const container = scrollRef.current;

    const autoplay = setInterval(() => {
      scrollSmoothly(container, cardWidth); // Auto scroll every 2 seconds
    }, 6000);

    return () => clearInterval(autoplay);
  }, []);

  const openModal = (video: any) => {
    setSelectedVideo(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo(null);
  };

  const zoomInOut = keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  `;

  return (
    <Box maxW="1300px" mx="auto" mt={10} px={4} position="relative">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6} color="green.700">
        MEDIA
      </Text>

      <Button
        aria-label="Scroll Left"
        onClick={() => scrollSmoothly(scrollRef.current, -cardWidth)}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        zIndex="1"
        bg="white"
        boxShadow="md"
      >
        <svg width="20" height="20" fill="#000" viewBox="0 0 24 24">
          <path d="M8 5l1.41 1.41L5.83 10H20v2H5.83l3.58 3.59L8 19l-6-6z" />
        </svg>
        
      </Button>

      <Button
        aria-label="Scroll Right"
        onClick={() => scrollSmoothly(scrollRef.current, cardWidth)}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        zIndex="1"
        bg="white"
        boxShadow="md"
      >
        <svg width="20" height="20" fill="#000" viewBox="0 0 24 24">
          <path d="M16 5l-1.41 1.41L18.17 10H4v2h14.17l-3.58 3.59L16 19l6-6z" />
        </svg>
      </Button>

      <Box
        h="320px"
        overflowX="auto"
        ref={scrollRef}
        css={{
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollBehavior: 'smooth',
        }}
      >
        <Flex w="max-content">
          {repeatedVideos.map((video, index) => (
            <Box
              key={index}
              flex="0 0 auto"
              scrollSnapAlign="start"
              w={{ base: '260px', md: `${cardWidth}px` }}
              mx="2"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              boxShadow="md"
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}
              onClick={() => openModal(video)}
            >
              <Box position="relative" h="200px">
                <Image
                  src={video.image}
                  alt={video.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <Box
                  position="absolute"
                  top="30%"
                  left="40%"
                  transform="translate(-50%, -50%)"
                  bg="green.500"
                  borderRadius="full"
                  w="70px"
                  h="70px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity={0.9}
                  css={{
                    animation: `${zoomInOut} 1.5s infinite`,
                  }}
                >
                  <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </Box>
              </Box>
              <Box p="4">
                <Flex justify="space-between" mb="2">
                  <Text fontSize="sm">{video.duration}</Text>
                </Flex>
                <Text fontWeight="bold">{video.title}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {selectedVideo && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedVideo.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <iframe
                  width="100%"
                  height="400px"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default MediaSection;
