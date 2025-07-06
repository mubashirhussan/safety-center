/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
import rehypeRaw from "rehype-raw";
interface Props {
  content: string;
}
export default function MarkdownContent({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      components={{
        img: ({ node, ...props }) => (
          <img className="rounded-lg my-4 shadow" {...props} />
        ),

        video: ({ node, ...props }) => (
          <video
            className="my-4 rounded-lg border w-full"
            controls
            playsInline
            preload="metadata"
            {...props}
          />
        ),
        source: ({ node, ...props }) => <source {...props} />,
        //   customcard: ({ node, ...props }) => (
        //     <CustomCard
        //       title={props.title as string}
        //       description={props.description as string}
        //     />
        //   ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
// function CustomCard({
//   title,
//   description,
// }: {
//   title: string
//   description: string
// }) {
//   return (
//     <div className="border rounded-xl p-4 bg-white dark:bg-zinc-800 shadow my-4">
//       <h3 className="text-xl font-bold">{title}</h3>
//       <p className="text-gray-600 dark:text-gray-300">{description}</p>
//     </div>
//   )
// }
