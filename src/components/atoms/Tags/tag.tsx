import React from "react";

interface Props {
  tagName: string;
}

export default function tag(props: Props) {
  return <div>{props.tagName}</div>;
}

// export default function tag() {
//   return <div>tag</div>;
// }
