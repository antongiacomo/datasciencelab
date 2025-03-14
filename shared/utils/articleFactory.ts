import type { PagesCollectionItem } from "@nuxt/content";
import moment from "moment";

export default function (item : PagesCollectionItem) {
    return {
        title: item.title,
        description: item.description,
        body: item.body,
        meta: item.meta,
        date: item.meta.date,
        dateFormatted: moment(`${item.meta.date}`, "DD-MM-YYYY").format("DD MMMM YYYY"),
        time: item.meta.time,
        isPast: moment(`${item.meta.time} ${item.meta.date}`, "HH:mm DD-MM-YYYY").isBefore(moment().subtract(1, 'h')),
        path: item.path,
        _resource: item,
    };
}