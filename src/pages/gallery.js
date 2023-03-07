import Layout from "@/components/layout";

/**
 * 
 * Decide library to help build gallery page
 * import past artwork over to new repo 
 */
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
