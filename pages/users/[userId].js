export async function getStaticProps({ params }) {
  const userId = params?.userId;

  return { props: { userId }, revalidate: 1 };
}

export async function getStaticPaths() {
  const paths = ['/users/abc', '/users/xyz'];

  return {
    paths,
    fallback: false,
  };
}

export default function User({userId}) {
  return (
  <div><h1>User</h1>
  <p>{userId}</p>
  </div>)
}
