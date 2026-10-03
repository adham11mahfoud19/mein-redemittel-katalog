const ICON_PLAY = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';

const DATA = [
  {
    id:'vorstellen', ar:'التعارف عن النفس', de:'Sich vorstellen', type:'qa',
    items:[
      {q:'Könnten Sie sich vorstellen? / Kannst du dich vorstellen?', a:['Ich stelle mich vor…']},
      {q:'Wie ist Ihr Name? / Wie ist dein Name?', a:['Mein Name ist Adham Mahfoud']},
      {q:'Wie heißen Sie? / Wie heißt du?', a:['Ich heiße Adham Mahfoud']},
      {q:'Woher kommen Sie? / Woher kommst du?', a:['Ich komme aus Syrien']},
      {q:'Welche Staatsangehörigkeit haben Sie? / Welche Staatsangehörigkeit hast du?', a:['Ich bin Syrer']},
      {q:'Wie alt sind Sie? / Wie alt bist du?', a:['Ich bin 23 Jahre alt']},
      {q:'In welchem Bereich arbeiten Sie? / In welchem Bereich arbeitest du?', a:['Ich arbeite im IT-Bereich']},
      {q:'Als was arbeiten Sie? / Was sind Sie von Beruf?', a:['Ich arbeite als Frontend-Entwickler']},
      {q:'Was entwickeln Sie genau? / Was entwickelst du genau?', a:['Ich entwickle Webseiten']},
      {q:'Wie viele Jahre Berufserfahrung haben Sie?', a:['Ich habe zwei Jahre Berufserfahrung']},
      {q:'Wo wohnen Sie? / Wo wohnst du?', a:['Ich wohne in Stuttgart']},
      {q:'Wo wohnst du genau in Stuttgart?', a:['Ich wohne im Stadtteil Bad Cannstatt']},
      {q:'In welchem Stadtteil von Stuttgart wohnen Sie?', a:['Ich wohne in Stuttgart und zwar im Bezirk Bad Cannstatt']},
      {q:'Seit wann lebst du in Deutschland?', a:['Ich lebe seit zwei Jahren in Deutschland']},
      {q:'Wie lange leben Sie schon in Deutschland?', a:['Ich lebe hier seit fast zwei Jahren']},
      {q:'Sind Sie verheiratet? / Bist du verheiratet?', a:['Nein, ich bin ledig']},
      {q:'Welche Sprachen sprechen Sie? / Welche Sprachen sprichst du?', a:['Ich spreche Arabisch, Englisch, und Deutsch']},
      {q:'Wohnen Sie alleine? / Wohnst du alleine?', a:['Nein, ich wohne in einer WG','Ja, ich wohne alleine']},
      {q:'Was machen Sie in Ihrer Freizeit?', a:['In meiner Freizeit koche ich gerne oder mache Sport']},
      {q:'Warum sind Sie nach Deutschland gekommen?', a:['Ich bin hier, um eine Ausbildung im IT-Bereich zu machen','Ich mache eine Ausbildung als Fachinformatiker für Anwendungsentwicklung','Ich bin hier, um eine Ausbildung in der Pflege zu machen','Ich mache eine Ausbildung als Pflegefachmann']},
      {q:'Was sind Ihre Lieblingshobbies?', a:['Ich spiele gerne Gitarre.','Ich lese gerne Bücher.','Ich spiele und schaue gerne Fußball.','Ich gehe morgens gerne joggen.','Ich höre gerne Musik.','Ich reise gerne.','Ich habe viele verschiedene Hobbies. In meiner Freizeit spiele ich gerne Gitarre und lese Bücher. Außerdem spiele und schaue ich gerne Fußball. Morgens gehe ich oft joggen, um fit zu bleiben. Ich höre auch gerne Musik zum Entspannen. Wenn ich Urlaub habe, reise ich sehr gerne.']},
      {q:'Wann ist dein Geburtstag?', a:[]},
      {q:'Wie lautet Ihr Geburtsdatum?', a:['Mein Geburtsdatum ist der 15. (fünfzehnte) Mai 1995 (neunzehnhundertfünfundneunzig).']},
      {q:'Können Sie mir bitte Ihr Geburtsdatum sagen?', a:['Mein Geburtsdatum ist der 15. (fünfzehnte) Mai 1995 (neunzehnhundertfünfundneunzig).']},
      {q:'Du hast doch schon in Berlin gelebt, oder?', a:['Ja, aber letztes Jahr bin ich nach Dresden umgezogen.']}
    ]
  },
  {
    id:'tagesablauf-beispiel', ar:'مثال: يوم كامل بالتفصيل', de:'Wie sieht Ihr Tagesablauf aus?', type:'sequence',
    items:[
      'Ich wache morgens früh um 6 Uhr auf.','Ich wasche mein Gesicht und putze meine Zähne.',
      'Danach höre ich ungefähr eine halbe Stunde Musik.','Dann lerne ich zwei oder drei Stunden Deutsch.',
      'Um 10 Uhr beginne ich zu arbeiten.','In der Pause um 12 Uhr übe ich Gitarre.',
      'Um 1 Uhr arbeite ich weiter bis 6 Uhr.','Nach der Arbeit mache ich ein halbstündiges Nickerchen.',
      'Danach schaue ich Lehrvideos auf YouTube oder lese ein Buch.'
    ]
  },
  {
    id:'wowohin', ar:'وين؟ ولوين؟', de:'Wo vs. Wohin', type:'location',
    items:[
      {place:'In der Praxis', wo:'Bist du schon in der Praxis?', wohin:['Nein, aber ich gehe gerade in die Praxis.','Nein, aber ich gehe gerade zur Praxis.']},
      {place:'In der Schule', wo:'Bist du schon in der Schule?', wohin:['Nein, aber ich gehe gerade in die Schule.','Nein, aber ich gehe gerade zur Schule.']},
      {place:'Im Laden', wo:'Bist du schon im Laden?', wohin:['Nein, aber ich gehe gerade in den Laden.','Nein, aber ich gehe gerade zum Laden.']},
      {place:'Im Supermarkt', wo:'Bist du schon im Supermarkt?', wohin:['Nein, aber ich gehe gerade in den Supermarkt.','Nein, aber ich gehe gerade zum Supermarkt.']},
      {place:'Auf dem Markt', wo:'Bist du schon auf dem Markt?', wohin:['Nein, aber ich gehe gerade auf den Markt.','Nein, aber ich gehe gerade zum Markt.']},
      {place:'An der Fleischtheke', wo:'Bist du schon an der Fleischtheke?', wohin:['Nein, aber ich gehe gerade an die Fleischtheke.','Nein, aber ich gehe gerade zur Fleischtheke.']},
      {place:'In der Universität / Uni', wo:'Bist du schon in der Uni?', wohin:['Nein, aber ich gehe gerade in die Uni.','Nein, aber ich gehe gerade zur Uni.']},
      {place:'Im Krankenhaus', wo:'Bist du schon im Krankenhaus?', wohin:['Nein, aber ich gehe gerade ins Krankenhaus.','Nein, aber ich gehe gerade zum Krankenhaus.']},
      {place:'Beim Zahnarzt', wo:'Bist du schon beim Zahnarzt?', wohin:['Nein, aber ich gehe gerade in die Zahnarztpraxis.','Nein, aber ich gehe gerade zum Zahnarzt.']},
      {place:'An der Bushaltestelle', wo:'Bist du schon an der Bushaltestelle?', wohin:['Nein, aber ich gehe gerade an die Bushaltestelle.','Nein, aber ich gehe gerade zur Bushaltestelle.']},
      {place:'Am Flughafen', wo:'Bist du schon am Flughafen?', wohin:['Nein, aber ich gehe gerade in den Flughafen.','Nein, aber ich gehe gerade zum Flughafen.']},
      {place:'Auf der Arbeit', wo:'Bist du schon auf der Arbeit?', wohin:['Nein, aber ich gehe gerade in die Arbeit.','Nein, aber ich gehe gerade zur Arbeit.']},
      {place:'In der Pause', wo:'Bist du schon in der Pause?', wohin:['Nein, aber ich gehe gerade in die Pause.','Nein, aber ich gehe gerade zur Pause.']},
      {place:'Zu Hause', wo:'Bist du schon zu Hause?', wohin:['Nein, aber ich gehe gerade nach Hause.']},
      {place:'Bei Paul', wo:'Bist du schon bei Paul?', wohin:['Nein, aber ich gehe gerade zu Paul.']},
      {place:'Auf der Party', wo:'Bist du schon auf der Party?', wohin:['Nein, aber ich gehe gerade auf die Party.','Nein, aber ich gehe gerade zur Party.']},
      {place:'Im Park', wo:'Bist du schon im Park?', wohin:['Nein, aber ich gehe gerade in den Park.','Nein, aber ich gehe gerade zum Park.']},
      {place:'Im Fitnessstudio / Gym', wo:'Bist du schon im Fitnessstudio?', wohin:['Nein, aber ich gehe gerade ins Fitnessstudio.','Nein, aber ich gehe gerade zum Fitnessstudio.']},
      {place:'Auf dem Amt / Ausländerbehörde', wo:'Bist du schon auf dem Amt?', wohin:['Nein, aber ich gehe gerade auf das Amt.','Nein, aber ich gehe gerade zum Amt.']},
      {place:'Am Hauptbahnhof', wo:'Bist du schon am Hauptbahnhof?', wohin:['Nein, aber ich gehe gerade in den Hauptbahnhof.','Nein, aber ich gehe gerade zum Hauptbahnhof.']},
      {place:'In der Kneipe', wo:'Bist du schon in der Kneipe?', wohin:['Nein, aber ich gehe gerade in die Kneipe.','Nein, aber ich gehe gerade zur Kneipe.']},
      {place:'An der Kreuzung', wo:'Bist du schon an der Kreuzung?', wohin:['Nein, aber ich gehe gerade an die Kreuzung.','Nein, aber ich gehe gerade zur Kreuzung.']},
      {place:'Am Gleis', wo:'Bist du schon am Gleis?', wohin:['Nein, aber ich gehe gerade ans Gleis.','Nein, aber ich gehe gerade zum Gleis.']}
    ]
  },
  {
    id:'zuhause', ar:'بالبيت', de:'Zu Hause', type:'flat',
    items:[
      'Kannst du mir ein Glas Wasser geben?','Ich habe Hunger, lass uns was zu essen machen!',
      'Wir haben kein Salz mehr, wir müssen im Laden welches kaufen.',
      'Wir haben keine Birnen mehr, wir müssen im Laden welche kaufen.',
      'Wir haben keinen Käse mehr, wir müssen im Laden welchen kaufen.',
      'Wir brauchen Apfelsaft. Ah, auf dem Tisch steht noch welcher.',
      'Ich möchte fernsehen.','Wo ist Paul? Schläft er noch?','Paul ist aufgewacht.',
      'Willst du nicht endlich aufstehen?','Ich will nicht zu spät kommen.','Heute bin ich früh aufgewacht.',
      'Mach bitte das Licht aus, ich möchte schlafen.','Mach bitte das Licht an, es ist zu dunkel.',
      'Wer hat den Kühlschrank offengelassen?','Ich gehe jetzt duschen.',
      'Das Essen ist fertig! Kommt alle an den Tisch!','Wer ist heute mit Abwaschen dran?',
      'Ich muss noch mein Zimmer aufräumen.','Hast du meinen Schlüssel gesehen? Ich finde ihn nicht.',
      'Ich bringe kurz den Müll raus.','Kannst du bitte die Musik leiser machen? Ich lerne gerade.',
      'Das Internet ist heute extrem langsam.','Ich lege mich kurz aufs Sofa.',
      'Wir müssen am Wochenende die Wohnung putzen.','Der Postbote hat gerade geklingelt, kannst du die Tür aufmachen?',
      'Ich mache uns Kaffee, möchtest du auch einen?','Heute Morgen bin ich früh aufgestanden.',
      'Letzte Nacht habe ich spät geschlafen.','Welches Kissen findest du schöner?','Am besten das hier. Es ist super weich.',
      'Wir essen ab und zu im Restaurant, aber meistens kochen wir zu Hause.','Meistens koche ich mein Essen selbst.',
      'Ich wohne in einer ruhigen Nachbarschaft.','Wir haben eine gute Nachbarschaft.',
      'Ich habe meinen Schlüssel zu Hause vergessen.','Wir haben leider unseren Hund zu Hause gelassen.',
      'Er hat mich um ein Glas Wasser gebeten.','Ich habe dich gebeten, das Fenster zuzumachen.',
      'Die Kiste enthält alte Bücher und Dokumente.','Was hat dieses Paket enthalten?',
      'Gibt es hier noch Käse?','Ja, im Kühlschrank ist noch welcher.',
      'Man sollte für dieses Rezept nur frische Zutaten verwenden.','Die Kinder weigern sich, früh ins Bett zu gehen.',
      'Wir ziehen nächsten Monat in eine neue Wohnung um.','Ich bin letztes Jahr nach Dresden umgezogen.',
      'Ich möchte nach Berlin umziehen.','Er ist aus der Wohnung ausgezogen.','Bitte ziehen Sie Ihre Schuhe aus.',
      'Er hat seine Jacke ausgezogen.','Ich schalte den Fernseher ein.','Wer hat das Licht eingeschaltet?',
      'Ich rufe die Kinder zum Essen.'
    ]
  },
  {
    id:'wohnung', ar:'البيت والأثاث (مكان الأغراض)', de:'Wohnung & Einrichtung', type:'flat',
    items:[
      'Die Lage der Wohnung ist perfekt, direkt im Zentrum.','Die Pflanze steht in der Ecke.',
      'Der Schrank kann in der Ecke oder neben dem Fenster stehen.','Auf dem Sofa liegen ein paar hübsche Kissen.',
      'An der Wand hängen Bilder.','Die Kommode steht im Schlafzimmer.','Ich habe meine Kleidung in die Kommode gelegt.',
      'Können Sie bitte das Fenster zumachen? Es ist kalt.','Er steht oft am Fenster und schaut auf die Straße.',
      'Diese Kiste ist sehr schwer, ich kann sie nicht tragen.','Wo hast du mein Handy versteckt?',
      'Wir renovieren unsere alte Wohnung.','Letztes Jahr haben wir das Badezimmer renoviert.',
      'Unser neues Wohnzimmer ist sehr gemütlich.','Komm rein und mach es dir gemütlich!',
      'Ich hänge das Bild an die Wand.','Das Bild hängt an der Wand.','Die Wand im Wohnzimmer ist weiß.',
      'Wir wollen die Wände im Haus neu streichen.','Ich lege meine Kleidung in den Schrank.','Die Kleidung ist im Schrank.',
      'Ich lege das Buch auf den Tisch.','Das Buch liegt auf dem Tisch.','Ich hänge die Lampe über den Tisch.',
      'Die Lampe hängt über dem Tisch.','Ich lege den Teppich unter das Bett.','Der Teppich liegt unter dem Bett.',
      'Ich stelle den Stuhl vor den Schreibtisch.','Ich stelle die Kommode neben das Bett.','Die Kommode steht neben dem Bett.',
      'Ich stelle die Gitarre zwischen den Schrank und das Bett.','Die Gitarre steht zwischen dem Schrank und dem Bett.',
      'Das Zimmer sieht ordentlich aus.','Der Laptop hat gestern auf dem Tisch gestanden.',
      'Ich habe gestern den Laptop auf den Tisch gestellt.','Das Kissen hat letzte Woche auf dem Bett gelegen.',
      'Kannst du mir ein paar Einrichtungstipps für mein neues Zimmer geben?','Ich möchte meine neue Wohnung modern einrichten.',
      'Als ich eingezogen bin, war die Wohnung noch völlig leer.','Bitte lass deine Kleidung nicht auf dem Boden liegen!',
      'Die neue Lampe hängt an der Decke.','Mir ist kalt, ich brauche eine warme Decke.',
      'Mach bitte die Heizung an, es ist sehr kalt im Zimmer.','Im Winter liege ich gerne mit einer Kuscheldecke auf dem Sofa.',
      'Wir haben alles renoviert, vom Badezimmer bis hin zum Schlafzimmer.','Vorsicht! Der Boden ist noch nass.',
      'Du musst diese Kiste sehr vorsichtig tragen.','Er möchte seine alte Wohnung im Stadtzentrum vermieten.',
      'Mein Vermieter ist sehr nett und hilft immer, wenn etwas kaputt ist.','Ich möchte mein neues Zimmer gemütlich einrichten.',
      'Mein Mitbewohner ist sehr nett, aber er putzt selten die Küche.',
      'Die Kaffeemaschine funktioniert leider nicht mehr, wir brauchen eine neue.'
    ]
  },
  {
    id:'kueche', ar:'بالمطبخ', de:'In der Küche', type:'flat',
    items:[
      'Wir müssen die Einkäufe in die Küche bringen.','Ich koche heute das Abendessen. Wer hilft mir?',
      'Soll ich die Kartoffeln schälen und schneiden?','Wo ist die Pfanne? Ich möchte Fleisch anbraten.',
      'Wir müssen das Hähnchen im Ofen backen.','Das Öl ist heiß, wir können jetzt die Pommes frittieren.',
      'Kannst du bitte das Wasser im Wasserkocher heiß machen?','Ich bereite gerade den Salat vor.',
      'Lass uns den Tisch decken, das Essen ist gleich fertig.','Vorsicht, der Topf ist sehr heiß!',
      'Wir brauchen noch ein scharfes Messer und ein Schneidebrett.','Gib mir bitte das Salz und den Pfeffer.',
      'Das Essen schmeckt lecker, aber es fehlt ein bisschen Salz.','Ich räume kurz die Spülmaschine ein.',
      'Wer räumt die Spülmaschine aus?','Ich muss den Küchentisch abwischen.',
      'Stell bitte die Getränke in den Kühlschrank.','Die Getränke sind im Kühlschrank.',
      'Der Kühlschrank piept, weil die Tür offen ist.','Wir müssen das Gefrierfach abtauen.',
      'Die Waschmaschine läuft gerade, du kannst deine Sachen noch nicht reinwerfen.',
      'Ich muss die Wäsche aus der Waschmaschine holen und aufhängen.','Schalte bitte die Kaffeemaschine ein.',
      'Die Mikrowelle ist dreckig, wir müssen sie sauber machen.','Stell den Teller für zwei Minuten in die Mikrowelle.',
      'Der Toaster klemmt und das Brot ist verbrannt.','Mach bitte die Dunstabzugshaube an, es riecht nach Fett.',
      'Beim Backen muss man genau auf die Mengen achten.','Ich mache uns einen leckeren Salat mit Thunfisch.',
      'Manche Gemüsesorten kann man roh essen, andere muss man kochen.','Die Suppe schmeckt mir heute sehr gut.',
      'Wir kochen getrennt, weil wir verschiedene Essgewohnheiten haben.'
    ]
  },
  {
    id:'unterwegs', ar:'بالطريق والتوجيه', de:'Unterwegs & Orientierung', type:'flat',
    items:[
      'Es ist zu Fuß erreichbar.','Der Park ist da drüben!','Wir haben uns verlaufen.',
      'Du hast dich verlaufen.','Er hat sich verlaufen.','Ich will das Theater finden.',
      'Geh rechts und dann links!','Weißt du, wo das Zentrum ist?',
      'Biegen Sie an der nächsten Kreuzung nach rechts ab.','Du musst über die Straße gehen!',
      'Gehen Sie immer geradeaus.','Überqueren Sie die Kreuzung und gehen Sie dann geradeaus weiter.',
      'Links vorbei an der Kreuzung.','Ich gehe am Bahnhof vorbei.','Schau mal, Thomas steht dort drüben.',
      'Gehen Sie geradeaus, das Café liegt dort drüben an der Kreuzung.','Wo müssen wir hin?',
      'Ich frage nach dem Weg an der Auskunft.','Können Sie mir bitte eine Auskunft geben?',
      'Die Auskunft befindet sich direkt am Haupteingang.','In welche Richtung müssen wir fahren?',
      'Komm, ich zeig dir die Stadt!','Der Weg dauert etwa 20 Minuten.','Ich gehe die Straße entlang.',
      'Wir fahren den Fluss entlang.','Gehen Sie einfach diesen Weg entlang.','Wir spazieren entlang des Flusses.',
      'Der Weg zur Arbeit dauert etwa eine halbe Stunde.','Bitte benutzen Sie den anderen Aufzug.',
      'Kannst du mir den Weg zum Bahnhof beschreiben?'
    ]
  },
  {
    id:'verkehr', ar:'المواصلات والسفر', de:'Verkehrsmittel & Reisen', type:'flat',
    items:[
      'Letzten Monat bin ich nach Berlin gefahren.','Wann kommst du zurück?',
      'Ich möchte ein Ticket nach Berlin und zurück.','Bitte achten Sie auf die Ansagen.',
      'Der Zug fährt pünktlich ab.','Um wie viel Uhr fährt unser Bus ab?','Wo fährt es ab?',
      'Der Zug kommt pünktlich am Bahnhof an.','Bitte lassen Sie Ihr Gepäck nicht unbeaufsichtigt!',
      'Fahrgäste bitte aussteigen, das ist die Endstation.','Fährt dieser Bus bis zur Endstation?',
      'Fährt der Zug direkt nach Berlin?','Nein, man muss dreimal umsteigen.',
      'Ich habe meinen Anschluss verpasst.','Haben wir in Frankfurt Anschluss nach München?',
      'Der Zug hat zehn Minuten Verspätung.','Der Weg dauert etwa 20 Minuten.',
      'Der Zug nach München fährt stündlich ab.','Wann kommt der nächste Bus?','Wie oft fährt der Zug?',
      'Alle zehn Minuten.','Der Bus fährt im 15-Minuten-Takt.','Die U-Bahn kommt morgens im 15-Minuten-Takt.',
      'Die Züge fahren am Wochenende im 15-Minuten-Takt.','Die Fahrt nach Berlin dauert drei Stunden.',
      'Wie war die Fahrt?','Die Fahrt mit dem Zug war sehr angenehm.','Während der Fahrt höre ich gerne Musik.',
      'Die Fahrt zum Bahnhof dauert etwa 20 Minuten.','Gute Fahrt!','Wie lange dauert die Fahrt?',
      'Wo hast du den Wagen geparkt?','Ich muss meinen Wagen in die Werkstatt bringen.',
      'Er fährt einen sehr teuren Wagen.','In welchem Wagen sitzen wir?','Unser Platz ist im Wagen Nummer 5.',
      'Wie lange hat die Fahrt gedauert?','Wo ist der Schlüssel meines Autos?','Wo ist mein Autoschlüssel?',
      'Wo ist der Schlüssel von meinem Auto?','Wir haben etwa eine halbe Stunde auf den Bus gewartet.',
      'Er fährt am liebsten erste Klasse, weil es bequemer ist.','Das Ticket für die erste Klasse ist mir zu teuer.',
      'Haben Sie Tickets für die erste oder zweite Klasse?','Entschuldigung, ist dieser Sitzplatz noch frei?',
      'Im Zug gab es leider keinen Sitzplatz mehr, also musste ich stehen.','Ich habe einen Sitzplatz am Fenster reserviert.',
      'Ihr Sitzplatz ist in Wagen C.','Ich habe diesen Platz reserviert.','Der Kontrolleur im Zug hat meine Fahrkarte kontrolliert.',
      'Die Kontrolleurin hat den Fahrgast gebeten, sein Ticket zu zeigen.','Die Fahrkarten bitte!',
      'Ausstieg in Fahrtrichtung links.','Ausstieg in Fahrtrichtung rechts.',
      'Er benutzt jeden Tag die Straßenbahn, um zur Arbeit zu fahren.','Wie fährst du normalerweise zur Arbeit?',
      'Der Zug fährt pünktlich um 8 Uhr ab.','Der Bus ist leider schon abgefahren.',
      'Wir müssen uns beeilen. Der Zug fährt nämlich gleich ab.'
    ]
  },
  {
    id:'freizeit', ar:'أوقات الفراغ والسياحة', de:'Freizeit, Treffen & Tourismus', type:'flat',
    items:[
      'Das Brandenburger Tor ist eine berühmte Sehenswürdigkeit in Berlin.','Es gibt viel zu sehen.',
      'Was gibt es hier noch so?','Vor drei Wochen habe ich mit einer Freundin Fußball gespielt.',
      'Lass mal ein Selfie machen!','Ich will es unbedingt sehen!','Von dort aus kann man alles sehen!',
      'Die Aussicht ist super!','Letztes Wochenende bin ich mit meinen Freunden ins Kino gegangen.',
      'Wir feiern heute Abend eine Party. Kommst du?','Kann ich dich bald sehen?','Sehen wir uns bald?',
      'Können wir uns bald treffen?','Wie viel kostet der Eintritt?','Der Film ist vorbei.',
      'Komm morgen bei mir vorbei.','Wir feiern am Samstag eine Party in meiner Bude.','Das Tor fiel in der letzten Minute.',
      'Er geht täglich im Park joggen.','Ich gehe ab und zu mit meinen Freunden einen Kaffee trinken.',
      'Ab und zu spiele ich am Wochenende Fußball.','Ab und zu nehme ich meine Gitarre und spiele ein paar Lieder.',
      'Ich benutze beim Gitarrespielen immer ein Metronom.','Am Wochenende gehe ich meistens ins Fitnessstudio.',
      'Wir sehen uns leider nur selten.','Unsere Mannschaft hat das Spiel gewonnen.',
      'Die deutsche Nationalmannschaft spielt heute.','Entlang der Küste gibt es viele Hotels.',
      'Ich bin in etwa einer halben Stunde bei dir.','Wie viel kostet eine Übernachtung in diesem Hotel?',
      'Der Preis für die Tour beinhaltet Essen und Übernachtung.','Wir suchen eine günstige Übernachtung in Berlin.',
      'Vielen Dank für die Übernachtung!','Ich habe gestern bei meinem Freund übernachtet.',
      'Das Angebot beinhaltet drei Übernachtungen.','Der Junge spielt gerne Fußball im Park.',
      'Bitte übergeben Sie den Schlüssel an der Rezeption.','Die Kinder klettern gern auf Bäume.',
      'Als Kind bin ich oft auf Bäume geklettert.','Ich klettere gern auf Bäume.','Kletterst du oft auf Bäume?',
      'Du kletterst auf Bäume.','Ich sammle alte Münzen.','Sammelst du Briefmarken?',
      'Ich habe am Strand Muscheln gesammelt.','Hast du im Wald Pilze gesammelt?',
      'Das Hotel hat eine ruhige Lage.','Möchtest du lieber ins Kino gehen oder zu Hause bleiben?','Jeder kann kommen.',
      'Ich mache einen Einkaufsbummel.','Das Hotel ist schön, und außerdem ist es sehr günstig.',
      'Die Veranstaltung findet am Samstagabend im Zentrum statt.','Der Film war leider so langweilig, dass ich eingeschlafen bin.'
    ]
  },
  {
    id:'einkaufen', ar:'التسوق والسوبرماركت', de:'Einkaufen & Supermarkt', type:'flat',
    items:[
      'Mit dieser Karte bekommen Sie eine Ermäßigung auf alle Produkte.','Gibt es eine Ermäßigung?',
      'Kinder unter 6 Jahren erhalten eine Ermäßigung von 50%.','Die Milch finden Sie dort drüben im Regal.',
      'Das Geschäft war zwei Monate lang geschlossen.','Der Supermarkt ist täglich von 8 bis 20 Uhr geöffnet.',
      'Holst du bitte einen Einkaufswagen?','Der Wagen ist voll.','Sie weigern sich, mehr Geld zu bezahlen.',
      'Diese Schokolade enthält sehr viel Zucker.','Das Getränk enthält keinen Alkohol.','Der Preis enthält bereits die Mehrwertsteuer.',
      'Ich verkaufe meine alten Sachen auf dem Flohmarkt.','Verkaufst du am Wochenende Sachen auf dem Flohmarkt?',
      'Ich habe gestern viele Sachen auf dem Flohmarkt verkauft.','Der Verkäufer hat uns sehr gut beraten.',
      'Was darf es sein?','Ich nehme einfach zwei von jeder.','Ich kaufe ein Glas Marmelade für das Frühstück.',
      'Wir brauchen noch eine Dose Tomaten für die Suppe.','Hast du eine Tüte Chips gekauft?',
      'Bring bitte eine Flasche Wasser aus dem Supermarkt mit.','Ich brauche eine Packung Nudeln für das Mittagessen.',
      'Ich hätte gern ein Kilo Äpfel und zwei Kilo Kartoffeln.','Dieser Pfirsich ist sehr süß und saftig.',
      'Für meine Diät kaufe ich nur mageres Fleisch.','Der Apfel ist noch sehr hart, aber die Birne ist schon weich.',
      'Oh nein, ich habe meinen Einkaufszettel zu Hause vergessen!'
    ]
  },
  {
    id:'restaurant', ar:'بالمطعم والكافيه', de:'Im Restaurant & Café', type:'flat',
    items:[
      'Noch eins bitte.','Das Restaurant öffnet später.','Leider öffnet das Restaurant später!',
      'Später öffnet das Restaurant leider!','Das Café schließt bald.','Ist es sonntags geöffnet?',
      'Das Restaurant hat heute geschlossen.','Dort drüben ist die beste Dönerbude der Stadt.',
      'Ich habe Lust auf eine Currywurst.','Was möchtest du trinken?','Am besten das hier, das sieht lecker aus.',
      'Ich trinke lieber Tee als Kaffee.','Pass bitte auf! Der Kaffee ist sehr heiß.',
      'Mein Glas ist leer, kann ich noch etwas Wasser haben?','Dieses Café ist der ideale Ort zum Lesen.',
      'Darf ich dir eine Tasse Kaffee anbieten?','Wir können heute Abend Pizza bestellen oder so.'
    ]
  },
  {
    id:'zeit', ar:'الوقت وتفاصيل اليوم', de:'Zeit & Tagesablauf', type:'flat',
    items:[
      'Welcher Wochentag ist heute?','Heute ist Montag, also ist morgen Dienstag.',
      'Unter der Woche stehe ich früh auf.','Ich habe unter der Woche keine Zeit.',
      'Was machst du unter der Woche?','Morgen früh gehe ich zur Arbeit.','Der Sommer ist leider vorbei.',
      'Ich bin in einer Minute fertig.','Warten Sie bitte eine Minute.','Wir haben noch fünf Minuten Zeit.',
      'Ich arbeite seit Montag an diesem neuen Projekt.','Die Nachrichten im Radio kommen stündlich.',
      'Ich habe zwei Monate lang in Berlin gewohnt.','Ich trinke täglich drei Tassen Kaffee.',
      'Normalerweise trinke ich morgens einen Kaffee.','Normalerweise arbeite ich von 10 bis 19 Uhr.',
      'Ich habe unter der Woche selten Zeit, Serien zu schauen.','Tagsüber arbeite ich, und am Abend lerne ich Deutsch.',
      'Ich bin tagsüber meistens nicht zu Hause.','Er schläft tagsüber und arbeitet in der Nacht.',
      'Wie lange dauert das?','Warum dauert das so lange?','Es dauert nicht mehr lange.','Etwa eine halbe Stunde.',
      'Ich stehe jeden Tag um 6 Uhr auf.','Heute Morgen bin ich sehr früh aufgestanden.'
    ]
  },
  {
    id:'kommunikation', ar:'التواصل وتعلم اللغة', de:'Kommunikation & Sprache lernen', type:'flat',
    items:[
      'Gestern war mein letzter Tag im Deutschkurs.','Kannst du das bitte wiederholen?',
      'Was steht dort?','Ich habe nichts verstanden!','Wir haben zwei Monate lang für diese Prüfung gelernt.',
      'Ich lerne fast immer am Abend Deutsch.','Der Deutschkurs dauert zwei Monate.',
      'Er hat völlig vergessen, mich anzurufen.','Wir haben leider unsere Hausaufgaben vergessen.',
      'Seine E-Mail beinhaltet wichtige Informationen.','Das Mädchen lernt fleißig Deutsch.',
      'Ich versuche, jeden Tag Deutsch zu lernen.','Er hat versucht, mich gestern anzurufen.',
      'Die deutsche Grammatik ist manchmal sehr kompliziert.','Es ist nicht einfach, eine neue Sprache zu lernen.',
      'Ich stimme dir teilweise zu.','Er hat meine Frage nur teilweise beantwortet.',
      'Darf ich kurz dein Telefon benutzen?','Das darfst du nicht benutzen!',
      'Ich lerne jeden Tag fleißig Deutsch für meine Ausbildung.',
      'Als ich angefangen habe, Deutsch zu lernen, war ich nicht fleißig. Aber dann habe ich beschlossen, hart zu lernen.',
      'Vor 6 Monaten habe ich mich entschieden, Deutsch zu lernen.','Vor 6 Monaten hatte ich vor, Deutsch zu lernen.',
      'Vor 6 Monaten habe ich angefangen, Deutsch zu lernen.','Ich rufe dich heute Abend an.',
      'Früh aufzustehen ist eine sehr gute Gewohnheit.'
    ]
  },
  {
    id:'arbeit', ar:'الشغل والمهنة', de:'Arbeit & Beruf', type:'flat',
    items:[
      'Heute ist mein letzter Arbeitstag.','Welches Design sollen wir für die Webseite nehmen?',
      'Am besten das hier, es sieht sehr modern aus.','Meistens entwickle ich Webseiten mit Laravel oder React.',
      'Das Meeting hat fast vier Stunden gedauert.','Der Chef hat mich gebeten, die E-Mail zu schreiben.',
      'Das Studium beinhaltet ein Praktikum.','Bitte versuchen Sie, das Problem zu lösen.',
      'Darf ich diese Bilder für meine Präsentation verwenden?','Sie hat sich mit ihrem Chef gestritten.',
      'Ich kann heute nicht zur Arbeit kommen. Ich bin nämlich krank.',
      'Ich lerne jeden Tag. Ich will nämlich in Deutschland arbeiten.',
      'Ich lerne fleißig Deutsch. Ich möchte nämlich eine Ausbildung in der Pflege machen.',
      'Ich habe vor, eine Ausbildung in der Pflege zu machen.','Ich plane, eine Ausbildung in der Pflege zu machen.',
      'Ich habe mich entschieden, eine Ausbildung in der Pflege zu machen.',
      'Ich lerne fleißig Deutsch. Ich habe nämlich vor, eine Ausbildung in der Pflege zu machen.',
      'Wie lange wollen Sie noch diskutieren?','Wir müssen dieses Problem heute diskutieren.',
      'Gestern haben wir lange über Politik diskutiert.','Die Deutschprüfung war zum Glück nicht so schwer.',
      'Der Kurs beginnt bald, melde dich schnell an! Ich möchte mich auch dafür anmelden.',
      'Der Deutschunterricht macht mir viel Spaß.','Dieser Kurs ist nicht für Anfänger, sondern für Fortgeschrittene.',
      'Ich habe heute sehr viel Motivation, um Deutsch zu lernen.','Können Sie bitte einen Satz mit diesem neuen Wort bilden?',
      'Der Lehrer wird morgen unsere Deutschprüfung bewerten.','Deine Schrift ist sehr schön und klar, ich kann sie gut lesen.',
      'Der Text ist in Ordnung.','Können Sie mir die aktuelle Lage bei Ihrer Arbeit beschreiben?',
      'Können Sie mir die aktuelle Lage auf der Arbeit beschreiben?','Bitte beschreiben Sie das Problem genau.',
      'Diese Aufgabe ist ganz leicht, du schaffst das.','Für diesen Beruf braucht man viel Erfahrung.',
      'Sie schreibt sehr kreative Werbetexte für das Internet.','Mein neuer Kollege ist sehr sympathisch und hilfsbereit.',
      'Ich habe gerade erfahren, dass ich den Ausbildungsplatz bekommen habe.',
      'Das Krankenhaus veranstaltet nächste Woche ein Sommerfest für die Mitarbeiter.',
      'Mir ist heute auf der Arbeit ein blöder Fehler passiert.',
      'Im Internet findet man viele wichtige Informationen über die Ausbildung.'
    ]
  },
  {
    id:'gefuehle', ar:'المشاعر والصفات', de:'Gefühle & Eigenschaften', type:'flat',
    items:[
      'Ich bin ein bisschen durcheinander.','Du lächelst immer.','Warum lächelst du?',
      'Sie hat mich angelächelt.','Ich mag dein Lächeln.','Ich lache nicht, sondern ich lächle nur.',
      'Ich habe keine Lust mehr zu laufen.','Er ist immer pünktlich.','Unsere Freundschaft ist mir sehr wichtig.',
      'Vertrauen ist wichtig in einer Partnerschaft.','Ihr weigert euch, die Wahrheit zu sagen.',
      'Ich hasse Lügen.','Ich hasse Lügner.','Du bist ein Lügner.','Und du bist eine Lügnerin.',
      'Bitte sei nicht wütend auf mich, ich habe es völlig vergessen.','Bist du verrückt?',
      'Die Welt ist voller Leiden.','Das ist ein absoluter Traum! Ich habe absolutes Vertrauen in dich.',
      'Dieses Thema ist für mich völlig uninteressant.'
    ]
  },
  {
    id:'redewendungen', ar:'تعابير وعبارات عامة', de:'Redewendungen & Allgemeine Ausdrücke', type:'flat',
    items:[
      'Ich bin bald fertig.','Ich weiß es leider nicht!','Es ist vorbei.','Das war das Richtige zu tun.',
      'Das ist jetzt genau das Richtige.','Achte auf dich selbst!','Kümmer dich um deine eigenen Sachen.',
      'Das geht dich nichts an!','Misch dich nicht ein.','Die Gesellschaft verändert sich schnell.',
      'Es gibt heute ein Problem.','Es gab gestern ein Problem.','Ich weigere mich, das zu tun.',
      'Wir versuchen unser Bestes.','Versuch es noch einmal!','Ich versuche mein Bestes.',
      'Die Lösung für dieses Problem ist ganz einfach.','Es klappt!','Das hat sehr gut geklappt.',
      'Hoffentlich klappt es mit dem Ausbildungsplatz.','Leider klappt es heute nicht.','Hat alles geklappt?',
      'Er hat so viel Quatsch gemacht.','Das ist doch Quatsch!','Red keinen Quatsch!','Mach keinen Quatsch!',
      'So ein Quatsch!','Wir haben als Kinder viel Quatsch gemacht.','Glaub nicht alles, was er sagt, das ist totaler Quatsch.',
      'Ich möchte eine Geschichte für dich erzählen.','Geh doch hin, wo der Pfeffer wächst.',
      'Er hat gestern laut nach dir gerufen.','Was ist gestern passiert?','Mir ist ein Fehler passiert.',
      'Wir haben nur noch ein Problem, nämlich das Geld.','Die Lage ist im Moment sehr schwierig.',
      'Ich bin leider nicht in der Lage, dir zu helfen.','Können Sie mir die aktuelle Lage beschreiben?',
      'Das Ding hier ist schwer!','Welche Farbe schöner ist, ist einfach Geschmackssache.',
      'Jeder Mensch macht manchmal Fehler.','Ich hätte das anders gemacht.',
      'Wenn ich die Chance gehabt hätte, hätte ich das anders gemacht.',
      'Wenn ich die Gelegenheit gehabt hätte, hätte ich das anders gemacht.',
      'Worauf wartest du noch? Lass uns gehen!','Was rätst du mir zu tun?',
      'Meiner Meinung nach ist das eine sehr gute Idee.','Was meinst du damit? Ich meine, wir sollten noch etwas warten.',
      'Es gibt keine dummen Fragen, nur dumme Antworten.','Ich glaube, dass es nicht schwer ist, das zu tun.'
    ]
  },
  {
    id:'wetter', ar:'الطقس', de:'Das Wetter', type:'qa',
    items:[
      {q:'Wie ist das Wetter heute?', a:['Es ist sonnig und warm.','Es ist bewölkt.','Es ist sehr heiß heute.','Es regnet.','Wir haben heute 25 Grad.','Seit Montag regnet es fast ununterbrochen.','Es schneit hier sehr selten.','Tagsüber ist es warm, aber nachts wird es kalt.','Das Wetter ist heute teilweise sonnig, teilweise bewölkt.','In Deutschland ist das Wetter ganz anders als in Syrien.','Viele Menschen leiden im Winter unter dem kalten Wetter.','Wenn es regnet, bleiben wir drinnen, aber bei Sonne spielen wir draußen.','Der Wind ist heute sehr stark, zieh dir eine Jacke an!']},
      {q:'Wie war das Wetter gestern?', a:['Es war sehr kalt.','Es war extrem windig.','Gestern hat es geregnet.','Es hat den ganzen Tag geschneit.','Gestern waren es minus 2 Grad.']},
      {q:'Wie wird das Wetter morgen?', a:['Es wird schön und warm.','Es wird wahrscheinlich bewölkt sein.','Morgen wird es regnen.','Morgen gibt es ein Gewitter.','Die Temperatur wird auf 30 Grad steigen.']}
    ]
  },
  {
    id:'umgangsformen', ar:'المعاملة الاجتماعية (Du/Sie)', de:'Umgangsformen & Soziales', type:'flat',
    items:[
      'Sie können mich duzen.','In Deutschland ist es üblich, dass man seinen Chef siezt.',
      'Wenn man eine fremde Person trifft, sollte man sie zuerst siezen.',
      'Es fällt mir schwer, ältere Leute nicht zu siezen.','Unter Kollegen duzen wir uns meistens.',
      'Wir können uns gerne duzen, wenn das für dich in Ordnung ist.','Ab wann darf man jemanden duzen?',
      'Wollen wir uns siezen oder duzen?','Wir haben uns am Anfang gesiezt, aber jetzt duzen wir uns.',
      'Er hat im neuen Kurs schnell Anschluss gefunden.','Warum weigerst du dich, mir zu helfen?',
      'Ich habe meinen Freund um Hilfe gebeten.','Darf ich dich um einen Gefallen bitten?',
      'Ich habe keine Hilfe bekommen.','Hallo Tim, wie war die Schule heute? Hat alles geklappt?',
      'Wir streiten uns fast nie.','Warum streitet ihr euch schon wieder?','Die Kinder streiten oft um das Spielzeug.',
      'Ich möchte mich nicht mit dir streiten.','Ich habe mich gestern mit meinem Bruder gestritten.',
      'Worüber habt ihr euch gestritten?','Worüber streiten Sie sich?','Wir haben uns wegen einer Kleinigkeit gestritten.',
      'Sie hat mir einen Witz erzählt.','Möchtest du, dass ich dir einen Witz erzähle?','Soll ich dir einen Witz erzählen?',
      'Ich wünsche dir einen schönen Tag und hoffe, dass wir uns bald wiedersehen.'
    ]
  },
  {
    id:'technik', ar:'التقنية والإنترنت', de:'Technik & Internet', type:'flat',
    items:[
      'Mein Internetanschluss ist zu langsam, um die Dateien auf den Server hochzuladen.',
      'Wo ist der Anschluss für das Kabel?'
    ]
  },
  {
    id:'gesundheit', ar:'الصحة والتمريض', de:'Gesundheit & Pflege', type:'flat',
    items:[
      'Er ist schon seit Montag krank.','Man muss den Patienten stündlich kontrollieren.',
      'Der Arzt vergibt Termine im 15-Minuten-Takt.','Ich versuche, einen Ausbildungsplatz in der Pflege zu finden.',
      'Manche medizinische Begriffe sind am Anfang kompliziert.','Die Arbeit im Krankenhaus ist teilweise sehr anstrengend.',
      'Bitte verwenden Sie Desinfektionsmittel für die Hände.','Welche Medikamente verwendet man für diese Krankheit?',
      'Der Patient benutzt einen Rollstuhl.','Der Patient hat sich heute Nacht mehrmals übergeben.',
      'Mir ist übel, ich glaube, ich muss mich übergeben.','Hat das Kind sich nach dem Essen übergeben?',
      'Ich übergebe dir jetzt die Schicht.','Der Arzt hat mir die Patientenakte übergeben.',
      'Wir müssen den Patienten an die nächste Station übergeben.','Der Arzt untersucht den Patienten.',
      'Der Patient war wütend, weil er so lange auf den Arzt warten musste.','Hast du den Arzt angerufen?',
      'Die neuen Auszubildenden im Krankenhaus arbeiten sehr fleißig.','Wie ist die aktuelle Lage im Krankenhaus?',
      'Der Patient hat seine Schmerzen genau beschrieben.','Der Arzt hat mir die Lage des Patienten beschrieben.',
      'Im Krankenhaus musst du bei den Patienten gut aufpassen.','Kräutertee hilft gegen Halsschmerzen.',
      'Mein Hals tut weh, ich habe starke Halsschmerzen.','Gegen Halsschmerzen hilft heißer Kräutertee sehr gut.',
      'Die Arbeit im Krankenhaus ist manchmal sehr anstrengend. Nach dieser Anstrengung muss ich schlafen.',
      'Mach dir keine Sorgen, der Patient ist wieder in Ordnung.','Der Patient muss sich nach der Operation gut erholen.',
      'Für die Arbeit in der Pflege braucht man viel praktische Erfahrung.','Wir haben ein Team aus sehr erfahrenen Pflegekräften.',
      'Vielen Dank für die gute medizinische Beratung!','Die Renovierung des Krankenhauses dauert noch zwei Monate.',
      'Die Einrichtung im neuen Patientenzimmer ist sehr modern.','Du darfst die Medikamente auf keinen Fall vergessen!',
      'Durch die Schichten im Krankenhaus haben sich meine Schlafgewohnheiten verändert.',
      'Ich bin erkältet und meine Nase läuft.'
    ]
  },
  {
    id:'familie', ar:'العائلة والأقارب', de:'Familie & Verwandtschaft', type:'flat',
    items:[
      'Meine ganze Verwandtschaft lebt in Syrien.','Hast du viel Verwandtschaft in Deutschland?',
      'Ich habe eine sehr große Verwandtschaft.','Zu meiner Party lade ich Freunde und die ganze Verwandtschaft ein.',
      'Ein Teil meiner Verwandtschaft kommt heute zu Besuch.','Wir sind miteinander verwandt.',
      'Bist du mit ihm verwandt?','Er ist ein Verwandter von mir.','Sie ist eine Verwandte von mir.',
      'Meine Verwandten besuchen mich am Wochenende.','Mein Cousin arbeitet als Arzt im Krankenhaus.',
      'Ich treffe am Wochenende meine Cousine.','Ihr Schwiegersohn kommt heute zu Besuch.',
      'Meine Eltern lieben ihre neue Schwiegertochter sehr.','Der Opa backt mit den Enkelkindern.',
      'Das Kind versteckt sich hinter der Tür.','Die Mutter hat ihre Kinder sehr lieb.','Ich hab dich lieb!',
      'Mein Onkel ist ein echter Kaffeeliebhaber.','Das kleine Kind hat mir eine schöne Zeichnung geschenkt.'
    ]
  },
  {
    id:'buerokratie', ar:'البيروقراطية والاستمارات والمواعيد', de:'Bürokratie, Formulare & Termine', type:'flat',
    items:[
      'Bitte tragen Sie Ihr Geburtsdatum in das Formular ein.','Sie haben vergessen, Ihr Geburtsdatum anzugeben.',
      'Du musst deine genaue Adresse angeben.','Er gibt bei der Anmeldung immer seine Handynummer an.',
      'Ich gebe bei der Anmeldung immer meine Handynummer an.','Es ist wichtig, die richtige E-Mail-Adresse anzugeben.',
      'Ich habe vergessen, meine Postleitzahl anzugeben.','Der Kunde weigerte sich, seine Bankdaten anzugeben.',
      'Wir weigern uns, diesen Vertrag zu unterschreiben.','Ich habe eine Bestätigung für meine Buchung per E-Mail bekommen.',
      'Bitte kontrollieren Sie Ihre persönlichen Angaben auf dem Formular.'
    ]
  },
  {
    id:'reisenatur', ar:'العطلة، الطبيعة وجغرافيا الدول الناطقة بالألمانية', de:'Urlaub, Natur & Landschaft', type:'flat',
    items:[
      'Wandern und Radfahren sind meine liebsten Urlaubsaktivitäten.','Wir haben im Urlaub viele verschiedene Orte besucht.',
      'Ich mache gerne Städtereisen, um neue Kulturen kennenzulernen.','Für Landschaftsreisen braucht man bequeme Wanderschuhe.',
      'Wir wollen im Sommer am See zelten.','Nach einem langen Arbeitsjahr brauche ich dringend Erholung.',
      'Ich fahre aufs Land, weil ich die Ruhe brauche.','Hier kann man die frische Luft und die Natur genießen.',
      'Wenn man in ein Geschäft geht, sollte man eine Person begrüßen.','Was machst du gern in den Ferien?',
      'Ich mache eine Radtour.','Ich gehe wandern.','Ich fahre auf den Bauernhof.','Ich fahre an den Strand.',
      'Dort kann man wandern oder klettern.','Hier kann man die schöne Landschaft genießen.',
      'Hier kann man auf den Turm steigen.','Hier finden Sie Ruhe und Erholung.','Die gute Luft genießen.',
      'Ich suche im Internet nach günstigen Urlaubsangeboten.','Die Kinder verbringen ihre Ferien am liebsten auf dem Bauernhof.',
      'Auf dem Bauernhof kann man auf Pferden reiten.','Wir gehen in den Wald, um die gute Luft zu genießen.',
      'Nach einem langen Arbeitsjahr brauche ich viel Erholung und Entspannung.','Er möchte reisen und die ganze Welt sehen.',
      'Auf dieser Reise kannst du viele neue Dinge erleben.','Fürs Klettern brauchst du eine gute und sichere Ausrüstung.',
      'Wir müssen noch ein Hotelzimmer für den Urlaub buchen.','Österreich und die Schweiz gehören zum deutschsprachigen Raum.',
      'Diese Region ist sehr bekannt für ihren leckeren Käse.','Berlin, Hamburg und München sind sehr große Städte.',
      'Bayern ist das größte Bundesland in Deutschland.','Zürich ist ein bekannter Kanton in der Schweiz.',
      'Wir haben auf unserer Reise viele europäische Länder gesehen.','Deutschland ist ein wichtiges Mitglied der Europäischen Union.',
      'Hamburg liegt im Norden von Deutschland.','Berlin befindet sich im Nordosten des Landes.',
      'Meine Großeltern leben in einem kleinen und ruhigen Dorf.','Das kleine Dorf liegt tief im Tal.',
      'Auf dem Land gehen die Uhren anders, alles ist viel ruhiger und ohne Stress.',
      'In Bayern sagt man oft "Servus" zur Begrüßung.','Wenn du in der Schweiz bist, hörst du oft "Grüezi mitenand".',
      'Die Landschaft in Süddeutschland ist wunderschön.','Im Winter fahren viele Touristen in die Berge, um Ski zu fahren.',
      'Nächstes Jahr wollen wir an das Meer fahren.','Im Sommer schwimmen wir oft im See.',
      'Der Rhein ist ein sehr langer und bekannter Fluss.','Wir sind am Ufer des Flusses spazieren gegangen.',
      'Die Kinder spielen gerne Fußball auf der grünen Wiese.','Diese Pflanze braucht viel Wasser und Licht.',
      'Ein kleiner Vogel singt jeden Morgen auf dem Baum.','Im kleinen See hinter dem Haus lebt ein Frosch.',
      'Unsere Katze schläft den ganzen Tag auf dem Sofa.','Von diesem alten Turm aus hat man einen tollen Blick über die Stadt.'
    ]
  },
  {
    id:'imperativ-du', ar:'صيغة الأمر — du (لصاحب/قريب)', de:'Imperativ — du-Form', type:'flat',
    items:[
      'Komm schnell her!',
      'Geh bitte nach Hause!',
      'Fahr vorsichtig!',
      'Bleib hier bei mir!',
      'Steh sofort auf!',
      'Lauf nicht so schnell!',
      'Warte einen Moment auf mich!',
      'Beeil dich, wir sind spät dran!',
      'Setz dich auf den Stuhl!',
      'Lass das in Ruhe!',
      'Sag mir die Wahrheit!',
      'Sprich bitte ein bisschen lauter!',
      'Frag deinen Lehrer danach!',
      'Antworte mir sofort!',
      'Hör mir gut zu!',
      'Ruf mich heute Abend an!',
      'Zeig mir dein neues Handy!',
      'Erklär mir das bitte nochmal!',
      'Schreib ihm eine kurze Nachricht!',
      'Lies diesen Text laut vor!',
      'Mach das Fenster zu!',
      'Öffne die Tür für mich!',
      'Räum endlich dein Zimmer auf!',
      'Putz dir die Zähne!',
      'Wasch dir die Hände vor dem Essen!',
      'Hol mir bitte ein Glas Wasser!',
      'Zieh dir eine warme Jacke an!',
      'Kauf auf dem Weg noch Brot!',
      'Koch uns heute etwas Leckeres!',
      'Schneid das Gemüse in kleine Stücke!',
      'Hilf mir bitte bei dieser Aufgabe!',
      'Pass gut auf dich auf!',
      'Vergiss deinen Termin morgen nicht!',
      'Versuch es einfach noch einmal!',
      'Denk darüber nach!',
      'Glaub nicht alles, was er sagt!',
      'Entspann dich ein bisschen!',
      'Schlaf gut und träum süß!',
      'Nimm deine Medikamente pünktlich!',
      'Gib mir bitte das Salz!',
      'Iss deinen Teller leer!',
      'Trink genug Wasser heute!',
      'Sei bitte ruhig!',
      'Hab keine Angst!',
      'Schau dir diesen Film an!',
      'Such deine Schlüssel in der Tasche!',
      'Finde eine Lösung für das Problem!',
      'Bring mir einen Kaffee mit!',
      'Freu dich auf den Urlaub!',
      'Zahl die Rechnung an der Kasse!'
    ]
  },
  {
    id:'imperativ-ihr', ar:'صيغة الأمر — ihr (لمجموعة أصحاب)', de:'Imperativ — ihr-Form', type:'flat',
    items:[
      'Kommt schnell her!',
      'Geht bitte nach Hause!',
      'Fahrt vorsichtig!',
      'Bleibt hier bei mir!',
      'Steht sofort auf!',
      'Lauft nicht so schnell!',
      'Wartet einen Moment auf mich!',
      'Beeilt euch, wir sind spät dran!',
      'Setzt euch auf eure Plätze!',
      'Lasst das in Ruhe!',
      'Sagt mir die Wahrheit!',
      'Sprecht bitte ein bisschen lauter!',
      'Fragt euren Lehrer danach!',
      'Antwortet mir sofort!',
      'Hört mir gut zu!',
      'Ruft mich heute Abend an!',
      'Zeigt mir eure neuen Handys!',
      'Erklärt mir das bitte nochmal!',
      'Schreibt ihm eine kurze Nachricht!',
      'Lest diesen Text laut vor!',
      'Macht das Fenster zu!',
      'Öffnet die Tür für mich!',
      'Räumt endlich eure Zimmer auf!',
      'Putzt euch die Zähne!',
      'Wascht euch die Hände vor dem Essen!',
      'Holt mir bitte ein Glas Wasser!',
      'Zieht euch warme Jacken an!',
      'Kauft auf dem Weg noch Brot!',
      'Kocht uns heute etwas Leckeres!',
      'Schneidet das Gemüse in kleine Stücke!',
      'Helft mir bitte bei dieser Aufgabe!',
      'Passt gut auf euch auf!',
      'Vergesst euren Termin morgen nicht!',
      'Versucht es einfach noch einmal!',
      'Denkt darüber nach!',
      'Glaubt nicht alles, was er sagt!',
      'Entspannt euch ein bisschen!',
      'Schlaft gut und träumt süß!',
      'Nehmt eure Medikamente pünktlich!',
      'Gebt mir bitte das Salz!',
      'Esst eure Teller leer!',
      'Trinkt genug Wasser heute!',
      'Seid bitte ruhig!',
      'Habt keine Angst!',
      'Schaut euch diesen Film an!',
      'Sucht eure Schlüssel in der Tasche!',
      'Findet eine Lösung für das Problem!',
      'Bringt mir einen Kaffee mit!',
      'Freut euch auf den Urlaub!',
      'Zahlt die Rechnung an der Kasse!'
    ]
  },
  {
    id:'imperativ-sie', ar:'صيغة الأمر — Sie (رسمي)', de:'Imperativ — Sie-Form', type:'flat',
    items:[
      'Kommen Sie schnell her!',
      'Gehen Sie bitte nach Hause!',
      'Fahren Sie vorsichtig!',
      'Bleiben Sie hier bei mir!',
      'Stehen Sie sofort auf!',
      'Laufen Sie nicht so schnell!',
      'Warten Sie einen Moment auf mich!',
      'Beeilen Sie sich, wir sind spät dran!',
      'Setzen Sie sich auf den Stuhl!',
      'Lassen Sie das in Ruhe!',
      'Sagen Sie mir die Wahrheit!',
      'Sprechen Sie bitte ein bisschen lauter!',
      'Fragen Sie Ihren Lehrer danach!',
      'Antworten Sie mir sofort!',
      'Hören Sie mir gut zu!',
      'Rufen Sie mich heute Abend an!',
      'Zeigen Sie mir Ihr neues Handy!',
      'Erklären Sie mir das bitte nochmal!',
      'Schreiben Sie ihm eine kurze Nachricht!',
      'Lesen Sie diesen Text laut vor!',
      'Machen Sie das Fenster zu!',
      'Öffnen Sie die Tür für mich!',
      'Räumen Sie endlich Ihr Zimmer auf!',
      'Putzen Sie sich die Zähne!',
      'Waschen Sie sich die Hände vor dem Essen!',
      'Holen Sie mir bitte ein Glas Wasser!',
      'Ziehen Sie sich eine warme Jacke an!',
      'Kaufen Sie auf dem Weg noch Brot!',
      'Kochen Sie uns heute etwas Leckeres!',
      'Schneiden Sie das Gemüse in kleine Stücke!',
      'Helfen Sie mir bitte bei dieser Aufgabe!',
      'Passen Sie gut auf sich auf!',
      'Vergessen Sie Ihren Termin morgen nicht!',
      'Versuchen Sie es einfach noch einmal!',
      'Denken Sie darüber nach!',
      'Glauben Sie nicht alles, was er sagt!',
      'Entspannen Sie sich ein bisschen!',
      'Schlafen Sie gut und träumen Sie süß!',
      'Nehmen Sie Ihre Medikamente pünktlich!',
      'Geben Sie mir bitte das Salz!',
      'Essen Sie Ihren Teller leer!',
      'Trinken Sie genug Wasser heute!',
      'Seien Sie bitte ruhig!',
      'Haben Sie keine Angst!',
      'Schauen Sie sich diesen Film an!',
      'Suchen Sie Ihre Schlüssel in der Tasche!',
      'Finden Sie eine Lösung für das Problem!',
      'Bringen Sie mir einen Kaffee mit!',
      'Freuen Sie sich auf den Urlaub!',
      'Zahlen Sie die Rechnung an der Kasse!'
    ]
  }
];

