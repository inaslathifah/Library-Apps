import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function EditBorrow() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-slate-600 hover:bg-slate-700">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-rose-400 text-white border-black">
        <DialogHeader>
          <DialogTitle>Edit Borrow</DialogTitle>
          <DialogDescription className="text-white">Update your book here</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              User
            </Label>
            <Input
              id="user"
              value=""
              className="col-span-3 bg-slate-200 text-black"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Book
            </Label>
            <Input
              id="book"
              value=""
              className="col-span-3 bg-slate-200 text-black"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Borrow Date
            </Label>
            <Input
              type="date"
              id="borrow-date"
              value=""
              className="col-span-3 bg-slate-200 text-black"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Due Date
            </Label>
            <Input
              type="date"
              id="due-date"
              value=""
              className="col-span-3 bg-slate-200 text-black"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Return Date
            </Label>
            <Input
              type="date"
              id="return-date"
              value=""
              className="col-span-3 bg-slate-200 text-black"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-white text-black hover:bg-rose-300">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditBorrow;
