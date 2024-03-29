"use client";

import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Button, useToast } from "@chakra-ui/react";

import { Input, Loader } from "@/components";
import { useServices } from "@/services";
import { convertFileToBase64 } from "@/utils/helpers";

import { CompanyLogoInput, Section, SectionHeader } from ".";
import { AccountFormSchema, AccountFormDefaults, AccountFormInput } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export function AccountSettings() {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { company } = useServices();

  const { data, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: company.getCompany,
  });
  const { mutate, isPending } = useMutation({
    mutationFn: company.updateCompany,
    onSuccess: handleUpdateSuccess,
  });

  /* company data as form default values */
  const defaultValues = React.useMemo(() => {
    if (!data) return null;
    const companyData = data?.data;
    return { ...companyData?.profile, display_name: companyData?.display_name };
  }, [data]);

  async function handleSave({ company_logo, ...payload }: AccountFormInput) {
    // if company logo is a File convert to base64
    const logoPart = company_logo instanceof File ? { company_logo_b64: await convertFileToBase64(company_logo) } : {};
    const readyBody = { ...payload, ...logoPart };

    mutate(readyBody);
  }

  async function handleUpdateSuccess() {
    await queryClient.invalidateQueries({ queryKey: ["company"] });
    toast({
      title: "Account updated.",
      description: "Your account has been updated.",
      status: "success",
      position: "bottom-right",
      duration: 4000,
      isClosable: true,
    });
  }

  return (
    <Section>
      <SectionHeader>Account</SectionHeader>
      {isLoading ? <Loader h={500} /> : null}
      {!isLoading && defaultValues ? (
        <AccountForm defaultValues={defaultValues} isPending={isPending} onSave={handleSave} />
      ) : null}
    </Section>
  );
}

function AccountForm({
  defaultValues,
  onSave,
  isPending,
}: {
  defaultValues: AccountFormDefaults;
  onSave: (payload: AccountFormInput) => void;
  isPending: boolean;
}) {
  const { register, control, handleSubmit } = useForm({
    defaultValues,
    resolver: zodResolver(AccountFormSchema),
  });

  const options = [
    { value: "Healthcare and Pharmaceuticals", label: "Healthcare and Pharmaceuticals" },
    {
      value: "Information Technology (IT) and Software Services",
      label: "Information Technology (IT) and Software Services",
    },
    { value: "Finance and Banking", label: "Finance and Banking" },
    { value: "Retail and Consumer Goods", label: "Retail and Consumer Goods" },
    { value: "Manufacturing and Industrial Production", label: "Manufacturing and Industrial Production" },
  ];

  return (
    <form onSubmit={handleSubmit(onSave)} className="my-[30px] max-w-[466px] min-h-[55vh] grid content-start gap-5">
      <Input {...register("display_name")} label={"Company name"} />
      <Input {...register("contact_name")} label={"Contact name"} />
      <Input {...register("contact_email")} label={"Email"} />
      <Input {...register("industry")} type={"select"} options={options} label={"Industry"} />
      <Controller control={control} render={({ field }) => <CompanyLogoInput {...field} />} name={"company_logo"} />

      <Button
        py="6.5px"
        px="20px"
        size="sm"
        type="submit"
        variant="outline"
        colorScheme="blue"
        fontSize="10px"
        borderRadius="20px"
        justifySelf="start"
        disabled={isPending}
        isLoading={isPending}
        loadingText="Saving"
      >
        Save changes
      </Button>
    </form>
  );
}
