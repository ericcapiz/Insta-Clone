import {
  Flex,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ post, username, isProfilePage }) => {
  const [comment, setComment] = useState("");
  const { isCommenting, handlePostComment } = usePostComment();
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);

  const { handleLikePost, isLiked, likes } = useLikePost(post);

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} mb={2} pt={0} mt={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => commentRef.current.focus()}
        >
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
            {username}{" "}
            <Text as={"span"} fontWeight={700}>
              Ready to duel
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 1,000 comments
          </Text>
        </>
      )}
      {authUser && (
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={12}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                fontWeight={600}
                color={"blue.500"}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
