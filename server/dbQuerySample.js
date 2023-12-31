import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const herbs = await prisma.herb.createMany({
    data: [
      {
        herbName: 'Szurokfű',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/1/14/Origanum_vulgare_-_harilik_pune.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/1/17/Origanum_vulgare_inflorescence_-_Keila.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/4/4b/Majorana_syriaca_-_za%27atar.jpg',
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Ajakosvirágúak (Lamiales)',
        family: 'Árvacsalánfélék (Lamiaceae)',
        genus: 'Szurokfű (Origanum)',
        species: 'Origanum vulgare',
        details:
          'A szurokfű, más néven közönséges szurokfű vagy vadmajoránna (Origanum vulgare) az árvacsalánfélék (Lamiaceae) családjának szurokfű (Origanum) nemzetségébe tartozó fűszer- és gyógynövényfaj, amelyet latin nevéből oregánónak is neveznek.\nNevének eredete a latin origanum nyomán keletkezett, amely a görög origanon folytatása és az orosz (‘hegy’) és ganosz (‘szépség, dísz’) szavakból tevődött össze.\nAz ókori Egyiptomban is ismerték már gyógyhatásait, köhögéscsillapítóként volt közismert, az ókori Görögországban pedig sérüléseket gyógyítottak vele. A középkorban az ételeket a szurokfűolajával óvták meg a mikrobás fertőzésektől.\nEgész Európában ismerik és használják, de fűszerként főleg a mediterrán konyhára jellemző (gyakran bazsalikommal és rozmaringgal kombinálva). Sajátságos íze van, mely a majorannára és a kakukkfűre emlékeztet. Hazánkban is gyakori, a száraz gyepek, hegyoldalak és erdőszélek növénye. Leginkább a meszes talajokat kedveli.\nJellemzése: A szurokfű 30–80 cm-t is elérő, aromás illatú, félcserje jellegű évelő növény. Szára gazdagon elágazó, négyélű; keresztben átellenes állású levelei tojásdadok, szőrösek. Kétcimpájú, apró, bíborszínű, ajakos virágai hosszú kocsányon, a levél hónaljából kifejlődő tálörvekből fejlődnek ki.\nSzaporítása: Magjait március végén vetik, hogy a növények kellőképpen ki tudjanak fejlődni. Másik szaporítási módja a tőosztás: a fűszerkertben március-áprilisi vagy őszi tőosztással lehetséges a szükséges tőmennyiséget biztosítani. Júniusban a hajtásai dugványozhatók. Leveles hajtásai folyamatosan szedhetők.\nFelhasználása:\nKulináris felhasználása\nKözkedvelt fűszer- és gyógynövény. Különösen a görög, török, palesztin, arab, szír, portugál és dél-amerikai konyhák kedvence, de egész Európában elterjedt, és ma már az olasz konyha ételeit sem lehet elképzelni nélküle. Gyakran használják paradicsommártás ízesítéséhez, grillezett húsokhoz, sült zöldségekhez. A frissen szedett leveleket salátákhoz adják. Virágzó hajtásait vágva vagy morzsolva árusítják. Nemcsak az olaszos fogásokhoz, de különféle egyéb levesekhez, töltelékekhez, paradicsomos, burgonyás, halas, babos ételekhez, pástétomokhoz, mártásokhoz is használják.\nNem azonos rokonával, a kerti majoránnával (Origanum majorana). Felhasználásuk ugyan hasonló, de a szurokfű sokkal aromásabb.\nGyógyhatásai\nA szurokfüvet a természet antibiotikumának tartják. Karvakrolt, illóolajat, cseranyagot, keserű anyagot és gyulladáscsökkentő timolt tartalmaz; a karvakrol és a timol a baktériumok szaporodását gátolja. Maga a szurokfű 2–5%-ban tartalmazhatja, olaja az oregánóolaj pedig 40–70%-ban. A legjobb minőségű olajok akár 85%-ban is tartalmazhatják a karvakrolt, de ez függ a lepárlás módjától. A növény levelét megszárítják, és nyugtató hatású teát főznek belőle. Teája (forrázata) étvágygerjesztő, idegnyugtató, baktériumölő, köhögéscsillapító hatású.\nEgyéb felhasználása\nÉtelízesítésen és gyógyításon kívül felhasználják festékkészítésre is.',
        stockQuantity: 43840,
        price: 449,
      },
      {
        herbName: 'Kakukkfű',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/f/f7/Thymus_serpillum.JPG',
          'https://upload.wikimedia.org/wikipedia/commons/1/1b/Thymus_camphoratus_kz07.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flowering_thyme.JPG',
          'https://upload.wikimedia.org/wikipedia/commons/e/ea/Thyme-Bundle.jpg',
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Ajakosvirágúak (Lamiales)',
        family: 'Árvacsalánfélék (Lamiaceae)',
        genus: 'Thymus L.',
        species: 'Thymus vulgaris',
        details:
          'A kakukkfű (Thymus) az árvacsalánfélék családjába tartozó növénynemzetség. Körülbelül 350 különféle örökzöld, talajtakaró vagy boltozatos alakú cserje, félcserje, vagy fásodó tövű, fűszeres illatú évelő faj, hibrid faj összefoglaló neve. Európa, Ázsia és Észak-Afrika mérsékelt övi területein honosak. Népies nevei: balzsamfű, démutka, kakucskafű, kerti kakukkfű, mezei kakukkfű, timián, tömjénfű, töményfű vagy vadcsombor. Már az egyiptomiak és a görögök is használták ezt a ma általánosan elterjedt fűszert. Különösen a franciák és bolgárok kedvelték. A Thymus nemzetség különböző fajaiból nyerik a kakukkfűolajat, melynek többféle felhasználása ismert.\nMegjelenése\nSzárazságtűrő és fényigényes növény. Egyes fajok 20–50 cm hosszúra növő hajtásai elfekvők, mások félgömb alakú bokrokká fejlődnek. A hajtások elágazók, a fekvő részeken legyökeresednek. Virágos hajtásain átellenesen helyezkednek el elliptikus levelei. Apró, ajakos, egyes fajokon lilás rózsaszínű, másokon rózsa-vörös virágai az ágak végén nyílnak és a magja nagyon apró.\nFajai\nPárnás kakukkfű\nMagyarországon főleg a mészkőhegységekben és a szárazabb, füves réteken nő, de a kertekben termesztett kerti kakukkfű (Thymus vulgaris) is könnyen elvadulhat. Jellegzetes illatát követve a réteken, erdők szélén is előfordul és könnyen megtalálhatók.\nA párnás kakukkfű (Thymus caespititius) lazán párnás félcserje, vékony, fás szárain apró, szőrös, középzöld levelekkel. Kicsiny, halvány lilásrózsaszín virágai nyáron nyílnak rövid fürtökben. Szőnyeget képező talajtakaró cserje, Portugáliában (Kontinentális és Azori-szigetek) és Spanyolország északnyugati részén honos.\nA fénylő kakukkfű (Thymus carnosus) védett elhelyezést kíván. Dél-Portugáliában és Spanyolországban honos.\nA citromillatú kakukkfű (Thymus citriodorus) mintegy 10 cm-esre növő, terjeszkedő törpecserje. Jól bírja a hideget, fagyot. Aranysárga levelei aprók, tojás vagy kerekdedek, összedörzsölve rendkívül illatosak.\nMezei kakukkfüvek:\nKeskenylevelű kakukkfű (Thymus serphyllum) – további nevei: mezei kakukkfű, északi kakukkfű, vadkakukkfű; mint gyűjtött gyógynövényt, Magyarországon ezen a néven foglalják össze az alábbi hazánkban honos kisfajokat:\nhegyi kakukkfű (Thymus pulegioides),\nkorai kakukkfű (Thymus praecox),\nhomoki kakukkfű (Thymus degenianus).\nTermesztése\nA legjobban a tápdús, közömbös kémhatású talajkeverékekben fejlődik. Sziklakertekben, rézsűkön, kővályúkban, tipegők közt és kőfalakon is nevelhető. Napfényes, nedves, de jó vízvezető talajt kíván ez a télálló növény. Magvetéssel, félfás dugványozással és tőosztással egyaránt szaporítható. Magját tavasztól nyár közepéig lehet vetni pohárba vagy más, kisebb edénybe, 0,3–0,5 cm mélyre. Egy gramm magból 400–500, 5–8 cm-es palántát nevelhetnek; ezek gyökereztetésére a május-júniusban szedett, 8–10 cm-es, alsó részükön fásodó hajtások a legalkalmasabbak. A palántákat 20 cm tőtávolságra célszerű ültetni.\nTőosztással a legjobban márciusban vagy szeptemberben szaporítható. A legjobb fűszert vagy gyógytea-alapanyagot (herbát) a virágzáskor szedett hajtásai adják. A felhasználásra elvágott hajtásait mindig a fás részek fölött metsszék le; itt vágás után újra hajt, így egy évben többször is ad hasznosítható részt. A virágos-leveles hajtásokat szárítani kell, majd utána morzsolható és a szárrészektől megtisztítva aromaőrző csomagolásban tárolható is.\nFelhasználása\nKakukkfű virága\nVágva és morzsolva is forgalmazzák. Erős, kámforos aromája miatt óvatosan kell használni, mert túladagolva megváltoztatja az étel jellegét. Illóolajainak megőrzése érdekében jól zárható edényben kell tartani. Friss ágacskái néhány napig hűtőben is elállnak.\nLeggyakoribb alkalmazásai\nNehezebben emészthető leveseknél: bab, borsó, burgonya, paradicsom, hal, káposzta, burgonyafőzelékben, salátáknál: burgonya, zeller, paradicsom, paprika, sültekhez: baromfi-, marha- stb., vadas ételekhez, töltött káposzta, véres és májas hurka, kolbászok, májkeverékek, halételek, körözöttek, növényi ecetek és a vörösbormártás készítésénél. Petrezselyemmel keverve kitűnő fűszeres vajat készíthetünk belőle. Használja a konzervipar is. A bouquet garni fűszerkeverék meghatározó alapanyaga. Különleges ínyencfalat a kakukkfüves nyúlpecsenye.\nGyógyhatása\nKitűnő étvágygerjesztő, gyomorjavító, görcsoldó, köhögéscsillapító, szélhajtó is. Fürdővizekben illatos és frissítő hatású. Nyákoldó és köptető hatása is van, de legfőbb értéke a timol (40%) és a karvakrol (15%), amelynek erős fertőtlenítő és antimikrobiális hatását köszönheti.',
        stockQuantity: 57730,
        price: 649,
      },
      {
        herbName: 'Szegfűszeg',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/3/35/The_flowers_of_clove_tree_in_Pemba_island.JPG',
          'https://upload.wikimedia.org/wikipedia/commons/3/35/The_flowers_of_clove_tree_in_Pemba_island.JPG',
          'https://upload.wikimedia.org/wikipedia/commons/3/3e/Clove_trees.JPG',
          'https://upload.wikimedia.org/wikipedia/commons/0/0f/Starr_070906-8564_Syzygium_aromaticum.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/c/c1/Syzygium_aromaticum_on_tree.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/4/47/Gewuerznelken.jpg',
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Mirtuszvirágúak (Myrtales)',
        family: 'Mirtuszfélék (Myrtaceae)',
        genus: 'Melissa',
        species: 'Melissa officinalis',
        details:
          'A szegfűszeg (Syzygium aromaticum, régi nevén: Caryophyllus aromaticus) a 18. századig csak őshazájában, a Maluku-szigeteken termett, és halálbüntetés járt annak, aki ki akarta csempészni. Manapság főleg a trópusi Afrikában, Zanzibáron és Madagaszkáron termesztik.\nMegjelenése, termesztése\nEnnek a 15–20 méter magasra is megnövő, meleg- és vízigényes mirtuszfélének a levelei lándzsásak, örökzöldek. Halványlilás-rózsaszínű virágai a hajtások csúcsain nyílnak.\nA fűszert a pirosló virágbimbókból készítik: a zsenge bimbókat pálmalevélbe csomagolva szárítják, amíg a közismert barnára nem sötétednek. A fiatal bimbók a legillatosabbak. Alakjuk szögre emlékeztet, innen a szegfűszeg név.\nTrópusi, meleg- és vízigényes növény. Magvetéssel szaporítható. A magoncok csak 9–12 éves korukban kezdenek virágozni.\nFelhasználása\nKesernyés, kissé égető, erősen aromás ízét a sok illóolaj adja: ezt a likőriparban és kozmetikai szerek gyártásához is felhasználják. A jó minőségű szegfűszeg szétnyomva olajat enged, vízbe téve fejjel lefelé süllyed. Pikáns mártások, paradicsomos és boros ételek, páclevek és főleg sütemények ízesítésére használják. Savanyúságokba is tehető, finom, különleges ízárnyalatot ad a savanyúságnak. Fahéjjal kombinálva többféle – főleg gyümölcsös, illetve alkoholos – italt ízesítenek vele.\nNemcsak a szárított bimbót használják, hanem a virágot is – Indonéziában például cigaretta illatosítására is. A bimbójából, szárából, leveléből és magjából sajtolt illatos olajat a gyógyászatban alkalmazzák. A szegfűszegolajban sok (15% körül) az eugenol, ami a vanillin egyik fő aromaanyaga. A VIII. Magyar Gyógyszerkönyvben Caryophylli floris aetheroleum néven hivatalos drog. Fájdalomcsillapító hatása van, így hasznos lehet pl. ízületi gyulladásokban, de akár fogfájás esetén is.',
        stockQuantity: 25690,
        price: 377,
      },
      {
        herbName: 'Citromfű',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/7/70/Lemon_balm_plant.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/d/dd/Melissa_officinalis_%28lemon_balm%29.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/0/00/Bumblebee_on_Melissa_flower.jpg',
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Mirtuszvirágúak (Myrtales)',
        family: 'Mirtuszfélék (Myrtaceae)',
        genus: 'Melissa',
        species: 'Melissa officinalis',
        details:
          'A citromfű (Melissa officinalis), az árvacsalánfélék (Lamiaceae) családjába tartozó, kellemes, citromra emlékeztető illatú, fehér virágú, évelő növény. A Közel-Keletről származik, a mediterrán éghajlatot kedveli. Vadon csak szórványosan fordul elő, de kertekben sokfelé megtalálható. Népies nevei: orvosi citromfű, citromszagú melissza, méhfű, mézfű, igaz nádrafű, macskaméz, mézmenta, mézelke.\nDrogként hajtásait (Melissae herba) és levelét (Melissae folium) szedik, a leveleket virágzása kezdetén, július-augusztus hónapokban.\nElnevezése\nA növény latin neve, Melissa görög eredetű női név, jelentése: „mézelő méh”. A növény virágaiban ugyanis különösen sok a nektár, ezért a méhek fölöttébb kedvelik, amint erről már idősebb Plinius római író-polihisztor is beszámol.\nA citromfű összetett névalak első írásos említése 1775-re datálható, amikor Csapó József debreceni főorvos elsősorban gyógyászati célokat szolgáló füveskönyvében, az Új füves és virágos magyar kertben czitrom-fü alakban szerepel. Az összetett szó előtagja a latin citrum (citromfa, tujafa, életfa), vagy a középkori latin citrum (citromfa, ennek gyümölcse) átvétele. A fű utótag magyarázó szerepűnek tekinthető. A névadás alapját Barra István Növénytan című művében említik először: „nyers füve [...] czitrom szagu, melly szag száraz állapotban erőssebb”\nElterjedése\nDél-Európában a görögök terjesztették el, a méhcsaládok kirajzásának megakadályozására használták. Nyugat-európai kolostorkertjeikbe a Benedek-rendi szerzetesek vitték át, miután a 9. században áthozták az Alpokon. Nagy Károly császár 810 táján rendeletben (Capitulare de villis) írta elő termesztését. Nyugat-Európában csak az ültetvényeken található; Magyarországon és Észak-Amerika egyes részein meg is honosodott.\nFelépítése, termesztése\nMagassága elérheti a 150 cm-t. Levelei tojásdad alakúak, enyhén csipkézettek, fűrészesek, citromillatúak. A levelek a négyélű száron keresztben átellenesen állnak. Apró, fehér vagy enyhén pirosas virágai tízesével-húszasával a levélhónaljakban nyílnak, július-augusztusban. A növényre jellemző a pelyhesség és a kissé bozontosan szőrös szár is.\nMeleg, napos helyen érzi jól magát. Április elején magról vetik vagy májusban palántázzák. Cserépben, balkonládában is nevelhetjük, akár a konyhaablakban is. Magról zölddugványról vagy tőosztással szaporítják. Vetőmagszükséglet 300g/kh. Hozama 3-4q/kh száraz herba.\nHatóanyagai\nA citromfű leveleinek hatóanyagai az illóolajok (citronellál, citrál), a cseranyagok, a flavonoidok, a kávésav, a gyanta és a szaponin.\nFelhasználása\nAlkalmazása – gyógynövényként\nVírusölő tulajdonsága miatt a belőle készített krém jól alkalmazható az ajakherpesz (Herpes simplex) helyi kezelésére. Teája és illóolaja is ideg- és szívnyugtató, görcsoldó. Serkenti az emésztést, és gyakran alkalmazzák fejfájás, álmatlanság, alvászavarok esetén is. Enyhíti az idegességet, így idegerősítőként kiváló gyógynövény. Szerepe van a depresszió oldásában is. Gyomorhurut, gyomorsavtúltengés, hányinger, puffadások idején különösen jó a citromfű. Izzasztó, szélhajtó, epeműködést serkentő hatása is ismert. Emellett javítja az emésztést, csökkenti a vérnyomást és a fejfájást és általános görcsoldó szer.\nA bencés szerzetesek a kolostorokban a „szellemi”, azaz rövid italokba gyakran tettek citromfüvet. 1826-ban a „karmelita szellemből” aztán Marie Clementine Martin karmelita nővér állította elő a Klosterfrau Melissengeist nevű gyógynövényszeszt.\nA karmelitavíz néven ismert „csodaszernek”, amit a svájci Paracelsus készített el elsőként, egyik fő hatóanyaga volt.\nVirágaiból citromfűolajat (Aetheroleum melissae) desztillálnak, amit az illatszeripar is felhasznál különböző parfümök alkotórészeként. A rándulások gyógyítására használt ún. lóbalzsamnak is alkotóeleme.\nMivel távol tartja a szúnyogokat, nyári estéken érdemes virágcserépben az ablakba helyezni.\nAlkalmazása – fűszerként\nA citrom illatára emlékeztető friss levelét saláták, mártások, főzelékek, töltelékek, gyümölcslevesek, gyümölcssaláták, gomba-, hal-, szárnyas- és vadételek, hidegtálak, fűszerecetek ízesítésére használjuk. Kiváló desszertek, valamint limonádé, sörbet, tea, vermut és vaníliapuding díszítésére és ízesítésére is. 2015-ben az év fagylaltja díjat a citromfű fagylalt kapta.',
        stockQuantity: 13840,
        price: 411,
      },
      {
        herbName: 'Ánizs',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/4/49/Gardenology.org-IMG_2834_rbgs11jan.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/3/34/Aniseed_held_in_hand.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/0/01/Aniseed_p1160018.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/9/9c/AniseSeeds.jpg',
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Ernyősvirágzatúak (Apiales)',
        family: 'Zellerfélék (Apiaceae)',
        genus: 'Pimpinella',
        species: 'Pimpinella anisum',
        details:
          'Az ánizs (Pimpinella anisum) ismert fűszernövény. Népies neve: ánizsmag, illatos ánizs, közönséges ánizs, bécsi- vagy édeskömény.\nSzármazása, termőhelye\nA Földközi-tenger mellékéről származik, de már nagyon sokfelé termesztik, így nálunk is. Már az ókori Egyiptomban is használták fűszerként; az ókori Keleten fizetőeszköz is volt. Pannóniába a római katonák hozták be. A középkor kedvelt fűszere volt.\nMegjelenése, termesztése\nA közönséges ánizs egyéves, lágy szárú növény. Hazánk bármely területén termeszthető, a legtöbb talajon jól fejlődik. Meleg- és tápanyagigényes. Magról szaporítható; március közepén–április elején 30–40 cm-es sortávolságra vetik. A fő- és mellékernyők érésekor, általában júliustól aratják, és cséplés után szellős helyen tárolják.\nFűszerként szürkésbarna, 3,5–5 mm hosszú termését (Anisi fructus) használjuk; ezen gyakran a kocsány is megmarad. Illata jellemző, kellemes. A köménymagra emlékeztető, de annál erősebb szagú, édesen aromás ízű fűszer.\nJellemző kártevője a köménymoly (Depressaria daucella).\nHatóanyagai\n2-5% (80-90% anetoltartalmú) illóolaj, 10-30% zsírosolaj, kolin, 20% fehérje, cukor.\nFelhasználása\nAz ánizsmagot általában egészben használjuk. Ha kell, össze is törhetjük, de mindig csak a szükséges mennyiséget, mert gyorsan elveszíti jellegzetes aromáját. Fűszerként az egész világon sokoldalúan használják, illóolajat, fehérjét, cukrot tartalmaz.\nFelhasználható főzelékek (vörös káposzta-, sárgarépa-, tök-, cékla- stb.), vadas ételek, mártások ízesítésére; ezeket egy kevés ánizs előnyösen érdekessé teheti.\nGyakran teszik édességekbe, gyümölcskompótokba, édes rizsbe, köhögés elleni cukorkákba, pudingokba, tésztákba, süteményekbe, egyes vidékeken még a kenyérbe és a sós süteményekbe is. Sokféle italhoz adják, így puncsokhoz, szirupokhoz, likőrökhöz, édesborokhoz és teákhoz, de leginkább a likőrgyártásban jelentős\nÁnizslikőrök, ánizsos párlatok\nAz ánizs adja a görög nemzeti italnak számító ouzo (ejtsd: úzó) jellegzetes aromáját. Házilag főként törkölypárlatból (ritkábban borpárlatból) készítik, ami pedig kereskedelmi forgalomba kerül, azt általában gabonaszeszből. Az eredetileg a híoszi pisztáciafa gyantájával ízesített, szintén görög eredetű likőrt, a masztikát Görögországon kívül ánizzsal ízesítik. Az anisette (vagy anis), mely a csillagánizsból készülő pastisra hasonlít, egy nagyon édes, színtelen likőr; fő alapanyaga az ánizs. Az ánizs (a fehér üröm és az édeskömény mellett) a hasonlóképp karakteres svájci-francia abszint egyik fő alkotóeleme is.\nHa ezen italokat vízzel keverjük, érdekes jelenséget figyelhetünk meg, melyet louche-hatásnak vagy ouzo-hatásnak neveznek. Az ánizsolaj (más illóolajokhoz hasonlóan) vízben nem oldódik, ezért ilyenkor kicsapódik a párlatból és többé-kevésbé átlátszatlan, fehéres színt ad neki. Ez a színváltozás lehet az egyik oka annak, hogy ezeket az italokat már-már rituálisan isszák.\nGyógyhatása\nAz ánizst étvágyjavító, emésztést serkentő, vértisztító, hurutoldó, idegerősítő, felfúvódást szüntető, gyomor-, bél- és epebántalmak elleni szerként is használják. A gyermekgyógyászatban mint szélhajtó szinte nélkülözhetetlen. Gyógyszerekhez ízjavítónak adják.\nMagvaiból vízgőzzel illóolajat párolnak le. Származási helyétől függően az ánizsmagból 6–9% ánizsolaj vonható ki.\nHasználják illatosításra, gyenge hashajtónak, és a belső elválasztású secretumok (tej, köpet) gyorsabb kiválasztására. A tetveket gyorsan elpusztítja, ezért kenőcsként vagy borszeszes oldatban fejtetvek ellen is alkalmazzák.\nA bőrt érzékenyítő és/vagy enyhén irritáló tulajdonságai miatt tartós, több hetes használata nem ajánlott.\nA háziállatok féregűző szereinek egyik alkotója.\nKönnyen összetéveszthető a foltos bürökkel, ami mérgező!',
        stockQuantity: 30,
        price: 655,
      },
    ],
  });
  console.log(herbs);

  const users = await prisma.user.create({
    data: {
      email: 'expendables@mail.com',
      password: '12345',
      firstName: 'Kék',
      lastName: 'Csapat',
    },
  });
  console.log(users);
};

// Warning! Only use this when U have to delete all data!
// const main = async () => {
//     await prisma.herb.deleteMany()
// }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default main;
