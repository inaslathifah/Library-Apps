import { FormEvent, useState } from "react";
import { addNewBook } from "@/utils/apis/books/api";

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
import { toast } from "sonner";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [coverImage, setCoverImage] = useState<File>(new File([], ""));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const modeType: "add" | "edit" = "add";
    const body = {
      mode: modeType,
      title,
      author,
      isbn,
      category,
      description: desc,
      cover_image: coverImage,
    };

    try {
      const result = await addNewBook(body);

      toast(result.message);
    } catch (error) {
      toast((error as Error).message);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-rose-500 hover:bg-rose-700 ">+ Add Book</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-rose-400 text-white border-black">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a Book</DialogTitle>
            <DialogDescription className="text-white">Add your book here</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
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
              <Label htmlFor="author" className="text-right">
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
              <Label htmlFor="isbn" className="text-right">
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
              <Label htmlFor="category" className="text-right">
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
                className="min-h-[100px] p-3 col-span-3 bg-slate-200 text-black rounded-md border border-white"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cover-image" className="text-right">
                Cover Image
              </Label>
              <Input
                type="file"
                id="cover-image"
                className="col-span-3 bg-slate-200 text-black"
                onChange={(e) => {
                  if (e.target.files) {
                    setCoverImage(e.target.files[0]);
                  }
                }}
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

export default AddBook;
