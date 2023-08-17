import Head from 'next/head';
import Image from 'next/image'
import Title from '../components/title'
import ItemTitle from '../components/itemTitle'
import { client } from "../lib/client";

export type WorkType = {
    id: string;
    title: string;
    head1: string;
    description1: string;
    head2: string;
    description2: string;
    head3: string;
    description3: string;
    head4: string;
    description4: string;
    head5: string;
    description5: string;
    head6: string;
    description6: string;
    releaseDate: Date;
    siteURL: string;
    gitURL: string;
    detail: string;
    image1: {
        url: string;
    }
    image2: {
        url: string;
    }   
    image3: {
        url: string;
    }
    teck: any[];
}
interface Contents {
    contents: WorkType[]
}

export default async function Page() {
    const data: Contents = await client.get({ endpoint: "work" });
    const works = data.contents
    
    console.log(data)

    return (
        <div className="lg:w-3/6 mx-auto lg:max-w-5xl md:w-5/6">
            <Head>
                <title>Portfolio-About</title>
            </Head>


            <div className="flex justify-center mt-[10vh] flex-col">
                <div className='mx-auto'>
                    <Title title='Production'/>
                </div>
                <div className='text-center'>
                    個人で開発した成果物です。
                </div>
            
                <div className='text-center'>
                    {works.map((work, idx) =>(
                    <div className='mt-[5vh]' key={idx}>
                            <div className="block max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
                                <div className="font-bold text-4xl mt-5">{work.title}</div>
                                <div className="px-6 pt-4 pb-2">
                                    <ItemTitle itemTitle="使用技術" />
                                    {work.teck === null ? undefined : work.teck.map((teck, idx)=>(
                                        <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{teck.teck}</span>
                                    ))}
                                </div>
                                <div className='relative w-full h-[40vh]'>
                                    <div>
                                        <Image
                                            src={work.image1.url}
                                            alt=""
                                            layout={"fill"}
                                        />
                                    </div>
                                </div>
                                <div className="px-11 pb-5">
                                    <ItemTitle itemTitle="【GitHub】" />
                                    <div>
                                        <a href={work.gitURL}target="_blank" className='mr-5'>
                                            {work.gitURL}
                                        </a>
                                    </div>

                                    <ItemTitle itemTitle={work.head1} />
                                    <p className="text-base">
                                        {work.description1}
                                    </p>
                                    <ItemTitle itemTitle={work.head2} />
                                    <p className="text-base">
                                        {work.description2}
                                    </p>
                                    <ItemTitle itemTitle={work.head3} />
                                    <p className="text-base">
                                        {work.description3}
                                    </p>
                                    <ItemTitle itemTitle={work.head4} />
                                    <p className="text-base">
                                        {work.description4}
                                    </p>
                                    <ItemTitle itemTitle={work.head5} />
                                    <p className="text-base">
                                        {work.description5}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}