const STORIES = [
  {
    id:'story-sami', title:'Der erste Tag in Dresden', ar:'قصة سامي القادم من سوريا في أول يوم إلو بمهنة التمريض بمستشفى بدرسدن.',
    paragraphs:[
      'Das ist die Geschichte von Sami. Sami kommt aus Syrien und hat seinen Traum verwirklicht: Er macht eine Ausbildung als Pflegefachmann in Deutschland. Sein neuer Wohnort ist Dresden.',
      'Es ist Montag, 6:00 Uhr morgens. Sami steht früh auf. Heute ist sein erster Tag im Krankenhaus. Er ist sehr aufgeregt, aber auch glücklich. Er trinkt schnell einen Kaffee und nimmt die Straßenbahn zur Arbeit.',
      'Im Krankenhaus trifft er seine Praxisanleiterin, Frau Weber. Sie ist sehr nett und sagt: „Guten Morgen, Sami! Willkommen in unserem Team.“ Sie zeigt ihm die Station. Alles ist sehr groß und neu für ihn. Sami sieht viele Patienten, Pflegekräfte und Ärzte.',
      'Zuerst ist die Kommunikation ein bisschen kompliziert. Die Leute in Dresden sprechen manchmal einen Dialekt, der „Sächsisch“ heißt. Sami versteht die Patienten am Anfang nur teilweise. Aber das ist kein Problem. Er sagt: „Können Sie das bitte wiederholen?“ und alle sind sehr geduldig mit ihm.',
      'Frau Weber erklärt ihm die ersten Aufgaben. Er hilft den Patienten beim Frühstück und lernt, wie man alles richtig dokumentiert. Sami versucht sein Bestes. Er erinnert sich an seine Kurse und konzentriert sich auf die neuen medizinischen Begriffe.',
      'Am Nachmittag ist der erste Tag zu Ende. Frau Weber lächelt und fragt: „Sami, hat heute alles gut geklappt?“ Sami antwortet: „Ja, danke! Es war nicht einfach, aber sehr interessant.“',
      'Am Abend liegt Sami im Bett. Er ist sehr müde, aber er weiß: Diese Ausbildung in der Pflege ist genau der richtige Weg für ihn.'
    ]
  },
  {
    id:'story-karim', title:'Der Termin beim Amt', ar:'قصة كريم ويومو بموعد مهم بدائرة الأجانب لتثبيت أوراقه.',
    paragraphs:[
      'Das ist die Geschichte von Karim. Karim wohnt seit einem Jahr in Leipzig und hat heute einen wichtigen Termin bei der Ausländerbehörde.',
      'Er wacht früh auf und nimmt alle wichtigen Papiere mit: seinen Pass, ein Foto und ein Formular. Auf dem Formular muss er sein Geburtsdatum, seine Adresse und seine Handynummer angeben.',
      'Auf dem Amt ist es sehr voll. Karim wartet fast eine Stunde, bis eine Mitarbeiterin seinen Namen ruft. Er ist ein bisschen nervös, aber er bleibt ruhig.',
      'Die Mitarbeiterin prüft seine Papiere. „Sie haben vergessen, Ihre Postleitzahl anzugeben“, sagt sie. Karim entschuldigt sich und füllt das Feld schnell aus.',
      'Dann fragt sie: „Können Sie mir bitte Ihr Geburtsdatum sagen?“ Karim antwortet ruhig und gibt ihr auch seine neue Telefonnummer.',
      'Nach zwanzig Minuten ist alles fertig. Die Mitarbeiterin lächelt und sagt: „Das hat sehr gut geklappt. Herzlichen Glückwunsch!“',
      'Karim verlässt das Amt sehr erleichtert. Er ruft seinen Freund an und sagt: „Es ist endlich geschafft! Lass uns heute Abend feiern!“'
    ]
  },
  {
    id:'story-lina', title:'Sonntag mit der Verwandtschaft', ar:'قصة لينا ويوم الأحد يلي بتجتمع فيه كل عيلتها الكبيرة.',
    paragraphs:[
      'Das ist die Geschichte von Lina. Lina lebt in Köln, aber ihre ganze Verwandtschaft kommt heute zu Besuch.',
      'Am Morgen räumt Lina die Wohnung auf und deckt den Tisch für zehn Personen. Ihre Mutter, ihr Cousin und ihre Großeltern kommen zum Mittagessen.',
      'Um zwölf Uhr klingelt es an der Tür. Linas Cousine kommt zuerst, mit einem Kuchen in der Hand. „Der sieht lecker aus!“, sagt Lina und lacht.',
      'Später kommen auch die Großeltern. Der Opa erzählt gerne Geschichten aus seiner Jugend, und die Enkelkinder hören immer gespannt zu.',
      'Beim Essen spricht die ganze Familie durcheinander: Jeder erzählt etwas Neues aus seinem Leben. Lina fühlt sich sehr glücklich, weil ihre Verwandtschaft ihr so wichtig ist.',
      'Am Nachmittag spielen die Kinder im Garten, und die Erwachsenen trinken gemütlich Kaffee. Niemand hat Lust, früh nach Hause zu gehen.',
      'Am Abend sagt Lina: „Es war ein wunderschöner Tag. Wir sollten uns öfter treffen.“ Alle sind sich einig: Familie ist das Wichtigste im Leben.'
    ]
  },
  {
    id:'story-personal', title:'Ein produktiver Tag', ar:'قصة قصيرة بضمير المتكلم عن يوم شخصي منظم، قسّم فيه وقتو بين تعلم الألماني والشغل والراحة.',
    paragraphs:[
      'Heute war ein sehr produktiver Tag.',
      'Zuerst bin ich schon um 5 Uhr morgens aufgestanden und habe mir das Gesicht gewaschen.',
      'Danach habe ich mir gemütlich einen Mate-Tee gemacht.',
      'Anschließend habe ich drei Stunden lang Deutsch gelernt.',
      'Dann hat mein Arbeitstag begonnen, und ich habe von 10 bis 18 Uhr arbeitete.',
      'Nachdem ich mit der Arbeit fertig war, habe ich eine halbe Stunde Pause gemacht.',
      'Zum Schluss habe ich mich entspannt, ein paar YouTube-Videos geschaut, im Internet gesurft und ein Buch gelesen.'
    ]
  },
  {
    id:'story-aufraeumen', title:'Aufräumtag', ar:'قصة قصيرة عن ترتيب الغرفة — منيح لتثبيت مفردات الأثاث ومكان الأغراض (Wechselpräpositionen).',
    paragraphs:[
      'Heute ist Wochenende, und ich muss mein Zimmer aufräumen.',
      'Zuerst nehme ich meine Bücher und stelle sie in das Regal.',
      'Mein Laptop liegt noch auf dem Bett, also stelle ich ihn auf den Schreibtisch.',
      'Der Schreibtisch steht direkt vor dem Fenster, so habe ich viel Licht.',
      'Danach nehme ich ein schönes Poster und hänge es an die Wand. Die Uhr hängt jetzt genau über dem Poster.',
      'Aber wo ist mein Rucksack? Ah, er liegt unter dem Bett! Ich hole ihn heraus und stelle ihn neben die Tür.',
      'Meine Gitarre stelle ich vorsichtig zwischen den Kleiderschrank und die Kommode.',
      'Zum Schluss verstecke ich den Mülleimer hinter der Tür, damit das Zimmer ordentlich aussieht. Jetzt ist alles perfekt, und ich trinke gemütlich meinen Mate-Tee!'
    ]
  },
  {
    id:'story-reise', title:'Eine Reise durch die Natur', ar:'قصة عن رحلة بين ألمانيا والنمسا وسويسرا، وفيها مفردات جغرافيا وطبيعة.',
    paragraphs:[
      'Letztes Jahr haben mein Bruder und ich eine Reise durch den deutschsprachigen Raum gemacht. Zuerst haben wir Städtereisen im Norden und im Nordosten von Deutschland gemacht. Dort haben wir viele interessante Städte gesehen. Aber nach einer Weile wollten wir lieber in die Natur.',
      'Also sind wir in ein südliches Bundesland gefahren. Als wir in Bayern angekommen sind, haben die Leute uns freundlich mit "Servus!" begrüßt. Das ist üblich, wenn man dort eine Person begrüßen möchte. Später sind wir auch in einen Schweizer Kanton gereist, wo man oft "Grüezi mitenand!" sagt.',
      'Unsere Urlaubsaktivitäten waren sehr vielfältig. Wir haben nicht im Hotel geschlafen, sondern wir wollten in der Natur zelten. Unser Zelt stand auf einer schönen Wiese, direkt am Ufer von einem kleinen See. Die Region war fantastisch! Es gab einen langen Fluss, hohe Berge und überall grüne Pflanzen. Wir haben auch viele Tiere gesehen: einen kleinen Vogel, der morgens gesungen hat, einen Frosch am Wasser und eine süße Katze aus dem nächsten Dorf.',
      'Eines Tages sind wir auf einen hohen Turm gestiegen. Von oben konnte man die ganze Landschaft sehen. Für mich sind solche Landschaftsreisen durch verschiedene europäische Länder, besonders innerhalb der Europäischen Union, viel besser als ein Urlaub an das Meer. Wir konnten die Ruhe und die Erholung wirklich genießen.'
    ]
  },
  {
    id:'story-botschaft', title:'Ein aufregender Tag in der Botschaft', ar:'قصة فيها حوار كتير غني بصيغة الأمر (du و Sie) — يوم أحمد وصاحبو بموعد السفارة الألمانية.',
    paragraphs:[
      'Heute war ein sehr wichtiger Tag. Mein Freund Ahmad und ich hatten endlich unseren Termin bei der deutschen Botschaft. Wir waren beide sehr aufgeregt.',
      'Am frühen Morgen rief ich Ahmad an, weil er immer zu spät kommt. Ich sagte zu ihm: „Ahmad, steh sofort auf! Zieh dir ein schönes Hemd an und vergiss deine Dokumente nicht! Komm schnell zu mir, der Bus wartet nicht.“ Ahmad antwortete verschlafen: „Beruhige dich! Mach dir keine Sorgen, ich bin in zehn Minuten da.“',
      'Als wir vor der Botschaft ankamen, gab es eine lange Schlange. Der Sicherheitsmann an der Tür war sehr streng. Er schaute uns und die anderen Leute an und sagte: „Bleibt bitte hier in der Reihe stehen! Haltet eure Pässe in der Hand und schaltet eure Handys komplett aus! Sprecht hier draußen nicht so laut, bitte!“',
      'Nach einer Stunde durften wir hineingehen. Wir wurden einzeln aufgerufen. Ich ging zu Schalter Nummer 4. Die Beamtin dort war professionell, aber freundlich. Sie schaute mich an und sagte: „Guten Morgen. Setzen Sie sich bitte. Geben Sie mir Ihren Reisepass und die Antragsformulare.“',
      'Ich gab ihr die Papiere. Sie prüfte alles und sagte dann: „Legen Sie jetzt bitte Ihre Finger auf den Scanner. Und schauen Sie direkt in die Kamera, wir brauchen ein Foto.“',
      'Nach ein paar Minuten bemerkte sie etwas in meinen Unterlagen. Sie sagte: „Mir fällt auf, es fehlt eine Kopie von Ihrem Lebenslauf. Aber das ist kein großes Problem. Schicken Sie mir das Dokument einfach bis morgen per E-Mail. Und warten Sie bitte geduldig auf unsere Antwort. Die Bearbeitung dauert etwa vier Wochen.“',
      'Als ich fertig war, traf ich Ahmad draußen vor dem Gebäude. Er war auch fertig und lächelte. Er sagte zu mir: „Erzähl mir alles! Wie war es bei dir?“',
      'Ich lachte und sagte: „Alles war in Ordnung! Lass uns jetzt etwas essen gehen, ich habe großen Hunger!“'
    ]
  }
];

