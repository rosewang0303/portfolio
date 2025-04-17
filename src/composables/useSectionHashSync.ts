import { onMounted, onBeforeUnmount } from 'vue';

export function useSectionHashSync(
  sectionIds: string[],
  options?: { offset?: number; threshold?: number },
) {
  let observer: IntersectionObserver;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              history.replaceState(history.state, '', `#${id}`);
            }
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.5,
        rootMargin: `${-(options?.offset ?? 0)}px 0px 0px 0px`,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
    }
  });
}
