export default function Home({ data }) {
  const updated_at = new Date(data.updated_at);
  return (
    <div>
      <h1>Incremental Static Regeneration test</h1>
      <div>
        <img
          src={data.avatar_url}
          alt="Avatar's photo"
        />
        <p>Login: {data.login}</p>
        <p>{data.bio}</p>
        <p>Updated at: {`
          ${updated_at.getDate()}/
          ${updated_at.getMonth()}/
          ${updated_at.getFullYear()}
        `}</p>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/GSGaldino');
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
