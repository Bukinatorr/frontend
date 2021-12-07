import { useForm } from "react-hook-form";

const PostNewPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="layout-container">
      <form className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">게시글 작성</h3>
            <p className="mt-1 text-sm text-gray-500">
              공유하고 싶은 내용을 작성해보세요
            </p>
          </div>

          <div className="mt-10">
            <div className="my-4">
              <label 
                className="block text-base font-bold text-gray-500 px-1 py-2"
                htmlFor="title"
              >
                제목
              </label>
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="given-name"
                className="border rounded-lg py-2 px-4 w-full"
              />
            </div>

            <div className="my-4">
              <label 
                className="block text-base font-bold text-gray-500 px-1 py-2"
                htmlFor="body"
              >
                내용
              </label>
              <textarea
                id="about"
                name="about"
                rows={20}
                className="border rounded-lg py-2 px-4 w-full"
                defaultValue={''}
              />
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostNewPage;