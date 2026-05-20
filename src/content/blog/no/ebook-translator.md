---
layout: blog
title: En enkel og nyttig tospråklig e-bokoversetter
date: 2026-05-21 12:00:00
tags:
  - 工具
  - 阅读
  - AI
categories: 项目分享
description: En e-bokoversetter som kjører fullstendig i nettleseren, støtter EPUB og PDF, oversetter mellom over 40 språk og gir tospråklig utdata.
---

Jeg har alltid hatt for vane å lese engelske originalbøker, men for å være ærlig, når jeg støter på sjeldne ord eller kompliserte setningsstrukturer, svekker det leseopplevelsen betraktelig. Oversettelsesverktøyene som finnes, kan enten bare oversette nettsider, har tvilsom oversettelseskvalitet, eller er overlesset med unødvendige funksjoner som gjør dem kompliserte å bruke.

Derfor har jeg laget mitt eget verktøy: **Ebook Translator**. Det er en e-bokoversetter som kjører fullstendig i nettleseren. Du kan bruke det direkte ved å lime inn din egen API-nøkkel. Det støtter alle de store LLM-leverandørene, og du kan også koble til egendefinerte noder.

Verktøyet finner du her: [philoli.com/projects/ebook-translator](https://philoli.com/projects/ebook-translator)

<!--more-->

Verktøyet har blitt svært godt mottatt siden lanseringen, og de viktigste funksjonene er:

-   Oversetter alle bøker, med oversatt tekst og originaltekst vist side om side. Støtter oversettelse mellom mer enn 40 språk.
-   Tre nøye utviklede oversettelsesstiler: generell/naturlig (nær originalen), roman og faglitteratur, som gir fremragende oversettelsesresultater.
-   Støtter også matematiske formler i bøker.
-   Støtter EPUB og PDF.
-   Støtter også skannede PDF-versjoner. Ved hjelp av avanserte multimodale AI-modeller kan formler gjenkjennes nøyaktig, noe som gir svært gode resultater selv for eldre bøker.
-   For fagbøker kan brukere laste opp egne terminologilister for å sikre mer presise oversettelser innen spesifikke fagfelt.
-   Oversettelsesfremdriften lagres automatisk lokalt i nettleseren. Du kan lukke siden og fortsette der du slapp. Ferdig oversatte bøker lagres i historikken, slik at du når som helst kan åpne dem igjen for redigering eller eksport. (Støtter oversettelseshistorikk for de 10 siste bøkene)
-   Filene dine lastes ikke opp til noen server. Både filanalyse og oversettelsesforespørsler fullføres i nettleseren din.
-   Med en designfilosofi om å "overlate kompleksiteten til programvaren og enkelheten til brukeren", er grensesnittet rent og elegant, brukervennlig og kraftig nok. Det har allerede mottatt mye positiv respons.

## Fordelene med tospråklig lesing

La oss også se litt på fordelene med tospråklig lesing.

1.  **Raskere lesing.** Mange bøker har ikke et innhold som er verdt å lese på originalspråket, eller forfatteren har rett og slett en dårlig skrivestil. Da vil det å lese originalen bare skape unødvendige vanskeligheter. Det er kun bøker med god eller eksepsjonelt god tekst som gir en reell leseopplevelse på originalspråket. I tillegg er kinesisk et språk med høy informasjonsdensitet. En originalbok på én million ord kan, oversatt til kinesisk, tilsvare bare 700 000–800 000 ord. For de som leser mye, er en slik effektivitetsforbedring svært merkbar.

2.  **Forbedrede språkkunnskaper.** Tospråklig lesing side om side kan forbedre lesehastigheten og -ferdighetene i alle språk, avhengig av hvordan du bruker det. Dette gjelder for øvrig ikke bare engelsk, men alle språk. Du kan lese originalen først, og når du støter på ukjente ord, kan du raskt finne ut hvordan de er oversatt i den tospråklige teksten. Fordelen med dette, sammenlignet med å slå opp i en ordbok eller bruke en innebygd ordbok, er at det er raskere og ordene er integrert i konteksten. Etter hvert vil du kjenne dem igjen.

3.  **Utvidet leseperimeter.** Det betyr at du nå kan lese bøker på praktisk talt alle språk i verden, ikke bare de få du behersker. Informasjonsinnhentingen din utvides dermed dramatisk. I tillegg til tysk, japansk og fransk litteratur, kan du også utforske bøker og magasiner på en rekke mindre språk.

4.  **Økt leseglede.** Når språkkunnskapene ikke er tilstrekkelige for å lese originalteksten raskt, kan en hakkete leseopplevelse ta bort gleden ved å lese. Et e-bokoversettelsesverktøy kan hjelpe deg med å overvinne de første hindringene og få deg til å elske å lese. Interessante bøker av høy kvalitet gir positiv tilbakemelding som inspirerer til å fortsette å utforske ukjente verdener, i stedet for å stoppe opp ved vanskeligheter og hindringer. Nysgjerrighet er alltid det viktigste; beskytt nysgjerrigheten din først, og bygg deretter videre på den for å kontinuerlig forbedre dine ferdigheter.

## Slik bruker du verktøyet

1.  Åpne [Ebook Translator](https://philoli.com/projects/ebook-translator)
2.  Velg AI-leverandør og skriv inn din API-nøkkel.
3.  Angi kilde- og målspråk.
4.  Last opp EPUB- eller PDF-filen.
5.  Klikk på et kapittel for å starte oversettelsen, eller velg «Oversett resten» for å oversette alt i bulk.
6.  Etter at oversettelsen er fullført, lastes boken automatisk ned i EPUB-format. Du kan også klikke på «Last ned EPUB» manuelt.

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-03.webp" alt="Ebook Translator grensesnitt" />
</figure>

## Eksempler på oversettelsesresultater

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-02.webp" alt="Oversettelsesresultat eksempel 1" />
</figure>

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-04.webp" alt="Oversettelsesresultat eksempel 2" />
</figure>

## Forslag og tilbakemeldinger

Hvis du støter på problemer under bruk, eller har forslag til nye funksjoner, er du hjertelig velkommen til å legge igjen en melding.

E-post: hi@philoli.com

<figure class="post-cover">
  <img src="/uploads/images/ebook-translator/ebook-translator-01.webp" alt="Kontaktinformasjon" />
</figure>

---

> Prøv det selv: [philoli.com/projects/ebook-translator](https://philoli.com/projects/ebook-translator)

## Mer lesestoff

-   [12 gode bøker: Min toppliste fra 2025](/zh/blog/2025-top-rated-reading-list)
