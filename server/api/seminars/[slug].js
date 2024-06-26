import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {

  const path = "/seminars/" + getRouterParam(event, 'slug')
  console.log('path', path)
  const doc = await serverQueryContent(event).where({ _path: path }).findOne();
  console.log('doc', doc)
  const feedString = ''
  event.res.setHeader('content-type', 'text/plain')

  const response = `
  The CINI National Lab on Data Science is pleased to announce the third seminar in the series Tales on Data Science and Big Data.

*******************************************

Date: ${convertDate(doc.date)}
Time:  ${doc.time} CET
Website: https://seminars.sesar.di.unimi.it/

Title: ${convertAscii(doc.title)}

Speakers: ${doc.people.map(a => convertAscii(a.name) +" (" + convertAscii(a.affiliation) + ")").join(", ")}

Abstract: ${doc.body.children[1].children[0].value ?? ''}

Track: Academic

Link: ${doc.location}

*******************************************

The seminars Tales on Data Science and Big Data present and discuss the most recent challenges, emerging trends, and theoretical and practical research and development in the field of Data Science and Big Data. Seminars will cover basic and applied research, as well as industrial activities, pertaining to data, from data governance to data processing and analysis. Seminars will also cover research and development in related domains where data and data science technologies are key, such as distributed systems and architectures, cloud-edge continuum, high-performance computing, blockchain, statistics, security and privacy, assurance and certification.

The seminars are structured in three main tracks: academic, featuring renowned Italian and international scientists; industry, featuring speakers from industrial domains; and young, featuring researchers in early-stage careers.

The research seminars target the Italian and international research community at all levels, from PhD students to professors and researchers in both academia, industry, and public administration. Seminars are held in English, virtually, tentatively on a two-month basis.
  `
  event.res.end(response.trim())
})