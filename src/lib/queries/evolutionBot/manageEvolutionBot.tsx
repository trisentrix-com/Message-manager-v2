import { EvolutionBot, EvolutionBotSettings } from "@/types/Evolution.types";

import { api } from "../api";
import { useManageMutation } from "../mutateQuery";

interface CreateEvolutionBotParams {
  instanceName: string;
  token?: string;
  data: EvolutionBot;
}

const createEvolutionBot = async ({ instanceName, token, data }: CreateEvolutionBotParams) => {
  const response = await api.post(`/EvolutionBot/create/${instanceName}`, data, { headers: { apikey: token } });
  return response.data;
};

interface UpdateEvolutionBotParams extends CreateEvolutionBotParams {
  EvolutionBotId: string;
}

const updateEvolutionBot = async ({ instanceName, token, EvolutionBotId, data }: UpdateEvolutionBotParams) => {
  const response = await api.put(`/EvolutionBot/update/${EvolutionBotId}/${instanceName}`, data, {
    headers: { apikey: token },
  });
  return response.data;
};

interface DeleteEvolutionBotParams {
  instanceName: string;
  EvolutionBotId: string;
}
const deleteEvolutionBot = async ({ instanceName, EvolutionBotId }: DeleteEvolutionBotParams) => {
  const response = await api.delete(`/EvolutionBot/delete/${EvolutionBotId}/${instanceName}`);
  return response.data;
};

interface SetDefaultSettingsEvolutionBotParams {
  instanceName: string;
  token: string;
  data: EvolutionBotSettings;
}
const setDefaultSettingsEvolutionBot = async ({ instanceName, token, data }: SetDefaultSettingsEvolutionBotParams) => {
  const response = await api.post(`/EvolutionBot/settings/${instanceName}`, data, { headers: { apikey: token } });
  return response.data;
};

interface ChangeStatusEvolutionBotParams {
  instanceName: string;
  token: string;
  remoteJid: string;
  status: string;
}
const changeStatusEvolutionBot = async ({ instanceName, token, remoteJid, status }: ChangeStatusEvolutionBotParams) => {
  const response = await api.post(
    `/EvolutionBot/changeStatus/${instanceName}`,
    {
      remoteJid,
      status,
    },
    { headers: { apikey: token } },
  );
  return response.data;
};

export function useManageEvolutionBot() {
  const setDefaultSettingsEvolutionBotMutation = useManageMutation(setDefaultSettingsEvolutionBot, {
    invalidateKeys: [["EvolutionBot", "fetchDefaultSettings"]],
  });
  const changeStatusEvolutionBotMutation = useManageMutation(changeStatusEvolutionBot, {
    invalidateKeys: [
      ["EvolutionBot", "getEvolutionBot"],
      ["EvolutionBot", "fetchSessions"],
    ],
  });
  const deleteEvolutionBotMutation = useManageMutation(deleteEvolutionBot, {
    invalidateKeys: [
      ["EvolutionBot", "getEvolutionBot"],
      ["EvolutionBot", "findEvolutionBot"],
      ["EvolutionBot", "fetchSessions"],
    ],
  });
  const updateEvolutionBotMutation = useManageMutation(updateEvolutionBot, {
    invalidateKeys: [
      ["EvolutionBot", "getEvolutionBot"],
      ["EvolutionBot", "findEvolutionBot"],
      ["EvolutionBot", "fetchSessions"],
    ],
  });
  const createEvolutionBotMutation = useManageMutation(createEvolutionBot, {
    invalidateKeys: [["EvolutionBot", "findEvolutionBot"]],
  });

  return {
    setDefaultSettingsEvolutionBot: setDefaultSettingsEvolutionBotMutation,
    changeStatusEvolutionBot: changeStatusEvolutionBotMutation,
    deleteEvolutionBot: deleteEvolutionBotMutation,
    updateEvolutionBot: updateEvolutionBotMutation,
    createEvolutionBot: createEvolutionBotMutation,
  };
}
