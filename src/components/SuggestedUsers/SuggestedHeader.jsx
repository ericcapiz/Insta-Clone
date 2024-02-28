import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingout } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  return (
    <Flex
      gap={4}
      alignItems={"center"}
      w={"full"}
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"} gap={6}>
        <Avatar
          gap={4}
          size={"lg"}
          src={authUser?.profilePicURL || "/profilepic.png"}
        />
        <Text gap={4} fontSize={14} fontWeight={"bold"}>
          {authUser?.username}
        </Text>
      </Flex>
      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        isLoading={isLoggingout}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
