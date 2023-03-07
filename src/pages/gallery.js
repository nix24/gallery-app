import Layout from "@/components/layout";
export default function gallery() {
  return (
    <div className="prose">
      <Layout />
      <h1>Gallery</h1>
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
