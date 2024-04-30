import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  cover_image: string;
  author: string;
  id: number;
}

const BookCard = (props: Props) => {
  const { title, cover_image, author, id } = props;

  return (
    <Card className="bg-white text-black dark:bg-rose-700 dark:text-white border-rose-400 shadow-md shadow-gray-600 dark:shadow-white">
      <Link to={`/books/${id}`}>
        <CardContent className="flex flex-col gap-1">
          <img
            className="aspect-[3/4] h-auto w-auto object-cover"
            src={cover_image}
            alt={title}
          />
          <p className="font-bold text-lg text-center leading-5 mt-2">
            {title}
          </p>
          <p className="font-light text-base text-center">{author}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BookCard;
