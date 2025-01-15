import React from "react";

interface AccountOverviewProps {
  filterRef: React.RefObject<HTMLDivElement>;
  isTop: boolean;
}

type TokenType = {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
};

export type { AccountOverviewProps, TokenType };
