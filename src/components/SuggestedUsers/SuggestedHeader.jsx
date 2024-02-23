import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex
      gap={4}
      alignItems={"center"}
      w={"full"}
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"} gap={6}>
        <Avatar gap={4} name="Seto" size={"lg"} src="/profilepic.png" />
        <Text gap={4} fontSize={14} fontWeight={"bold"}>
          Seto
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Logout
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
