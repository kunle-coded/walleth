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

interface TransactionDetailItemType {
  item: string;
  value: string | number;
  weight?: string;
}

export type { TransactionType, TransactionDetailItemType };
