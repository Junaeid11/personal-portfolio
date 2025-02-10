
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    const authorData = req.body;

    const result = await blogService.createBlogIntoDb(authorData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Blog created Successfully",
        data: result
    })
})
const updateBlog = catchAsync(async (req, res) => {
    const { id } = req.params
    const userId = req.user.id;
    const result = await blogService.updateBlogFromDb(id, req.body, userId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog updated Successfully",
        data: result
    })
})
const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params
    await blogService.deleteBlogFromDb(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog deleted Successfully",

    })
})
const getSingleBlog = catchAsync(async (req, res) => {
    const { id } = req.params
  const result =  await blogService.getSingleBlogs(id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog fetch Successfully",
        data: result

    })
})
const getAllBlogs = catchAsync(async (req, res) => {

    const result = await blogService.getAllBlogsFromDb(req.query);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blogs fetched successfully",
        data: result

    })
})




export const blogController = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    getSingleBlog
}