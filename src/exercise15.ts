import * as fs from 'fs/promises';

export type CommentsSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

type RawComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,
  );
  const rawComments: RawComment[] = await response.json();

  const summaries: CommentsSummary[] = rawComments
    .map((comment) => ({
      postId: comment.postId,
      id: comment.id,
      commenterEmail: comment.email.trim(),
    }))
    .filter((summary) => !summary.commenterEmail.toLowerCase().endsWith('.org'));

  await fs.writeFile(outputPath, JSON.stringify(summaries, null, 2), 'utf-8');

  return summaries.length;
}