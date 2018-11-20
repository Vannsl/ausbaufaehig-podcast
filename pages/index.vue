<template>
  <div>
    <bar :should-check-stickyness="true" />
    <div class="content flex-1">
      <hero />
      <section class="container mx-auto my-16 p-4">
        <div class="flex flex-wrap flex-row-reverse p-2 sm:p-8 bg-black shadow-md">
          <div class="flex-1 max-w-full min-w-220 sm:min-w-300 px-4">
            <div class="circular-image w-220 sm:w-300 h-220 sm:h-300 max-w-full" />
          </div>
          <div class="flex-1 max-w-full min-w-220 sm:min-w-300 px-4 text-xl leading-tight">
            <div class="mb-8">
              Hallo,<br><br>
              wir sind Ben und Vanessa und bald findest du hier die Episoden unseres Podcasts <strong>Ausbaufähig</strong>. Jede Woche (ist zumindest der Plan) werden wir einen Wein zu einem bestimmten Thema (z.B. wie aktuell die Forum Vini 2018, oder ein spezifisches Land, Region etc.) trinken und über ihn reden. Wir sind keine ausgebildeten Sommeliers, sondern genießen einfach sehr gerne guten Wein und fanden es schade, dass es so wenig deutsche Podcasts über Wein gibt. Denn schließlich ist es nicht immer leicht, einen spannenden neuen Wein zu finden. Üblicherweise kosten unsere Weine zwischen 6,50 und 30 €, der Hauptanteil wird bei 15 € liegen. Also! Bald geht es los, wir freuen uns auf drauf!
              <br><br>
              Du wartest ganz gespannt auf die erste Episode? Folge uns einfach auf unserem
              <a
                href="https://twitter.com/ausbaufahig"
                class="hover:text-primary"
                target="_blank"
              >
              Twitter-Account</a>, da werden wir tweeten, sobald neue Episoden zur Verfügung stehen!
              <br><br>
              Hast du Fragen? Dann schreibe uns gerne an
              <a
                href="mailto:ausbaufaehig@vannsl.io"
                class="hover:text-primary"
              >ausbaufaehig@vannsl.io</a>.
            </div>
          </div>
        </div>
      </section>
      <counter />
    </div>
    <footer-bar />
  </div>
</template>

<script>
import Bar from "~/components/Bar.vue";
import Hero from "~/components/Hero.vue";
import Counter from "~/components/Counter.vue";
import FooterBar from "~/components/Footer.vue";

export default {
  components: {
    Bar,
    Hero,
    FooterBar,
    Counter
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            'Beim Wein-Podcast Ausbaufähig von Ben und Vanessa werden verschiedenste Weine aus der ganzen Welt getrunken und besprochen. Weder Ben noch Vanessa sind ausgebildete Sommeliers, sie trinken einfach nur gern Wein! Und wie Wein erstmal im Fass ausgebaut werden muss, bevor er gut wird, ist ihr Wissen daher auch eher "ausbaufähig", aber sie trinken trotzdem gerne!'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.circular-image {
  margin: 48px auto;
  border-radius: 150px;
  max-width: 300px;
  background: url("https://res.cloudinary.com/vannsl-io/image/upload/v1542542997/ben_und_vanessa.jpg");
  background-position: 30%;
  background-size: cover;
  box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.75);
}
</style>
