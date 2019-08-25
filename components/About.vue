<template>
  <div class="box flex flex-wrap flex-row-reverse sm:p-8">
    <div class="box__half sm:min-w-300">
      <div class="circular-image w-220 sm:w-300 h-220 sm:h-300 max-w-full" />
    </div>
    <div class="box__half sm:min-w-300 text-xl leading-tight">
      <div class="mb-8">
        Hallo,
        <br />
        <br />wir sind Ben und Vanessa und weiter unten findest du die Episoden von
        <strong>Ausbaufähig</strong>, einem Podcast über Wein. Wir werden etwa alle 2 Wochen ein oder zwei Flaschen Wein öffnen und eine Stunde lang trinken und quatschen. Die Flaschenpreise der Weine wird bei 8€ - 30€, durchschnittlich wohl 15€ liegen.
        <br />
        <br />Für News folge gerne unserem
        <a
          href="https://twitter.com/ausbaufahig"
          class="text-primary no-underline hover:underline"
          target="_blank"
          rel="noopener"
        >Twitter-Account</a> oder schaue dir Bilder auf
        <a
          href="https://www.instagram.com/ausbaufaehig_podcast/"
          class="text-primary no-underline hover:underline"
          target="_blank"
          rel="noopener"
        >Instagram</a> an.
        <br />
        <br />Hast du Fragen oder Wünsche (wie einen bestimmten Wein)? Dann schreibe uns an
        <a
          href="mailto:ausbaufaehig@vannsl.io"
          class="text-primary no-underline hover:underline"
        >ausbaufaehig@vannsl.io</a>.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.circular-image {
  margin: 48px auto;
  border-radius: 150px;
  max-width: 300px;
  background: url("https://res.cloudinary.com/vannsl-io/image/upload/c_scale,q_auto:eco,w_880/v1542826488/ben_und_vanessa.jpg");
  background-position: 30%;
  background-size: cover;
  box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.75);
}
</style>
