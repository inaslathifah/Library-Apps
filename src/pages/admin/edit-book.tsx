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
import { getDetailBook } from "@/utils/apis/books/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";


interface Props {
  id: number;
}

function EditBook(props: Props) {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const { payload } = await getDetailBook(`${id}`);

      setTitle(payload.title);
      setAuthor(payload.author);
      setIsbn(payload.isbn);
      setCategory(payload.category);
      setDesc(payload.description);
      // setCoverImage(payload.cover_image);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-slate-600 hover:bg-slate-700">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-rose-400 text-white border-black">
        <form>
          <DialogHeader>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogDescription className="text-white">Update your book here</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                className="col-span-3 bg-slate-200 text-black"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Author
              </Label>
              <Input
                id="author"
                value={author}
                className="col-span-3 bg-slate-200 text-black"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                ISBN
              </Label>
              <Input
                id="isbn"
                value={isbn}
                className="col-span-3 bg-slate-200 text-black"
                onChange={(e) => {
                  setIsbn(e.target.value);
                }}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Category
              </Label>
              <select
                className="w-[180px] bg-slate-200 text-black px-2 py-1 border border-slate-200"
                name="category"
                id="category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                value={category}
              >
                <option value="-">Select a Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Self-development">Self Development</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="deskripsi" className="text-right">
                Deskripsi
              </Label>
              <textarea
                id="deskripsi"
                value={desc}
                className="min-h-[100px]  p-3 col-span-3 bg-slate-200 text-black rounded-md border border-slate-200"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Cover Image
              </Label>
              <Input
                type="file"
                id="cover-image"
                value=""
                className="col-span-3 bg-slate-200 text-black"
                readOnly
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-white text-black hover:bg-rose-300">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditBook;
