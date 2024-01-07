
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { baseUrl } from '../../baseurl/baseUrl.js';
import SkeletonLoader from '../../../components/SkeletonLoader/SkeletonLoader.jsx';
import useAllNews from '../../../hooks/useAllNews.jsx';

const BlogsDas = () => {
    const [allNews, refetch, isLoading] = useAllNews()

    const [isSubmitting, setIsSubmitting] = useState(false);

    if (isLoading) {
        return <div className='content-wrapper'>
            <div className='content-header'><SkeletonLoader /></div></div>
    }
    const allBlogs = allNews
    const handleBlogDelete = async (id) => {
        setIsSubmitting(true)
        console.log(id);
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You are about to delete the student. This action cannot be undone!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel',
            }); setIsSubmitting(false)
            if (result.isConfirmed) {
                const response = await fetch(`${baseUrl}/blog/${id}`, {
                    method: 'DELETE',
                });

                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'News Deleted successfully.',
                        'success'
                    )
                    setIsSubmitting(false)
                }
                refetch()
            }
        } catch (error) {
            setIsSubmitting(false)
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                <Link to='/dashboard/add/news' className='btn fw-medium ms-3 mt-3  rounded-1 text-white' style={{ backgroundColor: '#160295' }}><i className="fa-solid fa-file-circle-plus"></i>  যোগ করুনঃ </Link>
                <div className='my-2'>
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>category</th>
                                <th>Author</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                allBlogs.map((blog, index) => <tr key={blog._id}>
                                    <td>{index + 1}</td>
                                    <td>{blog?.title}</td>
                                    <td>
                                        <td>
                                            {blog?.selectedCategoryValues && blog.selectedCategoryValues.length > 0
                                                ? blog.selectedCategoryValues.map((item, index) => (
                                                    <span key={index}>
                                                        {item}
                                                        {index !== blog.selectedCategoryValues.length - 1 ? ',' : ''}
                                                    </span>
                                                ))
                                                : null}
                                        </td>

                                    </td>


                                    <td>
                                        {blog.author}
                                    </td>
                                    <td>

                                        <button className='btn btn-success me-2 my-1 '>Edit</button>
                                        <button onClick={() => { handleBlogDelete(blog._id) }} className='btn btn-danger my-1'
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Please wait...' : 'Delete'}
                                        </button>



                                    </td>
                                </tr>)

                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default BlogsDas;