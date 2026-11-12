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
      'Wir müssen uns beeilen. Der Zug fährt nämlich gleich ab.',
      'Morgens ist der Straßenverkehr sehr dicht, deshalb fahre ich lieber mit der Bahn zur Klinik.',
      'Mit dem Bus bin ich schnell in der Klinik, mit dem Fahrrad bin ich schneller, aber mit der U-Bahn geht es am schnellsten.',
      'Der Stress ist morgens hoch, mittags ist er höher, und in der Notaufnahme ist er am höchsten.',
      'Die Apotheke ist nah, der Supermarkt ist näher, aber die Bushaltestelle ist am nächsten.',
      'Ein Buch ist teuer, ein Sprachkurs ist teurer, aber Privatunterricht ist am teuersten.',
      'Jeden Morgen beim Frühstück versuche ich, deutsche Nachrichten zu hören.',
      'Im Wartezimmer beim Arzt kann man gut Zeitschriften lesen.',
      'Ich muss heute noch ein schweres Paket und ein kleines Päckchen zur Post bringen.',
      'Oben links auf dem Brief steht der Absender, und unten rechts steht der Empfänger.',
      'Bitte schreiben Sie die Adresse des Krankenhauses deutlich auf das Paket.',
      'Für dieses wichtige Paket braucht der Postbote Ihre Unterschrift.',
      'Ich stecke den Brief vom Arzt in den Briefumschlag.',
      'Ich schaue jeden Mittag in den Briefkasten, ob Post vom Amt da ist.',
      'Sie können die Briefmarken direkt am Schalter Nummer drei kaufen.',
      'Das Ausfüllen des Formulars ist der erste Schritt für deinen Antrag.',
      'Vor der Benutzung des neuen Blutdruckmessgeräts muss man die Gebrauchsanweisung genau lesen.',
      'Wir packen die alten Patientenakten in einen großen Karton.',
      'Du musst noch eine Briefmarke auf den Umschlag kleben.',
      'Das Paket ist mit vielen bunten Aufklebern beklebt.',
      'Wir halten die Briefe mit Gummibändern zusammen, damit nichts verloren geht.',
      'Der Medikamentenschrank auf der Station muss immer gut verschlossen sein.',
      'Ich habe meine Bewerbung für die Ausbildung schon gestern abgeschickt.',
      'Die beiden Kartons sind gleich groß, aber der Inhalt ist komplett verschieden.',
      'Die Apotheke liegt direkt gegenüber vom Krankenhaus.',
      'Die Bushaltestelle befindet sich genau gegenüber von der Bäckerei.',
      'Gehen Sie hier geradeaus an der Rezeption vorbei bis zum Aufzug.',
      'Jeden Morgen fahre ich mit dem Bus am großen Stadtpark vorbei.',
      'Der Krankenwagen fährt schnell durch die volle Stadt.',
      'Um zur Cafeteria zu kommen, müssen Sie durch den langen Flur gehen.',
      'Vor der Abfahrt des Zuges müssen wir noch ein Ticket kaufen, und nach der Ankunft fahren wir direkt ins Hotel.',
      'Wir sind mit dem Auto auf die Fähre gefahren; es war ein riesiges Schiff.',
      'Auf unserer Fahrt nach Österreich haben wir die Grenze ohne Probleme überquert.',
      'Vorsicht, wenn Sie hier die breite Straße überqueren!',
      'Bitte parken Sie Ihr Fahrzeug nicht vor der Einfahrt für den Krankenwagen!',
      'Auf der deutschen Autobahn darf man oft sehr schnell fahren, aber es gibt auch viel Stau.',
      'Bevor wir auf die Autobahn fahren, müssen wir noch kurz an der Tankstelle halten und tanken.',
      'Wir hatten gestern Abend eine Reifenpanne im Regen und mussten selbst den Reifen wechseln.',
      'Der Motor macht ein komisches Geräusch, deshalb bringe ich das Auto morgen in die Autowerkstatt.',
      'Bei Schnee und Eis ist das schnelle Fahren extrem gefährlich.',
      'Für den Kaffeeautomaten auf dem Flur brauche ich eine Zwei-Euro-Münze.',
      'Draußen schneit es, deshalb ziehe ich eine dicke Jacke an, binde mir den Schal um den Hals und setze die Mütze auf.',
      'Auf dem Weg zur Klinik trage ich meistens eine bequeme Jeanshose und warme Winterschuhe.',
      'Zur Hochzeitsfeier ihrer Schwester kauft sie sich ein elegantes Kleid.',
      'Im Krankenhaus tragen alle Pflegekräfte weiße Arbeitskleidung, aber heute in meiner Freizeit habe ich ein schwarzes T-Shirt an.',
      'Mach bitte das Fenster zu, es ist mir wirklich kalt!',
      'Der Patient hat hohes Fieber; es ist dem Mann extrem heiß, obwohl das Zimmer kühl ist.',
      'Viele ältere Patienten haben im Sommer Probleme mit der starken Hitze und im Winter mit der Kälte.',
      'Im Frühling ist es tagsüber schon angenehm warm, aber nachts wird es noch sehr kalt.',
      'Heute Morgen weht ein eisiger Wind, pass auf den glatten Straßen gut auf!',
      'In Deutschland fahren viele Menschen mit den öffentlichen Verkehrsmitteln, weil das umweltfreundlich ist.',
      'Das Fahrrad ist im Sommer eine sinnvolle und gesunde Alternative zum Auto.',
      'Carsharing, also das Teilen von Autos, wird in großen Städten immer beliebter.',
      'Mit dieser Chipkarte können wir die Türen im Krankenhaus öffnen und in der Cafeteria bezahlen.',
      'Die neue Klinik liegt etwas außerhalb der Stadt, aber man kann sie gut mit der Straßenbahn erreichen.',
      'Meine neue Wohnung ist viel näher am Krankenhaus; jetzt habe ich morgens weniger Weg zur Arbeit.',
      'Wenn man ein Monatsticket kauft, ist das sehr preiswert und man kann viel Geld sparen.',
      'Das Deutschlandticket kostet nicht viel – für Pendler lohnt sich das auf jeden Fall!',
      'Vom Bruttogehalt werden in Deutschland jeden Monat die Steuern und die Versicherungen abgezogen.',
      'Im ICE sitzen morgens viele Geschäftsleute, die an ihren Laptops arbeiten.',
      'Um den digitalen Dienstplan zu sehen, muss ich mich mit meinen Zugangsdaten im System einloggen.',
      'Bitte geben Sie zuerst Ihren Benutzernamen und danach Ihr Passwort ein.',
      'Ein sicheres Passwort sollte mindestens acht Buchstaben, eine Zahl und ein Sonderzeichen enthalten.',
      'Sie müssen den Link in der E-Mail anklicken, um Ihr neues Konto zu bestätigen.',
      'Ich habe das Formular heruntergeladen, am Laptop unterschrieben und wieder auf der Webseite hochgeladen.',
      'Der Patient muss den Fragebogen komplett ausfüllen, und die Sekretärin druckt ihn dann aus.',
      'Ich kann die Datei leider nicht öffnen, weil die Internetverbindung heute extrem langsam ist.'
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
      'Die Veranstaltung findet am Samstagabend im Zentrum statt.','Der Film war leider so langweilig, dass ich eingeschlafen bin.',
      'Als wir im Sommer Urlaub hatten, sind wir jeden Tag ans Meer gefahren.',
      'Am Wochenende wollen wir uns deutsche Filme anschauen.',
      'Es macht viel Spaß, im Auto laut deutsche Lieder mitzusingen.',
      'Aus dem Urlaub habe ich meinen Kollegen auf der Station eine Postkarte geschickt.',
      'Wir wünschen Ihnen einen angenehmen Aufenthalt in unserem Hotel!',
      'Wegen der großen Medizin-Messe sind leider alle Hotels in der Stadt komplett ausgebucht.',
      'Im Urlaub buche ich lieber Halbpension statt Vollpension, weil ich mittags gern in der Stadt esse.',
      'Wir haben für den Sommerurlaub ein schönes Zimmer mit direktem Strandblick reserviert.',
      'Die Getränke und Snacks in der Minibar im Hotelzimmer sind meistens sehr teuer.',
      'Sie führt dieses kleine Familienhotel schon seit zwanzig Jahren.',
      'Nach den vielen Prüfungen freue ich mich schon sehr auf die lange Reise im Sommer.',
      'Während wir verreisen, passt unser freundlicher Nachbar aufs Haus auf.',
      'Im Sommer fahren wir ans Meer, und dann sitzen wir den ganzen Tag entspannt am Strand.',
      'Nächste Woche reisen wir an die Küste oder an den Bodensee, weil ich im Urlaub gern am Bodensee und an der Küste bin.',
      'Morgen fliegen wir auf die Insel Mallorca und bleiben zehn Tage auf der Insel.',
      'Am Wochenende fahre ich aufs Land zu meinen Großeltern; sie leben schon lange ruhig auf dem Land.',
      'Im Winter fahren wir in die Berge, klettern und steigen hoch hinauf, und bleiben eine Woche in den Bergen.',
      'Im Urlaub fahren wir gern ins Gebirge, weil die Natur im Gebirge wunderschön ist.',
      'Nach der Schicht gehe ich oft in den Wald spazieren, denn im Wald ist die Luft sehr frisch.',
      'Viele Touristen reisen im Winter in den Süden oder in die Wüste, weil es im Süden und in der Wüste warm ist.',
      'Morgen fahre ich mit dem Zug nach Düsseldorf, denn mein Freund lebt in Düsseldorf.',
      'Am Wochenende gibt es im Kulturzentrum eine interessante Veranstaltung für junge Leute.',
      'Wegen des schlechten Wetters findet das Fest heute im großen Saal statt.',
      'Heute Abend gehe ich zu einer Lesung von meinem Lieblingsautor in der Stadtbibliothek.',
      'Beim Poetry Slam haben junge Künstler ihre eigenen Texte auf der Bühne präsentiert.',
      'Zur Vernissage in der Galerie kamen gestern viele Kunstliebhaber und Journalisten.',
      'Nach den Prüfungen gehen wir zusammen auf ein großes Konzert.',
      'Meine Kollegin liebt klassische Oper und Ballett, aber ich schaue mir lieber ein modernes Musical an.',
      'Für die kleinen Patienten auf der Kinderstation wurde heute ein lustiges Puppentheater wie im Zirkus organisiert.',
      'Am Samstag machen wir einen geführten Stadtspaziergang und nehmen dabei an einem Fotoworkshop teil.',
      'Nach dem tollen Auftritt hat das Publikum minutenlang begeistert geklatscht.',
      'Am Ende des Poetry Slams darf das Publikum über den besten Text abstimmen.',
      'In der Teamsitzung stimmen wir heute über den neuen Urlaubsplan ab.',
      'Am Samstagabend gehen meine Kollegen nach der Schicht zusammen in einen Club, um zu tanzen.',
      'Gestern haben wir im Stadttheater ein modernes Theaterstück gesehen; es war ein intensives Kammerspiel mit nur drei Schauspielern.'
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
      'Darf ich dir eine Tasse Kaffee anbieten?','Wir können heute Abend Pizza bestellen oder so.',
      'Nach der Schicht gehen wir mit den Kollegen in ein gemütliches Lokal.',
      'Kennst du ein gutes Lokal hier in der Nähe?',
      'Ich möchte diesen Wein reklamieren, er schmeckt nicht gut.',
      'Verzeihen Sie, aber ich glaube, es gibt einen Fehler in der Rechnung.',
      'Verzeihen Sie, aber die Suppe ist leider total versalzen.',
      'Entschuldigung, aber das Fleisch ist nicht durch.',
      'Verzeihen Sie, aber das Messer hier ist nicht richtig sauber.',
      'Mein Glas ist schmutzig. Könnte ich ein anderes bekommen?',
      'Das Essen schmeckt wirklich fantastisch!',
      'Hat es Ihnen geschmeckt?',
      'Ich hätte mein Steak gern medium, bitte.',
      'Es tut mir leid, dass das Fleisch zu kalt ist. Ich gebe es sofort an die Küche weiter.',
      'Herr Ober, wir würden gern zahlen, bitte.',
      'Zusammen oder getrennt?',
      'Die Rechnung macht 45 Euro. – Hier sind 50 Euro, stimmt so!',
      'Eine kleine Menge Schokolade ist nicht schädlich für die Gesundheit.',
      'In der Cafeteria kann man sich jeden Tag ein frisches Gericht aussuchen.',
      'Am Wochenende brate ich mir gern ein Stück Fleisch mit Kartoffeln.'
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
      'Früh aufzustehen ist eine sehr gute Gewohnheit.',
      'Deutsch ist keine leichte Fremdsprache, aber mit täglicher Übung schafft man das.',
      'Um meine Aussprache zu verbessern, spreche ich im Server oft mit Muttersprachlern.',
      'Er hat sehr gute Noten und hofft auf ein Stipendium für sein Studium in Deutschland.',
      'Dein Deutsch ist gut, aber deine Aussprache ist noch besser, und beim Sprechen bist du am besten.',
      'Ich lerne gern zu Hause, lieber lerne ich in der Bibliothek, aber am liebsten lerne ich mit Freunden.',
      'Im Kurs sprechen wir viel, zu Hause übe ich noch mehr, aber im Krankenhaus lerne ich am meisten.',
      'Ich höre oft deutsche Podcasts, noch öfter schaue ich Videos, aber am häufigsten benutze ich Lern-Apps.',
      'Grammatik ist wichtig, der Wortschatz ist wichtiger, aber die tägliche Übung ist am wichtigsten.',
      'Lesen finde ich leicht, Hören ist für mich noch leichter, aber Vokabeln lernen fällt mir am leichtesten.',
      'Ich lerne am besten durch praktische Beispiele aus dem Alltag.',
      'Abends möchte ich noch zwanzig Vokabelkärtchen schreiben.',
      'Vor dem Schlafen sollte man die neuen Wörter noch einmal wiederholen.',
      'Für manche Verben hilft es, kleine Bilder zu zeichnen.',
      'Für eine gute Aussprache muss man die Sätze laut nachsprechen.',
      'Heute Nachmittag muss ich noch zwei Seiten Grammatikaufgaben lösen.',
      'Versuch bitte, im Alltag so viel wie möglich auf Deutsch zu denken.',
      'Am allerwichtigsten beim Lernen ist die tägliche Disziplin.',
      'Ohne echte Sprachpraxis vergisst man die gelernten Wörter schnell wieder.',
      'Man muss nicht alle Regeln auswendig lernen, um gut zu sprechen.',
      'Die Theorie ist einfach, aber in der Praxis braucht man viel Übung.',
      'Dieser Nachmittagskurs passt perfekt in meinen Zeitplan.',
      'Ich lerne mit Karteikarten, denn die Methode passt super zu mir.',
      'Ich möchte bald die B2-Prüfung machen, deshalb lerne ich jeden Tag.',
      'Langweilige Texte helfen mir gar nicht beim Lernen.',
      'Ich muss mir das Wort sofort notieren, sonst vergesse ich es wieder.',
      'Jeder Mensch ist anders und hat seinen eigenen Lernstil.',
      'Beim ersten Lesen muss man nur die Hauptinformationen im Text verstehen.',
      'Ich habe mich für eine Ausbildung in der Pflege und gegen ein langes Studium entschieden.',
      'Adham nutzt jeden Tag eine App, um sein gesprochenes Deutsch zu verbessern.',
      'Nach einem Monat Training merke ich schon, dass ich viel flüssiger spreche.',
      'Mit Beispielsätzen kann ich mir neue Wörter viel besser merken.',
      'Ich schreibe heute meine Bewerbung für das Krankenhaus und aktualisiere meinen Lebenslauf.',
      'Die Ausbildung zum Pflegefachmann ist eine sehr gute Wahl für meine Zukunft.',
      'Ich möchte dieses Jahr meinen B2-Kurs erfolgreich beenden.'
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
      'Ich habe in Syrien weniger als in Deutschland verdient.',
      'Die Arbeit in einem großen Unternehmen erfordert viel Disziplin.',
      'Man muss eine gute Balance zwischen dem Leben und dem Beruf finden.',
      'Nach dem Studium beginnt für viele junge Menschen das Arbeitsleben.',
      'Die Firma hat über tausend Angestellte auf der ganzen Welt.',
      'Er arbeitet als Verkäufer in einem großen Autohaus.',
      'Wir bauen Autos von höchster Qualität. Das neue Modell wurde komplett in Deutschland gebaut.',
      'Das ist das erfolgreichste Jahr für unsere Firma.',
      'Dieses Modell ist der erfolgreichste Wagen in unserer Firmengeschichte.',
      'Das Design war so gut, wir bauen ihn bis heute.',
      'Im Jahr 2005 hat unsere Erfolgsgeschichte begonnen.',
      'Die Firma ist heute riesig, und ich bin stolz, denn ich war von Anfang an dabei.',
      'Der Erfolg kommt nicht von allein, man muss hart arbeiten.',
      'Wir arbeiten an einem neuen Projekt für das nächste Jahr.',
      'Der Betrieb läuft heute sehr gut, es gibt keine Probleme.',
      'Das BMW-Werk in München ist sehr modern.',
      'Die neue Fabrik produziert tausende Teile pro Tag.',
      'Die Produktion der neuen Serie beginnt nächsten Monat.',
      'Die großen Maschinen stehen in der neuen Halle.',
      'Alle fertigen Produkte werden sofort ins Lager gebracht.',
      'Der Export nach Asien ist sehr wichtig für uns, und wir kümmern uns um den Import von Rohstoffen.',
      'Der LKW transportiert die Autos vom Werk ins Autohaus.',
      'Die Pharmafirma produziert jeden Tag tausende Medikamente.',
      'Ein gutes Arbeitsklima steigert die Produktivität der Mitarbeiter.',
      'Der Absatz von Schmerzmitteln ist im Winter gestiegen.',
      'Mein Bruder möchte nach der Ausbildung einen eigenen Pflegedienst gründen.',
      'Auf der Medizin-Messe haben wir ein neues Rollstuhldesign gesehen. Wenn einer kaputtgeht, bringen wir ihn in die Werkstatt.',
      'Der Durchschnitt der Arbeitsstunden pro Woche liegt bei 40 Stunden.'
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
      'Ich wünsche dir einen schönen Tag und hoffe, dass wir uns bald wiedersehen.',
      'Ich bin stolz auf dich.',
      'Ich habe gestern im Krankenhaus einige alte Bekannte getroffen.',
      'Ein Bekannter von mir arbeitet auch als Krankenpfleger in Berlin.',
      'Viele Unbekannte haben nach dem Unfall ihre Hilfe angeboten.',
      'Ein Unbekannter hat diese Blumen für die Patientin abgegeben.',
      'Am Wochenende besuchen mich meine Verwandten.',
      'Darf ich den Patienten sehen? Ich bin ein naher Verwandter.',
      'Im Frühling sieht man im Park viele glückliche Verliebte.',
      'Ruf mich bitte vorher an, wenn du zu Besuch kommst.',
      'In Deutschland hat eine Familie im Durchschnitt 4 Personen.',
      'Ich möchte dir zur bestandenen B1-Prüfung gratulieren.',
      'Alles Gute zum Geburtstag, Frau Müller! Bleiben Sie gesund.',
      'Erinnern Sie sich an mich?',
      'Erinnerst du dich an mich?',
      'Fühlst du dich gestört?'
    ]
  },
  {
    id:'technik', ar:'التقنية والإنترنت', de:'Technik & Internet', type:'flat',
    items:[
      'Mein Internetanschluss ist zu langsam, um die Dateien auf den Server hochzuladen.',
      'Wo ist der Anschluss für das Kabel?',
      'Das Gerät macht ein komisches Geräusch, wir müssen den Techniker rufen.',
      'Repariere dein Mikrofon, man kann dich nicht hören.',
      'Deine Stimme ist nicht klar.'
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
      'Das finde ich aber traurig.',
      'Dieses medizinische Produkt ist sehr gut für die Haut.',
      'Die Produktion des neuen Impfstoffs beginnt morgen.',
      'Ein fairer Lohn ist eine große Motivation für die Pflegekräfte.',
      'Unsere Klinik bietet den Mitarbeitern viele Weiterbildungen.',
      'Die Arbeitszeit im Krankenhaus kann manchmal sehr anstrengend sein.',
      'Freie Zeit ist für Pflegekräfte sehr kostbar.',
      'Nach dem Schlaganfall fällt es dem Patienten schwer, einen ganzen Satz zu bilden.',
      'Bevor Sie dem Patienten die Spritze geben, müssen Sie vorher Ihre Hände desinfizieren.',
      'Der Patient hat keinen Appetit, aber er sollte wenigstens ein bisschen Suppe essen.',
      'Sie müssen diese Tabletten dreimal täglich vor dem Essen nehmen.',
      'Ich habe heute Morgen in der Zeitung einen interessanten Artikel über die Pflege in Deutschland gelesen.',
      'Der Zeitungsartikel berichtet über den neuen Tarifvertrag für Pflegekräfte.',
      'Schwester Maria wurde zur Mitarbeiterin des Jahres gewählt, weil sie immer so geduldig ist.',
      'Die Apotheke nebenan ist eine wichtige Geschäftspartnerin für unsere Klinik.',
      'Zur Pensionierung des Chefarztes und zum 50-jährigen Jubiläum des Krankenhauses gibt es eine große Feier.',
      'Die neue Station für Kardiologie wird nächste Woche feierlich eröffnet.',
      'Die Konkurrenz zwischen den privaten Krankenhäusern ist sehr groß.',
      'Die Patientin sucht ihre Versichertenkarte in der Geldbörse, die in ihrer Handtasche liegt.',
      'Der Chefarzt trägt immer eine braune Aktentasche, aber der junge Pfleger bringt sein Essen im Rucksack mit.',
      'Ich habe immer einen Notizblock in der Tasche, um die Blutdruckwerte aufzuschreiben.',
      'Ich lege das ärztliche Rezept in den Briefumschlag.',
      'Rollstühle und Betten sind wichtige Gebrauchsgegenstände im Krankenhaus.',
      'Nach der erfolgreichen Operation ist der Patient wunschlos glücklich.',
      'Das Gesicht des Patienten ist sehr farblos, er braucht dringend frische Luft.',
      'Die Zahl der Pflegekräfte in Deutschland ist in den letzten Jahren gewachsen.',
      'Die Dosierung dieses Medikaments ist nur für Erwachsene, nicht für Kinder.',
      'Der Gedanke, kranken Menschen zu helfen, ist eine schöne Idee. Aber 12 Stunden Nachtschicht? Das ist echter Wahnsinn.',
      'Der Arzt hat mich heute für meine genaue und schnelle Arbeit gelobt.',
      'Der Bürgermeister hat dem Krankenhaus für sein großes soziales Engagement gedankt.',
      'Ich möchte gerne Ihre Meinung zu diesem neuen Pflegeplan hören.',
      'Meiner Meinung nach ist die Nachtschicht sehr anstrengend, aber extrem wichtig.',
      'Ich finde es toll, dass wir im Krankenhaus ein neues Team haben.',
      'Besonders gut gefällt mir der freundliche Umgang mit den Patienten auf dieser Station.',
      'Der Ratschlag vom Chefarzt war wirklich sehr hilfreich.',
      'Der Patient ist mit der Operation und der Pflege sehr zufrieden.',
      'Herzlichen Glückwunsch zum Jubiläum! Sie arbeiten schon 20 Jahre in dieser Klinik.',
      'Wir wünschen Ihnen eine schnelle und gute Besserung.',
      'Wir gratulieren Ihnen herzlich zu Ihrem neuen Job als Krankenpfleger.',
      'Wir danken Ihnen für Ihr Vertrauen in unser Krankenhaus.',
      'Wir bedanken uns für Ihre großartige Hilfe während der Operation.',
      'Wir hoffen, dass Sie das Krankenhaus bald gesund verlassen können.',
      'Obwohl der Patient sehr alt ist, ist er nach der OP noch sehr fit.',
      'Ich muss mich auf meine Abschlussprüfung in der Pflege vorbereiten.',
      'Regelmäßiges Händewaschen ist eine lebenswichtige Gewohnheit im Krankenhaus.',
      'Im Durchschnitt bleiben die Patienten drei Tage auf dieser Station.',
      'Im Winter verbrauchen wir in der Klinik viel mehr Taschentücher und Medikamente.',
      'Laut einer aktuellen Umfrage schlafen viele Pflegekräfte zu wenig.',
      'Das Ergebnis der Blutuntersuchung ist heute Morgen gekommen.',
      'Die Ergebnisse der Studie sind für die Ärzte sehr interessant.',
      'Fast die Hälfte der Patienten auf dieser Station ist über 70 Jahre alt.',
      'Heute haben wir doppelt so viele Notfälle wie gestern.',
      'Ein Chefarzt verdient oft zweimal so viel Geld wie ein Assistenzarzt.',
      'In dieser Klinik gibt es zweimal so viele Pflegekräfte wie Ärzte.',
      'Der Jugendliche wurde nach dem Sportunfall ins Krankenhaus gebracht.',
      'Das Gesundheitsministerium plant neue Regeln für Krankenhäuser.',
      'Die schnelle Besserung des Patienten hat den Arzt positiv überrascht.',
      'Welches Medikament gegen Halsschmerzen können Sie mir empfehlen?',
      'Kopfschmerzen treten häufig bei Stress und Schlafmangel auf.',
      'Der Patient hat so starke Halsschmerzen, dass er kaum sprechen kann.',
      'Der Patient hat leichtes Fieber, ansonsten geht es ihm gut.',
      'Die erfahrene Krankenschwester versucht, dem neuen Schüler alles geduldig beizubringen.',
      'Mein Kollege hat mir gestern beigebracht, wie man dieses medizinische Gerät benutzt.',
      'Die genaue Ursache für die Allergie des Patienten ist leider noch unbekannt.',
      'Der Arzt nimmt sich viel Zeit, um alle Fragen des Patienten ruhig zu beantworten.',
      'Wir müssen dringend neue Handschuhe und Masken für die Station bestellen.',
      'Wir haben den Patienten für morgen früh zur Blutabnahme bestellt.',
      'Für die Arbeit beim ambulanten Pflegedienst braucht man unbedingt einen Führerschein.',
      'Unser neuer Kollege lächelt den ganzen Tag, ich glaube, er ist frisch verliebt.',
      'Unser Stationsleiter ist ein echter Spaßvogel, er bringt das ganze Team immer zum Lachen.',
      'Als der Pfleger gestern mit dem Patienten gesprochen hat, ging es ihm schon viel besser.',
      'Als ich letzte Woche im Krankenhaus ein Praktikum gemacht habe, habe ich viel über die Pflege gelernt.',
      'Die Ärzte vermuten, dass der Patient eine seltene Infektion hat.',
      'Bitte konzentrieren Sie sich bei der Medikamentenausgabe, damit kein Fehler passiert!',
      'Der Pfleger erklärt die Übung sehr ruhig, sodass der Patient alles sofort versteht.',
      'Weißt du zufällig, wann heute die Übergabe im Stationszimmer beginnt?',
      'Der Patient im Nachbarbett bekommt genau dasselbe Medikament wie Sie.',
      'Schwester Anna und ich arbeiten auf derselben Station im Krankenhaus.',
      'Das gemeinsame Kaffeetrinken nach der Übergabe ist für unser Team eine feste Gewohnheit geworden.',
      'Der Chefarzt führt gerade ein wichtiges Gespräch mit den Angehörigen.',
      'Vor der Operation dürfen die Patienten dem Arzt alle wichtigen Fragen stellen.',
      'Bei der Dosierung der Medikamente muss man im Krankenhaus extrem gut aufpassen.',
      'Auf unserer Station arbeiten insgesamt zwanzig Pflegekräfte und fünf Ärzte.',
      'Hypertonie wird in der Alltagssprache einfach Bluthochdruck genannt.',
      'Der Patient muss vor den Tabletten etwas essen, aber er hat seit gestern nichts gegessen.',
      'Der Patient klagte über starke Brustschmerzen; daraufhin habe ich sofort den Notarzt gerufen.',
      'Als Nächstes haben wir ein EKG gemacht.',
      'Anschließend bekam er Medikamente, und zuletzt wurde er auf die Intensivstation gebracht.',
      'In der Intensivpflege muss man absolut zuverlässig sein und viel Verantwortung übernehmen.',
      'Der Blutdruck des Patienten ist heute viel zu niedrig, wir müssen sofort den Arzt informieren.',
      'In der Notaufnahme erlebt man jeden Tag spannende und neue Situationen.',
      'Der Chefarzt hält morgen einen wichtigen Vortrag über moderne Notfallmedizin.',
      'Der Notarzt kam gestern innerhalb von fünf Minuten in die Klinik.',
      'Die Krankenschwester gab dem Patienten eine Schmerztablette, weil es keine andere Lösung gab.',
      'Der Chefarzt sagte mir, dass die Operation sehr gut verlaufen ist.'
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
      'Können Sie bitte mein Paket von der Post abholen?',
      'Ich liebe kaltes Wasser.',
      'Kaltes Wasser erfrischt den Körper.',
      'Nach dem Sport trinke ich gern kaltes Wasser.',
      'Ich wasche mein Gesicht mit kaltem Wasser.',
      'Wir haben leider nur wenig freie Zeit.',
      'In meiner freien Zeit lese ich gerne.',
      'Mit freier Zeit kann man viel anfangen.',
      'Wir haben das Geschenk für den kranken Jungen in buntes Geschenkpapier eingepackt.',
      'Ich nehme heute den Bus zur Klinik, weil es regnet.',
      'Nächsten Monat nehme ich mir eine Woche Urlaub.',
      'Du musst dich beeilen, ansonsten verpassen wir den Bus.'
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
      'Ich bereite mich auf die Prüfung vor.',
      'Ich muss mich auf meine Abschlussprüfung in der Pflege vorbereiten.',
      'Die B2-Prüfung ist nicht leicht, aber du schaffst das bestimmt!',
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
  },
  {
    id:'konsum', ar:'المقارنات والنسب والاستهلاك', de:'Vergleiche, Prozent & Konsum', type:'flat',
    items:[
      'Im Sommer solltest du doppelt so viel Wasser trinken wie im Winter.',
      'Mieten machen oft 40 Prozent des Einkommens aus.',
      'Der Konsum von Zucker ist in den letzten Jahren stark gestiegen.',
      'Viele Menschen konsumieren jeden Tag zu viel Koffein.'
    ]
  },
  {
    id:'refl-passiv', ar:'الأفعال الانعكاسية والمبني للمجهول (wurde)', de:'Reflexive Verben & Passiv (wurde)', type:'flat',
    items:[
      'Wie fühlen Sie sich heute nach der Operation?',
      'Ich fühle mich nach der Nachtschicht total erschöpft.',
      'Können Sie sich noch an den Unfall erinnern?',
      'Ich erinnere mich leider nicht mehr an seinen Namen.',
      'Ich ärgere mich oft über die unpünktlichen Busse.',
      'Bitte ärgern Sie sich nicht, das ist nicht gut für Ihren Blutdruck.',
      'Der Patient muss sich nach der Operation langsam bewegen.',
      'Sie sollten sich jeden Tag mindestens eine halbe Stunde bewegen.',
      'Der Patient hat sich über das kalte Essen im Krankenhaus beschwert.',
      'Warum beschwerst du dich immer über deine Arbeitszeiten?',
      'Ich freue mich schon sehr auf meinen nächsten Urlaub.',
      'Wir freuen uns über die schnelle Besserung Ihres Gesundheitszustands.',
      'Seit wann interessieren Sie sich für den Pflegeberuf?',
      'Ich interessiere mich sehr für medizinische Themen.',
      'Wir haben uns am ersten Tag der Ausbildung in der Klinik kennengelernt.',
      'Die neuen Kollegen müssen sich erst noch besser kennenlernen.',
      'Wir treffen uns jeden Morgen um sechs Uhr zur Übergabe im Stationszimmer.',
      'Wann wollen wir uns heute Abend in der Stadt treffen?',
      'Ziehen Sie sich bitte warm an, es ist heute sehr kalt draußen.',
      'Der ältere Patient kann sich leider nicht mehr alleine anziehen.',
      'Ich möchte mich nicht mit dir über solche Kleinigkeiten streiten.',
      'Die beiden Kollegen streiten sich fast jeden Tag um den Dienstplan.',
      'Die Krankenschwester unterhält sich freundlich mit der älteren Dame.',
      'Wir haben uns gestern lange über unsere Zukunft in Deutschland unterhalten.',
      'Ich verstehe mich zum Glück super mit allen Kollegen auf meiner Station.',
      'Durch den lauten Lärm auf der Straße verstehen wir uns kaum.',
      'Haben Sie heute überhaupt schon etwas gegessen oder getrunken?',
      'Ich habe heute Nacht überhaupt nicht gut geschlafen.',
      'Der Fehler ist passiert, aber wir müssen jetzt etwas daraus lernen.',
      'Hier ist Ihr Behandlungsplan, daraus können Sie alle wichtigen Termine ablesen.',
      'Bitte setzen Sie sich kurz ins Wartezimmer, der Arzt kommt gleich.',
      'Ich muss mich nach dieser langen Schicht erst mal eine Stunde ausruhen.',
      'Du musst dich unbedingt auf die nächste Deutschprüfung konzentrieren.',
      'Ich habe mich gestern bei dem kalten Wetter leicht erkältet.',
      'Können Sie sich bitte den Oberkörper für die Untersuchung frei machen?',
      'Ich muss mich jeden Tag vor dem Dienst gründlich waschen und desinfizieren.',
      'Beeil dich bitte, sonst kommen wir noch zu spät zur Frühschicht!',
      'Sie müssen sich an die neuen Arbeitszeiten im Krankenhaus erst gewöhnen.',
      'Ich kümmere mich heute um die Patienten in Zimmer vier und fünf.',
      'Wir müssen uns vor der Operation noch kurz mit dem Chefarzt besprechen.',
      'Der Patient wurde gestern erfolgreich operiert.',
      'Die Medikamente wurden schon am Morgen verteilt.',
      'Der Blutdruck wurde vor einer Stunde gemessen.',
      'Die Wunde wurde gründlich gereinigt und verbunden.',
      'Der Notarzt wurde sofort nach dem Unfall gerufen.',
      'Das Krankenzimmer wurde heute Morgen geputzt und desinfiziert.',
      'Die Laborergebnisse wurden an den Chefarzt geschickt.',
      'Der neue Dienstplan wurde gestern endlich veröffentlicht.',
      'Die Patientenakte wurde leider noch nicht aktualisiert.',
      'Das Essen wurde heute leider kalt serviert.',
      'Der alte Mann wurde mit dem Krankenwagen in die Klinik gebracht.',
      'Die Operation wurde wegen eines Notfalls auf morgen verschoben.',
      'Alle wichtigen Informationen wurden bei der Übergabe besprochen.',
      'Der Verband wurde von der Krankenschwester gewechselt.',
      'Dem Patienten wurde Blut für die Untersuchung abgenommen.',
      'Die Tür zur Notaufnahme wurde aus Sicherheitsgründen geschlossen.',
      'Das medizinische Gerät wurde letzte Woche von einem Techniker repariert.',
      'Der Vertrag wurde von beiden Seiten unterschrieben.',
      'Die Rechnung wurde bereits vor zwei Tagen bezahlt.',
      'Mein Antrag wurde vom Wohnungsamt schnell bearbeitet.',
      'Die E-Mail wurde versehentlich an die falsche Adresse gesendet.',
      'Das Problem wurde im Team schnell gelöst.',
      'Die neue Station wurde im letzten Jahr feierlich eröffnet.',
      'Viele neue Pflegekräfte wurden in diesem Monat eingestellt.',
      'Der Termin beim Facharzt wurde telefonisch vereinbart.',
      'Ich wurde gestern gegen Grippe geimpft.',
      'Wir wurden sehr freundlich von den neuen Kollegen empfangen.',
      'Wurdest du schon über die neuen Regeln informiert?',
      'Wurden Sie schon von einem Arzt untersucht?',
      'Das Fenster wurde geöffnet, um das Zimmer zu lüften.'
    ]
  },
  {
    id:'arbeit-wichtig', ar:'شو المهم بالنسبة إلك بالشغل؟', de:'Was ist dir bei der Arbeit wichtig?', type:'flat',
    items:[
      'Was ist dir bei deiner Arbeit wichtig?',
      'Was ist für dich wichtig?',
      'Wie wichtig sind dir flexible Arbeitszeiten?',
      'Das ist mir nicht so wichtig, ich finde guten Lohn wichtiger.',
      'Ich kann sagen, was mir bei der Arbeit wichtig ist: Ein gutes Team.',
      'Es ist mir besonders wichtig, dass die Schichten gerecht verteilt sind.',
      'Was mich an diesem Job stört, ist der lange Weg zum Krankenhaus.',
      'Es stört mich, wenn die Kommunikation im Team schlecht ist.',
      'Wie wichtig ist Ihnen ein hohes Gehalt?',
      'Wie viel Wert legst du auf ein gutes Arbeitsklima?',
      'Ich bevorzuge feste Arbeitszeiten, weil ich meinen Tag besser planen kann.',
      'Ich möchte jetzt kurz meine Meinung zur Umfrage sagen.'
    ]
  },
  {
    id:'geduld', ar:'جمل متفرقة: الصبر، الذهب، التفكير', de:'Geduld, Gold & weitere Ausdrücke', type:'flat',
    items:[
      'Ich war von Anfang an dabei.',
      'Große Geduld ist in diesem Beruf sehr wichtig.',
      'Mit großer Geduld kann man jedes Problem lösen.',
      'Reines Gold ist sehr teuer.',
      'Die Bank verkauft reines Gold.',
      'Dieser Ehering besteht aus reinem Gold.',
      'Zwölf Stunden arbeiten ohne richtige Pause? Es ist ja Wahnsinn.',
      'Können Sie bitte das Licht ausmachen? Der Patient möchte schlafen.',
      'Ich wundere mich oft über die Bürokratie in Deutschland.',
      'Ich dachte, du hast heute Frühschicht!',
      'Das habe ich mir schon gedacht!',
      'Die neue Patientin spricht sehr gut Arabisch, sie könnte aus Syrien sein.'
    ]
  },
  {
    id:'medien', ar:'التلفزيون والأفلام والكتب', de:'Medien: Fernsehen, Serien & Bücher', type:'flat',
    items:[
      'Ich schaue mir abends gern eine spannende deutsche Serie wie „Dark“ an, um mein Hörverstehen zu verbessern.',
      'Gestern Abend lief ein sehr interessanter Film über das Leben von Ärzten im Krankenhaus.',
      'Die letzte Folge der Serie war so spannend, dass ich sofort weiterschauen musste.',
      'Am Sonntagabend schauen Millionen Menschen in Deutschland traditionell einen Krimi.',
      'Diese medizinische Sendung läuft jeden Dienstag auf einem bekannten deutschen Sender.',
      'In Deutschland muss jeder Haushalt einen Beitrag für den öffentlich-rechtlichen Rundfunk bezahlen.',
      'Wenn ich eine Sendung im Fernsehen verpasse, kann ich sie später kostenlos in der Mediathek anschauen.',
      'Wo liegt die Fernbedienung? Ich möchte den Ton etwas leiser machen.',
      'Früher hat man Filme oft auf DVD gekauft, heute nutzt fast jeder Streaming-Dienste.',
      'Dieser berühmte Schauspieler arbeitet im Theater und beim Film.',
      'Der Hauptdarsteller hat die Rolle des Chirurgen sehr realistisch gespielt.',
      'Der Regisseur gibt den Schauspielern genaue Anweisungen für die nächste Szene.',
      'Über fünf Millionen Zuschauer haben gestern Abend das spannende Fußballspiel im Fernsehen verfolgt.',
      'Die neue Serie über das Krankenhausteam hat beim Publikum großen Erfolg.',
      'Beim Filmeschauen knabbere ich am liebsten gesunde Nüsse oder ein paar Chips.',
      'Am Wochenende nehme ich mir Zeit, um meine Lieblingssendungen im Fernsehen anzuschauen.',
      'Ich finde Mystery- und Science-Fiction-Serien wie „Dark“ extrem spannend.',
      'Nach einer langen Schicht gucke ich abends gern noch einen spannenden Film.',
      'Ich habe unter dem neuen Lernvideo auf YouTube einen positiven Kommentar geschrieben.',
      'In dem alten Märchen gab der König strenge Befehle, die jeder befolgen musste.',
      'Im Zug auf dem Weg zur Arbeit lese ich gerade einen spannenden historischen Roman.',
      'Ich habe mir ein Sachbuch über Anatomie und Erste Hilfe ausgeliehen.',
      'In der Buchhandlung habe ich einen guten Ratgeber zum Thema Gesunder Schlaf gefunden.',
      'Wenn ich abends müde bin, mache ich das Licht aus und höre im Bett ein deutsches Hörbuch.',
      'Die Krankenschwester liest dem kranken Kind zum Einschlafen ein altes Märchen aus einem bunten Bilderbuch vor.'
    ]
  },
  {
    id:'polizei', ar:'الشرطة والسرقة والأمان', de:'Polizei, Diebstahl & Sicherheit', type:'flat',
    items:[
      'Nach dem Einbruch in die Apotheke sucht die Polizei überall nach dem Einbrecher.',
      'Im Krankenhaus kommt es manchmal zu einem Diebstahl, deshalb sollte man Wertsachen einschließen, damit der Dieb keine Chance hat.',
      'Jemand hat gestern im Pausenraum mein Handy gestohlen; wer stiehlt denn so etwas?',
      'Nach dem Überfall wurde das Opfer im Krankenhaus behandelt, während die Polizei den Täter festgenommen hat.',
      'Im vollen Bus wurde mir leider mein Geldbeutel aus der Jackentasche gezogen.',
      'Der Einbrecher hat mit einem Hammer das Fenster im Erdgeschoss eingeschlagen.',
      'Wenn dein Fahrrad gestohlen wird, musst du sofort eine Anzeige bei der Polizei machen.',
      'Die Kriminalpolizei hat an der Tür zum Medikamentenschrank einen Fingerabdruck gefunden.',
      'Dank der genauen Personenbeschreibung konnte die Zeugin den Täter auf dem Foto sofort wiedererkennen.',
      'Die Polizei prüft, ob alle Angaben des Zeugen wirklich stimmen.',
      'Bei einem Brand oder einem schweren Unfall auf der Autobahn rufen wir sofort die Feuerwehr über die 112.',
      'Die Polizei musste die Straße nach dem Unfall komplett absperren.',
      'Bitte nehmen Sie vor der Operation keine Wertgegenstände wie Schmuck oder Uhren mit ins Zimmer.',
      'Im Krankenhaus steht die Sicherheit der Patienten und des Personals immer an erster Stelle.',
      'Nach dem Einbruch haben wir an der Haustür ein neues Sicherheitsschloss eingebaut.',
      'Wegen eines Unfalls hat die Polizei die Straße für zwei Stunden gesperrt.'
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
  {cat:'gefuehle-pflege', de:'Du siehst heute sehr blass aus, hoffentlich hast du nichts Schlimmes.', en:'You look very pale today, I hope you don’t have anything serious.'},

  {cat:'restaurant', de:'Nach der Schicht gehen wir mit den Kollegen in ein gemütliches Lokal.', en:'After the shift we go to a cozy pub with our colleagues.'},
  {cat:'restaurant', de:'Kennst du ein gutes Lokal hier in der Nähe?', en:'Do you know a good place to eat or drink around here?'},
  {cat:'restaurant', de:'Ich möchte diesen Wein reklamieren, er schmeckt nicht gut.', en:'I would like to complain about this wine, it doesn’t taste good.'},
  {cat:'restaurant', de:'Verzeihen Sie, aber ich glaube, es gibt einen Fehler in der Rechnung.', en:'Excuse me, but I think there is a mistake in the bill.'},
  {cat:'restaurant', de:'Verzeihen Sie, aber die Suppe ist leider total versalzen.', en:'Excuse me, but the soup is unfortunately way too salty.'},
  {cat:'restaurant', de:'Entschuldigung, aber das Fleisch ist nicht durch.', en:'Excuse me, but the meat is not cooked through.'},
  {cat:'restaurant', de:'Verzeihen Sie, aber das Messer hier ist nicht richtig sauber.', en:'Excuse me, but the knife here is not properly clean.'},
  {cat:'restaurant', de:'Mein Glas ist schmutzig. Könnte ich ein anderes bekommen?', en:'My glass is dirty. Could I get another one?'},
  {cat:'restaurant', de:'Das Essen schmeckt wirklich fantastisch!', en:'The food tastes really fantastic!'},
  {cat:'restaurant', de:'Hat es Ihnen geschmeckt?', en:'Did you enjoy the meal?'},
  {cat:'restaurant', de:'Ich hätte mein Steak gern medium, bitte.', en:'I would like my steak medium, please.'},
  {cat:'restaurant', de:'Es tut mir leid, dass das Fleisch zu kalt ist. Ich gebe es sofort an die Küche weiter.', en:'I’m sorry that the meat is too cold. I’ll pass it on to the kitchen right away.'},
  {cat:'restaurant', de:'Herr Ober, wir würden gern zahlen, bitte.', en:'Waiter, we would like to pay, please.'},
  {cat:'restaurant', de:'Zusammen oder getrennt?', en:'Together or separate?'},
  {cat:'restaurant', de:'Die Rechnung macht 45 Euro. – Hier sind 50 Euro, stimmt so!', en:'The bill comes to 45 euros. – Here are 50 euros, keep the change!'},
  {cat:'restaurant', de:'Eine kleine Menge Schokolade ist nicht schädlich für die Gesundheit.', en:'A small amount of chocolate is not harmful to your health.'},
  {cat:'restaurant', de:'In der Cafeteria kann man sich jeden Tag ein frisches Gericht aussuchen.', en:'In the cafeteria you can choose a fresh dish every day.'},
  {cat:'restaurant', de:'Am Wochenende brate ich mir gern ein Stück Fleisch mit Kartoffeln.', en:'On weekends I like to fry myself a piece of meat with potatoes.'},
  {cat:'arbeit', de:'Die Arbeit in einem großen Unternehmen erfordert viel Disziplin.', en:'Working at a large company requires a lot of discipline.'},
  {cat:'arbeit', de:'Man muss eine gute Balance zwischen dem Leben und dem Beruf finden.', en:'You have to find a good balance between life and work.'},
  {cat:'arbeit', de:'Nach dem Studium beginnt für viele junge Menschen das Arbeitsleben.', en:'After university, working life begins for many young people.'},
  {cat:'arbeit', de:'Die Firma hat über tausend Angestellte auf der ganzen Welt.', en:'The company has over a thousand employees all over the world.'},
  {cat:'arbeit', de:'Er arbeitet als Verkäufer in einem großen Autohaus.', en:'He works as a salesman at a large car dealership.'},
  {cat:'arbeit', de:'Wir bauen Autos von höchster Qualität. Das neue Modell wurde komplett in Deutschland gebaut.', en:'We build cars of the highest quality. The new model was built entirely in Germany.'},
  {cat:'arbeit', de:'Das ist das erfolgreichste Jahr für unsere Firma.', en:'This is the most successful year for our company.'},
  {cat:'arbeit', de:'Dieses Modell ist der erfolgreichste Wagen in unserer Firmengeschichte.', en:'This model is the most successful car in our company’s history.'},
  {cat:'arbeit', de:'Das Design war so gut, wir bauen ihn bis heute.', en:'The design was so good that we are still building it today.'},
  {cat:'arbeit', de:'Im Jahr 2005 hat unsere Erfolgsgeschichte begonnen.', en:'Our success story began in 2005.'},
  {cat:'arbeit', de:'Die Firma ist heute riesig, und ich bin stolz, denn ich war von Anfang an dabei.', en:'The company is huge today, and I am proud because I was there from the beginning.'},
  {cat:'arbeit', de:'Der Erfolg kommt nicht von allein, man muss hart arbeiten.', en:'Success doesn’t come by itself, you have to work hard.'},
  {cat:'arbeit', de:'Wir arbeiten an einem neuen Projekt für das nächste Jahr.', en:'We are working on a new project for next year.'},
  {cat:'arbeit', de:'Der Betrieb läuft heute sehr gut, es gibt keine Probleme.', en:'The business is running very well today, there are no problems.'},
  {cat:'arbeit', de:'Das BMW-Werk in München ist sehr modern.', en:'The BMW plant in Munich is very modern.'},
  {cat:'arbeit', de:'Die neue Fabrik produziert tausende Teile pro Tag.', en:'The new factory produces thousands of parts per day.'},
  {cat:'arbeit', de:'Die Produktion der neuen Serie beginnt nächsten Monat.', en:'Production of the new series starts next month.'},
  {cat:'arbeit', de:'Die großen Maschinen stehen in der neuen Halle.', en:'The big machines are in the new hall.'},
  {cat:'arbeit', de:'Alle fertigen Produkte werden sofort ins Lager gebracht.', en:'All finished products are immediately taken to the warehouse.'},
  {cat:'arbeit', de:'Der Export nach Asien ist sehr wichtig für uns, und wir kümmern uns um den Import von Rohstoffen.', en:'Exports to Asia are very important to us, and we take care of importing raw materials.'},
  {cat:'arbeit', de:'Der LKW transportiert die Autos vom Werk ins Autohaus.', en:'The truck transports the cars from the plant to the dealership.'},
  {cat:'arbeit', de:'Die Pharmafirma produziert jeden Tag tausende Medikamente.', en:'The pharmaceutical company produces thousands of medications every day.'},
  {cat:'arbeit', de:'Ein gutes Arbeitsklima steigert die Produktivität der Mitarbeiter.', en:'A good working atmosphere increases the employees’ productivity.'},
  {cat:'arbeit', de:'Der Absatz von Schmerzmitteln ist im Winter gestiegen.', en:'Sales of painkillers increased in winter.'},
  {cat:'arbeit', de:'Mein Bruder möchte nach der Ausbildung einen eigenen Pflegedienst gründen.', en:'My brother wants to found his own nursing service after his training.'},
  {cat:'arbeit', de:'Auf der Medizin-Messe haben wir ein neues Rollstuhldesign gesehen. Wenn einer kaputtgeht, bringen wir ihn in die Werkstatt.', en:'At the medical trade fair we saw a new wheelchair design. If one breaks, we take it to the workshop.'},
  {cat:'arbeit', de:'Der Durchschnitt der Arbeitsstunden pro Woche liegt bei 40 Stunden.', en:'The average working hours per week are 40 hours.'},
  {cat:'umgangsformen', de:'Ich bin stolz auf dich.', en:'I’m proud of you.'},
  {cat:'umgangsformen', de:'Ich habe gestern im Krankenhaus einige alte Bekannte getroffen.', en:'Yesterday at the hospital I met some old acquaintances.'},
  {cat:'umgangsformen', de:'Ein Bekannter von mir arbeitet auch als Krankenpfleger in Berlin.', en:'An acquaintance of mine also works as a nurse in Berlin.'},
  {cat:'umgangsformen', de:'Viele Unbekannte haben nach dem Unfall ihre Hilfe angeboten.', en:'Many strangers offered their help after the accident.'},
  {cat:'umgangsformen', de:'Ein Unbekannter hat diese Blumen für die Patientin abgegeben.', en:'A stranger dropped off these flowers for the patient.'},
  {cat:'umgangsformen', de:'Am Wochenende besuchen mich meine Verwandten.', en:'My relatives are visiting me on the weekend.'},
  {cat:'umgangsformen', de:'Darf ich den Patienten sehen? Ich bin ein naher Verwandter.', en:'May I see the patient? I am a close relative.'},
  {cat:'umgangsformen', de:'Im Frühling sieht man im Park viele glückliche Verliebte.', en:'In spring you can see many happy people in love in the park.'},
  {cat:'umgangsformen', de:'Ruf mich bitte vorher an, wenn du zu Besuch kommst.', en:'Please call me beforehand when you come to visit.'},
  {cat:'umgangsformen', de:'In Deutschland hat eine Familie im Durchschnitt 4 Personen.', en:'In Germany a family has an average of 4 people.'},
  {cat:'umgangsformen', de:'Ich möchte dir zur bestandenen B1-Prüfung gratulieren.', en:'I would like to congratulate you on passing your B1 exam.'},
  {cat:'umgangsformen', de:'Alles Gute zum Geburtstag, Frau Müller! Bleiben Sie gesund.', en:'Happy birthday, Mrs. Müller! Stay healthy.'},
  {cat:'umgangsformen', de:'Erinnern Sie sich an mich?', en:'Do you remember me? (formal)'},
  {cat:'umgangsformen', de:'Erinnerst du dich an mich?', en:'Do you remember me? (informal)'},
  {cat:'umgangsformen', de:'Fühlst du dich gestört?', en:'Do you feel disturbed?'},
  {cat:'gesundheit', de:'Dieses medizinische Produkt ist sehr gut für die Haut.', en:'This medical product is very good for the skin.'},
  {cat:'gesundheit', de:'Die Produktion des neuen Impfstoffs beginnt morgen.', en:'Production of the new vaccine starts tomorrow.'},
  {cat:'gesundheit', de:'Ein fairer Lohn ist eine große Motivation für die Pflegekräfte.', en:'Fair pay is a big motivation for nursing staff.'},
  {cat:'gesundheit', de:'Unsere Klinik bietet den Mitarbeitern viele Weiterbildungen.', en:'Our clinic offers its employees many further training opportunities.'},
  {cat:'gesundheit', de:'Die Arbeitszeit im Krankenhaus kann manchmal sehr anstrengend sein.', en:'Working hours in the hospital can sometimes be very exhausting.'},
  {cat:'gesundheit', de:'Freie Zeit ist für Pflegekräfte sehr kostbar.', en:'Free time is very precious for nursing staff.'},
  {cat:'gesundheit', de:'Nach dem Schlaganfall fällt es dem Patienten schwer, einen ganzen Satz zu bilden.', en:'After the stroke it is difficult for the patient to form a whole sentence.'},
  {cat:'gesundheit', de:'Bevor Sie dem Patienten die Spritze geben, müssen Sie vorher Ihre Hände desinfizieren.', en:'Before you give the patient the injection, you must disinfect your hands first.'},
  {cat:'gesundheit', de:'Der Patient hat keinen Appetit, aber er sollte wenigstens ein bisschen Suppe essen.', en:'The patient has no appetite, but he should at least eat a little soup.'},
  {cat:'gesundheit', de:'Sie müssen diese Tabletten dreimal täglich vor dem Essen nehmen.', en:'You must take these tablets three times a day before meals.'},
  {cat:'gesundheit', de:'Ich habe heute Morgen in der Zeitung einen interessanten Artikel über die Pflege in Deutschland gelesen.', en:'This morning I read an interesting article in the newspaper about nursing in Germany.'},
  {cat:'gesundheit', de:'Der Zeitungsartikel berichtet über den neuen Tarifvertrag für Pflegekräfte.', en:'The newspaper article reports on the new collective agreement for nursing staff.'},
  {cat:'gesundheit', de:'Schwester Maria wurde zur Mitarbeiterin des Jahres gewählt, weil sie immer so geduldig ist.', en:'Sister Maria was chosen as employee of the year because she is always so patient.'},
  {cat:'gesundheit', de:'Die Apotheke nebenan ist eine wichtige Geschäftspartnerin für unsere Klinik.', en:'The pharmacy next door is an important business partner for our clinic.'},
  {cat:'gesundheit', de:'Zur Pensionierung des Chefarztes und zum 50-jährigen Jubiläum des Krankenhauses gibt es eine große Feier.', en:'There is a big celebration for the chief physician’s retirement and the hospital’s 50th anniversary.'},
  {cat:'gesundheit', de:'Die neue Station für Kardiologie wird nächste Woche feierlich eröffnet.', en:'The new cardiology ward will be officially opened next week.'},
  {cat:'gesundheit', de:'Die Konkurrenz zwischen den privaten Krankenhäusern ist sehr groß.', en:'The competition between the private hospitals is very big.'},
  {cat:'gesundheit', de:'Die Patientin sucht ihre Versichertenkarte in der Geldbörse, die in ihrer Handtasche liegt.', en:'The patient is looking for her insurance card in the wallet that is in her handbag.'},
  {cat:'gesundheit', de:'Der Chefarzt trägt immer eine braune Aktentasche, aber der junge Pfleger bringt sein Essen im Rucksack mit.', en:'The chief physician always carries a brown briefcase, but the young nurse brings his food in a backpack.'},
  {cat:'gesundheit', de:'Ich habe immer einen Notizblock in der Tasche, um die Blutdruckwerte aufzuschreiben.', en:'I always have a notepad in my pocket to write down the blood pressure values.'},
  {cat:'gesundheit', de:'Ich lege das ärztliche Rezept in den Briefumschlag.', en:'I put the medical prescription in the envelope.'},
  {cat:'gesundheit', de:'Rollstühle und Betten sind wichtige Gebrauchsgegenstände im Krankenhaus.', en:'Wheelchairs and beds are important everyday items in the hospital.'},
  {cat:'gesundheit', de:'Nach der erfolgreichen Operation ist der Patient wunschlos glücklich.', en:'After the successful operation the patient is perfectly happy.'},
  {cat:'gesundheit', de:'Das Gesicht des Patienten ist sehr farblos, er braucht dringend frische Luft.', en:'The patient’s face is very pale, he urgently needs fresh air.'},
  {cat:'gesundheit', de:'Die Zahl der Pflegekräfte in Deutschland ist in den letzten Jahren gewachsen.', en:'The number of nursing staff in Germany has grown in recent years.'},
  {cat:'gesundheit', de:'Die Dosierung dieses Medikaments ist nur für Erwachsene, nicht für Kinder.', en:'The dosage of this medication is only for adults, not for children.'},
  {cat:'gesundheit', de:'Der Gedanke, kranken Menschen zu helfen, ist eine schöne Idee. Aber 12 Stunden Nachtschicht? Das ist echter Wahnsinn.', en:'The idea of helping sick people is a nice one. But a 12-hour night shift? That is real madness.'},
  {cat:'gesundheit', de:'Der Arzt hat mich heute für meine genaue und schnelle Arbeit gelobt.', en:'The doctor praised me today for my precise and fast work.'},
  {cat:'gesundheit', de:'Der Bürgermeister hat dem Krankenhaus für sein großes soziales Engagement gedankt.', en:'The mayor thanked the hospital for its great social commitment.'},
  {cat:'gesundheit', de:'Ich möchte gerne Ihre Meinung zu diesem neuen Pflegeplan hören.', en:'I would like to hear your opinion on this new care plan.'},
  {cat:'gesundheit', de:'Meiner Meinung nach ist die Nachtschicht sehr anstrengend, aber extrem wichtig.', en:'In my opinion the night shift is very exhausting, but extremely important.'},
  {cat:'gesundheit', de:'Ich finde es toll, dass wir im Krankenhaus ein neues Team haben.', en:'I think it’s great that we have a new team at the hospital.'},
  {cat:'gesundheit', de:'Besonders gut gefällt mir der freundliche Umgang mit den Patienten auf dieser Station.', en:'I particularly like the friendly way of dealing with patients on this ward.'},
  {cat:'gesundheit', de:'Der Ratschlag vom Chefarzt war wirklich sehr hilfreich.', en:'The chief physician’s advice was really very helpful.'},
  {cat:'gesundheit', de:'Der Patient ist mit der Operation und der Pflege sehr zufrieden.', en:'The patient is very satisfied with the operation and the care.'},
  {cat:'gesundheit', de:'Herzlichen Glückwunsch zum Jubiläum! Sie arbeiten schon 20 Jahre in dieser Klinik.', en:'Congratulations on your anniversary! You have been working at this clinic for 20 years.'},
  {cat:'gesundheit', de:'Wir wünschen Ihnen eine schnelle und gute Besserung.', en:'We wish you a quick and good recovery.'},
  {cat:'gesundheit', de:'Wir gratulieren Ihnen herzlich zu Ihrem neuen Job als Krankenpfleger.', en:'We warmly congratulate you on your new job as a nurse.'},
  {cat:'gesundheit', de:'Wir danken Ihnen für Ihr Vertrauen in unser Krankenhaus.', en:'We thank you for your trust in our hospital.'},
  {cat:'gesundheit', de:'Wir bedanken uns für Ihre großartige Hilfe während der Operation.', en:'We thank you for your great help during the operation.'},
  {cat:'gesundheit', de:'Wir hoffen, dass Sie das Krankenhaus bald gesund verlassen können.', en:'We hope that you can leave the hospital healthy soon.'},
  {cat:'gesundheit', de:'Obwohl der Patient sehr alt ist, ist er nach der OP noch sehr fit.', en:'Although the patient is very old, he is still very fit after the surgery.'},
  {cat:'gesundheit', de:'Ich muss mich auf meine Abschlussprüfung in der Pflege vorbereiten.', en:'I have to prepare for my final exam in nursing.'},
  {cat:'gesundheit', de:'Regelmäßiges Händewaschen ist eine lebenswichtige Gewohnheit im Krankenhaus.', en:'Regular hand washing is a vital habit in the hospital.'},
  {cat:'gesundheit', de:'Im Durchschnitt bleiben die Patienten drei Tage auf dieser Station.', en:'On average the patients stay three days on this ward.'},
  {cat:'gesundheit', de:'Im Winter verbrauchen wir in der Klinik viel mehr Taschentücher und Medikamente.', en:'In winter we use many more tissues and medications in the clinic.'},
  {cat:'gesundheit', de:'Laut einer aktuellen Umfrage schlafen viele Pflegekräfte zu wenig.', en:'According to a recent survey, many nursing staff sleep too little.'},
  {cat:'gesundheit', de:'Das Ergebnis der Blutuntersuchung ist heute Morgen gekommen.', en:'The result of the blood test arrived this morning.'},
  {cat:'gesundheit', de:'Die Ergebnisse der Studie sind für die Ärzte sehr interessant.', en:'The results of the study are very interesting for the doctors.'},
  {cat:'gesundheit', de:'Fast die Hälfte der Patienten auf dieser Station ist über 70 Jahre alt.', en:'Almost half of the patients on this ward are over 70 years old.'},
  {cat:'gesundheit', de:'Heute haben wir doppelt so viele Notfälle wie gestern.', en:'Today we have twice as many emergencies as yesterday.'},
  {cat:'gesundheit', de:'Ein Chefarzt verdient oft zweimal so viel Geld wie ein Assistenzarzt.', en:'A chief physician often earns twice as much money as an assistant doctor.'},
  {cat:'gesundheit', de:'In dieser Klinik gibt es zweimal so viele Pflegekräfte wie Ärzte.', en:'In this clinic there are twice as many nurses as doctors.'},
  {cat:'gesundheit', de:'Der Jugendliche wurde nach dem Sportunfall ins Krankenhaus gebracht.', en:'The teenager was taken to the hospital after the sports accident.'},
  {cat:'gesundheit', de:'Das Gesundheitsministerium plant neue Regeln für Krankenhäuser.', en:'The health ministry is planning new rules for hospitals.'},
  {cat:'gesundheit', de:'Die schnelle Besserung des Patienten hat den Arzt positiv überrascht.', en:'The patient’s quick recovery pleasantly surprised the doctor.'},
  {cat:'gesundheit', de:'Welches Medikament gegen Halsschmerzen können Sie mir empfehlen?', en:'Which medication for a sore throat can you recommend to me?'},
  {cat:'gesundheit', de:'Kopfschmerzen treten häufig bei Stress und Schlafmangel auf.', en:'Headaches often occur with stress and lack of sleep.'},
  {cat:'gesundheit', de:'Der Patient hat so starke Halsschmerzen, dass er kaum sprechen kann.', en:'The patient has such a bad sore throat that he can hardly speak.'},
  {cat:'gesundheit', de:'Der Patient hat leichtes Fieber, ansonsten geht es ihm gut.', en:'The patient has a slight fever, otherwise he is doing well.'},
  {cat:'adjektive', de:'Ich liebe kaltes Wasser.', en:'I love cold water.'},
  {cat:'adjektive', de:'Kaltes Wasser erfrischt den Körper.', en:'Cold water refreshes the body.'},
  {cat:'adjektive', de:'Nach dem Sport trinke ich gern kaltes Wasser.', en:'After exercise I like to drink cold water.'},
  {cat:'adjektive', de:'Ich wasche mein Gesicht mit kaltem Wasser.', en:'I wash my face with cold water.'},
  {cat:'adjektive', de:'Wir haben leider nur wenig freie Zeit.', en:'Unfortunately we only have little free time.'},
  {cat:'adjektive', de:'In meiner freien Zeit lese ich gerne.', en:'In my free time I like to read.'},
  {cat:'adjektive', de:'Mit freier Zeit kann man viel anfangen.', en:'With free time you can do a lot.'},
  {cat:'adjektive', de:'Wir haben das Geschenk für den kranken Jungen in buntes Geschenkpapier eingepackt.', en:'We wrapped the gift for the sick boy in colorful wrapping paper.'},
  {cat:'adjektive', de:'Ich nehme heute den Bus zur Klinik, weil es regnet.', en:'I am taking the bus to the clinic today because it is raining.'},
  {cat:'adjektive', de:'Nächsten Monat nehme ich mir eine Woche Urlaub.', en:'Next month I am taking a week off.'},
  {cat:'adjektive', de:'Du musst dich beeilen, ansonsten verpassen wir den Bus.', en:'You have to hurry, otherwise we will miss the bus.'},
  {cat:'technik', de:'Das Gerät macht ein komisches Geräusch, wir müssen den Techniker rufen.', en:'The device is making a strange noise, we have to call the technician.'},
  {cat:'technik', de:'Repariere dein Mikrofon, man kann dich nicht hören.', en:'Repair your microphone, we can’t hear you.'},
  {cat:'technik', de:'Deine Stimme ist nicht klar.', en:'Your voice is not clear.'},
  {cat:'vorschlaege', de:'Ich bereite mich auf die Prüfung vor.', en:'I am preparing for the exam.'},
  {cat:'vorschlaege', de:'Ich muss mich auf meine Abschlussprüfung in der Pflege vorbereiten.', en:'I have to prepare for my final exam in nursing.'},
  {cat:'vorschlaege', de:'Die B2-Prüfung ist nicht leicht, aber du schaffst das bestimmt!', en:'The B2 exam is not easy, but you will definitely manage it!'},
  {cat:'konsum', de:'Im Sommer solltest du doppelt so viel Wasser trinken wie im Winter.', en:'In summer you should drink twice as much water as in winter.'},
  {cat:'konsum', de:'Mieten machen oft 40 Prozent des Einkommens aus.', en:'Rent often makes up 40 percent of income.'},
  {cat:'konsum', de:'Der Konsum von Zucker ist in den letzten Jahren stark gestiegen.', en:'The consumption of sugar has risen sharply in recent years.'},
  {cat:'konsum', de:'Viele Menschen konsumieren jeden Tag zu viel Koffein.', en:'Many people consume too much caffeine every day.'},
  {cat:'refl-passiv', de:'Wie fühlen Sie sich heute nach der Operation?', en:'How are you feeling today after the operation?'},
  {cat:'refl-passiv', de:'Ich fühle mich nach der Nachtschicht total erschöpft.', en:'After the night shift I feel totally exhausted.'},
  {cat:'refl-passiv', de:'Können Sie sich noch an den Unfall erinnern?', en:'Can you still remember the accident?'},
  {cat:'refl-passiv', de:'Ich erinnere mich leider nicht mehr an seinen Namen.', en:'Unfortunately I no longer remember his name.'},
  {cat:'refl-passiv', de:'Ich ärgere mich oft über die unpünktlichen Busse.', en:'I often get annoyed about the unpunctual buses.'},
  {cat:'refl-passiv', de:'Bitte ärgern Sie sich nicht, das ist nicht gut für Ihren Blutdruck.', en:'Please don’t get upset, it’s not good for your blood pressure.'},
  {cat:'refl-passiv', de:'Der Patient muss sich nach der Operation langsam bewegen.', en:'The patient has to move slowly after the operation.'},
  {cat:'refl-passiv', de:'Sie sollten sich jeden Tag mindestens eine halbe Stunde bewegen.', en:'You should move for at least half an hour every day.'},
  {cat:'refl-passiv', de:'Der Patient hat sich über das kalte Essen im Krankenhaus beschwert.', en:'The patient complained about the cold food in the hospital.'},
  {cat:'refl-passiv', de:'Warum beschwerst du dich immer über deine Arbeitszeiten?', en:'Why do you always complain about your working hours?'},
  {cat:'refl-passiv', de:'Ich freue mich schon sehr auf meinen nächsten Urlaub.', en:'I am already really looking forward to my next vacation.'},
  {cat:'refl-passiv', de:'Wir freuen uns über die schnelle Besserung Ihres Gesundheitszustands.', en:'We are pleased about the quick improvement of your health.'},
  {cat:'refl-passiv', de:'Seit wann interessieren Sie sich für den Pflegeberuf?', en:'Since when have you been interested in the nursing profession?'},
  {cat:'refl-passiv', de:'Ich interessiere mich sehr für medizinische Themen.', en:'I am very interested in medical topics.'},
  {cat:'refl-passiv', de:'Wir haben uns am ersten Tag der Ausbildung in der Klinik kennengelernt.', en:'We got to know each other on the first day of training at the clinic.'},
  {cat:'refl-passiv', de:'Die neuen Kollegen müssen sich erst noch besser kennenlernen.', en:'The new colleagues first have to get to know each other better.'},
  {cat:'refl-passiv', de:'Wir treffen uns jeden Morgen um sechs Uhr zur Übergabe im Stationszimmer.', en:'We meet every morning at six o’clock for the handover in the ward room.'},
  {cat:'refl-passiv', de:'Wann wollen wir uns heute Abend in der Stadt treffen?', en:'When shall we meet in town tonight?'},
  {cat:'refl-passiv', de:'Ziehen Sie sich bitte warm an, es ist heute sehr kalt draußen.', en:'Please dress warmly, it is very cold outside today. (formal)'},
  {cat:'refl-passiv', de:'Der ältere Patient kann sich leider nicht mehr alleine anziehen.', en:'The elderly patient can unfortunately no longer dress himself.'},
  {cat:'refl-passiv', de:'Ich möchte mich nicht mit dir über solche Kleinigkeiten streiten.', en:'I don’t want to argue with you about such trivial matters.'},
  {cat:'refl-passiv', de:'Die beiden Kollegen streiten sich fast jeden Tag um den Dienstplan.', en:'The two colleagues argue almost every day about the duty roster.'},
  {cat:'refl-passiv', de:'Die Krankenschwester unterhält sich freundlich mit der älteren Dame.', en:'The nurse is chatting in a friendly way with the elderly lady.'},
  {cat:'refl-passiv', de:'Wir haben uns gestern lange über unsere Zukunft in Deutschland unterhalten.', en:'Yesterday we talked for a long time about our future in Germany.'},
  {cat:'refl-passiv', de:'Ich verstehe mich zum Glück super mit allen Kollegen auf meiner Station.', en:'Luckily I get along great with all colleagues on my ward.'},
  {cat:'refl-passiv', de:'Durch den lauten Lärm auf der Straße verstehen wir uns kaum.', en:'Because of the loud noise on the street we can hardly understand each other.'},
  {cat:'refl-passiv', de:'Haben Sie heute überhaupt schon etwas gegessen oder getrunken?', en:'Have you eaten or drunk anything at all today? (formal)'},
  {cat:'refl-passiv', de:'Ich habe heute Nacht überhaupt nicht gut geschlafen.', en:'I didn’t sleep well at all last night.'},
  {cat:'refl-passiv', de:'Der Fehler ist passiert, aber wir müssen jetzt etwas daraus lernen.', en:'The mistake happened, but now we have to learn something from it.'},
  {cat:'refl-passiv', de:'Hier ist Ihr Behandlungsplan, daraus können Sie alle wichtigen Termine ablesen.', en:'Here is your treatment plan, you can read all the important appointments from it.'},
  {cat:'refl-passiv', de:'Bitte setzen Sie sich kurz ins Wartezimmer, der Arzt kommt gleich.', en:'Please sit down in the waiting room briefly, the doctor will be right with you.'},
  {cat:'refl-passiv', de:'Ich muss mich nach dieser langen Schicht erst mal eine Stunde ausruhen.', en:'After this long shift I first have to rest for an hour.'},
  {cat:'refl-passiv', de:'Du musst dich unbedingt auf die nächste Deutschprüfung konzentrieren.', en:'You absolutely have to concentrate on the next German exam.'},
  {cat:'refl-passiv', de:'Ich habe mich gestern bei dem kalten Wetter leicht erkältet.', en:'I caught a slight cold yesterday in the cold weather.'},
  {cat:'refl-passiv', de:'Können Sie sich bitte den Oberkörper für die Untersuchung frei machen?', en:'Can you please undress your upper body for the examination? (formal)'},
  {cat:'refl-passiv', de:'Ich muss mich jeden Tag vor dem Dienst gründlich waschen und desinfizieren.', en:'I have to wash and disinfect myself thoroughly every day before duty.'},
  {cat:'refl-passiv', de:'Beeil dich bitte, sonst kommen wir noch zu spät zur Frühschicht!', en:'Please hurry up, otherwise we’ll be late for the early shift!'},
  {cat:'refl-passiv', de:'Sie müssen sich an die neuen Arbeitszeiten im Krankenhaus erst gewöhnen.', en:'You first have to get used to the new working hours at the hospital. (formal)'},
  {cat:'refl-passiv', de:'Ich kümmere mich heute um die Patienten in Zimmer vier und fünf.', en:'Today I’ll take care of the patients in rooms four and five.'},
  {cat:'refl-passiv', de:'Wir müssen uns vor der Operation noch kurz mit dem Chefarzt besprechen.', en:'Before the operation we still have to briefly consult with the chief physician.'},
  {cat:'refl-passiv', de:'Der Patient wurde gestern erfolgreich operiert.', en:'The patient was operated on successfully yesterday.'},
  {cat:'refl-passiv', de:'Die Medikamente wurden schon am Morgen verteilt.', en:'The medications were already distributed in the morning.'},
  {cat:'refl-passiv', de:'Der Blutdruck wurde vor einer Stunde gemessen.', en:'The blood pressure was measured an hour ago.'},
  {cat:'refl-passiv', de:'Die Wunde wurde gründlich gereinigt und verbunden.', en:'The wound was thoroughly cleaned and bandaged.'},
  {cat:'refl-passiv', de:'Der Notarzt wurde sofort nach dem Unfall gerufen.', en:'The emergency doctor was called immediately after the accident.'},
  {cat:'refl-passiv', de:'Das Krankenzimmer wurde heute Morgen geputzt und desinfiziert.', en:'The patient room was cleaned and disinfected this morning.'},
  {cat:'refl-passiv', de:'Die Laborergebnisse wurden an den Chefarzt geschickt.', en:'The lab results were sent to the chief physician.'},
  {cat:'refl-passiv', de:'Der neue Dienstplan wurde gestern endlich veröffentlicht.', en:'The new duty roster was finally published yesterday.'},
  {cat:'refl-passiv', de:'Die Patientenakte wurde leider noch nicht aktualisiert.', en:'The patient file has unfortunately not been updated yet.'},
  {cat:'refl-passiv', de:'Das Essen wurde heute leider kalt serviert.', en:'Unfortunately the food was served cold today.'},
  {cat:'refl-passiv', de:'Der alte Mann wurde mit dem Krankenwagen in die Klinik gebracht.', en:'The old man was taken to the clinic by ambulance.'},
  {cat:'refl-passiv', de:'Die Operation wurde wegen eines Notfalls auf morgen verschoben.', en:'The operation was postponed until tomorrow because of an emergency.'},
  {cat:'refl-passiv', de:'Alle wichtigen Informationen wurden bei der Übergabe besprochen.', en:'All important information was discussed at the handover.'},
  {cat:'refl-passiv', de:'Der Verband wurde von der Krankenschwester gewechselt.', en:'The bandage was changed by the nurse.'},
  {cat:'refl-passiv', de:'Dem Patienten wurde Blut für die Untersuchung abgenommen.', en:'Blood was drawn from the patient for the examination.'},
  {cat:'refl-passiv', de:'Die Tür zur Notaufnahme wurde aus Sicherheitsgründen geschlossen.', en:'The door to the emergency room was closed for security reasons.'},
  {cat:'refl-passiv', de:'Das medizinische Gerät wurde letzte Woche von einem Techniker repariert.', en:'The medical device was repaired by a technician last week.'},
  {cat:'refl-passiv', de:'Der Vertrag wurde von beiden Seiten unterschrieben.', en:'The contract was signed by both sides.'},
  {cat:'refl-passiv', de:'Die Rechnung wurde bereits vor zwei Tagen bezahlt.', en:'The bill was already paid two days ago.'},
  {cat:'refl-passiv', de:'Mein Antrag wurde vom Wohnungsamt schnell bearbeitet.', en:'My application was processed quickly by the housing office.'},
  {cat:'refl-passiv', de:'Die E-Mail wurde versehentlich an die falsche Adresse gesendet.', en:'The email was accidentally sent to the wrong address.'},
  {cat:'refl-passiv', de:'Das Problem wurde im Team schnell gelöst.', en:'The problem was solved quickly in the team.'},
  {cat:'refl-passiv', de:'Die neue Station wurde im letzten Jahr feierlich eröffnet.', en:'The new ward was officially opened last year.'},
  {cat:'refl-passiv', de:'Viele neue Pflegekräfte wurden in diesem Monat eingestellt.', en:'Many new nursing staff were hired this month.'},
  {cat:'refl-passiv', de:'Der Termin beim Facharzt wurde telefonisch vereinbart.', en:'The appointment with the specialist was arranged by phone.'},
  {cat:'refl-passiv', de:'Ich wurde gestern gegen Grippe geimpft.', en:'I was vaccinated against the flu yesterday.'},
  {cat:'refl-passiv', de:'Wir wurden sehr freundlich von den neuen Kollegen empfangen.', en:'We were welcomed very warmly by the new colleagues.'},
  {cat:'refl-passiv', de:'Wurdest du schon über die neuen Regeln informiert?', en:'Have you already been informed about the new rules?'},
  {cat:'refl-passiv', de:'Wurden Sie schon von einem Arzt untersucht?', en:'Have you (formal) already been examined by a doctor?'},
  {cat:'refl-passiv', de:'Das Fenster wurde geöffnet, um das Zimmer zu lüften.', en:'The window was opened to air out the room.'},
  {cat:'arbeit-wichtig', de:'Was ist dir bei deiner Arbeit wichtig?', en:'What is important to you in your work?'},
  {cat:'arbeit-wichtig', de:'Was ist für dich wichtig?', en:'What is important to you?'},
  {cat:'arbeit-wichtig', de:'Wie wichtig sind dir flexible Arbeitszeiten?', en:'How important are flexible working hours to you?'},
  {cat:'arbeit-wichtig', de:'Das ist mir nicht so wichtig, ich finde guten Lohn wichtiger.', en:'That is not so important to me, I find good pay more important.'},
  {cat:'arbeit-wichtig', de:'Ich kann sagen, was mir bei der Arbeit wichtig ist: Ein gutes Team.', en:'I can say what is important to me at work: a good team.'},
  {cat:'arbeit-wichtig', de:'Es ist mir besonders wichtig, dass die Schichten gerecht verteilt sind.', en:'It is especially important to me that the shifts are distributed fairly.'},
  {cat:'arbeit-wichtig', de:'Was mich an diesem Job stört, ist der lange Weg zum Krankenhaus.', en:'What bothers me about this job is the long way to the hospital.'},
  {cat:'arbeit-wichtig', de:'Es stört mich, wenn die Kommunikation im Team schlecht ist.', en:'It bothers me when communication in the team is bad.'},
  {cat:'arbeit-wichtig', de:'Wie wichtig ist Ihnen ein hohes Gehalt?', en:'How important is a high salary to you? (formal)'},
  {cat:'arbeit-wichtig', de:'Wie viel Wert legst du auf ein gutes Arbeitsklima?', en:'How much value do you place on a good working atmosphere?'},
  {cat:'arbeit-wichtig', de:'Ich bevorzuge feste Arbeitszeiten, weil ich meinen Tag besser planen kann.', en:'I prefer fixed working hours because I can plan my day better.'},
  {cat:'arbeit-wichtig', de:'Ich möchte jetzt kurz meine Meinung zur Umfrage sagen.', en:'I would now like to briefly give my opinion on the survey.'},
  {cat:'geduld', de:'Ich war von Anfang an dabei.', en:'I was there from the beginning.'},
  {cat:'geduld', de:'Große Geduld ist in diesem Beruf sehr wichtig.', en:'Great patience is very important in this profession.'},
  {cat:'geduld', de:'Mit großer Geduld kann man jedes Problem lösen.', en:'With great patience you can solve any problem.'},
  {cat:'geduld', de:'Reines Gold ist sehr teuer.', en:'Pure gold is very expensive.'},
  {cat:'geduld', de:'Die Bank verkauft reines Gold.', en:'The bank sells pure gold.'},
  {cat:'geduld', de:'Dieser Ehering besteht aus reinem Gold.', en:'This wedding ring is made of pure gold.'},
  {cat:'geduld', de:'Zwölf Stunden arbeiten ohne richtige Pause? Es ist ja Wahnsinn.', en:'Working twelve hours without a proper break? That’s madness.'},
  {cat:'geduld', de:'Können Sie bitte das Licht ausmachen? Der Patient möchte schlafen.', en:'Could you please turn off the light? The patient wants to sleep.'},
  {cat:'geduld', de:'Ich wundere mich oft über die Bürokratie in Deutschland.', en:'I often wonder about the bureaucracy in Germany.'},
  {cat:'geduld', de:'Ich dachte, du hast heute Frühschicht!', en:'I thought you had the early shift today!'},
  {cat:'geduld', de:'Das habe ich mir schon gedacht!', en:'I already thought so!'},
  {cat:'geduld', de:'Die neue Patientin spricht sehr gut Arabisch, sie könnte aus Syrien sein.', en:'The new patient speaks Arabic very well, she could be from Syria.'},

  {cat:'verkehr', de:'Morgens ist der Straßenverkehr sehr dicht, deshalb fahre ich lieber mit der Bahn zur Klinik.', en:'In the morning the road traffic is very heavy, so I prefer to take the train to the clinic.'},
  {cat:'verkehr', de:'Mit dem Bus bin ich schnell in der Klinik, mit dem Fahrrad bin ich schneller, aber mit der U-Bahn geht es am schnellsten.', en:'By bus I’m quickly at the clinic, by bike I’m faster, but by subway it’s the fastest.'},
  {cat:'verkehr', de:'Der Stress ist morgens hoch, mittags ist er höher, und in der Notaufnahme ist er am höchsten.', en:'Stress is high in the morning, higher at noon, and highest in the emergency room.'},
  {cat:'verkehr', de:'Die Apotheke ist nah, der Supermarkt ist näher, aber die Bushaltestelle ist am nächsten.', en:'The pharmacy is near, the supermarket is nearer, but the bus stop is the nearest.'},
  {cat:'verkehr', de:'Ein Buch ist teuer, ein Sprachkurs ist teurer, aber Privatunterricht ist am teuersten.', en:'A book is expensive, a language course is more expensive, but private tutoring is the most expensive.'},
  {cat:'verkehr', de:'Jeden Morgen beim Frühstück versuche ich, deutsche Nachrichten zu hören.', en:'Every morning at breakfast I try to listen to German news.'},
  {cat:'verkehr', de:'Im Wartezimmer beim Arzt kann man gut Zeitschriften lesen.', en:'In the waiting room at the doctor’s you can read magazines well.'},
  {cat:'verkehr', de:'Ich muss heute noch ein schweres Paket und ein kleines Päckchen zur Post bringen.', en:'I still have to take a heavy package and a small parcel to the post office today.'},
  {cat:'verkehr', de:'Oben links auf dem Brief steht der Absender, und unten rechts steht der Empfänger.', en:'At the top left of the letter is the sender, and at the bottom right is the recipient.'},
  {cat:'verkehr', de:'Bitte schreiben Sie die Adresse des Krankenhauses deutlich auf das Paket.', en:'Please write the hospital’s address clearly on the package.'},
  {cat:'verkehr', de:'Für dieses wichtige Paket braucht der Postbote Ihre Unterschrift.', en:'For this important package the mailman needs your signature.'},
  {cat:'verkehr', de:'Ich stecke den Brief vom Arzt in den Briefumschlag.', en:'I put the letter from the doctor into the envelope.'},
  {cat:'verkehr', de:'Ich schaue jeden Mittag in den Briefkasten, ob Post vom Amt da ist.', en:'Every noon I look in the mailbox to see whether there is mail from the office.'},
  {cat:'verkehr', de:'Sie können die Briefmarken direkt am Schalter Nummer drei kaufen.', en:'You can buy the stamps directly at counter number three.'},
  {cat:'verkehr', de:'Das Ausfüllen des Formulars ist der erste Schritt für deinen Antrag.', en:'Filling out the form is the first step for your application.'},
  {cat:'verkehr', de:'Vor der Benutzung des neuen Blutdruckmessgeräts muss man die Gebrauchsanweisung genau lesen.', en:'Before using the new blood pressure monitor, you have to read the instructions carefully.'},
  {cat:'verkehr', de:'Wir packen die alten Patientenakten in einen großen Karton.', en:'We pack the old patient files into a big cardboard box.'},
  {cat:'verkehr', de:'Du musst noch eine Briefmarke auf den Umschlag kleben.', en:'You still have to stick a stamp on the envelope.'},
  {cat:'verkehr', de:'Das Paket ist mit vielen bunten Aufklebern beklebt.', en:'The package is covered with many colorful stickers.'},
  {cat:'verkehr', de:'Wir halten die Briefe mit Gummibändern zusammen, damit nichts verloren geht.', en:'We hold the letters together with rubber bands so that nothing gets lost.'},
  {cat:'verkehr', de:'Der Medikamentenschrank auf der Station muss immer gut verschlossen sein.', en:'The medicine cabinet on the ward must always be kept well locked.'},
  {cat:'verkehr', de:'Ich habe meine Bewerbung für die Ausbildung schon gestern abgeschickt.', en:'I already sent off my application for the training yesterday.'},
  {cat:'verkehr', de:'Die beiden Kartons sind gleich groß, aber der Inhalt ist komplett verschieden.', en:'The two boxes are the same size, but the contents are completely different.'},
  {cat:'verkehr', de:'Die Apotheke liegt direkt gegenüber vom Krankenhaus.', en:'The pharmacy is located directly opposite the hospital.'},
  {cat:'verkehr', de:'Die Bushaltestelle befindet sich genau gegenüber von der Bäckerei.', en:'The bus stop is located exactly opposite the bakery.'},
  {cat:'verkehr', de:'Gehen Sie hier geradeaus an der Rezeption vorbei bis zum Aufzug.', en:'Go straight ahead past the reception to the elevator.'},
  {cat:'verkehr', de:'Jeden Morgen fahre ich mit dem Bus am großen Stadtpark vorbei.', en:'Every morning I take the bus past the big city park.'},
  {cat:'verkehr', de:'Der Krankenwagen fährt schnell durch die volle Stadt.', en:'The ambulance drives quickly through the busy city.'},
  {cat:'verkehr', de:'Um zur Cafeteria zu kommen, müssen Sie durch den langen Flur gehen.', en:'To get to the cafeteria, you have to go through the long hallway.'},
  {cat:'verkehr', de:'Vor der Abfahrt des Zuges müssen wir noch ein Ticket kaufen, und nach der Ankunft fahren wir direkt ins Hotel.', en:'Before the train departs we still have to buy a ticket, and after arrival we go straight to the hotel.'},
  {cat:'verkehr', de:'Wir sind mit dem Auto auf die Fähre gefahren; es war ein riesiges Schiff.', en:'We drove onto the ferry by car; it was a huge ship.'},
  {cat:'verkehr', de:'Auf unserer Fahrt nach Österreich haben wir die Grenze ohne Probleme überquert.', en:'On our trip to Austria we crossed the border without any problems.'},
  {cat:'verkehr', de:'Vorsicht, wenn Sie hier die breite Straße überqueren!', en:'Be careful when you cross the wide street here!'},
  {cat:'verkehr', de:'Bitte parken Sie Ihr Fahrzeug nicht vor der Einfahrt für den Krankenwagen!', en:'Please do not park your vehicle in front of the ambulance entrance!'},
  {cat:'verkehr', de:'Auf der deutschen Autobahn darf man oft sehr schnell fahren, aber es gibt auch viel Stau.', en:'On the German autobahn you can often drive very fast, but there are also a lot of traffic jams.'},
  {cat:'verkehr', de:'Bevor wir auf die Autobahn fahren, müssen wir noch kurz an der Tankstelle halten und tanken.', en:'Before we get on the highway, we still have to stop briefly at the gas station and fill up.'},
  {cat:'verkehr', de:'Wir hatten gestern Abend eine Reifenpanne im Regen und mussten selbst den Reifen wechseln.', en:'Yesterday evening we had a flat tire in the rain and had to change the tire ourselves.'},
  {cat:'verkehr', de:'Der Motor macht ein komisches Geräusch, deshalb bringe ich das Auto morgen in die Autowerkstatt.', en:'The engine is making a strange noise, so I’m taking the car to the garage tomorrow.'},
  {cat:'verkehr', de:'Bei Schnee und Eis ist das schnelle Fahren extrem gefährlich.', en:'In snow and ice, driving fast is extremely dangerous.'},
  {cat:'verkehr', de:'Für den Kaffeeautomaten auf dem Flur brauche ich eine Zwei-Euro-Münze.', en:'For the coffee machine in the hallway I need a two-euro coin.'},
  {cat:'verkehr', de:'Draußen schneit es, deshalb ziehe ich eine dicke Jacke an, binde mir den Schal um den Hals und setze die Mütze auf.', en:'Outside it’s snowing, so I’m putting on a thick jacket, tying the scarf around my neck and putting on the hat.'},
  {cat:'verkehr', de:'Auf dem Weg zur Klinik trage ich meistens eine bequeme Jeanshose und warme Winterschuhe.', en:'On my way to the clinic I usually wear comfortable jeans and warm winter shoes.'},
  {cat:'verkehr', de:'Zur Hochzeitsfeier ihrer Schwester kauft sie sich ein elegantes Kleid.', en:'For her sister’s wedding she is buying herself an elegant dress.'},
  {cat:'verkehr', de:'Im Krankenhaus tragen alle Pflegekräfte weiße Arbeitskleidung, aber heute in meiner Freizeit habe ich ein schwarzes T-Shirt an.', en:'In the hospital all nursing staff wear white work clothes, but today in my free time I’m wearing a black T-shirt.'},
  {cat:'verkehr', de:'Mach bitte das Fenster zu, es ist mir wirklich kalt!', en:'Please close the window, I’m really cold!'},
  {cat:'verkehr', de:'Der Patient hat hohes Fieber; es ist dem Mann extrem heiß, obwohl das Zimmer kühl ist.', en:'The patient has a high fever; the man feels extremely hot even though the room is cool.'},
  {cat:'verkehr', de:'Viele ältere Patienten haben im Sommer Probleme mit der starken Hitze und im Winter mit der Kälte.', en:'Many elderly patients have problems with the intense heat in summer and with the cold in winter.'},
  {cat:'verkehr', de:'Im Frühling ist es tagsüber schon angenehm warm, aber nachts wird es noch sehr kalt.', en:'In spring it is already pleasantly warm during the day, but at night it gets very cold.'},
  {cat:'verkehr', de:'Heute Morgen weht ein eisiger Wind, pass auf den glatten Straßen gut auf!', en:'This morning an icy wind is blowing, watch out on the slippery roads!'},
  {cat:'verkehr', de:'In Deutschland fahren viele Menschen mit den öffentlichen Verkehrsmitteln, weil das umweltfreundlich ist.', en:'In Germany many people use public transport because it is environmentally friendly.'},
  {cat:'verkehr', de:'Das Fahrrad ist im Sommer eine sinnvolle und gesunde Alternative zum Auto.', en:'The bicycle is a sensible and healthy alternative to the car in summer.'},
  {cat:'verkehr', de:'Carsharing, also das Teilen von Autos, wird in großen Städten immer beliebter.', en:'Carsharing, that is, sharing cars, is becoming more and more popular in big cities.'},
  {cat:'verkehr', de:'Mit dieser Chipkarte können wir die Türen im Krankenhaus öffnen und in der Cafeteria bezahlen.', en:'With this chip card we can open the doors in the hospital and pay in the cafeteria.'},
  {cat:'verkehr', de:'Die neue Klinik liegt etwas außerhalb der Stadt, aber man kann sie gut mit der Straßenbahn erreichen.', en:'The new clinic is located a little outside the city, but you can easily reach it by tram.'},
  {cat:'verkehr', de:'Meine neue Wohnung ist viel näher am Krankenhaus; jetzt habe ich morgens weniger Weg zur Arbeit.', en:'My new apartment is much closer to the hospital; now I have less distance to work in the morning.'},
  {cat:'verkehr', de:'Wenn man ein Monatsticket kauft, ist das sehr preiswert und man kann viel Geld sparen.', en:'If you buy a monthly ticket, it is very inexpensive and you can save a lot of money.'},
  {cat:'verkehr', de:'Das Deutschlandticket kostet nicht viel – für Pendler lohnt sich das auf jeden Fall!', en:'The Deutschlandticket doesn’t cost much – for commuters it is definitely worth it!'},
  {cat:'verkehr', de:'Vom Bruttogehalt werden in Deutschland jeden Monat die Steuern und die Versicherungen abgezogen.', en:'In Germany, taxes and insurance are deducted from the gross salary every month.'},
  {cat:'verkehr', de:'Im ICE sitzen morgens viele Geschäftsleute, die an ihren Laptops arbeiten.', en:'In the ICE many business people sit in the morning working on their laptops.'},
  {cat:'verkehr', de:'Um den digitalen Dienstplan zu sehen, muss ich mich mit meinen Zugangsdaten im System einloggen.', en:'To see the digital duty roster, I have to log into the system with my access data.'},
  {cat:'verkehr', de:'Bitte geben Sie zuerst Ihren Benutzernamen und danach Ihr Passwort ein.', en:'Please first enter your username and then your password.'},
  {cat:'verkehr', de:'Ein sicheres Passwort sollte mindestens acht Buchstaben, eine Zahl und ein Sonderzeichen enthalten.', en:'A secure password should contain at least eight letters, a number and a special character.'},
  {cat:'verkehr', de:'Sie müssen den Link in der E-Mail anklicken, um Ihr neues Konto zu bestätigen.', en:'You have to click the link in the email to confirm your new account.'},
  {cat:'verkehr', de:'Ich habe das Formular heruntergeladen, am Laptop unterschrieben und wieder auf der Webseite hochgeladen.', en:'I downloaded the form, signed it on the laptop and uploaded it to the website again.'},
  {cat:'verkehr', de:'Der Patient muss den Fragebogen komplett ausfüllen, und die Sekretärin druckt ihn dann aus.', en:'The patient has to fill out the questionnaire completely, and the secretary then prints it out.'},
  {cat:'verkehr', de:'Ich kann die Datei leider nicht öffnen, weil die Internetverbindung heute extrem langsam ist.', en:'Unfortunately I can’t open the file because the internet connection is extremely slow today.'},
  {cat:'freizeit', de:'Als wir im Sommer Urlaub hatten, sind wir jeden Tag ans Meer gefahren.', en:'When we were on vacation in summer, we drove to the sea every day.'},
  {cat:'freizeit', de:'Am Wochenende wollen wir uns deutsche Filme anschauen.', en:'On the weekend we want to watch German movies.'},
  {cat:'freizeit', de:'Es macht viel Spaß, im Auto laut deutsche Lieder mitzusingen.', en:'It’s a lot of fun to sing along to German songs loudly in the car.'},
  {cat:'freizeit', de:'Aus dem Urlaub habe ich meinen Kollegen auf der Station eine Postkarte geschickt.', en:'From my vacation I sent my colleagues on the ward a postcard.'},
  {cat:'freizeit', de:'Wir wünschen Ihnen einen angenehmen Aufenthalt in unserem Hotel!', en:'We wish you a pleasant stay in our hotel!'},
  {cat:'freizeit', de:'Wegen der großen Medizin-Messe sind leider alle Hotels in der Stadt komplett ausgebucht.', en:'Because of the big medical trade fair, unfortunately all hotels in the city are fully booked.'},
  {cat:'freizeit', de:'Im Urlaub buche ich lieber Halbpension statt Vollpension, weil ich mittags gern in der Stadt esse.', en:'On vacation I prefer to book half board instead of full board because I like eating in town at noon.'},
  {cat:'freizeit', de:'Wir haben für den Sommerurlaub ein schönes Zimmer mit direktem Strandblick reserviert.', en:'We reserved a nice room with a direct beach view for the summer vacation.'},
  {cat:'freizeit', de:'Die Getränke und Snacks in der Minibar im Hotelzimmer sind meistens sehr teuer.', en:'The drinks and snacks in the minibar in the hotel room are usually very expensive.'},
  {cat:'freizeit', de:'Sie führt dieses kleine Familienhotel schon seit zwanzig Jahren.', en:'She has been running this small family hotel for twenty years.'},
  {cat:'freizeit', de:'Nach den vielen Prüfungen freue ich mich schon sehr auf die lange Reise im Sommer.', en:'After all the exams I’m already looking forward to the long trip in summer.'},
  {cat:'freizeit', de:'Während wir verreisen, passt unser freundlicher Nachbar aufs Haus auf.', en:'While we are traveling, our friendly neighbor looks after the house.'},
  {cat:'freizeit', de:'Im Sommer fahren wir ans Meer, und dann sitzen wir den ganzen Tag entspannt am Strand.', en:'In summer we go to the sea, and then we sit relaxed on the beach all day.'},
  {cat:'freizeit', de:'Nächste Woche reisen wir an die Küste oder an den Bodensee, weil ich im Urlaub gern am Bodensee und an der Küste bin.', en:'Next week we are traveling to the coast or to Lake Constance, because on vacation I like being at Lake Constance and on the coast.'},
  {cat:'freizeit', de:'Morgen fliegen wir auf die Insel Mallorca und bleiben zehn Tage auf der Insel.', en:'Tomorrow we are flying to the island of Mallorca and staying on the island for ten days.'},
  {cat:'freizeit', de:'Am Wochenende fahre ich aufs Land zu meinen Großeltern; sie leben schon lange ruhig auf dem Land.', en:'On the weekend I’m going to the countryside to my grandparents; they have lived quietly in the countryside for a long time.'},
  {cat:'freizeit', de:'Im Winter fahren wir in die Berge, klettern und steigen hoch hinauf, und bleiben eine Woche in den Bergen.', en:'In winter we go to the mountains, climb and hike up high, and stay a week in the mountains.'},
  {cat:'freizeit', de:'Im Urlaub fahren wir gern ins Gebirge, weil die Natur im Gebirge wunderschön ist.', en:'On vacation we like to go to the mountain range because nature in the mountains is wonderful.'},
  {cat:'freizeit', de:'Nach der Schicht gehe ich oft in den Wald spazieren, denn im Wald ist die Luft sehr frisch.', en:'After the shift I often go for a walk in the forest, because the air in the forest is very fresh.'},
  {cat:'freizeit', de:'Viele Touristen reisen im Winter in den Süden oder in die Wüste, weil es im Süden und in der Wüste warm ist.', en:'Many tourists travel to the south or to the desert in winter because it is warm in the south and in the desert.'},
  {cat:'freizeit', de:'Morgen fahre ich mit dem Zug nach Düsseldorf, denn mein Freund lebt in Düsseldorf.', en:'Tomorrow I’m taking the train to Düsseldorf, because my friend lives in Düsseldorf.'},
  {cat:'freizeit', de:'Am Wochenende gibt es im Kulturzentrum eine interessante Veranstaltung für junge Leute.', en:'On the weekend there is an interesting event for young people at the cultural center.'},
  {cat:'freizeit', de:'Wegen des schlechten Wetters findet das Fest heute im großen Saal statt.', en:'Because of the bad weather the festival takes place in the big hall today.'},
  {cat:'freizeit', de:'Heute Abend gehe ich zu einer Lesung von meinem Lieblingsautor in der Stadtbibliothek.', en:'Tonight I’m going to a reading by my favorite author at the city library.'},
  {cat:'freizeit', de:'Beim Poetry Slam haben junge Künstler ihre eigenen Texte auf der Bühne präsentiert.', en:'At the poetry slam young artists presented their own texts on stage.'},
  {cat:'freizeit', de:'Zur Vernissage in der Galerie kamen gestern viele Kunstliebhaber und Journalisten.', en:'Many art lovers and journalists came to the gallery’s opening yesterday.'},
  {cat:'freizeit', de:'Nach den Prüfungen gehen wir zusammen auf ein großes Konzert.', en:'After the exams we are going to a big concert together.'},
  {cat:'freizeit', de:'Meine Kollegin liebt klassische Oper und Ballett, aber ich schaue mir lieber ein modernes Musical an.', en:'My colleague loves classical opera and ballet, but I prefer watching a modern musical.'},
  {cat:'freizeit', de:'Für die kleinen Patienten auf der Kinderstation wurde heute ein lustiges Puppentheater wie im Zirkus organisiert.', en:'For the small patients on the children’s ward, a funny puppet theater like in a circus was organized today.'},
  {cat:'freizeit', de:'Am Samstag machen wir einen geführten Stadtspaziergang und nehmen dabei an einem Fotoworkshop teil.', en:'On Saturday we are taking a guided city walk and joining a photo workshop.'},
  {cat:'freizeit', de:'Nach dem tollen Auftritt hat das Publikum minutenlang begeistert geklatscht.', en:'After the great performance the audience clapped enthusiastically for minutes.'},
  {cat:'freizeit', de:'Am Ende des Poetry Slams darf das Publikum über den besten Text abstimmen.', en:'At the end of the poetry slam the audience may vote for the best text.'},
  {cat:'freizeit', de:'In der Teamsitzung stimmen wir heute über den neuen Urlaubsplan ab.', en:'In today’s team meeting we are voting on the new vacation schedule.'},
  {cat:'freizeit', de:'Am Samstagabend gehen meine Kollegen nach der Schicht zusammen in einen Club, um zu tanzen.', en:'On Saturday evening my colleagues go to a club together after the shift to dance.'},
  {cat:'freizeit', de:'Gestern haben wir im Stadttheater ein modernes Theaterstück gesehen; es war ein intensives Kammerspiel mit nur drei Schauspielern.', en:'Yesterday we saw a modern play at the city theater; it was an intense chamber play with only three actors.'},
  {cat:'gesundheit', de:'Die erfahrene Krankenschwester versucht, dem neuen Schüler alles geduldig beizubringen.', en:'The experienced nurse patiently tries to teach the new student everything.'},
  {cat:'gesundheit', de:'Mein Kollege hat mir gestern beigebracht, wie man dieses medizinische Gerät benutzt.', en:'Yesterday my colleague taught me how to use this medical device.'},
  {cat:'gesundheit', de:'Die genaue Ursache für die Allergie des Patienten ist leider noch unbekannt.', en:'The exact cause of the patient’s allergy is unfortunately still unknown.'},
  {cat:'gesundheit', de:'Der Arzt nimmt sich viel Zeit, um alle Fragen des Patienten ruhig zu beantworten.', en:'The doctor takes a lot of time to calmly answer all of the patient’s questions.'},
  {cat:'gesundheit', de:'Wir müssen dringend neue Handschuhe und Masken für die Station bestellen.', en:'We urgently need to order new gloves and masks for the ward.'},
  {cat:'gesundheit', de:'Wir haben den Patienten für morgen früh zur Blutabnahme bestellt.', en:'We have scheduled the patient for a blood draw tomorrow morning.'},
  {cat:'gesundheit', de:'Für die Arbeit beim ambulanten Pflegedienst braucht man unbedingt einen Führerschein.', en:'For work at an outpatient care service you absolutely need a driver’s license.'},
  {cat:'gesundheit', de:'Unser neuer Kollege lächelt den ganzen Tag, ich glaube, er ist frisch verliebt.', en:'Our new colleague smiles all day, I think he’s freshly in love.'},
  {cat:'gesundheit', de:'Unser Stationsleiter ist ein echter Spaßvogel, er bringt das ganze Team immer zum Lachen.', en:'Our ward manager is a real joker, he always makes the whole team laugh.'},
  {cat:'gesundheit', de:'Als der Pfleger gestern mit dem Patienten gesprochen hat, ging es ihm schon viel besser.', en:'When the nurse spoke with the patient yesterday, he was already feeling much better.'},
  {cat:'gesundheit', de:'Als ich letzte Woche im Krankenhaus ein Praktikum gemacht habe, habe ich viel über die Pflege gelernt.', en:'When I did an internship at the hospital last week, I learned a lot about nursing.'},
  {cat:'gesundheit', de:'Die Ärzte vermuten, dass der Patient eine seltene Infektion hat.', en:'The doctors suspect that the patient has a rare infection.'},
  {cat:'gesundheit', de:'Bitte konzentrieren Sie sich bei der Medikamentenausgabe, damit kein Fehler passiert!', en:'Please concentrate when handing out medication so that no mistake happens!'},
  {cat:'gesundheit', de:'Der Pfleger erklärt die Übung sehr ruhig, sodass der Patient alles sofort versteht.', en:'The nurse explains the exercise very calmly, so that the patient understands everything immediately.'},
  {cat:'gesundheit', de:'Weißt du zufällig, wann heute die Übergabe im Stationszimmer beginnt?', en:'Do you happen to know when the handover in the ward room starts today?'},
  {cat:'gesundheit', de:'Der Patient im Nachbarbett bekommt genau dasselbe Medikament wie Sie.', en:'The patient in the next bed gets exactly the same medication as you.'},
  {cat:'gesundheit', de:'Schwester Anna und ich arbeiten auf derselben Station im Krankenhaus.', en:'Nurse Anna and I work on the same ward at the hospital.'},
  {cat:'gesundheit', de:'Das gemeinsame Kaffeetrinken nach der Übergabe ist für unser Team eine feste Gewohnheit geworden.', en:'Having coffee together after the handover has become a fixed habit for our team.'},
  {cat:'gesundheit', de:'Der Chefarzt führt gerade ein wichtiges Gespräch mit den Angehörigen.', en:'The chief physician is currently having an important conversation with the relatives.'},
  {cat:'gesundheit', de:'Vor der Operation dürfen die Patienten dem Arzt alle wichtigen Fragen stellen.', en:'Before the operation the patients may ask the doctor all important questions.'},
  {cat:'gesundheit', de:'Bei der Dosierung der Medikamente muss man im Krankenhaus extrem gut aufpassen.', en:'With the dosage of the medication you have to be extremely careful in the hospital.'},
  {cat:'gesundheit', de:'Auf unserer Station arbeiten insgesamt zwanzig Pflegekräfte und fünf Ärzte.', en:'In total twenty nurses and five doctors work on our ward.'},
  {cat:'gesundheit', de:'Hypertonie wird in der Alltagssprache einfach Bluthochdruck genannt.', en:'Hypertension is simply called high blood pressure in everyday language.'},
  {cat:'gesundheit', de:'Der Patient muss vor den Tabletten etwas essen, aber er hat seit gestern nichts gegessen.', en:'The patient has to eat something before the tablets, but he hasn’t eaten anything since yesterday.'},
  {cat:'gesundheit', de:'Der Patient klagte über starke Brustschmerzen; daraufhin habe ich sofort den Notarzt gerufen.', en:'The patient complained of severe chest pain; thereupon I immediately called the emergency doctor.'},
  {cat:'gesundheit', de:'Als Nächstes haben wir ein EKG gemacht.', en:'Next we did an ECG.'},
  {cat:'gesundheit', de:'Anschließend bekam er Medikamente, und zuletzt wurde er auf die Intensivstation gebracht.', en:'Afterwards he received medication, and finally he was taken to the intensive care unit.'},
  {cat:'gesundheit', de:'In der Intensivpflege muss man absolut zuverlässig sein und viel Verantwortung übernehmen.', en:'In intensive care you have to be absolutely reliable and take on a lot of responsibility.'},
  {cat:'gesundheit', de:'Der Blutdruck des Patienten ist heute viel zu niedrig, wir müssen sofort den Arzt informieren.', en:'The patient’s blood pressure is much too low today, we must inform the doctor immediately.'},
  {cat:'gesundheit', de:'In der Notaufnahme erlebt man jeden Tag spannende und neue Situationen.', en:'In the emergency room you experience exciting and new situations every day.'},
  {cat:'gesundheit', de:'Der Chefarzt hält morgen einen wichtigen Vortrag über moderne Notfallmedizin.', en:'The chief physician will give an important lecture on modern emergency medicine tomorrow.'},
  {cat:'gesundheit', de:'Der Notarzt kam gestern innerhalb von fünf Minuten in die Klinik.', en:'The emergency doctor arrived at the clinic within five minutes yesterday.'},
  {cat:'gesundheit', de:'Die Krankenschwester gab dem Patienten eine Schmerztablette, weil es keine andere Lösung gab.', en:'The nurse gave the patient a painkiller because there was no other solution.'},
  {cat:'gesundheit', de:'Der Chefarzt sagte mir, dass die Operation sehr gut verlaufen ist.', en:'The chief physician told me that the operation went very well.'},
  {cat:'kommunikation', de:'Deutsch ist keine leichte Fremdsprache, aber mit täglicher Übung schafft man das.', en:'German is not an easy foreign language, but with daily practice you can do it.'},
  {cat:'kommunikation', de:'Um meine Aussprache zu verbessern, spreche ich im Server oft mit Muttersprachlern.', en:'To improve my pronunciation, I often talk to native speakers on the server.'},
  {cat:'kommunikation', de:'Er hat sehr gute Noten und hofft auf ein Stipendium für sein Studium in Deutschland.', en:'He has very good grades and hopes for a scholarship for his studies in Germany.'},
  {cat:'kommunikation', de:'Dein Deutsch ist gut, aber deine Aussprache ist noch besser, und beim Sprechen bist du am besten.', en:'Your German is good, but your pronunciation is even better, and when speaking you are the best.'},
  {cat:'kommunikation', de:'Ich lerne gern zu Hause, lieber lerne ich in der Bibliothek, aber am liebsten lerne ich mit Freunden.', en:'I like learning at home, I prefer learning in the library, but I most like learning with friends.'},
  {cat:'kommunikation', de:'Im Kurs sprechen wir viel, zu Hause übe ich noch mehr, aber im Krankenhaus lerne ich am meisten.', en:'In class we speak a lot, at home I practice even more, but in the hospital I learn the most.'},
  {cat:'kommunikation', de:'Ich höre oft deutsche Podcasts, noch öfter schaue ich Videos, aber am häufigsten benutze ich Lern-Apps.', en:'I often listen to German podcasts, I watch videos even more often, but I use learning apps most frequently.'},
  {cat:'kommunikation', de:'Grammatik ist wichtig, der Wortschatz ist wichtiger, aber die tägliche Übung ist am wichtigsten.', en:'Grammar is important, vocabulary is more important, but daily practice is the most important.'},
  {cat:'kommunikation', de:'Lesen finde ich leicht, Hören ist für mich noch leichter, aber Vokabeln lernen fällt mir am leichtesten.', en:'I find reading easy, listening is even easier for me, but learning vocabulary is easiest for me.'},
  {cat:'kommunikation', de:'Ich lerne am besten durch praktische Beispiele aus dem Alltag.', en:'I learn best through practical examples from everyday life.'},
  {cat:'kommunikation', de:'Abends möchte ich noch zwanzig Vokabelkärtchen schreiben.', en:'In the evening I still want to write twenty vocabulary flashcards.'},
  {cat:'kommunikation', de:'Vor dem Schlafen sollte man die neuen Wörter noch einmal wiederholen.', en:'Before sleeping you should review the new words once more.'},
  {cat:'kommunikation', de:'Für manche Verben hilft es, kleine Bilder zu zeichnen.', en:'For some verbs it helps to draw small pictures.'},
  {cat:'kommunikation', de:'Für eine gute Aussprache muss man die Sätze laut nachsprechen.', en:'For good pronunciation you have to repeat the sentences out loud.'},
  {cat:'kommunikation', de:'Heute Nachmittag muss ich noch zwei Seiten Grammatikaufgaben lösen.', en:'This afternoon I still have to solve two pages of grammar exercises.'},
  {cat:'kommunikation', de:'Versuch bitte, im Alltag so viel wie möglich auf Deutsch zu denken.', en:'Please try to think in German as much as possible in everyday life.'},
  {cat:'kommunikation', de:'Am allerwichtigsten beim Lernen ist die tägliche Disziplin.', en:'Most important of all when learning is daily discipline.'},
  {cat:'kommunikation', de:'Ohne echte Sprachpraxis vergisst man die gelernten Wörter schnell wieder.', en:'Without real language practice you quickly forget the words you’ve learned.'},
  {cat:'kommunikation', de:'Man muss nicht alle Regeln auswendig lernen, um gut zu sprechen.', en:'You don’t have to memorize all the rules to speak well.'},
  {cat:'kommunikation', de:'Die Theorie ist einfach, aber in der Praxis braucht man viel Übung.', en:'Theory is simple, but in practice you need a lot of exercise.'},
  {cat:'kommunikation', de:'Dieser Nachmittagskurs passt perfekt in meinen Zeitplan.', en:'This afternoon course fits perfectly into my schedule.'},
  {cat:'kommunikation', de:'Ich lerne mit Karteikarten, denn die Methode passt super zu mir.', en:'I learn with flashcards, because the method suits me perfectly.'},
  {cat:'kommunikation', de:'Ich möchte bald die B2-Prüfung machen, deshalb lerne ich jeden Tag.', en:'I want to take the B2 exam soon, so I study every day.'},
  {cat:'kommunikation', de:'Langweilige Texte helfen mir gar nicht beim Lernen.', en:'Boring texts don’t help me at all with learning.'},
  {cat:'kommunikation', de:'Ich muss mir das Wort sofort notieren, sonst vergesse ich es wieder.', en:'I have to note down the word immediately, otherwise I’ll forget it again.'},
  {cat:'kommunikation', de:'Jeder Mensch ist anders und hat seinen eigenen Lernstil.', en:'Every person is different and has their own learning style.'},
  {cat:'kommunikation', de:'Beim ersten Lesen muss man nur die Hauptinformationen im Text verstehen.', en:'When reading for the first time you only need to understand the main information in the text.'},
  {cat:'kommunikation', de:'Ich habe mich für eine Ausbildung in der Pflege und gegen ein langes Studium entschieden.', en:'I decided on a training in nursing and against a long university degree.'},
  {cat:'kommunikation', de:'Adham nutzt jeden Tag eine App, um sein gesprochenes Deutsch zu verbessern.', en:'Adham uses an app every day to improve his spoken German.'},
  {cat:'kommunikation', de:'Nach einem Monat Training merke ich schon, dass ich viel flüssiger spreche.', en:'After a month of training I already notice that I speak much more fluently.'},
  {cat:'kommunikation', de:'Mit Beispielsätzen kann ich mir neue Wörter viel besser merken.', en:'With example sentences I can remember new words much better.'},
  {cat:'kommunikation', de:'Ich schreibe heute meine Bewerbung für das Krankenhaus und aktualisiere meinen Lebenslauf.', en:'Today I’m writing my application for the hospital and updating my résumé.'},
  {cat:'kommunikation', de:'Die Ausbildung zum Pflegefachmann ist eine sehr gute Wahl für meine Zukunft.', en:'The training as a nursing professional is a very good choice for my future.'},
  {cat:'kommunikation', de:'Ich möchte dieses Jahr meinen B2-Kurs erfolgreich beenden.', en:'I want to successfully complete my B2 course this year.'},
  {cat:'medien', de:'Ich schaue mir abends gern eine spannende deutsche Serie wie „Dark“ an, um mein Hörverstehen zu verbessern.', en:'In the evening I like to watch an exciting German series like "Dark" to improve my listening comprehension.'},
  {cat:'medien', de:'Gestern Abend lief ein sehr interessanter Film über das Leben von Ärzten im Krankenhaus.', en:'Yesterday evening a very interesting film about the lives of doctors in the hospital was on.'},
  {cat:'medien', de:'Die letzte Folge der Serie war so spannend, dass ich sofort weiterschauen musste.', en:'The last episode of the series was so exciting that I had to keep watching immediately.'},
  {cat:'medien', de:'Am Sonntagabend schauen Millionen Menschen in Deutschland traditionell einen Krimi.', en:'On Sunday evening millions of people in Germany traditionally watch a crime show.'},
  {cat:'medien', de:'Diese medizinische Sendung läuft jeden Dienstag auf einem bekannten deutschen Sender.', en:'This medical show runs every Tuesday on a well-known German channel.'},
  {cat:'medien', de:'In Deutschland muss jeder Haushalt einen Beitrag für den öffentlich-rechtlichen Rundfunk bezahlen.', en:'In Germany every household has to pay a fee for public broadcasting.'},
  {cat:'medien', de:'Wenn ich eine Sendung im Fernsehen verpasse, kann ich sie später kostenlos in der Mediathek anschauen.', en:'If I miss a show on TV, I can watch it later for free in the media library.'},
  {cat:'medien', de:'Wo liegt die Fernbedienung? Ich möchte den Ton etwas leiser machen.', en:'Where is the remote control? I want to turn the sound down a bit.'},
  {cat:'medien', de:'Früher hat man Filme oft auf DVD gekauft, heute nutzt fast jeder Streaming-Dienste.', en:'In the past people often bought films on DVD, today almost everyone uses streaming services.'},
  {cat:'medien', de:'Dieser berühmte Schauspieler arbeitet im Theater und beim Film.', en:'This famous actor works in the theater and in film.'},
  {cat:'medien', de:'Der Hauptdarsteller hat die Rolle des Chirurgen sehr realistisch gespielt.', en:'The lead actor played the role of the surgeon very realistically.'},
  {cat:'medien', de:'Der Regisseur gibt den Schauspielern genaue Anweisungen für die nächste Szene.', en:'The director gives the actors precise instructions for the next scene.'},
  {cat:'medien', de:'Über fünf Millionen Zuschauer haben gestern Abend das spannende Fußballspiel im Fernsehen verfolgt.', en:'Over five million viewers followed the exciting football match on TV last night.'},
  {cat:'medien', de:'Die neue Serie über das Krankenhausteam hat beim Publikum großen Erfolg.', en:'The new series about the hospital team is a big hit with the audience.'},
  {cat:'medien', de:'Beim Filmeschauen knabbere ich am liebsten gesunde Nüsse oder ein paar Chips.', en:'While watching films I like to snack on healthy nuts or a few chips.'},
  {cat:'medien', de:'Am Wochenende nehme ich mir Zeit, um meine Lieblingssendungen im Fernsehen anzuschauen.', en:'On the weekend I take time to watch my favorite TV shows.'},
  {cat:'medien', de:'Ich finde Mystery- und Science-Fiction-Serien wie „Dark“ extrem spannend.', en:'I find mystery and science-fiction series like "Dark" extremely exciting.'},
  {cat:'medien', de:'Nach einer langen Schicht gucke ich abends gern noch einen spannenden Film.', en:'After a long shift I like to watch an exciting film in the evening.'},
  {cat:'medien', de:'Ich habe unter dem neuen Lernvideo auf YouTube einen positiven Kommentar geschrieben.', en:'I wrote a positive comment under the new learning video on YouTube.'},
  {cat:'medien', de:'In dem alten Märchen gab der König strenge Befehle, die jeder befolgen musste.', en:'In the old fairy tale the king gave strict orders that everyone had to obey.'},
  {cat:'medien', de:'Im Zug auf dem Weg zur Arbeit lese ich gerade einen spannenden historischen Roman.', en:'On the train on my way to work I am currently reading an exciting historical novel.'},
  {cat:'medien', de:'Ich habe mir ein Sachbuch über Anatomie und Erste Hilfe ausgeliehen.', en:'I borrowed a non-fiction book about anatomy and first aid.'},
  {cat:'medien', de:'In der Buchhandlung habe ich einen guten Ratgeber zum Thema Gesunder Schlaf gefunden.', en:'In the bookstore I found a good guidebook on healthy sleep.'},
  {cat:'medien', de:'Wenn ich abends müde bin, mache ich das Licht aus und höre im Bett ein deutsches Hörbuch.', en:'When I’m tired in the evening, I turn off the light and listen to a German audiobook in bed.'},
  {cat:'medien', de:'Die Krankenschwester liest dem kranken Kind zum Einschlafen ein altes Märchen aus einem bunten Bilderbuch vor.', en:'The nurse reads an old fairy tale from a colorful picture book to the sick child to help her fall asleep.'},
  {cat:'polizei', de:'Nach dem Einbruch in die Apotheke sucht die Polizei überall nach dem Einbrecher.', en:'After the break-in at the pharmacy the police are searching everywhere for the burglar.'},
  {cat:'polizei', de:'Im Krankenhaus kommt es manchmal zu einem Diebstahl, deshalb sollte man Wertsachen einschließen, damit der Dieb keine Chance hat.', en:'Sometimes thefts happen in the hospital, so you should lock up valuables so that the thief has no chance.'},
  {cat:'polizei', de:'Jemand hat gestern im Pausenraum mein Handy gestohlen; wer stiehlt denn so etwas?', en:'Someone stole my phone in the break room yesterday; who steals something like that?'},
  {cat:'polizei', de:'Nach dem Überfall wurde das Opfer im Krankenhaus behandelt, während die Polizei den Täter festgenommen hat.', en:'After the assault the victim was treated in the hospital while the police arrested the perpetrator.'},
  {cat:'polizei', de:'Im vollen Bus wurde mir leider mein Geldbeutel aus der Jackentasche gezogen.', en:'Unfortunately my wallet was pulled out of my jacket pocket on the crowded bus.'},
  {cat:'polizei', de:'Der Einbrecher hat mit einem Hammer das Fenster im Erdgeschoss eingeschlagen.', en:'The burglar smashed the window on the ground floor with a hammer.'},
  {cat:'polizei', de:'Wenn dein Fahrrad gestohlen wird, musst du sofort eine Anzeige bei der Polizei machen.', en:'If your bike is stolen, you must immediately file a report with the police.'},
  {cat:'polizei', de:'Die Kriminalpolizei hat an der Tür zum Medikamentenschrank einen Fingerabdruck gefunden.', en:'The criminal police found a fingerprint on the door of the medicine cabinet.'},
  {cat:'polizei', de:'Dank der genauen Personenbeschreibung konnte die Zeugin den Täter auf dem Foto sofort wiedererkennen.', en:'Thanks to the precise description, the witness was able to recognize the perpetrator immediately in the photo.'},
  {cat:'polizei', de:'Die Polizei prüft, ob alle Angaben des Zeugen wirklich stimmen.', en:'The police are checking whether all of the witness’s statements are really correct.'},
  {cat:'polizei', de:'Bei einem Brand oder einem schweren Unfall auf der Autobahn rufen wir sofort die Feuerwehr über die 112.', en:'In case of a fire or a serious accident on the highway we immediately call the fire department on 112.'},
  {cat:'polizei', de:'Die Polizei musste die Straße nach dem Unfall komplett absperren.', en:'The police had to completely close off the road after the accident.'},
  {cat:'polizei', de:'Bitte nehmen Sie vor der Operation keine Wertgegenstände wie Schmuck oder Uhren mit ins Zimmer.', en:'Before the operation please do not take valuables such as jewelry or watches into the room.'},
  {cat:'polizei', de:'Im Krankenhaus steht die Sicherheit der Patienten und des Personals immer an erster Stelle.', en:'In the hospital the safety of patients and staff always comes first.'},
  {cat:'polizei', de:'Nach dem Einbruch haben wir an der Haustür ein neues Sicherheitsschloss eingebaut.', en:'After the break-in we installed a new security lock on the front door.'},
  {cat:'polizei', de:'Wegen eines Unfalls hat die Polizei die Straße für zwei Stunden gesperrt.', en:'Because of an accident the police closed the road for two hours.'}
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

/* ---- Grammar section (القواعد A1.1 → B1) ---- */
(function(){
  if (typeof GRAMMAR === 'undefined' || !GRAMMAR.length) return;
  const LEVELS = ['A1.1','A1.2','A2.1','A2.2','B1'];
  const gfmt  = s => s.replace(/\{\{(.+?)\}\}/g, '<span class="de gr-de">$1</span>');
  const gex   = s => s.replace(/\*\*(.+?)\*\*/g, '<mark class="gr-hl">$1</mark>');
  const gplain = s => s.replace(/\*\*/g, '');
  const strip = s => s.replace(/<[^>]+>/g, '').replace(/\{\{|\}\}|\*\*/g, '');

  const tab = document.createElement('button');
  tab.className = 'tab special'; tab.type = 'button';
  tab.innerHTML = `القواعد A1.1 → B1<span class="de">Grammatik</span>`;
  tab.addEventListener('click', () => document.getElementById('sec-grammar').scrollIntoView({behavior:'smooth', block:'start'}));
  nav.appendChild(tab);

  const section = document.createElement('section');
  section.className = 'category'; section.id = 'sec-grammar';
  const head = document.createElement('div'); head.className = 'cat-head';
  head.innerHTML = `<h2>القواعد من A1.1 إلى B1<span class="de">Grammatik – Erklärungen & Beispiele</span></h2>`;
  section.appendChild(head);

  const intro = document.createElement('p');
  intro.className = 'gr-intro';
  intro.textContent = 'كل قاعدة معها شرح بالعربي وأمثلة أغلبها من جملك أنت (الجزء المهم بالقاعدة مظلّل). اضغط على القاعدة لتفتحها، وعلى أي كلمة ألمانية لترجمتها، وعلى زر الصوت لتسمعها.';
  section.appendChild(intro);

  /* level filter */
  const bar = document.createElement('div'); bar.className = 'gr-levelbar';
  const list = document.createElement('div'); list.className = 'gr-list';
  const count = {}; GRAMMAR.forEach(t => count[t.lvl] = (count[t.lvl] || 0) + 1);
  [['all','الكل', GRAMMAR.length]].concat(LEVELS.filter(l => count[l]).map(l => [l, l, count[l]])).forEach(([v, label, n], i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'gr-levelbtn' + (i === 0 ? ' active' : ''); b.dataset.lvl = v;
    b.textContent = `${label} (${n})`;
    bar.appendChild(b);
  });
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('.gr-levelbtn'); if (!b) return;
    bar.querySelectorAll('.gr-levelbtn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    list.querySelectorAll('.gr-topic').forEach(t => t.classList.toggle('gr-hidden', b.dataset.lvl !== 'all' && t.dataset.lvl !== b.dataset.lvl));
  });
  section.appendChild(bar);

  function makeTable(head, rows){
    const wrap = document.createElement('div'); wrap.className = 'gr-tablewrap';
    const tbl = document.createElement('table'); tbl.className = 'gr-table';
    const thead = document.createElement('thead'); const hr = document.createElement('tr');
    head.forEach(h => { const th = document.createElement('th'); th.innerHTML = gfmt(h); th.setAttribute('dir','auto'); hr.appendChild(th); });
    thead.appendChild(hr); tbl.appendChild(thead);
    const tb = document.createElement('tbody');
    rows.forEach(r => { const tr = document.createElement('tr'); r.forEach(c => { const td = document.createElement('td'); td.innerHTML = gfmt(c); td.setAttribute('dir','auto'); tr.appendChild(td); }); tb.appendChild(tr); });
    tbl.appendChild(tb); wrap.appendChild(tbl); return wrap;
  }

  function makeTopic(t){
    const d = document.createElement('details');
    d.className = 'gr-topic'; d.dataset.lvl = t.lvl; d.id = t.id;
    const sum = document.createElement('summary');
    sum.innerHTML = `<span class="gr-lvl">${t.lvl}</span><span class="gr-sum"><span class="gr-ar">${gfmt(t.ar)}</span><span class="gr-de-title de">${t.de}</span></span>`;
    d.appendChild(sum);

    const body = document.createElement('div'); body.className = 'gr-body';
    (t.rule || []).forEach(r => {
      const k = r[0];
      if (k === 'p'){ const p = document.createElement('p'); p.className = 'gr-p'; p.innerHTML = gfmt(r[1]); body.appendChild(p); }
      else if (k === 'f'){ const f = document.createElement('div'); f.className = 'gr-formula de'; f.textContent = r[1]; body.appendChild(f); }
      else if (k === 'n'){ const n = document.createElement('div'); n.className = 'gr-note'; n.innerHTML = '💡 ' + gfmt(r[1]); body.appendChild(n); }
      else if (k === 't'){ body.appendChild(makeTable(r[1], r[2])); }
    });

    const exHead = document.createElement('div'); exHead.className = 'gr-exhead';
    exHead.innerHTML = '<h4>أمثلة</h4>';
    const playBtn = document.createElement('button'); playBtn.type = 'button'; playBtn.className = 'playall'; playBtn.textContent = 'تشغيل كل الأمثلة';
    playBtn.addEventListener('click', () => playSequence(t.ex.map(e => gplain(e[0]))));
    exHead.appendChild(playBtn); body.appendChild(exHead);

    const exList = document.createElement('div'); exList.className = 'gr-exlist';
    t.ex.forEach(([de, ar]) => {
      const row = document.createElement('div'); row.className = 'card gr-ex';
      const main = document.createElement('div'); main.className = 'gr-ex-main';
      const txt = document.createElement('span'); txt.className = 'txt de'; txt.innerHTML = gex(de);
      const arEl = document.createElement('span'); arEl.className = 'gr-ex-ar'; arEl.textContent = ar;
      main.appendChild(txt); main.appendChild(arEl);
      const btn = speakBtn(); btn.addEventListener('click', () => speak(gplain(de), row));
      row.appendChild(main); row.appendChild(btn);
      exList.appendChild(row);
    });
    body.appendChild(exList);
    d.appendChild(body);

    d.dataset.search = [t.lvl, t.ar, t.de, ...(t.rule || []).map(r => r[0] === 't' ? r[1].concat(r[2].flat()).join(' ') : r[1]), ...t.ex.map(e => e[0] + ' ' + e[1])]
      .map(strip).join(' ').toLowerCase();
    return d;
  }
  GRAMMAR.forEach(t => list.appendChild(makeTopic(t)));
  section.appendChild(list);
  main.appendChild(section);
})();

/* ---- Stories section ---- */
(function(){
  const tab = document.createElement('button');
  tab.className = 'tab'; tab.type = 'button';
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
    if (window.wrapAll) window.wrapAll(document.getElementById('quizReveal'));
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
      if (q && node.tagName === 'DETAILS') node.open = match;
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

/* ======================================================================
   Word translation: click any German word (sentences + stories + quiz)
   -> popup with English + Arabic translation.
   Free services, no API key:
     1) Google Translate public endpoint (translate.googleapis.com, client=gtx)
     2) MyMemory (api.mymemory.translated.net) as fallback
   Results are cached in localStorage so each word is fetched only once.
   ====================================================================== */
(function(){
  const WORD_RE = /[\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*/gu;
  const CACHE_KEY = 'rk_word_tr_v1';
  const POS_AR = {noun:'اسم', verb:'فعل', adjective:'صفة', adverb:'ظرف', preposition:'حرف جر', conjunction:'حرف عطف',
                  pronoun:'ضمير', interjection:'تعجب', article:'أداة', particle:'أداة', abbreviation:'اختصار', numeral:'عدد'};

  /* ---------- word wrapping ---------- */
  function wrapEl(el){
    if (!el || el.dataset.ww === '1') return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const text = node.nodeValue;
      if (!text || (node.parentNode && node.parentNode.classList && node.parentNode.classList.contains('w'))) return;
      const frag = document.createDocumentFragment();
      let last = 0, m;
      WORD_RE.lastIndex = 0;
      while ((m = WORD_RE.exec(text))){
        const word = m[0];
        if (/^\d+$/.test(word)) continue;               // plain numbers stay plain text
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const sp = document.createElement('span');
        sp.className = 'w'; sp.textContent = word;
        frag.appendChild(sp);
        last = m.index + word.length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
    el.dataset.ww = '1';
  }
  function wrapAll(root){
    (root || document).querySelectorAll('.txt.de, .quiz-reveal .de').forEach(wrapEl);
  }
  window.wrapAll = wrapAll;

  /* ---------- cache ---------- */
  let cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}') || {}; } catch(e){ cache = {}; }
  let saveTimer = null;
  function saveCache(){
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => { try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch(e){} }, 400);
  }

  /* ---------- translation services ---------- */
  function fetchJSON(url, ms){
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), ms || 9000);
    return fetch(url, {signal: ctrl.signal})
      .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .finally(() => clearTimeout(t));
  }
  async function viaGoogle(q, tl){
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=' + tl +
                '&dt=t&dt=bd&q=' + encodeURIComponent(q);
    const data = await fetchJSON(url);
    const main = ((data && data[0]) || []).map(s => s && s[0] ? s[0] : '').join('').trim();
    if (!main) throw new Error('empty');
    const alts = ((data && data[1]) || []).slice(0, 3)
      .map(g => ({pos: g[0], terms: (g[1] || []).slice(0, 4)}))
      .filter(g => g.terms.length);
    return {main, alts};
  }
  async function viaMyMemory(q, tl){
    const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(q) + '&langpair=de|' + tl;
    const data = await fetchJSON(url);
    const main = ((data && data.responseData && data.responseData.translatedText) || '').trim();
    if (!main || (data.responseStatus && Number(data.responseStatus) !== 200)) throw new Error('empty');
    return {main, alts: []};
  }
  async function translate(word, tl){
    try { return await viaGoogle(word, tl); }
    catch(e1){
      try { return await viaMyMemory(word, tl); }
      catch(e2){ return null; }
    }
  }
  async function getTranslation(word){
    const key = word.toLowerCase();
    if (cache[key]) return cache[key];
    const [en, ar] = await Promise.all([translate(word, 'en'), translate(word, 'ar')]);
    if (!en && !ar) throw new Error('no translation');
    const res = {en, ar};
    cache[key] = res; saveCache();
    return res;
  }

  /* ---------- popup ---------- */
  const pop = document.createElement('div');
  pop.id = 'wordPop'; pop.className = 'wpop'; pop.hidden = true;
  pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', 'ترجمة الكلمة');
  pop.innerHTML = `
    <div class="wpop-head">
      <button type="button" class="wpop-btn wpop-speak" aria-label="استمع للكلمة"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
      <div class="wpop-word"></div>
      <button type="button" class="wpop-btn wpop-close" aria-label="إغلاق">×</button>
    </div>
    <div class="wpop-row"><span class="wpop-lang">EN</span><div class="wpop-tr en"></div></div>
    <div class="wpop-row"><span class="wpop-lang">عربي</span><div class="wpop-tr ar"></div></div>
    <div class="wpop-foot"><a class="wpop-gt" target="_blank" rel="noopener">فتح في Google Translate ↗</a><span class="wpop-actions"></span></div>
  `;
  document.body.appendChild(pop);
  const elWord = pop.querySelector('.wpop-word');
  const elEn = pop.querySelector('.wpop-tr.en');
  const elAr = pop.querySelector('.wpop-tr.ar');
  const elGT = pop.querySelector('.wpop-gt');
  const elActions = pop.querySelector('.wpop-actions');
  let activeEl = null, reqId = 0, currentWord = '';

  function status(box, text){ box.innerHTML = ''; const d = document.createElement('div'); d.className = 'wpop-status'; d.textContent = text; box.appendChild(d); }
  function fill(box, r, isAr){
    box.innerHTML = '';
    if (!r){ status(box, '—'); return; }
    const m = document.createElement('div'); m.className = 'wpop-main'; m.textContent = r.main; box.appendChild(m);
    (r.alts || []).forEach(g => {
      const d = document.createElement('div'); d.className = 'wpop-alt';
      const label = isAr ? (POS_AR[g.pos] || g.pos) : g.pos;
      d.textContent = label + ': ' + g.terms.join(isAr ? '، ' : ', ');
      box.appendChild(d);
    });
  }
  function keepWordVisible(){
    if (!activeEl) return;
    const r = activeEl.getBoundingClientRect();
    const limit = window.innerHeight - pop.offsetHeight - 24;
    if (r.bottom > limit && typeof window.scrollBy === 'function'){
      try { window.scrollBy({top: r.bottom - limit + 10, behavior: 'smooth'}); } catch(e){}
    }
  }
  function load(word){
    const my = ++reqId;
    elActions.innerHTML = '';
    status(elEn, '…'); status(elAr, '…جاري الترجمة');
    getTranslation(word).then(res => {
      if (my !== reqId) return;
      fill(elEn, res.en, false); fill(elAr, res.ar, true);
      keepWordVisible();
    }).catch(() => {
      if (my !== reqId) return;
      status(elEn, 'تعذّر جلب الترجمة'); status(elAr, 'تأكد من الإنترنت أو جرّب الرابط تحت');
      const b = document.createElement('button'); b.type = 'button'; b.className = 'wpop-retry'; b.textContent = 'إعادة المحاولة';
      b.addEventListener('click', () => load(word));
      elActions.appendChild(b);
    });
  }
  function openPop(w){
    if (activeEl) activeEl.classList.remove('active');
    activeEl = w; w.classList.add('active');
    currentWord = w.textContent;
    elWord.textContent = currentWord;
    elGT.href = 'https://translate.google.com/?sl=de&tl=ar&text=' + encodeURIComponent(currentWord) + '&op=translate';
    pop.hidden = false;
    load(currentWord);
    keepWordVisible();
  }
  function closePop(){
    pop.hidden = true; reqId++;
    if (activeEl){ activeEl.classList.remove('active'); activeEl = null; }
  }
  pop.querySelector('.wpop-close').addEventListener('click', closePop);
  pop.querySelector('.wpop-speak').addEventListener('click', () => { if (currentWord) speak(currentWord, null); });

  document.addEventListener('click', (e) => {
    const w = e.target.closest ? e.target.closest('.w') : null;
    if (w){
      const sel = window.getSelection ? String(window.getSelection()) : '';
      if (sel.trim()) return;                       // user is selecting text: don't hijack
      openPop(w);
      return;
    }
    if (!pop.hidden && !(e.target.closest && e.target.closest('#wordPop'))) closePop();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePop(); });

  /* ---------- hint under the tagline ---------- */
  const tagline = document.querySelector('.tagline');
  if (tagline){
    const tip = document.createElement('p');
    tip.className = 'word-tip';
    tip.textContent = '💡 اضغط على أي كلمة ألمانية (بالجمل وبالقصص) لتشوف ترجمتها بالعربي والإنجليزي.';
    tagline.insertAdjacentElement('afterend', tip);
  }

  wrapAll(document);
})();
