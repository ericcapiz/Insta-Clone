import {
  Box,
  Container,
  Flex,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <SkeletonCircle height={"10px"} w={"200px"} />
                <SkeletonCircle height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <SkeletonCircle w={"full"}>
              <Box h={"400px"}>Invisible</Box>
            </SkeletonCircle>
          </VStack>
        ))}
      {!isLoading && (
        <>
          {!isLoading &&
            posts.length > 0 &&
            posts.map((post) => <FeedPost key={post.id} post={post} />)}
        </>
      )}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            No posts found!
          </Text>
          <Text color={"red.400"}>
            Follow other users to see thier posts here
          </Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
