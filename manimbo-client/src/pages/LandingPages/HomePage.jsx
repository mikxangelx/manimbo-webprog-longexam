import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import dailyEssentialsImage from '../../assets/img/7.jpg';
import campusUniformImage from '../../assets/img/8.jpg';
import campusApparelImage from '../../assets/img/15.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-14">
            <section className="page-shell">
                <div className="relative min-h-[35rem] overflow-hidden rounded-lg bg-[#34418e] shadow-[0_28px_80px_rgba(52,65,142,0.24)]">
                    <img
                        src={banner}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#34418e]/96 via-[#34418e]/76 to-[#34418e]/16" />

                    <div className="relative z-10 grid min-h-[35rem] items-end gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12">
                        <div className="max-w-3xl pb-8">
                            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ffd320]">
                                Campus Marketplace
                            </p>
                            <h1 className="text-4xl font-black leading-[0.98] tracking-tight text-[#f9fcf8] sm:text-6xl lg:text-7xl">
                                Essentials for every campus day.
                            </h1>
                            <p className="mt-6 max-w-xl text-sm leading-7 text-[#f9fcf8]/82 sm:text-base">
                                Explore uniforms, study supplies, drinkware, and school merch in one quick storefront.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button to="/products" variant="primary">
                                    Shop Now
                                </Button>
                                <Button to="/about">
                                    About Store
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-3 rounded-lg border border-[#f9fcf8]/14 bg-[#f9fcf8]/10 p-4 text-[#f9fcf8] backdrop-blur-md">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffd320]">
                                Open for pickup
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                {['08 items', '06 types', '03 slots'].map((item) => (
                                    <div key={item} className="rounded-lg bg-[#f9fcf8]/10 px-3 py-4 text-center">
                                        <p className="text-sm font-bold">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-shell">
                <div className="grid overflow-hidden rounded-lg border border-[#34418e]/10 bg-[#f9fcf8] shadow-[0_18px_55px_rgba(52,65,142,0.09)] sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        ['08', 'Products'],
                        ['06', 'Categories'],
                        ['24', 'Orders'],
                        ['03', 'Pickup Slots'],
                    ].map(([value, label]) => (
                        <div key={label} className="border-b border-[#34418e]/10 p-6 sm:border-r lg:border-b-0">
                            <p className="text-4xl font-black text-[#34418e]">{value}</p>
                            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#65708f]">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="page-shell">
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="eyebrow">
                            Shop Sections
                        </p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight text-[#17204d]">Find what you need faster</h2>
                    </div>
                    <p className="max-w-md text-sm leading-6 text-[#65708f]">
                        Organized shelves for everyday student life, from class supplies to campus apparel.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    <article className="section-panel">
                        <div className="aspect-4/3 overflow-hidden rounded-lg bg-[#34418e]/8">
                            <img
                                src={dailyEssentialsImage}
                                alt="Daily essentials"
                                className="h-full w-full object-cover transition duration-300 hover:scale-105"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-[#17204d]">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-[#65708f]">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4" variant="soft">View Products</Button>
                    </article>

                    <article className="section-panel">
                        <div className="aspect-4/3 overflow-hidden rounded-lg bg-[#34418e]/8">
                            <img
                                src={campusUniformImage}
                                alt="Campus uniform"
                                className="h-full w-full object-cover transition duration-300 hover:scale-105"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-[#17204d]">Campus Uniform</h3>
                        <p className="mt-3 text-sm leading-6 text-[#65708f]">
                            Clean uniform pieces for class days, campus events, and daily wear.
                        </p>
                        <Button to="/products" className="mt-4" variant="soft">View Uniforms</Button>
                    </article>

                    <article className="section-panel">
                        <div className="aspect-4/3 overflow-hidden rounded-lg bg-[#34418e]/8">
                            <img
                                src={campusApparelImage}
                                alt="Campus apparel"
                                className="h-full w-full object-cover transition duration-300 hover:scale-105"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-[#17204d]">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-[#65708f]">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4" variant="soft">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
