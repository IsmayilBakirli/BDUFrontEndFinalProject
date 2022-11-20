import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbars/Navbar';
import RightNavbar from '../../Navbars/RightNavbar';

export default function History(props) {
  var {id} = useParams();
  return (
    <>
      <Navbar />
      <main style={{padding:"50px 0px 100px 0px"}} className="history">
        <section className='history'>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <div className="title d-flex justify-content-center">
                  <h2>Bdunun Təsis olunması</h2>
                </div>
                <div className="content">
                  <p style={{ fontSize: "21px" }}>Bakı Dövlət Universiteti 1919-cu il sentyabr ayının 1-də Azərbaycan Xalq Cüm­huriyyətinin parlamenti tərəfindən təsis edilmişdir. Ümummilli lider Heydər Əliyev BDU-nun yaradılması kimi mühüm tarixi hadisəyə olduqca obyektiv qiymət verərək demişdir ki, əsrin əvvəlindən bu günə kimi Azərbaycan elminə çıraq tutan universitetimizin yaradılması xalqımızın tarixində ən əlamətdar hadisələrdən biridir. Tarixi haqsızlıq ucbatından uzun müddət müstəqilliyini və dövlətçiliyini itirməyə məcbur olmuş Azərbaycan xalqı milli təhsil sistemini və mənəvi tərbiyə formalarını yaratmaq imkanlarından da məhrum edilmişdi. Yalnız 1918-ci ildə müstəqillik qazanaraq Azərbaycan Xalq Cümhuriyyətini elan edən xalqımız neçə yüz illərdən sonra milli və ictimai tərəqqidə elmin, təhsilin rolunu qiymətləndirmək imkanı qazandı. <img className='me-3 mt-3' src="https://static.president.az/upload/1562x1100/2018/03/09/6tygbejtxn_038_.jpg" style={{ width: "240px", height: "150px", display: "inline-block", float: "right" }} alt="Heydar Aliyev" /></p>

                  <p style={{ fontSize: "21px" }}>Bolşeviklərin və ermənilərin yaratdığı daxili qarışıqlığa və iqtisadi vəziyyətin ağır olmasına baxmayaraq, Azərbaycan Xalq Cümhuriyyəti milli mədəniyyətin, təhsilin, ədəbiyyatın və incəsənətin inkişafına xüsusi önəm vermiş, bu ümdə məsələlərə xü­susi qayğı ilə yanaşmışdır. Bu qayğı demokratik ziyalılarımızın uzun illərdən bəri apardığı gərgin mübarizənin həyati təzahürü idi.</p>

                  <span style={{ fontSize: "21px" }}>Azərbaycan milli hökuməti yarandığı ilk günlərdən həlli mühüm olan bir sıra iqtisadi və siyasi problemlərlə üzləşsə də, xalqın maariflənməsi üçün çox ciddi addımlar atmış, bütün məktəblərdə təhsilin icbari olması və ana dilində aparılması sahəsində konkret tədbirlər həyata keçirmişdir. Bu tədbirlərin içərisində bütün müsəlman Şərqində ilk Avropa tipli ali məktəb kimi fəaliyyətə başlayan, hazırda Azərbaycan Respublikasının aparıcı ali təhsil müəssisəsi olan Bakı Dövlət Universitetinin yaradılması xüsusi yer tutur. Şərq dünyasına respublika məfkurəsini və demokratik idarə üsulunu gətirən Azərbaycan xalqının və dövlətinin həyata keçirdiyi nəhəng tarixi hadisələrdən biri, şübhəsiz, BDU-nun yaradılması olmuşdur. Dövrün ağır və mürəkkəb beynəlxalq şərtlərinə, xarici təhdidlərə, kəskin maliyyə və kadr çatışmazlığına baxmayaraq, milli hökumət ölkədə təhsil və mədəniyyətin inkişafına xüsusi diqqət yetirir, ciddi tədbirlər həyata keçirirdi. Bunun da səbəbini Cümhuriyyət xadimlərinin, demək olar ki, hamısının bir nəfər kimi bu taleyüklü işdə maraqlı olması ilə izah etmək olar. İyirmi üç aylıq fəaliyyətlərinin on ayı ərzində bu dövlət xadimləri gərgin mübahisə və müzakirələrdən sonra həyatlarının bəlkə də ən böyük arzusunu – müstəqil dövlətin müstəqil ali təhsil ocağını – Bakı Dövlət Universitetini yaratmağa nail olmuşdular. Əlbəttə, o dövrdə universitetin yaradılması ideyasının meydana çıxmasını şərtləndirən bir sıra amillər mövcud idi. Hər şeydən əvvəl, azərbaycanlıların maariflənməsini və təhsilinin inkişafını düşünən qabaqcıl ziyalıların, ictimai xadimlərin başlıca arzularından biri universitet açmaq olmuşdu. Lakin bu ideyanı əvvəlki dövrlərdə gerçəkləşdirmək üçün şərait və imkan mövcud deyildi. Azərbaycan Xalq Cümhuriyyətinin yaradılması isə bu sahədə bir ümid çırağı yandırdı. Dövrün ağır və mürəkkəb beynəlxalq şərtlərinə, xarici təhdidlərə, kəskin maliyyə və kadr çatışmazlığına baxmayaraq, milli hökumət ölkədə təhsil və mədəniyyətin inkişafına xüsusi diqqət yetirir, ciddi tədbirlər həyata keçirirdi.</span>
                  <p style={{ fontSize: "21px" }}><img className='me-3 mt-3' src="https://i.pinimg.com/236x/93/de/9e/93de9e58226abbecd5687c843e667a1c.jpg" style={{ height: "150px", width: "220px", float: "left" }} alt="just an image" />Bunun da səbəbini Cümhuriyyət xadimlərinin, demək olar ki, hamısının bir nəfər kimi bu taleyüklü işdə maraqlı olması ilə izah etmək olar. Bu vətənpərvər ziyalıların əksəriyyəti Avropanın qabaqcıl universitetlərində təhsil almış şəxsiyyətlər olmuşdur. Məsələn, Əlimərdan bəy Topçubaşov Sankt-Peterburq Universitetini, Fətəli xan Xoyski Moskva Dövlət Universitetini, Nəsib bəy Yusifbəyli Odessa Universitetini, Əhməd bəy Ağayev Parisdə Hüquq Məktəbini və Sorbonna Universitetini, Behbud xan Cavanşir Almaniyanın Frayberq şəhərində Dağ-Mədən Akademiyasını, Mir Hidayət Seyidov Kazan Universitetini, Aslan bəy Səfikürdski Sankt-Peterburq Universitetini, Məmmədrza Vəkilov Xarkov Universitetini bitirmişdilər. Onlar mükəmməl təhsilin bəhrələrini öz gözləri ilə görmüş, həyat təcrübələrində sınaqdan keçirərək, bunu öz vətənlərində həyata keçirmək arzusu ilə yaşamışdılar. Vətən mücahidlərinin əlinə belə bir fürsət yalnız Azərbaycan Xalq Cümhuriyyəti qurulduqdan sonra düşmüşdü. Dövlət quruculuğunun daha möhkəm təməllərlə həyata keçirilməsi və müstəqilliyin qorunub saxlanılması üçün ali təhsilli milli kadrların hazırlanmasının əhəmiyyətini başa düşən Cümhuriyyət xadimləri bu vəziyyətin düzəldilməsindən ötrü addımların atılmasının vacibliyini dərk edərək xalqın sivil dünya elminə və təhsilinə yiyələnməsi üçün universitetin yaradılması qənaətinə gəlmişdilər. İyirmi üç aylıq fəaliyyətlərinin on ayı ərzində bu dövlət xadimləri gərgin mübahisə və müzakirələrdən sonra həyatlarının bəlkə də ən böyük arzusunu – müstəqil dövlətin müstəqil ali təhsil ocağını – Bakı Dövlət Universitetini yaratmağa nail olmuşdular. BDU-nun yaradılması tarixinə nəzər saldıqda, təsis edildiyi günə kimi onun nə qədər çətinliklərlə üzləşdiyini müşahidə etmək olar. Bu tarix bütövlükdə müstəqil Azərbaycanın yaranmasında xalqımız qarşısında dayanan maneələri, həm xalqımıza bu işdə dəstək olan çoxsaylı xeyirxah insanları, həm də ölkəmizi müstəqil, sivil ölkələr sırasında görmək istəməyən qüvvələri özündə əks etdirir... Azərbaycanda universitetin yaradılması asan proses deyildi. Ölkənin maliyyə imkanları xeyli zəifləmişdi, maddi-texniki baza yox idi. Milli kadrların çatışmazlığı tədris prosesinə rusdilli müəllimlərin cəlb olunmasını zəruri edirdi. Bu isə tədrisdə ruslaşdırma siyasətinə gətirib çıxara bilərdi. Lakin bu narahatlıqlar Azərbaycan dövlət xadimlərini niyyətlərindən döndərə bilmədi. Çarizm və Müvəqqəti hökumətin zülmündən ayrılıb istiqlalını elan edən, bolşevik təhlükəsilə üz-üzə dayanan Azərbaycanın dövlət və siyasi xadimləri niyyətlərində israrlı oldular. Çar mütləqiyyətinin hakimiyyəti dövründə Rusiya imperiyasının tərkibində təkcə Azərbaycanda deyil, bütün Cənubi Qafqazda bircə ali məktəb də açılmamışdı. Hələ 1871-ci ildə Rusiya çarı II Aleksandr Tiflisdə olarkən şəhər idarəsi burada bütün xərcləri özləri tərəfindən ödənilməklə universitet açılması xahişi ilə ona müraciət etmiş, lakin bu xahiş yerinə yetirilməmişdi. 1897-ci ilin sentyabr ayında Kiyev və Varşavada politexnikum açıldıqdan sonra, belə bir təhsil müəssisəsinin Zaqafqaziyada da açılması sahəsində danışıqlar başlanmışdı. Bakı Şəhər Duması və neft sənayeçiləri bu məktəbin açılması üçün birdəfəlik 250 min rubl verəcəklərini və hər il onun maliyyələşdirilməsi üçün kredit müəssisələri vasitəsilə borc pul ayrılacağını öhdələrinə götürdüklərini bildirsələr də, bu ideya da həyata keçirilmədi. 1906-cı ildə Zaqafqaziyada ali təhsil ocağının açılmasına dair danışıqlar yenidən gündəmə gəlmişdi. Bu dövrdə hakimiyyət orqanlarının fitnəkarlığı ilə ermənilərin müsəlmanlara qarşı törətdiyi qırğının guya qarşısını almaq məqsədilə çar mütləqiyyəti öz «qayğıkeşliyini» nümayiş etdirmək istədi. Tiflisdə politexnikum açılması və ali məktəbin təşkilinə ianə toplanılması üçün Qafqaz canişinliyi nəzdində xüsusi Baş Komitə yaradıldı. Bu məsələ də xeyli müddət uzadıldı. 7 may 1910-cu ildə Xüsusi Baş Komitənin sədri məktubla Bakı, İrəvan, Yelizavetpol, Poti, Batum, Qroznı və b. şəhər dumalarına müraciət edərək, Tiflisdə Qafqaz Universitetinin aşılması və hər il onun xərclərinin ödənilməsi üçün kömək göstərilməsi barədə xahiş etdi. Lakin Qafqazda ictimaiyyətin köməyi ilə universitet açılması ideyası Dövlət Duması tərəfindən müdafiə olunmadı. Azərbaycan, Gürcüstan və Ermənistandan olan deputatların əksəriyyəti bu məsələnin II Dövlət Dumasında müsbət həllini tələb etsələr də, onların tələbinə məhəl qoyulmadı. Rusiyada 1917-ci il Fevral inqilabından sonra, Müvəqqəti hökumətin maarif naziri S.F.Oldenburq Tiflis şəhər Dumasına məktub-teleqram göndərərək xahiş edir ki, Cənubi Qafqazda açılması nəzərdə tutulan yeganə ali məktəbin – Tiflis Rus Universitetinin layihə və smetasını qısa zamanda hazırlayıb hökumətin müzakirəsinə təqdim etsinlər. Bu, əslində, çar bürokratiyasının müstəmləkə əsarəti altında olan xalqlara qarşı yeritdiyi siyasətin, xüsusən maarif və mədəniyyət sahəsindəki siyasətin əsaslı şəkildə tənəzzülü demək idi. Tiflisdə «Rus universiteti»ni açmaq üçün yerli Ali qadın kurslarının professorlarından ibarət komissiya yaradılır. Bu komissiyaya görkəmli alim, cərrah və pedaqoq, üç universitetin – Saratov (1909), Tiflis (1918) və Bakı (1919) universitetlərinin yaradılmasında mühüm rol oynamış professor Vasili İvanoviç Razumovski (1857-1935) başçılıq edirdi. Komissiya universitetin layihə və smetasını hazırlayıb Zaqafqaziya Respublikası hökumətinin müzakirəsinə verdi.</p>

                  <p className='mt-3' style={{ fontSize: "23px" }}>Sonrakı hadisələri V.İ.Razumovski belə xatırlayırdı: «İşimiz qurtarana yaxın Qafqaz Zaqafqaziya Respublikası <img src="https://upload.wikimedia.org/wikipedia/tr/8/83/Memati_Kurtlar_vadisi_pusu.jpg" style={{ height: "150px", width: "220px", float: "right" }} className="mt-3 ms-3" alt="just an image" /> kimi Rusiyadan ayrıldı və gürcülərdən, ermənilərdən və türklərdən ibarət qarışıq hökumət təşkil edildi. Xalq maarif naziri bakılı Fətəli xan Xoyski idi. Biz Tiflisdə rus universitetinin təşkili üçün apardığımız işdən istifadə etməyi həmin hökumətə təklif etdik. Nazir bizi dinlədi, Qafqazda rus universitetinin təsis edilməsinə rəğbətini bildirdi, lakin əlavə edib dedi: «Bəs niyə Tiflisdə? Tiflisdə Politexnikum var, indi də gürcü universiteti?.. Bəlkə universiteti Bakıda açmaq daha düzgün olardı?» O, bizim məlumat məktublarımızı nəzərdən keçirmək üçün götürdü və bizim məqsədimiz barədə Nazirlər Şurasına məlumat verəcəyini vəd etdi». Təəssüf ki, o dövrdə yaranmış daxili və xarici vəziyyətlə bağlı Zaqafqaziya hökuməti bu məsələyə baxmağa imkan tapmadı. 1918-ci il mayın 26-da Zaqafqaziya Seyminin öz fəaliyyətini dayandırması nəticəsində üç müstəqil respublika – Azərbaycan, Gürcüstan və Ermənistan respublikaları yaradıldı. Tiflisdə fəaliyyət göstərən Ali qadın kursları 1918-ci ilin iyulunda üç fakültədən – təbiət, tarix-filologiya və tibb fakültələrindən ibarət olan Zaqafqaziya Universitetinə çevrildi. Professor V.İ.Razumovski tədrisin rus dilində aparıldığı bu universitetin rektoru vəzifəsinə seçildi. Lakin yarandığı ilk gündən bu universitet respublikalar arasında siyasi ziddiyyətlərlə və böyük maliyyə çətinlikləri ilə rastlaşırdı. Ermənistan hökuməti universitetə bir qəpik də pul vermirdi, Gürcüstan hökuməti isə onu gürcü universiteti üçün rəqib sayırdı. Elə bu səbəblərdən onun Tiflisdə fəaliyyət göstərməsi mümkün olmayacaqdı. Nəticədə, universitetin rəhbərliyi sonrakı illərdə Yekaterindorf, İrəvan və ya Bakıda fəaliyyət göstərə bilməsi üçün danışıqlara başlayır. Belə bir vaxtda Fətəli xan Xoyskinin başçılıq etdiyi Azərbaycan Xalq Cümhuriyyəti hökuməti Bakı şəhərində universitetin açılmasına böyük əhəmiyyət verirdi. Maarif və dini işlər naziri olan Nəsib bəy Yusifbəyli də bu işi reallaşdırmaq üçün bütün bilik və bacarığını sərf edirdi. Azərbaycan hökuməti millətin taleyində ali təhsilin rolunu düzgün qiymətləndirərək, ictimai, siyasi və mədəni tələbatı nəzərə alaraq, universitetin məhz Bakıda açılması üçün əməli fəaliyyətə başlayır. Bu dövrdə Azərbaycanın Həsən bəy Zərdabi, Nəcəf bəy Vəzirov, Cəlil Məmmədquluzadə, Firudin bəy Köçərli, Həbib bəy Mahmudbəyov, Abbas Səhhət, Nəriman Nərimanov, Sultan Məcid Qənizadə, Üzeyir Hacıbəyli kimi mütərəqqi ziyalıları və ictimai xadimləri öz qabaqcıl ideyalarını ali məktəblə bağlayırdılar. Ölkənin intellektual potensialı və iqtisadi gücü də universitetin fəaliyyətə başlamasına imkan verirdi.</p>
                  <p className='mt-3' style={{ fontSize: "23px" }} ><img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Mevlanzade.jpeg" className='mt-3 me-3' style={{ height: "150px", width: "220px", float: "left" }} alt="Hemid bey" />V.İ.Razumovski yazırdı: «1919-cu ilin əvvəllərində Azərbaycan Respublikasının xalq maarif naziri Həmid bəy Şahtaxtinski Tiflis şəhərinə gəldi. O, Zaqafqaziya rus universitetini Bakıya köçürmək təklifi ilə gəlmişdi, yaxşı binalar, maddi təminat və s. vəd etdi». Zaqafqaziya rus universitetinin Tiflisdə fəaliyyət göstərə bilməməsi professorlar şurasının arasında köçməklə bağlı mübahisə və danışıqların uzanmasına səbəb olmuşdu. Belə bir vəziyyətdə 1919-cu il martın sonunda rektor V.İ.Razumovski universitet şurasının iclasında Bakıdan alınmış təkliflərin daha real, sanballı olmasını əsas göstərib, məhz bu şəhərə köçmək haqqında təklif irəli sürür. O qeyd edir ki, Azərbaycan hökuməti universitetin açılması üçün hər il 5 milyon, kənd təsərrüfatı institutu üçün isə 500 min rubl vəd edir. Bundan başqa, universitet kitabxanası üçün 300 min rubl, universitetə tam yararlı klinika və avadanlıqla yaxşı təmin edilmiş xəstəxana və s. verməyi də öhdəsinə götürür. Universitet şurasının iclasında ermənilər bunun əleyhinə olsalar da, çoxluq universitetin Bakıya köçürülməsi təklifini müdafiə edir. Köçmək məsələsini birdəfəlik həll etmək üçün tələbələrin də nümayəndəsinin daxil olduğu komissiya yaradılır. Rektor V.İ.Razumovski, tələbə təmsilçiləri, həmçinin professorlar N.A.Dubrovski, L.A.İşkov və İ.S.Sito­viçdən ibarət nümayəndə heyəti Cümhuriyyət hökuməti ilə danışıqlar aparmaq, yerində real vəziyyətlə tanış olmaq üçün Bakıya göndərilir. Bakıda danışıqlar zamanı aydın olur ki, həm ictimai qüvvələr, həm də hökumət universitetin açılmasında çox maraqlıdır və onun normal fəaliyyəti üçün lazım olan hər cür fədakarlığa hazırdır. Sonralar bu münasibəti minnətdarlıqla xatırlayan V.İ.Razumovski yazırdı: “Aydın oldu ki, Azərbaycan hökuməti (başda Yusifbəyov olmaqla) Bakıda universitet olmasında ciddi şəkildə maraqlıdır, cəmiyyətin bütün siniflərinin... əhvali-ruhiyyəsi universitetin dərhal açılmasına köklənib... Bizi başa saldılar ki, hətta Zaqafqaziya rus universiteti köçməsə də, Bakıda universitet yaradılacaqdır; ultimativ formada müddət də gös­tərilmişdi – 1 may”.</p>
                </div>
              </div>
              <RightNavbar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
