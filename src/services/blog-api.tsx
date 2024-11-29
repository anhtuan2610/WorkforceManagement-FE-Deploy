import { get } from "./axios-config";

type TBaseResponse<T> = {
  code: number;
  message: string;
  data: T;
};

type TAllBlogResposne = TBaseResponse<TAllBlogData>;

type TAllBlogData = {
  totalBlog: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  blogs: [
    {
      blogId: number;
      title: string;
      content: string;
      createdDate: string;
      authorId: number;
      authorName: string;
    }
  ];
};

export async function getAllBlog({
  SearchString,
  sortBy,
  PageNumber,
  PageSize,
}: {
  SearchString: string;
  sortBy?: string;
  PageNumber: number;
  PageSize: number;
}) {
  return get<TAllBlogResposne>({
    url: "/Blog/GetAllBlog",
    params: { SearchString, sortBy, PageNumber, PageSize },
  });
}
