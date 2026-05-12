import type { Metadata } from "next";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import { LegalPage, LegalSection } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz · Amin Finanzberatung",
  description:
    "Datenschutzerklärung der persönlichen Finanzberatung von Amin Barraza. Umgang mit Personendaten nach Schweizer DSG und DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <LegalPage
          index="09"
          kicker="Datenschutz"
          title={
            <>
              Wie ich mit Ihren{" "}
              <em className="italic text-green">Daten umgehe.</em>
            </>
          }
          updated="Stand: Mai 2026"
        >
          <LegalSection title="In Kürze" number="01">
            <p>
              Ihre Daten gehören Ihnen. Ich erhebe nur, was für eine seriöse
              Beratung nötig ist, speichere in der Schweiz, gebe nichts an
              Dritte weiter und lösche, sobald gesetzliche Aufbewahrungsfristen
              das zulassen.
            </p>
          </LegalSection>

          <LegalSection title="Verantwortliche Stelle" number="02">
            <p>
              Amin Barraza, Bernstrasse 162, 3052 Zollikofen, Schweiz.
              <br />
              E-Mail:{" "}
              <a
                className="underline-link break-all"
                href="mailto:amin.barraza@swisslife-select.ch"
              >
                amin.barraza@swisslife-select.ch
              </a>
              .
            </p>
            <p>
              Für Bearbeitungen, die im Rahmen der Vermittlungstätigkeit über
              die Swiss Life Select Schweiz AG erfolgen, ist zusätzlich die
              Datenschutzerklärung der Swiss Life Select Schweiz AG anwendbar.
            </p>
          </LegalSection>

          <LegalSection title="Geltende Rechtsgrundlagen" number="03">
            <p>
              Die Bearbeitung Ihrer Personendaten richtet sich nach dem
              revidierten Schweizer Datenschutzgesetz (revDSG). Für Personen
              mit Wohnsitz im Europäischen Wirtschaftsraum kommt zusätzlich
              die Datenschutz-Grundverordnung (DSGVO) zur Anwendung, soweit
              ihr sachlicher Geltungsbereich eröffnet ist.
            </p>
          </LegalSection>

          <LegalSection title="Welche Daten ich bearbeite" number="04">
            <p>Ich bearbeite ausschliesslich die folgenden Datenarten:</p>
            <ul>
              <li>
                <strong>Kontaktangaben</strong>, die Sie im Formular oder per
                E-Mail mitteilen: Name, E-Mail, optional Telefon und
                Geburtsjahr.
              </li>
              <li>
                <strong>Anliegen</strong>, also Ihre Auswahl im Formular sowie
                allfällige Freitextangaben zu Ihrer Situation.
              </li>
              <li>
                <strong>Beratungsdaten</strong>, die im Mandatsverlauf
                entstehen: Einkommens-, Vorsorge-, Versicherungs- und
                Vermögensangaben. Diese erfasse ich nur, wenn Sie sie aktiv
                bereitstellen.
              </li>
              <li>
                <strong>Technische Daten</strong>, die der Hosting-Anbieter
                beim Aufruf der Seite automatisch verarbeitet: IP-Adresse,
                Browsertyp, Zeitpunkt des Aufrufs, abgerufene Ressource.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="Zwecke der Bearbeitung" number="05">
            <p>
              Ihre Daten werden ausschliesslich verwendet, um Ihre Anfrage zu
              beantworten, ein Erstgespräch zu vereinbaren, ein allenfalls
              entstehendes Beratungsmandat durchzuführen sowie gesetzliche
              Aufbewahrungs- und Dokumentationspflichten zu erfüllen.
            </p>
          </LegalSection>

          <LegalSection title="Weitergabe an Dritte" number="06">
            <p>
              Eine Weitergabe an Dritte erfolgt nur, wenn Sie eingewilligt
              haben, wenn es zur Vertragserfüllung erforderlich ist, etwa zur
              Einholung einer Offerte bei einer Versicherungs- oder
              Vorsorgeeinrichtung, oder wenn eine gesetzliche Verpflichtung
              besteht.
            </p>
            <p>
              Externe Auftragsbearbeiter (zum Beispiel Hosting, E-Mail) sind
              vertraglich auf die Einhaltung des Datenschutzes verpflichtet
              und bearbeiten Daten ausschliesslich auf Weisung.
            </p>
          </LegalSection>

          <LegalSection title="Hosting und Datenstandort" number="07">
            <p>
              Diese Website wird in einem Rechenzentrum innerhalb der
              Schweiz oder des Europäischen Wirtschaftsraums betrieben.
              Beim Aufruf werden Server-Logfiles bearbeitet, um Betrieb und
              Sicherheit der Seite zu gewährleisten. Diese Logs werden
              spätestens nach 90 Tagen anonymisiert oder gelöscht.
            </p>
          </LegalSection>

          <LegalSection title="Cookies und Tracking" number="08">
            <p>
              Diese Website setzt keine Marketing- oder Tracking-Cookies und
              bindet keine Analyse-Tools von Dritten ein. Es werden lediglich
              technisch notwendige Daten verarbeitet, ohne dass daraus ein
              Nutzungsprofil erstellt wird.
            </p>
          </LegalSection>

          <LegalSection title="Aufbewahrungsdauer" number="09">
            <p>
              Daten aus Kontaktanfragen, die zu keinem Mandat führen, lösche
              ich spätestens zwölf Monate nach der letzten Kommunikation.
              Beratungs- und Mandatsdaten werden während der gesetzlichen
              Aufbewahrungsfristen aufbewahrt, in der Regel zehn Jahre, und
              danach sicher gelöscht.
            </p>
          </LegalSection>

          <LegalSection title="Ihre Rechte" number="10">
            <p>Sie haben das Recht,</p>
            <ul>
              <li>Auskunft über die zu Ihrer Person bearbeiteten Daten zu erhalten,</li>
              <li>unrichtige Daten berichtigen zu lassen,</li>
              <li>die Löschung oder Sperrung Ihrer Daten zu verlangen, soweit keine gesetzliche Aufbewahrungspflicht besteht,</li>
              <li>einer Bearbeitung zu widersprechen,</li>
              <li>eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.</li>
            </ul>
            <p>
              Eine kurze Mitteilung per E-Mail genügt. Sie haben zudem das
              Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren,
              in der Schweiz dem Eidgenössischen Datenschutz- und
              Öffentlichkeitsbeauftragten (EDÖB).
            </p>
          </LegalSection>

          <LegalSection title="Sicherheit" number="11">
            <p>
              Die Übertragung der Website erfolgt verschlüsselt über TLS.
              Sensible Beratungsunterlagen tausche ich auf Wunsch über ein
              passwortgeschütztes Portal aus, nicht per unverschlüsselter
              E-Mail.
            </p>
          </LegalSection>

          <LegalSection title="Änderungen" number="12">
            <p>
              Diese Datenschutzerklärung kann angepasst werden, wenn sich
              rechtliche oder technische Rahmenbedingungen ändern. Massgebend
              ist jeweils die zum Zeitpunkt der Datenbearbeitung
              veröffentlichte Fassung.
            </p>
          </LegalSection>
        </LegalPage>
      </main>
      <SiteFooter />
    </>
  );
}
