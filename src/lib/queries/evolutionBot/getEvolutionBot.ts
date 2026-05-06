import { useQuery } from "@tanstack/react-query";

import { api } from "../api";
import { UseQueryParams } from "../types";
import { GetEvolutionBotResponse } from "./types";

interface IParams {
  instanceName: string;
  EvolutionBotId: string;
  token?: string | null;
}

const queryKey = (params: Partial<IParams>) => ["EvolutionBot", "getEvolutionBot", JSON.stringify(params)];

export const getEvolutionBot = async ({ instanceName, token, EvolutionBotId }: IParams) => {
  const response = await api.get(`/EvolutionBot/fetch/${EvolutionBotId}/${instanceName}`, {
    headers: { apiKey: token },
  });
  if (Array.isArray(response.data)) {
    return response.data[0];
  }
  return response.data;
};

export const useGetEvolutionBot = (props: UseQueryParams<GetEvolutionBotResponse> & Partial<IParams>) => {
  const { instanceName, token, EvolutionBotId, ...rest } = props;
  return useQuery<GetEvolutionBotResponse>({
    ...rest,
    queryKey: queryKey({ instanceName }),
    queryFn: () =>
      getEvolutionBot({
        instanceName: instanceName!,
        token,
        EvolutionBotId: EvolutionBotId!,
      }),
    enabled: !!instanceName && !!EvolutionBotId && (props.enabled ?? true),
  });
};
