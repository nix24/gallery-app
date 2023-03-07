import Layout from "@/components/layout";
/**
 * 
 * TOOD:
 * 1. Add socials, decide what else to add or move to navbar 
 */
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
