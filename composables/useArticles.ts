import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface UseArticles {
  search: string;
  data: ParsedContent[];
  loading: boolean;
  error: any;
}

export function useArticles() {
  const state = useState<UseArticles>(() => ({
    search: "",
    data: [],
    loading: false,
    error: null,
  }));

  const fetchArticles = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(async () => {
      let articles = await queryCollection('pages').all()
      return articles.sort();
    });
    // todo: error handling
    state.value.data = data.value ?? [];
  };

  const articles = computed<ParsedContent[]>(() => {
    if (!state.value.search || !state.value.data) {
      return state.value.data ?? [];
    }
    return state.value.data.filter((article: any) => {
      return article.title
        .toLowerCase()
        .includes(state.value.search.toLowerCase());
    });
  });

  const articlesPast = computed(() => {
    const pastArticles = articles.value.filter((article) =>
      isPast(article)
    );
    return useGroupBy(
      pastArticles.sort((a, b) => new Date(a.meta.date) - new Date(b.meta.date)).reverse(),
      "date"
    );
  });  

  const articlesFuture = computed(() => {
    return articles.value.filter((article) => !isPast(article));
  });

  return {
    ...toRefs(state.value),
    articles,
    articlesPast,
    articlesFuture,
    fetchArticles,
  };
}
