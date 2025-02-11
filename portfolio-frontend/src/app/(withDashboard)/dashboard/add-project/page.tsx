/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Project } from "@/types/types";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";


const CreateProject = () => {
  const { register, handleSubmit, reset } = useForm<Project>();
  const onSubmit = async (formData: Project) => {
    const toastId = toast.loading("Creating project...");

    try {
      const newProject: Project = {
        ...formData, 
      };
      console.log(newProject)
      toast.success("Project Created Successfully", { id: toastId, duration: 2000 });
      reset();
    } catch (err: any) {
      console.error(err.message);
      toast.error(err.message || "Error occurred", { id: toastId });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen my-2">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-semibold mb-6 text-red-600 text-center">
            Create Project
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700">
                Completion Date
              </label>
              <input
                type="date"
                id="completionDate"
                {...register("completionDate", { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
              Technologies (comma-separated)
            </label>
            <input
              type="text"
              id="technologies"
              {...register("technologies", { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="E.g., React, Node.js, Tailwind CSS"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                Live Link
              </label>
              <input
                type="url"
                id="link"
                {...register("link")}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Project live URL"
              />
            </div>

            <div>
              <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                GitHub Link
              </label>
              <input
                type="url"
                id="github"
                {...register("github")}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="GitHub repository URL"
              />
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter project description"
            ></textarea>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              {...register("status", { required: true })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
            >
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
          <div className="my-5">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              {...register("image")}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter project image URL"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Project
          </button>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default CreateProject;
