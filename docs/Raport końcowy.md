# Weksle elektroniczne w technologii blockchain

![image alt text](image_0.png)

*Wersja 1.0 z dnia 26.03.2018 r.*

Autorzy: Rafał Kuchta, Janusz Łaski, Wiktor Niesiobędzki, Jakub Szczerbowski

**Streszczenie**

Celem niniejszego dokumentu jest omówienie koncepcji weksla elektronicznego
opracowanej przez zespół działający w ramach Koalicji na Rzecz Polskich Innowacji.
Weksle są papierami wartościowymi, które kształtowały się od około XIII w.
Długi czas ich ewolucji sprawił, że stały się jednym z najlepiej poznanych i
najbezpieczniejszych instrumentów obrotu.
Wraz z nastaniem ery obrotu elektronicznego pewnym niedomaganiem stała się
materialna forma weksla, która rozmija się z oczekiwaniami uczestników obrotu
szybko przyzwyczajających się do komunikacji na odległość.
Rozwiązanie proponowane w niniejszym raporcie może dostarczyć uczestnikom obrotu
niezwykle użyteczny instrument spełniający funkcje materialnego weksla z
jednoczesnym usunięciem uciążliwości związanych z koniecznością posługiwania się
materialnym dokumentem.

Dokumenty elektroniczne posiadały jednak znaczącą wadę, która utrudniała ich
użycie jako weksla, polegającą na braku możliwości ustalenia wersji oryginalnej
dokumentu.
Rzeczą naturalną jest powstanie wielu kopii dokumentu elektronicznego wynikające
nie tylko z woli człowieka, ale nawet ze specyfiki samego urządzenia.
Wysłanie dokumentu pocztą elektroniczną prowadzi do powstania jego kopii co
najmniej w komputerze nadawcy, serwerze nadawcy, serwerze odbiorcy, komputerze
odbiorcy.

Technologią pozwalającą na rozwiązanie tej trudności technicznej okazał się
łańcuch bloków (blockchain), czyli rodzaj rozproszonego rejestru, w którym dane
są zabezpieczone przez algorytmy kryptograficzne. Dodatkowo technologia
blockchain pozwala na tworzenie programów komputerowych, na których wykonanie
nie może wpłynąć żadna pojedyncza osoba (tzw. smart kontrakty).
Technologia blockchain pozwala więc na symulowanie świata materialnego w taki
sposób, że możemy kreować cyfrowe odpowiedniki wręczania dokumentu,
robienia na nim adnotacji, przekreśleń, a nawet dokument zniszczyć.
Kolejnym elementem umożliwiającym rozważania nad koncepcją weksla elektronicznego
jest rozporządzenie eIDAS, które zrównuje kwalifikowany podpis elektroniczny z
podpisem własnoręcznym.

Naturalną konsekwencją możliwości dawanych przez technologię blockchain oraz
tradycję obrotu wekslowego jest stworzenie koncepcji weksla elektronicznego.
W ramach prac stworzono zarówno odpowiedni smart kontrakt, który pozwala
zachować funkcje materialnej formy weksla w obrocie elektronicznym, jak i
opracowanie wykładni prawa wekslowego proponujące taką jego wykładnię, która
umożliwi wprowadzenie do obrotu weksli elektronicznych.
Smart kontrakt pozwala na zapisanie weksla na łańcuchu bloków oraz na ustalenie
osoby, która nim włada w każdym czasie. Sam weksel podpisywany jest
kwalifikowanym podpisem elektronicznym oraz dodatkowo szyfrowany, tak aby osoby
trzecie nie mogły się z nim zapoznać bez upoważnienia.
Smart kontrakt pozwala na dokonywanie na wekslu dopisków, które mogą być różnego
rodzaju czynnościami wekslowymi.
Możliwe jest także wręczenie weksla, które wykonywane jest poprzez cyfrowy
odpowiednik wyciągnięcia ręki, aby wydać weksel z jednej strony, i cyfrowy
odpowiednik wyciągnięcia ręki po weksel z drugiej.

Jednym z wyzwań jest wypracowanie wykładni prawa wekslowego, w której mieścić
się będzie obrót wekslami elektronicznymi.
Ze względu na wejście w życie wspomnianego rozporządzenia eIDAS odejście od
materialnej formy weksla wydaje się uprawnione, jednakże odniesienia do natury
materialnego dokumentu w prawie wekslowym (np. awers, rewers) skłaniają do
szerszych rozważań w tym przedmiocie.

