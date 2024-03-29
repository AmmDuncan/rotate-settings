import React from "react";

import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

import { useQuery } from "@tanstack/react-query";
import { Avatar, Box, Flex, Grid, Text } from "@chakra-ui/react";

import { useServices } from "@/services";
import { UsersIcon } from "@/components/icons";
import { Loader, Table } from "@/components";

import { UserData } from "@/types";
import { Section, SectionHeader } from ".";

dayjs.extend(RelativeTime);

type TableCellProps<T extends Record<string, any> = { id: string }> = Readonly<{
  getValue: () => any;
  row: {
    original: {
      id: string;
    } & T;
  };
}>;

export function AllUsers() {
  const { user } = useServices();

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: user.getUserList,
  });

  return (
    <Section>
      <SectionHeader>All users</SectionHeader>

      {isLoading ? <Loader h={500} /> : null}
      {!isLoading ? <UsersTable data={data?.data ?? []} /> : null}
    </Section>
  );
}

function UsersTable({ data }: Readonly<{ data: UserData[] }>) {
  const columns = [
    {
      accessorKey: "name",
      header: NameHeader,
      cell: NameCell,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: RoleCell,
    },
    {
      accessorKey: "last_login",
      header: "Last Active",
      cell: LastActiveCell,
    },
  ];

  return (
    <Box mt={6} minH={"55vh"}>
      <Table columns={columns} data={data} />
    </Box>
  );
}

function NameHeader() {
  return (
    <Flex as={"span"} alignItems={"center"} gap={2}>
      <Grid gridAutoFlow={"column"} w={"26px"} h={"26px"} bg={"gray.50"} borderRadius={"50%"} placeContent={"center"}>
        <UsersIcon />
      </Grid>
      <Text>Name</Text>
    </Flex>
  );
}

function RoleCell({ row }: TableCellProps<UserData>) {
  return row.original.user_metadata.role;
}

function NameCell({ row }: TableCellProps<UserData>) {
  const { name, email, picture } = row.original;
  return (
    <Flex gap="2" alignItems="center">
      <Avatar w="30px" h="30px" name={name} src={picture} />
      <Grid flexShrink="1" gap={"4px"}>
        <Text color={"gray.900"} fontSize="md" noOfLines={1}>
          {name}
        </Text>
        <Text color={"gray.400"} fontSize="sm" noOfLines={1}>
          {email}
        </Text>
      </Grid>
    </Flex>
  );
}

function LastActiveCell({ getValue }: TableCellProps<UserData>) {
  return dayjs(getValue()).fromNow();
}
