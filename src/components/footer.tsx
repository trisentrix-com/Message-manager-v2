import { useMemo } from "react";

import { useVerifyServer } from "@/lib/queries/auth/verifyServer";
import { getToken, TOKEN_ID } from "@/lib/queries/token";

import { Button } from "./ui/button";

function Footer() {
  const url = getToken(TOKEN_ID.API_URL);
  const { data: serverInfo } = useVerifyServer({ url });

  const version = useMemo(() => serverInfo?.version, [serverInfo]);

  const links = [
    {
      name: "Website",
      url: "https://message.com",
    },
    {
      name: "Support",
      url: "mailto:support@message.com",
    },
    {
      name: "GitHub",
      url: "https://github.com/message-com",
    },
    {
      name: "Docs",
      url: "https://docs.message.com",
    },
  ];

  return (
    <footer className="flex w-full flex-col items-center justify-between p-6 text-xs text-secondary-foreground sm:flex-row">
      <div className="flex items-center space-x-3 divide-x">
        <span>
          Client Name: <strong>message</strong>
        </span>

        {version && version !== "" && (
          <span className="pl-3">
            Version: <strong>{version}</strong>
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {links.map((link) => (
          <Button variant="link" asChild key={link.url} size="sm" className="text-xs">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
}

export { Footer };
