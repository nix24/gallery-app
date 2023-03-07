import Layout from "@/components/layout";
export default function contact() {
  return (
    <div className="prose">
      <Layout />
      <h1>Contact</h1>
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
