import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { usePostCreate } from '@api/posts';
import axios from 'axios';
import Main from '@layout';

const PostCreatePage = () => {
  const { mutate } = useMutation((formData: any) => {
    return axios.post('http://localhost:8080/api/v1/posts', formData);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Main>
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit(formData => mutate(formData))}
      >
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              게시글 작성
            </h3>
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
                id="title"
                type="text"
                autoComplete="given-name"
                className="border rounded-lg py-2 px-4 w-full"
                {...register('title', {
                  required: '필수 입력 사항입니다',
                  minLength: {
                    value: 1,
                    message: '1글자 이상 입력해주셔야합니다',
                  },
                  maxLength: {
                    value: 100,
                    message: '100자 미만으로 작성해주셔야합니다',
                  },
                })}
              />
              <p className="error">{errors.title?.message}</p>
            </div>

            <div className="my-4">
              <label
                className="block text-base font-bold text-gray-500 px-1 py-2"
                htmlFor="body"
              >
                내용
              </label>
              <textarea
                id="body"
                rows={20}
                className="border rounded-lg py-2 px-4 w-full"
                defaultValue={''}
                {...register('body', {
                  required: '필수 입력 사항입니다',
                  minLength: {
                    value: 10,
                    message: '10글자 이상 입력해주셔야합니다',
                  },
                  maxLength: {
                    value: 1000,
                    message: '1000자 미만으로 작성해주셔야합니다',
                  },
                })}
              />
              <p className="error">{errors.body?.message}</p>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="flex justify-end">
            <button type="button" className="mx-1 normal-btn">
              취소
            </button>
            <button type="submit" className="mx-1 normal-btn">
              작성
            </button>
          </div>
        </div>
      </form>
    </Main>
  );
};

export default PostCreatePage;
