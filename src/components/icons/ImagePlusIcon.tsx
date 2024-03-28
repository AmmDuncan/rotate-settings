import React from "react";
const ImagePlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#5E6DFA"
        d="M7.56 10.889c0 .389.072.761.194 1.111H3.115a1.111 1.111 0 0 1-1.111-1.111V3.11C2.004 2.5 2.504 2 3.115 2h7.778a1.111 1.111 0 0 1 1.11 1.111V7.75a3.36 3.36 0 0 0-1.11-.194V3.11H3.115v7.778h4.444Zm.533-3.728L6.565 9.128 5.476 7.817l-1.528 1.96h3.806a3.355 3.355 0 0 1 1.139-1.55l-.8-1.066Zm3.355 3.172V8.667h-1.11v1.666H8.67v1.111h1.666v1.667h1.111v-1.667h1.667v-1.11h-1.667Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.336.333h13.333v13.333H.336z" />
      </clipPath>
    </defs>
  </svg>
);
export { ImagePlusIcon };
