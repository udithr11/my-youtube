import React from "react";
import { USER_LOGO } from "../utils/constants";

const commentsData = [
  {
    name: "udith",
    text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
    replies: [],
  },
  {
    name: "1",
    text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
    replies: [
      {
        name: "2",
        text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
        replies: [ {
            name: "3",
            text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
            replies: [
              {
                name: "4",
                text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
                replies: [ {
                    name: "5",
                    text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
                    replies: [
                      {
                        name: "6",
                        text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
                        replies: [ {
                            name: "7",
                            text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
                            replies: [
                              {
                                name: "8",
                                text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
                                replies: [],
                              },
                            ],
                          },],
                      },
                    ],
                  },],
              },
            ],
          },],
      },
    ],
  },
  {
    name: "rahul",
    text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
    replies: [
      {
        name: "john",
        text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
        replies: [
          {
            name: "peter",
            text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "rx-1",
    text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
    replies: [],
  },
  {
    name: "bob",
    text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
    replies: [
      {
        name: "rodri",
        text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
        replies: [],
      },
    ],
  },
  {
    name: "phlips",
    text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
    replies: [
      {
        name: "sam",
        text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
        replies: [
          {
            name: "luna",
            text: "lorem ipsum dolor sit amet assa in the end it doesn't even matter",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-slate-200 shadow-md p-2 my-2 rounded-lg">
      <img className="w-5 h-5 border border-black" alt="user" src={USER_LOGO} />
      <div className="px-3">
        <p className="font-bold ">{name}</p>
        <p> {text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div  key={index} >
    <Comment data={comment} /> 
    <div className="border border-l-black ml-4">
        <CommentsList comments={comment.replies}/>
    </div>

    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className=" w-[1200px] p-2">
      <h1 className=" font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
