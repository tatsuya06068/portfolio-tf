import Image from 'next/image'
import Head from 'next/head';
import Title from '../components/title'

export default function Page() {
  return (
    <div className="flex justify-center mt-[27vh] flex-nowrap">
      <Head>
        <title>Portfolio-About</title>
      </Head>
      <div className="flex-col">
        <Title title='About me'/>
        <div className='mt-10'>
          長野県出身のWEBエンジニア
          maru
          バックエンド・インフラをメインに開発や構築を中心に仕事をしたいと考えています。
        </div>

        <div className="flex flex-row mt-9 justify-around">
          <a href="https://twitter.com/TatsuyaFujisaw6" target="_blank" className='mr-5'>
            <Image
              src="/twitter.png"
              alt="twitter"
              width={40}
              height={20}
            />
            twitter
          </a>
          <a href="https://github.com/tatsuya06068" target="_blank" className='mr-5'>
            <Image
              src="/github.png"
              alt="github"
              className="dark:invert"
              width={40}
              height={20}
            />
            GitHub
          </a>
          <a href="https://zenn.dev/tasuya" target="_blank">
            <Image
              src="/blog.png"
              alt="github"
              width={40}
              height={20}
            />
            Blog
          </a>
        </div>

      </div>
    </div>
  );
}