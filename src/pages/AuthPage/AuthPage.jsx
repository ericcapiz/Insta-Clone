import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();
  const isSignup = location.state?.isSignup;

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justify={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="logo" />
          </Box>
          <VStack spacing={4} align={"stretch"}>
            <AuthForm isSignup={isSignup} />
            <Box textAlign={"center"}>Download App</Box>
            <Flex gap={5} justify={"center"}>
              <Image src="/playstore.png" h={10} alt="Playstore logo" />
              <Image src="/microsoft.png" h={10} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
