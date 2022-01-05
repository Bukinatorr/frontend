import Main from "@layout";
import axios from "axios";
import { dehydrate, QueryClient } from "react-query";

const PostShowPage = () => {
  <Main>
    <div></div>
  </Main>
}

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["projects", id], async () => {
    const result = await axios(`api/v1/posts/${id}`);
    return result.data;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
}

export default PostShowPage;