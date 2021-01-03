import Link from "next/link";
import { useState, useRef } from "react";
import {
  Flex,
  Box,
  Button,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useUser } from "utils/auth/useUser";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <a href={to}>{children}</a>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { user, logout } = useUser() as any;
  const initialFocusRef = useRef();
  console.log(user);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      p={4}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Box
          mw="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        >
          <Link href="/">
            <Text fontSize="lg" fontWeight="bold" cursor="pointer">
              Twice Polls
            </Text>
          </Link>
        </Box>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Link href="/lists">
            <MenuItem isLast={false}>Lists</MenuItem>
          </Link>

          {!user?.id ? (
            <MenuItem isLast={false} onClick={(e: Event) => e.preventDefault()}>
              <Button
                size="sm"
                rounded="md"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={["white", "white", "primary.500", "primary.500"]}
                _hover={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.600",
                    "primary.600",
                  ],
                }}
              >
                Login
              </Button>
            </MenuItem>
          ) : (
            <Popover initialFocusRef={initialFocusRef}>
              <PopoverTrigger>
                <Wrap>
                  <WrapItem>
                    <Avatar name="Dan Abrahmov" src={user.avatar} />
                  </WrapItem>
                </Wrap>
              </PopoverTrigger>
              <PopoverContent alignItems="center">
                <PopoverArrow />
                <PopoverBody style={{ display: "grid" }}>
                  <Text fontSize={20}>{user.name}</Text>
                  <div
                    style={{
                      height: 10,
                    }}
                  />

                  <Button
                    colorScheme="red"
                    ref={initialFocusRef}
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;