import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const data = [
    {
      id: 1,
      url: "https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration_335657-1831.jpg?w=2000",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-vector/digital-marketing-online-advertising-smm-app-notification-chatting-texting-viral-content-internet-meme-creation-mass-shared-content-concept_335657-1186.jpg?w=2000",
    },
    { id: 3, url: "https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-2766.jpg?w=2000" },

    { id: 4, url: "https://images.template.net/78260/Free-Business-Website-Illustration-JPEG-1.jpg" },
    {
      id: 5,
      url: "https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-2542.jpg?w=2000",
    },
  ];

  return (
    <div>
      <Link href="/">
        {data.map((item) => (
          <div className="flex items-center mb-10 flex-col lg:flex-row gap-10" key={item.id}>
            <div className="relative w-[85vw] h-[65vw] md:h-[330px] md:w-[500px]">
              <Image src={item.url} alt="blog image" fill={true} className="object-cover rounded-md"></Image>
            </div>
            <div className="md:basis-[55%] ml-auto">
              <h1 className="font-bold text-2xl max-w-[540px] mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ullam.</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio tempore excepturi praesentium. Blanditiis labore aliquam voluptates
                earum totam natus, doloribus quasi perferendis impedit. Non vel voluptatem corrupti quae iusto assumenda eos doloremque rem. Deleniti,
                obcaecati magnam totam architecto veniam modi.
              </p>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Blog;
