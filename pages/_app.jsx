import "../styles/global.css";

export default function App({ Component, pageProps }) {
  // console.log("Component: ", Component);
  // console.log("pageProps: ", pageProps);
  // {allPostsData: Array(2)}
  //   allPostsData: Array(2)
  //    0: {id: "ssg-ssr", title: "When to Use Static Generation v.s. Server-side Rendering haha", date: "2020-01-02"}
  //    1: {id: "pre-rendering", title: "Two Forms of Pre-rendering
  return <Component {...pageProps} />;
}
