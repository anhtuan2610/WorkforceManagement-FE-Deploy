// src/components/BlogPage.tsx

import React, { useState } from "react";
import BlogPostCard from "../../components/Blog/BlogPostCard";
import AddNew from "../../components/Blog/AddNew";
import { Modal } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getAllBlog } from "../../services/blog-api";
import { Pagination } from "../../components/Pagination";
import { useDebounce } from "../../hooks/useDebounce";
// const blogPosts = [
//   {
//     author: "Alec Whitten",
//     date: "1 Jan 2023",
//     title: "Bill Walsh leadership lessons",
//     description:
//       "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     tags: ["Leadership", "Management"],
//     imageUrl:
//       "https://tailieu.antoanthongtin.vn/files/images/site-2/20240827/17000-lo-hong-moi-de-doa-an-ninh-mang-viet-nam-trong-nua-dau-2024-17-27082024160904.png",
//   },
//   {
//     author: "Alec Whitten1",
//     date: "1 Jan 2023",
//     title: "Bill Walsh leadership lessons",
//     description:
//       "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     tags: ["Leadership", "Management"],
//     imageUrl:
//       "https://vina-aspire.com/wp-content/uploads/2019/08/Hackr-attaching-Car.jpg",
//   },
//   {
//     author: "Alec Whitten2",
//     date: "1 Jan 2023",
//     title: "Bill Walsh leadership lessons",
//     description:
//       "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     tags: ["Leadership", "Management"],
//     imageUrl:
//       "https://media.istockphoto.com/id/1420039900/vi/anh/cyber-security-security-ransomware-email-phishing-c%C3%B4ng-ngh%E1%BB%87-m%C3%A3-h%C3%B3a-th%C3%B4ng-tin-k%E1%BB%B9-thu%E1%BA%ADt-s%E1%BB%91-%C4%91%C6%B0%E1%BB%A3c.jpg?s=612x612&w=0&k=20&c=N8r6hbstnXisoQQQzQ3uP5JUwO04veRJ_IceAJt0Ih8=",
//   },
//   {
//     author: "Alec Whitten3",
//     date: "1 Jan 2023",
//     title: "Bill Walsh leadership lessons",
//     description:
//       "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     tags: ["Leadership", "Management"],
//     imageUrl:
//       "https://chuyendoiso.ninhthuan.gov.vn/portal/Photos/2023-01/44eb9d926cc9b9bd10.jpg",
//   },
//   {
//     author: "Alec Whitten4",
//     date: "1 Jan 2023",
//     title: "Bill Walsh leadership lessons",
//     description:
//       "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     tags: ["Leadership", "Management"],
//     imageUrl:
//       "https://techvccloud.mediacdn.vn/2019/8/1/websitesecurity2-15646313376091582652042-crop-15646313422892056293204.png",
//   },
//   {
//     author: "Alec Whitten5",
//     date: "1 Jan 2023",
//     title: "Bill Walsh leadership lessons",
//     description:
//       "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     tags: ["Leadership", "Management"],
//     imageUrl:
//       "https://vietnetco.vn/wp-content/uploads/2020/05/network-security-bao-mat-va-he-thong-an-ninh-mang-toan-dien.jpg",
//   },
// ];

const BlogPage: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchString, setSearchString] = useState<string>("");
  const debouncedSearchString = useDebounce(searchString, 300);
  const [pageSize, setPageSize] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data } = useQuery({
    queryKey: ["fetchAllBlog", debouncedSearchString, currentPage, pageSize],
    queryFn: async () => {
      const response = await getAllBlog({
        SearchString: searchString,
        PageNumber: currentPage,
        PageSize: pageSize,
      });
      return response;
    },
    enabled: !!debouncedSearchString || debouncedSearchString === "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end">
        <button
          className="px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200"
          onClick={showModal}
        >
          Add New Blog
        </button>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddNew />
      </Modal>
      <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-8 bg-white">
        <div className="relative">
          <button
            id="dropdownActionButton"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
            type="button"
          >
            <span className="sr-only">Action button</span>
            Filter
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdownAction"
            className={`${
              dropdownOpen ? "" : "hidden"
            } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
          >
            <ul
              className="py-1 text-sm text-gray-700"
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Reward
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Promote
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Activate account
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search blog by blog name"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-6">Knowledge Sharing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data ? (
          data.data.blogs.map((item, index) => (
            <>
              <BlogPostCard
                key={index}
                id={item.blogId}
                author={item.authorName}
                date={item.createdDate}
                title={item.title}
                description={item.content}
                //   tags={post.tags}
                //   imageUrl={post.imageUrl}
              />
            </>
          ))
        ) : (
          <div>No blog available</div>
        )}
      </div>

      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-10"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {data?.data.blogs.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {data?.data.totalBlog}
          </span>
        </span>
        <div className="flex items-center gap-2">
          <div>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              <option value="10">10 Record</option>
              <option value="15">15 Record</option>
              <option value="20">20 Record</option>
              <option value="30">30 Record</option>
            </select>
          </div>
          {data && (
            <Pagination
              totalPage={data?.data.totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default BlogPage;
