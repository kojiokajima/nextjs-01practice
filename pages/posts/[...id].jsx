import Head from 'next/head'
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // returns a possible list of path
  const paths = getAllPostIds() // --> paths is an array
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) { // --> conducted in build in production env
  const postData = await getPostData(params.id.join('/'))
  // console.log("POST DATA: ", postData); // --> {id: 'ssg-ssr', title: '...', date: '...'}
  return {
    props: {
      postData
    }
  }
}