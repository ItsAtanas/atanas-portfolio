import Head from "next/head";
import BackgroundMagic from "@/components/BackgroundMagic";

export default function Home() {
  return (
    <>
      <Head>
        <title>t1</title>
        <meta name="description" content="t1 description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://atanasb.me/img/1662670355918.jpeg"
        />
      </Head>
      <main>
        <manue>
          <div>
            <div className="mt-10">
              <ul className="flex flex-row justify-center">
                <li>
                  <a>
                    <span className="text-white mr-10">// home</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="text-white mr-10">// expertise</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="text-white mr-10">// work</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="text-white mr-10">// experience</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="text-white mr-10">// contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </manue>
      </main>
    </>
  );
}
