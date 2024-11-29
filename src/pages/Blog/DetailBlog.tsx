import React, { useState } from 'react';
import BlogPostCard from '../../components/Blog/BlogPostCard';
import sendIcon from '../../../public/send.svg'
const blogData = {
    date: "Sunday, 1 Jan 2023",
    author: "Duy Anh",
    title: "NHỮNG ĐIỀU CẦN BIẾT VỀ AN NINH MẠNG",
    content: `
    An ninh mạng là một trong những yếu tố quan trọng để đảm bảo an toàn thông tin và hoạt động trực tuyến. Đó là sự bảo đảm hoạt động trên không gian mạng không gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân.

    Không gian mạng được định nghĩa là mạng lưới kết nối của cơ sở hạ tầng công nghệ thông tin. Nó bao gồm mạng viễn thông, mạng Internet, mạng máy tính, hệ thống thông tin, hệ thống xử lý và điều khiển thông tin, cơ sở dữ liệu. Đây là nơi mà con người có thể thực hiện các hành vi xã hội mà không bị giới hạn bởi không gian và thời gian.

    Những mối đe dọa trên không gian mạng ngày càng gia tăng. Từ tấn công mạng, đánh cắp thông tin cá nhân, đến việc sử dụng phần mềm độc hại, tất cả đều có thể gây hậu quả nghiêm trọng. Việc nâng cao ý thức về an ninh mạng là điều cần thiết để bảo vệ chính bạn và tổ chức của mình.

    Chúng ta cần thực hiện các biện pháp bảo mật phù hợp. Một số biện pháp bao gồm sử dụng mật khẩu mạnh, cập nhật phần mềm thường xuyên, và cẩn trọng khi truy cập các liên kết hoặc tệp không rõ nguồn gốc. Những hành động đơn giản này có thể giúp giảm nguy cơ bị tấn công.

    An ninh mạng không chỉ là trách nhiệm của cá nhân mà còn là của toàn xã hội. Các cơ quan, tổ chức cần xây dựng hệ thống bảo mật chặt chẽ, đồng thời người dùng cũng cần nâng cao nhận thức để cùng tạo ra một môi trường mạng an toàn.

    `,
    mainImageUrl:
        "https://vietnetco.vn/wp-content/uploads/2020/05/network-security-2.jpg",
};

const blogPosts = [
    {
        author: 'Alec Whitten',
        date: '1 Jan 2023',
        title: 'Bill Walsh leadership lessons',
        description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        tags: ['Leadership', 'Management'],
        imageUrl: 'https://tailieu.antoanthongtin.vn/files/images/site-2/20240827/17000-lo-hong-moi-de-doa-an-ninh-mang-viet-nam-trong-nua-dau-2024-17-27082024160904.png',
    },
    {
        author: 'Alec Whitten1',
        date: '1 Jan 2023',
        title: 'Bill Walsh leadership lessons',
        description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        tags: ['Leadership', 'Management'],
        imageUrl: 'https://vina-aspire.com/wp-content/uploads/2019/08/Hackr-attaching-Car.jpg',
    },
    {
        author: 'Alec Whitten2',
        date: '1 Jan 2023',
        title: 'Bill Walsh leadership lessons',
        description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        tags: ['Leadership', 'Management'],
        imageUrl: 'https://media.istockphoto.com/id/1420039900/vi/anh/cyber-security-security-ransomware-email-phishing-c%C3%B4ng-ngh%E1%BB%87-m%C3%A3-h%C3%B3a-th%C3%B4ng-tin-k%E1%BB%B9-thu%E1%BA%ADt-s%E1%BB%91-%C4%91%C6%B0%E1%BB%A3c.jpg?s=612x612&w=0&k=20&c=N8r6hbstnXisoQQQzQ3uP5JUwO04veRJ_IceAJt0Ih8=',
    }
];

const BlogDetail: React.FC = () => {
    const [comments, setComments] = useState([
        {
            CommentID: "1",
            BlogID: "1",
            avatar: 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png',
            Content: "An ninh mạng rất quan trọng, đặc biệt trong thời đại số hóa. Mọi người cần cẩn trọng khi chia sẻ thông tin cá nhân!",
            AuthorID: 2,
            AuthorName: "Ngọc Mai",
            CreateDate: "2024-10-21 09:15:23.120",
        },
        {
            CommentID: "2",
            BlogID: "1",
            avatar: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
            Content: "Mình nghĩ việc dùng mật khẩu mạnh và đổi thường xuyên là cách đơn giản nhất để bảo vệ thông tin cá nhân.",
            AuthorID: 3,
            AuthorName: "Minh Hoàng",
            CreateDate: "2024-10-21 10:02:47.430",
        },
    ]);

    const [newComment, setNewComment] = useState('');
    const handleAddComment = () => {
        if (newComment.trim()) {
            const newCommentData = {
                CommentID: (comments.length + 1).toString(), // Tạo ID mới
                BlogID: "1",
                avatar: 'https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png', // Avatar mặc định
                Content: newComment,
                AuthorID: 999, // ID giả định
                AuthorName: "Anonymous User", // Tên giả định
                CreateDate: new Date().toISOString(), // Lấy thời gian hiện tại
            };

            setComments([...comments, newCommentData]); // Cập nhật danh sách comment
            setNewComment(''); // Xóa nội dung input
        }
    };
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{blogData?.title}</h1>
            <div className='flex gap-2'>
                <h6 className="text-base italic mb-4 text-right">{blogData?.author}</h6>
                <h6>-</h6>
                <div className="text-blue-600 text-base mb-2">{blogData?.date}</div>
            </div>

            <img src={blogData?.mainImageUrl} alt={blogData?.title} className="max-w-3xl h-auto rounded-lg shadow-lg mb-6 mx-auto" />

            {/* <div className="text-gray-700 text-base leading-relaxed mb-8">
                {blogData?.content}
            </div> */}
            <div className="text-gray-700 text-base leading-relaxed mb-8 text-left">
                {blogData?.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    )
                ))}
            </div>


            <div className='border p-2 rounded-lg w-[82%] mx-auto'>
                {
                    comments?.map(item => <div key={item?.BlogID} className='flex gap-2 items-center mb-2'>
                        <img
                            src={
                                "https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp"
                            }
                            className="rounded-full"
                            width={40}
                            height={40}
                            alt="avt"
                        />
                        <div className='flex gap-1 flex-col text-start p-2 rounded-lg bg-gray-50'>
                            <div className='font-bold'>{item?.AuthorName}</div>
                            <div>{item?.Content}</div>
                        </div>

                    </div>)
                }
            </div>
            <div className="flex justify-center gap-4 mt-5 items-center">
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                    className="rounded-full"
                    width={40}
                    height={40}
                    alt="avt"
                />
                <textarea
                    className="w-3/4 border pl-2 pt-2 rounded-md"
                    placeholder='Comment'
                    value={newComment} // Liên kết với state
                    onChange={(e) => setNewComment(e.target.value)} // Cập nhật state khi nhập
                ></textarea>
                <img
                    src={sendIcon}
                    alt="Send"
                    width={24}
                    height={24}
                    className="cursor-pointer hover:bg-blue-100"
                    onClick={handleAddComment} // Gọi hàm thêm comment khi nhấn nút
                />
            </div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Blog suggested</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard
                            key={index}
                            id={index}
                            author={post.author}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                            tags={post.tags}
                            imageUrl={post.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