**Spis treści**

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Weksle elektroniczne w technologii blockchain](#weksle-elektroniczne-w-technologii-blockchain)
- [Wstęp](#wstp)
- [Aspekty prawne](#aspekty-prawne)
	- [Wprowadzenie](#wprowadzenie)
	- [Podstawowa charakterystyka weksla elektronicznego](#podstawowa-charakterystyka-weksla-elektronicznego)
	- [Wystawienie weksla elektronicznego](#wystawienie-weksla-elektronicznego)
	- [Dalszy obrót wekslem elektronicznym](#dalszy-obrt-wekslem-elektronicznym)
	- [Zapłata weksla elektronicznego](#zapata-weksla-elektronicznego)
	- [Sądowe dochodzenie roszczeń](#sdowe-dochodzenie-roszcze)
- [Opis zasad działania rozwiązania](#opis-zasad-dziaania-rozwizania)
	- [Niejawność treści weksla](#niejawno-treci-weksla)
	- [Kopiowanie weksla](#kopiowanie-weksla)
	- [Wystawienie i przenoszenie weksla](#wystawienie-i-przenoszenie-weksla)
	- [Zmiany treści weksla](#zmiany-treci-weksla)
	- [Oznaczenie blockchaina i forki](#oznaczenie-blockchaina-i-forki)
- [Założenia techniczne](#zaoenia-techniczne)
- [Podsumowanie](#podsumowanie)
	- [Oczekiwania od strony regulacyjnej i dalszy rozwój](#oczekiwania-od-strony-regulacyjnej-i-dalszy-rozwj)
- [O Projekcie](#o-projekcie)

<!-- /TOC -->

# Wstęp

Czeki i weksle przez wiele dziesiątków lat były, a w niektórych krajach są
nadal, szeroko używanymi rodzajami papierów wartościowych.Cechuje je bogactwo
zastosowań w obrocie gospodarczym i doczekały się one obszernego piśmiennictwa i
orzecznictwa na bazie regulacji krajowych oraz międzynarodowych.
Ze względu na swoją materialną formę nie mogą być jednak wykorzystane w
innowacyjnych rozwiązaniach bazujących na zaawansowanych technologiach (jak np.
blockchain, czy inne rejestry rozproszone – ang. *Distributed Ledger Technology,*
DLT).

Bariera w postaci materialnej formy weksli i czeków może w przyszłości powodować
spadek znaczenia tych instytucji na rzecz rozwiązań informatycznych
spełniających podobne funkcje, lecz umożliwiających obrót bez fizycznej
obecności stron (na odległość).
Funkcje te to zabezpieczanie wierzytelności (w przypadku weksli), a także
wykonywanie zobowiązań pieniężnych (przy użyciu czeków, wciąż popularnych w
niektórych krajach).
Wskazane zastosowania tych instrumentów nadal mają znaczenie gospodarcze, wobec
czego wydaje się zasadne umożliwienie stosowania tego dorobku w aktualnej
rzeczywistości technologicznej, w której forma elektroniczna i pełna
automatyzacja są warunkami koniecznymi dla zapewnienia efektywności
ekonomicznej.
Instrumenty te mogą odzyskać swoją atrakcyjność poprzez zastosowanie do obrotu
nimi tzw. smart kontraktów (smart contracts), czyli programów komputerowych
wykonywanych w oparciu o technologię rejestru rozproszonego. Zastosowanie tej
technologii pozwoli na usunięcie barier związanych z dematerializacją weksla,
a mianowicie na cyfrowe odwzorowanie instytucji posiadania papieru wartościowego
i ograniczenie ryzyk związanych z tworzeniem kilku egzemplarzy weksla poprzez
kopiowanie danych do innego nośnika. Możliwość każdoczesnego ustalenia posiadacza
weksla zapewnia smart kontrakt, którego kod oraz dane przechowywane są w
bezpieczny i transparentny sposób.

Obowiązujące obecnie ustawy prawo czekowe i prawo wekslowe (obie z dnia 28
kwietnia 1936 r.) stanowią polską implementację konwencji genewskiej z początku
lat 30. ubiegłego wieku.
Konwencja była źródłem modelowych rozwiązań dla regulacji dotyczących obrotu
czekowego i wekslowego w wielu państwach, zapewniając tym samym niepowtarzalny
model interoperacyjności transgranicznej w rozliczeniach handlowych..
Weksle i czeki zostały szczegółowo uwzględnione w wielu późniejszych regulacjach
dotyczących przepisów rachunkowych, podatkowych, płatniczych itp.

Alternatywą jest instytucjonalizacja pojawiających się w ramach innowacji
gospodarczych rozwiązań odrębnych od weksla, ale spełniających podobne funkcje.
Rozwiązanie takie wydaje się suboptymalne, gdyż ze względu na nieprzewidywalność
innowacji w obrocie gospodarczym może tworzyć istotne ryzyka systemowe.
Ryzyka te może powodować brak odpowiednich rozwiązań instytucjonalnych
zwiększających bezpieczeństwo obrotu, które zazwyczaj wykształcane są dopiero po
dostrzeżeniu przez judykaturę i regulatora systematycznych nieprawidłowości w
obrocie.
Wydaje się więc, że weksel elektroniczny, jako łączący bezpieczeństwo obrotu i
możliwości dawane przez jego dematerializację, stanowi rozwiązanie optymalne.

Wprawdzie wcześniej podejmowano próby wykreowania obrotu elektronicznego, lecz
były one oparte o scentralizowaną bazę danych (centralny rejestr) weksli.
Należy tutaj wymienić rozwiązanie Payper24 oparte na modelu opisanym w
publikacji [„Koncepcja elektronicznego weksla własnego w obrocie
gospodarczym"](http://www.bibliotekacyfrowa.pl/dlibra/docmetadata?id=34356&from=publication)
(Grzegorz Wierzbicki, Sylwia Kotecka, Biuletyn CBKE 2009).
W perspektywie międzynarodowej warto zaś zwrócić uwagę na rozwiązanie weksla
elektronicznego funkcjonujące na rynku japońskim na podstawie dedykowanej
regulacji [Electronically Recorded Monetary Claims Act z 2007
roku](http://www.fsa.go.jp/common/law/ele01.pdf).
Również w tym przypadku stworzono rozbudowaną infrastrukturę
technologiczno-instytucjonalną, powierzając pełnienie funkcji centralnego
rejestru (Electronic Monetary Claim Recording Institution) podmiotowi wskazanemu
przez regulatora, który czynności związane z obsługą elektronicznych weksli
wykonuje na zasadach komercyjnych.

Powyższe przykłady rozwiązań tworzone były w czasach kiedy technologia
rozproszonego rejestru (DLT) nie była dostępna.
Rozwiązanie proponowane w niniejszym opracowaniu posiada przewagę techniczną
wynikającą z możliwości rezygnacji z centralnego rejestru weksli na rzecz
bezpieczniejszego rejestru rozproszonego.
Odwzorowanie posiadania i wydania dokumentu w rejestrze rozproszonym ma pozwolić
na doprowadzenie do zgodności rozwiązania technicznego z prawem obowiązującym, a
w konsekwencji umożliwić dochodzenie praw z weksli elektronicznych przed sądem
powszechnym.
Proponowane rozwiązanie pozwala na obniżenie kosztów, skrócenie czasu
przetwarzania (zarówno od strony technologicznej jak i formalno-prawnej) oraz
powinno zapewnić wyższy poziom bezpieczeństwa bez odwoływania się do
rozstrzygnięć zaufanej trzeciej strony.

# Aspekty prawne

## Wprowadzenie

Niniejszy rozdział omawia aspekty prawne wypracowanego rozwiązania.
Przedstawiono w nim przepisy prawa uwzględniane w toku prac oraz
scharakteryzowano w ich świetle najważniejsze elementy składowe wykreowanego
instrumentu.

Podstawowym aktem prawnym branym pod uwagę w toku prac była ustawa z dnia 28
kwietnia 1936 r. – Prawo wekslowe (t.j. Dz. U. z 2016 r. poz. 160) (dalej zwana
„Prawem wekslowym").
Ze względu na koncepcyjny charakter działalności zespołu nie dążono do
stanowczego rozstrzygnięcia, czy Prawo wekslowe ma (może) stanowić podstawę
prawną dla wystawiania weksli elektronicznych.

Można jedynie skrótowo wskazać, że istnieją zarówno argumenty przemawiające na
rzecz dopuszczalności wystawiania weksli elektronicznym na podstawie Prawa
wekslowego, jak i argumenty budzące wątpliwości.
Do tych pierwszych można zaliczyć wprowadzenie do ustawy z dnia 23 kwietnia 1964
r. – Kodeks cywilny (t.j. Dz. U. z 2017 r. poz. 459 z późn. zm.) (dalej zwanej
„k.c.") nowej definicji dokumentu, w której zakresie mieszczą się także
dokumenty elektroniczne (art. 773 k.c.).
Zastosowanie tej definicji na gruncie Prawa wekslowego, które stanowiąc
wymagania formalne weksla posługuje się pojęciem dokumentu (art. 1 pkt 1 oraz
art. 101 pkt 1 Prawa wekslowego), może uzasadniać stanowisko, zgodnie z którym
weksel może mieć także postać elektroniczną.

Argumentem na rzecz dopuszczalności wystawiania i posługiwania się wekslami w
postaci elektronicznej mogą być również przepisy Rozporządzenia Parlamentu
Europejskiego i Rady (UE) nr 910/2014 z dnia 23 lipca 2014 r. w sprawie
identyfikacji elektronicznej i usług zaufania w odniesieniu do transakcji
elektronicznych na rynku wewnętrznym oraz uchylające dyrektywę 1999/93/WE (Dz.
U. UE L z 2014 r. Nr 257, str. 73) (zwanego dalej „Rozporządzeniem eIDAS").
Rozporządzenie eIDAS reguluje zasady wydawania podpisów elektronicznych, a także
skutki prawne posługiwania się nimi.
Art. 25 ust. 2 rozporządzenia ustanawia zasadę ogólną, zgodnie z którą
kwalifikowany podpis elektroniczny (jeden z rodzajów podpisów elektronicznych)
ma skutek prawny równoważny podpisowi własnoręcznemu.
Ten rodzaj podpisu elektronicznego ma być ekwiwalentem podpisu własnoręcznego,
co uzasadnia się m.in. tym, że wymagane dla podpisu kwalifikowanego rozwiązania
techniczne zapewniają wysoki stopień pewności co do tożsamości osoby składającej
podpis (o czym szerzej w części „Założenia techniczne”).
Potwierdzeniem tej zasady na gruncie k.c. jest art. 781, zgodnie z którym
oświadczenia woli opatrzone kwalifikowanym podpisem elektronicznym spełniają
wymagania formy elektronicznej (§ 1), którą uważa się za równoważną zwykłej
formie pisemnej (§ 2).
Jeśli więc Prawo wekslowe wymaga, aby wystawca tudzież indosant opatrzył weksel
bądź indos podpisem, w domyśle własnoręcznym (por. art. 1 pkt 8, art. 13 ust. 1
oraz art. 101 pkt 8), to w myśl przytoczonego wyżej przepisu rozporządzenia
eIDAS należałoby również dopuścić posługiwanie się kwalifikowanym podpisem
elektronicznym.

Wątpliwości w przedmiocie dopuszczalności oparcia weksli elektronicznych na
Prawie wekslowym mogą z kolei budzić te jego przepisy, które odnoszą się do
materialnej formy weksla, co oczywiście wynika z uwarunkowań historycznych.
Można tu wskazać w szczególności przepisy odnoszące się do awersu i rewersu
dokumentu, które przypisują odmienne skutki prawne podpisom składanym na wekslu
w zależności od miejsca ich złożenia (por. np. art. 13 ust. 2, art. 25 ust. 1,
art. 31 ust. 3, art. 88 ust. 2 Prawa wekslowego).

Podobny wniosek można wywodzić z wymogu wydania weksla dla skutecznego
przeniesienia praw, zważywszy że wydanie zasadniczo utożsamia się z fizycznym
przeniesieniem dokumentu (a przynajmniej postuluje odpowiednie stosowanie do
niego przepisów o posiadaniu).
Warto jednak zauważyć, że kładąc większy akcent na przeniesienie przy wydaniu
faktycznego władztwa nad dokumentem (rozumianego jako prawo do dysponowania nim
z wyłączeniem innych osób) można to kryterium z powodzeniem stosować także w
obrocie elektronicznym.
Istniejące rozwiązania techniczne dostarczają bowiem narzędzi pozwalających
kontrolować dostęp do dokumentu elektronicznego oraz prawo do dysponowania nim
przez wprowadzanie zmian oraz przekazywanie dokumentu innym osobom.
Można także pomocniczo odwoływać się do konstrukcji z art. 348 k.c.,
podkreślając wagę przeniesienia środków pozwalających na dysponowanie dokumentem
aniżeli samego dokumentu.
Wreszcie przeciwko oparciu weksli elektronicznych o Prawo wekslowe może
przemawiać to, że przepisy ustawy stanowią implementację konwencji genewskiej
(Konwencja w sprawie jednolitej ustawy o wekslach trasowanych i własnych, Dz. U.
z 1937 r. Nr 26, poz. 175) i ich interpretacja nie powinna aż tak daleko
odbiegać od jej treści.

Podsumowując, istnieją wątpliwości co do tego, czy weksle elektroniczne mogą być
wekslami w rozumieniu art. 1 i 101 Prawa wekslowego.
Wydaje się, że zastosowanie technologii blockchain na tyle wiernie odwzorowuje
materialny obrót, że proponowane rozwiązanie jest najbliższe wymogom Prawa
wekslowego, w stosunku do innych dematerializujących weksel rozwiązań.
Aby jednak dany instrument mógł zostać uznany za weksel tudzież ekwiwalent
funkcjonalny weksla, powinien on mieć pewne cechy i funkcje wynikające z
przepisów Prawa wekslowego oraz dorobku doktryny i orzecznictwa w tej
dziedzinie.
Stąd wymienione źródła stanowiły dla zespołu podstawę przy tworzeniu konstrukcji
weksla elektronicznego i dążono do replikacji, w miarę możliwości technicznych,
wybranych instytucji Prawa wekslowego, nie przesądzając jednocześnie, czy jego
przepisy znajdą zastosowanie.

## Podstawowa charakterystyka weksla elektronicznego

Ze względu na ograniczoną skalę projektu postawiono sobie za cel stworzenie
elektronicznego weksla własnego.
Przemawiała za tym przede wszystkim prostsza struktura podmiotowa tego rodzaju
weksla, która okazała się łatwiejsza do realizacji ze względów technicznych.
Brano również pod uwagę potrzeby obrotu, w którym zdają się obecnie dominować
weksle własne.

W zakresie struktury podmiotowej należy wskazać, że zgodnie z Prawem wekslowym
weksel własny w chwili wystawienia, co do zasady, kreuje jeden stosunek
dwustronny pomiędzy wystawcą (dłużnikiem wekslowym) a remitentem (wierzycielem
wekslowym).
Natomiast w przypadku drugiego rodzaju weksla – weksla trasowanego – stroną
powstających stosunków prawnych jest także trasat.
Trasat może przyjąć weksel, zobowiązując się w ten sposób do jego zapłaty, lecz
nie ma takiego obowiązku.
Stworzenie weksla trasowanego niosłoby więc za sobą konieczność stworzenia
dodatkowych rozwiązań technicznych uwzględniających rolę kolejnego podmiotu –
trasata, w tym umożliwiających przyjęcie weksla i odzwierciedlających skutki
ewentualnej odmowy przyjęcia.
Podobne względy zadecydowały o nieuwzględnieniu weksli in blanco, wymagających
nie tylko stworzenia rozwiązań pozwalających na ich późniejsze wypełnienie, lecz
także uwzględnienia problematyki deklaracji wekslowych.

Dalsze ograniczenia zakresu prac wiążą się z zasadami obrotu weksel
elektronicznym oraz sposobem dochodzenia roszczeń.
Przyjęto, że podstawowym sposobem przenoszenia praw z  weksla będzie zbycie
przez indos imienny lub indos na okaziciela (indos in blanco) połączone z jego
wydaniem.
Roszczenia z weksla mają być natomiast dochodzone, co do zasady, bezpośrednio od
wystawcy.

W wyniku wdrożenia powyższych założeń wypracowane rozwiązanie techniczne nie
przewiduje specjalnych funkcjonalności ułatwiających dochodzenie roszczeń od
dłużników wekslowych innych niż wystawca w ramach zwrotnego poszukiwania.
Nie oznacza to, że nie jest to możliwe.
Jednak modelowym sposobem zbywania weksla ma być indos bez obliga, a więc nie
pociągający za sobą zaciągnięcia zobowiązania przez indosanta (zbywcę weksla).
Walorem weksla elektronicznego ma być zatem łatwość zbywania (dyskontowania)
weksla, ze względu na brak konieczności jego fizycznego wydania, które zostaje
zastąpione rozwiązaniem informatycznym, ale już niekoniecznie poprawa pozycji
wierzyciela poprzez poszerzenie kręgu osób będących dłużnikami.

Warto podkreślić, że pomimo powyższych ograniczeń dotychczasowe prace nadal mogą
stanowić bazę do tego, aby w przyszłości łatwo rozbudować elektroniczny weksel
własny o kolejne funkcjonalności, stworzyć elektroniczny weksel trasowany,
umożliwić wystawianie weksli elektronicznych in blanco, a nawet opracować
elektroniczny czek mogący służyć do wykonywania zobowiązań wekslowych
jednocześnie ze zwrotem weksla dłużnikowi (zgodnie z zasadą Delivery Versus
Payment – DVP).
Strony zobowiązania wekslowego mogą bowiem uzgodnić jego wykonanie w ten sposób,
że dłużnik wekslowy wystawi na blockchainie elektroniczny czek (potwierdzony
przez bank), który następnie zostanie przeniesiony na rzecz wierzyciela
wekslowego z jednoczesnym przeniesieniem weksla na rzecz dłużnika.
Alternatywnie, spełnienie zasady DVP mogłoby być realizowane w oparciu o
pieniądz elektroniczny, którego przeniesienie pomiędzy stronami następowałoby w
ramach tej samej elektronicznej transakcji co wydanie weksla.
Dzięki temu obrót wekslem od jego wystawienia aż do zapłaty mógłby w
przeważającej części, jeśli nie w całości, odbywać się wyłącznie w środowisku
elektronicznym.
Powyższe możliwości wynikają stąd, że wymienione papiery wartościowe mają wiele
cech wspólnych, takich jak zasady wystawiania, pewne elementy treści czy
zbywalność przez indos, dla odtworzenia których można posłużyć się bardzo
podobnymi, jeśli nie identycznymi rozwiązaniami technicznymi.

## Wystawienie weksla elektronicznego

Konieczne elementy treści weksla własnego określa art. 101 Prawa wekslowego, zgodnie z którym musi on zawierać:

1. nazwę „weksel" w samym tekście dokumentu, w języku, w jakim go wystawiono;
1. przyrzeczenie bezwarunkowe zapłacenia oznaczonej sumy pieniężnej;
1. oznaczenie terminu płatności;
1. oznaczenie miejsca płatności;
1. nazwisko osoby, na której rzecz lub na której zlecenie zapłata ma być
dokonana;
1. oznaczenie daty i miejsca wystawienia wekslu;
1. podpis wystawcy wekslu.

Wszystkie wymagane powyżej elementy zostały odzwierciedlone w wekslu
elektronicznym.
Przybiera on postać pliku tekstowego .xml, w którym w ramach znaczników
wyróżniono miejsce na wprowadzenie poszczególnych elementów treści weksla.
Z ostrożności, całość oświadczenia znajduje się wewnątrz znaczników, aby usunąć
ewentualne wątpliwości co do tego, czy znaczniki XML stanowią część
oświadczenia.
Należy odnotować, że art. 102 Prawa wekslowego przewiduje pewne możliwości
uzupełniania braków w zakresie niektórych z wymienionych elementów, co może
znajdować zastosowanie także przy wekslu elektronicznym.
Wszystkie elementy treści weksla zawarto w jednym pliku stanowiącym
nierozerwalną całość.
Służy to ucieleśnieniu założenia, zgodnie z którym treść zobowiązania powinna
być możliwa do ustalenia wyłącznie na podstawie treści weksla stanowiącego
jednolity dokument.

Plik ten powinien być czytelny dla człowieka, ale ze względu na użycie
znaczników jest także przeznaczony do odczytu maszynowego – zalety tego
rozwiązania od strony technicznej przedstawiono w dalszej części raportu.
W tym miejscu warto tylko podkreślić, że plik ten pozwala także wygenerować
odwzorowanie weksla w postaci graficznej, łatwiejszej do przyswojenia dla
człowieka.
Dokumentem mającym znaczenie prawne pozostaje jednak plik .xml, a postać
graficzna ma jedynie stanowić ułatwienie.
Z perspektywy prawnej istotne jest natomiast, aby wystawca weksla oraz kolejni
uczestnicy obrotu wekslowego mogli zapoznać się z treścią weksla i składać
oświadczenia woli w sposób świadomy.
W związku z tym wskazane jest, aby aplikacja do podpisywania weksla zawsze
wyświetlała co najmniej treść pliku .xml.
W przeciwnym wypadku nie można wykluczyć prób powoływania się wystawcy (lub
innych osób) na nieważność zobowiązania wekslowego z powodu wystąpienia wady
oświadczenia woli.

Przechodząc do omówienia poszczególnych elementów treści weksla należy zacząć od
wskazania, że przygotowane rozwiązanie zakłada wystawianie weksli w języku
polskim.
W treści pliku .xml znajduje się zwrot „Zapłacę za ten weksel własny"
wymieniający słowo weksel oraz stanowiący przyrzeczenie bezwarunkowe zapłacenia
sumy pieniężnej.

Wysokość sumy pieniężnej oraz walutę określa wystawca.
Przy założeniu, że znajdowałoby zastosowanie Prawo wekslowe, nie jest możliwe
wystawienie weksla opiewającego na kryptowaluty.
Przepis art. 101 pkt 2 wymaga bowiem oznaczenia sumy pieniężnej, która obok
liczby jednostek pieniężnych wymaga także wskazania ich rodzaju – waluty.
Kryptowaluty nie są zaś walutami w znaczeniu prawnym.
Stąd weksel wskazując sumę kryptowaluty byłby nieważny jako pozbawiony
oznaczenia sumy pieniężnej.

Nie budzi większych wątpliwości konieczność oznaczenia terminu płatności,
nazwiska remitenta ani daty wystawienia weksla.
Jako do pewnego stopnia nieadekwatny w kontekście obrotu elektronicznego może
się jawić natomiast wymóg oznaczenia miejsca płatności oraz miejsca
wystawienia.
Proponowanym rozwiązaniem jest wskazanie jako miejsca wystawienia miejsca, w
którym faktycznie znajduje się wystawca w czasie sporządzenia weksla.
Warto podkreślić, że tak (rzeczywiste) miejsce wystawienia, jak i miejsce
płatności mają pewne znaczenie z punktu widzenia niektórych przepisów
kolizyjnoprawnych (art. 77-84 Prawa wekslowego).

Z kolei konieczność przedstawienia weksla w miejscu płatności stanowi obowiązek
posiadacza weksla, z którym musi się on liczyć nawiązując stosunek wekslowy i
oznaczając to miejsce.
Możliwy sposób realizacji obowiązku przedstawienia weksla w postaci
elektronicznej omówiono szerzej w części dotyczącej zapłaty.
Oznaczając miejsce płatności należy mieć na uwadze, że wpływa ono na właściwość
miejscową sądu.
Zgodnie z art. 371 ustawy z dnia 17 listopada 1964 r. – Kodeks postępowania
cywilnego (t.j. Dz. U. z 2018 r. poz. 155 z późn. zm.) (dalej zwanej „k.p.c.")
powództwo przeciw zobowiązanemu z weksla można wytoczyć także przed sąd miejsca
płatności.

Weksel elektroniczny ma być podpisywany przez wystawcę kwalifikowanym podpisem
elektronicznym w rozumieniu art. 3 pkt 12 Rozporządzenia eIDAS.
Kwestię tę omówiono już na wstępie, stąd w tym miejscu wypada jedynie odesłać do
uwag tam poczynionych.
Można jedynie raz jeszcze podkreślić, że posłużenie się tym rodzajem podpisu
elektronicznego zapewnia wysoki stopień pewności co do tożsamości podpisującego,
wynikający z wymagań stawianych kwalifikowanym dostawcom usług zaufania
oferującym tego rodzaju podpisy.

Często podnoszonym w kontekście weksli elektronicznych zagrożeniem jest
niebezpieczeństwo pojawienia się w obrocie wielu identycznych egzemplarzy.
Plik elektroniczny można bowiem z łatwością zwielokrotnić, a każda taka kopia ma
wszystkie cechy oryginału.
Może zaistnieć sytuacja, w której remitent wykonuje szereg kopii pliku weksla
opatrzonego podpisem kwalifikowanym wystawcy, a następnie indosuje każdą z nich
na różne osoby.
Tego rodzaju techniczne zwielokrotnienie pliku nie powinno być uznawane za
jednoczesne zwielokrotnienie zobowiązań dłużnika wekslowego.
Wydaje się, że nie można całkowicie wykluczyć możliwości skutecznego dochodzenia
roszczeń przez indosatariuszy, o ile nabyli weksel w dobrej wierze (w
szczególności przez próbę oparcia się na instytucji nabycia od nieuprawnionego z
art. 16 ust. 2 Prawa wekslowego).

Przygotowując rozwiązanie techniczne dla weksla elektronicznego podjęto próbę
rozwiązania powyższego problemu poprzez opatrzenie egzemplarza weksla wzmianką o
położeniu oryginału oraz odnotowywaniu każdorazowego posiadacza weksla w smart
kontrakcie na blockchainie.
W praktyce może to przybrać postać uzupełnienia tekstu weksla o klauzulę treści:
„Oryginał niniejszego weksla tylko u osoby wskazanej jako aktualny posiadacz w
smart kontrakcie o nazwie X na blockchainie Ethereum".
Trzeba pamiętać, że sama kwestia oznaczenia blockchaina napotyka na pewne
trudności praktyczne, które szerzej omówiono w części poświęconej założeniom
technicznym.

Skuteczność klauzuli opisanej powyżej lub podobnej wymaga dalszych analiz.
Wydaje się, że można taką klauzulę uznać za wyłączającą dobrą wiarę osoby
posługującej się dokumentem bez możliwości wykazania władztwa nad nim w sposób
przewidziany w smart kontrakcie.
Zastosowanie może tu znajdować przepis art. 16 ust. 2 Prawa wekslowego
nakazujący wydanie weksla nabytego w złej wierze lub dopuszczając się rażącego
niedbalstwa.

Od strony technicznej sama procedura wystawienia weksla elektronicznego składa
się z kilku etapów i odzwierciedla teorię umowną wystawienia weksla, zgodnie z
którą oprócz złożenia oświadczenia przez wystawcę (podpisania weksla) konieczne
jest jeszcze oświadczenie remitenta, składane w sposób dorozumiany przez
przyjęcie weksla.

## Dalszy obrót wekslem elektronicznym

Z punktu widzenia Prawa wekslowego dalszy obrót wekslem może odbywać się na dwa
sposoby – przez indos albo przez przelew.
Sposoby zbycia różnią się przesłankami, które muszą zostać spełnione w celu
skutecznego przeniesienia uprawnień z weksla.

W przypadku indosu do zbycia weksla konieczne jest opatrzenie go podpisem przez
zbywcę, zwanego indosantem, a następnie wydanie weksla nabywcy, zwanemu
indosatariuszem.
Podpisując weksel, indosant jednocześnie staje się dłużnikiem wekslowym – jeżeli
wystawca nie spłaci weksla, kolejni indosatariusza będą uprawnieni do
dochodzenia zapłaty od indosanta.
Może on jednak wyłączyć swoją odpowiedzialność przez klauzulę „bez obliga" lub
„bez odpowiedzialności”.
Co do zasady wystawca weksla nie może wobec nabywcy weksla przez indos –
indosatariusza – zasłaniać się zarzutami przysługującymi mu wobec zbywcy.

Natomiast w przypadku przelewu zbycie weksla wymaga zawarcia odpowiedniej umowy
pomiędzy zbywcą (cedentem) a nabywcą (cesjonariuszem) oraz wydania weksla
nabywcy.
Cedent nie zaciąga zobowiązania wekslowego, a jego odpowiedzialność wobec
cesjonariusza określa umowa (w braku ustaleń odpowiada za istnienie
wierzytelności).
Jednocześnie wystawca weksla co do zasady zachowuje swoje zarzuty wobec zbywcy i
może się nimi zasłaniać wobec nabywcy.

Jak już wyżej wskazano, jako modelowy sposób zbycia weksla elektronicznego
przyjęto zbycie przez indos, z możliwością wyłączenia odpowiedzialności
indosanta.
Indos dokonywany jest przez dodanie do weksla odpowiedniej formuły słownej
wybranej przez indosanta, przy czym rozwiązanie techniczne zapewnia mu swobodę
wyboru tej formuły, np. „ustępuję na zlecenie okaziciela".
Następnie indosant musi sygnować dodany tekst swoim kwalifikowanym podpisem
elektronicznym.
W istocie zastosowany mechanizm polega na możliwości dodania do treści dokumentu
oświadczenia i opatrzenia go podpisem, w związku z czym można się nim posługiwać
nie tylko do indosowania, ale także np. pokwitowania zapłaty części sumy
wekslowej.

Biorąc pod uwagę, że z technicznego punktu widzenia indosant podpisuje plik
obejmujący cały tekst weksla wraz z indosem, wskazane jest odnotowanie
charakteru podpisu jako  indosu przez posłużenie się odpowiednią
funkcjonalnością podpisu kwalifikowanego (por. uwagi techniczne w dalszej
części).
W przypadku weksla elektronicznego nie można bowiem opierać się na miejscu
położenia podpisu dla wykładni woli podpisującego, toteż w pewnym wypadkach może
pojawić się niebezpieczeństwo interpretowania takiego podpisu jako poręczenia
lub zaciągnięcia nowego zobowiązania wekslowego przez wystawienie weksla.

W przeciwieństwie do weksla papierowego, dopuszczającego indos przez sam podpis
na rewersie weksla (art. 13 ust. 2 Prawa wekslowego), w przypadku weksla
elektronicznego taki indos nie będzie możliwy, bowiem ze względu na jego formę
nie jest możliwe wskazanie ani awersu ani rewersu.
Stworzone rozwiązanie umożliwia jednakże dokonanie indosu in blanco lub na
okaziciela, a więc bez wskazywania tożsamości nabywcy poprzez złożenie
odpowiedniego oświadczenia.
Taki weksel może być następnie przedmiotem obrotu przez proste wydanie.
Warto podkreślić, że możliwość dowolnego kształtowania treści indosu pozwala na
wykorzystanie opracowanego rozwiązania technicznego nie tylko dla dokonywania
indosów właścicielskich, lecz także indosów pełnomocniczych oraz zastawniczych.

Jednocześnie sposób działania rozwiązania technicznego nie generuje dodatkowych
utrudnień (w stosunku do weksla papierowego) dla stron dążących do zbycia weksla
przez przelew.
Jednak w takim wypadku odpowiednia umowa musi być zawarta poza blockchainem,
ponieważ rozwiązanie nie przewiduje funkcjonalności umożliwiającej zawieranie
umów przelewu.

## Zapłata weksla elektronicznego

Wierzyciel dochodzący zapłaty weksla ma co do zasady obowiązek przedstawienia go
do zapłaty wystawcy (w przypadku weksla własnego) w miejscu płatności.
Umożliwia to dłużnikowi weryfikację uprawnień wierzyciela oraz natychmiastowe
odebranie oryginału weksla w razie jego zapłaty.

Dla odzwierciedlenia powyższego opracowane rozwiązanie techniczne umożliwia
przedstawienie weksla elektronicznego do zapłaty poprzez udostępnienie jego
pełnej treści (tj. wraz ze wszystkimi indosami) dłużnikowi wekslowemu przez
udostępnienie klucza, którym weksel jest zaszyfrowany.
Mechanizm jej działania opisano szerzej w części poświęconej założeniom
technicznym.

Projekt smart kontraktu dla weksli nie obejmuje natomiast dostarczenia stronom
zobowiązania wekslowego narzędzi do dokonywania płatności.
Na wekslu elektronicznym wierzyciel może jedynie pokwitować częściową zapłatę
korzystając z funkcjonalności smart kontraktu poprzez dodanie stosownego
oświadczenia i opatrzenie go podpisem kwalifikowanym.
Tak jak w przypadku papierowych weksli, wybór konkretnej metody zapłaty oraz
sposobu zapewnienia wydania oryginału weksla dłużnikowi zależy od uzgodnień
stron.
Niewątpliwie najbardziej atrakcyjnym rozwiązaniem byłoby przeniesienie procesu
rozliczenia płatności oraz wydania oryginału weksla w całości na blockchain (np.
poprzez posłużenie się opisanym wyżej czekiem elektronicznym lub pieniądzem
elektronicznym), stąd należy dążyć do wprowadzenia takiego rozwiązania w
przyszłości.

## Sądowe dochodzenie roszczeń

Istotną zaletą weksli są ułatwienia związane z dochodzeniem roszczeń przed sądem
w ramach postępowania nakazowego.
Wydawany przez sąd na posiedzeniu niejawnym nakaz zapłaty na podstawie weksla
staje się natychmiast wykonalny po upływie terminu do zaspokojenia roszczenia.
Jeżeli dłużnik nie złoży skutecznego wniosku o wstrzymanie wykonania nakazu,
wierzyciel może uzyskać zaspokojenie o wiele szybciej niż w „zwykłym"
postępowaniu procesowym.
Nawet w razie wstrzymania wykonania nakaz może nadal stanowić tytuł
zabezpieczenia.
Wreszcie powód wnoszący o wydanie nakazu zapłaty musi uiścić jedynie ¼ opłaty
sądowej.

Niewątpliwie możliwość skorzystania z opisanych powyżej rozwiązań proceduralnych
zwiększałaby atrakcyjność weksla elektronicznego.
Jednocześnie umożliwienie wydawania nakazów zapłaty z weksla elektronicznego
wymagałoby odpowiedniego dostosowania co najmniej infrastruktury technicznej po
stronie sądów, tak aby umożliwić im odbieranie oryginału weksla oraz
zapoznawanie się z jego treścią.
Należy bowiem pamiętać, że w postępowaniu nakazowym istnieje po stronie powoda
obowiązek złożenia oryginału weksla pod rygorem zwrotu pozwu (art. 485 § 4
k.p.c.).
W istocie jest to konieczne także przy dochodzeniu roszczeń poza postępowaniem
nakazowym.

Jednym ze sposobów umożliwienia rozpoznawania przez sądy spraw z weksli
elektronicznych będących przedmiotem obrotu na blockchainie jest włączenie sądów
w działanie systemu jako uczestnika o specjalnych uprawnieniach.
W ten sposób wierzyciel dochodzący roszczenia przed sądem mógłby spełnić wymóg
złożenia oryginału dokumentu poprzez przekazanie weksla elektronicznego na adres
sądu na blockchainie.

Wypada podkreślić, że kwestia przedstawiona powyżej to tylko jedno z zagadnień
związanych z rozpoznawaniem weksli elektronicznych w postępowaniach sądowych, a
niniejszy raport nie stanowi ich wyczerpującego omówienia tego obszaru
funkcjonowania e-weksla i powinien być traktowany jako punkt wyjścia do
dyskusji.

# Opis zasad działania rozwiązania

Niniejsza koncepcja weksla elektronicznego opiera się na wykorzystaniu
publicznego blockchaina Ethereum.
Wybór tej technologii był podyktowany jej powszechnością i dostępnością,
pozwalającą zminimalizować bariery związane z obrotem wekslem.

Poniżej omówiono niektóre aspekty techniczne związane z posługiwaniem się
opracowanym rozwiązaniem, w tym transakcje wykonywane na blockchainie.
Posłużono się pojęciem transakcji rozumianej jako zmiana zawartości
blockchaina.
Kod przygotowanego smart kontraktu jest dostępny w repozytorium pod adresem:
[https://github.com/kpiblockchain/smartnotesandchecks](https://github.com/kpiblockchain/smartnotesandchecks).

## Niejawność treści weksla

Wszystkie informacje przechowywane w blockchainie są publicznie dostępne.
Prawo wekslowe nie nakłada obowiązku ograniczenia dostępu do weksli, jednak
publiczna dostępność informacji o wystawionych wekslach elektronicznych mogłaby
zniechęcać użytkowników tego rozwiązania do korzystania z niego.
W przypadku weksla zapisanego na dokumencie papierowym dostęp do danych
zapisanych na wekslu jest natomiast z natury rzeczy ograniczony ze względu na
jego formę – ma go tylko osoba będąca posiadaczem weksla oraz osoby, którym
zdecyduje się go okazać.

Taki sam efekt przy wekslu elektronicznym można uzyskać poprzez szyfrowanie jego
treści.
Przyjęto przy tym, że każda zmiana treści weksla skutkowałaby zmianą klucza,
którym weksel został zaszyfrowany.
Dzięki temu każda osoba, która otrzymała klucz do odszyfrowania weksla, może
zapoznać się jedynie z taką wersją dokumentu, której odpowiada klucz.
Odzwierciedla to posługiwanie się wekslem papierowym – osoba, która widziała
weksel, zna jego treść tylko według stanu na moment zaznajomienia się z
dokumentem, nie może zaś poznać późniejszych zmian w dokumencie.

## Kopiowanie weksla

Ze względu na fakt, że nie da się odróżnić oryginału dokumentu elektronicznego
od jego kopii, przyjęto, że jako oryginał dokumentu należy traktować dokument
przechowywany w blockchainie w smart kontrakcie o określonym adresie.
Prawo do modyfikacji tego dokumentu oraz jego transferu na rzecz osób trzecich
ma osoba dysponująca kluczem do portfela Ethereum.

## Wystawienie i przenoszenie weksla

Transakcja zmiany posiadacza weksla na blockchainie odbywa się dopiero, gdy obie
strony wyrażą taką wolę (zaakceptują transakcję).
Dotyczy to także wystawienia weksla – związana z tym transakcja jest inicjowana
przez wystawcę, ale aby doszło do skutecznego wystawienia weksla musi ją
zaakceptować remitent.
W ten sposób osoba przyjmująca weksel potwierdza, że dysponuje kluczem
pozwalającym go rozszyfrować i że akceptuje transakcję.
Transakcja nie obejmuje świadczenia wzajemnego.

## Zmiany treści weksla

Dokument weksla jest dokumentem w formacie XML podpisanym kwalifikowanym
podpisem elektronicznym.
Każda modyfikacja tego dokumentu jest realizowana jako dopisanie adnotacji do
podpisanego dokumentu oraz opatrzenie całości dokumentu podpisem
kwalifikowanym.

## Oznaczenie blockchaina i forki

Rozwój technologii blockchain wiąże się często ze zmianami w algorytmach, które
go obsługują.
Największe zmiany są wprowadzane za pomocą tzw. forków.
W optymistycznym przypadku wszyscy uczestnicy publicznego blockchaina akceptują
nowe rozwiązanie i można kontynuować korzystanie z niego bez zmian.
Może się jednak zdarzyć, że w społeczności nie będzie zgody co do dalszego
rozwoju i rozwijane będą dalej obie gałęzie transakcji (np. fork w Ethereum na
Ethereum i Ethereum Classic po ataku na The Dao, czy fork na Bitcoin i Bitcoin
Cash w sierpniu 2017 roku).

W przypadku weksli oznacza to, że od określonej chwili mogą istnieć równolegle
dwie sieci, na których można dokonać obrotu tym samym wekslem.
Jedną z metod by temu zapobiec jest zdefiniowanie tzw. wyroczni (ang. *oracle*),
która będzie wskazywać właściwy blockchain będący źródłem transakcji honorowanym
przez osoby zaangażowane w obrót wekslem, w szczególności rozpoznawane przez
sąd.
Pełnienie takiej funkcji można powierzyć instytucji cieszącej się zaufaniem
uczestników obrotu.

# Założenia techniczne

Wystawca weksla podpisuje dokument XML stanowiący weksel elektroniczny za pomocą
podpisu kwalifikowanego.
Zaletą wykorzystania dokumentu XML jest łatwość przetwarzania maszynowego, co
pozwala na opracowywanie dalszych narzędzi ułatwiających obrót wekslami i ich
katalogowanie.
Wybrany format dokumentu zapewnia także zachowanie tożsamości treści na różnych
platformach sprzętowych i systemowych.

Poniżej przedstawiono przykładową treść dokumentu XML weksla po wystawieniu.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
<SignedInfo>
<CanonicalizationMethod Algorithm="http://www.w3.org/TR/2008/REC-xml-c14n11-20080502/" />
  <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" />
  <Reference URI="#object">
	<DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />
	<DigestValue>XXX</DigestValue>
  </Reference>
</SignedInfo>
<SignatureValue>XXX</SignatureValue>
<KeyInfo>
  <KeyValue>
	<RSAKeyValue>
  	<Modulus>XXX</Modulus>
  	<Exponent>XXX</Exponent>
	</RSAKeyValue>
  </KeyValue>
</KeyInfo>
<Weksel Id="object">
  <miejsceWystawienia>Warszawa</miejsceWystawienia>
  <dataWystawienia>2018-01-01 21:12:32</dataWystawienia>
  <przyrzeczenieZaplaty>Ja, niżej wskazany wystawca, zapłacę za ten weksel własny bez protestu</przyrzeczenieZaplaty>
  <remitent>
    <oznaczenie>Janowi Kowalskiemu</oznaczenie>
    <adres>ul. Nowa, 02-123 Warszawa</adres>
    <email>jan@kowalski.pl</email>
  </remitent>
  <miejsceZaplaty>w Warszawie</miejsceZaplaty>
  <terminZaplaty>w dniu 10 lipca 2018 r.</terminZaplaty>
  <kwota>dziesięć tysięcy</kwota>
  <waluta>PLN</waluta>
  <wystawca>
    <oznaczenie>Adam Malinowski</oznaczenie>
    <adres>ul. Nowa, 02-123 Warszawa</adres>
    <email>adam@malinowski.com</email>
  </wystawca>
  <oryginal>Oryginał dokumentu znajduje się na Blockchain XXX, Smart Contract o adresie 0xdeadf00dbaadf00ddeadf00dbaadf00dcafebaad</oryginal>
</Weksel>
</Signature>
```

Poniżej przedstawiono przykładową treść indosu.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
[...]
<Klauzule id="klauzulaindos1">
  <Signature xmlns="http://www.w3.org/2000/09/xmldsig#">
    [...]
    <Weksel Id="object">
    [...]
    </Weksel>
  </Signature>
  <klauzula>
    <dataKlauzuli>2018-01-03 21:12:32</dataKlauzuli>
    <trescKlauzuli>Ja, niżej wskazany indosant, ustępuję na rzecz indosatariusza<trescKlauzuli>
    <indosant>
      <oznaczenie>Jan Kowalski</oznaczenie>
      <adres>ul. Nowa, 02-123 Warszawa</adres>
      <email>jan@kowalski.pl</email>
    </indosant>
    <indosatariusz>
      <oznaczenie>Niebieska Sp. z o.o.</oznaczenie>
      <adres>ul. Chmurki, 05-125 Warszawa</adres>
      <email>biuro@niebieska.pl</email>
    </indosatariusz>
  </klauzula>
</Klauzule>
```


W wekslu materialnym podpisy składane są w różnych miejscach na karcie papieru,
co pozwala ustalić cel ich złożenia.
W wekslu elektronicznym wystawca lub indosant każdorazowo podpisuje cały
dokument elektroniczny, co oznacza, że podpisy obejmują zmieniającą się w czasie
jego treść.
Jednakże, ze struktury przyjętego rozwiązania możliwe jest odtworzenie intencji
stojącej za złożeniem każdego z podpisów.
Struktura dokumentu, nazywana "szkatułkową" gwarantuje nierozerwalność
oświadczeń i możliwość odtworzenia kolejności ich złożenia.

# Podsumowanie

Przedstawiona koncepcja weksla elektronicznego może mieć zastosowanie w obrocie
gospodarczym.
Implementacja takiego weksla w oparciu o publiczny blockchain rodzi jednak pewne
wyzwania technologiczne oraz ekonomiczne.
Jak na standardy obecnych blockchainów dokumenty wekslowe są ogromne, co przy
obecnych cenach kryptowalut może spowodować, że koszty korzystania z takiego
rozwiązania zniechęcą użytkowników.
Alternatywą jest budowa tego rozwiązania w oparciu o prywatny blockchain.

Wprowadzenie możliwości elektronicznego składania wniosku do postępowania
nakazowego przyczyniłoby się do dalszego uatrakcyjnienia elektronicznego
weksla.

## Oczekiwania od strony regulacyjnej i dalszy rozwój

Warunkiem koniecznym dla zastosowania opisanej koncepcji elektronicznego weksla
jest uznanie takiego modelu obrotu wekslowego przez sądy, do których należało
będzie rozpatrywanie spraw o zapłatę weksli.
W tym celu konieczne są dalsze konsultacje z zainteresowanymi stronami, w tym
również administracją rządową, w celu akceptacji modelu oraz wydania stosowanych
przepisów jeśli zajdzie taka konieczność.

W następnej kolejności opracowania wymagają rozwiązania pozwalające na
zastosowanie elektronicznego weksla w konkretnych działaniach gospodarczych,
przykładowo:

* Wymiana weksla za płatność (Delivery Versus Payment DVP) zapewnienie
jednoczesności wydania weksla od spełnienia świadczenia pieniężnego. Funkcja
mogłaby być zrealizowana w oparciu o usługi wynikające z wdrożenia dyrektywy
PSD2

* Wymiana weksla za inny elektroniczny dokument np. Czek lub inny papier
wartościowy (Delivery versus Delivery - DVD) - funkcja mogłaby być realizowana
przy użyciu elektronicznego czeku wydawanego na zasadach analogiczny do
elektronicznego weksla.

* Integracja funkcji wystawiania weksla elektronicznego z usługami
kwalifikowanego podpisu elektronicznego które będą oferowane przez systemy
bankowości elektronicznej.

# O Projekcie

Niniejszy dokument jest wynikiem prac zespołu projektowego "Weksel elektroniczny
na blockchainie" działającego od września 2017 r. w ramach Koalicji na Rzecz
Polskich Innowacji.
Poza niniejszym raportem wynikiem Projektu jest stworzenie funkcjonującego
prototypu aplikacji obsługującej elektroniczne weksle na blockchainie Ethereum.
Skład Zespołu Projektowego stanowili autorzy niniejszego raportu oraz: Norbert
Siwiec, Piotr Dobaczewski, Michał Kłosiński, Paweł Bylica.
