<template>
  <div>
    <bar :should-check-stickyness="true" />
    <div class="content flex-1">
      <hero />
      <section class="container mx-auto my-16 p-4">
        <div class="box flex flex-wrap flex-row-reverse sm:p-8">
          <div class="box__half sm:min-w-300">
            <div class="circular-image w-220 sm:w-300 h-220 sm:h-300 max-w-full" />
          </div>
          <div class="box__half sm:min-w-300 text-xl leading-tight">
            <div class="mb-8">
              Hallo,<br><br>
              wir sind Ben und Vanessa und weiter unten findest du die Episoden von <strong>Ausbaufähig</strong>, einem Podcast über Wein. Wir werden etwa alle 2 Wochen ein oder zwei Flaschen Wein öffnen und eine Stunde lang trinken und quatschen. Die Flaschenpreise der Weine wird bei 8€ - 30€, durchschnittlich wohl 15€ liegen.
              <br><br>
              Für News folge gerne unserem
              <a
                href="https://twitter.com/ausbaufahig"
                class="hover:text-primary"
                target="_blank"
                rel="noopener"
              >
              Twitter-Account</a> oder schaue dir Bilder auf
              <a
                href="https://www.instagram.com/ausbaufaehig_podcast/"
                class="hover:text-primary"
                target="_blank"
                rel="noopener"
              >
              Instagram</a> an.
              <br><br>
              Hast du Fragen oder Wünsche (wie einen bestimmten Wein)? Dann schreibe uns an
              <a
                href="mailto:ausbaufaehig@vannsl.io"
                class="hover:text-primary"
              >ausbaufaehig@vannsl.io</a>.
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto my-16 p-4">
        <div class="box sm:p-8">
          <div class="flex flex-col items-center px-4">
            <div class="mx-8 my-2">
              <RSS />
            </div>
            <div>
              <h1 class="mb-4">
                Ausbaufähig
              </h1>
              <p class="text-xl leading-tight">
                Der Wein-Podcast von Ben und Vanessa. Wir haben beruflich nichts mit Wein zu tun, wir trinken einfach nur gerne und reden dann darüber! Alle Weine wurden privat gekauft und sind für uns meistens auch neu.
              </p>
            </div>
            <div class="my-2">
              <Episode
                :number="3"
                :title="title3"
                :description="description3"
              >
                <dl>
            <dt>[00:00:14]</dt>
            <dd>Nachtrag Episode 2</dd>
            </dl>

            <dl>
            <dt>[00:03:00]</dt>
            <dd>Vorstellung der heutigen Weine</dd>
            </dl>

            <dl>
            <dt>[00:05:52]</dt>
            <dd>Verköstigung 1. Wein: Chenin Chardonnay</dd>
            </dl>

            <dl>
            <dt>[00:07:32]</dt>
            <dd>Traube Chenin Blanc</dd>
            </dl>

            <dl>
            <dt>[00:14:10]</dt>
            <dd>Vanessas Tollwood Erlebnis</dd>
            </dl>

            <dl>
            <dt>[00:19:30]</dt>
            <dd>Detaillierte Vorstellung Zweiter Wein (Chardonnay Auslese)</dd>
            </dl>

            <dl>
            <dt>[00:21:36]</dt>
            <dd>Farbvergleich beider Weißweine</dd>
            </dl>

            <dl>
            <dt>[00:26:00]</dt>
            <dd>Herkunft unseres Britzingen Weins</dd>
            </dl>

            <dl>
            <dt>[00:33:30]</dt>
            <dd>Wie warm braucht es der Chardonnay?</dd>
            </dl>

            <dl>
            <dt>[00:43:02]</dt>
            <dd>Und welcher Chardonnay ist besser?</dd>
            </dl>

            <dl>
            <dt>[00:48:01]</dt>
            <dd>Es prickelt! Champagner!</dd>
            </dl>

            <dl>
            <dt>[00:50:03]</dt>
            <dd>Welche Trauben sind in Sekt?</dd>
            </dl>
              </Episode>
              <Episode
                :number="2"
                :title="title2"
                :description="description2"
              >
                <dl>
                <dt>[00:00:12] Was trinken wir heute?</dt>
                <dd>Ben erklärt,wie wir zu dem heutigen Wein gekommen sind.</dd>
                </dl>
                <dl>
                <dt>[00:04:50] Lasst uns trinken!</dt>
                <dd>Schon wird er verkostet, der: Blank Canvas Syrah 2015 vom Gebiet Gimblett Gravels in Hawkes Bay.</dd>
                </dl>
                <dl>
                <dt>[00:11:04] Von welchen Trauben stammt der Shiraz ab</dt>
                <dd>Die Französisch-Experten versuchen die Weinsorten auszusprechen, aus denen der Shiraz gekreut wurde: Dureza und Mondeuse Blanche</dd>
                </dl>
                <dl>
                <dt>[00:13:03] Im Restaurant?</dt>
                <dd>Was bestellen wir blind im Restaurant, wenn wir vor der Weinkarte sitzen?</dd>
                </dl>
                <dl>
                <dt>[00:14:00] Korken oder Weinverschluss</dt>
                <dd>Ausgiebige Diskussion über den Verschluss von Weinflaschen</dd>
                </dl>
                <dl>
                <dt>[00:23:56] Verletzungen und Trinktabelle</dt>
                <dd>Vanessa erzählt, wie der Wein geöffnet wurde, und wie sie dadurch glücklicherweise einen Flyer mit einer Trinktabelle fand.</dd>
                </dl>
                <dl>
                <dt>[00:39:09] Unterschiede zu anderen Shiraz/Syrah</dt>
                <dd>Unterscheidet sich dieser Shiraz von anderen?</dd>
                </dl>
                <dl>
                <dt>[00:46:30] Glühwein und Sangria</dt>
                <dd>Wie stehen wir denn zu dem Thema Glühwein und Sangria?</dd>
                </dl>
              </Episode>
              <Episode
                :number="1"
                :title="title1"
                :description="description1"
              >
                <dl>
                <dt>[00:00:54] Was trinken wir heute?</dt>
                <dd>Ben erklärt, wer Markus Molitor ist und wo dessen Wein herkommt.</dd>
                </dl>
                <dl>
                <dt>[00:05:40] Erster Wein!</dt>
                <dd>"2016 Riesling Erdener Tröpfchen trocken" wird getrunken.</dd>
                </dl>
                <dl>
                <dt>[00:08:58] Und was kostets?</dt>
                <dd>Preise der heutigen Weine</dd>
                </dl>
                <dl>
                <dt>[00:09:22] Wie sind wir dazu gekommen?</dt>
                <dd>Vanessa erzählt, wie sie generell zum Weintrinken gekommen sind und wieso es eine Verbindung zu Markus Molitor gibt.</dd>
                </dl>
                <dl>
                <dt>[00:19:21] Die Rebsorte Riesling</dt>
                <dd>Welche Charakteristiken sind eigentlich typisch für einen Riesling?</dd>
                </dl>
                <dl>
                <dt>[00:25:30] Zweiter Wein!</dt>
                <dd>"2016 Riesling Wehlener Klosterberg trocken" wird getrunken.</dd>
                </dl>
                <dl>
                <dt>[00:30:20] Kabinett</dt>
                <dd>Was sind eigentlich Kabinettweine und wofür stehen Oechsle?</dd>
                </dl>
                <dl>
                <dt>[[00:37:44] Parker</dt>
                <dd>Ben erzählt uns was die Parker-Skala ist</dd>
                </dl>
                <dl>
                <dt>[00:52:27] Anreicherung</dt>
                <dd>Vanessa und Ben finden heraus, was es bedeutet, wenn ein Wein "angereichert wird".</dd>
                </dl>
              </Episode>
              <Episode
                :number="0"
                :title="title0"
                :description="description0"
              >
                Keine
              </Episode>
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
import RSS from "~/components/icons/RSS.vue";
import Episode from "~/components/Episode.vue";
import Counter from "~/components/Counter.vue";
import FooterBar from "~/components/Footer.vue";

export default {
  components: {
    Bar,
    Hero,
    FooterBar,
    Counter,
    RSS,
    Episode
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
  },
  data() {
    return {
      title0: "#0 Ausbaufähig sagt Hallo",
      description0:
        "Ben und Vanessa stellen Ausbaufähig, einen Podcast über Wein, vor.",
      title1: "#1 Es rieselt von der Mosel",
      description1:
        'Zum Auftakt werden 2 Rieslinge von Markus Molitor miteinander verglichen. Wir lernen was Kabinett bedeutet und Oechsle sind. Außerdem reden wir über die Parker-Skala. Weine: "2016 Riesling Erdener Treppchen Kabinett trocken" und "2016 Riesling Wehlener Klosterberg trocken"',
      title2: "#2 Syrah in der Glühweinzeit",
      description2:
        'Neuseeländischer Shiraz, vermutlich der erste, der mit Grünem Veltliner vergoren wurde. Ausgiebig reden wir über diesen hochpreisigen, aber auch hochprämierten Rotwein (93/100 Campbell, 18/20 Robinson). Außerdem reden wir über Glühwein und Sangria, da zwei Tage nach Aufnahme der Folge die ersten Christkindlmärkte eröffneten.',
      title3: "#3 Chardonnay vs. Chardonnay",
      description3:
        'Chardonnay vs. Chardonnay bzw. säurefrisch vs. Auslese ist das Motto dieser Episode. Wir verköstigen einen Chenin Chardonnay 2017 des Hauses Doamine Du Tariquet aus Frankreich, recht günstig (6,50 €) und eine Chardonnay Auslese 2005 der Winzergemeinschaft Britzingen (ca. 15€ für 0,5l) aus Baden. Das Ergebnis überraschte uns selbst! (Spoiler: Nein, die Auslese war natürlich nicht schlecht.) Außerdem reden wir kurz über die Trauben von Champagner und Sekt, schweifen zum Tollwood ab und finden heraus, dass wir die Feuerzangenbowle schauen müssen.'
    };
  }
};
</script>

<style lang="scss" scoped>
.circular-image {
  margin: 48px auto;
  border-radius: 150px;
  max-width: 300px;
  background: url("https://res.cloudinary.com/vannsl-io/image/upload/c_scale,q_80,w_600/v1542826488/ben_und_vanessa.jpg");
  background-position: 30%;
  background-size: cover;
  box-shadow: 0px 0px 50px -10px rgba(0, 0, 0, 0.75);
}
</style>
