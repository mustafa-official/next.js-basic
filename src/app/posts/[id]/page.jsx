import { redirect } from "next/navigation";

const getDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  // if(data){
  //   redirect("/gallery")
  // }
  return data;
};

export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postData = await res.json();
  return {
    title: postData?.title,
    description: postData?.body,
    keywords: postData?.body.split(" ")
  };
};

const PostDetails = async ({ params }) => {
  console.log(params.id);
  const postsData = await getDetails(params.id);

  return (
    <div>
      <h2 className="text-2xl font-bold">{postsData?.title}</h2>
      <p className="mt-2">{postsData?.body}</p>
    </div>
  );
};

export default PostDetails;
