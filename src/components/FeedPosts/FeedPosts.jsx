import { Box, Container, Flex, SkeletonCircle, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <SkeletonCircle height={"10px"} w={"200px"} />
                <SkeletonCircle height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <SkeletonCircle h={"500px"} w={"full"}>
              <Box h={"500px"}>Invisible</Box>
            </SkeletonCircle>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost username="Seto" img="/img1.png" avatar="/img1.png" />
          <FeedPost username="Yugi" img="/img2.png" avatar="/img2.png" />
          <FeedPost username="Joey" img="/img3.png" avatar="/img3.png" />
          <FeedPost username="Atem" img="/img4.png" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
