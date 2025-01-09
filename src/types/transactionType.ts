interface TransactionType {
  id: number;
  nonce: number;
  amount: number;
  currency: string;
  gasLimit: number;
  gasUsed: number;
  baseFee: number;
  priorityFee: number;
  totalGasFee: number;
  maxFeeGas: number;
  total: number;
}

export type { TransactionType };
