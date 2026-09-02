export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostBatch(
  postIds: number[],
): Promise<PostItem[]> {
  const fetchPromises = postIds.map(async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const data: PostItem = await response.json();
    return {
      id: data.id,
      title: data.title,
      body: data.body,
    };
  });

  return Promise.all(fetchPromises);
}