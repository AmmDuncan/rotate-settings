"use client";

import React from "react";

import Image from "next/image";
import { Avatar, Flex, Grid, Text } from "@chakra-ui/react";

import Logo from "@/assets/images/logo.png";
import { useAuth } from "@/components/AuthContext";

export function Navbar() {
  const { user } = useAuth();

  return (
    <Flex as="nav" bg="white" px="6" gap={10} minH="76px" alignItems="center" justifyContent="space-between">
      <Image src={Logo} alt={"Rotate logo"} width={150} />

      {user ? (
        <Flex gap="2" alignItems="center" className="inter">
          <Grid flexShrink="1">
            <Text fontSize="md" fontWeight="500" noOfLines={1}>
              {user.name}
            </Text>
            <Text fontSize="sm" noOfLines={1}>
              {user.email}
            </Text>
          </Grid>
          <Avatar w="40px" h="40px" name={user.name} src={user.picture} />
        </Flex>
      ) : (
        <span />
      )}
    </Flex>
  );
}