const QUIZ_POOL = [
  {cat:'vorstellen', de:'Ich heiße Adham Mahfoud.', en:'My name is Adham Mahfoud.'},
  {cat:'vorstellen', de:'Ich komme aus Syrien.', en:'I come from Syria.'},
  {cat:'vorstellen', de:'Ich bin 23 Jahre alt.', en:'I am 23 years old.'},
  {cat:'vorstellen', de:'Ich arbeite als Frontend-Entwickler.', en:'I work as a front-end developer.'},
  {cat:'vorstellen', de:'Ich wohne in Stuttgart.', en:'I live in Stuttgart.'},
  {cat:'vorstellen', de:'Ich bin ledig.', en:'I am single.'},
  {cat:'vorstellen', de:'Ich spreche Arabisch, Englisch und Deutsch.', en:'I speak Arabic, English, and German.'},
  {cat:'vorstellen', de:'Ich lebe seit zwei Jahren in Deutschland.', en:'I have been living in Germany for two years.'},
  {cat:'vorstellen', de:'Ja, aber letztes Jahr bin ich nach Dresden umgezogen.', en:'Yes, but last year I moved to Dresden.'},
  {cat:'vorstellen', de:'Mein Geburtsdatum ist der 15. Mai 1995.', en:'My date of birth is May 15th, 1995.'},

  {cat:'tagesablauf-beispiel', de:'Ich wache morgens früh um 6 Uhr auf.', en:'I wake up early at 6 a.m.'},
  {cat:'tagesablauf-beispiel', de:'Danach höre ich ungefähr eine halbe Stunde Musik.', en:'After that I listen to music for about half an hour.'},
  {cat:'tagesablauf-beispiel', de:'Um 10 Uhr beginne ich zu arbeiten.', en:'I start working at 10 o’clock.'},
  {cat:'tagesablauf-beispiel', de:'In der Pause um 12 Uhr übe ich Gitarre.', en:'During the break at noon I practice guitar.'},
  {cat:'tagesablauf-beispiel', de:'Nach der Arbeit mache ich ein halbstündiges Nickerchen.', en:'After work I take a half-hour nap.'},
  {cat:'tagesablauf-beispiel', de:'Danach schaue ich Lehrvideos auf YouTube oder lese ein Buch.', en:'After that I watch tutorial videos on YouTube or read a book.'},
  {cat:'tagesablauf-beispiel', de:'Ich wasche mein Gesicht und putze meine Zähne.', en:'I wash my face and brush my teeth.'},
  {cat:'tagesablauf-beispiel', de:'Um 1 Uhr arbeite ich weiter bis 6 Uhr.', en:'At 1 o’clock I keep working until 6.'},

  {cat:'wowohin', de:'Bist du schon im Supermarkt?', en:'Are you already at the supermarket?'},
  {cat:'wowohin', de:'Nein, aber ich gehe gerade zum Supermarkt.', en:'No, but I am on my way to the supermarket.'},
  {cat:'wowohin', de:'Bist du schon zu Hause?', en:'Are you already home?'},
  {cat:'wowohin', de:'Nein, aber ich gehe gerade nach Hause.', en:'No, but I am on my way home.'},
  {cat:'wowohin', de:'Bist du schon auf dem Amt?', en:'Are you already at the government office?'},
  {cat:'wowohin', de:'Nein, aber ich gehe gerade zum Amt.', en:'No, but I am on my way to the government office.'},
  {cat:'wowohin', de:'Bist du schon im Krankenhaus?', en:'Are you already at the hospital?'},
  {cat:'wowohin', de:'Nein, aber ich gehe gerade ins Krankenhaus.', en:'No, but I am on my way to the hospital.'},
  {cat:'wowohin', de:'Bist du schon am Flughafen?', en:'Are you already at the airport?'},
  {cat:'wowohin', de:'Nein, aber ich gehe gerade zum Flughafen.', en:'No, but I am on my way to the airport.'},

  {cat:'zuhause', de:'Kannst du mir ein Glas Wasser geben?', en:'Can you give me a glass of water?'},
  {cat:'zuhause', de:'Ich habe Hunger.', en:'I am hungry.'},
  {cat:'zuhause', de:'Wo ist Paul? Schläft er noch?', en:'Where is Paul? Is he still sleeping?'},
  {cat:'zuhause', de:'Ich gehe jetzt duschen.', en:'I am going to take a shower now.'},
  {cat:'zuhause', de:'Ich muss noch mein Zimmer aufräumen.', en:'I still need to tidy up my room.'},
  {cat:'zuhause', de:'Das Internet ist heute extrem langsam.', en:'The internet is extremely slow today.'},
  {cat:'zuhause', de:'Wir müssen am Wochenende die Wohnung putzen.', en:'We need to clean the apartment on the weekend.'},
  {cat:'zuhause', de:'Ich wohne in einer ruhigen Nachbarschaft.', en:'I live in a quiet neighborhood.'},
  {cat:'zuhause', de:'Die Kinder weigern sich, früh ins Bett zu gehen.', en:'The children refuse to go to bed early.'},
  {cat:'zuhause', de:'Wir ziehen nächsten Monat in eine neue Wohnung um.', en:'We are moving to a new apartment next month.'},
  {cat:'zuhause', de:'Ich schalte den Fernseher ein.', en:'I am turning on the TV.'},
  {cat:'zuhause', de:'Wer hat das Licht eingeschaltet?', en:'Who turned on the light?'},

  {cat:'wohnung', de:'Die Pflanze steht in der Ecke.', en:'The plant stands in the corner.'},
  {cat:'wohnung', de:'Das Bild hängt an der Wand.', en:'The picture is hanging on the wall.'},
  {cat:'wohnung', de:'Das Buch liegt auf dem Tisch.', en:'The book is lying on the table.'},
  {cat:'wohnung', de:'Der Teppich liegt unter dem Bett.', en:'The rug is lying under the bed.'},
  {cat:'wohnung', de:'Die Kommode steht neben dem Bett.', en:'The dresser stands next to the bed.'},
  {cat:'wohnung', de:'Wir renovieren unsere alte Wohnung.', en:'We are renovating our old apartment.'},
  {cat:'wohnung', de:'Mein Vermieter ist sehr nett.', en:'My landlord is very nice.'},
  {cat:'wohnung', de:'Als ich eingezogen bin, war die Wohnung noch völlig leer.', en:'When I moved in, the apartment was still completely empty.'},

  {cat:'kueche', de:'Ich koche heute das Abendessen.', en:'I am cooking dinner today.'},
  {cat:'kueche', de:'Wo ist die Pfanne?', en:'Where is the frying pan?'},
  {cat:'kueche', de:'Vorsicht, der Topf ist sehr heiß!', en:'Careful, the pot is very hot!'},
  {cat:'kueche', de:'Gib mir bitte das Salz und den Pfeffer.', en:'Please give me the salt and the pepper.'},
  {cat:'kueche', de:'Die Getränke sind im Kühlschrank.', en:'The drinks are in the fridge.'},
  {cat:'kueche', de:'Der Toaster klemmt und das Brot ist verbrannt.', en:'The toaster is stuck and the bread is burnt.'},
  {cat:'kueche', de:'Ich muss den Küchentisch abwischen.', en:'I need to wipe the kitchen table.'},
  {cat:'kueche', de:'Beim Backen muss man genau auf die Mengen achten.', en:'When baking you have to pay close attention to the quantities.'},

  {cat:'unterwegs', de:'Wir haben uns verlaufen.', en:'We got lost.'},
  {cat:'unterwegs', de:'Geh rechts und dann links!', en:'Go right and then left!'},
  {cat:'unterwegs', de:'Gehen Sie immer geradeaus.', en:'Keep going straight ahead.'},
  {cat:'unterwegs', de:'Weißt du, wo das Zentrum ist?', en:'Do you know where the city center is?'},
  {cat:'unterwegs', de:'Der Weg dauert etwa 20 Minuten.', en:'The way takes about 20 minutes.'},
  {cat:'unterwegs', de:'Ich gehe die Straße entlang.', en:'I am walking along the street.'},
  {cat:'unterwegs', de:'Komm, ich zeig dir die Stadt!', en:'Come on, I’ll show you the city!'},
  {cat:'unterwegs', de:'Kannst du mir den Weg zum Bahnhof beschreiben?', en:'Can you describe the way to the station for me?'},

  {cat:'verkehr', de:'Wann kommst du zurück?', en:'When are you coming back?'},
  {cat:'verkehr', de:'Der Zug fährt pünktlich ab.', en:'The train departs on time.'},
  {cat:'verkehr', de:'Der Zug hat zehn Minuten Verspätung.', en:'The train is ten minutes late.'},
  {cat:'verkehr', de:'Ich habe meinen Anschluss verpasst.', en:'I missed my connection.'},
  {cat:'verkehr', de:'Wie oft fährt der Zug?', en:'How often does the train run?'},
  {cat:'verkehr', de:'Entschuldigung, ist dieser Sitzplatz noch frei?', en:'Excuse me, is this seat still free?'},
  {cat:'verkehr', de:'Die Fahrkarten bitte!', en:'Tickets please!'},
  {cat:'verkehr', de:'Wo hast du den Wagen geparkt?', en:'Where did you park the car?'},
  {cat:'verkehr', de:'Der Bus ist leider schon abgefahren.', en:'Unfortunately the bus has already left.'},
  {cat:'verkehr', de:'Wir müssen uns beeilen. Der Zug fährt nämlich gleich ab.', en:'We need to hurry. The train is leaving very soon, you see.'},

  {cat:'freizeit', de:'Es gibt viel zu sehen.', en:'There is a lot to see.'},
  {cat:'freizeit', de:'Wie viel kostet der Eintritt?', en:'How much does the entrance fee cost?'},
  {cat:'freizeit', de:'Unsere Mannschaft hat das Spiel gewonnen.', en:'Our team won the game.'},
  {cat:'freizeit', de:'Wie viel kostet eine Übernachtung in diesem Hotel?', en:'How much does one night cost at this hotel?'},
  {cat:'freizeit', de:'Die Kinder klettern gern auf Bäume.', en:'The children like to climb trees.'},
  {cat:'freizeit', de:'Ich sammle alte Münzen.', en:'I collect old coins.'},
  {cat:'freizeit', de:'Am Wochenende gehe ich meistens ins Fitnessstudio.', en:'On weekends I usually go to the gym.'},
  {cat:'freizeit', de:'Ich mache einen Einkaufsbummel.', en:'I am going window-shopping.'},
  {cat:'freizeit', de:'Der Film war leider so langweilig, dass ich eingeschlafen bin.', en:'Unfortunately the movie was so boring that I fell asleep.'},

  {cat:'einkaufen', de:'Gibt es eine Ermäßigung?', en:'Is there a discount?'},
  {cat:'einkaufen', de:'Die Milch finden Sie dort drüben im Regal.', en:'You will find the milk over there on the shelf.'},
  {cat:'einkaufen', de:'Holst du bitte einen Einkaufswagen?', en:'Can you go get a shopping cart, please?'},
  {cat:'einkaufen', de:'Was darf es sein?', en:'What can I get for you?'},
  {cat:'einkaufen', de:'Ich hätte gern ein Kilo Äpfel und zwei Kilo Kartoffeln.', en:'I would like a kilo of apples and two kilos of potatoes.'},
  {cat:'einkaufen', de:'Oh nein, ich habe meinen Einkaufszettel zu Hause vergessen!', en:'Oh no, I forgot my shopping list at home!'},

  {cat:'restaurant', de:'Was möchtest du trinken?', en:'What would you like to drink?'},
  {cat:'restaurant', de:'Ich habe Lust auf eine Currywurst.', en:'I feel like having a currywurst.'},
  {cat:'restaurant', de:'Das Restaurant hat heute geschlossen.', en:'The restaurant is closed today.'},
  {cat:'restaurant', de:'Ist es sonntags geöffnet?', en:'Is it open on Sundays?'},
  {cat:'restaurant', de:'Ich trinke lieber Tee als Kaffee.', en:'I prefer drinking tea over coffee.'},
  {cat:'restaurant', de:'Darf ich dir eine Tasse Kaffee anbieten?', en:'May I offer you a cup of coffee?'},

  {cat:'zeit', de:'Welcher Wochentag ist heute?', en:'What day of the week is it today?'},
  {cat:'zeit', de:'Ich bin in einer Minute fertig.', en:'I will be ready in a minute.'},
  {cat:'zeit', de:'Wie lange dauert das?', en:'How long does that take?'},
  {cat:'zeit', de:'Ich trinke täglich drei Tassen Kaffee.', en:'I drink three cups of coffee every day.'},
  {cat:'zeit', de:'Ich bin tagsüber meistens nicht zu Hause.', en:'During the day I am usually not at home.'},
  {cat:'zeit', de:'Ich stehe jeden Tag um 6 Uhr auf.', en:'I get up at 6 o’clock every day.'},
  {cat:'zeit', de:'Etwa eine halbe Stunde.', en:'About half an hour.'},

  {cat:'kommunikation', de:'Kannst du das bitte wiederholen?', en:'Can you please repeat that?'},
  {cat:'kommunikation', de:'Ich habe nichts verstanden!', en:'I didn’t understand anything!'},
  {cat:'kommunikation', de:'Die deutsche Grammatik ist manchmal sehr kompliziert.', en:'German grammar is sometimes very complicated.'},
  {cat:'kommunikation', de:'Es ist nicht einfach, eine neue Sprache zu lernen.', en:'It is not easy to learn a new language.'},
  {cat:'kommunikation', de:'Ich rufe dich heute Abend an.', en:'I will call you tonight.'},
  {cat:'kommunikation', de:'Darf ich kurz dein Telefon benutzen?', en:'May I briefly use your phone?'},
  {cat:'kommunikation', de:'Früh aufzustehen ist eine sehr gute Gewohnheit.', en:'Getting up early is a very good habit.'},

  {cat:'arbeit', de:'Heute ist mein letzter Arbeitstag.', en:'Today is my last day at work.'},
  {cat:'arbeit', de:'Das Meeting hat fast vier Stunden gedauert.', en:'The meeting lasted almost four hours.'},
  {cat:'arbeit', de:'Ich kann heute nicht zur Arbeit kommen. Ich bin nämlich krank.', en:'I can’t come to work today. You see, I am sick.'},
  {cat:'arbeit', de:'Sie hat sich mit ihrem Chef gestritten.', en:'She had an argument with her boss.'},
  {cat:'arbeit', de:'Wie lange wollen Sie noch diskutieren?', en:'How much longer do you want to discuss this?'},
  {cat:'arbeit', de:'Für diesen Beruf braucht man viel Erfahrung.', en:'This profession requires a lot of experience.'},
  {cat:'arbeit', de:'Ich habe gerade erfahren, dass ich den Ausbildungsplatz bekommen habe.', en:'I just found out that I got the training position.'},

  {cat:'gefuehle', de:'Er ist immer pünktlich.', en:'He is always on time.'},
  {cat:'gefuehle', de:'Unsere Freundschaft ist mir sehr wichtig.', en:'Our friendship is very important to me.'},
  {cat:'gefuehle', de:'Du bist ein Lügner.', en:'You are a liar.'},
  {cat:'gefuehle', de:'Bist du verrückt?', en:'Are you crazy?'},
  {cat:'gefuehle', de:'Ich hasse Lügen.', en:'I hate lies.'},
  {cat:'gefuehle', de:'Dieses Thema ist für mich völlig uninteressant.', en:'This topic is completely uninteresting to me.'},

  {cat:'redewendungen', de:'Ich bin bald fertig.', en:'I will be done soon.'},
  {cat:'redewendungen', de:'Es klappt!', en:'It’s working!'},
  {cat:'redewendungen', de:'Hat alles geklappt?', en:'Did everything work out?'},
  {cat:'redewendungen', de:'So ein Quatsch!', en:'What nonsense!'},
  {cat:'redewendungen', de:'Mir ist ein Fehler passiert.', en:'I made a mistake.'},
  {cat:'redewendungen', de:'Ich bin leider nicht in der Lage, dir zu helfen.', en:'Unfortunately I am not able to help you.'},
  {cat:'redewendungen', de:'Jeder Mensch macht manchmal Fehler.', en:'Every person makes mistakes sometimes.'},
  {cat:'redewendungen', de:'Meiner Meinung nach ist das eine sehr gute Idee.', en:'In my opinion, that is a very good idea.'},

  {cat:'wetter', de:'Es ist sonnig und warm.', en:'It is sunny and warm.'},
  {cat:'wetter', de:'Es regnet.', en:'It is raining.'},
  {cat:'wetter', de:'Es hat den ganzen Tag geschneit.', en:'It snowed all day.'},
  {cat:'wetter', de:'Morgen gibt es ein Gewitter.', en:'There will be a thunderstorm tomorrow.'},
  {cat:'wetter', de:'Viele Menschen leiden im Winter unter dem kalten Wetter.', en:'Many people suffer from the cold weather in winter.'},
  {cat:'wetter', de:'Der Wind ist heute sehr stark, zieh dir eine Jacke an!', en:'The wind is very strong today, put on a jacket!'},

  {cat:'umgangsformen', de:'Sie können mich duzen.', en:'You can use "du" with me.'},
  {cat:'umgangsformen', de:'Ab wann darf man jemanden duzen?', en:'From what point is it okay to use "du" with someone?'},
  {cat:'umgangsformen', de:'Darf ich dich um einen Gefallen bitten?', en:'May I ask you for a favor?'},
  {cat:'umgangsformen', de:'Wir streiten uns fast nie.', en:'We almost never argue.'},
  {cat:'umgangsformen', de:'Soll ich dir einen Witz erzählen?', en:'Should I tell you a joke?'},
  {cat:'umgangsformen', de:'Ich wünsche dir einen schönen Tag.', en:'I wish you a nice day.'},

  {cat:'technik', de:'Wo ist der Anschluss für das Kabel?', en:'Where is the connection for the cable?'},
  {cat:'technik', de:'Mein Internetanschluss ist zu langsam.', en:'My internet connection is too slow.'},

  {cat:'gesundheit', de:'Man muss den Patienten stündlich kontrollieren.', en:'The patient must be checked every hour.'},
  {cat:'gesundheit', de:'Der Arzt untersucht den Patienten.', en:'The doctor examines the patient.'},
  {cat:'gesundheit', de:'Mein Hals tut weh, ich habe starke Halsschmerzen.', en:'My throat hurts, I have a bad sore throat.'},
  {cat:'gesundheit', de:'Der Patient muss sich nach der Operation gut erholen.', en:'The patient needs to recover well after the operation.'},
  {cat:'gesundheit', de:'Du darfst die Medikamente auf keinen Fall vergessen!', en:'You must absolutely not forget the medication!'},
  {cat:'gesundheit', de:'Ich bin erkältet und meine Nase läuft.', en:'I have a cold and my nose is running.'},

  {cat:'familie', de:'Meine ganze Verwandtschaft lebt in Syrien.', en:'All my relatives live in Syria.'},
  {cat:'familie', de:'Meine Verwandten besuchen mich am Wochenende.', en:'My relatives visit me on the weekend.'},
  {cat:'familie', de:'Mein Cousin arbeitet als Arzt im Krankenhaus.', en:'My cousin works as a doctor at the hospital.'},
  {cat:'familie', de:'Der Opa backt mit den Enkelkindern.', en:'Grandpa bakes with the grandchildren.'},
  {cat:'familie', de:'Ich hab dich lieb!', en:'I love you! (affectionate, to family/friends)'},

  {cat:'buerokratie', de:'Du musst deine genaue Adresse angeben.', en:'You need to provide your exact address.'},
  {cat:'buerokratie', de:'Ich habe vergessen, meine Postleitzahl anzugeben.', en:'I forgot to provide my postal code.'},
  {cat:'buerokratie', de:'Wir weigern uns, diesen Vertrag zu unterschreiben.', en:'We refuse to sign this contract.'},
  {cat:'buerokratie', de:'Ich habe eine Bestätigung für meine Buchung per E-Mail bekommen.', en:'I received a confirmation for my booking by email.'},

  {cat:'reisenatur', de:'Ich gehe wandern.', en:'I go hiking.'},
  {cat:'reisenatur', de:'Wir wollen im Sommer am See zelten.', en:'We want to camp by the lake in summer.'},
  {cat:'reisenatur', de:'Nach einem langen Arbeitsjahr brauche ich dringend Erholung.', en:'After a long working year I urgently need rest.'},
  {cat:'reisenatur', de:'Berlin, Hamburg und München sind sehr große Städte.', en:'Berlin, Hamburg, and Munich are very big cities.'},
  {cat:'reisenatur', de:'Der Rhein ist ein sehr langer und bekannter Fluss.', en:'The Rhine is a very long and famous river.'},
  {cat:'reisenatur', de:'In Bayern sagt man oft "Servus" zur Begrüßung.', en:'In Bavaria people often say "Servus" as a greeting.'},
  {cat:'reisenatur', de:'Im Winter fahren viele Touristen in die Berge, um Ski zu fahren.', en:'In winter many tourists go to the mountains to ski.'},
  {cat:'reisenatur', de:'Auf dem Bauernhof kann man auf Pferden reiten.', en:'At the farm you can ride horses.'},

  {cat:'imperativ-du', de:'Komm schnell her!', en:'Come here quickly!'},
  {cat:'imperativ-du', de:'Hab keine Angst!', en:'Don’t be afraid!'},
  {cat:'imperativ-du', de:'Gib mir bitte das Salz!', en:'Please give me the salt!'},
  {cat:'imperativ-du', de:'Vergiss deinen Termin morgen nicht!', en:'Don’t forget your appointment tomorrow!'},
  {cat:'imperativ-du', de:'Mach das Fenster zu!', en:'Close the window!'},
  {cat:'imperativ-du', de:'Beeil dich, wir sind spät dran!', en:'Hurry up, we are running late!'},

  {cat:'imperativ-ihr', de:'Kommt schnell her!', en:'Come here quickly! (to a group)'},
  {cat:'imperativ-ihr', de:'Habt keine Angst!', en:'Don’t be afraid! (to a group)'},
  {cat:'imperativ-ihr', de:'Wascht euch die Hände vor dem Essen!', en:'Wash your hands before eating! (to a group)'},
  {cat:'imperativ-ihr', de:'Beeilt euch, wir sind spät dran!', en:'Hurry up, we are running late! (to a group)'},
  {cat:'imperativ-ihr', de:'Vergesst euren Termin morgen nicht!', en:'Don’t forget your appointment tomorrow! (to a group)'},
  {cat:'imperativ-ihr', de:'Macht das Fenster zu!', en:'Close the window! (to a group)'},

  {cat:'imperativ-sie', de:'Kommen Sie schnell her!', en:'Come here quickly! (formal)'},
  {cat:'imperativ-sie', de:'Haben Sie keine Angst!', en:'Don’t be afraid! (formal)'},
  {cat:'imperativ-sie', de:'Setzen Sie sich bitte.', en:'Please have a seat. (formal)'},
  {cat:'imperativ-sie', de:'Vergessen Sie Ihren Termin morgen nicht!', en:'Don’t forget your appointment tomorrow! (formal)'},
  {cat:'imperativ-sie', de:'Machen Sie das Fenster zu!', en:'Close the window! (formal)'},
  {cat:'imperativ-sie', de:'Beeilen Sie sich, wir sind spät dran!', en:'Hurry up, we are running late! (formal)'}
];

