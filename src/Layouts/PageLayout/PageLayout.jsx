import { Box, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Comments/Navbar/Navbar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const renderSidebar = pathname !== "/auth" && user;
  const renderNavbar = !user && !loading && pathname !== "/auth";
  const authenticatedUser = !user && loading;

  if (authenticatedUser) return <PageLayoutSpinner />;

  return (
    <Flex flexDirection={renderNavbar ? "column" : "row"}>
      {renderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {renderNavbar ? <Navbar /> : null}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70%)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
const PageLayoutSpinner = () => {
  <Flex
    flexDirection={"column"}
    h={"100vh"}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <Spinner size={"xl"} />
  </Flex>;
};
