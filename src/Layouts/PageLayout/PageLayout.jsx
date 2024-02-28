import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const renderSidebar = pathname !== "/auth" && user;
  return (
    <div>
      <Flex>
        {renderSidebar ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>
        ) : null}
        <Box
          flex={1}
          w={{ base: "calc(100% - 70%)", md: "calc(100% - 240px)" }}
        >
          {children}
        </Box>
      </Flex>
    </div>
  );
};

export default PageLayout;
