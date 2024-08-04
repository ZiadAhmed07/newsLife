import Head from "next/head";


export const metadata = {
  title: "dashboard",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head >
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      <div>
        <div>
          {children}
        </div>
      </div>
    </>

  );
}
