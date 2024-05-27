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
    const { data, error } = await useAsyncData(() => {

      return queryContent("seminars").sort({ createdAt: 1}).find();
    });
    // todo: error handling
    state.value.data = data.value ?? [];
  };

  const articles = computed<ParsedContent[]>(() => {
    if (!state.value.search || !state.value.data) {
      return state.value.data ?? [];
    }
    return state.value.data.filter((article: any) => {
      return article.title.toLowerCase().includes(state.value.search.toLowerCase());
    });
  });

  const articlesPast = computed(() => {
    return useGroupBy(
      articles.value.filter((article) => isPast(article.date)),
      "date"
    )
  });

  const articlesFuture = computed(() => {
    return articles.value.filter((article) => !isPast(article.date));
  });

  return {
    ...toRefs(state.value),
    articles,
    articlesPast,
    articlesFuture,
    fetchArticles,
  };
}
