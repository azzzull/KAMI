import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { testimonials } from "../data/site";
import { SectionHeading } from "../components/SectionHeading";

const testimonialSlides = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff,#f8fafc)] pb-14 pt-14 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-14">
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="The kind of partner clients describe as calm, clear, and dependable."
                    description="We keep the experience structured enough for enterprise teams and flexible enough for real-world production."
                    align="center"
                />

                <div className="mt-9">
                    <Swiper
                        modules={[Autoplay, EffectCards]}
                        effect="cards"
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            reverseDirection: true,
                        }}
                        loop
                        loopAdditionalSlides={testimonials.length * 2}
                        loopPreventsSliding={false}
                        speed={650}
                        grabCursor
                        slidesPerView={1}
                        onSwiper={(swiper) => {
                            swiper.autoplay.start();
                        }}
                        cardsEffect={{
                            slideShadows: false,
                            perSlideOffset: 9,
                            perSlideRotate: 1,
                        }}
                        className="testimonial-swiper mx-auto max-w-3xl !overflow-visible"
                    >
                        {testimonialSlides.map((testimonial, index) => (
                            <SwiperSlide key={`${testimonial.name}-${index}`}>
                                <div className="relative mx-auto max-w-2xl py-5">
                                    <div className="pointer-events-none absolute inset-0 translate-y-4 rounded-[32px] bg-[linear-gradient(135deg,rgba(236,25,139,0.10),rgba(107,31,175,0.08),rgba(30,63,174,0.08))] blur-2xl" />
                                    <motion.article
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{
                                            once: true,
                                            margin: "-8% 0px",
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(17,24,39,0.08)] ring-1 ring-black/5 sm:p-8"
                                    >
                                        <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_right,rgba(236,25,139,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(30,63,174,0.08),transparent_30%)]" />
                                        <p className="text-lg font-medium leading-8 text-slate-800 sm:text-xl">
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                        <div className="mt-6 flex items-center gap-4">
                                            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] text-sm font-bold text-white shadow-soft">
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((part) => part[0])
                                                    .slice(0, 2)
                                                    .join("")}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-950">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-sm text-slate-500">
                                                    {testimonial.role} /{" "}
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.article>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
