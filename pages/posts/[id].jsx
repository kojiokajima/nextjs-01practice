import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts'


export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
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
  const postData = getPostData(params.id)
  // console.log("POST DATA: ", postData); // --> {id: 'ssg-ssr', title: '...', date: '...'}
  return {
    props: {
      postData
    }
  }
}