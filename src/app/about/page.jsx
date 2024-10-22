import React from  react ;

export default function Page() {
    const timelineData = [
        {
            year:  '2014' ,
            content: `After Vishal Garg&apos;s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.`,
        },
        {
            year:  '2015' ,
            content: `Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).`,
        },
        {
            year:  '2016' ,
            content: `Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.`,
        },
        {
            year:  '2017' ,
            content: `Better expands into the real estate market with Better Real Estate.`,
        },
        {
            year:  '2018' ,
            content: `Better Mortgage partners with Ally Bank to build Ally powered by Better.`,
        },
        {
            year:  '2019' ,
            content: `Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.`,
        },
        {
            year:  '2021' ,
            content: `Better acquires Trussle — The UK&apos;s most innovative online mortgage broker.`,
        },
        {
            year:  '2022' ,
            content: `Better Mortgage becomes the first fintech to fund $100B home loans entirely online.`,
        },
        {
            year:  '2023' ,
            content: `Better Mortgage launches One Day Mortgage: The first offering to go from application to full mortgage commitment within 24 hours vs. typical 30+ days.`,
        },
        {
            year:  'Today' ,
            content: `You become part of the story by joining tens of thousands of happy Better Mortgage borrowers. <a class="underline" href="/start">Get started</a>`,
        },
    ];

    return (
        <>
            <section className="bg-white h-screen flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-[#1d6c56fc]">Our mission</h1>
                    <p className="text-4xl font-semibold mt-2 text-[#353837]">
                        <span>We are making homeownership simpler, faster —</span>
                        <span className="block">and most importantly, more accessible for all</span>
                        <span>Americans.</span>
                    </p>
                </div>
            </section>

            <section className="w-[90%] md:w-[70%] mx-auto py-20">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2 space-y-4 mb-6 md:mb-0">
                        <h1 className="text-2xl font-semibold">The status quo is broken</h1>
                        <p className="text-sm text-gray-800">
                            The traditional processes around homeownership are opaque and stressful. Fees aren t transparent, and some are simply outrageous. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                        </p>
                        <button className="bg-[#186650] text-white px-4 py-2 rounded">
                            Read Vishal s story
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            alt="Vishal Garg"
                            loading="lazy"
                            decoding="async"
                            src="https://media.better.com/video/vishal-mission.jpg"
                            className="w-full h-auto rounded-md border"
                        />
                    </div>
                </div>
            </section>

            <section className="m-auto max-w-screen-xl pb-20 text-center">
                <h2 className="font-bold text-2xl md:text-3xl mb-16 text-[#1d6c56fc]">
                    Company Timeline
                </h2>
                <div className="relative mx-auto w-40 md:w-1/3 before:absolute before:left-1/2 before:block before:h-full before:w-1 before:-translate-x-1/2 before:bg-gray-300">
                    {timelineData.map((item, index) => (
                        <div
                            key={item.year}
                            className={`relative flex flex-col items-center ${
                                index % 2 === 0 ?  -translate-x-1/2  :  translate-x-1/2 
                            }`}
                        >
                            <div className="inline-block rounded-full bg-[#004733] px-8 py-2 mb-4">
                                <h3 className="text-lg md:text-xl text-white font-bold">
                                    {item.year}
                                </h3>
                            </div>
                            <div className="rounded-lg bg-gray-100 p-6 shadow-md w-full my-4">
                                <p
                                    className="text-base text-gray-700 text-left"
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
