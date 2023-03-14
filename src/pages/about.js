import Layout from "@/components/layout";
import Footer from "@/components/footer";

/**
 * 
 * layout:
 * self img
 * subtitle (who am I)
 *  Headers: 1. About Me 2. Skills 3. Projects
 */
export default function about() {
  return (
    <div className="h-screen">
      <Layout />
      <div className="prose">
        {/* multiple bubble cards throughout the screen, each with a different topic */}
      </div>
      <Footer />
    </div>
  );
}