/* ---------- Speech ---------- */
let germanVoice = null;
function pickVoice(){
  const voices = speechSynthesis.getVoices();
  const de = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('de'));
  germanVoice = de.find(v => /google/i.test(v.name)) || de.find(v => /de-DE/i.test(v.lang)) || de[0] || null;
}
pickVoice();
if (typeof speechSynthesis !== 'undefined') speechSynthesis.onvoiceschanged = pickVoice;

function cleanForSpeech(t){ return t.replace(/\s*\/\s*/g, '. '); }

function speak(text, el, onEnd){
  if (!('speechSynthesis' in window)) { alert('متصفحك لا يدعم النطق الصوتي.'); return; }
  speechSynthesis.cancel();
  document.querySelectorAll('.card.playing').forEach(c => c.classList.remove('playing'));
  const utter = new SpeechSynthesisUtterance(cleanForSpeech(text));
  utter.lang = 'de-DE';
  if (germanVoice) utter.voice = germanVoice;
  utter.rate = 0.93;
  utter.pitch = 1;
  if (el) el.classList.add('playing');
  utter.onend = () => { if (el) el.classList.remove('playing'); if (onEnd) onEnd(); };
  utter.onerror = () => { if (el) el.classList.remove('playing'); };
  speechSynthesis.speak(utter);
}
function playSequence(texts, i=0){ if (i >= texts.length) return; speak(texts[i], null, () => playSequence(texts, i+1)); }

