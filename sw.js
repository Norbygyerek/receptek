
const CACHE_NAME = 'receptek-cache-v1';
const FILES_TO_CACHE = [
  'manifest.json',
  'sw.js',
  'receptek.json',
  'index.html',
  '00_001_sajttorta-poharkrem.html',
  '00_002_epres-kosarak-cukormentes-zabpudinggal.html',
  '00_003_bananos-csicseriborso-muffin.html',
  '00_004_afonyas-sult-zabkasa-banannal-tojas-tejmentes.html',
  '00_005_brownie-tejmentes-glutenmentes.html',
  '00_006_kakaos-zabpehely-joghurttal-es-eperrel.html',
  '00_007_almas-kokuszgolyo.html',
  '00_008_meggyes-makos-turokrem.html',
  '00_009_egyszeru-bananos-palacsinta.html',
  '00_010_makos-citromos-muffin-reszelt-almaval.html',
  '00_011_bananos-chia-puding-malna-ontettel-hozzaadott-cukortol-mentes.html',
  '00_012_almas-fahejas-kasa-aztatva.html',
  '00_013_sutotokos-bananos-szelet-mindenmentes.html',
  '00_014_dios-fahejas-sutik-hozzaadott-cukortol-mentes-rostdus.html',
  '00_015_hokifli-rostdus-cukormentes.html',
  '00_016_narancsos-etcsokolades-muffinak.html',
  '00_017_kokuszos-kiwis-chia-puding.html',
  '00_018_fustolt-sajtos-kapros-keksz.html',
  '00_019_feherjedus-szilvas-fahejas-suti.html',
  '00_020_makos-joghurtos-palacsinta.html',
  '00_021_fahejas-hazi-granola-cukormentes.html',
  '00_022_kekszszalami-cukor-es-feher-liszt-mentesen.html',
  '00_023_gyumolcsos-zabpelyhes-piskota.html',
  '00_024_hozzaadott-cukortol-mentes-erdei-gyumolcsos-fagyi.html',
  '00_025_meggyes-vagy-cseresznyes-turos-cukormentes-sutemeny.html',
  '00_026_cukkinis-cukormentes-brownie.html',
  '00_027_gyors-epres-mandulas-pite.html',
  '00_028_erdei-gyumolcsos-epres-chia-puding.html',
  '00_029_kakaos-csaszarmorzsa.html',
  '00_030_epres-vanilias-zabpuding-cukormentesen.html',
  '00_031_repas-dios-banankenyer.html',
  '00_032_fustolt-sajtos-kapros-szelet.html',
  '00_033_epres-kokuszos-quinoa-kasa.html',
  '00_034_bananos-almas-muffin-mogyorovajjal.html',
  '00_035_makos-afonyas-sutemeny.html',
  '00_036_makos-meggyes-cukormentes-muffin.html',
  '00_037_hamis-tejbegriz.html',
  '00_038_kiwis-turokrem.html',
  '00_039_repas-pekandios-muffin.html',
  '00_040_lekvaros-palacsinta-hozzaadott-cukortol-mentesen.html',
  '00_041_mezeskalacs-mez-nelkul.html',
  '00_042_zablisztes-zserbogolyok-hozzaadott-cukortol-mentesen.html',
  '00_043_feherjeben-gazdag-citromos-gyomberes-banankenyer.html',
  '00_044_sult-almas-fahejas-chiapuding.html',
  '00_045_csokis-zabsutemeny-2.html',
  '00_046_sutotokos-muffin.html',
  '00_047_cukormentes-rostdus-repatorta.html',
  '00_048_mini-15-perces-vanilias-sajttorta.html',
  '00_049_kortes-bulgur-felfujt.html',
  '00_050_sutotokos-golyo-cukormentesen.html',
  '00_051_cukormentes-sajttorta-malnaszosszal.html',
  '00_052_dios-szilvas-sult-zabkasa.html',
  '00_053_sutotokos-almas-sutemeny-olajos-magvakkal-2.html',
  '00_054_sutotokos-almas-sutemeny-olajos-magvakkal.html',
  '00_055_hozzaadott-cukortol-mentes-almas-dios-muzliszelet.html',
  '00_056_kortes-gofri-citromos-ricotta-kremmel.html',
  '00_057_csokis-zabsutemeny.html',
  '00_058_szilvas-joghurtos-kevert-sutemeny.html',
  '00_059_sargabarackos-kekszes-turokrem.html',
  '00_060_gluten-es-tejmentes-almaspite.html',
  '00_061_malnas-vanilias-tejberizs.html',
  '00_062_kokuszos-afonyas-tapiokapuding.html',
  '00_063_gyors-barackos-kokuszos-pite.html',
  '00_064_5-perces-hideg-kakaos-zabpuding-hazilag.html',
  '00_065_kakaos-gofri.html',
  '00_066_epres-zabgolyo.html',
  '00_067_cseresznyes-kakaos-suti-sutemeny.html',
  '00_068_tojasmentes-zabos-sutemeny.html',
  '00_069_mandulavajas-tortilla-tekercs-banannal.html',
  '00_070_bananos-kokuszgolyo.html',
  '00_071_turogomboc-erdei-gyumolcs-ontettel.html',
  '00_072_pekandios-keksz.html',
  '00_073_tehenturos-epres-kevert-sutemeny.html',
  '00_074_raffaello-golyok.html',
  '00_075_bananos-mogyorovajas-muffin.html',
  '00_076_ceklas-pekandios-brownie.html',
  '00_077-afonyas-cleaned.html',
  '00_077_barackos-afonyas-kevert-sutemeny.html',
  '00_078_fustolt-lazacos-rukkolas-wrap.html',
  '00_079_turos-palacsinta-malna-szosszal.html',
  '01_001_kapros-turos-pite.html',
  '01_002_spenotos-ricottas-lasagne.html',
  '01_003_sutoben-sult-durbincs-basmati-rizzsel-kapros-tzatziki-szosszal-es-sult-vagy-parolt-zoldsegekkel.html',
  '01_004_szaftos-paprikas-ragu-bulgurral-es-savanyu-kaposztaval-tejmentes.html',
  '01_005_kolessel-rakott-tofu.html',
  '01_006_spargas-csirkemell-gorgonzola-szosszal-es-basmati-rizzsel.html',
  '01_007_fuszeres-csirkecomb-vegyes-sult-zoldsegekkel.html',
  '01_008_sutoben-sult-pisztrangfile-burgonyaval-kapros-zoldhagymas-salataval-mustaros-ontettel.html',
  '01_009_chilis-sin-carne-avagy-husmentes-chilis-bab.html',
  '01_010_toltott-cukkini-husos-2.html',
  '01_011_aszalt-szilvas-szuzerme-parolt-lilakaposztaval.html',
  '01_012_roston-sult-grillezett-csirkemell-quinoaval-es-repas-almas-ceklasalataval.html',
  '01_013_tejszines-spenotos-garnela-kuszkusszal.html',
  '01_014_mogyoros-csirke-piritott-zoldsegekkel-es-soba-vagy-teljes-kiorlesu-tesztaval.html',
  '01_015_gombas-zoldfuszeres-csirkeragu-paradicsomszosszal-es-barna-rizzsel.html',
  '01_016_piritott-fustolt-tofu-kremes-spenotfozelekkel.html',
  '01_017_gyros-fuszerezesu-csirkemell-sutoben-sult-burgonyaval-zoldsegekkel-es-fokhagymas-gorogjoghurttal.html',
  '01_018_grillezett-halloumi-sajt-cukkini-curry-s-bulgurral-es-tzatziki-fuszeres-joghurttal.html',
  '01_019_paradicsomos-voroslencsevel-rakott-cukkini.html',
  '01_020_piritott-fustolt-tofu-bulgur-rizibizivel.html',
  '01_021_hawaii-turopizza.html',
  '01_022_pizza-teljes-kiorlesu-liszttel.html',
  '01_023_turopizza.html',
  '01_024_soba-fott-hus-meggymartassal-es-burgonyaval.html',
  '01_025_almas-sertescomb-kuszkusszal.html',
  '01_026_nyul-vagy-csirke-comb-tepsis-burgonyaval-es-vegyes-kaposztasalataval.html',
  '01_027_kolessel-rakott-brokkoli-husos.html',
  '01_028_fuszeres-lazacfile-sutoben-sult-zoldsegkorettel.html',
  '01_029_szekelykaposzta-zsirszegenyen.html',
  '01_030_lencses-vagy-lencse-bolognai.html',
  '01_031_zoldseges-tejszines-csirke-basmati-rizzsel.html',
  '01_033_vadas-durum-tesztaval-es-savanyusaggal.html',
  '01_034_mogyorovajas-tofu-piritott-zoldsegekkel-es-soba-vagy-teljes-kiorlesu-tesztaval.html',
  '01_035_mogyoros-csirke-piritott-zoldsegekkel-es-soba-tesztaval.html',
  '01_036_airfryer-ben-sult-fuszeres-lazacfile-granatalmas-currys-bulgurral.html',
  '01_037_vajban-sult-alaszkai-tokehal-sult-zoldsegkorettel-es-parolt-brokkolival.html',
  '01_038_kremes-currys-csirkemell-kokusztejjel-hutott-basmati-rizzsel.html',
  '01_039_repas-borsofozelek-airfryer-ben-sult-panirozott-csirkemellcsikokkal.html',
  '01_040_egyszeru-hagymas-csirkemaj-kuszkusszal-es-savanyusaggal.html',
  '01_041_sutoben-sult-csirkecomb-basmati-rizzsel-es-repas-kaposztasalataval.html',
  '01_042_sutoben-sult-citromos-fokhagymas-durbincsfile-sult-zoldsegkorettel-es-tokmagos-salataval.html',
  '01_043_zsirszegeny-borsofozelek-tukortojassal.html',
  '01_044_pulykafasirt-rizibizivel-es-sajtszosszal.html',
  '01_045___trashed.html',
  '01_046_csirkes-cheddar-sajtos-tortilla-tekercs.html',
  '01_047_zoldseg-szoszos-csirkemell-petrezselymes-kuszkusszal.html',
  '01_048_spenotos-tejszines-teszta-sult-lazacfilevel.html',
  '01_049_csirkecomfile-quinoaval-sult-kukoricaval-joghurtos-szosszal.html',
  '01_050_kapros-tokfozelek-sult-lazaccal.html',
  '01_051_bulguros-hus-kovaszos-uborkaval.html',
  '01_052_rakott-zoldbab.html',
  '01_053_zsirszegeny-francia-lecso-csirkemellel-es-bulgurral.html',
  '01_054_bulgurral-toltott-paprika.html',
  '01_055_egyszeru-tonhalas-spagetti-olivabogyoval-es-kukoricaval.html',
  '01_056_hamis-rantott-hus-fokhagymas-joghurtos-uborkasalataval.html',
  '01_057_lecsos-csirkemaj-bulgurral.html',
  '01_058_egyszeru-cukkinifasirt-martogatossal.html',
  '01_059_zoldseges-currys-csirkemell-barna-rizzsel.html',
  '01_060_avokadokremes-tortilla-tekercs-fott-tojassal.html',
  '01_061_paprika-szoszos-spenotos-teszta.html',
  '01_062_brokkolis-gombas-csirkemell-tejszines-szosszal-es-teljes-kiorlesu-tesztaval-2.html',
  '01_063_brokkolis-gombas-csirkemell-tejszines-szosszal-es-teljes-kiorlesu-tesztaval.html',
  '01_064_spenotos-ricottakremmel-toltott-csirkemell.html',
  '01_065_paradicsomos-daralt-hussal-rakott-sajtos-cukkini.html',
  '01_066_sajtmartasos-roston-sult-csirkemell-zoldseges-bulgurral.html',
  '01_067_csalanfozelek-tukortojassal-es-quinoaval.html',
  '01_068_tejfoles-gombas-csirkeragu-tonkolygaluskaval.html',
  '01_069_paradicsomos-spenotos-csirkemell-csicseriborsoval-es-basmati-rizzsel.html',
  '01_070_petrezselymes-repas-huspogacsa.html',
  '01_071_zoldseges-zsirszegeny-bolognai-spagetti.html',
  '01_072_gombas-paradicsomos-basmati-rizs-tonhallal.html',
  '01_073_keksajtos-karaj-parolt-narancsos-lilakaposztaval.html',
  '01_074_csicseriborso-curry-fustolt-tofuval.html',
  '01_075_ananaszos-cheddar-sajtos-csirkemell-kukoricas-rizzsel.html',
  '01_076_spenotos-tofu-curry-basmati-rizzsel.html',
  '01_077_kakukkfuves-fokhagymas-szuzerme-kremes-tejszines-zoldborsofozelekkel.html',
  '01_078_sutoben-sult-pisztrang-zoldsegkorettel-2.html',
  '01_079_meggyes-kokuszos-cukormentes-turogomboc.html',
  '01_080_spenotos-fokhagymas-koles-vajban-sult-nilusi-sugerrel.html',
  '01_081_pesztos-csirkes-teszta.html',
  '01_082_repas-tejfoles-lencsefozelek-lisztmentes.html',
  '01_083_sutoben-sult-pisztrang-zoldsegkorettel.html',
  '01_084_bulgurral-toltott-kaposzta.html',
  '01_085_kacsamell-erdei-gyumolcs-szosszal-sult-burgonyaval-es-rukkola-salataval.html',
  '01_086_airfryerben-sult-panirozott-garnelarak-avokados-almas-salataval.html',
  '01_087_gyomberes-narancsos-csirkecomb-zoldsegekkel-sutve.html',
  '01_088_lencsefozelek-turolepennyel.html',
  '01_089_szuzerme-fokhagymas-gorgonzola-martassal-barna-rizzsel-es-savanyusaggal.html',
  '01_090_zabkorpas-fasirt-ceklas-almas-kolessel.html',
  '01_091_turos-sajtos-rakott-penne.html',
  '01_092_serteskaraj-sult-edesburgonyaval-almaval-parolt-lilakaposztaval.html',
  '01_093_rakott-savanyu-kaposzta.html',
  '01_094_rozmaringos-halfile-burgonyaval-es-oszi-kaposzta-salataval.html',
  '01_095_mezes-mustaros-csirkecomb-barna-rizses-rizibizivel-es-sult-repaval.html',
  '01_096_zabpehellyel-rakott-joghurtos-sajtos-karfiol.html',
  '01_097_spenotos-koles-rizotto-sult-halfilevel.html',
  '01_098_tejszines-mediterran-sugerfile-barna-rizzsel.html',
  '01_099_mustaros-tejszines-csirke-bulgur-rizibizivel.html',
  '01_100_kortes-gorgonzolas-csirkemell-kakukkfuves-bulgurral.html',
  '01_101_gombapaprikas-quinoaval.html',
  '01_102_sutotokos-voroslencse-curry.html',
  '01_103_zoldseges-chilis-bab.html',
  '01_104_almas-pulykafasirt-kuszkusszal-es-kaposzta-salataval.html',
  '01_105_meleg-almas-bulgursalata-sult-gyokerzoldsegekkel-grillezett-sajttal.html',
  '01_106_gombas-paradicsomos-tonhalas-penne.html',
  '01_107_sutoben-sult-fuszeres-lazacfile-kuszkusszal-es-almas-ceklas-salataval.html',
  '01_108_ananaszos-currys-csirkemell-bulgurral.html',
  '01_109_tejfolos-csirkepaprikas.html',
  '01_110_paradicsomos-turos-galette.html',
  '01_111_sajtos-zoldsegtocsni-joghurtos-martogatossal.html',
  '01_112_serteskaraj-meggymartassal-es-bulgurral.html',
  '01_113_voroslencse-dahl-tukortojassal.html',
  '01_114_repas-zoldbabfozelek-parmezanos-fasirttal.html',
  '01_115_quinoaval-toltott-padlizsan.html',
  '01_116_lazacfasirt-joghurtos-martogatossal.html',
  '01_117_rakott-padlizsan.html',
  '01_118_grillezett-csirkemell-joghurtos-kukoricasalataval.html',
  '01_119_toltott-paprika.html',
  '01_120_mozzarellas-paradicsomos-csirkemell-kolessel.html',
  '01_121_sutoben-sult-saslik-quinoaval-2.html',
  '01_122_fokhagymas-garnelarak-spenotos-quinoaval.html',
  '01_123_rakott-krumpli-maskepp.html',
  '01_124_grill-csirkemell-almas-dios-kuszkusszal.html',
  '01_125_mozzarellas-csirkemell-sult-zoldsegekkel-joghurtos-uborka-salataval.html',
  '01_126_grill-sajt-almas-zelleres-quinoa-salataval.html',
  '01_127_garnelarak-quinoaval-es-spargaval.html',
  '01_128_lazacos-gyors-tesztasalata.html',
  '01_129_hawaii-pizza.html',
  '01_130_panirozott-halfile-bulgurral-es-tzatziki-szosszal-2.html',
  '01_131_spenotos-currys-voroslencse-fozelek-tofuval.html',
  '01_132_sajtos-tejfoles-sertescomb-bulgur-rizibizivel.html',
  '01_133_panirozott-halfile-bulgurral-es-tzatziki-szosszal.html',
  '01_134_currys-csirkemell-teljes-kiorlesu-spagettivel.html',
  '01_135_lazacpisztrang-porehagymas-gombas-bulgurral.html',
  '01_136_zoldseges-lasagne.html',
  '01_137_sutoben-sult-fuszeres-lazacfile-edesburgonya-parolt-zoldbab.html',
  '01_138_husmentes-rakott-cukkini.html',
  '01_139_kecskesajtos-fuszeres-csicseriborso-salataval-joghurtos-ontettel.html',
  '01_140_grill-csirkemell-quinoaval-es-gorogsalataval.html',
  '01_141_aszalt-paradicsomos-spenotos-teszta.html',
  '01_142_grillezett-hallomi-sajt-bulgur-tavaszi-tabuleval.html',
  '01_143_zabpelyhes-tonhalfasirt-currys-bulgurral-vegyes-salataval.html',
  '01_144_turos-laska.html',
  '01_145_fasirt.html',
  '02_001_babos-halkrem.html',
  '02_002_kukoricas-paradicsomos-avokadokrem.html',
  '02_003_aszalt-paradicsomos-ricottakrem.html',
  '02_004_aszalt-paradicsomos-tonhalkrem.html',
  '02_005_curry-s-hummusz.html',
  '02_006_voroslencse-pastetom.html',
  '02_007_hazi-majorannas-majkrem.html',
  '02_008_egy-perces-tonhalkrem.html',
  '02_009_avokados-hagymas-tojaskrem.html',
  '02_010_ujhagymas-lazacpastetom.html',
  '02_011_bazsalikomos-turokrem.html',
  '02_012_tojasos-repas-tonhalkrem.html',
  '02_013_sult-paprika-kence-muhammara.html',
  '02_014_sutotokos-hummusz.html',
  '02_015_currys-babkrem.html',
  '02_016_turokrem-variaciok.html',
  '02_017_avokados-tonhalkrem.html',
  '02_018_aszalt-paradicsomos-hummusz.html',
  '02_019_ujhagymas-tojaskrem.html',
  '02_020_tonhalkrem.html',
  '02_021_ceklas-hummusz.html',
  '02_022_avokados-cottage-cheeses-szendvicskrem.html',
  '03_001_tavaszi-borsoleves-galuskaval.html',
  '03_002_zoldpaszuly-leves-zsirszegeny-konnyed-recept.html',
  '03_003_karalabe-leves-kapros-turogomboccal.html',
  '03_004_egyszeru-husgomboc-leves.html',
  '03_005_tarkonyos-csirkeragu-leves.html',
  '03_006_karalabe-kremleves.html',
  '03_007_spargakremleves-zoldborsoval.html',
  '03_008_hideg-hozzaadott-cukortol-mentes-mentas-eperleves.html',
  '03_009_hideg-cukormentes-meggyleves.html',
  '03_010_kokusztejes-currys-karfiolkremleves.html',
  '03_011_gyomberes-sargarepa-kremleves.html',
  '03_012_paradicsomos-lencseleves.html',
  '03_013_tejszines-zoldborsoleves-basmati-rizzsel-es-csirkevel.html',
  '03_014_sutotokos-zoldsegkremleves.html',
  '03_015_fustolt-sajtos-gombakremleves.html',
  '03_016_tejszines-karalabe-leves-basmati-rizzsel.html',
  '03_017_bazsalikomos-sajtos-cukkini-kremleves.html',
  '04_001_gyros-fuszerezesu-csirkes-tortilla-tekercs-fuszeres-joghurtos-ontettel-zoldsegekkel.html',
  '04_002_zoldseg-tocsni-kapros-tzatzikivel.html',
  '04_003_grill-sajtos-wrap-hazi-joghurtos-ontettel.html',
  '04_004_babos-avokado-wrap-fustolt-tofuval.html',
  '04_005_voroslencse-tortilla-tojas-nelkul.html',
  '04_006_chia-magos-ricottas-kasa-meggyel.html',
  '04_007_spenotos-sajtos-pite-quiche.html',
  '04_008_fuszeres-narancsos-zabkasa-daralt-dioval-es-granatalmaval.html',
  '04_009_sutotokos-palacsinta-feherjedus-cukormentes.html',
  '04_010_afonyas-etcsokolades-kasa-tejmentes.html',
  '04_011_meggyes-vanilias-ejszakazos-kasa-tejmentes.html',
  '04_012_avokadokremes-szendvics-fustolt-lazaccal.html',
  '04_013_gombas-sajtos-rantottaval-toltott-tortilla-tekercs.html',
  '04_014_sonkas-sajtos-hajdinalepeny.html',
  '04_015_ceklas-tortilla-kecskesajttal.html',
  '04_016_avokadokremes-szendvics-tukortojassal.html',
  '04_017_kakaos-fahejas-kasa-kortevel.html',
  '04_018_almas-turos-palacsinta.html',
  '04_019_padlizsankrem-majonez-nelkul.html',
  '04_020_vadkovaszos-teljes-kiorlesu-kenyer.html',
  '04_021_edes-kapros-turos-palacsinta.html',
  '04_022_cseresznyes-makos-aztatott-kasa.html',
  '04_023_cukkinis-feta-sajtot-omlett.html',
  '04_024_zoldseges-sonkas-rantottaval-toltott-tortilla-tekercs.html',
  '04_025_zabpelyhes-tojaslepeny-fustolt-lazaccal-2.html',
  '04_026_shakshuka-csicseriborsoval.html',
  '04_027_humusszal-toltott-tojas.html',
  '04_028_kokuszos-zabkasa.html',
  '04_029_ricottas-afonyas-palacsinta.html',
  '04_030_medvehagymas-kapros-sos-muffinok.html',
  '04_031_avokadokremes-grill-sajtos-tortilla-melegszendvics.html',
  '04_032_almas-makos-kasa.html',
  '04_033_tonhalkremes-tojasos-tortilla-melegszendvics.html',
  '04_034_par-perces-sonkas-sajtos-tojaslepeny.html',
  '04_035_paprikas-sonkas-tojaskremmel-toltott-tortilla-lap.html',
  '04_036_sos-tonhalas-kukoricas-kasa.html',
  '04_037_avokados-toltott-tojas.html',
  '04_038_zoldseges-pite.html',
  '04_039_ricottas-narancsos-repas-kasa.html',
  '04_040_zoldseges-tejszines-zablepeny.html',
  '04_041_gombas-sonkas-tojaslepeny-gorgonzola-sajttal.html',
  '04_042_kapros-sajtkremmel-toltott-zabpalacsinta-fustolt-lazaccal.html',
  '04_043_tonhalas-sajtos-muffinok-2.html',
  '04_044_edes-bundaskenyer.html',
  '04_045_feher-babos-paradicsomos-tortilla-szendvics.html',
  '04_046_ricottas-kortes-kasa.html',
  '04_047_zablepeny-zakuszkaval-es-sonkaval-toltve.html',
  '04_048_hozzaadott-cukortol-mentes-kortes-granola.html',
  '04_049_tonhalkremes-wrap-savanyu-uborkaval.html',
  '04_050_grill-sajtos-kuszkusz-2.html',
  '04_051_grill-sajtos-kuszkusz.html',
  '04_052_olivabogyos-tojaskrem.html',
  '04_053_tonhalas-sajtos-muffinok.html',
  '04_054_fuszeres-tofuval-toltott-tortilla-tekercs.html',
  '04_055_sajtos-gofri.html',
  '04_056_csicseriborso-lepeny.html',
  '04_057_zoldseges-fritatta.html',
  '04_058_tojasos-tortilla-pite.html',
  '04_059_cukkinis-brazil-dios-zabkasa.html',
  '04_060_kokuszos-turokremmel-toltott-teherheto-zabpalacsinta.html',
  '04_061_zabpelyhes-sonkas-tojasmuffinok.html',
  '04_062_tonhalas-feta-sajtos-zabkasa.html',
  '04_063_sos-palacsinta-cottage-cheesel.html',
  '04_064_shakshuka-2.html',
  '04_065_tejbebulgur.html',
  '04_066_ricottas-aztatott-kasa-hazi-lekvarral.html',
  '04_067_csaszarmorzsa.html',
  '04_068_bundaskenyer.html',
  '04_069_tukortojas-spenotagyon-quinoaval.html',
  '05_001_grillezett-tofu-salata-kukoricaval-es-vorosbabbal.html',
  '05_002_tavaszias-poke-tal-poke-bowl.html',
  '05_003_kukoricas-repasalata-sajttal-es-almaval.html',
  '05_004_ananaszos-csirkes-salata-joghurtos-ontettel.html',
  '05_005_cezar-salata-ujragondolva.html',
  '05_006_csicseriborso-fasirt-fokhagyma-szosszal-salataval-2.html',
  '05_007_tojasos-tavaszi-bulgursalata.html',
  '05_008_fuszeres-sult-csicseriborsos-salata.html',
  '05_009_narancsos-bulgursalata-garnelaval.html',
  '05_010_sutotokos-lencses-salata-granatalmaval.html',
  '05_011_kukoricas-avokado-salata-halloumi-sajttal.html',
  '05_012_babsalata-fott-tojassal.html',
  '05_013_meleg-sult-gyokerzoldseg-salata.html',
  '05_014_csicseriborso-fasirt-fokhagyma-szosszal-salataval.html',
  '05_015_quinoa-salata-garnelarakkal.html',
  '05_016_piritott-fuszeres-tofu-salataval.html',
  '05_017_buddha-tal.html',
  '05_018_hideg-kuszkuszsalata.html',
  '05_019_fustolt-lazacos-quinoa-salata.html',
  '05_020_hideg-tonhalas-tesztasalata.html',
  '05_021_repasalata-feta-sajttal-es-ananasszal.html',
  '05_022_almas-repas-lencsesalata.html',
  '05_023_gorog-tesztasalata.html',
  '05_024_quinoa-salata-csirkemellel-feta-sajttal-es-mustaros-ontettel.html',
  '05_025_mangos-kuszkuszsalata-csirkevel-vagy-tofuval.html',
  '05_026_epres-tokmagos-salata-grill-sajttal.html',
  '05_027_bulgur-tabule-salata-vorosbabbal.html',
  '05_028_kolessalata-variaciok-tonhalas-vagy-feta-sajtos.html',
  '05_029_avokados-kuszkuszsalata-csicseriborsoval.html',
  '05_030_teli-karalabe-alma-salata.html',
  '05_031_teliesitett-tonhalsalata.html',
  '05_032_feta-sajtos-sult-cekla-salata.html',
  '05_033_sutotokos-salata.html',
  '05_034_vegan-mexikoi-babsalata.html',
  '05_035_kortes-feta-sajtos-quinoa-salata.html',
  '05_036_barackos-feta-sajtos-salata.html',
  '05_037_pesztos-csirkes-teszta-grill-zoldsegekkel.html',
  '05_038_sult-edesburgonya-salata-kecskesajttal.html',
  '05_039_tonhalas-kuszkuszsalata.html',
  '05_040_5-perces-lencsesalata.html',
  '05_041_csicseriborsos-quinoa-salata-feta-sajttal.html',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'kepek/kep_0.jpg',
  'kepek/kep_1.jpg',
  'kepek/kep_10.jpg',
  'kepek/kep_100.jpg',
  'kepek/kep_101.jpg',
  'kepek/kep_102.jpg',
  'kepek/kep_103.jpg',
  'kepek/kep_104.jpg',
  'kepek/kep_105.jpg',
  'kepek/kep_106.png',
  'kepek/kep_107.jpg',
  'kepek/kep_108.jpg',
  'kepek/kep_109.jpg',
  'kepek/kep_11.jpg',
  'kepek/kep_110.jpg',
  'kepek/kep_111.jpg',
  'kepek/kep_112.jpg',
  'kepek/kep_113.jpg',
  'kepek/kep_114.jpg',
  'kepek/kep_115.jpg',
  'kepek/kep_116.jpg',
  'kepek/kep_117.jpg',
  'kepek/kep_118.jpg',
  'kepek/kep_119.jpg',
  'kepek/kep_12.jpg',
  'kepek/kep_120.jpg',
  'kepek/kep_121.jpg',
  'kepek/kep_122.jpg',
  'kepek/kep_123.jpg',
  'kepek/kep_124.jpg',
  'kepek/kep_125.jpg',
  'kepek/kep_126.jpg',
  'kepek/kep_127.jpeg',
  'kepek/kep_128.jpg',
  'kepek/kep_129.jpg',
  'kepek/kep_13.jpg',
  'kepek/kep_130.jpg',
  'kepek/kep_131.jpg',
  'kepek/kep_132.jpg',
  'kepek/kep_133.jpg',
  'kepek/kep_134.jpg',
  'kepek/kep_135.jpg',
  'kepek/kep_136.jpg',
  'kepek/kep_137.jpg',
  'kepek/kep_138.jpg',
  'kepek/kep_139.jpg',
  'kepek/kep_14.jpg',
  'kepek/kep_140.jpg',
  'kepek/kep_141.jpg',
  'kepek/kep_142.jpg',
  'kepek/kep_143.jpg',
  'kepek/kep_144.jpg',
  'kepek/kep_145.jpg',
  'kepek/kep_146.jpg',
  'kepek/kep_147.jpg',
  'kepek/kep_148.jpg',
  'kepek/kep_149.jpg',
  'kepek/kep_15.jpg',
  'kepek/kep_150.jpg',
  'kepek/kep_151.jpg',
  'kepek/kep_152.jpg',
  'kepek/kep_153.jpg',
  'kepek/kep_154.jpg',
  'kepek/kep_155.jpg',
  'kepek/kep_156.jpg',
  'kepek/kep_157.jpg',
  'kepek/kep_158.jpg',
  'kepek/kep_159.jpg',
  'kepek/kep_16.jpg',
  'kepek/kep_160.jpg',
  'kepek/kep_161.jpg',
  'kepek/kep_162.jpg',
  'kepek/kep_163.jpg',
  'kepek/kep_164.jpg',
  'kepek/kep_165.jpg',
  'kepek/kep_166.jpg',
  'kepek/kep_167.jpg',
  'kepek/kep_168.jpg',
  'kepek/kep_169.jpg',
  'kepek/kep_17.jpg',
  'kepek/kep_170.jpg',
  'kepek/kep_171.jpg',
  'kepek/kep_172.jpg',
  'kepek/kep_173.jpg',
  'kepek/kep_174.jpg',
  'kepek/kep_175.jpg',
  'kepek/kep_176.jpg',
  'kepek/kep_177.jpg',
  'kepek/kep_178.jpg',
  'kepek/kep_179.jpg',
  'kepek/kep_18.jpg',
  'kepek/kep_180.jpg',
  'kepek/kep_181.jpg',
  'kepek/kep_182.jpg',
  'kepek/kep_183.jpg',
  'kepek/kep_184.jpg',
  'kepek/kep_185.jpg',
  'kepek/kep_186.jpg',
  'kepek/kep_187.jpg',
  'kepek/kep_188.jpg',
  'kepek/kep_189.jpg',
  'kepek/kep_19.jpg',
  'kepek/kep_190.jpg',
  'kepek/kep_191.jpg',
  'kepek/kep_192.jpg',
  'kepek/kep_193.jpg',
  'kepek/kep_194.jpg',
  'kepek/kep_195.jpg',
  'kepek/kep_196.jpg',
  'kepek/kep_197.jpg',
  'kepek/kep_198.jpg',
  'kepek/kep_199.jpg',
  'kepek/kep_2.jpg',
  'kepek/kep_20.jpg',
  'kepek/kep_200.jpg',
  'kepek/kep_201.jpg',
  'kepek/kep_202.jpg',
  'kepek/kep_203.jpg',
  'kepek/kep_204.jpg',
  'kepek/kep_205.jpg',
  'kepek/kep_206.jpg',
  'kepek/kep_207.jpg',
  'kepek/kep_208.jpg',
  'kepek/kep_209.jpg',
  'kepek/kep_21.jpg',
  'kepek/kep_210.jpg',
  'kepek/kep_211.jpg',
  'kepek/kep_212.jpg',
  'kepek/kep_213.jpg',
  'kepek/kep_214.jpg',
  'kepek/kep_215.jpg',
  'kepek/kep_216.jpg',
  'kepek/kep_217.jpg',
  'kepek/kep_218.jpg',
  'kepek/kep_219.jpg',
  'kepek/kep_22.jpg',
  'kepek/kep_220.jpg',
  'kepek/kep_221.jpg',
  'kepek/kep_222.jpg',
  'kepek/kep_223.jpg',
  'kepek/kep_224.jpg',
  'kepek/kep_225.jpg',
  'kepek/kep_226.jpg',
  'kepek/kep_227.jpg',
  'kepek/kep_228.jpg',
  'kepek/kep_229.jpg',
  'kepek/kep_23.jpg',
  'kepek/kep_230.jpg',
  'kepek/kep_231.jpeg',
  'kepek/kep_232.jpg',
  'kepek/kep_233.jpg',
  'kepek/kep_234.jpg',
  'kepek/kep_235.jpg',
  'kepek/kep_236.jpg',
  'kepek/kep_237.jpg',
  'kepek/kep_238.jpg',
  'kepek/kep_239.jpg',
  'kepek/kep_24.jpg',
  'kepek/kep_240.jpg',
  'kepek/kep_241.jpg',
  'kepek/kep_242.jpg',
  'kepek/kep_243.jpg',
  'kepek/kep_244.jpg',
  'kepek/kep_245.jpg',
  'kepek/kep_246.jpg',
  'kepek/kep_247.png',
  'kepek/kep_248.jpg',
  'kepek/kep_249.jpg',
  'kepek/kep_25.jpg',
  'kepek/kep_250.jpg',
  'kepek/kep_251.jpg',
  'kepek/kep_252.jpg',
  'kepek/kep_253.jpg',
  'kepek/kep_254.jpg',
  'kepek/kep_255.jpg',
  'kepek/kep_256.jpg',
  'kepek/kep_257.jpg',
  'kepek/kep_258.jpg',
  'kepek/kep_259.jpg',
  'kepek/kep_26.jpg',
  'kepek/kep_260.jpg',
  'kepek/kep_261.jpg',
  'kepek/kep_262.jpg',
  'kepek/kep_263.jpg',
  'kepek/kep_264.jpg',
  'kepek/kep_265.jpeg',
  'kepek/kep_266.jpg',
  'kepek/kep_267.jpg',
  'kepek/kep_268.jpg',
  'kepek/kep_269.jpeg',
  'kepek/kep_27.jpg',
  'kepek/kep_270.jpg',
  'kepek/kep_271.jpg',
  'kepek/kep_272.jpg',
  'kepek/kep_273.jpg',
  'kepek/kep_274.jpg',
  'kepek/kep_275.jpg',
  'kepek/kep_276.jpg',
  'kepek/kep_277.jpg',
  'kepek/kep_278.jpg',
  'kepek/kep_279.jpg',
  'kepek/kep_28.jpg',
  'kepek/kep_280.jpeg',
  'kepek/kep_281.jpg',
  'kepek/kep_282.jpg',
  'kepek/kep_283.jpg',
  'kepek/kep_284.jpg',
  'kepek/kep_285.jpg',
  'kepek/kep_286.jpg',
  'kepek/kep_287.jpg',
  'kepek/kep_288.jpg',
  'kepek/kep_289.jpg',
  'kepek/kep_29.jpg',
  'kepek/kep_290.jpg',
  'kepek/kep_291.jpg',
  'kepek/kep_292.jpg',
  'kepek/kep_293.jpg',
  'kepek/kep_294.jpg',
  'kepek/kep_295.jpg',
  'kepek/kep_296.jpg',
  'kepek/kep_297.jpg',
  'kepek/kep_298.jpg',
  'kepek/kep_299.jpg',
  'kepek/kep_3.jpg',
  'kepek/kep_30.jpg',
  'kepek/kep_300.jpg',
  'kepek/kep_301.png',
  'kepek/kep_302.jpg',
  'kepek/kep_303.jpg',
  'kepek/kep_304.jpg',
  'kepek/kep_305.jpg',
  'kepek/kep_306.jpg',
  'kepek/kep_307.jpg',
  'kepek/kep_308.jpg',
  'kepek/kep_309.jpg',
  'kepek/kep_31.jpg',
  'kepek/kep_310.jpg',
  'kepek/kep_311.jpg',
  'kepek/kep_312.jpg',
  'kepek/kep_313.jpg',
  'kepek/kep_314.jpg',
  'kepek/kep_315.jpg',
  'kepek/kep_316.jpg',
  'kepek/kep_317.jpg',
  'kepek/kep_318.jpg',
  'kepek/kep_319.jpg',
  'kepek/kep_32.jpg',
  'kepek/kep_320.jpg',
  'kepek/kep_321.jpg',
  'kepek/kep_322.jpg',
  'kepek/kep_323.jpg',
  'kepek/kep_324.jpg',
  'kepek/kep_325.jpg',
  'kepek/kep_326.jpg',
  'kepek/kep_327.jpg',
  'kepek/kep_328.jpg',
  'kepek/kep_329.jpg',
  'kepek/kep_33.jpg',
  'kepek/kep_330.jpg',
  'kepek/kep_331.jpg',
  'kepek/kep_332.jpg',
  'kepek/kep_333.jpg',
  'kepek/kep_334.jpg',
  'kepek/kep_335.jpg',
  'kepek/kep_336.jpg',
  'kepek/kep_337.jpg',
  'kepek/kep_338.jpg',
  'kepek/kep_339.jpg',
  'kepek/kep_34.jpg',
  'kepek/kep_340.jpg',
  'kepek/kep_341.jpg',
  'kepek/kep_342.jpg',
  'kepek/kep_343.jpg',
  'kepek/kep_344.jpg',
  'kepek/kep_345.jpg',
  'kepek/kep_346.jpg',
  'kepek/kep_347.jpg',
  'kepek/kep_348.jpg',
  'kepek/kep_349.jpg',
  'kepek/kep_35.jpg',
  'kepek/kep_350.jpg',
  'kepek/kep_351.jpg',
  'kepek/kep_352.jpg',
  'kepek/kep_353.jpg',
  'kepek/kep_354.jpg',
  'kepek/kep_355.jpg',
  'kepek/kep_356.jpg',
  'kepek/kep_357.jpg',
  'kepek/kep_358.jpg',
  'kepek/kep_359.jpg',
  'kepek/kep_36.jpg',
  'kepek/kep_360.jpg',
  'kepek/kep_361.jpg',
  'kepek/kep_362.jpg',
  'kepek/kep_363.jpg',
  'kepek/kep_364.jpg',
  'kepek/kep_365.jpg',
  'kepek/kep_366.jpg',
  'kepek/kep_367.jpg',
  'kepek/kep_368.jpg',
  'kepek/kep_369.jpg',
  'kepek/kep_37.jpg',
  'kepek/kep_370.jpg',
  'kepek/kep_38.jpg',
  'kepek/kep_39.jpg',
  'kepek/kep_4.jpg',
  'kepek/kep_40.jpg',
  'kepek/kep_41.jpg',
  'kepek/kep_42.jpg',
  'kepek/kep_43.jpg',
  'kepek/kep_44.jpg',
  'kepek/kep_45.jpg',
  'kepek/kep_46.jpg',
  'kepek/kep_47.jpg',
  'kepek/kep_48.jpg',
  'kepek/kep_49.jpg',
  'kepek/kep_5.jpg',
  'kepek/kep_50.jpg',
  'kepek/kep_51.jpg',
  'kepek/kep_52.jpg',
  'kepek/kep_53.jpg',
  'kepek/kep_54.jpg',
  'kepek/kep_55.jpg',
  'kepek/kep_56.jpg',
  'kepek/kep_57.jpg',
  'kepek/kep_58.jpg',
  'kepek/kep_59.jpg',
  'kepek/kep_6.jpg',
  'kepek/kep_60.jpg',
  'kepek/kep_61.jpg',
  'kepek/kep_62.jpg',
  'kepek/kep_63.jpg',
  'kepek/kep_64.jpg',
  'kepek/kep_65.jpg',
  'kepek/kep_66.jpg',
  'kepek/kep_67.jpg',
  'kepek/kep_68.jpg',
  'kepek/kep_69.jpg',
  'kepek/kep_7.png',
  'kepek/kep_70.jpg',
  'kepek/kep_71.jpg',
  'kepek/kep_72.jpg',
  'kepek/kep_73.jpg',
  'kepek/kep_74.jpg',
  'kepek/kep_75.jpg',
  'kepek/kep_76.jpg',
  'kepek/kep_77.jpg',
  'kepek/kep_78.jpg',
  'kepek/kep_79.jpg',
  'kepek/kep_8.jpg',
  'kepek/kep_80.png',
  'kepek/kep_81.jpg',
  'kepek/kep_82.jpg',
  'kepek/kep_83.jpg',
  'kepek/kep_84.jpg',
  'kepek/kep_85.jpg',
  'kepek/kep_86.jpg',
  'kepek/kep_87.jpg',
  'kepek/kep_88.jpg',
  'kepek/kep_89.jpg',
  'kepek/kep_9.jpg',
  'kepek/kep_90.jpg',
  'kepek/kep_91.jpg',
  'kepek/kep_92.jpg',
  'kepek/kep_93.jpg',
  'kepek/kep_94.jpg',
  'kepek/kep_95.jpg',
  'kepek/kep_96.jpg',
  'kepek/kep_97.jpg',
  'kepek/kep_98.jpg',
  'kepek/kep_99.jpg'
];

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Telepítés');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Fájlok cache-elése');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Aktiválás');
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Régi cache törlése', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] Kérés:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
