import { Links } from "components/Links"
import Image from "next/image"
import Head from "next/head"

export default function NextjsImages() {
  return (
    <div>
      <Head>
        <title>Nextjs Images</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Links />
      <main>
        <h2>This image uses a remote image</h2>
        <Image src="/vercel.svg" alt="Vercel Logo" width={200} height={200} />
        <h2>{`This image uses a static import with a "placeholder="blur"`}</h2>
        <Image
          src={
            "https://raw.githubusercontent.com/vercel/next.js/canary/examples/with-storybook/public/nyan-cat.png"
          }
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          alt="Nyan Cat"
        />
      </main>
    </div>
  )
}
