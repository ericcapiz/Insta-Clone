import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifyContent={"center"}
        alignSelf={"self-start"}
        mx={"auto"}
      >
        <Avatar name="Seto Kaiba" src="/profilepic.png" alt="profile pic" />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>Seto</Text>
          <Flex gap={4} alignItems={"center"} justify={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              135
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              45
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Seto
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          You're a 3rd rate duelist with a 4th rate deck!
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
