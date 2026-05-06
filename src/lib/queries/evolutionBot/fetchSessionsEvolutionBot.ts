import { useQuery } from "@tanstack/react-query";

import { api } from "../api";
import { UseQueryParams } from "../types";
import { FetchSessionsEvolutionBotResponse } from "./types";

interface IParams {
  instanceName: string | null;
  EvolutionBotId: string | null;
  token?: string | null;
}

const queryKey = (params: Partial<IParams>) => ["EvolutionBot", "fetchSessions", JSON.stringify(params)];

export const fetchEvolutionBotSessions = async ({ instanceName, EvolutionBotId, token }: IParams) => {
  const response = await api.get(`/EvolutionBot/fetchSessions/${EvolutionBotId}/${instanceName}`, {
    headers: { apiKey: token },
  });
  return response.data;
};

export const useFetchSessionsEvolutionBot = (props: UseQueryParams<FetchSessionsEvolutionBotResponse> & Partial<IParams>) => {
  const { instanceName, token, EvolutionBotId, ...rest } = props;
  return useQuery<FetchSessionsEvolutionBotResponse>({
    ...rest,
    queryKey: queryKey({ instanceName }),
    queryFn: () =>
      fetchEvolutionBotSessions({
        instanceName: instanceName!,
        token,
        EvolutionBotId: EvolutionBotId!,
      }),
    enabled: !!instanceName && !!EvolutionBotId && (props.enabled ?? true),
  });
};
