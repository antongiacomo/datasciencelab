import type { ParsedContent } from "@nuxt/content/dist/runtime/types"
import dayjs from "dayjs";

import articleFactory from "~/shared/utils/articleFactory";

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


    if (error.value) {
      state.value.error = error.value;
      state.value.loading = false;
      state.value.data = [];
      return;
    }

    state.value.data = data.value ?? [];
  };

  const articles = computed<ParsedContent[]>(() => {
    if (!state.value.data) {
      return [];
    }

    return state.value.data.filter((article: any) => {
      return article.title
        .toLowerCase()
        .includes(state.value.search.toLowerCase())
      
    }).map((article) => articleFactory(article));
  });

  const articlesPast = computed(() => {
    const articlesPast = articles.value
      .filter((article) => article.isPast)
      .sort((a, b) => new Date(a.meta.date).getTime() - new Date(b.meta.date).getTime())
      .reverse();

    const articlesMonthGrouped = useGroupBy(articlesPast, "date")

    return Object.entries(articlesMonthGrouped).map(([date, articles]) => {
      return {
        monthName: dayjs(date, "DD-MM-YYYY").format("MMMM YYYY"),
        articles
      }
    });
  });

  const articlesFuture = computed(() => {
    return articles.value.filter((article) => !article.isPast);
  });

  return {
    ...toRefs(state.value),
    articles,
    articlesPast,
    articlesFuture,
    fetchArticles,
  };
}
