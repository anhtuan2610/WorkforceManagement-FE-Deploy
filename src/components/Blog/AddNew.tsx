import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    postContent: string;
    title: string;
    mediaFile: FileList | null;
};

const AddNew: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const onSubmit = (data: FormData) => {
        console.log("Content:", data.postContent);
        console.log("Content:", data.title);
        console.log("Media File:", data.mediaFile);
        reset();
        setPreviewImage(null);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg w-96 mx-auto mt-10">
            <div className="flex items-center gap-2 mb-3">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Avatar"
                    className="rounded-full"
                />
                <div>
                    <div className="font-bold text-sm">Giang Phạm</div>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <label htmlFor="title">Title</label>
                <textarea
                    id="title"
                    {...register("title", { required: true })}
                    className="w-full border rounded-lg p-2 text-sm mb-3"
                    placeholder="Phạm ơi, bạn đang nghĩ gì thế?"
                    rows={4}
                />
                <label htmlFor="postContent">Content</label>
                <textarea
                    id="postContent"
                    {...register("postContent", { required: true })}
                    className="w-full border rounded-lg p-2 text-sm mb-3"
                    placeholder="Phạm ơi, bạn đang nghĩ gì thế?"
                    rows={4}
                />
                {/* Phần Thêm Ảnh/Video */}
                <div className="border rounded-lg p-3 flex flex-col items-center justify-center mb-3">
                    {previewImage ? (
                        <div className="relative">
                            <img
                                src={previewImage}
                                alt="Preview"
                                className="w-full h-auto rounded-md"
                            />
                            <button
                                type="button"
                                className="absolute top-0 right-0 bg-gray-300 text-black rounded-full px-2 py-1"
                                onClick={() => setPreviewImage(null)}
                            >
                                ✕
                            </button>
                        </div>
                    ) : (
                        <>
                            <label
                                htmlFor="mediaFile"
                                className="cursor-pointer text-blue-500 hover:underline"
                            >
                                Thêm ảnh/video
                            </label>
                            <input
                                type="file"
                                id="mediaFile"
                                {...register("mediaFile")}
                                className="hidden"
                                accept="image/*,video/*"
                                onChange={handleImageChange}
                            />
                        </>
                    )}
                </div>
                {/* Nút Đăng */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Đăng
                </button>
            </form>
        </div>
    );
};

export default AddNew;
