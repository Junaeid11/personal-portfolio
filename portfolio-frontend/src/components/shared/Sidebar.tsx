import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 dark:bg-black dark:text-white min-h-screen p-4 rounded-xl">
      <ul className="space-y-4 dark:text-white">
        
        <li>
          <Link
            href="/dashboard/projects"
            className="flex items-center dark:text-white dark:hover:text-black space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
          
            <span>Project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/add-project"
            className="flex items-center dark:text-white dark:hover:text-black space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
          
            <span>Create project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blog"
            className="flex items-center dark:text-white dark:hover:text-black space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
          
            <span>Create Blog</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/all-blogs"
            className="flex items-center dark:text-white dark:hover:text-black space-x-2 p-3 rounded-md hover:bg-gray-200 text-black"
          >
          
            <span>All Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/messages"
            className="flex items-center dark:text-white dark:hover:text-black space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
          
            <span>Messages</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
