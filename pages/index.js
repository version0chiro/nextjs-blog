import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.p}>
          <p>
            Hello, I'm <b>Sachin</b>. I am software developer, a coding mentor
            and a full time geek. You can find contact me here{" "}
            <a href="https://twitter.com/version0chiro">Twitter</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
