import { Flex, Grid, Text } from "@chakra-ui/react";
import { ImagePlusIcon } from "@/components/icons/ImagePlusIcon";
import Image from "next/image";
import { BuildingIcon } from "@/components/icons/BuildingIcon";
import React from "react";

export function CompanyLogoInput({
  value,
  onChange,
}: {
  value: string | File | null;
  onChange: (value: File | null) => void;
}) {
  function getValueAsURL(value: File | string) {
    return typeof value === "string" ? value : URL.createObjectURL(value!);
  }

  return (
    <div>
      <Text className="block text-[13px] leading-[18px] text-gray-600 mb-2 cursor-pointer">Company Logo</Text>
      <Flex
        as={"label"}
        gap={3}
        alignItems="center"
        py={3}
        px={5}
        borderRadius="8px"
        cursor="pointer"
        className="border border-primary/30 align-self-start hover:border-primary"
      >
        <input accept={"image/*"} type="file" className="hidden" onChange={(e) => onChange(e.target.files?.[0]!)} />

        <div className="relative">
          <Grid
            p={2}
            w={"20px"}
            h={"20px"}
            borderRadius={"50%"}
            placeContent={"center"}
            bg={"white"}
            boxShadow={"0px 4px 8px 0px rgba(126, 124, 142, 0.1)"}
            position={"absolute"}
            right={"0"}
            zIndex={"10"}
          >
            <ImagePlusIcon />
          </Grid>
          {value ? (
            <Image
              src={getValueAsURL(value)}
              alt={""}
              width={60}
              height={60}
              className="object-cover h-[60px] w-[60px] rounded-full"
            />
          ) : null}
          {!value ? (
            <Grid
              placeContent="center"
              borderRadius="50%"
              w={"60px"}
              h={"60px"}
              bg={"gray.50"}
              className="ring-1 ring-primary/30 ring-offset-2"
            >
              <BuildingIcon />
            </Grid>
          ) : null}
        </div>

        <Text color="primary" fontSize="10px">
          Upload company logo
        </Text>
      </Flex>
    </div>
  );
}