document.getElementById('stopBtn').addEventListener('click', () => {
  speechSynthesis.cancel();
  document.querySelectorAll('.card.playing').forEach(c => c.classList.remove('playing'));
});

/* ---------- Rendering helpers ---------- */
function speakBtn(){
  const b = document.createElement('button');
  b.className = 'speakbtn'; b.type = 'button'; b.setAttribute('aria-label','استمع'); b.innerHTML = ICON_PLAY;
  return b;
}
function makeCard(text){
  const card = document.createElement('div'); card.className = 'card';
  const txt = document.createElement('span'); txt.className = 'txt de'; txt.textContent = text;
  const btn = speakBtn(); btn.addEventListener('click', () => speak(text, card));
  card.appendChild(txt); card.appendChild(btn);
  card.dataset.search = text.toLowerCase();
  return card;
}
function makeQA(item){
  const wrap = document.createElement('div'); wrap.className = 'qa';
  const qRow = document.createElement('div'); qRow.className = 'qrow';
  const qTxt = document.createElement('span'); qTxt.className = 'txt de'; qTxt.textContent = item.q;
  const qBtn = speakBtn(); qBtn.addEventListener('click', () => speak(item.q, wrap));
  qRow.appendChild(qTxt); qRow.appendChild(qBtn); wrap.appendChild(qRow);
  if (item.a && item.a.length){
    const answers = document.createElement('div'); answers.className = 'answers';
    item.a.forEach(a => {
      const row = document.createElement('div'); row.className = 'arow';
      const aTxt = document.createElement('span'); aTxt.className = 'txt de'; aTxt.textContent = a;
      const aBtn = speakBtn(); aBtn.addEventListener('click', () => speak(a, wrap));
      row.appendChild(aTxt); row.appendChild(aBtn); answers.appendChild(row);
    });
    wrap.appendChild(answers);
  }
  wrap.dataset.search = (item.q + ' ' + (item.a||[]).join(' ')).toLowerCase();
  return wrap;
}
function makeLocation(item){
  const wrap = document.createElement('div'); wrap.className = 'loc-card';
  const title = document.createElement('div'); title.className = 'loc-title'; title.textContent = item.place;
  wrap.appendChild(title);
  function row(tagLabel, text, isWohin){
    const r = document.createElement('div'); r.className = 'loc-row' + (isWohin ? ' wohin' : '');
    const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = tagLabel;
    const txt = document.createElement('span'); txt.className = 'txt de'; txt.textContent = text;
    const btn = speakBtn(); btn.addEventListener('click', () => speak(text, wrap));
    r.appendChild(tag); r.appendChild(txt); r.appendChild(btn);
    return r;
  }
  wrap.appendChild(row('Wo', item.wo, false));
  item.wohin.forEach(w => wrap.appendChild(row('Wohin', w, true)));
  wrap.dataset.search = (item.place + ' ' + item.wo + ' ' + item.wohin.join(' ')).toLowerCase();
  return wrap;
}
function makeSequence(items){
  const ol = document.createElement('ol'); ol.className = 'seq';
  items.forEach(text => {
    const li = document.createElement('li');
    const txt = document.createElement('span'); txt.className = 'txt de'; txt.textContent = text;
    const btn = speakBtn(); btn.addEventListener('click', () => speak(text, li));
    li.appendChild(txt); li.appendChild(btn);
    li.dataset.search = text.toLowerCase();
    ol.appendChild(li);
  });
  return ol;
}
function makeImperative(item){
  const wrap = document.createElement('div'); wrap.className = 'loc-card';
  const title = document.createElement('div'); title.className = 'loc-title'; title.textContent = item.ar;
  wrap.appendChild(title);
  function row(tagLabel, text, cls){
    const r = document.createElement('div'); r.className = 'loc-row ' + cls;
    const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = tagLabel;
    const txt = document.createElement('span'); txt.className = 'txt de'; txt.textContent = text;
    const btn = speakBtn(); btn.addEventListener('click', () => speak(text, wrap));
    r.appendChild(tag); r.appendChild(txt); r.appendChild(btn);
    return r;
  }
  wrap.appendChild(row('du', item.du, 'du'));
  wrap.appendChild(row('ihr', item.ihr, 'ihr'));
  wrap.appendChild(row('Sie', item.sie, 'sie'));
  wrap.dataset.search = (item.ar + ' ' + item.du + ' ' + item.ihr + ' ' + item.sie).toLowerCase();
  return wrap;
}
function allTextsOf(cat){
  if (cat.type === 'flat') return cat.items;
  if (cat.type === 'sequence') return cat.items;
  if (cat.type === 'qa') return cat.items.flatMap(i => [i.q, ...(i.a||[])]);
  if (cat.type === 'location') return cat.items.flatMap(i => [i.wo, ...i.wohin]);
  if (cat.type === 'imperative') return cat.items.flatMap(i => [i.du, i.ihr, i.sie]);
  return [];
}

