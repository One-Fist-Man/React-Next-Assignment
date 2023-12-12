import { QueryKeys } from "@/enums/enums";
import { useQuery } from "@tanstack/react-query";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const useSets = () => {
  return useQuery({
    queryKey: [QueryKeys.Sets],
    queryFn: async () => {
      const sets = await PokemonTCG.getAllSets();
      return sets;
    },
    enabled: true,
    refetchOnMount: false,
  });
};

export const useSetsByID = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.Set],
    queryFn: async () => {
      const sets = await PokemonTCG.findSetByID(id);
      console.log({sets})
      return sets;
    },
    enabled: true,
    refetchOnMount: false,
  });
};
