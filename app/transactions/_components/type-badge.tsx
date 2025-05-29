import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-greencredit font-bold text-primary hover:bg-greencredit">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Crédito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 text-danger hover:bg-danger/10">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Débito
      </Badge>
    );
  }
  return (
    <Badge className="font bold bg-white/10 text-white hover:bg-white/10">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
