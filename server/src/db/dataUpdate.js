import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// npx prisma migrate dev --name init
// Warning! Only use this when U have to delete all data!
// const main = async () => {
//     await prisma.user.deleteMany()
// }

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
      {
        herbName: 'Bíbor kasvirág',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/c/c4/Rudbeckia_purpurea.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/0/05/Echinacea_purpurea_%284990391475%29.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/0/05/Echinacea_purpurea_%284990391475%29.jpg',
 JOK-47-User-can-review-and-edit-his-profile-on-users-dashboard
          'https://upload.wikimedia.org/wikipedia/commons/4/4f/Purple_Coneflower_Echinacea_purpurea_Dried_Multiple_Close_2000px.jpg'
=======
          'https://upload.wikimedia.org/wikipedia/commons/4/4f/Purple_Coneflower_Echinacea_purpurea_Dried_Multiple_Close_2000px.jpg',
 main
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Fészkesvirágzatúak (Asterales)',
        family: 'Őszirózsafélék (Asteraceae)',
        genus: 'Kasvirág (Echinacea)',
        species: 'Echinacea purpurea',
        details:
          'A bíbor kasvirág vagy lángvörös kasvirág (Echinacea purpurea) a fészkesvirágzatúak (Asterales) rendjébe, ezen belül az őszirózsafélék (Asteraceae) családjába tartozó faj. Ismert még mint piros kasvirág vagy bíbor kúpvirág.\nÉszak-Amerikában őshonos, ott az egyik legnépszerűbb gyógynövény, kiváltképp a indiánjai használták; a hódítók tőlük vették át. A száraz erdőket, füves pusztákat kedveli. A közép-nyugati prérin, például Texasban máig vadon nő. Európában a mérsékelt égöv alatt a 18. század óta termesztik dísz- és gyógynövényként.\nJellemzői\nGyöktörzses, lágy szárú, évelő növény. A kifejlett példány 1,2 m magasra, 0,5 méter szélesre is megnő. Szára hosszú, elágazó. Az ovális-lándzsás levelek az alapnál lekerekítettek, érdesek, szélük ép, ritkásan fogazott. Éghajlattól függően, késő május-kora július között kezd virágozni. Virágai kétivarúak, méhek és lepkék porozzák őket. A 2–4 cm hosszú, széles, kezdetben felálló, később lecsüngő, pirosas-rózsaszínű nyelves virágok, és a bíborszínű csöves virágok alkotják a fészekvirágzatot. A fészekpikkely hajlékony csúcsú, virágpora sárga színű. Termése kaszattermés.\nA jó vízháztartású talajokat kedveli, a talaj pH-jára viszont kevéssé érzékeny. Ha meggyökerezett, jól tűri a szárazságot. A csigák fogyasztják.\nDísznövényként termesztett változatai\nEchinacea purpurea "Alba"\nEchinacea purpurea "Vintage Wine"\nHatóanyagai\nPoliszacharidokat (arabinogalaktánok), kávésavszármazékokat (cikóriasav), alkamidokat, flavonoidokat, illoóolajokat, poliineket tartalmaz. Gyógyászati célokra a növény föld fölötti részét is gyűjtik, de a legtöbb hatóanyagot a gyöktörzs tartalmazza.\nFelhasználása\nAz indiánok fertőző betegségek gyógyítására használták.\nKivonatát belsőleg főleg az immunműködés javítására használják. A nyelven bizsergő érzést okozhat, de ez nem veszélyes. Fokozza a szervezet ellenálló képességét a vírusfertőzések és a gyulladások ellen. A friss növényből nyert présnedvet (gyenge hőkezelés után) felső légúti megbetegedések megelőzésére adják. A nehezen gyógyuló sebek, fekélyek, valamint a nyálkahártya gyulladásának kezelésére összeállított kenőcsök egyik összetevője. Külsőleg alkalmazva gyulladásgátló.\nSugárkezeléssel párhuzamosan általában nem ajánlott, csak ha az orvos is hozzájárul.\nA homeopátiában lázzal járó fertőző betegségeket gyógyítanak vele.\nMellékhatásai\nHosszas használata alacsony vérnyomást, lázat, hányingert, hányást, nehéz légzést, ritkán gyomor- és bélbántalmakat, májgyulladást és bőrelváltozásokat okozhat. Anafilaxiás reakció is előfordulhat. Kölcsönhatásba léphet a májra káros gyógyszerekkel, egyes rákellenes gyógyszerekkel, szintetikus hormonokkal.',
        stockQuantity: 35140,
        price: 856,
      },
      {
        herbName: 'Fekete bodza',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/4/41/Sambucus_nigra_fruit_kpjas_26082005_1.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/f/f2/Elderberry.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/6/61/Sambucus_nigra_004.jpg',
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Mácsonyavirágúak (Dipsacales)',
        family: 'Pézsmaboglárfélék (Adoxaceae)',
        genus: 'Bodza (Sambucus)',
        species: 'Sambucus nigra',
        details:
          'A fekete bodza vagy festőbodza (Sambucus nigra) a bodza (Sambucus) nemzetség egyik, a Kárpát-medencében is elterjedt faja.\nSzármazása, elterjedése\nEgész Európában előfordul.\nMegjelenése, felépítése\n3–10 m magasra megnövő terebélyes cserje vagy fa. Egyéves ágai zöldek, a többévesek szürke kérgűek, paraszemölcsösek.\nA terebélyes bokor vesszői ívesen lehajlóak, a vesszőket eltörve láthatóvá válik lágy, fehér belük. Levelei sötétzöldek, az ágakon egymással szemben helyezkednek el, páratlanul szárnyasan összetettek, szélük fogazott. Virágai aprók, krémfehérek, jellegzetesen illatosak, a virágzat bogernyő. A termés fekete színű csonthéjas bogyó.\nA fává növekvő példányok ritkák: hazánkban csak a legkedvezőbb termőhelyeken (hegylábi törmeléken, patakok mentén, mérsékelt klímájú, de napfényes helyeken, tápanyagdús talajon) fordulnak elő. A több méter magas bodzafák több évtizedesek; némelyik száz évnél is öregebb. Dugvánnyal és magról is könnyen szaporítható.\nHasonló fajok\nFontos tudni a gyűjtés során, hogy közeli mérgező rokona a gyalogbodza (S. ebulus), amely lágyszárú évelő, más habitusú, és virágai nem sárgásfehérek, hanem hófehérek, portokjuk pedig lila.\nMásik rokon faj a fürtös bodza (S. racemosa), amely kevéssé alkalmazkodóképes, virágzata sárgászöld, nem tányérszerű, bogyói korallpirosak, az ágak bélszövete nem fehér, hanem sárgásbarna. Enyhén mérgező.\nÉletmódja, termőhelye\nA Kárpát-medencében főleg az erdőkben nőtt, de kitűnően alkalmazkodott az emberi beavatkozások peremein kialakuló másodlagos élőhelyekhez. Ma már főleg a degradált, nyirkos erdők és cserjések, a parlagok és útszélek növénye. Kedveli a sok tápanyagot, főleg nitrogént tartalmazó talajokat, de gyengébb talajokon is megél a nyirkostól a mérsékelten száraz, a napfényestől a félárnyékosig változó viszonyok közt. Rendszeresen megtalálhatjuk az árokpartokon, útszéleken, az akácosokban, a bolygatott „romtalajokon”, az erdőszéleken és – mivel a szennyezett levegőt jól tűri – a városokban is.\nFontos ökológiai szerepe, hogy gyorsítja a szukcessziót: gyorsan bomló avarja és árnyaló hatása segíti a vegetáció felújulását.\nFelhasználása\nRégen\nValaha felhasználták e növény minden részét a gyökerétől a kérgén át a leveléig. E hasznosítások többségét mára elfeledtük, ma leginkább csak táplálkozási és gyógyászati szerepe ismert.\nFiatal hajtásai a vastag, szivacsos bélszövet miatt törékenyek. Ahogy az ágak idősödnek, a belső bélüreg nem tágul, és azt hosszú, rugalmas és szilárd rostokból álló, egyenes szálú farész veszi körül. Ez az oka annak, hogy a legkiválóbb, szilárd és tartós, kellemes tapintású ásó- és lapátnyeleket a több éves, egyenes bodzahajtásokból készítették. Hasonló okokból nagyon régóta fúvós hangszereket: furulyát, tilinkót, kavalt is készítenek ágaiból. A régi kovácsműhelyekben a bélszövetétől megszabadított bodzahajtást használták fújtató készítéséhez (a kivett bél pedig kiváló gyújtós volt). A halászok általában bodzából készítették a hálóvarró tűt.\nA népi gyógyászatban a bodza volt „a szegényember patikája”: ennek főzetével kezelték a székrekedést, a szemgyulladást, a gümőkórt (TBC), de használták vértisztítónak, fájdalomcsillapítónak, hánytatónak, vizelethajtónak, köptetőnek, hámosítónak is.\nA szintetikus festékek feltalálása előtt fontos festőnövény is volt: a bogyóból különböző adalékanyagokkal barna, kék, ibolya, bíbor és fakókék, a levelekből pedig zöld festékanyagot vontak ki.\nErős szagú levét a legyek, egerek távol tartására permetezték.\nNapjainkban\nVirágait cukorral, citrommal és vízzel erjesztve finom, enyhén szénsavas üdítő italt kapunk. A frissen szedett virágok palacsintatésztába mártva kisüthetők, de szörp is készíthető belőlük. Bogyója szederrel vagy almával elegyítve lekvár főzésére alkalmas. Leves is készíthető belőle.\nA szárított virágaiból főzött teát meghűléses betegségek gyógyítására használják, mivel kiváló lázcsillapító, izzasztó és köhögéscsillapító.\nA bogyókból készített bodzabor (gyümölcsborféleség) egyes vidékeken hagyományos szíverősítő. Helyenként pálinkát is főznek belőle – mivel ez a művelet igen munkaigényes, a bodzapálinka ritka és nagyon drága.\nFontos! A zöld részeket, így a virág kocsányát is el kell távolítani, mert mérgezőek!\nLevelét az érés gyorsítására komposzthalmokba keverik.\nRovarűző hatását ma a biokertészetekben hasznosítják.\nHatóanyagai\nDrogja a virág (Sambuci flos), valamint levele és érett termése (Sambuci folium et fructus). A virágban flavonoidok, szaponinok, klorogénsav, ciánglikozid, illóolajok és nyálkaanyag található. A levélben cseranyag és szambunigrin glikozid, a termésben szerves savak, antocianinok (sambucianin), vitaminok és cukrok vannak.\nA bodza hatását a népi gyógyászat régóta ismeri. Tartalmaz A- és B-vitamint – C-vitamin-tartalma duplája a citrusformákénak. Tartalmaz még folsavat, pantoténsavat, ásványi anyagokat és mikroelemeket: vasat, káliumot, kalciumot, magnéziumot, foszfort, valamint illóolajokat és antociánokat (ez utóbbiaktól fekete a bodzabogyó). Enyhe hashajtó, fájdalomcsillapító, immunerősítő és izzasztó hatású.\nNépi hiedelmek\nSokféle haszna okán a bodzát sokáig különös tisztelet övezte. Egyes helyeken boszorkányos tulajdonságai miatt félték, másutt a rontó erőket távol tartó növényként tisztelték. Némely vidékeken azt terjesztették, hogy Júdás bodzafára kötötte fel magát, míg másutt Jézus keresztfájának anyagát vélték benne felismerni. Az előbbi hiedelem az oka annak, hogy azt a kis, porcos állagú, semleges ízű, immunserkentő hatású, fül alakú gombát, amely főleg a bodza ágain él, júdásfülgomba (Auricularia auricula-judae) néven ismerjük.\nSokfelé úgy vélik, hogy a bodzabokor alatt nem jó elaludni, mert elvarázsolja az embert.',
        stockQuantity: 23350,
        price: 297,
      },
      {
        herbName: 'Közönséges cickafark',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/b/bc/Achillea_millefolium_habito.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/7/77/Achillea_millefolium_bloem.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/4/41/Achillea_millefolium_Paprika.jpg',
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Fészkesvirágzatúak (Asterales)',
        family: 'Őszirózsafélék (Asteraceae)',
        genus: 'Cickafark (Achillea)',
        species: 'Achillea millefolium',
        details:
          'A közönséges cickafark (Achillea millefolium) az őszirózsafélék családjába tartozó növényfaj, a cickafark nemzetség legismertebb tagja. Egyéb megnevezései: orvosi cickafark, cickóró, cickafarkkóró, egérfarkúfű, ezerlevelűfű, patikai ezerlevelűfű, pulykafű. Európa és Ázsia rétjein, legelőin, útjai mentén tömegesen fordul elő.\nJellemzői\nÉvelő növény, szára 20–80 cm-re nő meg. Levelei lándzsásak vagy szálas lándzsásak, 2-3-szorosan szárnyasan összetettek, oldalukon akár 50 levélke is kialakulhat. Virágai sugárvirágok, melyek 4–9 mm széles sátorozó bugákat alkotnak, a fészkek 4-6, fehér vagy rózsaszín sugárvirágból állnak. Termései 2 mm hosszú kaszattermések. A növény minden része kellemes illatot áraszt. Rovar és önmegporzású elterjedését a szél és a hangyák is segítik. Változatos formavilágú faj. A dombvidéktől egészen a havasok aljáig gazdag réteken, legelőkön, szántóföldeken, talajrepedésekben, erdőkben és útszegélyeken előfordul.\nFelhasználása\nA közönséges cickafarkot elsősorban gyógynövényként ismerik, de a levele komposztálásra is használható, pontosabban a komposztálandó növények bomlásának a folyamatát gyorsítja meg. A köztudatban és a kereskedelmi forgalomban a teljes növényzet, vagyis a cickafarkfű van jelen. Gyógynövényként csak a fehér virágzatúakat használják. Ezt elsősorban gyógyteaként fogyasztják, de külsőleg borogatásra is használható. Fürdővízhez adagolva is kifejti gyógyhatását. Készítenek belőle illóolajat (kékolaj) vagy krémeket, kenőcsöket. A vegetáció megindulásakor az egész fiatal, világoszöld hajtásokat gyűjtik, hiszen ezek képezik a legjobb minőségű alapanyagot, de később a levelei zsengébb hajtásait is lehet hasznosítani.\nGyógyászati\nA növénynek gyulladáscsökkentő, fertőtlenítő, görcsoldó, emésztést javító, vérzéscsillapító és köhögéscsillapító hatást tulajdonítanak. A cickafark különböző gyógyszeres kezelések hatását erősítheti például: fájdalomcsillapítás, gyulladáscsökkentés, vérzékenység, emésztőrendszeri zavarok.\nTüdőbetegségek, torokgyulladás, gümőkór, légcső, gyomor- és bélhurut, magas láz, epehajtás, vese- és húgyhólyaggyulladás, epe-, vese-, gyomor- és bélgörcs, étvágytalanság, gyomor- és bélfekély, női betegségek, menstruációs görcs vagy erős vérzés, különböző vérzések, esetleg prosztatabántalmak, visszértágulat, vérszegénység, valamint magas vérnyomás esetén.\nKülsőleg: nehezen gyógyuló sebek, fekélyek, ekcéma, aranyér, fogíny- és szemgyulladás valamint hüvelyöblítés esetén alkalmazzák.\nA tea elkészítése\nAz aprított és megszárított cickafarkfűből 1 púpozott teáskanálnyit 2,5 dl forró vízzel leforrázzák és néhány percnyi állás után leszűrik.[8] Egész napra elosztva, éhgyomorra, vagy étkezések előtt fél órával fogyasztják. A betegség súlyosságától függően az adag növelhető 6 dl vagy 8 dl vízbe 2-3 púpozott evőkanállal.\nKülsőleg alkalmazva 6 dl vízből és 4 púpozott evőkanál cickafarkfűből készítenek forrázatot. Ez arányosan növelhető vagy csökkenthető. Egy kúra ideje 1 hónap. Folytatni csak 1 hét szünet után szabad. A tea szükség esetén csak mézzel édesíthető. Az elkészített tea eltarthatósági ideje maximum 12 óra. A teafogyasztás alatt javasolt nagy mennyiségű zöldség és gyümölcsételek fogyasztása.\nHa a fentiek szerint alkalmazzák megfelelő diagnózis elkészítése után, akkor a tea fogyasztása nem rendelkezik mellékhatásokkal.\nBorogatás\nEgy maréknyi szárított cickafarkhoz 0,5 l forró vizet öntenek, leszűrve fogíny- és szemgyulladás esetén alkalmazzák.\nFürdő\nEgy maréknyi szárított cickafarkot 0,5 l hideg vízzel leöntenek, egy éjszakára állni hagyják, másnap felforralva hozzáöntik a fürdővízhez.\nTinktúra\nA napos időben szedett cickafarkvirágot dunsztosüvegbe rakva, alkohollal leöntve 2 hétig meleg helyen áztatják, leszűrve helyi gyulladások csökkentésére alkalmazzák.\nIllóolaj\nA cickafarkolaj (Aetheroleum achilleae) hatóanyaga: (kamazulén, terpenoidok) szeszkviterpén laktonok, flavonoidok, achillein keserűanyag. Hatása: gyulladáscsökkentő, antiszeptikus hatású. Öblögetőszerként száj- és fogínygyulladás kezelésére használják.\nEllenjavallat\nAz allergiásoknál a növény érintése is reakciót válthat ki, a tea fogyasztása viszketeg, gyulladásos bőrelváltozást okozhat. Az erre érzékenyek semmilyen formában sem alkalmazhatják.\nNagy mennyiségben fogyasztása nem javasolt, mert nyomokban tujont (neurotoxikus terpén keton) tartalmaz, mely fényérzékenységet okoz.\nHatóanyagai\nTöbb száz vegyületet azonosítottak a növényben. Ezek között van kék színű proazulént tartalmazó illóolaj, achillein glukoalkaloid, keserűanyag, cseranyag, aconitsav, konitsav, aszparagin, glikozidok, zsírosolaj, gyanta, szénhidrát, vas, kén, nátrium, kálium, magnézium, mész.',
        stockQuantity: 71180,
        price: 412,
      },
      {
        herbName: 'Nagy csalán',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/1/16/Brennnessel_1.JPG',
          'https://i.pinimg.com/originals/3d/53/72/3d5372582b4030fb849dad638527a252.jpg',
          '',
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Rózsavirágúak (Rosales)',
        family: 'Csalánfélék (Urticaceae)',
        genus: 'Urtica',
        species: 'Urtica dioica',
        details:
          'A nagy csalán (Urtica dioica) az egyik legismertebb gyom- és gyógynövény. A „csalán” (csolyán) elnevezést valójában több faj gyűjtőneveként használjuk. Ezek azonban az ajakos virágú árvacsalánoktól virágszerkezetükben alapvetően különböznek. A növény pollenszórása június elejétől október végéig tart.\nElterjedése\nEgész Európában elterjedt, Magyarországon mindenütt közönséges.\nÉlőhelye\nÜde, nedves erdők, vágások, szurdokerdők, gyomtársulások, mocsarak. Talajigénye nitrogéngazdag, ideális számára például az ültetett akácos. A talaj nitrogéntartalmának indikátora. Kedveli a nitrogénben gazdag romtalajokat is.\nJellemzői\nMagas termetű (kb. 50–150 cm magas), csalánszőrökkel borított, szögletes hajtású, indás évelő növény. Minden szervén megtalálhatóak a csalánszőrök, amelyeknek érintése fájdalmas, égető, viszkető érzést okoz, apró kiütésekkel. Ennek oka, hogy a csalánszőrök hangyasavat tartalmaznak. A csalánszőrrel a hámszövet alá kerül a hangyasav, mely maró hatású, szúrós szagú, színtelen folyadék. Függőleges gyöktörzse szerteágazó gyökérben folytatódik, melyhez oldalra messze kúszó tarackokat is hajt. A levelek szíves-tojásdadok vagy lándzsásak, hosszan hegyesedők, durván fűrészes szélűek. A szár csoportosan nő, felálló vagy felemelkedő, üreges, négyszögletű.\nA porzós virágok lecsüngő füzéreket, a termősek kis csomókat alkotnak. A növény kétlaki, a porzós és a termős virágok külön-külön egyedeken fejlődnek. Termése a makkocska, mely fénytelen szürke színű tojásdad és oldalról lapított alakú.\nSzaporodása\nKúszó gyöktörzzsel és maggal. A bimbóban ívben meghajlott porzók kinyílásakor rugalmasan felpattannak, és kis felhőként szórják szét allergén pollenjét.\nHasznosítása, jelentősége\nA csalánszőr hangyasavat, acetilkolint, szerotonint és hisztamint tartalmaz, ezért fájdalmas és égető a csaláncsípés. Fontos gyógynövény, de számos hazai lepkefaj tápnövénye is. Régebben a növény friss hajtásával ütögették a reumásokat. Teáját évszázadok óta fogyasztják ízületi betegségek ellen. Erősítő, vizelethajtó, vértisztító, tejelválasztást serkentő teakeverékek alkotórésze. Gyökerének alkoholos kivonatát samponokba, tonikokba, egyéb hajápoló termékekbe teszik hajhullást csökkentő, hajerősítő hatása miatt.\nA konyhában is használatos gyógynövény: leveleit főzelékként, zsenge hajtásait tavaszi levesekben és salátákban fogyasztják, sőt néha sörhöz is használják fűszerként. Gyökere és levelei vizelethajtó és gyulladáscsökkentő hatásúak. Leveleit gyakran alkalmazzák epe- és májbántalmakra is. Az egész növényből kisajtolt nedv kitűnő tavaszi tisztítókúrákhoz, az egész kiválasztó szervrendszert felpezsdíti.\nA középkorban háborús időkben a kendert helyettesítették vele, belőle készítettek fonalat és szövetet. Levelének gyűjtési ideje március-április, gyökérzetét pedig ősszel vagy tavasszal szokás gyűjteni.',
        stockQuantity: 93850,
        price: 159,
      },
      {
        herbName: 'Édeskömény',
        image: [
          'https://upload.wikimedia.org/wikipedia/commons/3/31/Foeniculum_vulgare.JPG',
          'https://upload.wikimedia.org/wikipedia/commons/4/4b/Starr_030628-0083_Foeniculum_vulgare.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/9/9a/20110917Fenchel_Neulussheim1.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/0/0b/Fenouil.jpg',
 JOK-47-User-can-review-and-edit-his-profile-on-users-dashboard
          'https://upload.wikimedia.org/wikipedia/commons/6/65/Fennel_seed.jpg'
=======
          'https://upload.wikimedia.org/wikipedia/commons/6/65/Fennel_seed.jpg',
 main
        ],
        kingdom: 'Növények (Plantae)',
        order: 'Ernyősvirágzatúak (Apiales)',
        family: 'Zellerfélék (Apiaceae)',
        genus: 'Foeniculum',
        species: 'Foeniculum vulgare',
        details:
          'Az édeskömény (Foeniculum vulgare) a zellerfélék (Apiaceae, régebben Umbelliferae) népes családjából a Foeniculum növénynemzetség legelterjedtebb és legismertebb tagja. Egyéb elnevezése ánizskapor, vezérkapor (Balaton déli partján), fennel, ismert olasz neve finocchio. A növény fűszer és gyógynövény is. A fontosabb termesztésben álló változatok: közönséges édeskömény (F. vulgare var. vulgare), fűszer (édes) édeskömény vagy római édeskömény (F. vulgare var. dulce), és az olasz édeskömény vagy gumós édeskömény (F. vulgare var. azoricum).\nElterjedése, termőhelye\nA Mediterráneumból származik, és már az ókorban ismerték és használták.\nMegjelenése\nÉvelő, ritkán kétéves növény. 30–40 centiméter hosszú, orsó alakú főgyökere kívül piszkosfehér, belül hófehér. Erősen elágazó, hengeres, finoman barázdált, kopasz, deresen kékeszöld színű szára 1–2 méter magasra nő meg. Többszörösen szárnyasan összetett levelei szórt állásúak. A levélnyél alapi része hólyagosan felfújt, kissé elálló hüvely, a felső végén a két rövid, csuklyaszerű hegy fülecskéhez hasonlít. A finoman szeldelt, ép szélű, kopasz és szétálló levélsallangok fonalasak. A 20–25 centiméter hosszú alsó levelek felépítése bonyolult; a száron felfelé haladva mérete csökken, egyre kevésbé tagoltak.\nA lapos, kétszeresen összetett ernyősvirágzata legfeljebb 15 cm széles,[4] mindig a szárak végén nő; alatta gallér- vagy gallérkalevél nem fejlődik. Az öt zöld csészelevél jelentéktelen, keskeny szegéllyé redukálódott. Az öt apró, sárga sziromlevél szabadon áll, az ugyancsak öt porzó a sziromlevélszint fölé emelkedik. Termése nagyon hasonlít a kaporéhoz, de nagyobb annál. A hengeres, nem szárnyalt termés a két termőlevél összeforradásából keletkezett, alsó állású magházból fejlődik ki. Az 5–8 mm hosszú, zöldesbarna vagy zöldessárga termés két vége elkeskenyedik. A termés könnyen kettéválasztható két, laposan domború résztermésre: ezek öt-öt bordája közül a hasi oldalon levő kettő erősen kiáll. A többrétegű termésfal összenőtt a maghéjjal. A mag belső tápláló szövetében (endospermium) a csíra zsíros olajokból és aleuronszerekből táplálkozik. A közönséges édeskömény termése csípős és kissé édeskés ízű, fűszernek ez a legjobb. A római édeskömény termése a legédesebb; ez egyáltalán nem csípős.\nTermesztése\nA közönséges édeskömény legfontosabb alfaja a F. vulgare ssp. capillaceum, az ún. „hajszerű édeskömény”. A termesztés szempontjából fontosabb változatok: F. vulgare var. vulgare – közönséges édeskömény, F. vulgare var. dulce – római édeskömény vagy fűszer édeskömény, F. vulgare var. azoricum – olasz édeskömény vagy gumós édeskömény – ezt szinte kizárólag a szárgumójáért ültetik, mert termése többnyire kellemetlen ízű.\nKülönösen sok édeskömény termett Madeira szigetén, amikor azt a portugálok az 1420-as években birtokba vették. Tengerész Henrik expedíciójának vezetője, João Gonçalves Zarco erről a növényről nevezte el azt az öblöt, ahol a sziget későbbi fővárosát megalapították, mert az édeskömény főzetével kúrálta krónikus szembaját.\nNapjainkban a világ valamennyi mérsékelt, illetve meleg éghajlatú vidékén termesztik – a legtöbbet Franciaországban és Bulgáriában, Magyarországon mintegy 1500 hektáron, elsősorban a közönséges édesköményt.\nMelegigényes növény, és az elmúlt évezredekben elég jól alkalmazkodott a kontinentális éghajlathoz is. Magjai 6-7 °C-on kezdenek csírázni, de 18-20 °C az optimális. Virágzás és terméskötés idején 25 °C körüli hőmérsékletet igényel. Közepesen fagyérzékeny: a −8-10 °C-os hideget a közönséges édeskömény tövei még hó nélkül is jól átvészelik, az ennél hidegebbet csak hótakaró alatt. A római édeskömény kevésbé fagytűrő.\nFényigényes, mert gyenge fényben, árnyékban virágzata alig fejlődik; megeshet, hogy a virágok magkötés nélkül hervadnak el. Félárnyékban, illetve szórt fényben mindenképp kevesebb magot hoz, mint a napon. Főzeléknek való változata az olasz édeskömény, valamivel kevesebb fénnyel is beéri.\nVízigénye erősen változó: a csírázástól a virágzás kezdetéig, tehát az intenzív növekedési szakaszban sok vizet igényel – virágzáskor viszont a sok csapadék rontja a maghozamot, és később sincs szüksége sok vízre. Különösen az első évben érdemes öntözni, utána mélyre hatoló gyökérzete már ellátja vízzel.\nA legeredményesebben középkötött talajon termeszthető, de szinte bármin megél. A kötöttebb talajokat jobban szereti, mint a lazákat, de csak akkor, ha jó a vízgazdálkodásuk. Pangó vizes, nyirkos, hideg talajokon kipusztul.\nBár zöldtömeget fejleszt, ehhez csak közepes mennyiségű tápanyagra van szüksége. A frissen trágyázott területeken gyökerei elrothadhatnak. A túl sok nitrogén gátolja a magkötődést és csökkenti a télállóságot. Kiemelkedően sok foszforra van szüksége.\nJellemző kártevője a köménymoly (Depressaria daucella).\nHatóanyagai\nA termésekben a 2–5% illóolajon kívül 12-18% zsírosolaj, 18-20% fehérje van. Az illóolaj fő komponense az édes transzanetol (50–70%) és a kesernyés, kámforos ízű alfa-fenkon (< 50%). Tartalmaz szafrolt és van benne egy kevés metilkavikol is. A római édesköményben 10–30%-kal több az anetol, mint a közönséges édesköményben. Illatát az ánizsaldehid adja, ami miatt igen hasonlít az ánizséhoz.\nEgyes indiai fajták illóolaj-összetétele jellegzetes, mert nem tartalmaznak anetolt. Nemcsak a termésben van illóolaj, hanem az egész növényben: a gyökérben 0,6%, a szárban és a levélben 1–1,5%.\nFelhasználása\nTárolni csak egészben szabad, mert még így is gyorsan csökken az illóolaj-tartalma.\nÉtkezés\nÍze és illata az ánizsmaghoz hasonlít. Magjait levesekbe és halételekbe főzik, a gumóját lereszelik, és a káposztasalátához adják. A római édeskömény termése a fehér üröm és az ánizs mellett az abszint fő ízesítő anyaga.\nGyógyászat\nA VIII. Magyar Gyógyszerkönyvben szereplő drogjai: édesköménytermés (Foeniculi dulcis fructus), keserű édeskömény termés (Foeniculi amari fructus), keserű édeskömény termésolaj (Foeniculi amari fructus aetheroleum), keserű édeskömény virágos hajtás illóolaj (Foeniculi amari herbae aetheroleum).\nÉtvágyjavító, szélhajtó, görcsoldó, tejszaporító hatású. Egyik legjobb erjedés- és puffadásgátló gyógynövényünk. Gyakran adják együtt hashajtó drogokkal, hogy kivédje vagy enyhítse a hashajtó által okozott görcsöket.\nFelhasználható még késő, rendszertelen menstruáció kezelésére is. Aktiválja a női hormonokat, és ezzel enyhítheti a klimax tüneteit. Jobb hatást érhetünk el, ha az édesköményt cickafarkkal és komlóval kombináljuk. A késő menstruációnál 10 nappal annak ideje előtt kezdjük inni az édeskömény teáját, és utána rendszeresen, mindennap fogyasszuk.',
        stockQuantity: 103840,
        price: 109,
 JOK-47-User-can-review-and-edit-his-profile-on-users-dashboard
      }
=======
      },
 main
    ],
  });
  console.log(herbs);

  const users = await prisma.user.createMany({
    data: [
      {
        email: 'user@mail.com',
        password: 'password',
        firstName: 'Kék',
        lastName: 'User',
      },
      {
        email: 'admin@mail.com',
        password: 'password',
        firstName: 'Kék',
        lastName: 'Admin',
        role: 'ADMIN',
      },
      {
        email: 'superadmin@mail.com',
        password: 'password',
        firstName: 'Kék',
        lastName: 'Superadmin',
        role: 'SUPERADMIN',
      },
    ],
  });

  // const users = await prisma.user.findMany()
  console.log(users);
};

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
