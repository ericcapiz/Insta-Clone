import React from "react";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} overflow={"hidden"} borderRadius={4}>
        <Image src={post.imageURL} alt="post image" w={"full"} />
      </Box>
      <PostFooter post={post} />
    </>
  );
};

export default FeedPost;
