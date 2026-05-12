import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { LegalPage, LegalSection } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Impressum · Amin Finanzberatung",
  description:
    "Impressum und Anbieterkennzeichnung der persönlichen Finanzberatung von Amin Barraza in Zollikofen.",
};

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <LegalPage
          index="08"
          kicker="Impressum"
          title={
            <>
              Wer hinter dieser Seite{" "}
              <em className="italic text-green">steht.</em>
            </>
          }
          updated="Stand: Mai 2026"
        >
          <LegalSection title="Anbieter" number="01">
            <p>
              Amin Barraza, persönlicher Finanzberater
              <br />
              Bernstrasse 162
              <br />
              3052 Zollikofen
              <br />
              Schweiz
            </p>
            <p>
              Telefon:{" "}
              <a className="underline-link" href="tel:+41764674002">
                +41 76 467 40 02
              </a>
              <br />
              E-Mail:{" "}
              <a
                className="underline-link break-all"
                href="mailto:amin.barraza@swisslife-select.ch"
              >
                amin.barraza@swisslife-select.ch
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Berufliche Tätigkeit" number="02">
            <p>
              Die auf dieser Website beschriebene Finanzberatung erfolgt im
              Rahmen einer Tätigkeit als angeschlossener Berater der Swiss
              Life Select Schweiz AG, Generalagentur Zollikofen. Vermittlungen
              von Versicherungs- und Vorsorgeprodukten werden über die Swiss
              Life Select Schweiz AG abgewickelt, die als ungebundene
              Versicherungsvermittlerin im Register der Eidgenössischen
              Finanzmarktaufsicht FINMA eingetragen ist.
            </p>
          </LegalSection>

          <LegalSection title="Aufsicht und Register" number="03">
            <p>
              Versicherungsvermittlung: Eidgenössische Finanzmarktaufsicht
              FINMA, Laupenstrasse 27, 3003 Bern.
              <br />
              Berufshaftpflicht: bestehende Deckung über die Swiss Life Select
              Schweiz AG.
            </p>
          </LegalSection>

          <LegalSection title="Inhaltliche Verantwortung" number="04">
            <p>
              Verantwortlich für den Inhalt im Sinne der Schweizer
              Anbieterkennzeichnung und der einschlägigen Bestimmungen des
              Schweizer Bundesgesetzes gegen den unlauteren Wettbewerb (UWG)
              ist Amin Barraza, Adresse wie oben.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Inhalte" number="05">
            <p>
              Die Inhalte dieser Website werden mit grösster Sorgfalt erstellt
              und laufend geprüft. Für die Richtigkeit, Vollständigkeit und
              Aktualität sämtlicher Inhalte kann jedoch keine Gewähr
              übernommen werden. Sämtliche Informationen dienen der
              allgemeinen Orientierung und ersetzen keine individuelle
              Beratung. Verbindliche Aussagen ergeben sich erst aus einem
              persönlichen Gespräch und den schriftlichen Unterlagen.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Links" number="06">
            <p>
              Diese Website kann Verweise auf Websites Dritter enthalten.
              Solche verlinkten Seiten liegen ausserhalb des
              Einflussbereichs des Anbieters. Für die Inhalte, die
              Verfügbarkeit und den Datenschutz dieser Drittseiten ist
              ausschliesslich der jeweilige Anbieter verantwortlich.
            </p>
          </LegalSection>

          <LegalSection title="Urheberrecht" number="07">
            <p>
              Texte, Bilder, Grafiken und das gestalterische Erscheinungsbild
              dieser Website sind urheberrechtlich geschützt. Vervielfältigung,
              Bearbeitung, Verbreitung oder jede Form der Verwertung
              ausserhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des Anbieters.
            </p>
          </LegalSection>

          <LegalSection title="Anwendbares Recht" number="08">
            <p>
              Auf das Verhältnis zwischen Anbieter und Nutzerinnen sowie
              Nutzern dieser Website findet, soweit zulässig, ausschliesslich
              Schweizer Recht Anwendung. Gerichtsstand ist, soweit zulässig,
              Bern.
            </p>
          </LegalSection>
        </LegalPage>
      </main>
      <SiteFooter />
    </>
  );
}
