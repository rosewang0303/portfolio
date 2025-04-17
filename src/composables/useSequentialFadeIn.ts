import { onMounted, onBeforeUnmount, nextTick } from 'vue';
import type { Ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useSequentialFadeIn(container: Ref<HTMLElement | null>) {
  onMounted(async () => {
    await nextTick();

    const title = container.value?.querySelectorAll('.section-content__title') || [];
    const fadeInFromLeftItems = container.value?.querySelectorAll('.fade-in-left') || [];
    const fadeInFromTopItems = container.value?.querySelectorAll('.fade-in-top') || [];

    const ctx = gsap.context(() => {
      // title
      gsap.fromTo(
        title,
        { y: 20, opacity: 0 },
        {
          y: 0,
          delay: 0.2,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: container.value,
            start: 'top center',
            once: true,
            // once: false,
            // toggleActions: 'play reverse play reverse',
          },
        },
      );

      // fade-in-left
      gsap.fromTo(
        fadeInFromLeftItems,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: container.value,
            start: 'top 40%',
            // once: false,
            // toggleActions: 'play reverse play reverse',
          },
        },
      );

      // fade-in-top
      gsap.fromTo(
        fadeInFromTopItems,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.4,
          scrollTrigger: {
            trigger: container.value,
            start: 'top 40%',
            once: true,
            // once: false,
            // toggleActions: 'play reverse play reverse',
          },
        },
      );
    }, container);

    onBeforeUnmount(() => {
      ctx.revert();
    });
  });
}