const nav = document.getElementById('index');
const main = document.getElementById('main');

DATA.forEach(cat => {
  const tab = document.createElement('button');
  tab.className = 'tab'; tab.type = 'button';
  tab.innerHTML = `${cat.ar}<span class="de">${cat.de}</span>`;
  tab.addEventListener('click', () => { document.getElementById('sec-' + cat.id).scrollIntoView({behavior:'smooth', block:'start'}); });
  nav.appendChild(tab);

  const section = document.createElement('section');
  section.className = 'category'; section.id = 'sec-' + cat.id;
  const head = document.createElement('div'); head.className = 'cat-head';
  const h2 = document.createElement('h2'); h2.innerHTML = `${cat.ar}<span class="de">${cat.de}</span>`;
  head.appendChild(h2);
  const playAllBtn = document.createElement('button');
  playAllBtn.className = 'playall'; playAllBtn.type = 'button'; playAllBtn.textContent = 'تشغيل الفئة كاملة';
  playAllBtn.addEventListener('click', () => playSequence(allTextsOf(cat)));
  head.appendChild(playAllBtn); section.appendChild(head);

  const body = document.createElement('div'); body.className = 'cards';
  if (cat.type === 'flat') cat.items.forEach(t => body.appendChild(makeCard(t)));
  else if (cat.type === 'qa') cat.items.forEach(it => body.appendChild(makeQA(it)));
  else if (cat.type === 'location') cat.items.forEach(it => body.appendChild(makeLocation(it)));
  else if (cat.type === 'sequence') body.appendChild(makeSequence(cat.items));
  section.appendChild(body); main.appendChild(section);
});

