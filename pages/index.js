import Head from "next/head";
import {
  UserCircleIcon,
  PhotoIcon,
  BanknotesIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import {
  LoginButton,
  MintButton,
  useAccount,
  useMint,
  useSignMessage,
  useGetSharedSecret,
} from "@comet-labs/react";
import { Work_Sans } from "@next/font/google";
const work_sans = Work_Sans({ subsets: ["latin"] });

import styles from "../styles/Home.module.css";

export default function Home() {
  const account = useAccount();

  const { sterlingSunbathingMint } = useMint({ collectionId: "1820849d5909" });
  const { chewyAndSterlingMint } = useMint({collectionId: "e680973cd5bd" });
  const { chewyWithToyMint } = useMint({collectionId: "f966ac01ae8b" });
  const { chewyWindowMint } = useMint({collectionId: "d10388d182b6" });
  const { chewyYawnMint } = useMint({collectionId: "b26911637f2e" });
  const { chewyViewMint } = useMint({collectionId: "4c531c59cc82" });
  const { chewyFlowersMint } = useMint({collectionId: "11fd5d2e56c2" });
  const { chewyHappyMint } = useMint({collectionId: "f09198274723" });
  const { puppyChewyMint } = useMint({collectionId: "011b0741c913" });
  const { chewySleepingMint } = useMint({collectionId: "2b06512dee8b" });
  const { sterlingCurledMint } = useMint({collectionId: "7be1858f20c7" });
  const { sterlingBlanketMint } = useMint({collectionId: "e043090e5a26" });
  const { sterlingPaperbagMint } = useMint({collectionId: "ab14ae84da38" });
  const { sterlingYawnMint } = useMint({collectionId: "b89241afe8f9" });
  const { sterlingChairMint }= useMint({collectionId: "ede8204b66ac" });
  const { startMint } = useMint({collectionId: "ab694eaec22f" });

  const { signMessage } = useSignMessage({ message: "<MESSAGE>" });
  const { getSharedSecret } = useGetSharedSecret({
    publicKey: "Dgq5B8i5NJJfPoUgpkFZDzRr84zd1BJrUBntJt1EBvgd",
  });

  return (
    <>
      <Head>
        <title>❤️❤️❤️</title>
        <meta
          name="description"
          content="The Comet React SDK lets you launch new Solana NFT collections in your app!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cometfavicon.png" />
      </Head>

      <main className={work_sans.className}>
        <div className={"isolate " + styles.main}>
          <div className="px-6 pt-6 lg:px-8">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a
                  href="https://www.withcomet.com"
                  target="_blank"
                  className="-m-1.5 p-1.5"
                >
                  <span className="sr-only">Comet React SDK</span>
                  <img className="h-8" src="/cometfavicon.png" alt="" />
                </a>
              </div>
              <LoginButton />
            </nav>
          </div>
          <main>
            <div className="relative py-24">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div>
                  <h1 className="text-4xl tracking-tight text-purple-900 sm:text-6xl">
                    Chewy and Sterling NFTs
                  </h1>
                  <p className="mt-1 text-sm text-gray-500 mb-2">Welcome to the page of Noel's Chewy and Sterling NFTs!  Here you can find some cute NFTs of a dog and a cat! 
                    Meet Chewy and Sterling - two lovable critters! Collect them when you can. Enjoy!</p>

                  {/* <div className="marquee">
                    <div className="marquee__group">
                      <img src="../kirby.jpg" width="100px" />
                      <img src="../kirby.jpg" width="100px" />
                      <img src="../kirby.jpg" width="100px" />
                      <img src="../kirby.jpg" width="100px" />
                      <img src="../kirby.jpg" width="100px" />
                    </div>

                    <div aria-hidden="true" class="marquee__group">
                      <img src="../kirby.jpg" width="100px" />
                      <img src="../kirby.jpg" width="100px" />
                      <img src="../kirby.jpg" width="100px" />
                      <img src="../kirby.jpg" width="100px" />
                      <img src="../kirby.jpg" width="100px" />
                    </div>
                  </div> */}

                  <div class="mt-8">
                    <div>
                      <div class="rounded-2xl shadow-2xl shadow-slate-800/70">
                        <div class="relative grid gap-6 rounded-2xl bg-slate-800 px-5 py-6 sm:gap-6 sm:p-6 rounded-md">
                          {/* <h2 class="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">Here's a token of my love and affection,
                          </h2> */}
                      {/* <div className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-600 text-white sm:h-12 sm:w-12">
                          <UserCircleIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Login with Comet
                          </p>
                          <p className="mt-1 text-sm text-gray-500 mb-3">
                            Let your users sign in with Comet
                          </p>
                          <LoginButton className="z-50" />
                        </div>
                      </div> */}

                        {/* <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                            A Solana NFT with our love's connection.
                        </h2> */}

                        {/* <div className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-600 text-white sm:h-12 sm:w-12">
                              <BanknotesIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Take his love.
                              </p>
                              <p className="mt-1 text-sm text-gray-500 mb-2">
                                please...
                              </p>
                              <MintButton collectionId="1820849d5909" />
                            </div>
                          </div> */}
                        <div class="-m-3 grid grid-cols-4 gap-4 items-center">
                          <div>
                            <button onClick={sterlingSunbathingMint}>
                              <img src="../SterlingSunbathing.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={chewyAndSterlingMint}>
                              <img src="../ChewyAndSterling.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={sterlingCurledMint}>
                              <img src="../SleepingSterlingCurled.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={chewyWithToyMint}>
                              <img src="../ChewyAndToy.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={sterlingPaperbagMint}>
                              <img src="../SterlingInPaperBag.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={chewyViewMint}>
                              <img src="../ChewyView.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={chewyYawnMint}>
                              <img src="../ChewyMidYawn.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={chewyWindowMint}>
                              <img src="../ChewyLookingOutWindow.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={sterlingChairMint}>
                              <img src="../SterlingOnChair.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={startMint}>
                              <img src="../SterlingUnderCovers.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={sterlingYawnMint}>
                              <img src="../SterlingMidYawn.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={chewyFlowersMint}>
                              <img src="../ChewyWithFlowers.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={chewyHappyMint}>
                              <img src="../HappyChewy.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={sterlingBlanketMint}>
                              <img src="../SleepingSterlingOnBlanket.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <button onClick={chewySleepingMint}>
                              <img src="../SleepingChewy.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                          <div>
                            <MintButton style="background:transparent;" collectionId="011b0741c913" />
                            <button onClick={puppyChewyMint}>
                              <img src="../PuppyChewy.jpg" class="rounded-2xl hover:scale-105"/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
