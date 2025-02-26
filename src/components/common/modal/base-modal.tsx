import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BaseModalProps {
  title: string;
  description?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const BaseModal = ({
  title,
  description,
  trigger,
  children,
}: BaseModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        data-lenis-prevent
        className="!rounded-[36px] !px-0 !py-6 min-w-[550px]"
      >
        <DialogHeader className="!px-6">
          <DialogTitle className="text-[28px]">{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <ScrollArea className="max-h-[80vh] px-6  overflow-y-auto">
          <div className="py-1">{children}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BaseModal;
