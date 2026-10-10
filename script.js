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
      'Im Internet findet man viele wichtige Informationen über die Ausbildung.',
      'Keine Sorge, ich schaffe es rechtzeitig zum Termin.',
      'Die Prüfung ist schwer, aber ich schaffe es.',
      'Ich bin nächste Woche geschäftlich in München.',
      'Wir haben uns nur geschäftlich getroffen.',
      'Wir treffen uns vor dem Unterricht.',
      'Nach der Arbeit gehe ich einkaufen.',
      'Ich habe in Syrien weniger als in Deutschland verdient.'
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
      'Ich bin erkältet und meine Nase läuft.',
      'Im Krankenhaus müssen wir das Profil des Patienten genau studieren, bevor wir ihm Medikamente geben.',
      'Als Pfleger kann ich Ihnen empfehlen, nach der Operation viel Wasser zu trinken.',
      'Herr Müller, was kann ich für Sie tun, damit der Schmerz weniger wird?',
      'Jeder Patient ist ein anderer Typ und geht anders mit seiner Krankheit um.',
      'In der Pflege muss man oft schwere Patienten heben, deshalb ist die richtige Technik für den Rücken sehr wichtig.',
      'Wenn Sie Schmerzen haben oder Hilfe brauchen, heben Sie bitte einfach die Hand.',
      'Wir heben das Glas auf deine bestandene Prüfung in der Krankenpflegeschule!',
      'Ein freundliches Lächeln kann die Stimmung der Patienten sofort heben.',
      'Diese Fortbildung wird das Niveau der Pflege in unserer Klinik deutlich heben.',
      'Wir arbeiten jeden Tag daran, die Qualität unserer medizinischen Versorgung zu heben.',
      'Wer im Krankenhaus im Schichtdienst arbeitet, muss zeitlich flexibel sein.',
      'Das ist ein schwerer Notfall.',
      'Das ist sicher nicht so schlimm.',
      'Nehmen Sie Platz.',
      'Was kann ich heute für Sie tun?',
      'Als Pfleger lernen wir, wie man mit verschiedenen Krankheiten umgeht.',
      'Der Patient klagt über Schmerzen im Kopf und seine Augen sind sehr rot. Das linke Auge tränt.',
      'Der Arzt muss das rechte Ohr untersuchen, weil dem Patienten beide Ohren wehtun.',
      'Trinken Sie Kamillentee, wenn Ihr Hals wehtut.',
      'Er hat Schmerzen in der Brust und sein Herz schlägt sehr schnell.',
      'Der Patient hat starke Bauchschmerzen, weil sein Magen das Essen nicht verträgt.',
      'In der Pflege ist es wichtig, auf den Rücken zu achten, wenn man Patienten hebt.',
      'Das linke Knie ist geschwollen, und beide Knie schmerzen beim Treppensteigen.',
      'Das ist ein Notfall! Bitte rufen Sie sofort den Krankenwagen und den Notarzt.',
      'Bei einem Herzinfarkt spüren die Patienten oft einen starken Druck auf der Brust.',
      'Nach dem Verkehrsunfall hat er sich am Arm verletzt; die Verletzung muss schnell behandelt werden.',
      'Die Wunde blutet stark, der Patient hat viel Blut verloren.',
      'Herr Müller, kommen Sie bitte ins Sprechzimmer Nummer drei, der Arzt wartet auf Sie.',
      'Der Chirurg muss das Knie sofort operieren; die Operation dauert zwei Stunden.',
      'Die Krankenschwester wird die Wunde reinigen und verbinden. Sie bekommen einen neuen Verband.',
      'Manchmal möchten die älteren Patienten einfach reden und dem Pfleger ihr Herz ausschütten.',
      'Sport und eine gute Ernährung sind wichtig für den ganzen Körper.',
      'Der Patient hat das Gefühl, dass er keine Luft mehr bekommt.',
      'Bei einem Herzinfarkt spüren viele ein starkes Druckgefühl auf der Brust.',
      'Husten ist ein typisches Symptom für eine Erkältung. Wenn die Symptome schlimmer werden, rufen Sie den Arzt.',
      'Viele ältere Patienten haben Angst vor der Operation im Krankenhaus.',
      'Machen Sie sich keine Sorgen, die Untersuchung tut nicht weh.',
      'Mach dir keine Sorgen, es ist nichts.',
      'Bei einem schweren Unfall können Menschen sterben, wenn der Notarzt zu spät kommt.',
      'Der Zimmernachbar des Patienten ist gestern Nacht leider gestorben.',
      'Ruhen Sie sich aus, dann sind Sie bald wieder gesund.',
      'Herr Müller, Sie müssen unbedingt mit dem Rauchen aufhören.',
      'Der Arzt ist gerade in der Sprechstunde. Sie können morgen zur Sprechstunde kommen.',
      'Der Patient sagt, dass die Medikamente nicht helfen, und ich glaube ihm.',
      'Wir müssen dem Patienten immer die Wahrheit über seine Diagnose sagen.',
      'Im Forum für Pflegekräfte können wir Fragen stellen und Ratschläge bekommen.',
      'Der Schmerz beginnt unten im Bauch und zieht nach oben.',
      'Die Notaufnahme ist unten im Erdgeschoss, die Kardiologie ist oben.',
      'Ich hoffe, es ist alles in Ordnung.',
      'Ist alles in Ordnung?',
      'Das finde ich aber traurig.'
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
      'Zahl die Rechnung an der Kasse!',
      'Gib deine Papiere im Büro ab!'
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
      'Zahlt die Rechnung an der Kasse!',
      'Gebt eure Papiere im Büro ab!'
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
      'Zahlen Sie die Rechnung an der Kasse!',
      'Geben Sie Ihre Papiere im Büro ab!'
    ]
  },
  {
    id:'adjektive', ar:'نهايات الصفات + مفردات متنوعة', de:'Adjektivendungen & weitere Ausdrücke', type:'flat',
    items:[
      'Der neue Kollege ist sehr sympathisch.',
      'Ein guter Freund hilft dir immer.',
      'Das kleine Kind spielt draußen.',
      'Eine warme Jacke ist im Winter wichtig.',
      'Kaltes Wasser ist im Sommer sehr erfrischend.',
      'Ich trinke jeden Morgen einen starken Kaffee.',
      'Wir suchen den alten Schlüssel.',
      'Er kauft ein neues Auto.',
      'Ich brauche eine günstige Wohnung im Zentrum.',
      'Hast du frisches Brot gekauft?',
      'Ich wünsche dir einen schönen Tag!',
      'Ich spreche mit dem neuen Arzt.',
      'Wir wohnen in einem alten Haus.',
      'Er hilft der alten Frau über die Straße.',
      'Nach einem langen Arbeitstag bin ich sehr müde.',
      'Die Kinder spielen mit den kleinen Hunden.',
      'Ich sitze auf dem bequemen Sofa.',
      'Mit freundlichen Grüßen.',
      'Ich habe großen Hunger und großen Durst.',
      'Wir hatten einen sehr schönen Urlaub in einem ruhigen Hotel.',
      'Kannst du das bitte langsam wiederholen?',
      'Wie viel darf es sein?',
      'Bei dem Termin heute wird mein Chef das Gespräch führen.',
      'Es ist nicht einfach, mit wütenden Patienten ein ruhiges Gespräch zu führen.',
      'Möchtest du Tee oder Kaffee? Ich trinke beides gern.',
      'Meine beiden Freunde lernen auch fleißig Deutsch.',
      'Die laute Musik geht mir auf die Nerven.',
      'Für die Arbeit im Krankenhaus braucht man starke Nerven.',
      'Haben Sie noch offen?',
      'Sie besichtigt Sehenswürdigkeiten nicht so gern.',
      'Wo kann ich hier Geld wechseln, bitte?',
      'Morgen machen wir eine Führung durch das Museum.',
      'Die Führung durch die Altstadt dauert etwa zwei Stunden.',
      'Wir spielen nachher Fußball. Möchtest du mitmachen?',
      'Bei diesem Gewinnspiel kann jeder mitmachen.',
      'Vergiss nicht, den Fernseher auszumachen, wenn du gehst!',
      'Wir müssen noch einen Termin für nächste Woche ausmachen.',
      'Ich hole dich heute Abend um 8 Uhr vom Bahnhof ab.',
      'Können Sie bitte mein Paket von der Post abholen?'
    ]
  },
  {
    id:'tourismus', ar:'السياحة: المعالم والإقامة والبقشيش', de:'Sightseeing, Unterkunft & Trinkgeld', type:'flat',
    items:[
      'Im Urlaub wollen wir viele alte Kirchen und Museen besichtigen.',
      'Wir besichtigen morgen unsere neue Wohnung.',
      'Das Brandenburger Tor ist eine berühmte Sehenswürdigkeit in Berlin.',
      'Diese Stadt hat viele interessante Sehenswürdigkeiten zu bieten.',
      'Der Rundgang durch das Schloss war sehr informativ.',
      'Wir machen heute einen kleinen Rundgang durch das Stadtzentrum.',
      'Ich habe einen Prospekt vom Hotel mitgebracht.',
      'Im Reisebüro gibt es viele Prospekte über Italien.',
      'Wir suchen noch eine günstige Unterkunft für unseren Urlaub.',
      'Die Unterkunft war sehr sauber und gemütlich.',
      'In Deutschland gibt man im Restaurant normalerweise etwa 10 Prozent Trinkgeld.',
      'Der Kellner war sehr freundlich, deshalb habe ich ihm ein gutes Trinkgeld gegeben.',
      'Ich muss auf der Bank noch Geld wechseln, bevor wir fliegen.',
      'Eine Schifffahrt auf dem Rhein ist sehr romantisch und entspannend.',
      'Wir haben am Wochenende eine kleine Schifffahrt gemacht.',
      'Er hat meine Kamera gefunden und mir ins Hotel gebracht.',
      'Komm, ich lade dich auf einen Kaffee ein.',
      'Ich freue mich auf dich.'
    ]
  },
  {
    id:'nachrichten', ar:'الرسائل والدعوات وجمل متنوعة', de:'Nachrichten, Einladungen & mehr', type:'flat',
    items:[
      'Ich schreibe eine Nachricht über unser neues Projekt.',
      'Ich schreibe eine Nachricht an meinen Freund.',
      'Ich habe eine Nachricht an den Chef geschrieben.',
      'Ich habe meinen Regenschirm im Zug liegen gelassen.',
      'Der Kellner hat uns das Essen gebracht.',
      'Darf ich dich zu meiner Geburtstagsparty einladen?',
      'Meine Kollegen haben mich zum Essen eingeladen.',
      'Er hat mich gestern auf einen Kaffee eingeladen.',
      'Zum Dank für deine Hilfe lade ich dich auf einen Kaffee ein.',
      'Das Brandenburger Tor ist sehr berühmt.',
      'Das alte Schloss in unserer Stadt ist wirklich sehenswert.',
      'Es war sehr kalt, es hat sogar geschneit!',
      'Ich verstehe diese abstrakte Kunst leider nicht.',
      'Der Höhepunkt der Reise war der Besuch im Museum.',
      'Er kommt heute Abend bestimmt zur Party.',
      'Die Leistung der Mannschaft war einfach großartig.',
      'Du musst deine Hausaufgaben bis morgen abgeben.',
      'Ich habe meine Unterlagen pünktlich im Büro abgegeben.',
      'Meine Nachbarn ärgern sich über die laute Musik.',
      'Es regnet, du solltest einen Regenschirm mitnehmen.',
      'Ich habe meinen kleinen Bruder ins Kino mitgenommen.',
      'Das können wir doch später auch machen.'
    ]
  },
  {
    id:'meinungen', ar:'رأيك وردّة الفعل', de:'Meinung & Reaktion', type:'flat',
    items:[
      'Muss das sein? Das ist doch langweilig.',
      'Das wird bestimmt toll!',
      'Was denkst du?',
      'Was denkt ihr?'
    ]
  },
  {
    id:'vorschlaege', ar:'الاقتراحات والموافقة والرفض + Was für ein', de:'Prüfung, Vorschläge & Zustimmung', type:'flat',
    items:[
      'Die Prüfung besteht aus einem schriftlichen und einem mündlichen Teil.',
      'Ich brauche diese Bestätigung bitte schriftlich.',
      'Wir haben den Vertrag nur mündlich vereinbart.',
      'Morgen habe ich meine mündliche Deutschprüfung.',
      'Du kannst mich per E-Mail bzw. per WhatsApp erreichen.',
      'Die Tickets kosten 10 Euro für Erwachsene bzw. 5 Euro für Studenten.',
      'Wir müssen einen neuen Termin mit dem Arzt vereinbaren.',
      'Die Aussicht von diesem Turm ist wirklich beeindruckend.',
      'Wollen wir lieber nicht zuerst in den Park gehen?',
      'Hast du Lust, heute Abend ins Kino zu gehen?',
      'Wie wäre es mit einer Pizza zum Abendessen?',
      'Lass uns am Wochenende Fußball spielen!',
      'Einverstanden.',
      'Also gut, machen wir es so.',
      'Das ist eine großartige Idee, ich bin dabei!',
      'Klingt super, das machen wir!',
      'Ich bin dagegen.',
      'Das können wir doch später auch machen.',
      'Muss das sein? Das ist doch langweilig.',
      'Darauf habe ich heute leider keine Lust.',
      'Ich finde diese Idee nicht so gut. Lass uns lieber etwas anderes machen.',
      'Was für ein Fest ist das?',
      'Was für ein Kaffee ist das?',
      'Was für ein Wagen ist das?',
      'Was für eine Schokolade ist das?',
      'Was für ein Buch ist das?',
      'Was für Bücher sind das?',
      'Darf ich eine Frage stellen?'
    ]
  },
  {
    id:'kultur-zeit', ar:'الماضي والمستقبل، الفعاليات، الملابس والثقافة', de:'Vergangenheit, Veranstaltungen, Kleidung & Kultur', type:'flat',
    items:[
      'In der Vergangenheit gab es keine Smartphones.',
      'Ich habe viel aus meiner Vergangenheit gelernt.',
      'Die Gegenwart ist die beste Zeit, um anzufangen.',
      'Die Zukunft wird voller Überraschungen sein.',
      'Die Ausstellung hat 2 Stunden gedauert.',
      'Der Krieg ist 15 Jahre her.',
      'Das ist ein wichtiger Teil der Geschichte.',
      'Was ist das für eine Geschichte?',
      'Im Sommer gibt es in unserer Stadt viele tolle Veranstaltungen.',
      'Die Veranstaltung beginnt heute Abend pünktlich um 20 Uhr.',
      'Wir haben am Wochenende ein schönes Fest gefeiert.',
      'Im Juli besuche ich ein großes Musikfestival.',
      'Das Konzert der Band war einfach großartig.',
      'Ich ziehe mich an.',
      'Ich ziehe mir meine Kleidung an.',
      'Ich ziehe mir eine Jacke an.',
      'Ich trage heute ein rotes Hemd.',
      'Ich ziehe mich aus.',
      'Ich ziehe mir meine Kleidung aus.',
      'Ich ziehe mir die Schuhe aus.',
      'Ich ziehe mich um.',
      'Geh raus, ich ziehe mich an.',
      'Geh bitte kurz raus, ich möchte mich umziehen.',
      'Könnten Sie bitte kurz rausgehen? Ich muss mich anziehen.',
      'Letztes Jahr waren wir auf einem Mittelalterfest.',
      'Morgen sind wir auf die Hochzeit meines Freundes eingeladen.',
      'Er interessiert sich sehr für moderne Kunst.',
      'Die neue Ausstellung im Museum ist sehr sehenswert.',
      'Das Theaterstück war traurig, aber sehr schön.',
      'Der Vortrag über Geschichte war sehr interessant.',
      'Nach dem Vortrag gab es eine lange Diskussionsrunde.',
      'Für die Prüfung müssen wir kurze Texte lesen und verstehen.',
      'Der Eintritt ist für Kinder unter 12 Jahren frei.',
      'Hast du die Eintrittskarten für das Kino schon gekauft?',
      'Studenten bekommen hier eine Ermäßigung auf den Preis.',
      'Der Künstler hat viele berühmte Bilder gemalt.',
      'Der Star des Abends hat alle Gäste begrüßt.',
      'Die Sängerin steht schon auf der Bühne.',
      'Für das Theaterstück braucht sie ein spezielles Kostüm.',
      'Dieser Parkplatz ist extra für Behinderte reserviert.',
      'Das Essen ist nicht schlecht, ich würde eher sagen, es ist gewöhnungsbedürftig.',
      'Er ist nicht faul, ich würde eher sagen, er ist heute nur müde.',
      'Das Projekt ist nicht unmöglich, aber ich würde eher sagen, es ist sehr schwierig.',
      'Ich würde eher sagen, wir verschieben den Termin auf nächste Woche.',
      'Der Termin wurde verschoben.',
      'Es war kein Fehler, ich würde eher sagen, es war eine wichtige Erfahrung.',
      'Das Treffen wird am Montag in meinem Büro stattfinden.',
      'Wir haben im Urlaub viele schöne Dinge erlebt.',
      'Die deutsche Kultur fasziniert mich sehr.',
      'Ich bin gestern den ganzen Tag zu Hause gewesen.',
      'Mal sehen, wie das Wetter morgen wird.',
      'Von morgen an werde ich jeden Tag Sport treiben.',
      'Komischerweise habe ich heute gar keinen Hunger.',
      'Niemand weiß, was die Zukunft bringt.',
      'Wir müssen positiv an die Zukunft denken.',
      'Meine Schulzeit ist schon viele Jahre her.',
      'Der König hat früher in diesem großen Schloss gewohnt.',
      'Geographisch gesehen liegt Deutschland im Zentrum Europas.',
      'Bei diesem Fest stehen die Kinder im Mittelpunkt.',
      'Dieser Parkplatz ist extra für Menschen mit Behinderung reserviert.',
      'Wie sieht es bei dir aus?'
    ]
  },
  {
    id:'zeitangaben', ar:'تحديد الوقت: von … bis · ab · seit', de:'Zeitangaben: von … bis, ab, seit', type:'flat',
    items:[
      'Mein Urlaub dauert vom 10. bis zum 15. Juli.',
      'Das Museum ist vom ersten bis zum fünften August geschlossen.',
      'Von morgen an beginne ich, Sport zu machen.',
      'Vom zweiten März an arbeite ich in der neuen Firma.',
      'Von jetzt an lerne ich jeden Tag Deutsch.',
      'Ab wann bist du morgen im Büro?',
      'Ab wann gelten die neuen Regeln?',
      'Ab morgen rauche ich nicht mehr.',
      'Ab Samstag habe ich endlich Urlaub.',
      'Ab dem 10. Juli bin ich nicht mehr erreichbar.',
      'Die Fahrkarten sind ab dem ersten August teurer.',
      'Die Veranstaltung findet seit 1979 jedes Jahr in Linz statt.',
      'Seit dem ersten August wohne ich in Berlin.',
      'Wie lange arbeitest du schon hier?',
      'Über 30 Jahre.',
      'Mehr als ein Jahr.',
      'Länger als sechs Monate.',
      'Ich fahre für eine Woche nach Frankreich.',
      'Der Zug fährt in zehn Minuten ab.',
      'Die Arbeit beginnt in 10 Minuten, ich muss los.',
      'Mit mir und dir ist es aus.',
      'Als Student zahlst du 33 statt 50 Euro.',
      'Was hältst du davon?',
      'Darf ich etwas vorschlagen?',
      'Willst du zur Party mitkommen?',
      'Du hast doch gesagt, das würde dich interessieren.'
    ]
  },
  {
    id:'verabredungen', ar:'المواعيد والموافقة والرفض', de:'Verabredungen, Zustimmung & Ablehnung', type:'flat',
    items:[
      'Wir haben uns für morgen Nachmittag verabredet.',
      'Ich möchte mich gerne mit dir auf einen Kaffee verabreden.',
      'Leider muss ich deine Einladung ablehnen, weil ich arbeiten muss.',
      'Er hat das Angebot der Firma abgelehnt.',
      'Ich stimme dir voll und ganz zu.',
      'Der Chef hat meinem Vorschlag zugestimmt.',
      'Unser Treffpunkt ist morgen um 8 Uhr vor dem Bahnhof.',
      'Können wir einen anderen Treffpunkt vereinbaren?',
      'Lass uns doch heute Abend ins Kino gehen!',
      'Lass uns doch am Wochenende zusammen für die Prüfung lernen.',
      'Wie wäre es mit einem kurzen Spaziergang im Park?',
      'Ich habe die Hausaufgabe nicht geschafft.',
      'Ich würde lieber zu Hause bleiben, ich bin heute sehr müde.',
      'Ins Kino? Ich würde lieber ins Theater gehen.',
      'Ich muss es schaffen.',
      'Das schaffen Sie sicher.'
    ]
  },
  {
    id:'gewicht', ar:'الوزن والنصائح والاقتراحات', de:'Gewicht, Ratschläge & Vorschläge', type:'flat',
    items:[
      'Wie viel wiegst du?',
      'Ich wiege 70 Kilo.',
      'Kannst du bitte abnehmen?',
      'Ja, meistens abends.',
      'Das hat mir circa 1500 Euro gekostet.',
      'Ich habe in Syrien wenig verdient.',
      'Sie möchte bis zum Sommer fünf Kilo abnehmen.',
      'Wow, du siehst toll aus! Hast du abgenommen?',
      'Der Koffer darf nicht mehr als 20 Kilo wiegen.',
      'Nach dieser Diät werde ich bestimmt weniger wiegen.',
      'Laufen Sie einfach weiter geradeaus, dann sehen Sie den Bahnhof.',
      'Der Text ist sehr interessant, bitte lesen Sie weiter.',
      'Das ist eine tolle Arbeit, mach so weiter!',
      'Ich rufe an, um einen Termin mit dem Arzt zu vereinbaren.',
      'Wir haben vereinbart, uns morgen um 14 Uhr zu treffen.',
      'Wie vereinbart, schicke ich Ihnen die Dokumente per E-Mail.',
      'Nach der harten Arbeit hast du eine Pause verdient.',
      'Kann ich mir von dir 10 Euro leihen?',
      'Ich muss mir ein Buch von meinem Freund leihen.',
      'Ich habe mir dieses Auto von meinem Freund geliehen.',
      'Der Weg zum Bahnhof dauert circa zehn Minuten.',
      'Das neue Handy kostet circa 500 Euro.',
      'Dein Rat war wirklich sehr nützlich für mich.',
      'Fremdsprachen zu lernen ist immer nützlich.',
      'Was schlägst du vor?',
      'Sie sollten regelmäßig Sport machen.',
      'Deine Ratschläge sind immer sehr nützlich für mich.',
      'Ich brauche ein paar gute Ratschläge für mein Studium.',
      'Darf ich dir einen guten Ratschlag geben?',
      'Der Arzt hat mir den Ratschlag gegeben, mehr Wasser zu trinken.',
      'Wir haben im Meeting viele neue Vorschläge diskutiert.',
      'Ich möchte einen Vorschlag machen: Lass uns morgen früh anfangen.',
      'Mein Kollege hat vorgeschlagen, die Deadline zu verschieben.',
      'Der Trainer hat mir einen neuen Fitnessplan geschrieben.',
      'Neben dem Training ist ein gesunder Ernährungsplan sehr wichtig.',
      'Nach der Arbeit muss ich mich ein bisschen ausruhen.',
      'Ruh dich gut aus, du siehst müde aus.',
      'Um fit zu bleiben, muss man regelmäßig Sport machen.',
      'Ich kontrolliere mein Gewicht einmal pro Woche.',
      'Er hat viel Gewicht verloren.',
      'Du solltest früher ins Bett gehen, damit du morgen fit bist.',
      'Sie sollten dieses Medikament regelmäßig einnehmen.',
      'Wir sollten uns beeilen, sonst verpassen wir den Zug.',
      'Du solltest nicht so viel Kaffee trinken, das ist nicht gut für deine Nerven.',
      'Sie sollten sich nach der Operation gut ausruhen.',
      'Wir könnten am Wochenende zusammen ins Kino gehen, wenn du Lust hast.',
      'Du könntest den Lehrer fragen, wenn du die Aufgabe nicht verstehst.',
      'Wir könnten eine Pause machen und einen Kaffee trinken.',
      'Sie könnten diesen Ernährungsplan ausprobieren, um Gewicht abzunehmen.',
      'Ich bin gern an der frischen Luft.'
    ]
  },
  {
    id:'gefuehle-pflege', ar:'المشاعر والتعاطف بالتمريض', de:'Gefühle & Empathie in der Pflege', type:'flat',
    items:[
      'Die Frau hat große Sorge um ihren kranken Mann.',
      'In der Pflege ist Empathie wichtig, aber zu viel Mitleid kann anstrengend sein.',
      'Die Hoffnung auf eine schnelle Besserung ist groß.',
      'Frau Müller, wie fühlen Sie sich heute Morgen?',
      'Ich fühle mich nach der Nachtschicht immer sehr müde.',
      'Der Patient kann seine Schmerzen nicht gut mit Worten ausdrücken.',
      'Ich möchte Ihnen mein tiefes Mitgefühl ausdrücken.',
      'Es ist wichtig, dass der Patient dem Arzt und dem Pfleger vertraut.',
      'Sie können mir vertrauen, ich bin für Sie da.',
      'Der Arzt fragt den Patienten nach dem Grund für seine Bauchschmerzen.',
      'Die ständige Müdigkeit ist eine Folge von zu wenig Schlaf.',
      'Weil der Patient stark blutet, muss er sofort operiert werden.',
      'Der Patient blutet stark, deshalb muss er sofort operiert werden.',
      'Du siehst heute sehr blass aus, hoffentlich hast du nichts Schlimmes.'
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
      'Dann hat mein Arbeitstag begonnen, und ich habe von 10 bis 18 Uhr gearbeitet.',
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
  {cat:'imperativ-sie', de:'Beeilen Sie sich, wir sind spät dran!', en:'Hurry up, we are running late! (formal)'},

  {cat:'arbeit', de:'Keine Sorge, ich schaffe es rechtzeitig zum Termin.', en:'Don’t worry, I will make it to the appointment on time.'},
  {cat:'arbeit', de:'Die Prüfung ist schwer, aber ich schaffe es.', en:'The exam is hard, but I will manage it.'},
  {cat:'arbeit', de:'Ich bin nächste Woche geschäftlich in München.', en:'Next week I am in Munich on business.'},
  {cat:'arbeit', de:'Wir haben uns nur geschäftlich getroffen.', en:'We only met on a business basis.'},
  {cat:'arbeit', de:'Wir treffen uns vor dem Unterricht.', en:'We are meeting before the class.'},
  {cat:'arbeit', de:'Nach der Arbeit gehe ich einkaufen.', en:'After work I go shopping.'},
  {cat:'arbeit', de:'Ich habe in Syrien weniger als in Deutschland verdient.', en:'I earned less in Syria than in Germany.'},
  {cat:'gesundheit', de:'Im Krankenhaus müssen wir das Profil des Patienten genau studieren, bevor wir ihm Medikamente geben.', en:'In the hospital we have to study the patient’s profile carefully before giving him medication.'},
  {cat:'gesundheit', de:'Als Pfleger kann ich Ihnen empfehlen, nach der Operation viel Wasser zu trinken.', en:'As a nurse I can recommend that you drink a lot of water after the operation.'},
  {cat:'gesundheit', de:'Herr Müller, was kann ich für Sie tun, damit der Schmerz weniger wird?', en:'Mr. Müller, what can I do for you so that the pain gets better?'},
  {cat:'gesundheit', de:'Jeder Patient ist ein anderer Typ und geht anders mit seiner Krankheit um.', en:'Every patient is a different type and deals with his illness differently.'},
  {cat:'gesundheit', de:'In der Pflege muss man oft schwere Patienten heben, deshalb ist die richtige Technik für den Rücken sehr wichtig.', en:'In nursing you often have to lift heavy patients, so the right technique for your back is very important.'},
  {cat:'gesundheit', de:'Wenn Sie Schmerzen haben oder Hilfe brauchen, heben Sie bitte einfach die Hand.', en:'If you are in pain or need help, please just raise your hand.'},
  {cat:'gesundheit', de:'Wir heben das Glas auf deine bestandene Prüfung in der Krankenpflegeschule!', en:'We raise our glass to your passed exam at the nursing school!'},
  {cat:'gesundheit', de:'Ein freundliches Lächeln kann die Stimmung der Patienten sofort heben.', en:'A friendly smile can immediately lift the patients’ mood.'},
  {cat:'gesundheit', de:'Diese Fortbildung wird das Niveau der Pflege in unserer Klinik deutlich heben.', en:'This training will significantly raise the level of care at our clinic.'},
  {cat:'gesundheit', de:'Wir arbeiten jeden Tag daran, die Qualität unserer medizinischen Versorgung zu heben.', en:'Every day we work on improving the quality of our medical care.'},
  {cat:'gesundheit', de:'Wer im Krankenhaus im Schichtdienst arbeitet, muss zeitlich flexibel sein.', en:'Anyone who works shifts in a hospital has to be flexible with their time.'},
  {cat:'gesundheit', de:'Das ist ein schwerer Notfall.', en:'This is a serious emergency.'},
  {cat:'gesundheit', de:'Das ist sicher nicht so schlimm.', en:'It’s surely not that bad.'},
  {cat:'gesundheit', de:'Nehmen Sie Platz.', en:'Please take a seat.'},
  {cat:'gesundheit', de:'Was kann ich heute für Sie tun?', en:'What can I do for you today?'},
  {cat:'gesundheit', de:'Als Pfleger lernen wir, wie man mit verschiedenen Krankheiten umgeht.', en:'As nurses we learn how to deal with different illnesses.'},
  {cat:'gesundheit', de:'Der Patient klagt über Schmerzen im Kopf und seine Augen sind sehr rot. Das linke Auge tränt.', en:'The patient complains of pain in the head and his eyes are very red. The left eye is watering.'},
  {cat:'gesundheit', de:'Der Arzt muss das rechte Ohr untersuchen, weil dem Patienten beide Ohren wehtun.', en:'The doctor has to examine the right ear because both of the patient’s ears hurt.'},
  {cat:'gesundheit', de:'Trinken Sie Kamillentee, wenn Ihr Hals wehtut.', en:'Drink chamomile tea if your throat hurts.'},
  {cat:'gesundheit', de:'Er hat Schmerzen in der Brust und sein Herz schlägt sehr schnell.', en:'He has pain in his chest and his heart is beating very fast.'},
  {cat:'gesundheit', de:'Der Patient hat starke Bauchschmerzen, weil sein Magen das Essen nicht verträgt.', en:'The patient has severe stomach pain because his stomach cannot tolerate the food.'},
  {cat:'gesundheit', de:'In der Pflege ist es wichtig, auf den Rücken zu achten, wenn man Patienten hebt.', en:'In nursing it is important to look after your back when lifting patients.'},
  {cat:'gesundheit', de:'Das linke Knie ist geschwollen, und beide Knie schmerzen beim Treppensteigen.', en:'The left knee is swollen, and both knees hurt when climbing stairs.'},
  {cat:'gesundheit', de:'Das ist ein Notfall! Bitte rufen Sie sofort den Krankenwagen und den Notarzt.', en:'This is an emergency! Please call the ambulance and the emergency doctor immediately.'},
  {cat:'gesundheit', de:'Bei einem Herzinfarkt spüren die Patienten oft einen starken Druck auf der Brust.', en:'During a heart attack, patients often feel strong pressure on the chest.'},
  {cat:'gesundheit', de:'Nach dem Verkehrsunfall hat er sich am Arm verletzt; die Verletzung muss schnell behandelt werden.', en:'After the traffic accident he injured his arm; the injury must be treated quickly.'},
  {cat:'gesundheit', de:'Die Wunde blutet stark, der Patient hat viel Blut verloren.', en:'The wound is bleeding heavily, the patient has lost a lot of blood.'},
  {cat:'gesundheit', de:'Herr Müller, kommen Sie bitte ins Sprechzimmer Nummer drei, der Arzt wartet auf Sie.', en:'Mr. Müller, please come to consulting room number three, the doctor is waiting for you.'},
  {cat:'gesundheit', de:'Der Chirurg muss das Knie sofort operieren; die Operation dauert zwei Stunden.', en:'The surgeon has to operate on the knee immediately; the operation takes two hours.'},
  {cat:'gesundheit', de:'Die Krankenschwester wird die Wunde reinigen und verbinden. Sie bekommen einen neuen Verband.', en:'The nurse will clean and bandage the wound. You will get a new dressing.'},
  {cat:'gesundheit', de:'Manchmal möchten die älteren Patienten einfach reden und dem Pfleger ihr Herz ausschütten.', en:'Sometimes older patients simply want to talk and pour their heart out to the nurse.'},
  {cat:'gesundheit', de:'Sport und eine gute Ernährung sind wichtig für den ganzen Körper.', en:'Sports and a good diet are important for the whole body.'},
  {cat:'gesundheit', de:'Der Patient hat das Gefühl, dass er keine Luft mehr bekommt.', en:'The patient feels like he can’t get any more air.'},
  {cat:'gesundheit', de:'Bei einem Herzinfarkt spüren viele ein starkes Druckgefühl auf der Brust.', en:'During a heart attack, many people feel a strong feeling of pressure on the chest.'},
  {cat:'gesundheit', de:'Husten ist ein typisches Symptom für eine Erkältung. Wenn die Symptome schlimmer werden, rufen Sie den Arzt.', en:'Coughing is a typical symptom of a cold. If the symptoms get worse, call the doctor.'},
  {cat:'gesundheit', de:'Viele ältere Patienten haben Angst vor der Operation im Krankenhaus.', en:'Many older patients are afraid of the operation at the hospital.'},
  {cat:'gesundheit', de:'Machen Sie sich keine Sorgen, die Untersuchung tut nicht weh.', en:'Don’t worry, the examination doesn’t hurt. (formal)'},
  {cat:'gesundheit', de:'Mach dir keine Sorgen, es ist nichts.', en:'Don’t worry, it’s nothing. (informal)'},
  {cat:'gesundheit', de:'Bei einem schweren Unfall können Menschen sterben, wenn der Notarzt zu spät kommt.', en:'In a serious accident people can die if the emergency doctor arrives too late.'},
  {cat:'gesundheit', de:'Der Zimmernachbar des Patienten ist gestern Nacht leider gestorben.', en:'The patient’s roommate unfortunately died last night.'},
  {cat:'gesundheit', de:'Ruhen Sie sich aus, dann sind Sie bald wieder gesund.', en:'Rest, then you will soon be healthy again. (formal)'},
  {cat:'gesundheit', de:'Herr Müller, Sie müssen unbedingt mit dem Rauchen aufhören.', en:'Mr. Müller, you absolutely must stop smoking.'},
  {cat:'gesundheit', de:'Der Arzt ist gerade in der Sprechstunde. Sie können morgen zur Sprechstunde kommen.', en:'The doctor is in office hours right now. You can come to the consultation tomorrow.'},
  {cat:'gesundheit', de:'Der Patient sagt, dass die Medikamente nicht helfen, und ich glaube ihm.', en:'The patient says that the medication doesn’t help, and I believe him.'},
  {cat:'gesundheit', de:'Wir müssen dem Patienten immer die Wahrheit über seine Diagnose sagen.', en:'We must always tell the patient the truth about his diagnosis.'},
  {cat:'gesundheit', de:'Im Forum für Pflegekräfte können wir Fragen stellen und Ratschläge bekommen.', en:'In the forum for nursing staff we can ask questions and get advice.'},
  {cat:'gesundheit', de:'Der Schmerz beginnt unten im Bauch und zieht nach oben.', en:'The pain starts low in the stomach and moves upward.'},
  {cat:'gesundheit', de:'Die Notaufnahme ist unten im Erdgeschoss, die Kardiologie ist oben.', en:'The emergency room is downstairs on the ground floor, the cardiology is upstairs.'},
  {cat:'gesundheit', de:'Ich hoffe, es ist alles in Ordnung.', en:'I hope everything is okay.'},
  {cat:'gesundheit', de:'Ist alles in Ordnung?', en:'Is everything okay?'},
  {cat:'gesundheit', de:'Das finde ich aber traurig.', en:'I find that quite sad.'},
  {cat:'imperativ-du', de:'Gib deine Papiere im Büro ab!', en:'Hand in your papers at the office!'},
  {cat:'imperativ-ihr', de:'Gebt eure Papiere im Büro ab!', en:'Hand in your papers at the office! (to a group)'},
  {cat:'imperativ-sie', de:'Geben Sie Ihre Papiere im Büro ab!', en:'Hand in your papers at the office! (formal)'},
  {cat:'adjektive', de:'Der neue Kollege ist sehr sympathisch.', en:'The new colleague is very likeable.'},
  {cat:'adjektive', de:'Ein guter Freund hilft dir immer.', en:'A good friend always helps you.'},
  {cat:'adjektive', de:'Das kleine Kind spielt draußen.', en:'The little child is playing outside.'},
  {cat:'adjektive', de:'Eine warme Jacke ist im Winter wichtig.', en:'A warm jacket is important in winter.'},
  {cat:'adjektive', de:'Kaltes Wasser ist im Sommer sehr erfrischend.', en:'Cold water is very refreshing in summer.'},
  {cat:'adjektive', de:'Ich trinke jeden Morgen einen starken Kaffee.', en:'I drink a strong coffee every morning.'},
  {cat:'adjektive', de:'Wir suchen den alten Schlüssel.', en:'We are looking for the old key.'},
  {cat:'adjektive', de:'Er kauft ein neues Auto.', en:'He is buying a new car.'},
  {cat:'adjektive', de:'Ich brauche eine günstige Wohnung im Zentrum.', en:'I need an affordable apartment in the city center.'},
  {cat:'adjektive', de:'Hast du frisches Brot gekauft?', en:'Did you buy fresh bread?'},
  {cat:'adjektive', de:'Ich wünsche dir einen schönen Tag!', en:'I wish you a nice day!'},
  {cat:'adjektive', de:'Ich spreche mit dem neuen Arzt.', en:'I am talking to the new doctor.'},
  {cat:'adjektive', de:'Wir wohnen in einem alten Haus.', en:'We live in an old house.'},
  {cat:'adjektive', de:'Er hilft der alten Frau über die Straße.', en:'He helps the old woman across the street.'},
  {cat:'adjektive', de:'Nach einem langen Arbeitstag bin ich sehr müde.', en:'After a long workday I am very tired.'},
  {cat:'adjektive', de:'Die Kinder spielen mit den kleinen Hunden.', en:'The children are playing with the small dogs.'},
  {cat:'adjektive', de:'Ich sitze auf dem bequemen Sofa.', en:'I am sitting on the comfortable sofa.'},
  {cat:'adjektive', de:'Mit freundlichen Grüßen.', en:'Kind regards.'},
  {cat:'adjektive', de:'Ich habe großen Hunger und großen Durst.', en:'I am very hungry and very thirsty.'},
  {cat:'adjektive', de:'Wir hatten einen sehr schönen Urlaub in einem ruhigen Hotel.', en:'We had a very nice vacation in a quiet hotel.'},
  {cat:'adjektive', de:'Kannst du das bitte langsam wiederholen?', en:'Can you please repeat that slowly?'},
  {cat:'adjektive', de:'Wie viel darf es sein?', en:'How much would you like? (at a counter)'},
  {cat:'adjektive', de:'Bei dem Termin heute wird mein Chef das Gespräch führen.', en:'My boss will lead the conversation at today’s appointment.'},
  {cat:'adjektive', de:'Es ist nicht einfach, mit wütenden Patienten ein ruhiges Gespräch zu führen.', en:'It is not easy to have a calm conversation with angry patients.'},
  {cat:'adjektive', de:'Möchtest du Tee oder Kaffee? Ich trinke beides gern.', en:'Would you like tea or coffee? I like both.'},
  {cat:'adjektive', de:'Meine beiden Freunde lernen auch fleißig Deutsch.', en:'Both of my friends are also learning German diligently.'},
  {cat:'adjektive', de:'Die laute Musik geht mir auf die Nerven.', en:'The loud music gets on my nerves.'},
  {cat:'adjektive', de:'Für die Arbeit im Krankenhaus braucht man starke Nerven.', en:'You need strong nerves to work in a hospital.'},
  {cat:'adjektive', de:'Haben Sie noch offen?', en:'Are you still open?'},
  {cat:'adjektive', de:'Sie besichtigt Sehenswürdigkeiten nicht so gern.', en:'She doesn’t like visiting sights very much.'},
  {cat:'adjektive', de:'Wo kann ich hier Geld wechseln, bitte?', en:'Where can I exchange money here, please?'},
  {cat:'adjektive', de:'Morgen machen wir eine Führung durch das Museum.', en:'Tomorrow we are taking a guided tour of the museum.'},
  {cat:'adjektive', de:'Die Führung durch die Altstadt dauert etwa zwei Stunden.', en:'The guided tour through the old town takes about two hours.'},
  {cat:'adjektive', de:'Wir spielen nachher Fußball. Möchtest du mitmachen?', en:'We are playing soccer later. Would you like to join in?'},
  {cat:'adjektive', de:'Bei diesem Gewinnspiel kann jeder mitmachen.', en:'Anyone can take part in this prize draw.'},
  {cat:'adjektive', de:'Vergiss nicht, den Fernseher auszumachen, wenn du gehst!', en:'Don’t forget to turn off the TV when you leave!'},
  {cat:'adjektive', de:'Wir müssen noch einen Termin für nächste Woche ausmachen.', en:'We still need to arrange an appointment for next week.'},
  {cat:'adjektive', de:'Ich hole dich heute Abend um 8 Uhr vom Bahnhof ab.', en:'I will pick you up from the station tonight at 8 o’clock.'},
  {cat:'adjektive', de:'Können Sie bitte mein Paket von der Post abholen?', en:'Could you please pick up my package from the post office?'},
  {cat:'tourismus', de:'Im Urlaub wollen wir viele alte Kirchen und Museen besichtigen.', en:'On vacation we want to visit many old churches and museums.'},
  {cat:'tourismus', de:'Wir besichtigen morgen unsere neue Wohnung.', en:'We are going to view our new apartment tomorrow.'},
  {cat:'tourismus', de:'Das Brandenburger Tor ist eine berühmte Sehenswürdigkeit in Berlin.', en:'The Brandenburg Gate is a famous sight in Berlin.'},
  {cat:'tourismus', de:'Diese Stadt hat viele interessante Sehenswürdigkeiten zu bieten.', en:'This city has many interesting sights to offer.'},
  {cat:'tourismus', de:'Der Rundgang durch das Schloss war sehr informativ.', en:'The tour through the castle was very informative.'},
  {cat:'tourismus', de:'Wir machen heute einen kleinen Rundgang durch das Stadtzentrum.', en:'Today we are taking a short walk around the city center.'},
  {cat:'tourismus', de:'Ich habe einen Prospekt vom Hotel mitgebracht.', en:'I brought a brochure from the hotel.'},
  {cat:'tourismus', de:'Im Reisebüro gibt es viele Prospekte über Italien.', en:'The travel agency has many brochures about Italy.'},
  {cat:'tourismus', de:'Wir suchen noch eine günstige Unterkunft für unseren Urlaub.', en:'We are still looking for affordable accommodation for our vacation.'},
  {cat:'tourismus', de:'Die Unterkunft war sehr sauber und gemütlich.', en:'The accommodation was very clean and cozy.'},
  {cat:'tourismus', de:'In Deutschland gibt man im Restaurant normalerweise etwa 10 Prozent Trinkgeld.', en:'In Germany you normally tip about 10 percent at a restaurant.'},
  {cat:'tourismus', de:'Der Kellner war sehr freundlich, deshalb habe ich ihm ein gutes Trinkgeld gegeben.', en:'The waiter was very friendly, so I gave him a good tip.'},
  {cat:'tourismus', de:'Ich muss auf der Bank noch Geld wechseln, bevor wir fliegen.', en:'I still need to exchange money at the bank before we fly.'},
  {cat:'tourismus', de:'Eine Schifffahrt auf dem Rhein ist sehr romantisch und entspannend.', en:'A boat trip on the Rhine is very romantic and relaxing.'},
  {cat:'tourismus', de:'Wir haben am Wochenende eine kleine Schifffahrt gemacht.', en:'We took a short boat trip on the weekend.'},
  {cat:'tourismus', de:'Er hat meine Kamera gefunden und mir ins Hotel gebracht.', en:'He found my camera and brought it to me at the hotel.'},
  {cat:'tourismus', de:'Komm, ich lade dich auf einen Kaffee ein.', en:'Come on, I’ll treat you to a coffee.'},
  {cat:'tourismus', de:'Ich freue mich auf dich.', en:'I’m looking forward to seeing you.'},
  {cat:'nachrichten', de:'Ich schreibe eine Nachricht über unser neues Projekt.', en:'I am writing a message about our new project.'},
  {cat:'nachrichten', de:'Ich schreibe eine Nachricht an meinen Freund.', en:'I am writing a message to my friend.'},
  {cat:'nachrichten', de:'Ich habe eine Nachricht an den Chef geschrieben.', en:'I wrote a message to the boss.'},
  {cat:'nachrichten', de:'Ich habe meinen Regenschirm im Zug liegen gelassen.', en:'I left my umbrella on the train.'},
  {cat:'nachrichten', de:'Der Kellner hat uns das Essen gebracht.', en:'The waiter brought us the food.'},
  {cat:'nachrichten', de:'Darf ich dich zu meiner Geburtstagsparty einladen?', en:'May I invite you to my birthday party?'},
  {cat:'nachrichten', de:'Meine Kollegen haben mich zum Essen eingeladen.', en:'My colleagues invited me to dinner.'},
  {cat:'nachrichten', de:'Er hat mich gestern auf einen Kaffee eingeladen.', en:'He invited me for a coffee yesterday.'},
  {cat:'nachrichten', de:'Zum Dank für deine Hilfe lade ich dich auf einen Kaffee ein.', en:'To thank you for your help, I’ll treat you to a coffee.'},
  {cat:'nachrichten', de:'Das Brandenburger Tor ist sehr berühmt.', en:'The Brandenburg Gate is very famous.'},
  {cat:'nachrichten', de:'Das alte Schloss in unserer Stadt ist wirklich sehenswert.', en:'The old castle in our city is really worth seeing.'},
  {cat:'nachrichten', de:'Es war sehr kalt, es hat sogar geschneit!', en:'It was very cold, it even snowed!'},
  {cat:'nachrichten', de:'Ich verstehe diese abstrakte Kunst leider nicht.', en:'Unfortunately I don’t understand this abstract art.'},
  {cat:'nachrichten', de:'Der Höhepunkt der Reise war der Besuch im Museum.', en:'The highlight of the trip was the visit to the museum.'},
  {cat:'nachrichten', de:'Er kommt heute Abend bestimmt zur Party.', en:'He will definitely come to the party tonight.'},
  {cat:'nachrichten', de:'Die Leistung der Mannschaft war einfach großartig.', en:'The team’s performance was simply great.'},
  {cat:'nachrichten', de:'Du musst deine Hausaufgaben bis morgen abgeben.', en:'You have to hand in your homework by tomorrow.'},
  {cat:'nachrichten', de:'Ich habe meine Unterlagen pünktlich im Büro abgegeben.', en:'I handed in my documents at the office on time.'},
  {cat:'nachrichten', de:'Meine Nachbarn ärgern sich über die laute Musik.', en:'My neighbors are annoyed about the loud music.'},
  {cat:'nachrichten', de:'Es regnet, du solltest einen Regenschirm mitnehmen.', en:'It’s raining, you should take an umbrella.'},
  {cat:'nachrichten', de:'Ich habe meinen kleinen Bruder ins Kino mitgenommen.', en:'I took my little brother to the cinema.'},
  {cat:'nachrichten', de:'Das können wir doch später auch machen.', en:'We can do that later too, can’t we?'},
  {cat:'meinungen', de:'Muss das sein? Das ist doch langweilig.', en:'Do we have to? That’s boring.'},
  {cat:'meinungen', de:'Das wird bestimmt toll!', en:'It’s definitely going to be great!'},
  {cat:'meinungen', de:'Was denkst du?', en:'What do you think? (to one person)'},
  {cat:'meinungen', de:'Was denkt ihr?', en:'What do you think? (to a group)'},
  {cat:'vorschlaege', de:'Die Prüfung besteht aus einem schriftlichen und einem mündlichen Teil.', en:'The exam consists of a written part and an oral part.'},
  {cat:'vorschlaege', de:'Ich brauche diese Bestätigung bitte schriftlich.', en:'I need this confirmation in writing, please.'},
  {cat:'vorschlaege', de:'Wir haben den Vertrag nur mündlich vereinbart.', en:'We only agreed on the contract verbally.'},
  {cat:'vorschlaege', de:'Morgen habe ich meine mündliche Deutschprüfung.', en:'Tomorrow I have my oral German exam.'},
  {cat:'vorschlaege', de:'Du kannst mich per E-Mail bzw. per WhatsApp erreichen.', en:'You can reach me by email or alternatively by WhatsApp.'},
  {cat:'vorschlaege', de:'Die Tickets kosten 10 Euro für Erwachsene bzw. 5 Euro für Studenten.', en:'The tickets cost 10 euros for adults and 5 euros for students respectively.'},
  {cat:'vorschlaege', de:'Wir müssen einen neuen Termin mit dem Arzt vereinbaren.', en:'We need to arrange a new appointment with the doctor.'},
  {cat:'vorschlaege', de:'Die Aussicht von diesem Turm ist wirklich beeindruckend.', en:'The view from this tower is truly impressive.'},
  {cat:'vorschlaege', de:'Wollen wir lieber nicht zuerst in den Park gehen?', en:'Shall we rather not go to the park first?'},
  {cat:'vorschlaege', de:'Hast du Lust, heute Abend ins Kino zu gehen?', en:'Do you feel like going to the cinema tonight?'},
  {cat:'vorschlaege', de:'Wie wäre es mit einer Pizza zum Abendessen?', en:'How about a pizza for dinner?'},
  {cat:'vorschlaege', de:'Lass uns am Wochenende Fußball spielen!', en:'Let’s play soccer on the weekend!'},
  {cat:'vorschlaege', de:'Einverstanden.', en:'Agreed.'},
  {cat:'vorschlaege', de:'Also gut, machen wir es so.', en:'All right, let’s do it that way.'},
  {cat:'vorschlaege', de:'Das ist eine großartige Idee, ich bin dabei!', en:'That’s a great idea, I’m in!'},
  {cat:'vorschlaege', de:'Klingt super, das machen wir!', en:'Sounds great, let’s do it!'},
  {cat:'vorschlaege', de:'Ich bin dagegen.', en:'I am against it.'},
  {cat:'vorschlaege', de:'Das können wir doch später auch machen.', en:'We can do that later too, can’t we?'},
  {cat:'vorschlaege', de:'Muss das sein? Das ist doch langweilig.', en:'Do we have to? That’s boring.'},
  {cat:'vorschlaege', de:'Darauf habe ich heute leider keine Lust.', en:'Unfortunately I don’t feel like it today.'},
  {cat:'vorschlaege', de:'Ich finde diese Idee nicht so gut. Lass uns lieber etwas anderes machen.', en:'I don’t think this idea is so good. Let’s do something else instead.'},
  {cat:'vorschlaege', de:'Was für ein Fest ist das?', en:'What kind of festival is that?'},
  {cat:'vorschlaege', de:'Was für ein Kaffee ist das?', en:'What kind of coffee is that?'},
  {cat:'vorschlaege', de:'Was für ein Wagen ist das?', en:'What kind of car is that?'},
  {cat:'vorschlaege', de:'Was für eine Schokolade ist das?', en:'What kind of chocolate is that?'},
  {cat:'vorschlaege', de:'Was für ein Buch ist das?', en:'What kind of book is that?'},
  {cat:'vorschlaege', de:'Was für Bücher sind das?', en:'What kind of books are those?'},
  {cat:'vorschlaege', de:'Darf ich eine Frage stellen?', en:'May I ask a question?'},
  {cat:'kultur-zeit', de:'In der Vergangenheit gab es keine Smartphones.', en:'In the past there were no smartphones.'},
  {cat:'kultur-zeit', de:'Ich habe viel aus meiner Vergangenheit gelernt.', en:'I learned a lot from my past.'},
  {cat:'kultur-zeit', de:'Die Gegenwart ist die beste Zeit, um anzufangen.', en:'The present is the best time to start.'},
  {cat:'kultur-zeit', de:'Die Zukunft wird voller Überraschungen sein.', en:'The future will be full of surprises.'},
  {cat:'kultur-zeit', de:'Die Ausstellung hat 2 Stunden gedauert.', en:'The exhibition lasted 2 hours.'},
  {cat:'kultur-zeit', de:'Der Krieg ist 15 Jahre her.', en:'The war was 15 years ago.'},
  {cat:'kultur-zeit', de:'Das ist ein wichtiger Teil der Geschichte.', en:'That is an important part of history.'},
  {cat:'kultur-zeit', de:'Was ist das für eine Geschichte?', en:'What kind of story is that?'},
  {cat:'kultur-zeit', de:'Im Sommer gibt es in unserer Stadt viele tolle Veranstaltungen.', en:'In summer there are many great events in our city.'},
  {cat:'kultur-zeit', de:'Die Veranstaltung beginnt heute Abend pünktlich um 20 Uhr.', en:'The event starts promptly tonight at 8 p.m.'},
  {cat:'kultur-zeit', de:'Wir haben am Wochenende ein schönes Fest gefeiert.', en:'We celebrated a lovely festival on the weekend.'},
  {cat:'kultur-zeit', de:'Im Juli besuche ich ein großes Musikfestival.', en:'In July I am going to a big music festival.'},
  {cat:'kultur-zeit', de:'Das Konzert der Band war einfach großartig.', en:'The band’s concert was simply great.'},
  {cat:'kultur-zeit', de:'Ich ziehe mich an.', en:'I am getting dressed.'},
  {cat:'kultur-zeit', de:'Ich ziehe mir meine Kleidung an.', en:'I am putting on my clothes.'},
  {cat:'kultur-zeit', de:'Ich ziehe mir eine Jacke an.', en:'I am putting on a jacket.'},
  {cat:'kultur-zeit', de:'Ich trage heute ein rotes Hemd.', en:'I am wearing a red shirt today.'},
  {cat:'kultur-zeit', de:'Ich ziehe mich aus.', en:'I am getting undressed.'},
  {cat:'kultur-zeit', de:'Ich ziehe mir meine Kleidung aus.', en:'I am taking off my clothes.'},
  {cat:'kultur-zeit', de:'Ich ziehe mir die Schuhe aus.', en:'I am taking off my shoes.'},
  {cat:'kultur-zeit', de:'Ich ziehe mich um.', en:'I am changing my clothes.'},
  {cat:'kultur-zeit', de:'Geh raus, ich ziehe mich an.', en:'Go outside, I am getting dressed.'},
  {cat:'kultur-zeit', de:'Geh bitte kurz raus, ich möchte mich umziehen.', en:'Please step out for a moment, I want to change clothes.'},
  {cat:'kultur-zeit', de:'Könnten Sie bitte kurz rausgehen? Ich muss mich anziehen.', en:'Could you please step out briefly? I need to get dressed. (formal)'},
  {cat:'kultur-zeit', de:'Letztes Jahr waren wir auf einem Mittelalterfest.', en:'Last year we were at a medieval festival.'},
  {cat:'kultur-zeit', de:'Morgen sind wir auf die Hochzeit meines Freundes eingeladen.', en:'Tomorrow we are invited to my friend’s wedding.'},
  {cat:'kultur-zeit', de:'Er interessiert sich sehr für moderne Kunst.', en:'He is very interested in modern art.'},
  {cat:'kultur-zeit', de:'Die neue Ausstellung im Museum ist sehr sehenswert.', en:'The new exhibition at the museum is well worth seeing.'},
  {cat:'kultur-zeit', de:'Das Theaterstück war traurig, aber sehr schön.', en:'The play was sad, but very beautiful.'},
  {cat:'kultur-zeit', de:'Der Vortrag über Geschichte war sehr interessant.', en:'The lecture about history was very interesting.'},
  {cat:'kultur-zeit', de:'Nach dem Vortrag gab es eine lange Diskussionsrunde.', en:'After the lecture there was a long discussion round.'},
  {cat:'kultur-zeit', de:'Für die Prüfung müssen wir kurze Texte lesen und verstehen.', en:'For the exam we have to read and understand short texts.'},
  {cat:'kultur-zeit', de:'Der Eintritt ist für Kinder unter 12 Jahren frei.', en:'Admission is free for children under 12.'},
  {cat:'kultur-zeit', de:'Hast du die Eintrittskarten für das Kino schon gekauft?', en:'Have you already bought the cinema tickets?'},
  {cat:'kultur-zeit', de:'Studenten bekommen hier eine Ermäßigung auf den Preis.', en:'Students get a discount on the price here.'},
  {cat:'kultur-zeit', de:'Der Künstler hat viele berühmte Bilder gemalt.', en:'The artist painted many famous pictures.'},
  {cat:'kultur-zeit', de:'Der Star des Abends hat alle Gäste begrüßt.', en:'The star of the evening greeted all the guests.'},
  {cat:'kultur-zeit', de:'Die Sängerin steht schon auf der Bühne.', en:'The singer is already standing on the stage.'},
  {cat:'kultur-zeit', de:'Für das Theaterstück braucht sie ein spezielles Kostüm.', en:'She needs a special costume for the play.'},
  {cat:'kultur-zeit', de:'Dieser Parkplatz ist extra für Behinderte reserviert.', en:'This parking space is reserved specifically for disabled people.'},
  {cat:'kultur-zeit', de:'Das Essen ist nicht schlecht, ich würde eher sagen, es ist gewöhnungsbedürftig.', en:'The food isn’t bad, I’d rather say it takes some getting used to.'},
  {cat:'kultur-zeit', de:'Er ist nicht faul, ich würde eher sagen, er ist heute nur müde.', en:'He isn’t lazy, I’d rather say he is just tired today.'},
  {cat:'kultur-zeit', de:'Das Projekt ist nicht unmöglich, aber ich würde eher sagen, es ist sehr schwierig.', en:'The project isn’t impossible, but I’d rather say it is very difficult.'},
  {cat:'kultur-zeit', de:'Ich würde eher sagen, wir verschieben den Termin auf nächste Woche.', en:'I’d rather say we postpone the appointment to next week.'},
  {cat:'kultur-zeit', de:'Der Termin wurde verschoben.', en:'The appointment was postponed.'},
  {cat:'kultur-zeit', de:'Es war kein Fehler, ich würde eher sagen, es war eine wichtige Erfahrung.', en:'It wasn’t a mistake, I’d rather say it was an important experience.'},
  {cat:'kultur-zeit', de:'Das Treffen wird am Montag in meinem Büro stattfinden.', en:'The meeting will take place on Monday in my office.'},
  {cat:'kultur-zeit', de:'Wir haben im Urlaub viele schöne Dinge erlebt.', en:'We experienced many beautiful things on vacation.'},
  {cat:'kultur-zeit', de:'Die deutsche Kultur fasziniert mich sehr.', en:'German culture fascinates me a lot.'},
  {cat:'kultur-zeit', de:'Ich bin gestern den ganzen Tag zu Hause gewesen.', en:'I was at home all day yesterday.'},
  {cat:'kultur-zeit', de:'Mal sehen, wie das Wetter morgen wird.', en:'Let’s see what the weather will be like tomorrow.'},
  {cat:'kultur-zeit', de:'Von morgen an werde ich jeden Tag Sport treiben.', en:'From tomorrow on I will do sports every day.'},
  {cat:'kultur-zeit', de:'Komischerweise habe ich heute gar keinen Hunger.', en:'Strangely enough, I’m not hungry at all today.'},
  {cat:'kultur-zeit', de:'Niemand weiß, was die Zukunft bringt.', en:'Nobody knows what the future will bring.'},
  {cat:'kultur-zeit', de:'Wir müssen positiv an die Zukunft denken.', en:'We have to think positively about the future.'},
  {cat:'kultur-zeit', de:'Meine Schulzeit ist schon viele Jahre her.', en:'My school days are many years behind me.'},
  {cat:'kultur-zeit', de:'Der König hat früher in diesem großen Schloss gewohnt.', en:'The king used to live in this big castle.'},
  {cat:'kultur-zeit', de:'Geographisch gesehen liegt Deutschland im Zentrum Europas.', en:'Geographically speaking, Germany lies in the center of Europe.'},
  {cat:'kultur-zeit', de:'Bei diesem Fest stehen die Kinder im Mittelpunkt.', en:'At this festival the children are the focus.'},
  {cat:'kultur-zeit', de:'Dieser Parkplatz ist extra für Menschen mit Behinderung reserviert.', en:'This parking space is reserved specifically for people with disabilities.'},
  {cat:'kultur-zeit', de:'Wie sieht es bei dir aus?', en:'How are things with you?'},
  {cat:'zeitangaben', de:'Mein Urlaub dauert vom 10. bis zum 15. Juli.', en:'My vacation lasts from the 10th to the 15th of July.'},
  {cat:'zeitangaben', de:'Das Museum ist vom ersten bis zum fünften August geschlossen.', en:'The museum is closed from the first to the fifth of August.'},
  {cat:'zeitangaben', de:'Von morgen an beginne ich, Sport zu machen.', en:'From tomorrow on I will start doing sports.'},
  {cat:'zeitangaben', de:'Vom zweiten März an arbeite ich in der neuen Firma.', en:'From the second of March I will work at the new company.'},
  {cat:'zeitangaben', de:'Von jetzt an lerne ich jeden Tag Deutsch.', en:'From now on I will learn German every day.'},
  {cat:'zeitangaben', de:'Ab wann bist du morgen im Büro?', en:'From what time will you be in the office tomorrow?'},
  {cat:'zeitangaben', de:'Ab wann gelten die neuen Regeln?', en:'From when do the new rules apply?'},
  {cat:'zeitangaben', de:'Ab morgen rauche ich nicht mehr.', en:'From tomorrow I won’t smoke anymore.'},
  {cat:'zeitangaben', de:'Ab Samstag habe ich endlich Urlaub.', en:'From Saturday I finally have vacation.'},
  {cat:'zeitangaben', de:'Ab dem 10. Juli bin ich nicht mehr erreichbar.', en:'From July 10th I will no longer be reachable.'},
  {cat:'zeitangaben', de:'Die Fahrkarten sind ab dem ersten August teurer.', en:'Train tickets are more expensive from August 1st.'},
  {cat:'zeitangaben', de:'Die Veranstaltung findet seit 1979 jedes Jahr in Linz statt.', en:'The event has taken place in Linz every year since 1979.'},
  {cat:'zeitangaben', de:'Seit dem ersten August wohne ich in Berlin.', en:'I have been living in Berlin since August 1st.'},
  {cat:'zeitangaben', de:'Wie lange arbeitest du schon hier?', en:'How long have you been working here?'},
  {cat:'zeitangaben', de:'Über 30 Jahre.', en:'Over 30 years.'},
  {cat:'zeitangaben', de:'Mehr als ein Jahr.', en:'More than a year.'},
  {cat:'zeitangaben', de:'Länger als sechs Monate.', en:'Longer than six months.'},
  {cat:'zeitangaben', de:'Ich fahre für eine Woche nach Frankreich.', en:'I am going to France for a week.'},
  {cat:'zeitangaben', de:'Der Zug fährt in zehn Minuten ab.', en:'The train departs in ten minutes.'},
  {cat:'zeitangaben', de:'Die Arbeit beginnt in 10 Minuten, ich muss los.', en:'Work starts in 10 minutes, I have to go.'},
  {cat:'zeitangaben', de:'Mit mir und dir ist es aus.', en:'It’s over between you and me.'},
  {cat:'zeitangaben', de:'Als Student zahlst du 33 statt 50 Euro.', en:'As a student you pay 33 instead of 50 euros.'},
  {cat:'zeitangaben', de:'Was hältst du davon?', en:'What do you think about it?'},
  {cat:'zeitangaben', de:'Darf ich etwas vorschlagen?', en:'May I suggest something?'},
  {cat:'zeitangaben', de:'Willst du zur Party mitkommen?', en:'Do you want to come along to the party?'},
  {cat:'zeitangaben', de:'Du hast doch gesagt, das würde dich interessieren.', en:'But you said that would interest you.'},
  {cat:'verabredungen', de:'Wir haben uns für morgen Nachmittag verabredet.', en:'We arranged to meet tomorrow afternoon.'},
  {cat:'verabredungen', de:'Ich möchte mich gerne mit dir auf einen Kaffee verabreden.', en:'I would like to meet you for a coffee.'},
  {cat:'verabredungen', de:'Leider muss ich deine Einladung ablehnen, weil ich arbeiten muss.', en:'Unfortunately I have to decline your invitation because I have to work.'},
  {cat:'verabredungen', de:'Er hat das Angebot der Firma abgelehnt.', en:'He turned down the company’s offer.'},
  {cat:'verabredungen', de:'Ich stimme dir voll und ganz zu.', en:'I completely agree with you.'},
  {cat:'verabredungen', de:'Der Chef hat meinem Vorschlag zugestimmt.', en:'The boss agreed to my proposal.'},
  {cat:'verabredungen', de:'Unser Treffpunkt ist morgen um 8 Uhr vor dem Bahnhof.', en:'Our meeting point is tomorrow at 8 o’clock in front of the station.'},
  {cat:'verabredungen', de:'Können wir einen anderen Treffpunkt vereinbaren?', en:'Can we agree on a different meeting point?'},
  {cat:'verabredungen', de:'Lass uns doch heute Abend ins Kino gehen!', en:'Let’s go to the cinema tonight!'},
  {cat:'verabredungen', de:'Lass uns doch am Wochenende zusammen für die Prüfung lernen.', en:'Let’s study for the exam together on the weekend.'},
  {cat:'verabredungen', de:'Wie wäre es mit einem kurzen Spaziergang im Park?', en:'How about a short walk in the park?'},
  {cat:'verabredungen', de:'Ich habe die Hausaufgabe nicht geschafft.', en:'I didn’t manage to do the homework.'},
  {cat:'verabredungen', de:'Ich würde lieber zu Hause bleiben, ich bin heute sehr müde.', en:'I would rather stay at home, I am very tired today.'},
  {cat:'verabredungen', de:'Ins Kino? Ich würde lieber ins Theater gehen.', en:'To the cinema? I would rather go to the theater.'},
  {cat:'verabredungen', de:'Ich muss es schaffen.', en:'I have to make it.'},
  {cat:'verabredungen', de:'Das schaffen Sie sicher.', en:'You will surely manage it. (formal)'},
  {cat:'gewicht', de:'Wie viel wiegst du?', en:'How much do you weigh?'},
  {cat:'gewicht', de:'Ich wiege 70 Kilo.', en:'I weigh 70 kilos.'},
  {cat:'gewicht', de:'Kannst du bitte abnehmen?', en:'Can you please lose weight?'},
  {cat:'gewicht', de:'Ja, meistens abends.', en:'Yes, mostly in the evenings.'},
  {cat:'gewicht', de:'Das hat mir circa 1500 Euro gekostet.', en:'That cost me about 1500 euros.'},
  {cat:'gewicht', de:'Ich habe in Syrien wenig verdient.', en:'I earned little in Syria.'},
  {cat:'gewicht', de:'Sie möchte bis zum Sommer fünf Kilo abnehmen.', en:'She wants to lose five kilos by summer.'},
  {cat:'gewicht', de:'Wow, du siehst toll aus! Hast du abgenommen?', en:'Wow, you look great! Did you lose weight?'},
  {cat:'gewicht', de:'Der Koffer darf nicht mehr als 20 Kilo wiegen.', en:'The suitcase must not weigh more than 20 kilos.'},
  {cat:'gewicht', de:'Nach dieser Diät werde ich bestimmt weniger wiegen.', en:'After this diet I will certainly weigh less.'},
  {cat:'gewicht', de:'Laufen Sie einfach weiter geradeaus, dann sehen Sie den Bahnhof.', en:'Just keep walking straight ahead, then you will see the station. (formal)'},
  {cat:'gewicht', de:'Der Text ist sehr interessant, bitte lesen Sie weiter.', en:'The text is very interesting, please keep reading. (formal)'},
  {cat:'gewicht', de:'Das ist eine tolle Arbeit, mach so weiter!', en:'That is great work, keep it up!'},
  {cat:'gewicht', de:'Ich rufe an, um einen Termin mit dem Arzt zu vereinbaren.', en:'I am calling to arrange an appointment with the doctor.'},
  {cat:'gewicht', de:'Wir haben vereinbart, uns morgen um 14 Uhr zu treffen.', en:'We agreed to meet tomorrow at 2 p.m.'},
  {cat:'gewicht', de:'Wie vereinbart, schicke ich Ihnen die Dokumente per E-Mail.', en:'As agreed, I will send you the documents by email.'},
  {cat:'gewicht', de:'Nach der harten Arbeit hast du eine Pause verdient.', en:'After the hard work you deserve a break.'},
  {cat:'gewicht', de:'Kann ich mir von dir 10 Euro leihen?', en:'Can I borrow 10 euros from you?'},
  {cat:'gewicht', de:'Ich muss mir ein Buch von meinem Freund leihen.', en:'I have to borrow a book from my friend.'},
  {cat:'gewicht', de:'Ich habe mir dieses Auto von meinem Freund geliehen.', en:'I borrowed this car from my friend.'},
  {cat:'gewicht', de:'Der Weg zum Bahnhof dauert circa zehn Minuten.', en:'The way to the station takes about ten minutes.'},
  {cat:'gewicht', de:'Das neue Handy kostet circa 500 Euro.', en:'The new phone costs about 500 euros.'},
  {cat:'gewicht', de:'Dein Rat war wirklich sehr nützlich für mich.', en:'Your advice was really very useful to me.'},
  {cat:'gewicht', de:'Fremdsprachen zu lernen ist immer nützlich.', en:'Learning foreign languages is always useful.'},
  {cat:'gewicht', de:'Was schlägst du vor?', en:'What do you suggest?'},
  {cat:'gewicht', de:'Sie sollten regelmäßig Sport machen.', en:'You should do sports regularly. (formal)'},
  {cat:'gewicht', de:'Deine Ratschläge sind immer sehr nützlich für mich.', en:'Your pieces of advice are always very useful to me.'},
  {cat:'gewicht', de:'Ich brauche ein paar gute Ratschläge für mein Studium.', en:'I need some good advice for my studies.'},
  {cat:'gewicht', de:'Darf ich dir einen guten Ratschlag geben?', en:'May I give you a good piece of advice?'},
  {cat:'gewicht', de:'Der Arzt hat mir den Ratschlag gegeben, mehr Wasser zu trinken.', en:'The doctor advised me to drink more water.'},
  {cat:'gewicht', de:'Wir haben im Meeting viele neue Vorschläge diskutiert.', en:'We discussed many new suggestions in the meeting.'},
  {cat:'gewicht', de:'Ich möchte einen Vorschlag machen: Lass uns morgen früh anfangen.', en:'I would like to make a suggestion: let’s start early tomorrow.'},
  {cat:'gewicht', de:'Mein Kollege hat vorgeschlagen, die Deadline zu verschieben.', en:'My colleague suggested postponing the deadline.'},
  {cat:'gewicht', de:'Der Trainer hat mir einen neuen Fitnessplan geschrieben.', en:'The trainer wrote me a new fitness plan.'},
  {cat:'gewicht', de:'Neben dem Training ist ein gesunder Ernährungsplan sehr wichtig.', en:'Besides training, a healthy nutrition plan is very important.'},
  {cat:'gewicht', de:'Nach der Arbeit muss ich mich ein bisschen ausruhen.', en:'After work I need to rest a little.'},
  {cat:'gewicht', de:'Ruh dich gut aus, du siehst müde aus.', en:'Get some good rest, you look tired.'},
  {cat:'gewicht', de:'Um fit zu bleiben, muss man regelmäßig Sport machen.', en:'To stay fit, you have to do sports regularly.'},
  {cat:'gewicht', de:'Ich kontrolliere mein Gewicht einmal pro Woche.', en:'I check my weight once a week.'},
  {cat:'gewicht', de:'Er hat viel Gewicht verloren.', en:'He lost a lot of weight.'},
  {cat:'gewicht', de:'Du solltest früher ins Bett gehen, damit du morgen fit bist.', en:'You should go to bed earlier so that you are fit tomorrow.'},
  {cat:'gewicht', de:'Sie sollten dieses Medikament regelmäßig einnehmen.', en:'You should take this medication regularly. (formal)'},
  {cat:'gewicht', de:'Wir sollten uns beeilen, sonst verpassen wir den Zug.', en:'We should hurry, otherwise we will miss the train.'},
  {cat:'gewicht', de:'Du solltest nicht so viel Kaffee trinken, das ist nicht gut für deine Nerven.', en:'You shouldn’t drink so much coffee, it’s not good for your nerves.'},
  {cat:'gewicht', de:'Sie sollten sich nach der Operation gut ausruhen.', en:'You should rest well after the operation. (formal)'},
  {cat:'gewicht', de:'Wir könnten am Wochenende zusammen ins Kino gehen, wenn du Lust hast.', en:'We could go to the cinema together on the weekend if you like.'},
  {cat:'gewicht', de:'Du könntest den Lehrer fragen, wenn du die Aufgabe nicht verstehst.', en:'You could ask the teacher if you don’t understand the task.'},
  {cat:'gewicht', de:'Wir könnten eine Pause machen und einen Kaffee trinken.', en:'We could take a break and have a coffee.'},
  {cat:'gewicht', de:'Sie könnten diesen Ernährungsplan ausprobieren, um Gewicht abzunehmen.', en:'You could try this nutrition plan to lose weight. (formal)'},
  {cat:'gewicht', de:'Ich bin gern an der frischen Luft.', en:'I like being out in the fresh air.'},
  {cat:'gefuehle-pflege', de:'Die Frau hat große Sorge um ihren kranken Mann.', en:'The woman is very worried about her sick husband.'},
  {cat:'gefuehle-pflege', de:'In der Pflege ist Empathie wichtig, aber zu viel Mitleid kann anstrengend sein.', en:'In nursing, empathy is important, but too much pity can be exhausting.'},
  {cat:'gefuehle-pflege', de:'Die Hoffnung auf eine schnelle Besserung ist groß.', en:'The hope for a quick recovery is great.'},
  {cat:'gefuehle-pflege', de:'Frau Müller, wie fühlen Sie sich heute Morgen?', en:'Mrs. Müller, how are you feeling this morning?'},
  {cat:'gefuehle-pflege', de:'Ich fühle mich nach der Nachtschicht immer sehr müde.', en:'After the night shift I always feel very tired.'},
  {cat:'gefuehle-pflege', de:'Der Patient kann seine Schmerzen nicht gut mit Worten ausdrücken.', en:'The patient cannot express his pain well in words.'},
  {cat:'gefuehle-pflege', de:'Ich möchte Ihnen mein tiefes Mitgefühl ausdrücken.', en:'I would like to express my deepest sympathy to you.'},
  {cat:'gefuehle-pflege', de:'Es ist wichtig, dass der Patient dem Arzt und dem Pfleger vertraut.', en:'It is important that the patient trusts the doctor and the nurse.'},
  {cat:'gefuehle-pflege', de:'Sie können mir vertrauen, ich bin für Sie da.', en:'You can trust me, I am here for you.'},
  {cat:'gefuehle-pflege', de:'Der Arzt fragt den Patienten nach dem Grund für seine Bauchschmerzen.', en:'The doctor asks the patient about the reason for his stomach pain.'},
  {cat:'gefuehle-pflege', de:'Die ständige Müdigkeit ist eine Folge von zu wenig Schlaf.', en:'The constant tiredness is a result of too little sleep.'},
  {cat:'gefuehle-pflege', de:'Weil der Patient stark blutet, muss er sofort operiert werden.', en:'Because the patient is bleeding heavily, he must be operated on immediately.'},
  {cat:'gefuehle-pflege', de:'Der Patient blutet stark, deshalb muss er sofort operiert werden.', en:'The patient is bleeding heavily, therefore he must be operated on immediately.'},
  {cat:'gefuehle-pflege', de:'Du siehst heute sehr blass aus, hoffentlich hast du nichts Schlimmes.', en:'You look very pale today, I hope you don’t have anything serious.'}
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
