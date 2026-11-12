/* =====================================================================
   قسم القواعد  A1.1 → B1   (Grammatik)
   كل موضوع: lvl (المستوى) · ar/de (العنوان) · rule (الشرح) · ex (الأمثلة)
   rule: ['p', نص] | ['f', صيغة] | ['n', ملاحظة] | ['t', [رؤوس], [[صف],[صف]]]
   {{German}} = كلمة ألمانية داخل الشرح · <b>..</b> = غامق
   ex: [الجملة الألمانية, الترجمة] ومكان **هيك** = الجزء المهم بالقاعدة
   ===================================================================== */
const GRAMMAR = [

/* ---------------------------- A1.1 ---------------------------- */
{id:'g-praesens', lvl:'A1.1', ar:'ضمائر الشخص + تصريف الفعل بالمضارع', de:'Personalpronomen & Präsens',
 rule:[
  ['p','الفعل الألماني = <b>الجذر (Stamm)</b> + <b>نهاية</b> بتتغيّر حسب الضمير. منشيل {{-en}} من المصدر ومنزيد النهاية: {{machen → mach-}}.'],
  ['t',['الضمير','النهاية','مثال (machen)'],[['ich','-e','ich mache'],['du','-st','du machst'],['er / sie / es','-t','er macht'],['wir','-en','wir machen'],['ihr','-t','ihr macht'],['sie / Sie','-en','sie machen · Sie machen']]],
  ['n','إذا انتهى الجذر بـ -t أو -d منزيد e: {{du arbeitest · er arbeitet}}. وبعض الأفعال بتغيّر حرف العلة مع du و er: {{fahren → du fährst}} · {{sprechen → du sprichst}} · {{lesen → du liest}}.']
 ],
 ex:[
  ['Ich **wohne** in Stuttgart.','أنا ساكن بشتوتغارت.'],
  ['Du **lächelst** immer.','إنت دايماً بتبتسم.'],
  ['Ihr **weigert** euch, die Wahrheit zu sagen.','إنتو بترفضوا تقولوا الحقيقة.'],
  ['Er **arbeitet** im IT-Bereich.','هو بيشتغل بمجال الـIT.'],
  ['Du **sprichst** sehr gut Deutsch.','إنت بتحكي ألماني منيح كتير.'],
  ['Er **liest** gern Bücher.','هو بيحب يقرا كتب.']
 ]},

{id:'g-seinhaben', lvl:'A1.1', ar:'الفعلان sein و haben', de:'sein & haben',
 rule:[
  ['p','أهم فعلين بالألماني وكتير غير منتظمين، لازم تحفظهم:'],
  ['t',['الضمير','sein (يكون)','haben (يملك)'],[['ich','bin','habe'],['du','bist','hast'],['er / sie / es','ist','hat'],['wir','sind','haben'],['ihr','seid','habt'],['sie / Sie','sind','haben']]],
  ['n','للعمر والجنسية والمهنة منستخدم {{sein}}: {{Ich bin 23 Jahre alt.}} — وللجوع والعطش والخوف منستخدم {{haben}}: {{Ich habe Hunger.}}']
 ],
 ex:[
  ['Ich **bin** 23 Jahre alt.','عمري ٢٣ سنة.'],
  ['Ich **habe** zwei Jahre Berufserfahrung.','عندي سنتين خبرة بالشغل.'],
  ['Ich **habe** Hunger.','أنا جوعان.'],
  ['**Bist** du verheiratet?','إنت متزوج؟'],
  ['Wir **haben** kein Salz mehr.','ما عاد عنّا ملح.'],
  ['Er **ist** schon seit Montag krank.','هو مريض من يوم الإثنين.']
 ]},

{id:'g-satz', lvl:'A1.1', ar:'ترتيب الجملة: الخبر والأسئلة', de:'Satzstellung: Aussage, W-Frage, Ja/Nein-Frage',
 rule:[
  ['p','بالجملة الخبرية الفعل المصرّف <b>دايماً بالمركز التاني</b>، حتى لو بلّشت بالزمان أو المكان — وقتها الفاعل بيجي بعد الفعل (قلب: Inversion).'],
  ['t',['نوع الجملة','الترتيب','مثال'],[['جملة خبرية','فاعل + <b>فعل</b> + …','Ich wohne in Stuttgart.'],['خبرية بلّشت بالوقت','وقت + <b>فعل</b> + فاعل','Morgen gehe ich zur Arbeit.'],['سؤال بكلمة استفهام','W-Wort + <b>فعل</b> + فاعل','Woher kommen Sie?'],['سؤال نعم/لا','<b>فعل</b> + فاعل + …','Bist du verheiratet?']]],
  ['n','كلمات الاستفهام: {{wer · was · wo · wohin · woher · wann · warum · wie · welche-}}.']
 ],
 ex:[
  ['Ich **wohne** in Stuttgart.','أنا ساكن بشتوتغارت.'],
  ['**Woher kommen** Sie?','من وين حضرتك؟'],
  ['**Bist** du verheiratet?','إنت متزوج؟'],
  ['Morgen früh **gehe** ich zur Arbeit.','بكرا الصبح بروح عالشغل.'],
  ['Heute **bin** ich früh aufgewacht.','اليوم فقت بكّير.'],
  ['**Wann kommst** du zurück?','إيمتى بترجع؟']
 ]},

{id:'g-artikel', lvl:'A1.1', ar:'أدوات التعريف والتنكير والجمع', de:'Artikel (der / die / das) & Plural',
 rule:[
  ['p','كل اسم ألماني إله <b>جنس (Genus)</b>: مذكر {{der}} · مؤنث {{die}} · محايد {{das}}. والجمع دايماً {{die}}. وللنكرة: {{ein}} (مذكر/محايد) و{{eine}} (مؤنث)، وما في نكرة بالجمع.'],
  ['t',['الجنس','معرّف','نكرة','مثال'],[['مذكر','der','ein','der Zug – ein Zug'],['مؤنث','die','eine','die Wohnung – eine Wohnung'],['محايد','das','ein','das Krankenhaus – ein Krankenhaus'],['جمع','die','—','die Patienten']]],
  ['n','احفظ الاسم مع أداته دايماً ({{der Arzt}} مش بس {{Arzt}}). والجمع إله أشكال: {{-e (Tage) · -en (Frauen) · -er (Kinder) · -s (Autos) · ¨ (Hände) · بلا تغيير (Zimmer)}}.']
 ],
 ex:[
  ['**Der** Zug fährt pünktlich ab.','القطار بيطلع بالوقت.'],
  ['**Das** BMW-Werk in München ist sehr modern.','معمل BMW بميونخ حديث كتير.'],
  ['**Der** Junge spielt gerne Fußball im Park.','الصبي بيحب يلعب كورة بالحديقة.'],
  ['Darf ich **eine** Frage stellen?','فيني اسأل سؤال؟'],
  ['Wir wohnen in **einem** alten Haus.','منسكن ببيت قديم.']
 ]},

{id:'g-akk', lvl:'A1.1', ar:'الحالة المنصوبة (Akkusativ)', de:'Akkusativ: wen? was?',
 rule:[
  ['p','الـAkkusativ هو المفعول به المباشر (بنسأل: <b>wen? was?</b>). التغيير الوحيد بالأدوات هو <b>بالمذكر</b>: {{der → den}} · {{ein → einen}} · {{kein → keinen}}. المؤنث والمحايد والجمع ما بيتغيّروا.'],
  ['t',['','مذكر','مؤنث','محايد','جمع'],[['Nominativ','der / ein','die / eine','das / ein','die'],['Akkusativ','<b>den / einen</b>','die / eine','das / ein','die']]],
  ['n','نفس التغيير بالضمائر المِلكية والنفي: {{mein → meinen}} · {{kein → keinen}}. وأفعال بتجيب Akkusativ دايماً: {{haben · brauchen · kaufen · nehmen · suchen · machen · sehen}}.']
 ],
 ex:[
  ['Ich habe **meinen** Schlüssel zu Hause vergessen.','نسيت مفتاحي بالبيت.'],
  ['Wir suchen **den** alten Schlüssel.','عم ندوّر عالمفتاح القديم.'],
  ['Der Arzt untersucht **den** Patienten.','الدكتور عم يفحص المريض.'],
  ['Ich trinke jeden Morgen **einen** starken Kaffee.','بشرب كل صبح قهوة قوية.'],
  ['Red **keinen** Quatsch!','لا تحكي هبل!']
 ]},

{id:'g-negation', lvl:'A1.1', ar:'النفي: nicht و kein', de:'Negation: nicht vs. kein',
 rule:[
  ['p','<b>kein-</b> بننفي فيه الاسم يلي معه أداة نكرة أو بلا أداة ({{ein Buch → kein Buch}} · {{Zeit → keine Zeit}}) وبيتصرّف متل {{ein}}.'],
  ['p','<b>nicht</b> بننفي فيه الفعل أو الصفة أو الاسم المعرّف.'],
  ['t',['','الإيجاب','النفي'],[['اسم نكرة','Ich habe Lust.','Ich habe <b>keine</b> Lust.'],['فعل','Ich verstehe das.','Ich verstehe das <b>nicht</b>.'],['صفة','Die Prüfung ist leicht.','Die Prüfung ist <b>nicht</b> leicht.'],['اسم معرّف','Ich kenne den Arzt.','Ich kenne den Arzt <b>nicht</b>.']]]
 ],
 ex:[
  ['Ich habe **keine** Lust mehr zu laufen.','ما عاد عندي نفس أمشي.'],
  ['Wir haben **kein** Salz mehr.','ما عاد عنّا ملح.'],
  ['Ich weiß es leider **nicht**!','للأسف ما بعرف!'],
  ['Misch dich **nicht** ein.','لا تتدخّل.'],
  ['Das Getränk enthält **keinen** Alkohol.','المشروب ما فيه كحول.']
 ]},

{id:'g-possessiv', lvl:'A1.1', ar:'أدوات الملكية (mein, dein ...)', de:'Possessivartikel',
 rule:[
  ['t',['الضمير','الأداة','مثال'],[['ich','mein','mein Name'],['du','dein','dein Handy'],['er / es','sein','sein Auto'],['sie','ihr','ihre Tasche'],['wir','unser','unser Zimmer'],['ihr','euer','eure Zimmer'],['sie (جمع)','ihr','ihr Chef'],['Sie','Ihr','Ihre Papiere']]],
  ['p','بتتصرّف متل {{ein / kein}}: للمؤنث والجمع بنزيد <b>-e</b> ({{meine}})، وللمذكر بالـAkkusativ <b>-en</b> ({{meinen}})، وبالـDativ {{meinem / meiner}}.']
 ],
 ex:[
  ['**Mein** Name ist Adham Mahfoud.','اسمي أدهم محفوظ.'],
  ['**Meine** Verwandten besuchen mich am Wochenende.','أقاربي بيزوروني بالويكند.'],
  ['Meine Eltern lieben **ihre** neue Schwiegertochter sehr.','أهلي بيحبوا كنّتهم الجديدة كتير.'],
  ['Zeig mir **dein** neues Handy!','فرجيني موبايلك الجديد!'],
  ['Kümmer dich um **deine** eigenen Sachen.','انتبه لأغراضك إنت.'],
  ['Räumen Sie endlich **Ihr** Zimmer auf!','رتّبوا غرفتكم أخيراً! (رسمي)']
 ]},

{id:'g-modal', lvl:'A1.1', ar:'الأفعال المساعدة (Modalverben)', de:'Modalverben: können, müssen, wollen, dürfen, sollen, möchten',
 rule:[
  ['t',['الفعل','ich / er','du','wir / sie / Sie','المعنى'],[['können','kann','kannst','können','يقدر'],['müssen','muss','musst','müssen','لازم'],['wollen','will','willst','wollen','بدّو'],['dürfen','darf','darfst','dürfen','مسموح له'],['sollen','soll','sollst','sollen','المفروض'],['möchten','möchte','möchtest','möchten','بدّي (بأدب)']]],
  ['p','الفعل المساعد بالمركز التاني، والفعل الأساسي <b>مصدر (Infinitiv) بآخر الجملة</b> — منسميها Satzklammer.'],
  ['f','Ich muss mein Zimmer aufräumen.']
 ],
 ex:[
  ['**Kannst** du mir ein Glas Wasser **geben**?','فيك تعطيني كاسة ميّ؟'],
  ['Ich **muss** noch mein Zimmer **aufräumen**.','لسا لازم رتّب غرفتي.'],
  ['Ich **möchte** fernsehen.','بدي أتفرج عالتلفزيون.'],
  ['**Willst** du nicht endlich **aufstehen**?','ما بدك تقوم أخيراً؟'],
  ['Du **darfst** die Medikamente auf keinen Fall **vergessen**!','ممنوع تنسى الأدوية بأي حال!'],
  ['Man **sollte** für dieses Rezept nur frische Zutaten **verwenden**.','المفروض نستعمل مكونات طازجة بس لهالوصفة.']
 ]},

{id:'g-trennbar', lvl:'A1.1', ar:'الأفعال المنفصلة (trennbare Verben)', de:'Trennbare Verben',
 rule:[
  ['p','بعض الأفعال = <b>بادئة + فعل</b> ({{auf-stehen · an-rufen · ab-fahren · ein-schalten · mit-nehmen}}). بالجملة الخبرية الفعل بيروح عالمركز التاني والبادئة <b>بتروح لآخر الجملة</b>.'],
  ['f','aufstehen → Ich stehe um 6 Uhr auf.'],
  ['n','مع الفعل المساعد وبالـNebensatz بتضل مع بعض: {{Ich muss früh aufstehen.}} · {{..., weil ich früh aufstehe.}} — والبادئات {{be- · ver- · ent- · er- · zer-}} ما بتنفصل أبداً.']
 ],
 ex:[
  ['Ich **stehe** jeden Tag um 6 Uhr **auf**.','بقوم كل يوم الساعة ٦.'],
  ['Ich **rufe** dich heute Abend **an**.','رح اتصل فيك هالمسا.'],
  ['Der Zug **fährt** pünktlich **ab**.','القطار بيطلع بالوقت.'],
  ['Ich **schalte** den Fernseher **ein**.','عم شغّل التلفزيون.'],
  ['**Mach** das Fenster **zu**!','سكّر الشباك!']
 ]},

{id:'g-imperativ', lvl:'A1.1', ar:'صيغة الأمر (Imperativ)', de:'Imperativ: du / ihr / Sie',
 rule:[
  ['p','بالأمر بنحذف الضمير: <b>du</b> ← جذر الفعل (بلا -st) · <b>ihr</b> ← جذر + t · <b>Sie</b> ← المصدر + Sie.'],
  ['t',['الفعل','du','ihr','Sie'],[['kommen','Komm!','Kommt!','Kommen Sie!'],['fahren','Fahr!','Fahrt!','Fahren Sie!'],['geben','Gib!','Gebt!','Geben Sie!'],['lesen','Lies!','Lest!','Lesen Sie!'],['sein','Sei!','Seid!','Seien Sie!'],['aufstehen','Steh auf!','Steht auf!','Stehen Sie auf!'],['sich beeilen','Beeil dich!','Beeilt euch!','Beeilen Sie sich!']]],
  ['n','الأفعال يلي بتغيّر e ← i (geben · nehmen · lesen · sprechen) بتغيّرها مع du: {{Gib! · Nimm! · Lies! · Sprich!}}. وبالموقع 3 أقسام كاملة لصيغة الأمر (du / ihr / Sie) بآخر القائمة.']
 ],
 ex:[
  ['**Komm** schnell her!','تعال بسرعة! (du)'],
  ['**Kommt** schnell her!','تعالوا بسرعة! (ihr)'],
  ['**Kommen Sie** schnell her!','تفضّل/تفضّلوا تعالوا بسرعة! (Sie)'],
  ['**Gib** mir bitte das Salz!','عطيني الملح لو سمحت!'],
  ['**Lies** diesen Text laut vor!','اقرا هالنص بصوت عالي!'],
  ['**Sei** bitte ruhig!','كن هادي لو سمحت!']
 ]},

{id:'g-zeit', lvl:'A1.1', ar:'حروف الجر للزمن: um · am · im · von…bis · seit', de:'Zeitangaben',
 rule:[
  ['t',['الحرف','الاستعمال','مثال'],[['um','الساعة','um 10 Uhr'],['am','يوم / تاريخ / جزء من اليوم','am Montag · am Wochenende · am Abend'],['im','شهر / فصل','im Juli · im Sommer'],['von … bis','من … إلى','von 10 bis 18 Uhr'],['seit (+ Dativ)','منذ (لسا مستمر)','seit Montag'],['vor (+ Dativ)','قبل (بالماضي)','vor einer Stunde'],['in (+ Dativ)','بعد (بالمستقبل)','in einer Minute']]]
 ],
 ex:[
  ['**Um** 10 Uhr beginne ich zu arbeiten.','الساعة ١٠ بلّش شغل.'],
  ['**Am** Wochenende gehe ich meistens ins Fitnessstudio.','بالويكند غالباً بروح عالجيم.'],
  ['**Im** Sommer schwimmen wir oft im See.','بالصيف منسبح كتير بالبحيرة.'],
  ['Mein Urlaub dauert **vom** 10. **bis zum** 15. Juli.','عطلتي من ١٠ لـ ١٥ تموز.'],
  ['**Seit** Montag regnet es fast ununterbrochen.','من يوم الإثنين عم تمطر تقريباً بلا توقف.'],
  ['Ich bin **in** einer Minute fertig.','بخلّص بعد دقيقة.'],
  ['Der Blutdruck wurde **vor** einer Stunde gemessen.','الضغط انقاس من ساعة.']
 ]},

/* ---------------------------- A1.2 ---------------------------- */
{id:'g-perfekt-haben', lvl:'A1.2', ar:'الماضي المركّب Perfekt مع haben', de:'Perfekt mit haben',
 rule:[
  ['p','بالحكي اليومي منستخدم Perfekt للماضي: <b>haben (مصرّف، مركز 2) + Partizip II (آخر الجملة)</b>.'],
  ['f','Ich habe zwei Monate in Berlin gewohnt.'],
  ['t',['النوع','القاعدة','مثال'],[['منتظم','ge- + جذر + -t','machen → gemacht · wohnen → gewohnt'],['غير منتظم','ge- + (جذر) + -en','schlafen → geschlafen · essen → gegessen · sehen → gesehen'],['منفصل','ge- بالنص','einkaufen → eingekauft · aufräumen → aufgeräumt'],['بدون ge','be- ver- ent- er- · -ieren','vergessen → vergessen · bekommen → bekommen · telefonieren → telefoniert']]]
 ],
 ex:[
  ['Ich **habe** zwei Monate lang in Berlin **gewohnt**.','سكنت شهرين ببرلين.'],
  ['Ich **habe** am Strand Muscheln **gesammelt**.','جمعت أصداف عالشاطئ.'],
  ['Ich **habe** die Hausaufgabe nicht **geschafft**.','ما قدرت أخلّص الوظيفة.'],
  ['Letzte Nacht **habe** ich spät **geschlafen**.','البارحة نمت متأخر.'],
  ['Ich **habe** meinen Schlüssel zu Hause **vergessen**.','نسيت مفتاحي بالبيت.'],
  ['Als Nächstes **haben** wir ein EKG **gemacht**.','بعدين سوّينا تخطيط قلب.']
 ]},

{id:'g-perfekt-sein', lvl:'A1.2', ar:'الماضي المركّب Perfekt مع sein', de:'Perfekt mit sein',
 rule:[
  ['p','منستخدم <b>sein</b> مع أفعال <b>الحركة</b> ({{gehen · fahren · kommen · fliegen}}) وأفعال <b>تغيّر الحالة</b> ({{aufstehen · einschlafen · werden}}) ومع {{sein}} و{{bleiben}} نفسهم.'],
  ['t',['المصدر','Partizip II'],[['gehen','gegangen'],['fahren','gefahren'],['kommen','gekommen'],['fliegen','geflogen'],['aufstehen','aufgestanden'],['umziehen','umgezogen'],['bleiben','geblieben'],['sein','gewesen']]],
  ['n','الأفعال غير المنتظمة غالباً بتنتهي بـ -en، والمنفصلة بتحط ge بالنص ({{aufgestanden}}).']
 ],
 ex:[
  ['Letzten Monat **bin** ich nach Berlin **gefahren**.','الشهر الماضي سافرت لبرلين.'],
  ['Heute Morgen **bin** ich früh **aufgestanden**.','اليوم الصبح قمت بكّير.'],
  ['Warum **sind** Sie nach Deutschland **gekommen**?','ليش إجيتوا على ألمانيا؟'],
  ['Der Bus **ist** leider schon **abgefahren**.','للأسف الباص راح.'],
  ['Ich **bin** letztes Jahr nach Dresden **umgezogen**.','انتقلت السنة الماضية لدريسدن.'],
  ['Letztes Wochenende **bin** ich mit meinen Freunden ins Kino **gegangen**.','الويكند الماضي رحت مع أصحابي عالسينما.']
 ]},

{id:'g-dativ', lvl:'A1.2', ar:'الحالة المجرورة (Dativ): الأدوات والضمائر والأفعال', de:'Dativ: wem?',
 rule:[
  ['p','الـDativ بيجاوب على <b>wem?</b> (لمين؟) وهو المفعول به غير المباشر. بيغيّر الأدوات بكل الأجناس، وبالجمع بنزيد <b>-n</b> للاسم ({{den Kindern}}).'],
  ['t',['','مذكر','مؤنث','محايد','جمع'],[['Nominativ','der / ein / mein','die / eine / meine','das / ein / mein','die / meine'],['Dativ','<b>dem / einem / meinem</b>','<b>der / einer / meiner</b>','<b>dem / einem / meinem</b>','<b>den</b> / meinen + n']]],
  ['t',['ich','du','er','sie','es','wir','ihr','sie / Sie'],[['mir','dir','ihm','ihr','ihm','uns','euch','ihnen / Ihnen']]],
  ['n','أفعال بتاخد Dativ دايماً: {{helfen · gefallen · gehören · schmecken · danken · antworten · passen · fehlen · gratulieren}}.']
 ],
 ex:[
  ['Ein guter Freund **hilft dir** immer.','الصديق الطيب بيساعدك دايماً.'],
  ['Die Suppe **schmeckt mir** heute sehr gut.','الشوربة اليوم طعمها حلو كتير عندي.'],
  ['**Helfen Sie mir** bitte bei dieser Aufgabe!','ساعدوني لو سمحتوا بهالمهمة!'],
  ['Wir gratulieren **Ihnen** herzlich zu Ihrem neuen Job als Krankenpfleger.','منهنّيكم من القلب بوظيفتكم الجديدة كممرّض.'],
  ['Sie hat **mir** einen Witz erzählt.','حكتلي نكتة.'],
  ['Antworte **mir** sofort!','جاوبني حالاً!']
 ]},

{id:'g-dativ-prep', lvl:'A1.2', ar:'حروف الجر يلي بتاخد Dativ دايماً', de:'Präpositionen mit Dativ: aus · bei · mit · nach · seit · von · zu',
 rule:[
  ['p','هالحروف دايماً مع Dativ. احفظها كسلسلة: <b>aus – bei – mit – nach – seit – von – zu</b> (وكمان {{außer · gegenüber}}).'],
  ['t',['الحرف','المعنى','مثال'],[['aus','من (داخل / أصل)','aus der Wohnung · aus Syrien'],['bei','عند','beim Zahnarzt · bei Paul'],['mit','مع / بواسطة','mit dem Zug · mit dem neuen Arzt'],['nach','بعد / إلى (مدن)','nach dem Essen · nach Berlin'],['seit','منذ','seit zwei Jahren'],['von','من / عن','von meinem Auto'],['zu','إلى (أشخاص / أماكن)','zum Arzt · zur Arbeit']]],
  ['n','اختصارات: {{zu dem → zum}} · {{zu der → zur}} · {{bei dem → beim}} · {{von dem → vom}} · {{in dem → im}}.']
 ],
 ex:[
  ['Er ist **aus der** Wohnung ausgezogen.','هو طلع من الشقة.'],
  ['Ich spreche **mit dem** neuen Arzt.','عم احكي مع الدكتور الجديد.'],
  ['Die Fahrt **mit dem** Zug war sehr angenehm.','الرحلة بالقطار كانت مريحة كتير.'],
  ['Hat das Kind sich **nach dem** Essen übergeben?','الولد رجّع بعد الأكل؟'],
  ['Wo ist der Schlüssel **von meinem** Auto?','وين مفتاح سيارتي؟'],
  ['Nein, aber ich gehe gerade **zum** Zahnarzt.','لا، بس أنا رايح هلق عند طبيب الأسنان.'],
  ['Ich lebe **seit** zwei Jahren in Deutschland.','عايش بألمانيا من سنتين.']
 ]},

{id:'g-wechsel', lvl:'A1.2', ar:'الحروف المتغيّرة (Wechselpräpositionen): Dativ أو Akkusativ؟', de:'Wechselpräpositionen: stehen/stellen · liegen/legen · hängen · sitzen/setzen',
 rule:[
  ['p','الحروف التسعة: <b>an · auf · hinter · in · neben · über · unter · vor · zwischen</b>. إذا السؤال <b>Wo?</b> (وين؟ = مكان ثابت) ← <b>Dativ</b>. وإذا <b>Wohin?</b> (لوين؟ = حركة أو "حطّ الشي") ← <b>Akkusativ</b>.'],
  ['t',['السؤال','الحالة','الأفعال','مثال'],[['Wo? (مكان)','Dativ','stehen · liegen · hängen · sitzen','Das Buch liegt auf <b>dem</b> Tisch.'],['Wohin? (اتجاه)','Akkusativ','stellen · legen · hängen · setzen','Ich lege das Buch auf <b>den</b> Tisch.']]],
  ['t',['Wo? — حالة (Dativ)','Wohin? — فعل (Akkusativ)'],[['stehen (واقف)','stellen (يوقّف / يحط واقف)'],['liegen (مستلقي)','legen (يحط مستلقي)'],['hängen (معلّق)','hängen (يعلّق)'],['sitzen (قاعد)','setzen / sich setzen (يقعّد / يقعد)']]],
  ['n','مثال "setzen neben": {{Ich setze mich neben dich.}} (حركة ← Akkusativ) مقابل {{Ich sitze neben dir.}} (مكان ← Dativ). والجمع بالـDativ بيصير {{den + Nomen-n}}.']
 ],
 ex:[
  ['Die Kommode **steht neben dem** Bett.','الخزانة واقفة جنب التخت. (Wo? ← Dativ)'],
  ['Ich **stelle** die Kommode **neben das** Bett.','عم حط الخزانة جنب التخت. (Wohin? ← Akkusativ)'],
  ['Das Buch **liegt auf dem** Tisch.','الكتاب على الطاولة. (Wo?)'],
  ['Ich **lege** das Buch **auf den** Tisch.','عم حط الكتاب عالطاولة. (Wohin?)'],
  ['Das Bild **hängt an der** Wand.','الصورة معلّقة عالحيط. (Wo?)'],
  ['Ich **hänge** das Bild **an die** Wand.','عم علّق الصورة عالحيط. (Wohin?)'],
  ['Ich **setze mich neben dich**.','عم قعد جنبك. (Wohin? ← Akkusativ)'],
  ['Ich **sitze neben dir**.','أنا قاعد جنبك. (Wo? ← Dativ)']
 ]},

{id:'g-wowohin', lvl:'A1.2', ar:'Wo؟ Wohin؟ Woher؟ (وين؟ لوين؟ من وين؟)', de:'Wo? Wohin? Woher?',
 rule:[
  ['t',['السؤال','مكان / مؤسسة','شخص','مدينة / بلد','البيت'],[['Wo?','in der Schule · im Park · auf dem Amt','bei Paul · beim Arzt','in Berlin · in der Schweiz','zu Hause'],['Wohin?','in die Schule · in den Park · aufs Amt · zur Schule','zu Paul · zum Arzt','nach Berlin · in die Schweiz','nach Hause'],['Woher?','aus der Schule · aus dem Park · vom Amt','von Paul · vom Arzt','aus Berlin · aus der Schweiz','von zu Hause']]],
  ['n','مع المدن والدول بلا أداة: {{nach}} (لوين) و{{aus}} (من وين). ومع الأشخاص: {{bei / zu / von}}. والفرق: {{in die Praxis}} = جوّا العيادة، {{zur Praxis}} = باتجاه العيادة. (شوف قسم "وين؟ ولوين؟" بالقائمة)']
 ],
 ex:[
  ['Bist du schon **in der** Praxis?','إنت بالعيادة هلق؟ (Wo?)'],
  ['Nein, aber ich gehe gerade **in die** Praxis.','لا، بس رايح عالعيادة هلق. (Wohin?)'],
  ['Bist du schon **bei** Paul?','إنت عند باول؟'],
  ['Nein, aber ich gehe gerade **zu** Paul.','لا، بس رايح لعند باول.'],
  ['Bist du schon **zu Hause**?','إنت بالبيت؟'],
  ['Nein, aber ich gehe gerade **nach Hause**.','لا، بس رايح عالبيت.'],
  ['Ich komme **aus** Syrien.','أنا من سوريا. (Woher?)']
 ]},

{id:'g-konj-haupt', lvl:'A1.2', ar:'أدوات الربط: und · oder · aber · denn · sondern', de:'Konjunktionen (Position 0)',
 rule:[
  ['p','هالكلمات بتربط جملتين <b>بدون ما تغيّر ترتيب الفعل</b>: بعدها الفاعل ثم الفعل. {{und}} (و) · {{oder}} (أو) · {{aber}} (بس) · {{denn}} (لأنّ) · {{sondern}} (بل — بعد نفي).']
 ],
 ex:[
  ['Ich lache nicht, **sondern** ich lächle nur.','أنا ما بضحك، بل بس ببتسم.'],
  ['Wollen wir uns siezen **oder** duzen?','منحكي بـSie ولا بـdu؟'],
  ['Ich bin müde, **aber** ich lerne weiter.','أنا تعبان، بس عم كمّل دراسة.'],
  ['Ich nehme den Bus, **denn** es regnet.','باخد الباص لأنو عم تمطر.'],
  ['Ich koche gern **und** ich esse gern.','بحب اطبخ وبحب آكل.']
 ]},

{id:'g-pronomen-kasus', lvl:'A1.2', ar:'ضمائر الشخص بالحالات الثلاث', de:'Personalpronomen: Nominativ · Akkusativ · Dativ',
 rule:[
  ['t',['','ich','du','er','sie','es','wir','ihr','sie','Sie'],[['Nominativ','ich','du','er','sie','es','wir','ihr','sie','Sie'],['Akkusativ','mich','dich','ihn','sie','es','uns','euch','sie','Sie'],['Dativ','mir','dir','ihm','ihr','ihm','uns','euch','ihnen','Ihnen']]],
  ['n','بس <b>er</b> بيتغيّر بالـAkkusativ ({{ihn}}). وبالأمر: {{Hör mir zu!}} (Dativ) · {{Ruf mich an!}} (Akkusativ).']
 ],
 ex:[
  ['**Ich** rufe **dich** heute Abend an.','رح اتصل فيك هالمسا.'],
  ['Kann ich **dich** bald sehen?','فيني شوفك قريب؟'],
  ['Er hat **mich** um ein Glas Wasser gebeten.','طلب مني كاسة ميّ.'],
  ['Das geht **dich** nichts an!','هاد مش شغلك!'],
  ['Hör **mir** gut zu!','اسمعني منيح!'],
  ['Ich helfe **dir** gern.','بساعدك بكل سرور.']
 ]},

{id:'g-man-es', lvl:'A1.2', ar:'es gibt · man · الأفعال بدون فاعل', de:'es gibt, man, unpersönliche Verben',
 rule:[
  ['p','{{es gibt}} + Akkusativ = "في / يوجد". و{{man}} = "الواحد / الناس" (فاعل عام) وبياخد فعل المفرد. وأفعال الطقس بتاخد {{es}}: {{es regnet · es schneit}}.']
 ],
 ex:[
  ['**Es gibt** viel zu sehen.','في كتير شي نتفرّج عليه.'],
  ['**Es regnet**.','عم تمطر.'],
  ['Nein, **man muss** dreimal umsteigen.','لا، لازم الواحد يبدّل تلات مرات.'],
  ['Von dort aus **kann man** alles sehen!','من هونيك بتشوف كل شي!'],
  ['Ab wann darf **man** jemanden duzen?','من إيمتى بيجوز يحكي الواحد بـdu؟']
 ]},

{id:'g-gern', lvl:'A1.2', ar:'gern · lieber · am liebsten', de:'gern – lieber – am liebsten',
 rule:[
  ['p','للتعبير عن الحب والتفضيل: {{gern}} (بحب) ← {{lieber}} (بفضّل) ← {{am liebsten}} (أكتر شي بحبو). و{{gern}} بيجي بعد الفعل.']
 ],
 ex:[
  ['Ich spiele **gerne** Gitarre.','بحب العب غيتار.'],
  ['Ich klettere **gern** auf Bäume.','بحب إطلع عالشجر.'],
  ['Ich trinke **lieber** Tee als Kaffee.','بفضّل الشاي عالقهوة.'],
  ['Ins Kino? Ich würde **lieber** ins Theater gehen.','عالسينما؟ بفضّل أروح عالمسرح.'],
  ['Er fährt **am liebsten** erste Klasse, weil es bequemer ist.','أكتر شي بيحب يسافر درجة أولى لأنها أريح.']
 ]},

/* ---------------------------- A2.1 ---------------------------- */
{id:'g-praeteritum', lvl:'A2.1', ar:'الماضي البسيط (Präteritum): war · hatte · konnte ...', de:'Präteritum: sein, haben, Modalverben',
 rule:[
  ['t',['','sein','haben','können','müssen','wollen'],[['ich','war','hatte','konnte','musste','wollte'],['du','warst','hattest','konntest','musstest','wolltest'],['er / sie / es','war','hatte','konnte','musste','wollte'],['wir','waren','hatten','konnten','mussten','wollten'],['ihr','wart','hattet','konntet','musstet','wolltet'],['sie / Sie','waren','hatten','konnten','mussten','wollten']]],
  ['n','بالحكي منستخدم Perfekt للأغلب، لكن مع {{sein · haben}} والأفعال المساعدة منفضّل Präteritum. وبالقصص المكتوبة Präteritum أكتر. وكمان: {{es gibt → es gab}}.']
 ],
 ex:[
  ['Es **war** sehr kalt.','كان كتير بارد.'],
  ['Wie **war** die Fahrt?','كيف كانت الرحلة؟'],
  ['Es **gab** gestern ein Problem.','كان في مشكلة امبارح.'],
  ['Ich **war** von Anfang an dabei.','كنت موجود من البداية.'],
  ['Gestern **waren** es minus 2 Grad.','امبارح كانت الحرارة ناقص ٢.'],
  ['Der Patient war wütend, weil er so lange auf den Arzt warten **musste**.','المريض كان زعلان لأنو لازم ينتظر الدكتور كتير.']
 ]},

{id:'g-weil', lvl:'A2.1', ar:'جملة weil (لأنّ): الفعل بالآخر', de:'Nebensatz mit weil',
 rule:[
  ['p','بعد {{weil}} الجملة بتصير <b>Nebensatz</b> والفعل المصرّف بيروح <b>لآخر الجملة</b>. وإذا بلّشت بالـNebensatz، الفعل بالجملة الرئيسية بيجي مباشرة بعد الفاصلة.'],
  ['t',['','الترتيب','مثال'],[['Hauptsatz','فاعل + <b>فعل</b> + …','Ich nehme den Bus.'],['weil-Satz','weil + فاعل + … + <b>فعل</b>','…, weil es <b>regnet</b>.'],['Nebensatz أولاً','Weil … <b>فعل</b>, + <b>فعل</b> + فاعل','Weil es regnet, <b>nehme</b> ich den Bus.']]],
  ['n','مع Perfekt الفعل المساعد بآخر الجملة: {{…, weil ich früh aufgestanden bin.}} أما {{denn}} فبتعطي سبب بدون تغيير الترتيب: {{…, denn es regnet.}}']
 ],
 ex:[
  ['Ich nehme heute den Bus zur Klinik, **weil** es **regnet**.','باخد الباص عالعيادة اليوم لأنو عم تمطر.'],
  ['Der Kühlschrank piept, **weil** die Tür offen **ist**.','البرّاد عم يصفّر لأنو الباب مفتوح.'],
  ['Ich fahre aufs Land, **weil** ich die Ruhe **brauche**.','بروح عالريف لأني محتاج الهدوء.'],
  ['**Weil** der Patient stark **blutet**, muss er sofort operiert werden.','لأنو المريض عم ينزف كتير، لازم ينعمل عملية فوراً.'],
  ['Er fährt am liebsten erste Klasse, **weil** es bequemer **ist**.','بيحب يسافر درجة أولى لأنها أريح.'],
  ['Ich lerne mit Karteikarten, **denn** die Methode **passt** super zu mir.','بدرس بالبطاقات لأنو الطريقة مناسبة إلي كتير.']
 ]},

{id:'g-dass', lvl:'A2.1', ar:'جملة dass (أنّ): الفعل بالآخر', de:'Nebensatz mit dass',
 rule:[
  ['p','{{dass}} بتربط جملة بعد أفعال متل {{glauben · wissen · sagen · hoffen · denken}} أو بعد عبارات متل {{Es ist wichtig / üblich, dass …}}. والفعل بآخر الجملة، وبنحط <b>فاصلة قبل dass</b>.'],
  ['n','{{so … dass}} = "لدرجة إنو": {{Der Film war so langweilig, dass ich eingeschlafen bin.}}']
 ],
 ex:[
  ['Ich glaube, **dass** es nicht schwer **ist**, das zu tun.','بعتقد إنو مش صعب نعمل هيك.'],
  ['In Deutschland ist es üblich, **dass** man seinen Chef **siezt**.','بألمانيا من المعتاد إنو الواحد يحكي مع مديره بـSie.'],
  ['Der Patient hat das Gefühl, **dass** er keine Luft mehr **bekommt**.','المريض عنده إحساس إنو ما عاد فيه ياخد نفس.'],
  ['Möchtest du, **dass** ich dir einen Witz **erzähle**?','بدك إني احكيلك نكتة؟'],
  ['Ich habe gerade erfahren, **dass** ich den Ausbildungsplatz bekommen **habe**.','لسا عارف إني قبلوني بمكان التدريب.'],
  ['Der Film war leider so langweilig, **dass** ich eingeschlafen **bin**.','الفيلم للأسف كان ممل لدرجة إني نمت.']
 ]},

{id:'g-wenn-als', lvl:'A2.1', ar:'wenn و als (لمّا / إذا)', de:'wenn vs. als',
 rule:[
  ['t',['الكلمة','الاستعمال','مثال'],[['wenn','حاضر / مستقبل / شي بيتكرر بالماضي (كل ما…) / شرط','Wenn es regnet, bleiben wir drinnen.'],['als','مرة وحدة بالماضي (لمّا + حدث محدد)','Als ich eingezogen bin, war die Wohnung leer.'],['wann','سؤال عن وقت','Wann kommst du?']]],
  ['p','الاتنين بياخدوا Nebensatz: الفعل المصرّف بالآخر.']
 ],
 ex:[
  ['Trinken Sie Kamillentee, **wenn** Ihr Hals **wehtut**.','اشربوا شاي بابونج إذا حلقكم بيوجعكم.'],
  ['Ruf mich bitte vorher an, **wenn** du zu Besuch **kommst**.','اتصل فيي قبل لمّا تيجي زيارة.'],
  ['Vergiss nicht, den Fernseher auszumachen, **wenn** du **gehst**!','لا تنسى تطفّي التلفزيون لمّا تروح!'],
  ['**Wenn** es **regnet**, bleiben wir drinnen, aber bei Sonne spielen wir draußen.','لمّا تمطر منضل جوّا، وبالشمس منلعب برّا.'],
  ['**Als** ich eingezogen **bin**, war die Wohnung noch völlig leer.','لمّا انتقلت، كانت الشقة لسا فاضية تماماً.'],
  ['**Als** ich angefangen **habe**, Deutsch zu lernen, war ich nicht fleißig. Aber dann habe ich beschlossen, hart zu lernen.','لمّا بلّشت أتعلّم ألماني ما كنت مجتهد. بس بعدين قرّرت أدرس بجد.']
 ]},

{id:'g-reflexiv', lvl:'A2.1', ar:'الأفعال الانعكاسية (Reflexive Verben)', de:'Reflexivpronomen & reflexive Verben',
 rule:[
  ['t',['الضمير','Akkusativ','Dativ'],[['ich','mich','mir'],['du','dich','dir'],['er / sie / es','sich','sich'],['wir','uns','uns'],['ihr','euch','euch'],['sie / Sie','sich','sich']]],
  ['p','الفاعل والمفعول نفس الشخص. الأغلب <b>Akkusativ</b> ({{ich freue mich}})، ولما في مفعول تاني بنستخدم <b>Dativ</b> ({{ich putze mir die Zähne}}). أفعال شائعة: {{sich freuen · sich erinnern · sich beeilen · sich fühlen · sich treffen · sich ausruhen · sich vorstellen}}.']
 ],
 ex:[
  ['Ich **freue mich** auf dich.','مبسوط لأني رح شوفك.'],
  ['**Beeil dich** bitte, sonst kommen wir noch zu spät zur Frühschicht!','استعجل لو سمحت، وإلا منتأخر عالدوام الصباحي!'],
  ['Wie **fühlen Sie sich** heute nach der Operation?','كيف بتحسّوا حالكم اليوم بعد العملية؟'],
  ['Wir **treffen uns** jeden Morgen um sechs Uhr zur Übergabe im Stationszimmer.','منتلاقى كل صبح الساعة ٦ للتسليم بغرفة القسم.'],
  ['Ich **erinnere mich** leider nicht mehr an seinen Namen.','للأسف ما عدت متذكّر اسمو.'],
  ['Putz **dir** die Zähne!','نضّف سنانك! (Dativ)'],
  ['Das Kind **versteckt sich** hinter der Tür.','الولد مخبّي حالو ورا الباب.']
 ]},

{id:'g-verb-praep', lvl:'A2.1', ar:'أفعال بحروف جر ثابتة', de:'Verben mit Präpositionen',
 rule:[
  ['p','كتير أفعال إلها حرف جر ثابت ولازم تحفظهم مع الحالة. وللسؤال بنستخدم {{wo(r) + حرف}} للأشياء ({{Worauf?}}) و{{حرف + wen/wem}} للأشخاص ({{Auf wen?}}).'],
  ['t',['الفعل','الحرف','الحالة','السؤال'],[['warten','auf','Akkusativ','Worauf? / Auf wen?'],['sich freuen','auf (مستقبل) · über (حاضر)','Akkusativ','Worauf? / Worüber?'],['sich interessieren','für','Akkusativ','Wofür?'],['sich ärgern','über','Akkusativ','Worüber?'],['sich erinnern','an','Akkusativ','Woran?'],['sich kümmern','um','Akkusativ','Worum?'],['sprechen','mit','Dativ','Mit wem?'],['träumen','von','Dativ','Wovon?']]]
 ],
 ex:[
  ['Ich interessiere mich sehr **für** medizinische Themen.','مهتم كتير بمواضيع طبية.'],
  ['Herr Müller, kommen Sie bitte ins Sprechzimmer Nummer drei, der Arzt **wartet auf** Sie.','أستاذ مولر، تفضّل لغرفة الفحص رقم ٣، الدكتور بيستناك.'],
  ['Ich ärgere mich oft **über** die unpünktlichen Busse.','بنزعج كتير من الباصات يلي ما بتيجي بوقتها.'],
  ['Ich kümmere mich heute **um** die Patienten in Zimmer vier und fünf.','اليوم أنا مسؤول عن المرضى بغرفة ٤ و٥.'],
  ['Ich freue mich schon sehr **auf** meinen nächsten Urlaub.','مبسوط كتير على عطلتي الجاية.'],
  ['Ich erinnere mich leider nicht mehr **an** seinen Namen.','للأسف ما عدت متذكّر اسمو.']
 ]},

{id:'g-komparativ', lvl:'A2.1', ar:'المقارنة: Komparativ و Superlativ', de:'Komparativ & Superlativ',
 rule:[
  ['t',['الأساس','Komparativ (-er)','Superlativ (am -sten)'],[['schnell','schneller','am schnellsten'],['teuer','teurer','am teuersten'],['wichtig','wichtiger','am wichtigsten'],['groß','größer','am größten'],['nah','näher','am nächsten'],['gut','besser','am besten'],['viel','mehr','am meisten'],['gern','lieber','am liebsten']]],
  ['p','للمقارنة بنستخدم <b>als</b> ({{größer als}})، وللتساوي <b>so … wie</b> / {{genauso … wie}}، وللأضعاف {{doppelt so viel wie}} · {{halb so viel wie}}.']
 ],
 ex:[
  ['Die Apotheke ist **nah**, der Supermarkt ist **näher**, aber die Bushaltestelle ist **am nächsten**.','الصيدلية قريبة، السوبرماركت أقرب، بس موقف الباص هو الأقرب.'],
  ['Ein Buch ist teuer, ein Sprachkurs ist **teurer**, aber Privatunterricht ist **am teuersten**.','الكتاب غالي، كورس اللغة أغلى، بس الدرس الخصوصي هو الأغلى.'],
  ['Grammatik ist wichtig, der Wortschatz ist **wichtiger**, aber die tägliche Übung ist **am wichtigsten**.','القواعد مهمة، المفردات أهم، بس التمرين اليومي هو الأهم.'],
  ['Heute haben wir **doppelt so viele** Notfälle **wie** gestern.','اليوم عنّا حالات طوارئ ضعف امبارح.'],
  ['Ich habe in Syrien **weniger als** in Deutschland verdient.','بسوريا كسبت أقل من ألمانيا.']
 ]},

{id:'g-adjektivendung', lvl:'A2.1', ar:'نهايات الصفات (Adjektivendungen)', de:'Adjektivdeklination',
 rule:[
  ['p','الصفة قبل الاسم بتاخد نهاية حسب <b>الأداة + الجنس + الحالة</b>. بعد أداة معرّفة النهاية غالباً <b>-e</b> أو <b>-en</b>:'],
  ['t',['','مذكر','مؤنث','محايد','جمع'],[['Nominativ','der neue Arzt','die neue Lampe','das neue Auto','die neuen Regeln'],['Akkusativ','den neuen Arzt','die neue Lampe','das neue Auto','die neuen Regeln'],['Dativ','dem neuen Arzt','der neuen Lampe','dem neuen Auto','den neuen Regeln']]],
  ['p','بعد أداة نكرة (ein / kein / mein) الأجناس بتاخد نهاية الأداة المعرّفة (<b>-er · -e · -es</b>):'],
  ['t',['','مذكر','مؤنث','محايد'],[['Nominativ','ein neuer Arzt','eine neue Lampe','ein neues Auto'],['Akkusativ','einen neuen Arzt','eine neue Lampe','ein neues Auto'],['Dativ','einem neuen Arzt','einer neuen Lampe','einem neuen Auto']]],
  ['n','بدون أداة: الصفة بتاخد نهاية الأداة المعرّفة نفسها: {{kaltes Wasser · frisches Brot · warme Jacken}}.']
 ],
 ex:[
  ['Ich spreche mit **dem neuen** Arzt.','عم احكي مع الدكتور الجديد.'],
  ['Wir suchen **den alten** Schlüssel.','عم ندوّر عالمفتاح القديم.'],
  ['Wir wohnen in **einem alten** Haus.','منسكن ببيت قديم.'],
  ['Hast du **frisches** Brot gekauft?','اشتريت خبز طازج؟'],
  ['Ich liebe **kaltes** Wasser.','بحب الميّ الباردة.'],
  ['Zieh dir **eine warme** Jacke an!','البس جاكيت دافي!'],
  ['In meiner **freien** Zeit lese ich gerne.','بوقت فراغي بحب أقرا.']
 ]},

{id:'g-deshalb', lvl:'A2.1', ar:'deshalb · trotzdem (لهيك · مع هيك)', de:'deshalb, deswegen, trotzdem',
 rule:[
  ['p','هالكلمات بتربط جملتين، <b>لكنها بتاخد مكان بالجملة</b> فالفعل بعدها مباشرة (المركز 2) — بعكس {{weil}} يلي بيودّي الفعل للآخر.'],
  ['t',['الكلمة','المعنى','الترتيب'],[['deshalb · deswegen · darum','لهيك / لهالسبب','…, deshalb <b>fahre</b> ich …'],['trotzdem','مع هيك / رغم ذلك','…, trotzdem <b>gehe</b> ich …']]]
 ],
 ex:[
  ['Morgens ist der Straßenverkehr sehr dicht, **deshalb fahre** ich lieber mit der Bahn zur Klinik.','الصبح الترافيك مزدحم، لهيك بفضّل روح بالقطار عالعيادة.'],
  ['Der Patient blutet stark, **deshalb muss** er sofort operiert werden.','المريض عم ينزف كتير، لهيك لازم ينعمل عملية فوراً.'],
  ['Ich möchte bald die B2-Prüfung machen, **deshalb lerne** ich jeden Tag.','بدي أقدّم امتحان B2 قريب، لهيك بدرس كل يوم.'],
  ['Der Kellner war sehr freundlich, **deshalb habe** ich ihm ein gutes Trinkgeld gegeben.','الغارسون كان لطيف كتير، لهيك عطيتو بقشيش منيح.'],
  ['Es regnet, **trotzdem gehe** ich spazieren.','عم تمطر، ومع هيك رايح مشوار.']
 ]},

{id:'g-dativ-akk-objekt', lvl:'A2.1', ar:'مفعولان: Dativ + Akkusativ', de:'Verben mit Dativ- und Akkusativobjekt',
 rule:[
  ['p','أفعال متل {{geben · zeigen · schenken · erzählen · schicken · bringen · übergeben}} بتاخد شخص (<b>Dativ</b>) وشي (<b>Akkusativ</b>).'],
  ['t',['الحالة','الترتيب','مثال'],[['اسمان','Dativ قبل Akkusativ','Ich gebe <b>dem Kind</b> <b>ein Buch</b>.'],['ضمير + اسم','الضمير أولاً','Ich gebe <b>ihm</b> <b>ein Buch</b>.'],['ضميران','Akkusativ قبل Dativ','Ich gebe <b>es</b> <b>ihm</b>.']]]
 ],
 ex:[
  ['Sie hat **mir einen Witz** erzählt.','حكتلي نكتة.'],
  ['Soll ich **dir einen Witz** erzählen?','بدك احكيلك نكتة؟'],
  ['Zeig **mir dein** neues Handy!','فرجيني موبايلك الجديد!'],
  ['Das kleine Kind hat **mir eine** schöne Zeichnung geschenkt.','الولد الصغير أهداني رسمة حلوة.'],
  ['Der Arzt hat **mir die Patientenakte** übergeben.','الدكتور سلّمني ملف المريض.'],
  ['Gib **mir** bitte das Salz!','عطيني الملح لو سمحت!']
 ]},

{id:'g-praep-akk', lvl:'A2.1', ar:'حروف الجر يلي بتاخد Akkusativ دايماً', de:'Präpositionen mit Akkusativ: durch · für · gegen · ohne · um',
 rule:[
  ['t',['الحرف','المعنى','مثال'],[['durch','عبر / من خلال','durch die Stadt'],['für','لـ / من أجل','für mich · für Sie'],['gegen','ضد / حوالي','gegen den Wind · gegen 8 Uhr'],['ohne','بدون','ohne Zucker'],['um','حوالين / الساعة','um die Ecke'],['bis','حتى','bis morgen'],['entlang','على طول (بعد الاسم)','die Straße entlang']]]
 ],
 ex:[
  ['Öffne die Tür **für** mich!','افتحلي الباب!'],
  ['Was kann ich heute **für** Sie tun?','شو فيني اعمل إلكم اليوم؟'],
  ['Der Krankenwagen fährt schnell **durch** die volle Stadt.','سيارة الإسعاف عم تمشي بسرعة بالمدينة المزدحمة.'],
  ['**Ohne** echte Sprachpraxis vergisst man die gelernten Wörter schnell wieder.','بدون ممارسة حقيقية للغة الواحد بينسى الكلمات بسرعة.'],
  ['Ich gehe die Straße **entlang**.','عم مشي على طول الشارع.'],
  ['Wir fahren den Fluss **entlang**.','منسوق على طول النهر.']
 ]},

{id:'g-lassen', lvl:'A2.1', ar:'الفعل lassen بمعانيه', de:'lassen',
 rule:[
  ['p','{{lassen}} إله كتير معاني: <b>يترك</b> ({{zu Hause lassen}})، <b>يسمح</b>، <b>يخلّي شخص يعمل شي</b> ({{Ich lasse mein Fahrrad reparieren.}})، وللاقتراح: <b>{{Lass uns …!}}</b> = "خلّينا …".'],
  ['t',['','ich','du','er / sie / es'],[['lassen','lasse','lässt','lässt']]]
 ],
 ex:[
  ['Worauf wartest du noch? **Lass uns** gehen!','شو عم تستنى؟ خلّينا نروح!'],
  ['**Lass uns** am Wochenende Fußball spielen!','خلّينا نلعب كورة بالويكند!'],
  ['**Lass** mal ein Selfie machen!','خلّينا ناخد سيلفي!'],
  ['Wir haben leider unseren Hund zu Hause **gelassen**.','للأسف تركنا كلبنا بالبيت.'],
  ['Wer hat den Kühlschrank **offengelassen**?','مين ترك البرّاد مفتوح؟'],
  ['Ich **lasse** mein Fahrrad reparieren.','عم صلّح دراجتي عند حدا (بخلّي حدا يصلّحها).']
 ]},

/* ---------------------------- A2.2 ---------------------------- */
{id:'g-konj2', lvl:'A2.2', ar:'Konjunktiv II: طلب بأدب · نصيحة · اقتراح', de:'Konjunktiv II: würde, hätte, wäre, könnte, sollte',
 rule:[
  ['t',['','würde','hätte','wäre','könnte','sollte'],[['ich','würde','hätte','wäre','könnte','sollte'],['du','würdest','hättest','wärst','könntest','solltest'],['er / sie / es','würde','hätte','wäre','könnte','sollte'],['wir','würden','hätten','wären','könnten','sollten'],['ihr','würdet','hättet','wärt','könntet','solltet'],['sie / Sie','würden','hätten','wären','könnten','sollten']]],
  ['p','منستخدمه لـ: <b>طلب بأدب</b> ({{Könnten Sie …?}} · {{Ich hätte gern …}})، <b>نصيحة</b> ({{Du solltest …}})، <b>اقتراح</b> ({{Wir könnten …}} · {{Wie wäre es mit …?}})، <b>تمنّي</b> ({{Ich würde gern …}}).']
 ],
 ex:[
  ['Ich **hätte** mein Steak gern medium, bitte.','بدي الستيك ميديوم لو سمحت.'],
  ['Herr Ober, wir **würden** gern zahlen, bitte.','لو سمحت، بدنا ندفع.'],
  ['**Könnten** Sie bitte kurz rausgehen? Ich muss mich anziehen.','ممكن تطلعوا شوي؟ لازم لبس.'],
  ['Wie **wäre** es mit einer Pizza zum Abendessen?','شو رأيك ببيتزا عالعشا؟'],
  ['Du **solltest** früher ins Bett gehen, damit du morgen fit bist.','المفروض تنام أبكر لتكون نشيط بكرا.'],
  ['Wir **könnten** am Wochenende zusammen ins Kino gehen, wenn du Lust hast.','فينا نروح سوا عالسينما بالويكند إذا بدك.'],
  ['Ich **würde** eher sagen, wir verschieben den Termin auf nächste Woche.','أنا بقول أحسن نأجّل الموعد للأسبوع الجاي.']
 ]},

{id:'g-obwohl-damit', lvl:'A2.2', ar:'obwohl (رغم) و damit (لكي)', de:'obwohl & damit',
 rule:[
  ['p','{{obwohl}} = "رغم إنو" (تناقض) و{{damit}} = "لكي / حتى" (هدف). الاتنين Nebensatz: الفعل المصرّف بالآخر.'],
  ['n','{{damit}} لما الفاعل مختلف بين الجملتين؛ ولما نفس الفاعل منستخدم {{um … zu}} (شوف قاعدة Infinitiv mit zu).']
 ],
 ex:[
  ['**Obwohl** der Patient sehr alt **ist**, ist er nach der OP noch sehr fit.','رغم إنو المريض كبير بالسن، لسا لياقتو منيحة بعد العملية.'],
  ['Es ist dem Mann extrem heiß, **obwohl** das Zimmer kühl **ist**.','الرجّال حاسس بحرّ شديد رغم إنو الغرفة باردة.'],
  ['Du solltest früher ins Bett gehen, **damit** du morgen fit **bist**.','المفروض تنام أبكر حتى تكون نشيط بكرا.'],
  ['Herr Müller, was kann ich für Sie tun, **damit** der Schmerz weniger **wird**?','أستاذ مولر، شو فيني اعمل حتى يخف الوجع؟']
 ]},

{id:'g-zu-inf', lvl:'A2.2', ar:'المصدر مع zu و um … zu', de:'Infinitiv mit zu & um … zu',
 rule:[
  ['p','بعد أفعال وعبارات متل {{versuchen · anfangen · vergessen · Lust haben · sich weigern · Es ist wichtig,}} منحط <b>zu + مصدر</b> بآخر الجملة. و<b>um … zu</b> = "لكي" (الغرض).'],
  ['n','مع الأفعال المنفصلة {{zu}} بتدخل بالنص: {{aufzustehen · anzugeben}}. ومع الأفعال المساعدة (Modalverben) ما منحط {{zu}}.']
 ],
 ex:[
  ['Ich versuche, jeden Tag Deutsch **zu lernen**.','بحاول أتعلّم ألماني كل يوم.'],
  ['Ich habe keine Lust mehr **zu laufen**.','ما عاد عندي نفس أمشي.'],
  ['Sie weigern sich, mehr Geld **zu bezahlen**.','بيرفضوا يدفعوا مصاري أكتر.'],
  ['Es ist wichtig, die richtige E-Mail-Adresse **anzugeben**.','من المهم نكتب عنوان الإيميل الصحيح.'],
  ['Früh **aufzustehen** ist eine sehr gute Gewohnheit.','القيام بكّير عادة منيحة كتير.'],
  ['Wir gehen in den Wald, **um** die gute Luft **zu genießen**.','منروح عالغابة لنتمتّع بالهوا النقي.'],
  ['**Um** fit **zu bleiben**, muss man regelmäßig Sport machen.','لنضل بلياقة لازم نمارس رياضة بانتظام.']
 ]},

{id:'g-indirekt', lvl:'A2.2', ar:'الأسئلة غير المباشرة (ob / W-Wort)', de:'Indirekte Fragen',
 rule:[
  ['p','لما نسأل بأدب أو ننقل سؤال، السؤال بيصير <b>Nebensatz</b>: سؤال بكلمة استفهام بيحتفظ فيها، وسؤال نعم/لا بياخد <b>ob</b>. والفعل بالآخر.'],
  ['t',['مباشر','غير مباشر'],[['Wo ist das Zentrum?','Weißt du, <b>wo</b> das Zentrum <b>ist</b>?'],['Ist Post da?','Ich schaue, <b>ob</b> Post da <b>ist</b>.']]]
 ],
 ex:[
  ['Weißt du zufällig, **wann** heute die Übergabe im Stationszimmer **beginnt**?','بتعرف صدفة إيمتى بتبلّش التسليم اليوم بغرفة القسم؟'],
  ['Weißt du, **wo** das Zentrum **ist**?','بتعرف وين المركز؟'],
  ['Die Polizei prüft, **ob** alle Angaben des Zeugen wirklich **stimmen**.','الشرطة عم تتأكد إذا كل أقوال الشاهد صحيحة.'],
  ['Ich schaue jeden Mittag in den Briefkasten, **ob** Post vom Amt da **ist**.','كل ظهر بشوف بصندوق البريد إذا في بريد من الدائرة.'],
  ['Können Sie mir sagen, **wie** spät es **ist**?','ممكن تقللي كم الساعة؟']
 ]},

{id:'g-futur', lvl:'A2.2', ar:'المستقبل (Futur I): werden + مصدر', de:'Futur I',
 rule:[
  ['t',['ich','du','er / sie / es','wir','ihr','sie / Sie'],[['werde','wirst','wird','werden','werdet','werden']]],
  ['p','{{werden}} مصرّف بالمركز 2 + <b>مصدر بالآخر</b>. بيعبّر عن توقّع أو نيّة. وبالحكي كتير منستخدم المضارع + كلمة وقت: {{Morgen gehe ich zum Arzt.}}']
 ],
 ex:[
  ['Morgen **wird** es **regnen**.','بكرا رح تمطر.'],
  ['Es **wird** wahrscheinlich bewölkt **sein**.','غالباً رح يكون غيم.'],
  ['Die Temperatur **wird** auf 30 Grad **steigen**.','الحرارة رح تطلع لـ ٣٠ درجة.'],
  ['Die Zukunft **wird** voller Überraschungen **sein**.','المستقبل رح يكون مليان مفاجآت.'],
  ['Der Lehrer **wird** morgen unsere Deutschprüfung **bewerten**.','الأستاذ رح يصحّح امتحان الألماني تبعنا بكرا.']
 ]},

{id:'g-wasfuer', lvl:'A2.2', ar:'Was für ein? · Welcher? · welch- كضمير', de:'Was für ein…? · Welch-…? · welches',
 rule:[
  ['t',['','السؤال عن','مثال'],[['Was für ein…?','النوع / الصفة','Was für ein Fest ist das?'],['Welch-…?','اختيار من عدّة أشياء','Welches Kissen findest du schöner?'],['welch- (ضمير)','"بعض منه" بدل الاسم','Ich brauche Salz – ich kaufe welches.']]],
  ['n','{{ein}} بعد {{was für}} بيتصرّف حسب الجملة (وما في ein بالجمع: {{Was für Bücher?}}).']
 ],
 ex:[
  ['**Was für ein** Fest ist das?','أي نوع حفلة هاي؟'],
  ['**Was für Bücher** sind das?','أي نوع كتب هدول؟'],
  ['**Welches** Kissen findest du schöner?','أي مخدّة بتشوفها أحلى؟'],
  ['**Welche** Medikamente verwendet man für diese Krankheit?','أي أدوية بتنستعمل لهالمرض؟'],
  ['Wir haben kein Salz mehr, wir müssen im Laden **welches** kaufen.','ما عاد عنّا ملح، لازم نشتري شوي من الدكان.'],
  ['Ja, im Kühlschrank ist noch **welcher**.','إي، لسا في شوي بالبرّاد.']
 ]},

/* ----------------------------- B1 ----------------------------- */
{id:'g-relativ', lvl:'B1', ar:'جمل الوصل (Relativsätze)', de:'Relativsätze',
 rule:[
  ['p','الـRelativsatz بيوصف اسم قبله. <b>الجنس والعدد</b> من الاسم يلي بيوصفه، و<b>الحالة</b> من وظيفة الضمير بالجملة. بنحط فاصلة قبله وبعده والفعل بآخره.'],
  ['t',['','مذكر','مؤنث','محايد','جمع'],[['Nominativ','der','die','das','die'],['Akkusativ','den','die','das','die'],['Dativ','dem','der','dem','denen'],['Genitiv','dessen','deren','dessen','deren']]],
  ['n','مع حرف جر: الحرف أولاً ثم الضمير: {{die Station, auf der ich arbeite}}.']
 ],
 ex:[
  ['In dem alten Märchen gab der König strenge Befehle, **die** jeder befolgen musste.','بالحكاية القديمة الملك أعطى أوامر صارمة، كل واحد لازم ينفّذها.'],
  ['Die Patientin sucht ihre Versichertenkarte in der Geldbörse, **die** in ihrer Handtasche liegt.','المريضة عم تدوّر عالبطاقة التأمينية بالمحفظة يلي بشنتتها.'],
  ['Das ist der Arzt, **der** mir geholfen hat.','هاد الدكتور يلي ساعدني.'],
  ['Der Patient, **den** ich gestern untersucht habe, ist heute fit.','المريض يلي فحصتو امبارح، اليوم لياقتو منيحة.'],
  ['Das ist die Station, **auf der** ich arbeite.','هاد القسم يلي بشتغل فيه.']
 ]},

{id:'g-passiv', lvl:'B1', ar:'المبني للمجهول (Passiv)', de:'Passiv: werden + Partizip II',
 rule:[
  ['p','بالـPassiv الفاعل مش مهم وبينتقل المفعول لأول الجملة: <b>werden + Partizip II</b>. ولو بدنا نذكر المنفّذ منحط {{von + Dativ}}.'],
  ['t',['الزمن','الشكل','مثال'],[['Präsens','wird + Partizip II','Der Patient wird operiert.'],['Präteritum','wurde + Partizip II','Der Patient wurde operiert.'],['Perfekt','ist + Partizip II + worden','Der Patient ist operiert worden.'],['مع Modalverb','Modal + Partizip II + werden','Er muss operiert werden.']]],
  ['f','Aktiv: Der Arzt operiert den Patienten.  →  Passiv: Der Patient wird (vom Arzt) operiert.']
 ],
 ex:[
  ['Der Patient **wurde** gestern erfolgreich **operiert**.','المريض انعملتلو عملية امبارح بنجاح.'],
  ['Das Problem **wurde** im Team schnell **gelöst**.','المشكلة انحلّت بسرعة بالفريق.'],
  ['Der Notarzt **wurde** sofort nach dem Unfall **gerufen**.','طبيب الطوارئ انطلب فوراً بعد الحادث.'],
  ['Der Verband **wurde** von der Krankenschwester **gewechselt**.','الضمادة انغيّرت من الممرضة.'],
  ['Ich **wurde** gestern gegen Grippe **geimpft**.','انعطيت لقاح ضد الإنفلونزا امبارح.'],
  ['Weil der Patient stark blutet, **muss** er sofort **operiert werden**.','لأنو المريض عم ينزف كتير لازم ينعمل عملية فوراً.']
 ]},

{id:'g-konj2-irreal', lvl:'B1', ar:'الشرط غير الواقعي (Konjunktiv II)', de:'Irreale Bedingung & Konjunktiv II der Vergangenheit',
 rule:[
  ['t',['','الجملة','المثال'],[['حاضر (غير واقعي)','Wenn + Konjunktiv II …, Konjunktiv II …','Wenn ich mehr Zeit <b>hätte</b>, <b>würde</b> ich mehr lesen.'],['ماضي (ما صار)','Wenn + hätte/wäre + Partizip II …, hätte/wäre + Partizip II …','Wenn ich die Chance <b>gehabt hätte</b>, <b>hätte</b> ich das anders <b>gemacht</b>.']]]
 ],
 ex:[
  ['Ich **hätte** das anders **gemacht**.','كنت عملتها بشكل تاني.'],
  ['**Wenn** ich die Chance **gehabt hätte**, **hätte** ich das anders **gemacht**.','لو كان عندي الفرصة، كنت عملتها بشكل تاني.'],
  ['Du hast doch gesagt, das **würde** dich interessieren.','مش إنت قلت إنو هالشي رح يهمّك؟'],
  ['Wenn ich mehr Zeit **hätte**, **würde** ich mehr lesen.','لو عندي وقت أكتر، كنت قرأت أكتر.'],
  ['Wenn ich du **wäre**, **würde** ich zum Arzt gehen.','لو كنت مكانك، كنت رحت للدكتور.']
 ]},

{id:'g-nebensaetze-zeit', lvl:'B1', ar:'جمل الزمن: während · bevor · nachdem · bis · sobald', de:'Temporale Nebensätze',
 rule:[
  ['t',['الكلمة','المعنى','ملاحظة'],[['während','بينما / أثناء','حدثان بنفس الوقت'],['bevor','قبل ما','الحدث الرئيسي أولاً'],['nachdem','بعد ما','الجملة بعد nachdem بالزمن الأقدم (Perfekt / Plusquamperfekt)'],['bis','لحد ما','Ich warte, bis der Arzt kommt.'],['sobald','أول ما','Sobald das Ergebnis da ist, rufe ich dich an.']]],
  ['p','كلهم Nebensatz: الفعل المصرّف بالآخر.']
 ],
 ex:[
  ['**Während** wir verreisen, passt unser freundlicher Nachbar aufs Haus auf.','بينما منكون مسافرين، جارنا اللطيف بيهتم بالبيت.'],
  ['**Bevor** Sie dem Patienten die Spritze geben, müssen Sie vorher Ihre Hände desinfizieren.','قبل ما تعطوا المريض الإبرة، لازم تعقّموا إيديكم.'],
  ['**Bevor** wir auf die Autobahn fahren, müssen wir noch kurz an der Tankstelle halten und tanken.','قبل ما نطلع عالأوتوستراد، لازم نوقف شوي عالبنزينة ونعبّي.'],
  ['**Nachdem** ich mit der Arbeit fertig **war**, habe ich eine halbe Stunde Pause gemacht.','بعد ما خلّصت شغل، أخدت استراحة نص ساعة.'],
  ['Ich warte, **bis** der Arzt **kommt**.','عم استنى لحد ما يجي الدكتور.']
 ]},

{id:'g-genitiv', lvl:'B1', ar:'الحالة الإضافية (Genitiv)', de:'Genitiv & Präpositionen mit Genitiv',
 rule:[
  ['p','الـGenitiv بيجاوب على <b>wessen?</b> (لمين؟) وبيعبّر عن الملكية. للمذكر والمحايد: <b>des + اسم + -(e)s</b>، وللمؤنث والجمع: <b>der</b>.'],
  ['t',['','مذكر','مؤنث','محايد','جمع'],[['Genitiv','des Arztes','der Station','des Krankenhauses','der Patienten']]],
  ['p','حروف جر مع Genitiv: {{wegen · trotz · während · statt · innerhalb · außerhalb}}. وبالحكي كتير منستبدلو بـ {{von + Dativ}}: {{das Auto von meinem Bruder}}.']
 ],
 ex:[
  ['Die Renovierung **des** Krankenhauses dauert noch zwei Monate.','تجديد المستشفى لسا بدو شهرين.'],
  ['Der Arzt hat mir die Lage **des** Patienten beschrieben.','الدكتور وصفلي وضع المريض.'],
  ['Berlin befindet sich im Nordosten **des** Landes.','برلين بشمال شرق البلد.'],
  ['Mieten machen oft 40 Prozent **des** Einkommens aus.','الإيجار غالباً بيشكّل ٤٠٪ من الدخل.'],
  ['**Wegen des** schlechten Wetters findet das Fest heute im großen Saal statt.','بسبب الطقس السيئ الحفلة اليوم بالقاعة الكبيرة.'],
  ['Die Operation wurde **wegen eines** Notfalls auf morgen verschoben.','العملية تأجّلت لبكرا بسبب حالة طارئة.']
 ]},

{id:'g-ndekl', lvl:'B1', ar:'المذكّر الضعيف (n-Deklination)', de:'n-Deklination: der Patient, den Patienten',
 rule:[
  ['p','مجموعة أسماء مذكّرة (غالباً أشخاص أو {{-e}} بالآخر) بتاخد <b>-(e)n</b> بكل الحالات ما عدا Nominativ.'],
  ['t',['','Nominativ','Akkusativ','Dativ','Genitiv'],[['der Patient','der Patient','den Patienten','dem Patienten','des Patienten'],['der Kollege','der Kollege','den Kollegen','dem Kollegen','des Kollegen'],['der Mensch','der Mensch','den Menschen','dem Menschen','des Menschen']]]
 ],
 ex:[
  ['Der Arzt untersucht **den Patienten**.','الدكتور عم يفحص المريض.'],
  ['Man muss **den Patienten** stündlich kontrollieren.','لازم نتفقّد المريض كل ساعة.'],
  ['Im Krankenhaus musst du bei **den Patienten** gut aufpassen.','بالمستشفى لازم تنتبه منيح عالمرضى.'],
  ['Darf ich **den Patienten** sehen? Ich bin ein naher Verwandter.','فيني شوف المريض؟ أنا قريب من الدرجة الأولى.'],
  ['Ich habe **einen Kollegen** angerufen.','اتصلت بزميل.']
 ]},

{id:'g-doppel-konj', lvl:'B1', ar:'أدوات الربط المزدوجة', de:'Zweiteilige Konjunktionen',
 rule:[
  ['t',['الأداة','المعنى'],[['entweder … oder','يا … يا'],['sowohl … als auch','كل من … و'],['weder … noch','لا … ولا'],['nicht nur … sondern auch','مش بس … بل كمان'],['je … desto','كل ما … كل ما']]]
 ],
 ex:[
  ['Ich möchte **entweder** Tee **oder** Kaffee trinken.','بدي أشرب يا شاي يا قهوة.'],
  ['Er spricht **sowohl** Arabisch **als auch** Deutsch.','بيحكي عربي وألماني.'],
  ['Ich habe **weder** Zeit **noch** Lust.','ما عندي لا وقت ولا نفس.'],
  ['Sie ist **nicht nur** nett, **sondern auch** hilfsbereit.','هي مش بس لطيفة، بل كمان بتحب تساعد.'],
  ['**Je** mehr ich lerne, **desto** besser spreche ich.','كل ما بدرس أكتر، بحكي أحسن.']
 ]},

{id:'g-satzstellung', lvl:'B1', ar:'ترتيب عناصر الجملة: Te-Ka-Mo-Lo', de:'Satzstellung: temporal – kausal – modal – lokal',
 rule:[
  ['p','بعد الفعل والفاعل، المعلومات الإضافية بتجي غالباً بهالترتيب:'],
  ['t',['Te (متى؟)','Ka (ليش؟)','Mo (كيف؟)','Lo (وين؟)'],[['heute','wegen des Regens','mit dem Bus','zur Klinik']]],
  ['f','Ich fahre heute wegen des Regens mit dem Bus zur Klinik.']
 ],
 ex:[
  ['Ich fahre **heute** **wegen des Regens** **mit dem Bus** **zur Klinik**.','بروح اليوم بسبب المطر بالباص عالعيادة.'],
  ['Ich bin **letztes Jahr** **nach Dresden** umgezogen.','انتقلت السنة الماضية لدريسدن.'],
  ['Wir haben uns **gestern** **lange** **über unsere Zukunft in Deutschland** unterhalten.','احكينا امبارح كتير عن مستقبلنا بألمانيا.'],
  ['**Nach der Schicht** gehen wir mit den Kollegen in ein gemütliches Lokal.','بعد الدوام منروح مع الزملاء لمطعم مريح.']
 ]}
];
