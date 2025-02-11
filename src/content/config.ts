import { defineCollection, z } from "astro:content";

const daytours__EN = defineCollection({
  type: "content",
  schema: z.object({
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
    bookButtons: z.array(z.object({
      textButton: z.string(),
      bookLink: z.string(),
    })),

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
    tagsRegion: z.string(),
    tagsType: z.array(z.string()),
    cardPicSrc: z.string(),
    cardPicAlt: z.string(),
    cardPicTitle: z.string(),

  }),
});

export const collections = {
  daytours__EN: daytours__EN,
};
