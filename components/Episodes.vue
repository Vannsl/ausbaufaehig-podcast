<template>
  <div class="box sm:p-8">
    <div class="flex flex-col items-center px-4">
      <div class="mx-8 my-2">
        <RSS/>
      </div>
      <div>
        <h1 class="mb-4">Ausbaufähig</h1>
        <p
          class="text-xl leading-tight"
        >Der Wein-Podcast von Ben und Vanessa. Wir haben beruflich nichts mit Wein zu tun, wir trinken einfach nur gerne und reden dann darüber! Alle Weine wurden privat gekauft und sind für uns meistens auch neu.</p>
      </div>
      <div class="my-2">
        <Episode :number="4" :title="title4" :description="description4">
          <dl>
            <dt>[00:00:11]</dt>
            <dd>Warum gibt es diesmal Champagner? Wie oft gönnen wir uns denn so einen Schampus?</dd>
          </dl>

          <dl>
            <dt>[00:02:50]</dt>
            <dd>Heute reden wir über Perl- und Schaumweine und deren Herstellungsverfahren</dd>
          </dl>

          <dl>
            <dt>[00:05:58]</dt>
            <dd>Was ist der Unterschied zwischen Perl- und Schaumweinen?</dd>
          </dl>

          <dl>
            <dt>[00:07:12]</dt>
            <dd>Wo ist diese Champagne und warum wird dort so viel Schaumwein hergestellt?</dd>
          </dl>

          <dl>
            <dt>[00:12:20]</dt>
            <dd>Vanessa erklärt, wie Schaumwein hergestellt wird.</dd>
          </dl>

          <dl>
            <dt>[00:16:30]</dt>
            <dd>Was sagt Amazon zu dem Champagner?</dd>
          </dl>

          <dl>
            <dt>[00:23:07]</dt>
            <dd>Rezeptur des Champagners</dd>
          </dl>

          <dl>
            <dt>[00:29:21]</dt>
            <dd>Wie entstand prickelnder Schaumwein aus dem üblichen Stillwein?</dd>
          </dl>

          <dl>
            <dt>[00:33:30]</dt>
            <dd>Mit welchen Trauben prickelts außerhalb der Champagne? Rest Frankreich, Deutschland, Italien, Kalifornien etc.</dd>
          </dl>

          <dl>
            <dt>[00:36:22]</dt>
            <dd>Was hat es dann mit Prosecco auf sich?</dd>
          </dl>

          <dl>
            <dt>[00:41:20]</dt>
            <dd>Aperitiv oder Essensbegleiter?</dd>
          </dl>
        </Episode>
        <Episode :number="3" :title="title3" :description="description3">
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
        <Episode :number="2" :title="title2" :description="description2">
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
        <Episode :number="1" :title="title1" :description="description1">
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
        <Episode :number="0" :title="title0" :description="description0">Keine</Episode>
      </div>
    </div>
  </div>
</template>

<script>
import RSS from "~/components/icons/RSS.vue";
import Episode from "~/components/Episode.vue";
export default {
  name: "Episodes",
  components: {
    RSS,
    Episode
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
        "Neuseeländischer Shiraz, vermutlich der erste, der mit Grünem Veltliner vergoren wurde. Ausgiebig reden wir über diesen hochpreisigen, aber auch hochprämierten Rotwein (93/100 Campbell, 18/20 Robinson). Außerdem reden wir über Glühwein und Sangria, da zwei Tage nach Aufnahme der Folge die ersten Christkindlmärkte eröffneten.",
      title3: "#3 Chardonnay vs. Chardonnay",
      description3:
        "Chardonnay vs. Chardonnay bzw. säurefrisch vs. Auslese ist das Motto dieser Episode. Wir verköstigen einen Chenin Chardonnay 2017 des Hauses Doamine Du Tariquet aus Frankreich, recht günstig (6,50 €) und eine Chardonnay Auslese 2005 der Winzergemeinschaft Britzingen (ca. 15€ für 0,5l) aus Baden. Das Ergebnis überraschte uns selbst! (Spoiler: Nein, die Auslese war natürlich nicht schlecht.) Außerdem reden wir kurz über die Trauben von Champagner und Sekt, schweifen zum Tollwood ab und finden heraus, dass wir die Feuerzangenbowle schauen müssen.",
      title4: "#4 Prickelnder Start in das neue Jahr",
      description4:
        "Im neuen Jahr prickelts! Ben und Vanessa trinken im Rahmen des Ausbaufähig Podcasts gemeinsam ihren ersten Champagner - einen Moet et Chandon. Doch wie wird Schaumwein eigentlich hergestellt, was macht den Champagner besonders und was ist dann Perlwein? Wir reden über günstige Alternativen, wie den Tilman Secco, einem Perlwein mit zugesetzter Kohlensäure. Außerdem testen wir einen Szürkebarát (ungarischen Grauburgunder) als Basis für ein Käsefondue."
    };
  }
};
</script>

<style>
</style>
