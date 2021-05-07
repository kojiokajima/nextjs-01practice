import "../styles/global.css";

export default function App({ Component, pageProps }) {
  // console.log("Component: ", Component); // --> weird one
  // export default function Post({ postData }) {
  //   return (
  //     <Layout>
  //       <Head>
  //         <title>{postData.title}</title>
  //       </Head>
  //       <article>
  //         <h1 className={utilStyles.headingXl}>{postData.title}</h1>
  //         <div className={utilStyles.lightText}>
  //           <Date dateString={postData.date} />
  //         </div>
  //         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  //       </article>
  //     </Layout>
  //   );
  // }
  
  // console.log("pageProps: ", pageProps);
  // {allPostsData: Array(2)}
  //   allPostsData: Array(2)
  //    0: {id: "ssg-ssr", title: "When to Use Static Generation v.s. Server-side Rendering haha", date: "2020-01-02"}
  //    1: {id: "pre-rendering", title: "Two Forms of Pre-rendering
  return <Component {...pageProps} />;
}
