"use client";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { Box, Text } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

import { AccountSettings, AllUsers } from "./_components";
import React from "react";

export default function Settings() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTabIndex = Number(searchParams.get("tab") ?? 0);
  const tabs = React.useMemo(() => ["Account", "User management"], []);

  // Update page title
  React.useEffect(() => {
    document.title = `${tabs[activeTabIndex]} | Rotate Settings`;
  }, [activeTabIndex, tabs]);

  function isActive(index: number) {
    return activeTabIndex === index;
  }

  function handleTabChange(newValue: number) {
    router.replace(`${location.origin}${location.pathname}?tab=${newValue}`);
  }

  return (
    <Box py="27px" className="container">
      <Text fontSize="h1" fontWeight="semibold" mb={8} className={"avenir-next tracking-[-0.01em]"}>
        Settings
      </Text>
      <Tabs defaultIndex={activeTabIndex} colorScheme="blue" onChange={handleTabChange}>
        <TabList gap={"44px"} borderBottomWidth={1} mb={8} pl={1}>
          {tabs.map((tab, index) => (
            <Tab
              mb={"0"}
              key={tab}
              p={0}
              letterSpacing={"0.01em"}
              lineHeight={"27px"}
              fontWeight={isActive(index) ? "700" : "400"}
              transition={"all 0.3s ease"}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <AccountSettings />
          </TabPanel>
          <TabPanel p={0}>
            <AllUsers />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
