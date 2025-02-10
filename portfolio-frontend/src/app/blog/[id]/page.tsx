import BlogDetailsCard from "@/components/shared/Blogdetails";

const BlogDetailsPage =async ({params}:{
    params:Promise<{id: string}>
} )=> {
    const {id} = await params
    const res = await fetch(`https://blog-site--taupe.vercel.app/api/blogs/${id}`)
    const blog = await res.json()
    console.log(blog)

    return (
        <div>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;