/* ---- Stories section ---- */
(function(){
  const tab = document.createElement('button');
  tab.className = 'tab special'; tab.type = 'button';
  tab.innerHTML = `القصص<span class="de">Geschichten</span>`;
  tab.addEventListener('click', () => document.getElementById('sec-stories').scrollIntoView({behavior:'smooth', block:'start'}));
  nav.appendChild(tab);

  const section = document.createElement('section');
  section.className = 'category'; section.id = 'sec-stories';
  const head = document.createElement('div'); head.className = 'cat-head';
  head.innerHTML = `<h2>القصص<span class="de">Geschichten</span></h2>`;
  section.appendChild(head);

  STORIES.forEach(story => {
    const card = document.createElement('div'); card.className = 'story-card story';
    const titleRow = document.createElement('div'); titleRow.className = 'story-title-row';
    const title = document.createElement('div'); title.className = 'story-title de'; title.textContent = story.title;
    const playAllBtn = document.createElement('button');
    playAllBtn.className = 'playall'; playAllBtn.type = 'button'; playAllBtn.textContent = 'قراءة القصة كاملة';
    playAllBtn.addEventListener('click', () => playSequence(story.paragraphs));
    titleRow.appendChild(title); titleRow.appendChild(playAllBtn);
    card.appendChild(titleRow);
    const arLine = document.createElement('div'); arLine.className = 'story-ar'; arLine.textContent = story.ar;
    card.appendChild(arLine);
    const body = document.createElement('div'); body.className = 'story-body';
    story.paragraphs.forEach(p => {
      const para = document.createElement('div'); para.className = 'story-para';
      const txt = document.createElement('span'); txt.className = 'txt de'; txt.textContent = p;
      const btn = speakBtn(); btn.addEventListener('click', () => speak(p, para));
      para.appendChild(txt); para.appendChild(btn);
      para.dataset.search = p.toLowerCase();
      body.appendChild(para);
    });
    card.appendChild(body);
    card.dataset.search = story.paragraphs.join(' ').toLowerCase() + ' ' + story.title.toLowerCase();
    section.appendChild(card);
  });
  main.appendChild(section);
})();

