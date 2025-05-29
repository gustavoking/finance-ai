import { ArrowDownUp } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const AddTransactionButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full font-bold">
            Adicionar Transação
            <ArrowDownUp className="ml-1" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Transação</DialogTitle>
            <DialogDescription>Insira as informações abaixo</DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button variant="outline">Cancelar</Button>
            <Button className="hover:bg-green-800">Adicionar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTransactionButton;
