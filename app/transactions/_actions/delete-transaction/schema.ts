import { z } from "zod";

export const deleteTransaction = z.object({
  transactionId: z.string().uuid(),
});

export type DeleteTransactionSchema = z.infer<typeof deleteTransaction>;
