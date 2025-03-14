import type { PagesCollectionItem } from "@nuxt/content";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat);

export default function (item : PagesCollectionItem) {
    return {
        title: item.title,
        description: item.description,
        body: item.body,
        meta: item.meta,
        date: item.meta.date,
        dateFormatted: dayjs(`${item.meta.date}`, "DD-MM-YYYY").format("DD MMMM YYYY"),
        time: item.meta.time,
        isPast: dayjs(`${item.meta.time} ${item.meta.date}`, "HH:mm DD-MM-YYYY").isBefore(dayjs().subtract(1, 'h')),
        path: item.path,
        _resource: item,
    };
}