import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import Main from "@layout";
import { alertMessage } from "lib/utils";

const SignupPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Main>
      <form
        className="md:max-w-2xl md:mx-auto my-10 p-10 border bg-white"
        onSubmit={handleSubmit(async (formData) => {
          const response = axios.post('http://localhost:8080/api/v1/users', formData);
          console.log(response);
        })}
      >
        <h2 className="mb-6 text-center text-2xl font-bold">
          회원가입
        </h2>
        <label className="label" htmlFor="email">
          이메일 <span className="text-red-500">*</span>
          <input
            id="email"
            type="text"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "올바른 이메일 형식을 입력해주세요",
              },
            })}
            className="input mb-4"
            placeholder="이메일"
          />
        </label>

        {/* 비밀번호 */}
        <label className="label mb-1" htmlFor="password">
          비밀번호 <span className="text-red-500">*</span>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "비밀번호는 8자리 이상이어야합니다.",
              },
            })}
            className="input mb-4"
            placeholder="비밀번호"
          />
        </label>

        {/* 이름 */}
        <label className="label" htmlFor="name">
          이름 <span className="text-red-500">*</span>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "이름을 입력해주세요",
            })}
            className="input mb-4"
            placeholder="이름 입력"
          />
        </label>
        
        <button type="submit" className="my-4 primary-btn">
          가입하기
        </button>
      </form>
    </Main>
  );
};

export default SignupPage;
