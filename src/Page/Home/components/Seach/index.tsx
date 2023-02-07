import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import { UserContext } from "../../../../context/UserContext";
import { SeachContainer, SeachHeader, SeachInput } from "./style";

interface SearchInputProps {
  issuesLength: number;
  FetchIssues: (query?: string) => Promise<void>;
}

export function Seach({ FetchIssues, issuesLength }: SearchInputProps) {
  const { register, handleSubmit } = useForm();

  async function teste(data: any) {
    console.log("foi", data.query);
    await FetchIssues(data.query);
  }

  return (
    <SeachContainer onSubmit={handleSubmit(teste)}>
      <SeachHeader>
        <strong>Publicações</strong>
        <p>{issuesLength} publicações</p>
      </SeachHeader>
      <SeachInput
        placeholder="Buscar conteúdo"
        type="text"
        {...register("query")}
      />
    </SeachContainer>
  );
}
