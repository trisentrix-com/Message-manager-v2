import { Webhook } from "@/types/Evolution.types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type FetchWebhookResponse = Omit<Webhook, "base64" | "byEvents"> & {
  webhookBase64: boolean;
  webhookByEvents: boolean;
};