/* ---- Quiz section ---- */
(function(){
  const tab = document.createElement('button');
  tab.className = 'tab'; tab.type = 'button';
  tab.innerHTML = `🎧 لعبة الاستماع<span class="de">Listening Quiz</span>`;
  tab.addEventListener('click', () => document.getElementById('sec-quiz').scrollIntoView({behavior:'smooth', block:'start'}));
  nav.appendChild(tab);

  const section = document.createElement('section');
  section.className = 'category'; section.id = 'sec-quiz';
  const head = document.createElement('div'); head.className = 'cat-head';
  head.innerHTML = `<h2>لعبة الاستماع<span class="de">Listen & choose the translation</span></h2>`;
  section.appendChild(head);

  const catBar = document.createElement('div'); catBar.className = 'quiz-catbar';
  const allBtn = document.createElement('button');
  allBtn.className = 'quiz-catbtn active'; allBtn.type = 'button'; allBtn.textContent = 'كل الأقسام';
  allBtn.dataset.cat = 'all';
  catBar.appendChild(allBtn);
  DATA.forEach(cat => {
    if (!QUIZ_POOL.some(q => q.cat === cat.id)) return;
    const b = document.createElement('button');
    b.className = 'quiz-catbtn'; b.type = 'button'; b.textContent = cat.ar; b.dataset.cat = cat.id;
    catBar.appendChild(b);
  });
  section.appendChild(catBar);

  const quizCard = document.createElement('div'); quizCard.className = 'quiz-card';
  quizCard.innerHTML = `
    <div class="quiz-score" id="quizScore">النتيجة: 0 / 0</div>
    <button class="quiz-playbtn" id="quizPlay" type="button">${ICON_PLAY}<span>استمع للجملة</span></button>
    <div class="quiz-hint">اسمع الجملة الألمانية منيح، بعدين اختار ترجمتها الصحيحة بالإنجليزي</div>
    <div class="quiz-options" id="quizOptions"></div>
    <div class="quiz-reveal" id="quizReveal"></div>
    <button class="quiz-next" id="quizNext" type="button">السؤال التالي ←</button>
  `;
  section.appendChild(quizCard);
  main.appendChild(section);

  let score = 0, total = 0, current = null, answered = false, activeCat = 'all';

  function shuffle(arr){ return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(v=>v[1]); }
  function poolFor(catId){ return catId === 'all' ? QUIZ_POOL : QUIZ_POOL.filter(x => x.cat === catId); }

  function newQuestion(){
    answered = false;
    document.getElementById('quizReveal').textContent = '';
    document.getElementById('quizNext').classList.remove('show');
    const pool = poolFor(activeCat);
    current = pool[Math.floor(Math.random()*pool.length)];
    const distractorSource = pool.length >= 4 ? pool : QUIZ_POOL;
    let distractors = shuffle(distractorSource.filter(x => x.en !== current.en)).slice(0,3).map(x=>x.en);
    const options = shuffle([current.en, ...distractors]);
    const optWrap = document.getElementById('quizOptions');
    optWrap.innerHTML = '';
    options.forEach(optText => {
      const b = document.createElement('button');
      b.className = 'quiz-opt'; b.type = 'button'; b.textContent = optText;
      b.addEventListener('click', () => selectAnswer(b, optText));
      optWrap.appendChild(b);
    });
    speak(current.de, null);
  }

  function selectAnswer(btn, optText){
    if (answered) return;
    answered = true; total++;
    const correct = optText === current.en;
    if (correct) score++;
    document.querySelectorAll('.quiz-opt').forEach(b => {
      b.disabled = true;
      if (b.textContent === current.en) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
    });
    document.getElementById('quizScore').textContent = `النتيجة: ${score} / ${total}`;
    document.getElementById('quizReveal').innerHTML = `الجملة: <span class="de">${current.de}</span>`;
    document.getElementById('quizNext').classList.add('show');
  }

  catBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.quiz-catbtn');
    if (!btn) return;
    activeCat = btn.dataset.cat;
    catBar.querySelectorAll('.quiz-catbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    score = 0; total = 0;
    document.getElementById('quizScore').textContent = `النتيجة: 0 / 0`;
    newQuestion();
  });

  document.getElementById('quizPlay').addEventListener('click', () => { if (current) speak(current.de, null); });
  document.getElementById('quizNext').addEventListener('click', newQuestion);
  newQuestion();
})();

/* ---- active tab highlight on scroll ---- */
const sections = Array.from(document.querySelectorAll('section.category'));
const tabs = Array.from(nav.children);
tabs[0].classList.add('active');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){
      const idx = sections.indexOf(e.target);
      tabs.forEach(t => t.classList.remove('active'));
      if (idx > -1) tabs[idx].classList.add('active');
    }
  });
}, {rootMargin:'-10% 0px -70% 0px'});
sections.forEach(s => io.observe(s));

/* ---------- Search ---------- */
document.getElementById('search').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  sections.forEach((sec) => {
    let anyVisible = false;
    const nodes = sec.querySelectorAll('[data-search]');
    if (!nodes.length){ return; }
    nodes.forEach(node => {
      const match = !q || node.dataset.search.includes(q);
      node.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    sec.style.display = anyVisible ? '' : 'none';
  });
});
/* ---- Welcome Modal Slider ---- */
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('welcomeModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  if (!modal) return;

  // Prevent background scrolling while modal is open
  document.body.style.overflow = 'hidden';

  const slideInterval = setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 3000); // تغيير الصورة كل 3 ثواني

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    clearInterval(slideInterval);
    document.body.style.overflow = '';
  });
});