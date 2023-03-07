import Layout from "@/components/layout";
export default function about() {
  return (
    <div className="prose">
      <Layout />
      <h1>About</h1>
      <a href='/'>Home</a>
    </div>
  );
}

export async function getServerSideProps(ctx){


  return {
    props:{
      data:null
    }
  }
}
