import { defineCollection, z } from "astro:content";

const daytours__EN = defineCollection({
  type: "content",
  schema: z.object({
    // Filter
    filter: z.string().optional(),
    plus: z.string().optional(),


    // Rates
    vanISK: z.number(),
    jeepISK: z.number(),

    // Head and metas
    pageTitle: z.string(),
    description: z.string(),
    ogTitle: z.string(),
    ogImage: z.string(),
    language: z.string(),

    // Tour datas
    duration: z.string(),
    capacity: z.string(),
    season: z.string(),
    difficulty: z.string(),

    // H1
    tourTitle: z.string(),

    // Header Picture
    headerCoverSrcMobile: z.string(),
    headerCoverSrcPC: z.string(),
    headerCoverAlt: z.string(),
    headerCoverTitle: z.string(),

    // BookButtons
    bookButtons: z.array(
      z.object({
        textButton: z.string(),
        bookLink: z.string(),
      })
    ),

    // Iti Picture
    itiCoverTitle: z.string(),
    itiCoverImgSrcMobile: z.string(),
    itiCoverImgSrcPC: z.string(),
    itiCoverImgAlt: z.string(),
    itiCoverImgTitle: z.string(),

    // Links
    linkFr: z.string(),
    bookVan: z.string(),
    bookJeep: z.string(),
    fulllinkFr: z.string(),

    // Itinerary
    itiItems: z.array(
      z.object({
        itiItemTitle: z.string(),
        itiItemPicSrcMobile: z.string(),
        itiItemPicSrcPC: z.string(),
        itiItemPicAlt: z.string(),
        itiItemPicTitle: z.string(),
        itiItemStrings: z.array(z.string()),
      })
    ),

    // Tour infos
    goodToKnow: z.array(z.string()),
    WhatToBring: z.array(z.string()),
    Included: z.array(z.string()),
    nonIncluded: z.array(z.string()),

    // Gallery
    gallery: z.array(
      z.object({
        srcMob: z.string(),
        srcPc: z.string(),
        alt: z.string(),
        title: z.string(),
      })
    ),

    // Card
    tags: z.array(z.string()),
    cardPicSrc: z.string(),
    cardPicAlt: z.string(),
    cardPicTitle: z.string(),

    // Vehicles
    vehicles: z.array(
      z.object({
        name: z.string(),
        srcPC: z.string(),
        srcMobile: z.string(),
        alt: z.string(),
        title: z.string(),
        rate: z.number(),
        bookLink: z.string(),
        capacity: z.string(),
      })
    ),

    // Form

    form: z.string(),
  }),
});

const daytours__FR = defineCollection({
  type: "content",
  schema: z.object({
    // Filter
    filter: z.string().optional(),
    plus: z.string().optional(),

    // Rates
    vanISK: z.number(),
    jeepISK: z.number(),

    // Head and metas
    pageTitle: z.string(),
    description: z.string(),
    ogTitle: z.string(),
    ogImage: z.string(),
    language: z.string(),

    // Tour datas
    duration: z.string(),
    capacity: z.string(),
    season: z.string(),
    difficulty: z.string(),

    // H1
    tourTitle: z.string(),

    // Header Picture
    headerCoverSrcMobile: z.string(),
    headerCoverSrcPC: z.string(),
    headerCoverAlt: z.string(),
    headerCoverTitle: z.string(),

    // BookButtons
    bookButtons: z.array(
      z.object({
        textButton: z.string(),
        bookLink: z.string(),
      })
    ),

    // Iti Picture
    itiCoverTitle: z.string(),
    itiCoverImgSrcMobile: z.string(),
    itiCoverImgSrcPC: z.string(),
    itiCoverImgAlt: z.string(),
    itiCoverImgTitle: z.string(),

    // Links
    linkFr: z.string(),
    bookVan: z.string(),
    bookJeep: z.string(),
    fulllinkFr: z.string(),

    // Itinerary
    itiItems: z.array(
      z.object({
        itiItemTitle: z.string(),
        itiItemPicSrcMobile: z.string(),
        itiItemPicSrcPC: z.string(),
        itiItemPicAlt: z.string(),
        itiItemPicTitle: z.string(),
        itiItemStrings: z.array(z.string()),
      })
    ),

    // Tour infos
    goodToKnow: z.array(z.string()),
    WhatToBring: z.array(z.string()),
    Included: z.array(z.string()),
    nonIncluded: z.array(z.string()),

    // Gallery
    gallery: z.array(
      z.object({
        srcMob: z.string(),
        srcPc: z.string(),
        alt: z.string(),
        title: z.string(),
      })
    ),

    // Card
    tags: z.array(z.string()),
    cardPicSrc: z.string(),
    cardPicAlt: z.string(),
    cardPicTitle: z.string(),

    // Vehicles
    vehicles: z.array(
      z.object({
        name: z.string(),
        srcPC: z.string(),
        srcMobile: z.string(),
        alt: z.string(),
        title: z.string(),
        rate: z.number(),
        bookLink: z.string(),
        capacity: z.string(),
      })
    ),

    // Form

    form: z.string(),
  }),
});

const excurs__EN = defineCollection({
  type: "content",
  schema: z.object({
   cardCover: z.object({
    src: z.string(),
    alt: z.string(),
    title: z.string()
   }),
   pageCover: z.object({
    srcPC: z.string(),
    srcMobile: z.string(),
    alt: z.string(),
    title: z.string()
   }),

   title1: z.string(),
   title2: z.string(),

   tag: z.array(z.string()),

   rate: z.number(),

   linkFr: z.string(),
   hrefLang: z.string(),

   url: z.string(),

   pageTitle: z.string(),

   metaDescription: z.string()
  }),
});

export const collections = {
  daytours__EN: daytours__EN,
  daytours__FR: daytours__FR,
  excurs__EN: excurs__EN

};
