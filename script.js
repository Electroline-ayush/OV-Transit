// Initial Transit Data
const appData = {
  routes: [
    // ==========================================
    // ROUTE 1
    // ==========================================
    {
      id: '01A',
      number: '1',
      type: 'bus',
      color: '#03C03C',
      title: 'Gouda Station - Gildenburg',
      operator: 'Qbuzz',
      concession: 'Zuid-Holland-Noord',
      lineType: 'Stadsbus',
      since: '15 december 2024',
      predecessor: '1, 4',
      image: 'Qbuzz/Lijn_1_Gouda',
      caption: 'Buslijn 1 bij Gouda Station',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '0-2x/uur'
      },
      updates: [
        'Op 18 juli 2025 werd de begin- en eindhalte van deze lijn verplaatst naar het station. Daarnaast verviel de halte Ziekenhuis Hoofdingang en werd de halte De Baronie/Eikenlaan toegevoegd voor deze lijn.'
      ],
      stops: [
        { name: 'Gouda, Station', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '2', color: '#1b4332', textColor: '#ffffff'}, {num: '3', color: '#40916c', textColor: '#ffffff'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Gouda, Ridder van Catsweg', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '3', color: '#40916c', textColor: '#ffffff'}, {num: '175', color: '#1e5128', textColor: '#ffffff'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Gouda, Savelberg', connecting: [] },
        { name: 'Gouda, Johan de Wittlaan', connecting: [] },
        { name: 'Heemskerkstraat', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '178', color: '#1e5128', textColor: '#ffffff'}] },
        { name: 'Gouda, Mammoet', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '178', color: '#1e5128', textColor: '#ffffff'}] },
        { name: 'Gouda, Blommesteinsingel', connecting: [] },
        { name: 'Gouda, Raaigras', connecting: [] },
        { name: 'Gouda, Zuiderwerf', connecting: [] },
        { name: 'Gouda, Landluststraat', connecting: [] },
        { name: 'Gouda, Driehoven', connecting: [] },
        { name: 'Gouda, Rietzoom', connecting: [] },
        { name: 'Gouda, Gildenburg', connecting: [{num: '1', color: '#2d6a4f', textColor: '#ffffff'}, {num: '3', color: '#40916c', textColor: '#ffffff'}] }
      ]
    },
    {
      id: '01B',
      number: '1',
      type: 'bus',
      color: '#03C03C',
      title: 'Leiden Station De Vink - Leiderdorp Leyhof',
      operator: 'Qbuzz',
      concession: 'Zuid-Holland-Noord',
      lineType: 'Stadsbus',
      since: '15 december 2024',
      predecessor: '1',
      image: 'Qbuzz/Lijn_1_Leiden',
      caption: 'Buslijn 1 bij Leiden CS',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '1x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '1x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      directions: [
        {
          name: "Richting Leiderdorp Leyhof (Heenreis)",
          stops: [
            { name: 'Leiden , Station De Vink', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Anne Frankweg', connecting: [] },
            { name: 'Stevensbloem', connecting: [] },
            { name: 'Leiden , Helena Verburgstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Gandhistraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Turkooislaant', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Robijnstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Opaalstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Damlaan', connecting: [] },
            { name: 'Leiden , Gerard Brandtstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Centraal Station', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Steenstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden ,  Breestraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden , Korevaarstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
             { name: 'Leiden , Leliestraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Station Lammenschans', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Lorentzkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Moddermanstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Burggravenlaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Meerburgerkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Leiderdorpsebrug  ', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , van der Valk Boumanweg ', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , van Poelgeestlaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Vogellaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Dennenschans', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'} , {num: '56', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Buitendijklaan', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Dijkwacht', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Leyhof', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] }
          ]
        },
        {
          name: "Richting Leiden Station De Vink (Terugreis)",
          stops: [
            { name: 'Leiden , Leyhof', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Dijkwacht', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Buitendijklaan', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Dennenschans', connecting: [{num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '56', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Vogellaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , van Poelgeestlaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , van der Valk Boumanweg', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Leiderdorpsebrug', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Meerburgerkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Wilhelminabrug', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Meerburgerkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Burggravenlaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '182', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Moddermanstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Lorentzkade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Station Lammenschans', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Leliestraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Korevaarstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden ,  Breestraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden , Prinsessekade', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden , Nieuwe Beestenmarkt', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c7575'}] },
            { name: 'Leiden , Centraal Station', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '3', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Verbeekstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '22', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Doctor Lelylaan', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '22', color: '#38a169', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Leiden , Opaalstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Robijnstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Turkooislaant', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Gandhistraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Leiden , Helena Verburgstraat', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}] },
            { name: 'Stevensbloem', connecting: [] },
            { name: 'Leiden , Anne Frankweg', connecting: [] },
            { name: 'Leiden , Station De Vink', connecting: [{num: '2', color: '#38a169', textColor: '#ffffff'}, {num: '4', color: '#38a169', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
      {
      id: '01C',
      number: '1',
      type: 'bus',
      color: '#03C03C',
      title: 'Alphen a/d Rijn - Herenhof',
      operator: 'Qbuzz',
      concession: 'Zuid-Holland-Noord',
      lineType: 'Stadsbus',
      since: '19 Juli 2025',
      predecessor: '1, 4',
      image: 'Qbuzz/Lijn_1_Alphen',
      caption: 'Buslijn 1 bij Alphen a/d Rijn Station',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '0-2x/uur'
      },
      updates: [
        'Op 18 juli 2025 werd de begin- en eindhalte van deze lijn verplaatst naar het station. Daarnaast verviel de halte Ziekenhuis Hoofdingang en werd de halte De Baronie/Eikenlaan toegevoegd voor deze lijn.'
      ],
      stops: [
        { name: 'Alphen a/d Rijn , Station', connecting: [{num: '2', color: '#38a169'}, {num: '101', color: '#38a169'} , {num: '147', color: '#38a169'}] },
        { name: 'Alphen aan den Rijn, Castellumstraat', connecting: [{num: '2', color: '#38a169'}] } ,
        { name: 'Alphen aan den Rijn, De Aarhof', connecting: [{num: '2', color: '#38a169'} , {num: '722', color: '#E4D00A', textColor: '#000000'}] },
        { name: 'Alphen aan den Rijn, Meerkoetstraat', connecting: [{num: '2', color: '#38a169'} , {num: '147', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, De Aarhof', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Sportlaan', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Flat Meerzicht', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Ridderhof', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Saffierstraat', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Ericapark', connecting: [{num: '2', color: '#38a169'}] },
        { name: 'Alphen aan den Rijn, Paddestoelweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Aardster', connecting: [{num: '2', color: '#38a169'} , {num: '169', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn ,Rijsenburg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Alhorst', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Bronkhorst', connecting: [{num: '', color: '#fbfdfc'}]}, 
        { name: 'Alphen aan den Rijn, Herenhof/Horstenweg', connecting: [{num: '2', color: '#38a169'}]}, 
        { name: 'Alphen aan den Rijn, Het Oude Ambacht', connecting: [{num: '2', color: '#38a169'}]}, 
        { name: 'Alphen aan den Rijn, Zadelmaker', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Poortwachter', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, IJzerweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Haringvliet', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Stortemelk', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Concertweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Ziekenhuis', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Albert Schweitzerbrug', connecting: [{num: '2', color: '#38a169'} , {num: '182', color: '#38a169'} , {num: '+', color: '#6c757d'}] },
        { name: 'Alphen aan den Rijn, Avifauna', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Zwembad De Hoorn', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, De Baronie/Eikenlaan', connecting: [{num: '2', color: '#38a169'} , {num: '165', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Rijnhavenkade', connecting: [{num: '2', color: '#38a169'} , {num: '165', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Magazijnweg', connecting: [{num: '2', color: '#38a169'} , {num: '165', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Vennootsweg', connecting: [{num: '2', color: '#38a169'} , {num: '165', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Rijnvicus', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Albert Einsteinweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Boerhaaveweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Flemingweg', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Sportpark', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Vroonhoevelaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Amerikalaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Europalaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Station/Aziëlaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Polderpeil', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Archeonlaan', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, De Schans', connecting: [{num: '2', color: '#38a169'}]},
        { name: 'Alphen aan den Rijn, Station', connecting: [{num: '2', color: '#38a169'}, {num: '101', color: '#38a169'} , {num: '147', color: '#38a169'},{num: '+', color: '#6c757d'}] }
      ]
    },

    {
    id: '01D',
      number: '1',
      type: 'bus',
      color: '#318CE7',
      title: '\'s-Hertogenbosch Centraal Station - De Aawijk ',     
      operator: 'Arriva (Bravo)',
      concession: 'Oost-brabant',
      lineType: 'Stadsbus',
      since: '10 December 2017',
      predecessor: '1',
      image: 'Arriva/Lijn_1_s-Hertogenbosch.jpg',
      caption: 'Buslijn 1 bij \'s-Hertogenbosch CS',
      frequencies: {
        'Spits': '0-2x/uur',
        'Dal': '0-2x/uur',
        'Avond': '1-2x/uur (tot 22:00)',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      directions: [
        {
          name: "Richting De Aawijk",
          stops: [
            { name: '\'s-Hertogenbosch , Centraal Station ', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'},{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Koningsweg', connecting: [{num: '8', color: '#66FF00', textColor: '#000000'}, {num: '9', color: '#006D6F', textColor: '#ffffff'},{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'},] },
            { name: '\'s-Hertogenbosch , Spinhuiswal', connecting: [{num: '3', color: '#7C0902', textColor: '#ffffff'}, {num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Hertog Hendriksingel', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Pettelaarseweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Sweelinckplein', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Chopinstraat/Provinciehuis', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '306', color: '#003262', textColor: '#ffffff'}] },
            { name: '\'s-Hertogenbosch , Provinciehuis', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Gestelseweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Vondelstraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Merwedelaan', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Rivierenplein', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Balistraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Dommelstraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Oosterplas', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
        {
          name: "Richting \'s-Hertogenbosch Centraal Station ",
          stops: [
            { name: '\'s-Hertogenbosch , Oosterplas', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Scheldestraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Maassingel', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Geulweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Merwedelaan', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Erasmusstraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Zuiderparkweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Provinciehuis', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}] },
            { name: '\'s-Hertogenbosch , Chopinstraat/Provinciehuis', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '306', color: '#003262', textColor: '#ffff'}] },
            { name: '\'s-Hertogenbosch , Sweelinckplein', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Philips de Tweedestraat', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Pettelaarseweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'},{num: '154', color: '#BEBFC5', textColor: '#000000'},{num: '156', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Pettelaarseweg', connecting: [{num: '11', color: '#BEBFC5', textColor: '#0000'}, {num: '154', color: '#BEBFC5', textColor: '#000000'}, {num: '156', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Hertog Hendriksingel', connecting: [{num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '154', color: '#BEBFC5', textColor: '#000000'}, {num: '156', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Spinhuiswal', connecting: [{num: '3', color: '#7C0902', textColor: '#ffffff'}, {num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '154', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Koningsweg', connecting: [{num: '8', color: '#66FF00', textColor: '#000000'}, {num: '9', color: '#006D6F', textColor: '#ffff'}, {num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: '\'s-Hertogenbosch , Centraal Station ', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'}, {num: '4', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
    id: '01E',
      number: '1',
      type: 'bus',
      color: '#FFD700',
      textColor: '#000000',
      title: 'Amersfoort Centraal Station - Birkhoven Park ',     
      operator: 'Keolis (U-OV)',
      concession: 'Utrecht Buiten',
      lineType: 'Stadsbus',
      since: '10 December 2017',
      predecessor: '1',
      image: 'Keolis/Lijn_1_Amersfoort.jpg',
      caption: 'Buslijn 1 bij Amersfoort CS',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '0-2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      directions: [
        {
          name: "Richting Birkhoven Park",
          stops: [
            { name: 'Amersfoort , Centraal Station ', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Stadhuis', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Eemplein', connecting: [] },
            { name: 'Amersfoort , Industrieweg', connecting: [{num: '573', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Mijnbouwweg', connecting: [] },
            { name: 'Amersfoort , Argonweg', connecting: [{num: '573', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Heliumweg', connecting: [{num: '573', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Kryptonweg', connecting: [{num: '573', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Birkhoven Park', connecting: [] },
          ]
        },
        {
          name: "Richting Amersfoort Centraal Station ",
          stops: [
            { name: 'Amersfoort , Birkhoven Park', connecting: [] },
            { name: 'Amersfoort , Plataanstraat', connecting: [] },
            { name: 'Amersfoort , Goudsbloemstraat', connecting: [] },
            { name: 'Amersfoort , Dongestraat', connecting: [] },
            { name: 'Amersfoort , Tulpstraat', connecting: [{num: '501', color: '#FFD700', textColor: '#000000'}] },
            { name: 'Amersfoort , Puntenburgerlaan', connecting: [{num: '501', color: '#FFD700', textColor: '#000000'}] },
            { name: 'Amersfoort , Groningerstraat/Oppidium', connecting: [] },
            { name: 'Amersfoort , Stadhuis', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Snouckaertlaan', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amersfoort , Centraal Station ', connecting: [{num: '2', color: '#0047AB', textColor: '#000000'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
      id: '1F',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Arnhem, Centraal Station - De Laar West',
      operator: 'Transdev Nederland (RRReis)',
      concession: 'Arnhem-Nijmegen-Foodvalley',
      lineType: 'Stadsbus',
      since: '10 december 2023',
      predecessor: '1',
      image: 'Transdev/Lijn_1_Arnhem.jpg',
      caption: 'Buslijn 1 rijdt bij Arnhem Nelson Mandelabrug',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      stops: [
        { name: 'Arnhem, Centraal Station', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'}, {num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, Rijnstraat', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '7', color: '#BEBFC5', textColor: '#000000'}, {num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, De Praets', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '7', color: '#BEBFC5', textColor: '#000000'}, {num: '11', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, Fonteinkruidstraat', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '7', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, Hagemanswei', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Bussumstraat', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Winkelcentrum Elderhof', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Hillegomweg', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Hollandweg', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Kroonse Wal', connecting: [] },
        { name: 'Arnhem, Woudrichemstraat', connecting: [] },
        { name: 'Arnhem, De Laar/Bredasingel', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}] },
        
      ]
    },
    {
    id: '01G',
      number: '1',
      type: 'bus',
      color: '#00693E',
      textColor: '#000000',
      title: 'Breda Hoge Vucht - Heusdenhout',     
      operator: 'Arriva (Bravo)',
      concession: 'Utrecht Buiten',
      lineType: 'Stadsbus',
      since: '6 Juli 2025',
      predecessor: '1,5',
      image: 'Arriva/Lijn_1_Breda.jpg',
      caption: 'Lijn 1 rijdt op Buspassage Oost',
      frequencies: {
        'Spits': '2-4x/uur',
        'Dal': '2-4x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        'Op 6 juli 2025 ging de concessie West-Brabant van start waarbij de exploitatie in handen bleef van Arriva. De concessiestart ging gepaard met grote wijzigingen in het netwerk. In Breda ging lijn 1 niet langer naar Bavel of Nieuw Wolfslaar rijden maar naar Heusdenhout, waarbij de route van lijn 5 werd overgenomen. De oude route van lijn 1 naar Bavel werd overgenomen door lijn 171 en de route naar Nieuw Wolfslaar door lijn 3.'
      ],
      directions: [
        {
          name: "Richting Heusdenhout",
          stops: [
            { name: 'Breda , Groenedijkplein ', connecting: [] },
            { name: 'Breda , Stabroekstraat', connecting: [] },
            { name: 'Breda , Steendorpstraat', connecting: [] },
            { name: 'Breda , Vlaanderenstraat', connecting: [] },
            { name: 'Breda , Hamdijk', connecting: [] },
            { name: 'Breda , Brusselstraat', connecting: [] },
            { name: 'Breda , Belgiëplein', connecting: [] },
            { name: 'Breda , Biesdonkweg', connecting: [] },
            { name: 'Breda , Edisonstraat', connecting: [] },
            { name: 'Breda , Centraal Station (Soms einde hier)', connecting: [{num: '2', color: '#ACE1AF', textColor: '#000000'},{num: '3', color: '#0070BB', textColor: '#ffffff'},{num: '4', color: '#FF8C00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Breda , Sophiastraat', connecting: [{num: '5', color: '#FFBF00', textColor: '#000000'},{num: '8', color: '#FF1DCE', textColor: '#ffffff'}] },
            { name: 'Breda , Nassausingel', connecting: [{num: '5', color: '#FFBF00', textColor: '#000000'},{num: '8', color: '#FF1DCE', textColor: '#ffffff'}] },
            { name: 'Breda , Sint Ignatiusstraat', connecting: [{num: '5', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Breda , Brabantplein', connecting: [{num: '5', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Breda , Monseigneur Leijtenstraat', connecting: [] },
            { name: 'Breda , Lage Kant', connecting: [] },
            { name: 'Breda , Langveld', connecting: [] },
            { name: 'Breda , Wilderen', connecting: [] },
            { name: 'Breda , Draaiboom', connecting: [] },
            { name: 'Breda , Sterrebos', connecting: [] },
            { name: 'Breda , Heerbaan', connecting: [] },
          ]
        },
        {
          name: "Richting Hoge Vucht",
          stops: [
           { name: 'Breda , Heerbaan', connecting: [] },
           { name: 'Breda , Sterrebos', connecting: [] },
           { name: 'Breda , Draaiboom', connecting: [] },
           { name: 'Breda , Wilderen', connecting: [] },
           { name: 'Breda , Lage Kant', connecting: [] },
           { name: 'Breda , Monseigneur Leijtenstraat', connecting: [] },
           { name: 'Breda , Brabantplein', connecting: [{num: '5', color: '#FFBF00', textColor: '#000000'}] },
           { name: 'Breda , Sint Ignatiusstraat', connecting: [{num: '5', color: '#FFBF00', textColor: '#000000'}] },
           { name: 'Breda , Sophiastraat', connecting: [{num: '5', color: '#FFBF00', textColor: '#000000'},{num: '8', color: '#FF1DCE', textColor: '#ffffff'}] },
           { name: 'Breda , Centraal Station (Soms einde hier)', connecting: [{num: '2', color: '#ACE1AF', textColor: '#000000'},{num: '3', color: '#0070BB', textColor: '#ffffff'},{num: '4', color: '#FF8C00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
           { name: 'Breda , Edisonstraat', connecting: [] },
           { name: 'Breda , Biesdonkweg', connecting: [] },
           { name: 'Breda , Belgiëplein', connecting: [] },
           { name: 'Breda , Brusselstraat', connecting: [] },
           { name: 'Breda , Hamdijk', connecting: [] },
           { name: 'Breda , Vlaanderenstraat', connecting: [] },
           { name: 'Breda , Steendorpstraat', connecting: [] },
           { name: 'Breda , Stabroekstraat', connecting: [] },
           { name: 'Breda , Groenedijkplein ', connecting: [] },
          ]
        }
      ]
    },
    {
    id: '01H',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Deventer, Station - De Vijfhoek',     
      operator: 'EBS (RRReis)',
      concession: 'IJssel-Vecht',
      lineType: 'Stadsbus',
      since: '13 december 2020',
      predecessor: '1,5',
      image: 'EBS/Lijn_1_Deventer.jpg',
      caption: '',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        'Op 15 december 2024 werd de wijziging van 14 april 2024 ongedaan gemaakt. De frequentie in de spitsuren werd verhoogd van 2x/uur naar 4x/uur.'
      ],
      directions: [
        {
          name: "Richting De Vijfhoek",
          stops: [
            { name: 'Deventer , Station ', connecting: [{num: '2', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Deventer , Schouwburg/Centrum ', connecting: [{num: '5', color: '#00693E', textColor: '#ffffff'},{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Deventer , Saxion Hogeschool', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '51', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Deventer , Brandweerdam', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '160', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Deventer , Amstellaan', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '160', color: '#00693E', textColor: '#ffffff'}] },
            { name: 'Deventer , Snippeling', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '160', color: '#00693E', textColor: '#ffffff'}] },
            { name: 'Deventer , Hunneperweg', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '160', color: '#00693E', textColor: '#ffffff'}] },
            { name: 'Deventer , Kleine Vos', connecting: [] },
            { name: 'Deventer , Zwaluwenburg', connecting: [] },
            { name: 'Deventer , Toutenburg', connecting: [] },
            { name: 'Deventer , Slangenburg', connecting: [] },
            { name: 'Deventer , Verpleeghuis P.W. Janssen', connecting: [] },
            { name: 'Deventer , Oostriklaan', connecting: [] },
            { name: 'Deventer , David Wijnveldtweg', connecting: [] },
            { name: 'Deventer , Albertus van Leusenweg', connecting: [] },
            { name: 'Deventer , Alphons Diepenbrocklaan ', connecting: [{num: '5', color: '#00693E', textColor: '#ffffff'}] },
          ]
        },
        {
          name: "Richting Deventer Station",
          stops: [
           { name: 'Deventer , Alphons Diepenbrocklaan ', connecting: [{num: '5', color: '#00693E', textColor: '#ffffff'}] },
           { name: 'Deventer , Albertus van Leusenweg', connecting: [] },
           { name: 'Deventer , David Wijnveldtweg', connecting: [] },
           { name: 'Deventer , Oostriklaan', connecting: [] },
           { name: 'Deventer , Verpleeghuis P.W. Janssen', connecting: [] },
           { name: 'Deventer , Slangenburg', connecting: [] },
           { name: 'Deventer , Toutenburg', connecting: [] },
           { name: 'Deventer , Zwaluwenburg', connecting: [] },
           { name: 'Deventer , Kleine Vos', connecting: [] },
           { name: 'Deventer , De Knoop', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '160', color: '#00693E', textColor: '#ffffff'}] },
           { name: 'Deventer , Snippeling', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '160', color: '#00693E', textColor: '#ffffff'}] },
           { name: 'Deventer , Amstellaan', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '160', color: '#00693E', textColor: '#ffffff'}] },
           { name: 'Deventer , Brandweerdam', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '160', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
           { name: 'Deventer , Saxion Hogeschool', connecting: [{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '51', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
           { name: 'Deventer , Schouwburg/Centrum ', connecting: [{num: '5', color: '#00693E', textColor: '#ffffff'},{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
           { name: 'Deventer , Station ', connecting: [{num: '2', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          ]
        }
      ]
    },
        {
    id: '01I',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Busstation Marsdijk - TT-Circuit',     
      operator: 'Qbuzz',
      concession: 'GD',
      lineType: 'Stadsbus',
      since: '13 december 2015',
      predecessor: '1,4,12',
      image: 'Qbuzz/Lijn_1_Assen.jpg',
      caption: 'Lijn 1 op Assen Station',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '1x/uur',
        'Zaterdag': '1-2x/uur',
        'Zondag': '1x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting De Vijfhoek",
          stops: [
            { name: 'Assen, Busstation Marsdijk ', connecting: [{num: '50', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '110', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
            { name: 'Assen, Deelheugte ', connecting: [] },
            { name: 'Assen, Winkelcentrum Marsdijk ', connecting: [] },
            { name: 'Assen, Kiepheugte', connecting: [] },
            { name: 'Assen, Buitenbree', connecting: [] },
            { name: 'Assen, Vlintdreef', connecting: [] },
            { name: 'Assen, Sternmesschen', connecting: [] },
            { name: 'Assen, Fuutmesschen', connecting: [] },
            { name: 'Assen, Enkeerdhamel', connecting: [] },
            { name: 'Assen, Beekeerdhamel', connecting: [] },
            { name: 'Assen, Gersthullen', connecting: [] },
            { name: 'Assen, Kinderboerderij Marsdijk', connecting: [] },
            { name: 'Assen, Stoepveldsingel', connecting: [] },
            { name: 'Assen, Stelmakerstraat', connecting: [] },
            { name: 'Assen,  Winkler Prinsstraat (Soms einde hier)', connecting: [] },
            { name: 'Assen,  W.A. Scholtenstraat', connecting: [{num: '51', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Assen,  Industrieweg', connecting: [{num: '51', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Assen,  Rolderstraat', connecting: [{num: '50', color: '#BEBFC5', textColor: '#000000'},{num: '51', color: '#BEBFC5', textColor: '#000000'},{num: '83', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
            { name: 'Assen,  Oostersingel', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'},{num: '50', color: '#000000', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
            { name: 'Assen,  Station', connecting: [{num: '7', color: '#00B9E8', textColor: '#000000'},{num: '8', color: '#FF8C00', textColor: '#000000'},{num: '20', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
            { name: 'Assen,  Port Natalweg', connecting: [{num: '20', color: '#BEBFC5', textColor: '#000000'},{num: '84', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
            { name: 'Assen,  Ziekenhuis', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '84', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
            { name: 'Assen,  Mandemaat', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '84', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
            { name: 'Assen,  Beilerstraat', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '84', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
            { name: 'Assen, Crematorium', connecting: [] },
            { name: 'Assen, TT-Circuit', connecting: [] },
          ]
        },
        {
          name: "Richting Busstation Marsdijk",
          stops: [
           { name: 'Assen, TT-Circuit', connecting: [] },
           { name: 'Assen, Burgemeester Grollemanweg', connecting: [] },
           { name: 'Assen, Burgemeester Masmanweg', connecting: [] },
           { name: 'Assen, Korenmaat', connecting: [] },
           { name: 'Assen, Korenmaat', connecting: [] },
           { name: 'Assen,  Beilerstraat', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '84', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
           { name: 'Assen,  Mandemaat', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '84', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
           { name: 'Assen,  Ziekenhuis', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '84', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
           { name: 'Assen,  Port Natalweg', connecting: [{num: '20', color: '#BEBFC5', textColor: '#000000'},{num: '84', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
           { name: 'Assen,  Station', connecting: [{num: '7', color: '#00B9E8', textColor: '#000000'},{num: '8', color: '#FF8C00', textColor: '#000000'},{num: '20', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
           { name: 'Assen,  Oostersingel', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'},{num: '50', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
           { name: 'Assen,  Rolderstraat', connecting: [{num: '50', color: '#BEBFC5', textColor: '#000000'},{num: '51', color: '#BEBFC5', textColor: '#000000'},{num: '83', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
           { name: 'Assen,  Industrieweg', connecting: [{num: '51', color: '#BEBFC5', textColor: '#000000'}] },
           { name: 'Assen,  W.A. Scholtenstraat', connecting: [{num: '51', color: '#BEBFC5', textColor: '#000000'}] },
           { name: 'Assen,  Winkler Prinsstraat (Soms einde hier)', connecting: [] },
           { name: 'Assen, Stelmakerstraat', connecting: [] },
           { name: 'Assen, Stoepveldsingel', connecting: [] },
           { name: 'Assen, Kinderboerderij Marsdijk', connecting: [] },
           { name: 'Assen, Gersthullen', connecting: [] },
           { name: 'Assen, Beekeerdhamel', connecting: [] },
           { name: 'Assen, Enkeerdhamel', connecting: [] },
           { name: 'Assen, Fuutmesschen', connecting: [] },
           { name: 'Assen, Sternmesschen', connecting: [] },
           { name: 'Assen, Vlintdreef', connecting: [] },
           { name: 'Assen, Buitenbree', connecting: [] },
           { name: 'Assen, Kiepheugte', connecting: [] },
           { name: 'Assen, Winkelcentrum Marsdijk', connecting: [] },
           { name: 'Assen, Deelheugte', connecting: [] },
           { name: 'Assen, Busstation Marsdijk ', connecting: [{num: '50', color: '#BEBFC5', textColor: '#000000'},{num: '109', color: '#BEBFC5', textColor: '#000000'},{num: '110', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#000000'}] },
          ]
        }
      ]
    },
    {
    id: '01J',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Apeldoorn Station - Orden',     
      operator: 'EBS (RRReis)',
      concession: 'IJssel-Vecht',
      lineType: 'Stadsbus',
      since: '13 december 2024',
      predecessor: '1,12',
      image: 'EBS/Lijn_1_Deventer.jpg',
      caption: '',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '2-4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        'Op 15 december 2024 werd de wijziging van 14 april 2024 ongedaan gemaakt. De frequentie in de spitsuren werd verhoogd van 2x/uur naar 4x/uur.'
      ],
      directions: [
        {
          name: "Richting Orden",
          stops: [
            { name: 'Apeldoorn , Station ', connecting: [{num: '2', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '4', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Apeldoorn , Hoofdstraat ', connecting: [{num: '10', color: '#00693E', textColor: '#ffffff'},{num: '12', color: '#00693E', textColor: '#ffffff'},{num: '21', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Apeldoorn , Amaliapark', connecting: [{num: '12', color: '#00693E', textColor: '#ffffff'},{num: '43', color: '#C0C0C0', textColor: '#000000'},{num: '108', color: '#C0C0C0', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Apeldoorn , Ritbroekstraat', connecting: [] },
            { name: 'Apeldoorn , Prinses Beatrixlaan', connecting: [] },
            { name: 'Apeldoorn , Blekersweg', connecting: [] },
            { name: 'Apeldoorn , Edelweisslaan', connecting: [] },
            { name: 'Apeldoorn , Eburonenstraat', connecting: [] },
            { name: 'Apeldoorn , Aalbert Cuyplaan', connecting: [] },
            { name: 'Apeldoorn , Ordenplein', connecting: [] },
          ]
        },
        {
          name: "Richting Deventer Station",
          stops: [
          { name: 'Apeldoorn , Ordenplein', connecting: [] },
          { name: 'Apeldoorn , Mandala', connecting: [] },
          { name: 'Apeldoorn , Apenheul (Soms einde hier)', connecting: [] },
          { name: 'Apeldoorn , Jachtlaan', connecting: [] },
          { name: 'Apeldoorn , Waltersingel', connecting: [] },  
          { name: 'Apeldoorn , Belastingkantoor', connecting: [] }, 
          { name: 'Apeldoorn , Schuttersweg', connecting: [] },
          { name: 'Apeldoorn , Bartelsweg', connecting: [] },   
          { name: 'Apeldoorn , Burgemeester des Tombeplein', connecting: [] },  
          { name: 'Apeldoorn , Politiebureau', connecting: [] },  
          { name: 'Apeldoorn , Asselsestraat', connecting: [] },
          { name: 'Apeldoorn , Amaliapark', connecting: [{num: '12', color: '#00693E', textColor: '#ffffff'},{num: '43', color: '#C0C0C0', textColor: '#000000'},{num: '108', color: '#C0C0C0', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] }, 
          { name: 'Apeldoorn , Hoofdstraat ', connecting: [{num: '10', color: '#00693E', textColor: '#ffffff'},{num: '12', color: '#00693E', textColor: '#ffffff'},{num: '21', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          { name: 'Apeldoorn , Station ', connecting: [{num: '2', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '4', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          ]
        }
      ]
    },
    {
      id: '1K',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Ede Oost - Veldhuizen',
      operator: 'Transdev Nederland (RRReis)',
      concession: 'Arnhem-Nijmegen-Foodvalley',
      lineType: 'Stadsbus',
      since: '28 Juni 2026',
      predecessor: '1,2',
      image: 'Transdev/Lijn_1_Ede.jpg',
      caption: 'Buslijn 1 rijdt op Akulaan',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '1-2x/uur',
        'Zaterdag': '1-2x/uur',
        'Zondag': '1x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      stops: [
        { name: 'Ede, Piet Romboutlaan', connecting: [] },
        { name: 'Ede, Brigadelaan', connecting: [] },
        { name: 'Ede, Wageningen', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'}, {num: '4', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Ede, Bovenbuurtweg', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'}, {num: '103', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Ede, Ziekenhuis Gelderse Vallei', connecting: [] },
        { name: 'Ede, Einsteinstraat', connecting: [] },
        { name: 'Ede, Koekeltse Boslaan', connecting: [] },
        { name: 'Ede, Mariëndaal', connecting: [] },
        { name: 'Ede, Durendaal', connecting: [] },
        { name: 'Ede, Middelbeek', connecting: [] },
        { name: 'Ede, Schoutenhof', connecting: [] },
        { name: 'Ede, Aalbeek', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}] },
      ]
    },
    {
    id: '01L',
      number: '1',
      type: 'bus',
      color: '#FF0800',
      textColor: '#000000',
      title: 'Enschede Wesselerbrink - Universiteit Twente',     
      operator: 'Arriva (RRReis)',
      concession: 'Twente',
      lineType: 'Stadsbus',
      since: '6 Januari 2002',
      predecessor: '1,2',
      image: 'Arriva/Lijn_1_Twente.jpg',
      caption: 'Lijn 1 rijdt op MH Tromplaan',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        'Op 14 december 2025 werd de lijnvoering aangepast; van maandag t/m vrijdag overdag ging de helft van de ritten op de Universiteitscampus via De Zul en Auke Vleerstraat rijden, terwijl de andere helft van de ritten via de Drienerbeeklaan en station Kennispark ging rijden. De halte UT/Hoofdingang kwam hiermee te vervallen. In de avonduren en het weekend veranderde niets en bleven de bussen altijd via de Calslaan rijden. De dienstregeling werd in de late avond en nacht uitgebreid; van zondag- t/m vrijdagavond werd voortaan tot ca. 01:00 gereden en op zaterdagavond zelfs tot 01:30.'
      ],
      directions: [
        {
          name: "Richting Universiteit Twente",
          stops: [
            { name: 'Enschede  , De Posten ', connecting: [] },
            { name: 'Enschede, Lintveldebrink ', connecting: [] },
            { name: 'Enschede, Broekheurne-Ring', connecting: [] },
            { name: 'Enschede , De Kiepe', connecting: [] },
            { name: 'Enschede , Geesterenbrink', connecting: [] },
            { name: 'Enschede , Het Leunenberg', connecting: [] },
            { name: 'Enschede , Sibculobrink', connecting: [] },
            { name: 'Enschede , Zunabrink', connecting: [] },
            { name: 'Enschede , Ypelobrink', connecting: [] },
            { name: 'Enschede ,  Sportpark', connecting: [] },
            { name: 'Enschede , Mariëndaal', connecting: [] },
            { name: 'Enschede , Sparrendaal', connecting: [] },
            { name: 'Enschede , Tuindorp Broekheurne', connecting: [{num: '508', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Enschede , Zuid Hollandlaan', connecting: [{num: '508', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Enschede , Winkelcentrum Boswinkel', connecting: [{num: '508', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Enschede , Gelderlandstraat', connecting: [] },
            { name: 'Enschede , Utrechtlaan', connecting: [] },
            { name: 'Enschede , Varviksingel', connecting: [{num: '2', color: '#FF8C00', textColor: '#000000'},{num: '73', color: '#00B9E8', textColor: '#000000'},{num: '74', color: '#00B9E8', textColor: '#000000'}] },
            { name: 'Enschede , MST Haaksbergerstraat', connecting: [{num: '2', color: '#FF8C00', textColor: '#000000'},{num: '5', color: '#0095B6', textColor: '#000000'},{num: '73', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Enschede , MST/Van Heekplein', connecting: [{num: '2', color: '#FF8C00', textColor: '#000000'},{num: '3', color: '#808000', textColor: '#000000'},{num: '4', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Enschede , Centraal Station', connecting: [{num: '2', color: '#FF8C00', textColor: '#000000'},{num: '3', color: '#808000', textColor: '#000000'},{num: '4', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Enschede , Volkspark', connecting: [{num: '4', color: '#0000FF', textColor: '#ffffff'},{num: '7', color: '#007FFF', textColor: '#000000'},{num: '7', color: '#007FFF', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Enschede , Borstelweg', connecting: [] },
            { name: 'Enschede , Lambertus Buddestraat', connecting: [] },
            { name: 'Enschede , G.J. van Heekstraat', connecting: [] },
            { name: 'Enschede ,  Toekomststraat', connecting: [] },
            { name: 'Enschede ,  Weegschaalstraat', connecting: [] },
            { name: 'Enschede ,  Winkelcentrum Twekkelerveld', connecting: [] },
            { name: 'Enschede ,  Olieslagweg', connecting: [] },
            { name: 'Enschede ,  Jupiterstraat', connecting: [] },
            { name: 'Enschede ,  Capitool', connecting: [] },
            { name: 'Enschede ,  Kennispark', connecting: [] },
            { name: 'Enschede ,  UT/Drienerbeeklaan', connecting: [] },
            { name: 'Enschede ,  UT/Calslaan', connecting: [] },
            { name: 'Enschede ,  UT/Sportcentrum', connecting: [] },
            { name: 'Enschede ,  UT/Reelaan', connecting: [] },
            { name: 'Enschede ,  UT/Langenkampweg', connecting: [] },
          ]
        },
        {
          name: "Richting Wesselerbrink",
          stops: [
          { name: 'Enschede ,  UT/Langenkampweg', connecting: [] },
          { name: 'Enschede ,  UT/Reelaan', connecting: [] },
          { name: 'Enschede ,  UT/Sportcentrum', connecting: [] },
          { name: 'Enschede ,  UT/Bastille', connecting: [] },
          { name: 'Enschede ,  UT/De Zul', connecting: [] },
          { name: 'Enschede ,  UT/Hallenweg', connecting: [] },
          { name: 'Enschede ,  Auke Vleerstraat', connecting: [] },
          { name: 'Enschede ,  Jupiterstraat', connecting: [] },
          { name: 'Enschede ,  Olieslagweg', connecting: [] },
          { name: 'Enschede ,  Winkelcentrum Twekkelerveld', connecting: [] },
          { name: 'Enschede ,  Weegschaalstraat', connecting: [] },
          { name: 'Enschede ,  Toekomststraat', connecting: [] },
          { name: 'Enschede , Lambertus Buddestraat', connecting: [] },
          { name: 'Enschede , Borstelweg', connecting: [] },
          { name: 'Enschede , Volkspark', connecting: [{num: '4', color: '#0000FF', textColor: '#ffffff'},{num: '7', color: '#007FFF', textColor: '#000000'},{num: '7', color: '#007FFF', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          { name: 'Enschede , Centraal Station', connecting: [{num: '2', color: '#FF8C00', textColor: '#000000'},{num: '3', color: '#808000', textColor: '#000000'},{num: '4', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          { name: 'Enschede , MST/Van Heekplein', connecting: [{num: '2', color: '#FF8C00', textColor: '#000000'},{num: '3', color: '#808000', textColor: '#000000'},{num: '4', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          { name: 'Enschede , MST Haaksbergerstraat', connecting: [{num: '2', color: '#FF8C00', textColor: '#000000'},{num: '5', color: '#0095B6', textColor: '#000000'},{num: '73', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          { name: 'Enschede , Varviksingel', connecting: [{num: '2', color: '#FF8C00', textColor: '#000000'},{num: '73', color: '#00B9E8', textColor: '#000000'},{num: '74', color: '#00B9E8', textColor: '#000000'}] },
          { name: 'Enschede , Utrechtlaan', connecting: [] },
          { name: 'Enschede , Gelderlandstraat', connecting: [] },
          { name: 'Enschede , Winkelcentrum Boswinkel', connecting: [{num: '508', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Enschede , Zuid Hollandlaan', connecting: [{num: '508', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Enschede , Tuindorp Broekheurne', connecting: [{num: '508', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Enschede , Sparrendaal', connecting: [] },
          { name: 'Enschede , Mariëndaal', connecting: [] },
          { name: 'Enschede ,  Sportpark', connecting: [] },
          { name: 'Enschede , Ypelobrink', connecting: [] },
          { name: 'Enschede , Zunabrink', connecting: [] },
          { name: 'Enschede , Sibculobrink', connecting: [] },
          { name: 'Enschede , Het Leunenberg', connecting: [] },
          { name: 'Enschede , Geesterenbrink', connecting: [] },
          { name: 'Enschede , De Kiepe', connecting: [] },
          { name: 'Enschede, Lintveldebrink ', connecting: [] }, 
          { name: 'Enschede  , De Posten ', connecting: [] },
          ]
        }
      ]
    },
    {
      id: '01M',
      number: '1',
      type: 'bus',
      color: '#8DB600',
      textcolor: '#000000',
      title: 'Groningen Centraal Station - P+R Reitdiep',
      operator: 'Qbuzz',
      concession: 'Arnhem-Nijmegen-Foodvalley',
      lineType: 'Stadsbus',
      since: '15 December 2019',
      predecessor: '1',
      image: 'Qbuzz/Lijn_1_Groningen.jpg',
      caption: 'Buslijn 1 op Groningen Centraal Station',
      frequencies: {
        'Spits': '2-8x/uur',
        'Dal': '2-6x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        'Op 28 juni 2026 werd de halte Crematoriumlaan hernoemd naar Aletta Jacobshal.'
      ],
      stops: [
        { name: 'Groningen , Hoofdstation', connecting: [{num: '3', color: '#0070BB', textColor: '#ffffff'},{num: '4', color: '#00B9E8', textColor: '#000000'},{num: '5', color: '#702963', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Hereplein', connecting: [{num: '3', color: '#0070BB', textColor: '#ffffff'},{num: '4', color: '#00B9E8', textColor: '#000000'},{num: '5', color: '#702963', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Zuiderdiep', connecting: [{num: '3', color: '#0070BB', textColor: '#ffffff'},{num: '4', color: '#00B9E8', textColor: '#000000'},{num: '5', color: '#702963', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Sint Jansbrug', connecting: [{num: '3', color: '#0070BB', textColor: '#ffffff'},{num: '4', color: '#00B9E8', textColor: '#000000'},{num: '10', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , UMCG Noord', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '3', color: '#0070BB', textColor: '#ffffff'},{num: '4', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Pijpstraat', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '10', color: '#FDEE00', textColor: '#000000'},{num: '11', color: '#03C03C', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Noorderplantsoen', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '11', color: '#03C03C', textColor: '#000000'},{num: '171', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Groningen , Station Noord (Soms einde hier)', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '10', color: '#FDEE00', textColor: '#000000'},{num: '11', color: '#03C03C', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Abeelstraat', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '10', color: '#FDEE00', textColor: '#000000'},{num: '11', color: '#03C03C', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Elzenlaan', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '11', color: '#03C03C', textColor: '#000000'},{num: '171', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Groningen , De Trefkoel', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '11', color: '#03C03C', textColor: '#000000'},{num: '171', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Groningen , Kometenstraat', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '9', color: '#FF00FF', textColor: '#000000'},{num: '11', color: '#03C03C', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Aletta Jacobshal', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '9', color: '#FF00FF', textColor: '#000000'},{num: '15', color: '#FE5A1D', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Nijenborgh', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '9', color: '#FF00FF', textColor: '#000000'},{num: '15', color: '#FE5A1D', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Zernikeplein', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '9', color: '#FF00FF', textColor: '#000000'},{num: '15', color: '#FE5A1D', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Zernike Noord (Soms einde hier)', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '9', color: '#FF00FF', textColor: '#000000'},{num: '15', color: '#FE5A1D', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Groningen , Hoogeweg', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'}] },
        { name: 'Groningen , Professor Uilkensweg', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'}] },
        { name: 'Groningen , P+R Reitdiep', connecting: [{num: '2', color: '#66FF00', textColor: '#000000'},{num: '11', color: '#03C03C', textColor: '#000000'},{num: '35', color: '#BEBFC5', textColor: '#000000'}] },
      ]
    },
    {
    id: '01N',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Harderwijk, Station - Frankrijk',     
      operator: 'EBS (RRReis)',
      concession: 'IJssel-Vecht',
      lineType: 'Stadsbus',
      since: '13 december 2020',
      predecessor: '1',
      image: 'EBS/Lijn_1_Harderwijk.jpg',
      caption: '',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        'Op 15 december 2024 werd de frequentiewijziging van 14 april 2024 ongedaan gemaakt. De gehele week werd de frequentie verhoogd van 1x/uur naar 2x/uur.'
      ],
      directions: [
        {
          name: "Richting Frankrijk",
          stops: [
            { name: 'Harderwijk , Station ', connecting: [{num: '101', color: '#00693E', textColor: '#ffffff'},{num: '104', color: '#00693E', textColor: '#ffffff'},{num: '111', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Harderwijk , Westermeenweg ', connecting: [{num: '101', color: '#00693E', textColor: '#ffffff'},{num: '104', color: '#00693E', textColor: '#ffffff'},{num: '114', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Harderwijk , Ziekenhuis Sint Jansdal ', connecting: [{num: '101', color: '#00693E', textColor: '#ffffff'},{num: '104', color: '#00693E', textColor: '#ffffff'},{num: '216', color: '#00B9E8', textColor: '#000000'}] },
            { name: 'Harderwijk , Plantage', connecting: [{num: '104', color: '#00693E', textColor: '#ffffff'},{num: '216', color: '#00B9E8', textColor: '#000000'},{num: '513', color: '#00693E', textColor: '#ffffff'}] },
            { name: 'Harderwijk , Centrum', connecting: [{num: '104', color: '#00693E', textColor: '#ffffff'},{num: '216', color: '#00B9E8', textColor: '#000000'},{num: '513', color: '#00693E', textColor: '#ffffff'}] },
            { name: 'Harderwijk , Selhorstweg', connecting: [{num: '104', color: '#00693E', textColor: '#ffffff'},{num: '111', color: '#00693E', textColor: '#ffffff'},{num: '142', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Harderwijk , Alberdingk Thijmlaan', connecting: [] },
            { name: 'Harderwijk , Welkoop', connecting: [] },
          ]
        },
        {
          name: "Richting Harderwijk",
          stops: [
            { name: 'Harderwijk , Welkoop', connecting: [] },
            { name: 'Harderwijk , Doornekamp', connecting: [] },
            { name: 'Harderwijk , Zuiderzeestraatweg', connecting: [] },
            { name: 'Harderwijk , Frankenskamp', connecting: [] },
            { name: 'Harderwijk , Lammertkamp', connecting: [] },
            { name: 'Harderwijk , Walstein', connecting: [] },
            { name: 'Harderwijk , Anne Franklaan', connecting: [] },
            { name: 'Harderwijk , Kiekmure', connecting: [] },
            { name: 'Harderwijk , Winkelcentrum Stadsdennen', connecting: [] },
            { name: 'Harderwijk , J.P. Heijelaan', connecting: [] },
            { name: 'Harderwijk , Alberdingk Thijmlaan', connecting: [] },
            { name: 'Harderwijk , Station ', connecting: [{num: '101', color: '#00693E', textColor: '#ffffff'},{num: '104', color: '#00693E', textColor: '#ffffff'},{num: '111', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          ]
        }
      ]
    },
    {
    id: '01O',
      number: '1',
      type: 'bus',
      color: '#DFFF00',
      textColor: '#000000',
      title: 'Hilversum Station - Kerkelanden',     
      operator: 'Transdev',
      concession: 'Gooi en Vechtstreek',
      lineType: 'Stadsbus',
      since: '-',
      predecessor: '-',
      image: 'Transdev/Lijn_1_Hilversum.jpg',
      caption: 'Lijn 1 op Hilversum Station',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        'Ingaande 15 december 2024 wijzigde de route in het centrum richting Kerkelanden. Haltes Schapenkamp, Groest en Kerkbrink werden niet langer bediend en voortaan werd gereden langs de haltes Stationsstraat, Raadhuis, De Kei en Oude Torenstraat.'
      ],
      directions: [
        {
          name: "Richting Kerkelanden",
          stops: [
            { name: 'Hilversum , Station ', connecting: [{num: '2', color: '#FF91AF', textColor: '#000000'},{num: '3', color: '#7C0902', textColor: '#ffffff'},{num: '5', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Hilversum , Stationsstraat ', connecting: [{num: '5', color: '#0000FF', textColor: '#ffffff'},{num: '6', color: '#FDEE00', textColor: '#000000'},{num: '106', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Hilversum , Raadhuis', connecting: [{num: '6', color: '#FDEE00', textColor: '#000000'},{num: '106', color: '#FDEE00', textColor: '#000000'},{num: '121', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Hilversum , De Kei ', connecting: [{num: '5', color: '#0000FF', textColor: '#ffffff'},{num: '6', color: '#FDEE00', textColor: '#000000'},{num: '106', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Hilversum , Oude Torenstraat ', connecting: [{num: '5', color: '#0000FF', textColor: '#ffffff'},{num: '6', color: '#FDEE00', textColor: '#000000'},{num: '106', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Hilversum , Boomberglaan', connecting: [{num: '121', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Hilversum , Paulus van Loolaan', connecting: [{num: '121', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Hilversum , Schuttersweg', connecting: [{num: '121', color: '#FFBF00', textColor: '#000000'}] }, 
            { name: 'Hilversum , Loosdrechtseweg', connecting: [{num: '121', color: '#FFBF00', textColor: '#000000'}] }, 
            { name: 'Hilversum , Zeverijnplantsoen', connecting: [] },
            { name: 'Hilversum , Zeverijnstraat', connecting: [] },  
            { name: 'Hilversum , De Waaier', connecting: [] }, 
            { name: 'Hilversum , Johannes Huslaan', connecting: [] }, 
            { name: 'Hilversum , Comeniushof', connecting: [] }, 
            { name: 'Hilversum , Gomarushof', connecting: [] }, 
            { name: 'Hilversum , Janseniushof', connecting: [] }, 
            { name: 'Hilversum , Kerkelandenlaan', connecting: [] },   
          ]
        },
        {
          name: "Richting Hilversum Station",
          stops: [
            { name: 'Hilversum , Kerkelandenlaan', connecting: [] }, 
            { name: 'Hilversum , Erasmuslaan', connecting: [] },
            { name: 'Hilversum , Augustinushof', connecting: [] }, 
            { name: 'Hilversum , Lutherhof', connecting: [] },
            { name: 'Hilversum , Kapittelweg', connecting: [] },  
            { name: 'Hilversum , De Waaier', connecting: [] }, 
            { name: 'Hilversum , Zeverijnstraat', connecting: [] }, 
            { name: 'Hilversum , Zeverijnplantsoen', connecting: [] },
            { name: 'Hilversum , Loosdrechtseweg', connecting: [{num: '121', color: '#FFBF00', textColor: '#000000'}] }, 
            { name: 'Hilversum , Schuttersweg', connecting: [{num: '121', color: '#FFBF00', textColor: '#000000'}] }, 
            { name: 'Hilversum , Paulus van Loolaan', connecting: [{num: '121', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Hilversum , Boomberglaan', connecting: [{num: '121', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Hilversum , Oude Torenstraat ', connecting: [{num: '5', color: '#0000FF', textColor: '#ffffff'},{num: '6', color: '#FDEE00', textColor: '#000000'},{num: '106', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Hilversum , De Kei ', connecting: [{num: '5', color: '#0000FF', textColor: '#ffffff'},{num: '6', color: '#FDEE00', textColor: '#000000'},{num: '106', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Hilversum , Raadhuis', connecting: [{num: '6', color: '#FDEE00', textColor: '#000000'},{num: '106', color: '#FDEE00', textColor: '#000000'},{num: '121', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Hilversum , Stationsstraat ', connecting: [{num: '5', color: '#0000FF', textColor: '#ffffff'},{num: '6', color: '#FDEE00', textColor: '#000000'},{num: '106', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Hilversum , Station ', connecting: [{num: '2', color: '#FF91AF', textColor: '#000000'},{num: '3', color: '#7C0902', textColor: '#ffffff'},{num: '5', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          ]
        }
      ]
    },
    {
    id: '01P',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#BEBFC5',
      title: 'Leeuwarden Station - Grou Sporthal',     
      operator: 'Qbuzz',
      concession: 'Friesland',
      lineType: 'Stadsbus',
      since: '15 December 2024',
      predecessor: '28,825',
      image: 'Qbuzz/Lijn_1_Friesland.jpg',
      caption: 'Lijn 1 op Meester P.J. Troelstrawei',
      frequencies: {
        'Spits': '2-3x/uur',
        'Dal': '1x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': '1x/uur',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Met ingang van 14 december 2025 werd lijn 1 in de avonduren en op zondag overgenomen door de nieuwe lijn 25, die ook Nijlân en de dorpen Wergea en Warten ging bedienen. De nieuwe lijn bleef alle haltes van lijn 1 elk uur bedienen, met uitzondering van de halte Julianalaan.'
      ],
      directions: [
        {
          name: "Richting Grou Sporthal",
          stops: [
            { name: 'leeuwarden , Busstation', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'},{num: '3', color: '#BEBFC5', textColor: '#000000'},{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'leeuwarden , Snekertrekweg', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'},{num: '70', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'leeuwarden , Julianalaan', connecting: [{num: '95', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Oostergoplein', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'},{num: '95', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Goutum', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'},{num: '95', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Havenstêd', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Middelsee', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Goutum Súd', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Techum', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Wirdum Rijksweg', connecting: [] },
            { name: 'Idaerd , Idaerd Rijksweg', connecting: [] },
            { name: 'Grou, Sporthal ZZ', connecting: [] },
            { name: 'Grou , Ghalinga', connecting: [{num: '28', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Grou , Oostergoostraat', connecting: [{num: '28', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Grou , De Boeijer', connecting: [{num: '28', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Grou , Meester Pieter Jelles Troelstrawei', connecting: [{num: '28', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Grou , Parkstraat', connecting: [{num: '28', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Grou , Bregepaad', connecting: [{num: '28', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
        {
          name: "Richting Leeuwarden Station",
          stops: [
            { name: 'Grou , Bregepaad', connecting: [{num: '28', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Grou , Ghalinga', connecting: [{num: '28', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Grou, Sporthal NZ', connecting: [] },
            { name: 'Idaerd , Idaerd Rijksweg', connecting: [] },
            { name: 'leeuwarden , Wirdum Rijksweg', connecting: [] },
            { name: 'leeuwarden , Techum', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Goutum Súd', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Middelsee', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Havenstêd', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Goutum', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'},{num: '95', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Oostergoplein', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'},{num: '95', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Julianalaan', connecting: [{num: '95', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'leeuwarden , Snekertrekweg', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#BEBFC5', textColor: '#000000'},{num: '70', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'leeuwarden , Busstation', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'},{num: '3', color: '#BEBFC5', textColor: '#000000'},{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          ]
        }
      ]
    },
    {
    id: '01Q',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#BEBFC5',
      title: 'Lelystad Centrum - Haven',     
      operator: 'EBS (RRReis)',
      concession: 'IJssel-Vecht',
      lineType: 'Stadsbus',
      since: '5 Januari 2020',
      predecessor: '1',
      image: 'EBS/Lijn_1_Leystad.jpg',
      caption: 'Lijn 1 op lelystad Centrum',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '1-2x/uur',
        'Zaterdag': '1-2x/uur',
        'Zondag': '1x/uur'
      },
      updates: [
        'Op 14 december 2025 werd de dienstregeling gewijzigd. De bediening van de halte Monnickendamstraat kwam met uitzondering van doordeweeks tijdens de kerst- en zomervakanties te vervallen. Tevens werd tijdens de kerst- en zomervakantie doordeweeks na 20:00 uur de frequentie verhoogd van 1x/uur naar 2x/uur door het vervallen van lijn 11 doordeweeks tijdens de genoemde vakanties.Met ingang van 14 december 2025 werd lijn 1 in de avonduren en op zondag overgenomen door de nieuwe lijn 25, die ook Nijlân en de dorpen Wergea en Warten ging bedienen. De nieuwe lijn bleef alle haltes van lijn 1 elk uur bedienen, met uitzondering van de halte Julianalaan.'
      ],
      directions: [
        {
          name: "Richting Haven",
          stops: [
            { name: 'Lelystad , Centrum', connecting: [{num: '2', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '4', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Lelystad , De Hoven', connecting: [{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '207', color: '#00B9E8', textColor: '#000000'}] },
            { name: 'Lelystad , Winkelcentrum Tjalk', connecting: [] },
            { name: 'Lelystad ,  Tjalk/Groenhorst', connecting: [] },
            { name: 'Lelystad ,  Winkelcentrum Botter', connecting: [] },
            { name: 'Lelystad ,  Schoener', connecting: [] },
            { name: 'Lelystad ,  Stuwweg', connecting: [] },
            { name: 'Lelystad ,  Vaartweg', connecting: [] },
            { name: 'Lelystad ,  Bouwweg', connecting: [] },
            { name: 'Lelystad ,  Werkeiland', connecting: [] },
            { name: 'Lelystad-Haven , Monnickendamstraat', connecting: [] },
            { name: 'Lelystad-Haven , Lemmerkade', connecting: [{num: '11', color: '#00693E', textColor: '#ffffff'}] },
            { name: 'Lelystad-Haven , Ringdijk', connecting: [{num: '11', color: '#00693E', textColor: '#ffffff'}] },
          ]
        },
        {
          name: "Richting Lelystad Centrum",
          stops: [
            { name: 'Lelystad-Haven , Ringdijk', connecting: [{num: '11', color: '#00693E', textColor: '#ffffff'}] },
            { name: 'Lelystad-Haven , Lemmerkade', connecting: [{num: '11', color: '#00693E', textColor: '#ffffff'}] },
            { name: 'Lelystad ,  Werkeiland', connecting: [] },
            { name: 'Lelystad ,  Bouwweg', connecting: [] },
            { name: 'Lelystad ,  Vaartweg', connecting: [] },
            { name: 'Lelystad ,  Stuwweg', connecting: [] },
            { name: 'Lelystad ,  Schoener', connecting: [] },
            { name: 'Lelystad ,  Winkelcentrum Botter', connecting: [] },
            { name: 'Lelystad ,  Tjalk/Groenhorst', connecting: [] },
            { name: 'Lelystad , Winkelcentrum Tjalk', connecting: [] },
            { name: 'Lelystad , De Hoven', connecting: [{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '207', color: '#00B9E8', textColor: '#ffffff'}] },
            { name: 'Lelystad , Centrum', connecting: [{num: '2', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '4', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
          ]
        }
      ]
    },
        {
      id: '01R',
      number: '1',
      type: 'bus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Oostburg Ziekenhuis - Terneuzen Busstation Westerscheldetun',
      operator: 'Transdev (Connexxion)',
      concession: 'Zeeland',
      lineType: 'Stadsbus',
      since: '9 december 2012',
      predecessor: '1',
      image: 'Transdev/Lijn_1_Zeeland.jpg',
      caption: '',
      frequencies: {
        'Spits': '1x/uur',
        'Dal': '1x/uur',
        'Avond': '1x/uur',
        'Zaterdag': '1x/uur',
        'Zondag': '1x/uur'
      },
      updates: [
        'Op 13 december 2026 ging de nieuwe concessie Zeeland in.Hierbij nam EBS op deze datum het vervoer in deze provincie over van Connexxion. Lijn 1 ging in de avonduren en het weekend voortaan ook richting Oostburg rijden, als gedeeltelijke vervanging voor lijn 5 die dan niet meer reed. Daarentegen werd op doordeweekse dagen de laatste rit opgeheven, op zaterdag de laatste vier ritten en op zondag de laatste drie ritten.'
      ],
      stops: [
        { name: 'Oostburg, Ziekenhuis', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#29AB87', textColor: '#000000'},{num: '601', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Oostburg, Ledelplein', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#29AB87', textColor: '#000000'},{num: '601', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Oostburg, Bredestraat', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#29AB87', textColor: '#000000'},{num: '601', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Oostburg, Watertoren', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#29AB87', textColor: '#000000'},{num: '601', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Schoondijke , Molen', connecting: [{num: '42', color: '#29AB87', textColor: '#000000'}]},
        { name: 'Schoondijke , Rotonde', connecting: [{num: '42', color: '#29AB87', textColor: '#000000'}]}, 
        { name: 'Schoondijke , Molen', connecting: [{num: '42', color: '#29AB87', textColor: '#000000'}]}, 
        { name: 'IJzendijke, Petit Paris', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '601', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Biervliet, Busstation', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '515', color: '#BEBFC5', textColor: '#000000'},{num: '601', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Biervliet, Braakman', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '601', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Hoek, Busstation', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '511', color: '#BEBFC5', textColor: '#000000'},{num: '601', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Terneuzen, De Knol', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '511', color: '#BEBFC5', textColor: '#000000'},{num: '607', color: '#BEBFC5', textColor: '#000000'}] },
        { name: '	Terneuzen, Busstation Westerscheldetunnel', connecting: [{num: '5', color: '#BEBFC5', textColor: '#000000'},{num: '20', color: '#BEBFC5', textColor: '#000000'},{num: '50', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
      ]
    },
    
    // Route 2 Nederlands Series //
    {
      id: '02A',
      number: '2',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Centraal Station - Nieuw Sloten',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '23 september 1991',
      predecessor: '2',
      image: 'GVB/Lijn_2_Amsterdam.jpg',
      caption: 'Tramlijn 2 op Amsterdam Centraal station',
      frequencies: {
        'Spits': '8,8-5x/uur',
        'Dal': '8,8-5x/uur',
        'Avond': '6-8x/uur',
        'Zaterdag': '4-10x/uur',
        'Zondag': '4-8,5x/uur'
      },
      updates: [
        'Met ingang van 4 juli 2026 werd de dienstregeling tijdens de zomervakantie aangepast: de maximale frequentie werd op alle dagen 7,5x/uur (elke 8 minuten). Daarnaast werd op zondagavond na 22:00 uur nog maar 4x/uur gereden in plaats van 5x/uur.'
      ],
      stops: [
        { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Nieuwezijds Kolk', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Dam', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '14', color: '#BEBFC5', textColor: '#000000'},{num: '17', color: '#568203', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Paleisstraat', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Koningsplein', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Keizersgracht', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Amsterdam ,Prinsengracht', connecting: [{num: '17', color: '#568203', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Leidseplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Museumplein', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Cornelis Schuytstraat', connecting: [] },
        { name: 'Amsterdam ,Valeriusplein', connecting: [] },
        { name: 'Amsterdam ,Amstelveenseweg', connecting: [] }, 
        { name: 'Amsterdam ,Hoofddorpplein', connecting: [] },
        { name: 'Amsterdam ,Westlandgracht', connecting: [] },
        { name: 'Amsterdam ,Delflandlaan', connecting: [] },
        { name: 'Amsterdam ,Heemstedestraat', connecting: [] },   
        { name: 'Amsterdam ,Johan Huizingalaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] }, 
        { name: 'Amsterdam ,Louwesweg', connecting: [{num: '195', color: '#0000FF', textColor: '#ffffff'}] }, 
        { name: 'Amsterdam ,Laan van Vlaanderen', connecting: [{num: '195', color: '#0000FF', textColor: '#ffffff'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] }, 
        { name: 'Amsterdam ,Centrum Nieuw Sloten', connecting: [] }, 
        { name: 'Amsterdam ,Oudenaardeplantsoen ', connecting: [] },
      ]
    },
    // Route 4 Nederlands Series //
    {
      id: '04A',
      number: '4',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Centraal Station - Amsterdam Station RAI',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '13 mei 1981',
      predecessor: '4',
      image: 'GVB/Lijn_4_Amsterdam.jpg',
      caption: 'Tramlijn 4 op Drentepark',
      frequencies: {
        'Spits': '4-5x/uur',
        'Dal': '4x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '4-5x/uur',
        'Zondag': '4x/uur'
      },
      updates: [
        'Met ingang van 4 juli 2026 werd de dienstregeling tijdens de zomervakantie aangepast: de maximale frequentie werd op alle dagen 7,5x/uur (elke 8 minuten). Daarnaast werd op zondagavond na 22:00 uur nog maar 4x/uur gereden in plaats van 5x/uur.'
      ],
      stops: [
        { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Dam', connecting: [{num: '14', color: '#BEBFC5', textColor: '#000000'},{num: '17', color: '#568203', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Rokin', connecting: [{num: '4', color: '#568203', textColor: '#ffffff'},{num: '14', color: '#568203', textColor: '#ffffff'},{num: 'M52', color: '#00B9E8', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Rembrandtplein', connecting: [{num: '4', color: '#568203', textColor: '#ffffff'},{num: '14', color: '#568203', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Keizersgracht', connecting: []},
        { name: 'Amsterdam ,Prinsengracht', connecting: [{num: '14', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Frederiksplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Albert Cuypstraat', connecting: [{num: '19', color: '#FF9966', textColor: '#000000'}] },
        { name: 'Amsterdam ,Ceintuurbaan', connecting: [] }, 
        { name: 'Amsterdam ,Lutmastraat', connecting: [] },
        { name: 'Amsterdam ,Amstelkade', connecting: [] },    
        { name: 'Amsterdam ,Victorieplein', connecting: [{num: '12', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Amsterdam ,Waalstraat', connecting: [] },  
        { name: 'Amsterdam ,Maasstraat', connecting: [] },  
        { name: 'Amsterdam ,Dintelstraat', connecting: [{num: '245', color: '#BEBFC5', textColor: '#000000'}] }, 
        { name: 'Amsterdam ,Europaplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: 'M52', color: '#00B9E8', textColor: '#ffffff'}] }, 
        { name: 'Amsterdam ,Station RAI', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '321', color: '#FFBF00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Drentepark', connecting: [] },  
      ]
    },
    // Route 3 Nederlands Series //
    {
      id: '06A',
      number: '6',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#ffffff',
      title: 'Amstelveen Westwijk - Amsterdam Station Zuid',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '29 maart 2026',
      predecessor: '-',
      image: 'GVB/Lijn_6_Amsterdam.jpg',
      caption: 'Tramlijn 6 rijdt op Brink',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': 'niet rijdt',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Op 29 maart 2026 gingen de uitgestelde dienstregelingwijzigingen van de nieuwe concessie Stadsvervoer Amsterdam in.Tram 12 ging hierbij na de halte Concertgebouw in plaats van van/naar het Centraal Station voortaan via de Bilderdijkstraat en het Frederik Hendrikplantsoen naar de Zoutkeetsgracht rijden. Hiermee werd voor een deel de opgeheven tramlijn 3 vervangen.',
        'Aangezien de nieuwe route van lijn 12 minder druk was, werd de frequentie hierbij verlaagd naar maximaal 6x/uur overdag. Vanwege werkzaamheden aan de Raadhuisstraat en Rozengracht, was de verwachting dat tram 12 pas vanaf maart 2027 verder rijden van/naar de Zoutkeetsgracht. Tot die tijd lag het eindpunt van deze lijn bij de halte Frederik Hendrikplantsoen.',
        'Echter werd deze verlenging al doorgevoerd op 30 september 2026 doordat het eindpunt van tram 13 verlegd werd van de Zoutkeetsgracht naar de Zeilstraat vanwege de werkzaamheden aan de Overtoomse Sluis.'
      ],
      stops: [
        { name: 'Westwijk', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Sacharovlaan', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '357', color: '#FF8C00', textColor: '#ffffff'}] },
        { name: 'Poortwachter', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '178', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Brink', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Meent', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Sportlaan', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Ouderkerkerlaan', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '149', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}]},
        { name: 'Oranjebaan', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '171', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}]},
        { name: 'Onderuit', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Zonnestein', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Kronenburg', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Uilenstede', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Van Boshuizenstraat', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '463', color: '#FE6F5E', textColor: '#000000'}]},
        { name: 'Arent Janszoon Ernststraat', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '461', color: '#000000', textColor: '#ffffff'},{num: '+', color: '#6c757d'}]},
        { name: 'Station Zuid', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'}]},
        { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
      ]
    },
        // Route 10 Nederlands Series //
    {
    id: '10A',
      number: '10',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Alkmaar Station - Sint Pancras Kerkplein',     
      operator: 'Transdev (Connexxion)',
      concession: 'Noord-holland-Noord',
      lineType: 'Stadsbus',
      since: '22 Juli 2018',
      predecessor: '10',
      image: 'Transdev/Lijn_10_Alkmaar.jpg',
      caption: 'Lijn 10 op Kerkplein',
      frequencies: {
        'Spits': '1x/uur',
        'Dal': '1x/uur',
        'Avond': '1x/uur',
        'Zaterdag': '1x/uur',
        'Zondag': '1x/uur'
      },
      updates: [
        'Op 21 juli 2024 ging een nieuwe dienstregeling van start in Noord-Holland-Noord. Tijdens de spitsuren werd de frequentie van lijn 10 verlaagd van 2x/uur naar 1x/uur.'
      ],
      directions: [
        {
          name: "Sint Pancras Kerkplein",
          stops: [
            { name: 'Alkmaar , Station', connecting: [{num: '2', color: '#00B9E8', textColor: '#000000'}, {num: '4', color: '#FFBF00', textColor: '#000000'},{num: '5', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Alkmaar , Kanaalkade', connecting: [{num: '4', color: '#FFBF00', textColor: '#000000'},{num: '123', color: '#00B9E8', textColor: '#000000'},{num: '129', color: '#BF4F51', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Alkmaar , Oudorperdijkje', connecting: [{num: '123', color: '#00B9E8', textColor: '#000000'},{num: '129', color: '#BF4F51', textColor: '#000000'},{num: '160', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Oudorp , Biesboschstraat', connecting: [] },
            { name: 'Oudorp , Lingestraat', connecting: [] },
            { name: 'Oudorp , Oudorperplein', connecting: [] },
            { name: 'Oudorp , Dommelstraat', connecting: [] },
            { name: 'Oudorp , Jupiterstraat', connecting: [] },
            { name: 'Oudorp , Venusstraat', connecting: [] },
            { name: 'Oudorp , \'t Wuiver', connecting: [] },
            { name: 'Oudorp , Wilgenlaan', connecting: [] },
            { name: 'Oudorp , Nijenburgh', connecting: [] },
            { name: 'Alkmaar, Herenweg/Beverkoog', connecting: [] },
            { name: 'Alkmaar,  Deltastraat', connecting: [] },
            { name: 'Sint Pancras, Mezenstraat', connecting: [] },
            { name: 'Sint Pancras, Meeuwenlaan', connecting: [] },
            { name: 'Sint Pancras, Vinkenlaan', connecting: [] },
            { name: 'Sint Pancras, Van de Vijzellaan', connecting: [] },
            { name: 'Sint Pancras, Kerkplein', connecting: [] },
          ]
        },
        {
          name: "Richting Alkmaar Station ",
          stops: [
            { name: 'Sint Pancras, Kerkplein', connecting: [] },
            { name: 'Sint Pancras, Van de Vijzellaan', connecting: [] },
            { name: 'Sint Pancras, Vinkenlaan', connecting: [] },
            { name: 'Sint Pancras, Meeuwenlaan', connecting: [] },
            { name: 'Sint Pancras, Mezenstraat', connecting: [] },
            { name: 'Alkmaar,  Deltastraat', connecting: [] },
            { name: 'Alkmaar, Herenweg/Beverkoog', connecting: [] },
            { name: 'Oudorp , Nijenburgh', connecting: [] },
            { name: 'Oudorp , Wilgenlaan', connecting: [] },
            { name: 'Oudorp , Venusstraat', connecting: [] },
            { name: 'Oudorp , Jupiterstraat', connecting: [] },
            { name: 'Oudorp , Dommelstraat', connecting: [] },
            { name: 'Oudorp , Oudorperplein', connecting: [] },
            { name: 'Oudorp , Lingestraat', connecting: [] },
            { name: 'Oudorp , Biesboschstraat', connecting: [] },
            { name: 'Alkmaar , Oudorperdijkje', connecting: [{num: '123', color: '#00B9E8', textColor: '#000000'},{num: '129', color: '#BF4F51', textColor: '#000000'},{num: '160', color: '#FDEE00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Alkmaar , Kanaalkade', connecting: [{num: '4', color: '#FFBF00', textColor: '#000000'},{num: '123', color: '#00B9E8', textColor: '#000000'},{num: '129', color: '#BF4F51', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Alkmaar , Station', connecting: [{num: '2', color: '#00B9E8', textColor: '#000000'}, {num: '4', color: '#FFBF00', textColor: '#000000'},{num: '5', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
      id: '10B',
      number: '10',
      type: 'Stadsbus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Arnhem Centraal Station - Het Dorp',
      operator: 'Keolis (U-OV)',
      concession: 'Utrecht Buiten',
      lineType: 'Stadsbus',
      since: '28 Juni 2026',
      predecessor: '656',
      image: 'Transdev/Lijn_10_Arnhem.jpg',
      caption: 'Buslijn 10 op Arnhem Centraal Station',
      frequencies: {
        'Spits': '4-8x/uur',
        'Dal': '0-4x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet Rijdt'
      },
      updates: [
        'Op 28 juni 2026 ging de concessie Arnhem-Nijmegen-Foodvalley van start. Het busvervoer werd daarbij overgenomen door Transdev, het moederbedrijf van Hermes, en onder de merknaam RRReis uitgevoerd. Daarbij kwam de merknaam Breng voor de regio Arnhem-Nijmegen te vervallen. De concessieovergang ging gepaard met grote wijzigingen in de regio. Lijn 10 ging voortaan alleen nog tussen Arnhem Centraal Station en Het Dorp rijden. Het traject naar Papendal werd in de spitsuren voortaan door lijn 110 bediend, die hierbij een versnelde route via de Amsterdamseweg ging rijden. Op lijn 10 werd de dienstregeling uitgedund. Doordeweeks werd de frequentie verlaagd van 2x/uur naar 1x/uur en werd de dienstregeling rond 20:00 uur in plaats van 21:30 uur beëindigd. Ook op zaterdag werd de dienstregeling eerder beëindigd, aangezien voortaan tot 19:00 uur in plaats van 21:30 uur werd gereden. Bovendien kwamen alle ritten op zondag te vervallen.'
      ],
      stops: [
        { name: 'Arnhem, Centraal Station', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'}, {num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, Willemsplein', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'}, {num: '5', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Arnhem, Centraal Station (Sonsbeek)', connecting: [{num: '105', color: '#BEBFC5', textColor: '#000000'}, {num: '110', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Burgemeester Weertsstraat', connecting: [{num: '105', color: '#BEBFC5', textColor: '#000000'}, {num: '110', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Arnhem, Brouwerijweg', connecting: [] },
        { name: 'Arnhem, Van Wageningenstraat', connecting: [] },
        { name: 'Arnhem, Tormentilstraat', connecting: [] },
        { name: 'Arnhem, Gentiaanstraat', connecting: [] },
        { name: 'Arnhem, Callunastraat', connecting: [] },
        { name: 'Arnhem, Het Dorp', connecting: [] },
      ]
    },
    {
      id: '10C',
      number: '10',
      type: 'Stadsbus',
      color: '#FDEE00',
      textcolor: '#000000',
      title: 'Amersfoort Centraal Station - Hoornbeeck/Van Lodenstein',
      operator: 'Keolis (U-OV)',
      concession: 'Utrecht Buiten',
      lineType: 'Stadsbus',
      since: '9 December 2018',
      predecessor: '656',
      image: 'Keolis/Lijn_10_Amersfoort.jpg',
      caption: 'Buslijn 10 op Amersfoort Station',
      frequencies: {
        'Spits': '4-8x/uur',
        'Dal': '0-4x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet Rijdt'
      },
      updates: [
        'Met ingang van 14 december 2025 ging de nieuwe concessie Utrecht Buiten van start. De vervoerder wijzigde niet, wel werd voortaan onder de merknaam U-OV gereden. De dienstregeling bleef hierbij ongewijzigd.'
      ],
      stops: [
        { name: 'Amersfoort , Centraal Station ', connecting: [{num: '2', color: '#0047AB', textColor: '#ffffff'}, {num: '3', color: '#C46210', textColor: '#000000'},{num: '4', color: '#FFD700', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amersfoort , Hoornbeeck/Van Lodenstein', connecting: [{num: '607', color: '#BEBFC5', textColor: '#000000'},{num: '674', color: '#BEBFC5', textColor: '#000000'},{num: '676', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
      ]
    },
    {
      id: '10D',
      number: '10',
      type: 'Tram',
      color: '#E09540',
      textcolor: '#000000',
      title: 'Den Haag Vrederust - Scheveningen Noorderstrand',
      operator: 'HTM',
      concession: 'Rail Haaglanden',
      lineType: 'Tram',
      since: '6 January 2025',
      predecessor: '-',
      image: 'HTM/Lijn_10_den_haag.jpg',
      caption: 'Lijn 10 rijdt op Rijswijkseplein',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': 'niet rijdt',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet Rijdt'
      },
      updates: [
        'Per 17 oktober 2025 ging lijn 10 ook op vrijdagen tijdens de spitsuren rijden.'
      ],
      stops: [
        { name: 'Den Haag , De Dreef', connecting: [{num: '9', color: '#8DB600', textColor: '#ffffff'}] },
        { name: 'Den Haag , Beresteinlaan', connecting: [{num: '9', color: '#8DB600', textColor: '#ffffff'}] },
        { name: 'Den Haag , Revalidatiecentrum', connecting: [{num: '9', color: '#8DB600', textColor: '#ffffff'}] },
        { name: 'Den Haag , Wolweversgaarde', connecting: [{num: '9', color: '#8DB600', textColor: '#ffffff'}] }, 
        { name: 'Den Haag , Leggelostraat', connecting: [{num: '9', color: '#8DB600', textColor: '#ffffff'}] },
        { name: 'Den Haag , Leyweg', connecting: [{num: '9', color: '#8DB600', textColor: '#ffffff'},{num: '16', color: '#79443B', textColor: '#ffffff'},{num: '21', color: '#C46210', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Den Haag , Loevesteinlaan', connecting: [{num: '9', color: '#8DB600', textColor: '#ffffff'},{num: '16', color: '#79443B', textColor: '#ffffff'}] },
        { name: 'Den Haag , Hardenbroekstraat', connecting: [{num: '16', color: '#79443B', textColor: '#ffffff'}] },
        { name: 'Den Haag , Remmersteinstraat', connecting: [{num: '16', color: '#79443B', textColor: '#ffffff'}] },
        { name: 'Den Haag , Erasmusplein', connecting: [{num: '16', color: '#79443B', textColor: '#ffffff'},{num: '51', color: '#0070BB', textColor: '#ffffff'}] },
        { name: 'Den Haag , Heeswijkplein', connecting: [{num: '16', color: '#79443B', textColor: '#ffffff'}] },
        { name: 'Den Haag , Station Moerwijk', connecting: [{num: '16', color: '#79443B', textColor: '#ffffff'},{num: '26', color: '#8DB600', textColor: '#000000'}] },
        { name: 'Den Haag , Van Zeggelenlaan', connecting: [{num: '16', color: '#79443B', textColor: '#ffffff'}] },
        { name: 'Den Haag , Jonckbloetplein', connecting: [{num: '16', color: '#79443B', textColor: '#ffffff'},{num: '17', color: '#0070BB', textColor: '#ffffff'}] },
        { name: 'Den Haag , Lorentzplein', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '16', color: '#79443B', textColor: '#ffffff'},{num: '17', color: '#0070BB', textColor: '#ffffff'}] },
        { name: 'Den Haag , Oudemansstraat', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '16', color: '#79443B', textColor: '#ffffff'},{num: '17', color: '#0070BB', textColor: '#ffffff'}] },
        { name: 'Den Haag , Leeghwaterplein', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '16', color: '#79443B', textColor: '#ffffff'},{num: '17', color: '#0070BB', textColor: '#ffffff'}] },
        { name: 'Den Haag , Hollandspoor', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '9', color: '#8DB600', textColor: '#ffffff'},{num: '9S', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Den Haag , Bierkade', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '9', color: '#8DB600', textColor: '#ffffff'},{num: '15', color: '#B57EDC', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Den Haag , Centrum', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '15', color: '#B57EDC', textColor: '#ffffff'},{num: '2', color: '#FFBF00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Den Haag , Kneuterdijk', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'}] },
        { name: 'Den Haag , Mauritskade', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '22', color: '#FF8C00', textColor: '#ffffff'},{num: '24', color: '#B53389', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Den Haag , Javastraat', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'}] },
        { name: 'Den Haag , Vredespaleis', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'}] },
        { name: 'Den Haag , Adriaan Goekooplaan', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'}] },
        { name: 'Den Haag , World Forum', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'}] }, 
        { name: 'Den Haag , Frankenslag', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'}] },
        { name: 'Den Haag , Duinstraat', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'}] },
        { name: 'Den Haag , Keizerstraat', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '21', color: '#FF8C00', textColor: '#ffffff'},{num: '22', color: '#FF8C00', textColor: '#ffffff'}] },
        { name: 'Den Haag , Badhuiskade', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '21', color: '#FF8C00', textColor: '#ffffff'},{num: '22', color: '#FF8C00', textColor: '#ffffff'}] },
        { name: 'Den Haag , Scheveningseslag/Beelden aan Zee', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '21', color: '#FF8C00', textColor: '#ffffff'},{num: '22', color: '#FF8C00', textColor: '#ffffff'}] },
        { name: 'Den Haag , Kurhaus', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '9', color: '#8DB600', textColor: '#ffffff'},{num: '21', color: '#FF8C00', textColor: '#ffffff'}] },
        { name: 'Den Haag , Zwarte Pad', connecting: [{num: '1', color: '#FF0800', textColor: '#ffffff'},{num: '9', color: '#8DB600', textColor: '#ffffff'}] },
      ]
    },
    {
    id: '10E',
      number: '10',
      type: 'bus',
      color: '#03C03C',
      textColor: '#000000',
      title: 'Dordrecht Centraal Station - P+R Engergiehuis',     
      operator: 'Qbuzz',
      concession: 'Drechtsteden, Molenlanden en Gorinchem (DMG)',
      lineType: 'Stadsbus',
      since: '3 Januari 2021',
      predecessor: '10',
      image: 'Qbuzz/Lijn_10_Dordrecht.jpg',
      caption: 'Lijn 10 op Dordrecht Centraal Station',
      frequencies: {
        'Spits': '3x/uur',
        'Dal': '3x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': '3x/uur',
        'Zondag': '3x/uur'
      },
      updates: [
        'Met ingang van 15 december 2024 werd richting Centraal Station voortaan rechtstreeks via de Oranjelaan in plaats van de Binnenstad gereden. Hierdoor vervielen de halten Biesboschstraat, Hallinqlaan, Kunstmin, Sint Jorisbrug en Steegoversloot. De eindhalte bij P+R Energiehuis werd verplaatst naar de Noordendijk. Tevens werd voortaan 3x/uur in plaats van 2x/uur gereden en verviel de laatste rit op zaterdag en zondag.'
      ],
      directions: [
        {
          name: "Sint P+R Energiehuis",
          stops: [
            { name: 'Dordrecht , Centraal Station', connecting: [{num: '2', color: '#03C03C', textColor: '#ffffff'},{num: '3', color: '#03C03C', textColor: '#ffffff'},{num: '4', color: '#03C03C', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Dordrecht , Centrum', connecting: [{num: '2', color: '#03C03C', textColor: '#ffffff'},{num: '3', color: '#03C03C', textColor: '#ffffff'},{num: '4', color: '#03C03C', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Dordrecht , Sarisgang', connecting: [] },
            { name: 'Dordrecht , Visbrug', connecting: [] },
            { name: 'Dordrecht , Scheffersplein', connecting: [] },  
            { name: 'Dordrecht , Nieuwbrug', connecting: [] },
            { name: 'Dordrecht , Mattensteiger', connecting: [] },
            { name: 'Dordrecht , Groothoofd', connecting: [] },
            { name: 'Dordrecht , Bolwerk', connecting: [] },
            { name: 'Dordrecht , Waterbus Merwekade', connecting: [] },
            { name: 'Dordrecht , Kromhout', connecting: [] },
            { name: 'Dordrecht , P+R Energiehuis/Noordendijk', connecting: [] },
          ]
        },
        {
          name: "Richting Dordrecht Centraal Station",
          stops: [
            { name: 'Dordrecht , P+R Energiehuis/Noordendijk', connecting: [] },
            { name: 'Dordrecht , Oranjelaan', connecting: [] },
            { name: 'Dordrecht , Oranjepark', connecting: [] }, 
            { name: 'Dordrecht , Centraal Station', connecting: [{num: '2', color: '#03C03C', textColor: '#ffffff'},{num: '3', color: '#03C03C', textColor: '#ffffff'},{num: '4', color: '#03C03C', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
      id: '10F',
      number: '10',
      type: 'Stadsbus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Eindhoven Centraal Station - Oirschot Kazerne',
      operator: 'Hermes (Bravo)',
      concession: 'Zuidoost-Brabant',
      lineType: 'Stadsbus',
      since: '26 Februari 2023',
      predecessor: '10',
      image: 'Arriva/Lijn_1_Eindhoven.jpg',
      caption: 'Lijn 1 op Eindhoven Centraal Station',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '1x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet Rijdt'
      },
      updates: [
        'Op 4 januari 2026 werden de ritten enkele minuten verschoven voor een betere afstemming met lijn 8 op de Boschdijk.'
      ],
      stops: [
        { name: 'Eindhoven , Centraal Station', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'}, {num: '3', color: '#BEBFC5', textColor: '#000000'}, {num: '4', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d', textColor: '#ffffff'}] },
        { name: 'Eindhoven , Zernikestraat', connecting: [{num: '8', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Eindhoven , Gemmastraat', connecting: [{num: '8', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Eindhoven , Wattstraat', connecting: [{num: '8', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Eindhoven , Minckelersplein', connecting: [{num: '8', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Eindhoven , Vredeoord', connecting: [{num: '8', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Eindhoven , De Grote Beek', connecting: [{num: '8', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Eindhoven , Estafettelaan', connecting: [{num: '9', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Eindhoven , Cor Gehrelslaan', connecting: [] },
        { name: 'Eindhoven , De Schakel/Truckstop 8', connecting: [] },
        { name: 'Eindhoven , Achtseweg Noord', connecting: [] },
        { name: 'Eindhoven , Mispelhoefstraat/Achtseweg Noord', connecting: [] },
        { name: 'Eindhoven , Mispelhoefstraat/De Schakel', connecting: [] },
        { name: 'Oirschot, Kazerne', connecting: [] },  
      ]
    },
    
    // Route 12 Nederlands Series //
    {
      id: '12A',
      number: '12',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Amstelstation - Zoutkeetsgracht',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '29 maart 2026',
      predecessor: '3,12',
      image: 'GVB/Lijn_12_Amsterdam.jpg',
      caption: 'Tramlijn 12 op Amstelstation',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        'Op 29 maart 2026 gingen de uitgestelde dienstregelingwijzigingen van de nieuwe concessie Stadsvervoer Amsterdam in.Tram 12 ging hierbij na de halte Concertgebouw in plaats van van/naar het Centraal Station voortaan via de Bilderdijkstraat en het Frederik Hendrikplantsoen naar de Zoutkeetsgracht rijden. Hiermee werd voor een deel de opgeheven tramlijn 3 vervangen.',
        'Aangezien de nieuwe route van lijn 12 minder druk was, werd de frequentie hierbij verlaagd naar maximaal 6x/uur overdag. Vanwege werkzaamheden aan de Raadhuisstraat en Rozengracht, was de verwachting dat tram 12 pas vanaf maart 2027 verder rijden van/naar de Zoutkeetsgracht. Tot die tijd lag het eindpunt van deze lijn bij de halte Frederik Hendrikplantsoen.',
        'Echter werd deze verlenging al doorgevoerd op 30 september 2026 doordat het eindpunt van tram 13 verlegd werd van de Zoutkeetsgracht naar de Zeilstraat vanwege de werkzaamheden aan de Overtoomse Sluis.'
      ],
      stops: [
        { name: 'Amsterdam ,Amstelstation', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Amsteldijk', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Victorieplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Waalstraat', connecting: [] },
        { name: 'Amsterdam ,Maasstraat', connecting: [] },
        { name: 'Amsterdam ,Van Hilligaertstraat', connecting: [] },
        { name: 'Amsterdam ,De Pijp', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: 'M52', color: '#00B9E8', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Roelof Hartplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Concertgebouw', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Overtoom', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam ,Kinkerstraat', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '13', color: '#8DB600', textColor: '#ffffff'},{num: '19', color: '#FF9966', textColor: '#000000'}] },
        { name: 'Amsterdam ,De Clercqstraat', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Hugo de Grootplein', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,Frederik Hendrikplantsoen', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Marnixplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Nieuwe Willemsstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Zoutkeetsgracht', connecting: [] },
      ]
    },

    // Route 15 Nederlands Series //
    {
    id: '15B',
      number: '15',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Sloterdijk- Amsterdam Station Zuid',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '13 December 2009',
      predecessor: '15 , 315',
      image: 'GVB/Lijn_15_Amsterdam.jpg',
      caption: 'Buslijn 1 rijdt bij Amsterdam, Haarlemmermeer Station',
      frequencies: {
        'Spits': '5x/uur',
        'Dal': '5x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        'Op 1 november 2026 werd op station Amsterdam Zuid de nieuwe Brittenpassage geopend, die ca. 200m westelijker lag dan de bestaande Minervapassage. Vanwege de veranderde looproutes werd de indeling van de tram- en bushaltes rondom het station aangepast. De halte Station Zuid aan de Strawinskylaan kreeg de toevoeging WTC-zijde, omdat de halte Parnassusweg de naam Station Zuid overnam.'
      ],
      directions: [
        {
          name: "Richting Amsterdam Station Zuid",
          stops: [
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Bos en Lommerplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '247', color: '#BEBFC5', textColor: '#000000'},{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Mercatorplein', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Willem Schoutenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Postjesweg', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Corantijnstraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Surinameplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam, Haarlemmermeerstraat', connecting: [] },
            { name: 'Amsterdam, Hoofddorpplein', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'},{num: 'N88', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Haarlemmermeerstation', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '257', color: '#BEBFC5', textColor: '#000000'},{num: '357', color: '#FF8C00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Olympiaweg', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Olympiaplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Prinses Irenestraat', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
        {
          name: "Richting Station Sloterdijk ",
          stops: [
            { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam, Prinses Irenestraat', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Olympiaplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Olympiaweg', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '24', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Haarlemmermeerstation', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '257', color: '#BEBFC5', textColor: '#000000'},{num: '357', color: '#FF8C00', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Zeilstraat', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'},{num: '13', color: '#8DB600', textColor: '#000000'},{num: '357', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Hoofddorpplein', connecting: [{num: '2', color: '#BEBFC5', textColor: '#000000'},{num: 'N88', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Haarlemmermeerstraat', connecting: [] },
            { name: 'Amsterdam , Surinameplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Corantijnstraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Postjesweg', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Willem Schoutenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Mercatorplein', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Erasmusgracht', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '247', color: '#BEBFC5', textColor: '#000000'},{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    // Route 18 Nederlands Series //
    {
    id: '18B',
      number: '18',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Riekerpolder',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '	29 maart 2026',
      predecessor: '18,68',
      image: 'GVB/Lijn_18_Amsterdam.jpg',
      caption: 'Buslijn 18 bij Amsterdam',
      frequencies: {
        'Spits': '5x/uur',
        'Dal': '4x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Riekerpolder",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Gillis van Ledenberchstraat', connecting: [{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Markthallen', connecting: [{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '19', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan Evertsenstraat', connecting: [] },
            { name: 'Amsterdam , Marco Polostraat', connecting: [{num: '13', color: '#8DB600', textColor: '#000000'}] },
            { name: 'Amsterdam , Mercatorplein', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Willem Schoutenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Hoofdweg', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Nachtwachtlaan', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Derkinderenstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Derkinderenstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'},{num: 'Metro', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Robert Fruinlaan', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Justus Lipsiusstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Cornelis Lelylaan', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Station Lelylaan', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Sierplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Johan Huizingalaan', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Sloterweg', connecting: [] },
            { name: 'Amsterdam , John M. Keynesplein', connecting: [] },
          ]
        },
        {
          name: "Richting Amsterdam Centraal Station ",
          stops: [
            { name: 'Amsterdam , John M. Keynesplein', connecting: [] },
            { name: 'Amsterdam , Sloterweg', connecting: [] },
            { name: 'Amsterdam , Johan Huizingalaan', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Sierplein', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Station Lelylaan', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Cornelis Lelylaan', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Justus Lipsiusstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Robert Fruinlaan', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Derkinderenstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'},{num: 'Metro', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Derkinderenstraat', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Nachtwachtlaan', connecting: [{num: 'N83', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Postjesweg', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'},{num: '17', color: '#7BA05B', textColor: '#000000'}] },
            { name: 'Amsterdam , Willem Schoutenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Mercatorplein', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '15', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Marco Polostraat', connecting: [{num: '13', color: '#8DB600', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan Evertsenstraat', connecting: [] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '19', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Markthallen', connecting: [{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Gillis van Ledenberchstraat', connecting: [{num: 'N82', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        }
      ]
    },
    {
    id: '21B',
      number: '21',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Geuzenveld',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '	8 maart 1959',
      predecessor: '-',
      image: 'GVB/Lijn_21_Amsterdam.jpg',
      caption: 'Buslijn 21 bij Amsterdam',
      frequencies: {
        'Spits': '8x/uur',
        'Dal': '8x/uur',
        'Avond': '6-8x/uur',
        'Zaterdag': '6-8x/uur',
        'Zondag': '6-8x/uur'
      },
      updates: [
        'Met ingang van 4 juli 2026 werd de dienstregeling tijdens de zomervakantie aangepast: doordeweeks werd voortaan al vanaf circa 7:30 uur 8x/uur gereden. Daarentegen werd op zondagen de maximale frequentie verlaagd van 8x/uur naar 6x/uur.'
      ],
      directions: [
        {
          name: "Richting Geuzenveld",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Oranjestraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Kostverlorenstraat', connecting: [] },
            { name: 'Amsterdam , Van Beuningenplein', connecting: [] },
            { name: 'Amsterdam , Van der Hoopstraat', connecting: [] },
            { name: 'Amsterdam , Van Hallstraat', connecting: [] },
            { name: 'Amsterdam , Vredenhof', connecting: [] },
            { name: 'Amsterdam , Solebaystraat', connecting: [] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Egidiusstraat', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Burgemeester de Vlugtlaan', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Burgemeester Fockstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Eliasstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Plein 40-45 ', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Antony Moddermanstraat ', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Jacob Cabeliaustraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Sam van Houtenstraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Michel de Klerkhof', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nolensstraat', connecting: [] },
            { name: 'Amsterdam , De Savornin Lohmanstraat', connecting: [] },
          ]
        },
        {
          name: "Richting Amsterdam Centraal Station ",
          stops: [
            { name: 'Amsterdam , De Savornin Lohmanstraat', connecting: [] },
            { name: 'Amsterdam , Michel de Klerkhof', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Sam van Houtenstraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Dr. H. Colijnstraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Antony Moddermanstraat ', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Plein 40-45 ', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Eliasstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Fockstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester de Vlugtlaan', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Egidiusstraat', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Solebaystraat', connecting: [] },
            { name: 'Amsterdam , Vredenhof', connecting: [] },
            { name: 'Amsterdam , Van Hallstraat', connecting: [] },
            { name: 'Amsterdam , Van der Hoopstraat', connecting: [] },
            { name: 'Amsterdam , Van Beuningenplein', connecting: [] },
            { name: 'Amsterdam , Kostverlorenstraat', connecting: [] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jan van Galenstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
        {
          name: "Richting J.M. den Uylstraat ",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Buiten Oranjestraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '22', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Willemsstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Marnixplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Frederik Hendrikplantsoen', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Kostverlorenstraat', connecting: [] },
            { name: 'Amsterdam , Van Beuningenplein', connecting: [] },
            { name: 'Amsterdam , Van der Hoopstraat', connecting: [] },
            { name: 'Amsterdam , Van Hallstraat', connecting: [] },
            { name: 'Amsterdam , Vredenhof', connecting: [] },
            { name: 'Amsterdam , Solebaystraat', connecting: [] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Egidiusstraat', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Bos en Lommerweg', connecting: [{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Burgemeester de Vlugtlaan', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '80', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam , Burgemeester Fockstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Eliasstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Plein 40-45 ', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Antony Moddermanstraat ', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Jacob Cabeliaustraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , J.M. den Uylstraat', connecting: [] },
            
          ]
        }
      ]
    },
    {
      id: '22A',
      number: '22',
      type: 'bus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Station Sloterdijk - Amsterdam Centraal Station',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '22,68',
      image: 'GVB/Lijn_22_Amsterdam.jpg',
      caption: 'Buslijn 22 rijdt bij Amsterdam,Insulindeweg',
      frequencies: {
        'Spits': '6-8x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      stops: [
        { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '15', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , La Guardiaweg ', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}, {num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Kabelweg ', connecting: [] },
        { name: 'Amsterdam , Contactweg ', connecting: [] },
        { name: 'Amsterdam , Spaarndammerdijk ', connecting: [] },
        { name: 'Amsterdam , Zaanstraat ', connecting: [] },
        { name: 'Amsterdam , Assendelftstraat', connecting: [] },
        { name: 'Amsterdam , Nassauplein ', connecting: []},
        { name: 'Amsterdam , Buiten Brouwersstraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '21', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Buiten Oranjestraat', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Haarlemmerplein', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '21', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
      ]
    },
    {
      id: '25A',
      number: '25',
      type: 'Tram',
      color: '#FE6F5E',
      textcolor: '#ffffff',
      title: 'Uithoorn Centrum - Muiderpoortation',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '29 maart 2026',
      predecessor: '3,25',
      image: 'GVB/Lijn_25_Amsterdam.jpg',
      caption: 'Tramlijn 25 rijdt op Javaplein',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        'Op 29 maart 2026 gingen de uitgestelde dienstregelingwijzigingen van de nieuwe concessie Stadsvervoer Amsterdam in.Tram 12 ging hierbij na de halte Concertgebouw in plaats van van/naar het Centraal Station voortaan via de Bilderdijkstraat en het Frederik Hendrikplantsoen naar de Zoutkeetsgracht rijden. Hiermee werd voor een deel de opgeheven tramlijn 3 vervangen.',
        'Aangezien de nieuwe route van lijn 12 minder druk was, werd de frequentie hierbij verlaagd naar maximaal 6x/uur overdag. Vanwege werkzaamheden aan de Raadhuisstraat en Rozengracht, was de verwachting dat tram 12 pas vanaf maart 2027 verder rijden van/naar de Zoutkeetsgracht. Tot die tijd lag het eindpunt van deze lijn bij de halte Frederik Hendrikplantsoen.',
        'Echter werd deze verlenging al doorgevoerd op 30 september 2026 doordat het eindpunt van tram 13 verlegd werd van de Zoutkeetsgracht naar de Zeilstraat vanwege de werkzaamheden aan de Overtoomse Sluis.'
      ],
      stops: [
        { name: 'Uithoorn , Centrum', connecting: [{num: '123', color: '#FDEE00', textColor: '#000000'},{num: '330', color: '#72A0C1', textColor: '#ffffff'},{num: '526', color: '#72A0C1', textColor: '#000000'}] },
        { name: 'Uithoorn , Busstation', connecting: [{num: '123', color: '#FDEE00', textColor: '#000000'},{num: '147', color: '#568203', textColor: '#000000'},{num: '149', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Aan De Zoom', connecting: [] },
        { name: 'Westwijk', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Sacharovlaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '357', color: '#FF8C00', textColor: '#ffffff'}] },
        { name: 'Poortwachter', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '178', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Brink', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Meent', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
        { name: 'Sportlaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Ouderkerkerlaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '149', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}]},
        { name: 'Oranjebaan', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '171', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}]},
        { name: 'Onderuit', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Zonnestein', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Kronenburg', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Uilenstede', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Van Boshuizenstraat', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '463', color: '#FE6F5E', textColor: '#000000'}]},
        { name: 'Arent Janszoon Ernststraat', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '461', color: '#000000', textColor: '#ffffff'},{num: '+', color: '#6c757d'}]},
        { name: 'Station Zuid', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'},{num: '6', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam, Prinses Irenestraat ', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'}] },
        { name: 'Amsterdam, Stadionweg ', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'}] },
        { name: 'Amsterdam, Gerrit van der Veenstraat ', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'}] },
        { name: 'Amsterdam, Roelof Hartplein ', connecting: [{num: '5', color: '#9966CC', textColor: '#000000'}] },
        { name: 'Amsterdam ,De Pijp', connecting: [{num: '12', color: '#BEBFC5', textColor: '#000000'},{num: 'M52', color: '#00B9E8', textColor: '#ffffff'}] },
        { name: 'Amsterdam ,2e van der Helststraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '19', color: '#FF4F00', textColor: '#000000'}] },
        { name: 'Amsterdam ,Van Woustraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Wibautstraat', connecting: [{num: 'M51', color: '#FF8C00', textColor: '#000000'},{num: 'M53', color: '#FF0800', textColor: '#ffffff'},{num: 'M54', color: '#FDEE00', textColor: '#000000'}] },
        { name: 'Amsterdam ,Camperstraat', connecting: [{num: '1', color: '#FF4F00', textColor: '#ffffff'},{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Beukenweg', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Linnaeusstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Dapperstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Dapperstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '14', color: '#BEBFC5', textColor: '#000000'},{num: '19', color: '#FF4F00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
      ]
    },
    {
      id: '26A',
      number: '26',
      type: 'Tram',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Centraal Station - IJburg Strandeiland',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Tram',
      since: '30 mei 2005',
      predecessor: '326',
      image: 'GVB/Lijn_26_Amsterdam.jpg',
      caption: 'Tramlijn 26 rijdt op Amsterdam IJburglaan ',
      frequencies: {
        'Spits': '10x/uur',
        'Dal': '8x/uur',
        'Avond': '6-8x/uur',
        'Zaterdag': '6-8x/uur',
        'Zondag': '6-8x/uur'
      },
      updates: [
        'Per 31 augustus 2026 werd lijn 26 verlengd naar het Strandeiland op IJburg. De bestaande halte met de naam IJburg heette voortaan Theo van Goghpark en werd een halte in twee richtingen. Nieuwe tramhaltes waren Centrumeiland, Buiteneilandlaan en Franz Kafkastraat. De spitsfrequentie werd verhoogd van 8-9x/uur naar 10x/uur en de dalfrequentie werd verlaagd van 8-9x/uur naar 8x/uur.'
      ],
      stops: [
        { name: 'Amsterdam , Centraal Station (Tram Oostzijde)', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Muziekgebouw Bimhuis', connecting: [] },
        { name: 'Amsterdam , Kattenburgerstraat', connecting: [{num: '43', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Zuiderzeeweg', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Bob Haarmslaan', connecting: [] },
        { name: 'Amsterdam , Steigereiland', connecting: [] },
        { name: 'Amsterdam , Vennepluimstraat', connecting: [] },
        { name: 'Amsterdam , Diemerparklaan', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Lumièrestraat', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Theo van Goghpark', connecting: [] },
        { name: 'Amsterdam , Centrumeiland', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '360', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Buiteneilandlaan', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '360', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Franz Kafkastraat', connecting: [] },
      ]
    },
    {
    id: '34A',
      number: '34',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Noord - Vogelbuurt',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '34,38',
      image: '',
      caption: '-',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Vogelbuurt",
          stops: [
            { name: 'Amsterdam , Station Noord ', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'}, {num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,  G.J. Scheurleerweg', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}, {num: '247', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Oosterlengte', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Grootzeil', connecting: [] },
            { name: 'Amsterdam , Masthof', connecting: [] },
            { name: 'Amsterdam , Staghof', connecting: [] },
            { name: 'Amsterdam , Tussendek', connecting: [] },
            { name: 'Amsterdam , Voordek', connecting: [] },
            { name: 'Amsterdam , Statenjachtstraat', connecting: [] },
            { name: 'Amsterdam , Tjalkstraat', connecting: [] },
            { name: 'Amsterdam , Barkpad', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Pinksterbloemstraat', connecting: [] },
            { name: 'Amsterdam , Sneeuwbalstraat', connecting: [] }, 
            { name: 'Amsterdam , Mosplein', connecting: [] }, 
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Hamerstraat', connecting: [] }, 
            { name: 'Amsterdam , Havikslaan', connecting: [] }, 
            { name: 'Amsterdam , Spreeuwenpark', connecting: [] },
            { name: 'Amsterdam ,  Valkenweg', connecting: [] }, 
          ]
        },
        {
          name: "Richting Amsterdam Station Noord",
          stops: [
            { name: 'Amsterdam ,  Valkenweg', connecting: [] }, 
            { name: 'Amsterdam , Havikslaan', connecting: [] }, 
            { name: 'Amsterdam , Hamerstraat', connecting: [] },
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Mosplein', connecting: [] }, 
            { name: 'Amsterdam , Sneeuwbalstraat', connecting: [] }, 
            { name: 'Amsterdam , Pinksterbloemstraat', connecting: [] },
            { name: 'Amsterdam , Barkpad', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Tjalkstraat', connecting: [] },
            { name: 'Amsterdam , Statenjachtstraat', connecting: [] },
            { name: 'Amsterdam , Voordek', connecting: [] },
            { name: 'Amsterdam , Tussendek', connecting: [] },
            { name: 'Amsterdam , Staghof', connecting: [] },
            { name: 'Amsterdam , Masthof', connecting: [] },
            { name: 'Amsterdam , Grootzeil', connecting: [] },
            { name: 'Amsterdam , Oosterlengte', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '245', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,  G.J. Scheurleerweg', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}, {num: '247', color: '#BEBFC5', textColor: '#000000'},{num: 'N81', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Noord ', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'}, {num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] }
          ]
        }
      ]
    },
    {
    id: '36A',
      number: '36',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Sloterdijk - Olof Palmeplein',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '35,36',
      image: 'GVB/Lijn_36_Amsterdam.jpg',
      caption: 'Lijn 36 op Amsterdam de Werengouw',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Olof Palmeplein",
          stops: [
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '15', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , La Guardiaweg ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Basiswege', connecting: [{num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '273', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Oostzanerdijk', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'},{num: '103', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Bovenkruier', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Petmolen', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Standerdmolen', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Appelweg', connecting: [] },
            { name: 'Amsterdam , Druivenstraat', connecting: [] },
            { name: 'Amsterdam , Ananasplein', connecting: [] },
            { name: 'Amsterdam , Pomonastraat', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nageljongenstraat', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Atatürk', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Floraweg', connecting: [{num: '391', color: '#FF0800', textColor: '#ffffff'},{num: '394', color: '#FF0800', textColor: '#ffffff'}] }, 
            { name: 'Amsterdam , Mosplein', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Merelstraat', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Rode Kruisstraat', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nieuwe Purmerweg', connecting: [] }, 
            { name: 'Amsterdam , Wervershoofstraat', connecting: [] }, 
            { name: 'Amsterdam , Purmerplein', connecting: [] },
            { name: 'Amsterdam , Purmerweg', connecting: [] },
            { name: 'Amsterdam , Waterlandplein', connecting: [] },
            { name: 'Amsterdam , De Egmondenstraat', connecting: [] },
            { name: 'Amsterdam , Ilperveldstraat', connecting: [] },
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'},{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
        {
          name: "Richting Amsterdam Station Sloterdijk",
          stops: [
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'},{num: '39', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Ilperveldstraat', connecting: [] },
            { name: 'Amsterdam , De Egmondenstraat', connecting: [] },
            { name: 'Amsterdam , Waterlandplein', connecting: [] },
            { name: 'Amsterdam , Purmerweg', connecting: [] },
            { name: 'Amsterdam , Purmerplein', connecting: [] },
            { name: 'Amsterdam , Wervershoofstraat', connecting: [] },
            { name: 'Amsterdam , Nieuwe Purmerweg', connecting: [] }, 
            { name: 'Amsterdam , Rode Kruisstraat', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Waddenweg', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Merelstraat', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Mosplein', connecting: [{num: '38', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Floraweg', connecting: [{num: '391', color: '#FF0800', textColor: '#fffffff'},{num: '394', color: '#FF0800', textColor: '#ffffff'}] }, 
            { name: 'Amsterdam , Atatürk', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Nageljongenstraat', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Pomonastraat', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Ananasplein', connecting: [] },
            { name: 'Amsterdam , Druivenstraat', connecting: [] },
            { name: 'Amsterdam , Appelweg', connecting: [] },
            { name: 'Amsterdam , Standerdmolen', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Petmolen', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Bovenkruier', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Oostzanerdijk', connecting: [{num: '39', color: '#BEBFC5', textColor: '#ffffff'},{num: '103', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Basiswege', connecting: [{num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '273', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , La Guardiaweg ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '103', color: '#003262', textColor: '#ffffff'},{num: '272', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '15', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] }
          ]
        }
      ]
    },
    {
      id: '37A',
      number: '37',
      type: 'bus',
      color: '#BEBFC5',
      textcolor: '#000000',
      title: 'Amsterdam Station Noord- Amstelstation',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '22 Juli 2018',
      predecessor: '37',
      image: 'GVB/Lijn_37_Amsterdam.jpg',
      caption: 'Buslijn 37 bij Amsterdam station Noord ',
      frequencies: {
        'Spits': '7-5x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4-6x/uur',
        'Zondag': '4-6x/uur'
      },
      updates: [
        'Geen recente updates bekend.'
      ],
      stops: [
        { name: 'Amsterdam , Station Noord ', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}, {num: '39', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Buikslotermeerplein', connecting: [] },
        { name: 'Amsterdam , J. Drijverweg ', connecting: [{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Beemsterstraat ', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Dijkmanshuizenstraat ', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Volendammerweg ', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Hilversumstraat', connecting: [] },
        { name: 'Amsterdam , Volkstuin ', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}]},
        { name: 'Amsterdam , Liergouw', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Zuiderzeeweg', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Insulindeweg', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '14', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Soembawastraat', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '4', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Molukkenstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '19', color: '#FF4F00', textColor: '#000000'},{num: '40', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Muiderpoortstation', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '14', color: '#BEBFC5', textColor: '#000000'},{num: '19', color: '#FF4F00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Amsterdam , Dapperstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Beukenplein', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , Beukenplein', connecting: [{num: '245', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam , James Wattstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Maxwellstraat', connecting: [] },
        { name: 'Amsterdam ,Fizeaustraat', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '65', color: '#BEBFC5', textColor: '#000000'}] },
        { name: 'Amsterdam ,Amstelstation', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
      ]
    },
    {
    id: '38A',
      number: '38',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Olof Palmeplein - Overhoeks',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '38',
      image: 'GVB/Lijn_38_Amsterdam.jpg',
      caption: 'Lijn 38 bij Amsterdam,Waddenweg.',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-3x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Overhoeks",
          stops: [
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Het Breed', connecting: [] },
            { name: 'Amsterdam , Rode Kruisstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Waddenweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Merelstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'},{num: '36', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Mosplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Klaprozenweg', connecting: [] },
            { name: 'Amsterdam , Distelweg', connecting: [] },
            { name: 'Amsterdam , Grasweg', connecting: [] },
            { name: 'Amsterdam , Meidoornplein', connecting: [] },
          ]
        },
        {
          name: "Richting Olof Palmeplein",
          stops: [
            { name: 'Amsterdam , Meidoornplein', connecting: [] },
            { name: 'Amsterdam , Noorderpark', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'},{num: '36', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam , Johan van Hasseltweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Merelstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Rode Kruisstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Het Breed', connecting: [] },
            { name: 'Amsterdam , Winkelcentrum', connecting: [] },
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '39', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        }
      ]
    },
    {
    id: '39A',
      number: '39',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Olof Palmeplein - Molenwijk',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 maart 2026',
      predecessor: '34,35,36,38',
      image: 'GVB/Lijn_39_Amsterdam.jpg',
      caption: 'Lijn 39 bij Station Olof Palmeplein',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-3x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Molenwijk",
          stops: [
            { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Th. Weeversweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , J. Drijverweg', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Spelderholt', connecting: [] },
            { name: 'Amsterdam , Amerbos', connecting: [] },
            { name: 'Amsterdam , Bakkerswaal', connecting: [] },
            { name: 'Amsterdam , Station Noord ', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}, {num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] }, 
            { name: 'Amsterdam , G.J. Scheurleerweg', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Oosterlengte', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , BovenIJ Ziekenhuis', connecting: [] },
            { name: 'Amsterdam , Fluitschipstraat', connecting: [] },
            { name: 'Amsterdam , Barkpad', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Floraweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '391', color: '#FF0800', textColor: '#ffffff'},{num: '394', color: '#FF0800', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Atatürk', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Nageljongenstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Pomonastraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Meteorensingel', connecting: [] },
            { name: 'Amsterdam , Maanstraat', connecting: [] },
            { name: 'Amsterdam , Meteorenweg', connecting: [] },
            { name: 'Amsterdam , Kometensingel', connecting: [] },
            { name: 'Amsterdam , Oostzanerdijk', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '103', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Bovenkruier', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Petmolen', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Standerdmolen', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Molenwijk', connecting: [] },
            
          ]
        },
        {
          name: "Richting Olof Palmeplein",
          stops: [
          { name: 'Amsterdam , Molenwijk', connecting: [] },
          { name: 'Amsterdam , Standerdmolen', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Petmolen', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Bovenkruier', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Oostzanerdijk', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '103', color: '#003262', textColor: '#ffffff'}] },
          { name: 'Amsterdam , Kometensingel', connecting: [] },
          { name: 'Amsterdam , Meteorenweg', connecting: [] },
          { name: 'Amsterdam , Maanstraat', connecting: [] },
          { name: 'Amsterdam , Meteorensingel', connecting: [] },
          { name: 'Amsterdam , Pomonastraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Nageljongenstraat', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Atatürk', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Slijperweg', connecting: [] },
          { name: 'Amsterdam , Barkpad', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Fluitschipstraat', connecting: [] },
          { name: 'Amsterdam , BovenIJ Ziekenhuis', connecting: [] },
          { name: 'Amsterdam , Oosterlengte', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , G.J. Scheurleerweg', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Station Noord ', connecting: [{num: '34', color: '#BEBFC5', textColor: '#000000'}, {num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '111', color: '#003262', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] }, 
          { name: 'Amsterdam , Bakkerswaal', connecting: [] },
          { name: 'Amsterdam , Amerbos', connecting: [] },
          { name: 'Amsterdam , Spelderholt', connecting: [] },
          { name: 'Amsterdam , J. Drijverweg', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Th. Weeversweg', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Olof Palmeplein', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '38', color: '#BEBFC5', textColor: '#000000'}] }
          ]
        }
      ]
    },
    {
    id: '40A',
      number: '40',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Amstelstation - Muiderpoortation',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 mei 2006',
      predecessor: '67',
      image: 'GVB/Lijn_40_Amsterdam.jpg',
      caption: 'Lijn 40 rijdt op Hugo de Vrieslaan',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '4-6x/uur',
        'Avond': '3-4x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Muiderpoortation",
          stops: [
            { name: 'Amsterdam ,Amstelstation', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Fizeaustraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '65', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Lorentzlaan', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Pekelharingstraat', connecting: [] },
            { name: 'Amsterdam ,Kruislaan', connecting: [] },
            { name: 'Amsterdam ,Linnaeusparkweg', connecting: [] },
            { name: 'Amsterdam ,Station Science Park', connecting: [] },
            { name: 'Amsterdam ,Science Park Aer', connecting: [] },
            { name: 'Amsterdam ,Science Park Aqua', connecting: [] },
            { name: 'Amsterdam , Science Park Terra', connecting: [] },
            { name: 'Amsterdam , Science Park', connecting: [] },
            { name: 'Amsterdam , Carolina Mac Gillavrylaan', connecting: [] },
            { name: 'Amsterdam , Valentijnkade', connecting: [{num: '65', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Molukkenstraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Muiderpoortation', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
        {
          name: "Richting Amstelation",
          stops: [
          { name: 'Amsterdam , Muiderpoortation', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Molukkenstraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Valentijnkade', connecting: [{num: '65', color: '#BEBFC5', textColor: '#000000'},] },
          { name: 'Amsterdam , Carolina Mac Gillavrylaan', connecting: [] },
          { name: 'Amsterdam , Science Park', connecting: [] },
          { name: 'Amsterdam , Science Park Terra', connecting: [] },
          { name: 'Amsterdam ,Science Park Aqua', connecting: [] },
          { name: 'Amsterdam ,Science Park Aer', connecting: [] },
          { name: 'Amsterdam ,Station Science Park', connecting: [] },
          { name: 'Amsterdam ,Linnaeusparkweg', connecting: [] },
          { name: 'Amsterdam ,Kruislaan', connecting: [] },
          { name: 'Amsterdam ,Pekelharingstraat', connecting: [] },
          { name: 'Amsterdam ,Lorentzlaan', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Maxwellstraat ', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '65', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Fizeaustraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '65', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Amstelstation', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    {
    id: '42A',
      number: '42',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Cruquius-eiland',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 mei 2026',
      predecessor: '22',
      image: 'GVB/Lijn_42_Amsterdam.jpg',
      caption: 'Lijn 42 bij Amsterdam CS',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Cruquius-eiland ",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Prins Hendrikkade', connecting: [] },
            { name: 'Amsterdam ,Kadijksplein', connecting: [] },
            { name: 'Amsterdam ,Kattenburgerplein', connecting: [] },
            { name: 'Amsterdam ,Wittenburgergracht', connecting: [] },
            { name: 'Amsterdam ,Oostenburgergracht', connecting: [] },
            { name: 'Amsterdam ,Het Funen', connecting: [] },
            { name: 'Amsterdam ,Veelaan', connecting: [{num: '65', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Th. K. van Lohuizenlaan', connecting: [] },
            { name: 'Amsterdam , Pigmentstraat', connecting: [] },
          ]
        },
      ]
    },
    {
    id: '43A',
      number: '43',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Borneo-eiland',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '3 Januari 2026',
      predecessor: '48',
      image: 'GVB/Lijn_43_Amsterdam.jpg',
      caption: 'Lijn 43 bij Amsterdam CS',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-3x/uur',
        'Zondag': '2-3x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Borneo-eiland ",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Piet Heinkade', connecting: [] },
            { name: 'Amsterdam , Kattenburg', connecting: [] },
            { name: 'Amsterdam , Rietlandpark', connecting: [] },
            { name: 'Amsterdam , Amsterdam, Borneolaan', connecting: [] },
          ]
        },
      ]
    },
    {
    id: '44A',
      number: '44',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Bijlmer Arena - Diemen Noord',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 mei 2006',
      predecessor: '177',
      image: 'GVB/Lijn_44_Amsterdam.jpg',
      caption: 'Lijn 44',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-3x/uur',
        'Zaterdag': '2-3x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Diemen Noord",
          stops: [
            { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Bijlmerplein', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Dolingadreef', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Dennenrode', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Echtenstein', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Diemen , Nienoord', connecting: [] },
            { name: 'Diemen , Station Diemen Zuid', connecting: [{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Diemen ,Tarwekamp', connecting: [] },
            { name: 'Diemen ,Boven Rijkersloot', connecting: [] },
            { name: 'Diemen ,Beukenhorst', connecting: [] },
            { name: 'Diemen , Diemerbrug', connecting: [] },
            { name: 'Diemen , Prins Bernhardlaan', connecting: [] },
            { name: 'Diemen , Prinses Beatrixlaan', connecting: [] },
            { name: 'Diemen , Winkelcentrum', connecting: [] },
            { name: 'Diemen , Station Diemen', connecting: [] },
            { name: 'Diemen , Diemen, Buitenlust', connecting: [] },
            { name: 'Diemen , Vogelweg', connecting: [] },
            { name: 'Diemen , Rietzangerweg', connecting: [] },
            { name: 'Diemen , Meerkoet', connecting: [] },
            { name: 'Diemen , Tureluurweg', connecting: [] },
            { name: 'Diemen ,  Klipperweg', connecting: [] },
            { name: 'Diemen ,  Diemen Noord', connecting: [] },
          ]
        },
        {
          name: "Richting Amsterdam Bijlmer Arena",
          stops: [
          { name: 'Diemen ,  Diemen Noord', connecting: [] },
          { name: 'Diemen ,  Klipperweg', connecting: [] },
          { name: 'Diemen, Tureluurweg', connecting: [] },
          { name: 'Diemen , Zeezigt', connecting: [] },
          { name: 'Diemen , Oude Waelweg', connecting: [] },
          { name: 'Diemen , Buytenweg', connecting: [] },
          { name: 'Diemen , Buitenlust', connecting: [] },
          { name: 'Diemen , Station Diemen', connecting: [] },
          { name: 'Diemen , Burgemeester Bickerstraat', connecting: [] },
          { name: 'Diemen ,Beukenhorst', connecting: [] },
          { name: 'Diemen ,Boven Rijkersloot', connecting: [] },
          { name: 'Diemen ,Tarwekamp', connecting: [] },
          { name: 'Diemen , Station Diemen Zuid', connecting: [{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Diemen , Nienoord', connecting: [] },
          { name: 'Amsterdam ,Echtenstein', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Dennenrode', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Dolingadreef', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Foppingadreef', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    {
    id: '47A',
      number: '47',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Bijlmer Arena - Holendrecht Station',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 mei 2006',
      predecessor: '59',
      image: 'GVB/Lijn_47_Amsterdam.jpg',
      caption: 'Lijn 47 bij Amsterdam Bijlmer Arena',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-3x/uur',
        'Zaterdag': '3x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Holendrecht Station",
          stops: [
            { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Bijlmerplein', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Anton de Komplein', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Florijn', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Tulastraat', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Annie Romeinplein', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Ganzenhoef', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Grubbehoeve', connecting: [] },
            { name: 'Amsterdam ,Geerdinkhof', connecting: [] },
            { name: 'Amsterdam , Koornhorst', connecting: [] },
            { name: 'Amsterdam , Kraaiennest', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Gaasperplas', connecting: [{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Leusdenhof', connecting: [] },
            { name: 'Amsterdam , Veenendaalplein', connecting: [] },
            { name: 'Amsterdam , Wamelstraat', connecting: [] },
            { name: 'Amsterdam , Willem Gertenbachstraat', connecting: [] },
            { name: 'Amsterdam , Gein', connecting: [] },
            { name: 'Amsterdam , Woudrichemstraat', connecting: [] },
            { name: 'Amsterdam , Staverdenplein', connecting: [] },
            { name: 'Amsterdam , Schaarsbergenstraat', connecting: [] },
            { name: 'Amsterdam , Schoonhovendreef', connecting: [] },
            { name: 'Amsterdam , Reigersbos', connecting: [] },
            { name: 'Amsterdam , Rhenenhof', connecting: [] },
            { name: 'Amsterdam , Meernhof', connecting: [] },
            { name: 'Amsterdam , Holendrechtplein', connecting: [] },
            { name: 'Amsterdam ,  Holendrecht Station', connecting: [] },
          ]
        },
        {
          name: "Richting Amsterdam Bijlmer Arena",
          stops: [
          { name: 'Amsterdam ,  Holendrecht Station', connecting: [] },
          { name: 'Amsterdam , Holendrechtplein', connecting: [] },
          { name: 'Amsterdam , Meernhof', connecting: [] },
          { name: 'Amsterdam , Rhenenhof', connecting: [] },
          { name: 'Amsterdam , Reigersbos', connecting: [] },
          { name: 'Amsterdam , Schoonhovendreef', connecting: [] },
          { name: 'Amsterdam , Schaarsbergenstraat', connecting: [] },
          { name: 'Amsterdam , Staverdenplein', connecting: [] },
          { name: 'Amsterdam , Woudrichemstraat', connecting: [] },
          { name: 'Amsterdam , Gein', connecting: [] },
          { name: 'Amsterdam , Willem Gertenbachstraat', connecting: [] },
          { name: 'Amsterdam , Wamelstraat', connecting: [] },
          { name: 'Amsterdam , Veenendaalplein', connecting: [] },
          { name: 'Amsterdam , Leusdenhof', connecting: [] },
          { name: 'Amsterdam , Gaasperplas', connecting: [{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Kraaiennest', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Koornhorst', connecting: [] },
          { name: 'Amsterdam , Geerdinkhof', connecting: [] },
          { name: 'Amsterdam , Grubbehoeve', connecting: [] },
          { name: 'Amsterdam , Ganzenhoef', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Annie Romeinplein', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Tulastraat', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Florijn', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Anton de Komplein', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Foppingadreef', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    {
    id: '48A',
      number: '48',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Centraal Station - Houthavens',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '3 Januari 2026',
      predecessor: '48',
      image: 'GVB/Lijn_48_Amsterdam.jpg',
      caption: 'Lijn 48 bij Amsterdam CS',
      frequencies: {
        'Spits': '6-12x/uur',
        'Dal': '6x/uur',
        'Avond': '4-6x/uur',
        'Zaterdag': '4x/uur',
        'Zondag': '4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Houthavens",
          stops: [
            { name: 'Amsterdam , Centraal Station ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}, {num: '22', color: '#BEBFC5', textColor: '#000000'},{num: '42', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Westerdoksdijk', connecting: [] },
            { name: 'Amsterdam , Barentszplein', connecting: [] },
            { name: 'Amsterdam , Houtmankade', connecting: [] },
            { name: 'Amsterdam , Spaarndammerstraat', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Haparandaweg', connecting: [] },
            { name: 'Amsterdam , Haparandaweg', connecting: [] },
          ]
        },
      ]
    },
    {
    id: '61A',
      number: '61',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Sloterdijk- Osdorpplein',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '3 Januari 2021',
      predecessor: '61',
      image: 'GVB/Lijn_61_Amsterdam.jpg',
      caption: 'Buslijn 61 rijdt bij Amsterdam',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Osdorpplein Noord",
          stops: [
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Plesostraat', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Naritaweg', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'},{num: '382', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Seineweg', connecting: [] },
            { name: 'Amsterdam , Antony Moddermanstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Jacob Cabeliaustraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Sam van Houtenstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Michel de Klerkhof', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Troelstralaan', connecting: [] },
            { name: 'Amsterdam ,Willinklaan', connecting: [] },
            { name: 'Amsterdam ,Herman Bonpad', connecting: [] },
            { name: 'Amsterdam ,Ookmeerweg', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Osdorpplein Noord', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '71', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] }, 
            
          ]
        },
        {
          name: "Richting Station Sloterdijk ",
          stops: [
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '71', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] }, 
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Ookmeerweg', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Herman Bonpad', connecting: [] },
            { name: 'Amsterdam ,Willinklaan', connecting: [] },
            { name: 'Amsterdam ,Troelstralaan', connecting: [] },
            { name: 'Amsterdam ,Michel de Klerkhof', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Sam van Houtenstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Aalbersestraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Dr. H. Colijnstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Antony Moddermanstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Seineweg', connecting: [] },
            { name: 'Amsterdam , Naritaweg', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'},{num: '382', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Plesostraat', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Antony Moddermanstraat', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Seineweg', connecting: [] },
            { name: 'Amsterdam , Naritaweg', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'},{num: '382', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Plesostraat', connecting: [{num: '231', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] }
          ]
        }
      ]
    },
    {
    id: '63A',
      number: '63',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Lelylaan - Osdorp De Aker',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 mei 2006',
      predecessor: '23',
      image: 'GVB/Lijn_63_Amsterdam.jpg',
      caption: 'Buslijn 63 rijdt bij Amsterdam',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2x/uur',
        'Zondag': '2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Osdorp De Aker",
          stops: [
            { name: 'Amsterdam , Station Lelylaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Cornelis Lelylaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Hemsterhuisstraat', connecting: [] },
            { name: 'Amsterdam , Van Mourik Broekmanstraat', connecting: [] },
            { name: 'Amsterdam , Piet Wiedijkstraat', connecting: [] },
            { name: 'Amsterdam , C.K. Eloutstraat', connecting: [] },
            { name: 'Amsterdam , Meer en Vaart', connecting: [] },
            { name: 'Amsterdam , Osdorpplein Oost', connecting: [{num: '71', color: '#BEBFC5', textColor: '#000000'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Bullepad', connecting: [] }, 
            { name: 'Amsterdam ,Reimerswaalstraat', connecting: [] }, 
            { name: 'Amsterdam ,Saaftingestraat', connecting: [] }, 
            { name: 'Amsterdam ,Baden Powellweg', connecting: [] }, 
            { name: 'Amsterdam ,Jan Rebelstraat', connecting: [] }, 
            { name: 'Amsterdam ,Griendstraat', connecting: [] }, 
            { name: 'Amsterdam , Matterhorn', connecting: [{num: '71', color: '#BEBFC5', textColor: '#000000'}] }, 
          ]
        },
        {
          name: "Richting Station Lelylaan ",
          stops: [
            { name: 'Amsterdam , Matterhorn', connecting: [{num: '71', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Griendstraat', connecting: [] }, 
            { name: 'Amsterdam ,Zuidermolenweg', connecting: [] }, 
            { name: 'Amsterdam ,Baden Powellweg', connecting: [] },
            { name: 'Amsterdam ,Saaftingestraat', connecting: [] }, 
            { name: 'Amsterdam ,Reimerswaalstraat', connecting: [] }, 
            { name: 'Amsterdam ,Bullepad', connecting: [] }, 
            { name: 'Amsterdam ,Osdorper Ban', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Osdorpplein Oost', connecting: [{num: '71', color: '#BEBFC5', textColor: '#000000'},{num: '369', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Meer en Vaart', connecting: [] },
            { name: 'Amsterdam , C.K. Eloutstraat', connecting: [] },
            { name: 'Amsterdam , Piet Wiedijkstraat', connecting: [] },
            { name: 'Amsterdam , Van Mourik Broekmanstraat', connecting: [] },
            { name: 'Amsterdam , Hemsterhuisstraat', connecting: [] },
            { name: 'Amsterdam , Cornelis Lelylaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Station Lelylaan', connecting: [{num: '18', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '195', color: '#0000FF', textColor: '#ffffff'}] },
          ]
        }
      ]
    },
    {
    id: '65A',
      number: '65',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Amstelstation - KNSM-eiland',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '8 december 2023',
      predecessor: '65',
      image: 'GVB/Lijn_65_Amsterdam.jpg',
      caption: 'Buslijn 65 op het Amstelstation',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '5x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting KNSM-eiland",
          stops: [
            { name: 'Amsterdam , Amstelstation', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Fizeaustraat', connecting: [{num: '37', color: '#BEBFC5', textColor: '#000000'},{num: '40', color: '#BEBFC5', textColor: '#000000'},{num: '41', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Maxwellstraat', connecting: [] },
            { name: 'Amsterdam , Middenweg', connecting: [] },
            { name: 'Amsterdam , Radioweg', connecting: [] },
            { name: 'Amsterdam , Archimedesweg', connecting: [] },
            { name: 'Amsterdam , Valentijnkade', connecting: [{num: '40', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Javaplein', connecting: [] },
            { name: 'Amsterdam , Zeeburgerdijk', connecting: [] },
            { name: 'Amsterdam ,Veelaan', connecting: [{num: '42', color: '#BEBFC5', textColor: '#000000'}] }, 
            { name: 'Amsterdam ,Borneolaan', connecting: [] }, 
            { name: 'Amsterdam ,Cornelis van Eesterenlaan', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'}] }, 
            { name: 'Amsterdam ,Azartplein', connecting: [{num: '1', color: '#FF4F00', textColor: '#000000'}] }, 
            { name: 'Amsterdam ,Levantplein', connecting: [] }, 
            { name: 'KNSM-laan', connecting: [] },  
          ]
        },
      ]
    },
    {
    id: '66A',
      number: '66',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Bijlmer Arena - IJburg',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '29 Augustus 2009',
      predecessor: '-',
      image: 'GVB/Lijn_66_Amsterdam.jpg',
      caption: 'Lijn 66 bij Amsterdam Bijlmer Arena',
      frequencies: {
        'Spits': '6x/uur',
        'Dal': '4x/uur',
        'Avond': '2-4x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '2-3x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting IJburg",
          stops: [
            { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam ,Bijlmerplein', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
            { name: 'Amsterdam ,Anton de Komplein', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Florijn', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Tulastraat', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Annie Romeinplein', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Ganzenhoef', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam ,Geldershoofd', connecting: [] },
            { name: 'Diemen , Provincialeweg', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Diemen , Vinkenbrug', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Diemen , Stammerkamp', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Diemen , Diemerknoop', connecting: [{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '320', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Peter Martensstraat', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '360', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Pieter Oosterhuisstraat', connecting: [] },
            { name: 'Amsterdam, Lumièrestraat', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Diemerparklaan', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Vennepluimstraat', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
            
            
          ]
        },
        {
          name: "Richting Amsterdam Bijlmer Arena",
          stops: [
          { name: 'Amsterdam, Vennepluimstraat', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam, Diemerparklaan', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam, Lumièrestraat', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam, Pieter Oosterhuisstraat', connecting: [] },
          { name: 'Amsterdam, Peter Martensstraat', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '360', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Diemen , Diemerknoop', connecting: [{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '320', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Diemen , Stammerkamp', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Diemen , Vinkenbrug', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Diemen , Provincialeweg', connecting: [{num: '276', color: '#003262', textColor: '#ffffff'},{num: '330', color: '#FF0800', textColor: '#ffffff'},{num: '370', color: '#FF0800', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Geldershoofd', connecting: [] },
          { name: 'Amsterdam , Ganzenhoef', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '73', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Annie Romeinplein', connecting: [{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Tulastraat', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam , Florijn', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Anton de Komplein', connecting: [{num: '41', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'}] },
          { name: 'Amsterdam ,Foppingadreef', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '276', color: '#003262', textColor: '#ffffff'}] },
          { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        ]
        }
      ]
    },
    /// Route 81 Nederland Series //////////////////////////////////////////////////////////////////////////////////////////////
      {
    id: '81A',
      number: '81',
      type: 'bus',
      color: '#00B9E8',
      textColor: '#000000',
      title: 'Zutphen Station - Deventer Station',     
      operator: 'Arriva (RRReis)',
      concession: 'Achterhoek Rivierenland',
      lineType: 'Stadsbus',
      since: 'i.i.g 2004',
      predecessor: '51,24',
      image: 'Arriva/Lijn_81_Zutphen.jpg',
      caption: 'Lijn 81 op Zutphen Station',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '1x/uur',
        'Zaterdag': '1x/uur',
        'Zondag': '	1x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Deventer",
          stops: [
            { name: 'Zutphen , Station', connecting: [{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '83', color: '#00B9E8', textColor: '#000000'},{num: '84', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Zutphen , Rijkenhage', connecting: [{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '83', color: '#00B9E8', textColor: '#000000'},{num: '84', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Zutphen , \'s-Heerensteen', connecting: [{num: '87', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Zutphen , Coehoornsingel', connecting: [{num: '87', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Zutphen , Weg naar laren', connecting: [{num: '87', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Zutphen , v.d.Capellenlaan', connecting: [{num: '87', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Eefde , Rustoordlaan', connecting: [] },
            { name: 'Eefde , Het Spijk', connecting: [] },
            { name: 'Eefde , Het Hart', connecting: [] },
            { name: 'Eefde , Teenkweg', connecting: [] },
            { name: 'Eefde , Vredenhof', connecting: [] },
            { name: 'Gorssel , Quatre Bras', connecting: [] },
            { name: 'Gorssel , Kolkweg', connecting: [] },
            { name: 'Gorssel , Museum MORE', connecting: [] },
            { name: 'Gorssel , Bloemenkamp', connecting: [] },
            { name: 'Epse , De Pessink', connecting: [] },
            { name: 'Deventer , Zweedsestraat', connecting: [{num: '57', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Deventer , Gotlandstraat', connecting: [] },
            { name: 'Deventer , Industrieweg', connecting: [{num: '7', color: '#177245', textColor: '#ffffff'}] },
            { name: 'Deventer , Teugseplein', connecting: [] },
            { name: 'Deventer , Saxion Hogeschool', connecting: [{num: '1', color: '#00693E', textColor: '#ffffff'},{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Deventer , Station', connecting: [{num: '1', color: '#00693E', textColor: '#ffffff'},{num: '2', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
          ]
        },
        {
          name: "Richting Zutphen Station",
          stops: 
            [
            { name: 'Deventer , Station', connecting: [{num: '1', color: '#00693E', textColor: '#ffffff'},{num: '2', color: '#00693E', textColor: '#ffffff'},{num: '3', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Deventer , Saxion Hogeschool', connecting: [{num: '1', color: '#00693E', textColor: '#ffffff'},{num: '6', color: '#00693E', textColor: '#ffffff'},{num: '8', color: '#00693E', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Deventer , Teugseplein', connecting: [] },
            { name: 'Deventer , Industrieweg', connecting: [{num: '7', color: '#177245', textColor: '#ffffff'}] },
            { name: 'Deventer , Gotlandstraat', connecting: [] },
            { name: 'Deventer , Zweedsestraat', connecting: [{num: '57', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Epse , De Pessink', connecting: [] },
            { name: 'Gorssel , Bloemenkamp', connecting: [] },
            { name: 'Gorssel , Museum MORE', connecting: [] },
            { name: 'Gorssel , Kolkweg', connecting: [] },
            { name: 'Gorssel , Quatre Bras', connecting: [] },
            { name: 'Eefde , Vredenhof', connecting: [] },
            { name: 'Eefde , Teenkweg', connecting: [] },
            { name: 'Eefde , Het Hart', connecting: [] },
            { name: 'Eefde , Het Spijk', connecting: [] },
            { name: 'Eefde , Rustoordlaan', connecting: [] },
            { name: 'Zutphen , v.d.Capellenlaan', connecting: [{num: '87', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Zutphen , Weg naar laren', connecting: [{num: '87', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Zutphen , Coehoornsingel', connecting: [{num: '87', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Zutphen , \'s-Heerensteen', connecting: [{num: '87', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Zutphen , Berkelsingel', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '83', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Zutphen , Station', connecting: [{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '83', color: '#00B9E8', textColor: '#000000'},{num: '84', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            ]
        },
      ]
    },
    /// Route 83 Nederland Series //////////////////////////////////////////////////////////////////////////////////////////////
    {
    id: '83A',
      number: '83',
      type: 'bus',
      color: '#00B9E8',
      textColor: '#000000',
      title: 'Zutphen Station - Warnsveld',     
      operator: 'Arriva (RRReis)',
      concession: 'Achterhoek Rivierenland',
      lineType: 'Stadsbus',
      since: '10 December 2017',
      predecessor: '83',
      image: 'Arriva/Lijn_83_Zutphen.jpg',
      caption: 'Lijn 83 rijdt op Rijkenhage',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '1-2x/uur',
        'Zondag': '	1-2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Warnsveld",
          stops: [
            { name: 'Zutphen , Station', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '81', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Zutphen , Rijkenhage', connecting: [{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '81', color: '#00B9E8', textColor: '#000000'},{num: '84', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Zutphen , Watertoren', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '84', color: '#00B9E8', textColor: '#000000'},{num: '193', color: '#8DB600', textColor: '#000000'}] },
            { name: 'Zutphen , Oude Begraafplaats', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '193', color: '#8DB600', textColor: '#000000'}] },
            { name: 'Warnsveld , Lage Weide', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '651', color: '#00B9E8', textColor: '#000000'},{num: '682', color: '#00B9E8', textColor: '#000000'}] },
            { name: 'Warnsveld , Dreiumme', connecting: [] },
            { name: 'Warnsveld , Bieshorstlaan', connecting: [] },
            { name: 'Warnsveld , Havepad', connecting: [] },
            { name: 'Warnsveld , Kerkhofweg/GGNet', connecting: [] },
            { name: 'Warnsveld , Overkamp', connecting: [] },
          ]
        },
        {
          name: "Richting Zutphen Station",
          stops: 
            [
            { name: 'Warnsveld , Overkamp', connecting: [] },
            { name: 'Warnsveld , \'t Horseler', connecting: [] },
            { name: 'Warnsveld , Klooster', connecting: [] }, 
            { name: 'Warnsveld , Klooster', connecting: [] },
            { name: 'Warnsveld , Dreiumme', connecting: [] },
            { name: 'Warnsveld , Lage Weide', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '651', color: '#00B9E8', textColor: '#000000'},{num: '682', color: '#00B9E8', textColor: '#000000'}] },
            { name: 'Zutphen , Oude Begraafplaats', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '193', color: '#8DB600', textColor: '#000000'}] },
            { name: 'Zutphen , Watertoren', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '84', color: '#00B9E8', textColor: '#000000'},{num: '193', color: '#8DB600', textColor: '#000000'}] },
            { name: 'Zutphen , Berkelsingel', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '81', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Zutphen , Rijkenhage', connecting: [{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '81', color: '#00B9E8', textColor: '#000000'},{num: '84', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Zutphen , Station', connecting: [{num: '28', color: '#0000FF', textColor: '#000000'},{num: '58', color: '#00B9E8', textColor: '#000000'},{num: '81', color: '#00B9E8', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
      ]
    },
    {
    id: '83B',
      number: '83',
      type: 'bus',
      color: '#99FFFF',
      textColor: '#000000',
      title: 'Almelo Station - Vriezenveen Nieuwe Daarlerveenseweg',     
      operator: 'Arriva (RRReis)',
      concession: 'Twente',
      lineType: 'Stadsbus',
      since: '15 December 2019',
      predecessor: '83',
      image: 'Arriva/Lijn_83_Almelo.jpg',
      caption: '',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '1-2x/uur',
        'Avond': '1x/uur',
        'Zaterdag': '1x/uur',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Op 15 december 2024 werd de dienstregeling aangepast. Tijdens de schoolvakanties werd de frequentie van maandag t/m vrijdag overdag verlaagd naar 1x per uur, waarbij ook nog eens een gat van 1,5 uur in de dienstregeling valt. Daarentegen werden van maandag- t/m vrijdagavond twee extra ritten toegevoegd, zodat latere reismogelijkheden worden geboden (tot ca. 22:00).'
      ],
      directions: [
        {
          name: "Richting Vriezenveen Nieuwe Daarlerveenseweg",
          stops: [
            { name: 'Almelo, Station', connecting: [{num: '21', color: '#808000', textColor: '#000000'},{num: '22', color: '#007FFF', textColor: '#000000'},{num: '23', color: '#FF7F50', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Almelo, Boddenstraat/Centrum', connecting: [{num: '23', color: '#FF7F50', textColor: '#000000'},{num: '24', color: '#FF66CC', textColor: '#000000'},{num: '24', color: '#D4AF37', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Almelo, Kalverstraat', connecting: [] },
            { name: 'Almelo, Van Riemsdijkweg', connecting: [] },
            { name: 'Almelo, Beatrix de Rijkweg', connecting: [] },
            { name: 'Almelo, Van den Broekeweg', connecting: [] },
            { name: 'Almelo, Sluisweg', connecting: [] },
            { name: 'Almelo, Albardastraat', connecting: [] },
            { name: 'Almelo, Berkenlaan', connecting: [] },
            { name: 'Almelo, Peppellaan', connecting: [] }, 
            { name: 'Vriezenveen, De Merel', connecting: [] }, 
            { name: 'Vriezenveen, Westerweilandweg', connecting: [] }, 
            { name: 'Vriezenveen, De Nachtegaal', connecting: [] }, 
            { name: 'Vriezenveen, Petersburgstraat', connecting: [] }, 
            { name: 'Vriezenveen, Prinsenweg', connecting: [] }, 
            { name: 'Vriezenveen, Broekland', connecting: [] }, 
            { name: 'Vriezenveen, Nieuwe Daarlerveenseweg', connecting: [] }, 
          ]
        },
      ]
    },
    {
    id: '83C',
      number: '83',
      type: 'bus',
      color: '#FDEE00',
      textColor: '#000000',
      title: 'De Klomp Station Veenendaal-De Klomp - Veenendaal Station Centrum',     
      operator: 'Transdev (RRReis),Keolis(U-OV)',
      concession: 'Arnhem-Nijmegen-Foodvalley , Utrecht Buiten',
      lineType: 'Stadsbus',
      since: '11 December 2016',
      predecessor: '83',
      image: 'Arriva/Lijn_83_Almelo.jpg',
      caption: '',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': '2x/uur',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Per 28 juni 2026 ging de concessie Arnhem-Nijmegen-Foodvalley van start. Doordat lijn 85 het lijnnummer 4 kreeg, gingen de ritten voortaan gekoppeld aan lijn 4 rijden. De dienstregeling bleef hierbij ongewijzigd.'
      ],
      directions: [
        {
          name: "Richting Vriezenveen Nieuwe Daarlerveenseweg",
          stops: [
            { name: 'De Klomp Station Veenendaal-De Klomp', connecting: [{num: '3', color: '#BEBFC5', textColor: '#000000'},{num: '80', color: '#FDEE00', textColor: '#000000'},{num: '505', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Veenendaal, Kazemat', connecting: [] },
            { name: 'Veenendaal, Arsenaal', connecting: [] },
            { name: 'Veenendaal, Landjuweel', connecting: [] },
            { name: 'Veenendaal, Klovenier', connecting: [] },
            { name: 'Veenendaal, Gildetrom', connecting: [] },
            { name: 'Veenendaal, Munnikenweg', connecting: [] }, 
            { name: 'Veenendaal, Rossiniweg', connecting: [] }, 
            { name: 'Veenendaal, Händellaan', connecting: [] },
            { name: 'Veenendaal, Tuinfluiter', connecting: [] },
            { name: 'Veenendaal, Boekvink', connecting: [] },
            { name: 'Veenendaal, Station West', connecting: [{num: '505', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Veenendaal, Regge', connecting: [] },
            { name: 'Veenendaal,\'t Kofschip', connecting: [] },
            { name: 'Veenendaal, Rembrandtpark', connecting: [] },
            { name: 'Veenendaal, Jan Vermeerstraat', connecting: [] },
            { name: 'Veenendaal, Veenendaal, Station Centrum/Rembrandtlaan', connecting: [] },
            { name: 'Veenendaal, Veenendaal, Station Centrum/Kerkewijk', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '350', color: '#72A0C1', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Veenendaal, Station Centrum/Plein', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '87', color: '#FDEE00', textColor: '#000000'},{num: '380', color: '#72A0C1', textColor: '#000000'}] },
          ]
        },
      ]
    },
    {
    id: '83D',
      number: '83',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Rotterdam Keizerswaard - Kralingse Zoom',     
      operator: 'RET (Rotterdamse Elektrische Tram)',
      concession: '	Bus Rotterdam',
      lineType: 'Stadsbus',
      since: '14 December 2014',
      predecessor: '83',
      image: 'RET/Lijn_83_Rotterdam.jpg',
      caption: 'Lijn 83 op Rotterdam Kralingse Zoom',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': 'niet rijdt',
        'Zondag': '	2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Kralingse Zoom",
          stops: [
            { name: 'Rotterdam, Keizerswaard', connecting: [{num: '2', color: '#FF4F00', textColor: '#000000'},{num: '3', color: '#FF91AF', textColor: '#000000'},{num: '70', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Rotterdam, Grote Hagen', connecting: [{num: '16', color: '#BEBFC5', textColor: '#000000'},{num: '183', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Rotterdam, Prinsenplein', connecting: [{num: '16', color: '#BEBFC5', textColor: '#000000'},{num: '183', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Rotterdam, Koninginneweg', connecting: [{num: '183', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Rotterdam, Roelantweg', connecting: [{num: '140', color: '#BEBFC5', textColor: '#000000'},{num: '183', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Rotterdam, Brainpark', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '75', color: '#BEBFC5', textColor: '#000000'},{num: '140', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Rotterdam, Kralingse Zoom', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '75', color: '#BEBFC5', textColor: '#000000'},{num: '140', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
        {
          name: "Richting Keizerswaard",
          stops: 
            [
            { name: 'Rotterdam, Kralingse Zoom', connecting: [{num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '75', color: '#BEBFC5', textColor: '#000000'},{num: '140', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Rotterdam, Brainpark', connecting: [{num: '4', color: '#BEBFC5', textColor: '#000000'},{num: '75', color: '#BEBFC5', textColor: '#000000'},{num: '140', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Rotterdam, IJsselmondseplein', connecting: [{num: '140', color: '#BEBFC5', textColor: '#000000'},{num: '183', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Rotterdam, Van Hoochstratenweg', connecting: [{num: '140', color: '#BEBFC5', textColor: '#000000'},{num: '183', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Rotterdam, Prinsenplein', connecting: [{num: '16', color: '#BEBFC5', textColor: '#000000'},{num: '183', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Rotterdam, Grote Hagen', connecting: [{num: '16', color: '#BEBFC5', textColor: '#000000'},{num: '183', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Rotterdam, Keizerswaard', connecting: [{num: '2', color: '#FF4F00', textColor: '#000000'},{num: '3', color: '#FF91AF', textColor: '#000000'},{num: '70', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
      ]
    },
    /////////////////Route 149 Nederland Series///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
    id: '149A',
      number: '149',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Uithoorn Busstation - Amstelveen Busstation',     
      operator: 'Transdev (Connexxion)',
      concession: 'Amstelland-Meerland',
      lineType: 'Stadsbus',
      since: '3 Jaunari 2021',
      predecessor: '-',
      image: 'Transdev/Lijn_149_Amstelveen.jpg',
      caption: 'Lijn 149 bij Amstellveen Busstation.',
      frequencies: {
        'Spits': '1x/uur',
        'Dal': '1x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Op 3 januari 2021 ging lijn 149 weer een vaste uurdienst rijden doordeweeks overdag. In de avonden en in het weekend bleef AML Flex (en vanaf januari 2024 diens opvolger OV Op Maat) de bediening houden.'
      ],
      directions: [
        {
          name: "Richting Amstelveen Busst.",
          stops: [
            { name: 'Uithoorn, Busstation', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '123', color: '#FDEE00', textColor: '#000000'},{num: '147', color: '#03C03C', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Uithoorn, Alfons Ariënslaan', connecting: [{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '274', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Uithoorn, Guido Gezellelaan', connecting: [] },
            { name: 'Uithoorn, Anthony Fokkerweg', connecting: [] },
            { name: 'Uithoorn, Amsterdamseweg', connecting: [] },
            { name: 'Uithoorn, Molenlaan', connecting: [] },
            { name: 'Uithoorn, Cindu', connecting: [] },
            { name: 'Uithoorn, Rode Paal', connecting: [] },
            { name: 'Nes aan de Amstel, Amsteldijk 204', connecting: [] },
            { name: 'Nes aan de Amstel, Amsteldijk 202', connecting: [] },
            { name: 'Nes aan de Amstel, Amsteldijk 199', connecting: [] },
            { name: 'Nes aan de Amstel, Nessersluis', connecting: [] },
            { name: 'Nes aan de Amstel, Porseleinhuisje', connecting: [] },
            { name: 'Nes aan de Amstel, Kerklaan', connecting: [] },
            { name: 'Nes aan de Amstel, Rooms-Katholieke Kerk', connecting: [] },
            { name: 'Nes aan de Amstel, Amsteldijk 128', connecting: [] },
            { name: 'Nes aan de Amstel, Parelmolen', connecting: [] },
            { name: 'Nes aan de Amstel, Nesserlaan', connecting: [] },
            { name: 'Nes aan de Amstel, De Zwarte Kat', connecting: [] },
            { name: 'Amstelveen, Ziekenhuis Amstelland Hoofdingang', connecting: [] },
            { name: 'Amstelveen, Ouderkerkerlaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'},{num: '25', color: '#FF0800', textColor: '#ffffff  '},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amstelveen, Binenhof', connecting: [{num: '171', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '199', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amstelveen, Busstation', connecting: [{num: '171', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '178', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
      ]
    },

    //////////////// Route 161 Nederland Series /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
    id: '161A',
      number: '161',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Hoofddorp Station - Zwanenburg',     
      operator: 'Transdev (Connexxion)',
      concession: 'Amstelland-Meerland',
      lineType: 'Stadsbus',
      since: '3 Jaunari 2021',
      predecessor: '161,162',
      image: 'Transdev/Lijn_161_Hoofddorp.jpg',
      caption: 'Lijn 161 op Hoofddorp Station.',
      frequencies: {
        'Spits': '1x/uur',
        'Dal': '1x/uur',
        'Avond': 'niet rijdt',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Op 3 januari 2021 ging lijn 149 weer een vaste uurdienst rijden doordeweeks overdag. In de avonden en in het weekend bleef AML Flex (en vanaf januari 2024 diens opvolger OV Op Maat) de bediening houden.'
      ],
      directions: [
        {
          name: "Richting Zwanenburg",
          stops: [
              { name: 'Hoofddorp, Station', connecting: [{num: '160', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '163', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
              { name: 'Hoofddorp, Nieuweweg', connecting: [{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '169', color: '#BEBFC5', textColor: '#000000'},{num: '401', color: '#BEBFC5', textColor: '#000000'}] },
              { name: 'Hoofddorp, Centrum', connecting: [{num: '160', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '169', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
              { name: 'Hoofddorp, Wallenbergstraat', connecting: [] },
              { name: 'Hoofddorp, Wilsonstraat', connecting: [] },
              { name: 'Hoofddorp, Kaj Munkweg', connecting: [] },
              { name: 'Hoofddorp, Oranjestraat', connecting: [] },
              { name: 'Hoofddorp, De Meerstede', connecting: [] },
              { name: 'Hoofddorp, Stationsweg', connecting: [] },
              { name: 'Hoofddorp, Beemsterstraat', connecting: [] },
              { name: 'Hoofddorp, Wijkermeerstraat', connecting: [] },
              { name: 'Hoofddorp, Cornelia\'s Hoeve', connecting: [] },
              { name: 'Hoofddorp, Begraafplaats Wilgenhof', connecting: [] },
              { name: 'Lijnden, Hoofdweg 271', connecting: [] },
              { name: 'Lijnden, Hoofdweg 199', connecting: [] },
              { name: 'Lijnden, Lijnden', connecting: [] },
              { name: 'Boesingheliede, IJweg', connecting: [] },
              { name: 'Zwanenburg, De Olm', connecting: [] },
              { name: 'Zwanenburg, Wilgenlaan', connecting: [] },
              { name: 'Halfweg, Oranje Nassaustraat', connecting: [{num: '80', color: '#FFBF00', textColor: '#000000'},{num: '680', color: '#FFBF00', textColor: '#000000'}] }, 
              { name: 'Halfweg, Station Halfweg-Zwanenburg', connecting: [{num: '80', color: '#FFBF00', textColor: '#000000'},{num: '680', color: '#FFBF00', textColor: '#000000'}] },
              { name: 'Zwanenburg, Kinheim', connecting: [{num: '680', color: '#FFBF00', textColor: '#000000'}] },     
            ]
        },
        {
          name: "Richting Hoofddorp Station",
          stops: [
            { name: 'Zwanenburg, Kinheim', connecting: [{num: '680', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Zwanenburg, Banne', connecting: [] },  
            { name: 'Zwanenburg, Seevank', connecting: [] }, 
            { name: 'Halfweg, Station Halfweg-Zwanenburg', connecting: [{num: '80', color: '#FFBF00', textColor: '#000000'},{num: '680', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Halfweg, Oranje Nassaustraat', connecting: [{num: '80', color: '#FFBF00', textColor: '#000000'},{num: '680', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Zwanenburg, Wilgenlaan', connecting: [] },
            { name: 'Zwanenburg, De Olm', connecting: [] },
            { name: 'Boesingheliede, IJweg', connecting: [] },
            { name: 'Lijnden, Lijnden', connecting: [] },
            { name: 'Lijnden, Hoofdweg 199', connecting: [] },
            { name: 'Lijnden, Hoofdweg 271', connecting: [] },
            { name: 'Hoofddorp, Begraafplaats Wilgenhof', connecting: [] },
            { name: 'Hoofddorp, Cornelia\'s Hoeve', connecting: [] },
            { name: 'Hoofddorp, Wijkermeerstraat', connecting: [] },
            { name: 'Hoofddorp, Beemsterstraat', connecting: [] },
            { name: 'Hoofddorp, Stationsweg', connecting: [] },
            { name: 'Hoofddorp, De Meerstede', connecting: [] },
            { name: 'Hoofddorp, Oranjestraat', connecting: [] },
            { name: 'Hoofddorp, Kaj Munkweg', connecting: [] },
            { name: 'Hoofddorp, Wilsonstraat', connecting: [] },
            { name: 'Hoofddorp, Wallenbergstraat', connecting: [] },
            { name: 'Hoofddorp, Centrum', connecting: [{num: '160', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '169', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Hoofddorp, Nieuweweg', connecting: [{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '169', color: '#BEBFC5', textColor: '#000000'},{num: '401', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Hoofddorp, Station', connecting: [{num: '160', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '163', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
      ]
    },

//////////////// Route 162 Nederland Series /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
    id: '162A',
      number: '162',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Hoofddorp Station - Lisse Centrum',     
      operator: 'Transdev (Connexxion)',
      concession: 'Amstelland-Meerland',
      lineType: 'Stadsbus',
      since: '10 December 2017',
      predecessor: '162',
      image: 'Transdev/Lijn_162_Hoofddorp.jpg',
      caption: 'Lijn 162 op Hoofddorp Station.',
      frequencies: {
        'Spits': '1x/uur',
        'Dal': '1x/uur',
        'Avond': '0-1x/uur',
        'Zaterdag': '0-1x/uur',
        'Zondag': '0-1x/uur'
      },
      updates: [
        'Op 14 december 2025 werd in Hoofddorp de halte De President hernoemd tot Calatravabrug.'
      ],
      directions: [
        {
          name: "Richting Lisse Centrum",
          stops: [
              { name: 'Hoofddorp, Station', connecting: [{num: '160', color: '#BEBFC5', textColor: '#000000'},{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '163', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
              { name: 'Hoofddorp, Nieuweweg', connecting: [{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '169', color: '#BEBFC5', textColor: '#000000'},{num: '401', color: '#BEBFC5', textColor: '#000000'}] },
              { name: 'Hoofddorp, Centrum', connecting: [{num: '160', color: '#BEBFC5', textColor: '#000000'},{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '169', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
              { name: 'Hoofddorp, Hoofdweg/Molen', connecting: [{num: '169', color: '#BEBFC5', textColor: '#000000'}] },
              { name: 'Hoofddorp, Jadelaan', connecting: [] },
              { name: 'Hoofddorp, Calatravabrug', connecting: [{num: '343', color: '#FFBF00', textColor: '#000000'}] }, 
              { name: 'Hoofddorp, Crematorium', connecting: [] },       
              { name: 'Nieuw-Vennep, Hoofdweg 1194', connecting: [] }, 
              { name: 'Nieuw-Vennep, Noorderdreef', connecting: [] },  
              { name: 'Nieuw-Vennep, Lucas Bolsstraat', connecting: [] },
              { name: 'Nieuw-Vennep, Raiffeisenstraat', connecting: [] },
              { name: 'Nieuw-Vennep, Westerkim', connecting: [] },
              { name: 'Nieuw-Vennep, Zuiderdreef', connecting: [{num: '22', color: '#03C03C', textColor: '#000000'},{num: '57', color: '#03C03C', textColor: '#000000'}] },
              { name: 'Nieuw-Vennep, Oosterdreef', connecting: [] },
              { name: 'Nieuw-Vennep, Station', connecting: [{num: '57', color: '#03C03C', textColor: '#000000'},{num: '164', color: '#BEBFC5', textColor: '#000000'}] },
              { name: 'Nieuw-Vennep, Pondweg', connecting: [{num: '164', color: '#BEBFC5', textColor: '#000000'}] },
              { name: 'Nieuw-Vennep, Getsewoud-Zuid/N207', connecting: [{num: '361', color: '#00B9E8', textColor: '#000000'}] },
              { name: 'Nieuw-Vennep, IJweg 1635', connecting: [] },
              { name: 'Lisserbroek, Bruidsbloemstraat', connecting: [] },
              { name: 'Lisserbroek, Kruisbaak', connecting: [] },
              { name: 'Lisse, Narcissenstraat', connecting: [] },
              { name: 'Lisse, Centrum', connecting: [{num: '50', color: '#03C03C', textColor: '#000000'},{num: '57', color: '#03C03C', textColor: '#000000'},{num: '250', color: '#03C03C', textColor: '#000000'},{num: '+', color: '#6c757d'}] }, 
            ]
        },
      ]
    },
//////////////// Route 163 Nederland Series /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
    id: '163A',
      number: '163',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Hoofddorp Station - Rijsenhout Kleine Poellaan',     
      operator: 'Transdev (Connexxion)',
      concession: 'Amstelland-Meerland',
      lineType: 'Stadsbus',
      since: '3 Januari 2021',
      predecessor: '663',
      image: 'Transdev/Lijn_163_Hoofddorp.jpg',
      caption: 'Lijn 163 op Hoofddorp Station.',
      frequencies: {
        'Spits': '1-2x/uur',
        'Dal': '1x/uur',
        'Avond': 'rijdt niet',
        'Zaterdag': 'rijdt niet',
        'Zondag': 'rijdt niet'
      },
      updates: [
        'Op 3 januari 2021 werd de bediening van lijn 663 nog verder uitgebreid, met een vernummering naar lijn 163 als gevolg. Hierdoor ging deze lijn doordeweeks overdag weer een vaste uurdienst rijden.'
      ],
      directions: [
        {
          name: "Richting Rijsenhout Kleine Poellan",
          stops: [
              { name: 'Hoofddorp, Station', connecting: [{num: '160', color: '#BEBFC5', textColor: '#000000'},{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
              { name: 'Rijsenhout, Rijshornplein', connecting: [] },
              { name: 'Rijsenhout, Kleine Poellaan', connecting: [] },
            ]
        },
        {
          name: "Richting Hoofddorp Centrum",
          stops: [
              { name: 'Rijsenhout, Kleine Poellaan', connecting: [] },
              { name: 'Rijsenhout, Blauwe Beugel', connecting: [] },
              { name: 'Rijsenhout, Leimuiderdijk 42', connecting: [] },
              { name: 'Rijsenhout, Centrum Schouwstraat', connecting: [] },
              { name: 'Rijsenhout, Zeilhof', connecting: [] },
              { name: 'Rijsenhout, Drakenstraat', connecting: [] },
              { name: 'Rijsenhout, Bennebroekerweg', connecting: [] }, 
              { name: 'Hoofddorp, Station', connecting: [{num: '160', color: '#BEBFC5', textColor: '#000000'},{num: '161', color: '#BEBFC5', textColor: '#000000'},{num: '162', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },   
            ]
        },
      ]
    },
    //////////////// Route 171 Nederland Series /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{
      id: '171A',
      number: '171',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Aalsmeer Busstation - Amsterdam Bijlmer Arena',     
      operator: 'Transdev (Connexxion)',
      concession: 'Amstelland-Meerland',
      lineType: 'Stadsbus',
      since: '12 December 2021',
      predecessor: '358,357,171',
      image: 'Transdev/Lijn_171_Amsterdam.jpg',
      caption: 'Lijn 171 rijdt bij Legmeerdijk, Aalsmeer.',
      frequencies: {
        'Spits': '2-3x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '0-1x/uur (naar Amstelveen busst.)',
        'Zondag': '0-1x/uur (naar Amstelveen busst.)'  
      },
      updates: [
        'Op een onbekend moment, vermoedelijk rond juli 2025, werd de route in Aalsmeer gewijzigd. Hierbij werden de haltes Middenweg en Aalsmeerderweg 142 vervangen door een nieuwe halte Middenweg en de halte Ecuadorlaan.'
      ],
      directions: [
        {
          name: "Richting Amsterdam Bijlmer Arena",
          stops: [
            { name: 'Aalsmeer Busstation', connecting: [{num: '340', color: '#FF0800', textColor: '#ffffff'}, {num: '357', color: '#FF8C00', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: 'Aalsmeer, Mendelstraat', connecting: [] },
            { name: 'Aalsmeer, P.F. von Sieboldlaan', connecting: [] },
            { name: 'Aalsmeer, FloraHolland Noord', connecting: [] },
            { name: 'Aalsmeer, Middenweg', connecting: [] },
            { name: 'Aalsmeer, Ecuadorlaan', connecting: [] },
            { name: 'Aalsmeer, Machineweg', connecting: [] },
            { name: 'Aalsmeer, Julianalaan', connecting: [] },
            { name: 'Aalsmeer, Kerkweg', connecting: [] },
            { name: 'Aalsmeer, Tuincentrum Het Oosten', connecting: [] },
            { name: 'Aalsmeer, Aalsmeerderweg 481', connecting: [] },
            { name: 'Amstelveen, Schinkeldijkje', connecting: [] },
            { name: 'Amstelveen, Zwarte Pad', connecting: [] },
            { name: 'Amstelveen, Pastoor Brouwerslaan', connecting: [] },
            { name: 'Amstelveen, Maalderij', connecting: [] },
            { name: 'Amstelveen, Handweg', connecting: [] },
            { name: 'Amstelveen, Lindenlaan', connecting: [] },
            { name: 'Amstelveen, Keizer Karelplein', connecting: [{num: '174', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amstelveen, Busstation', connecting: [{num: '149', color: '#BEBFC5', textColor: '#000000'}, {num: '174', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amstelveen, Binnenhof', connecting: [{num: '149', color: '#BEBFC5', textColor: '#000000'}, {num: '174', color: '#BEBFC5', textColor: '#000000'}, {num: '199', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amstelveen, Stadstuinen', connecting: [{num: '75', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amstelveen, Oranjebaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'}, {num: '5', color: '#9966CC', textColor: '#ffffff'}, {num: '25', color: '#FF0800', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Amstelveen, Bankrashof', connecting: [] },
            { name: 'Ouderkerk aan de Amstel, Ouderkerk West', connecting: [] },
            { name: 'Ouderkerk aan de Amstel, Ouderkerk Oost', connecting: [] },
            { name: 'Ouderkerk aan de Amstel, Hoofdenburg', connecting: [] },
            { name: 'Amsterdam, Ventweg', connecting: [] },
            { name: 'Amsterdam, De Entree', connecting: [] },
            { name: 'Amsterdam, Holterbergweg', connecting: [{num: '255', color: '#8A2BE2', textColor: '#ffffff'}, {num: '300', color: '#8A2BE2', textColor: '#ffffff'}, {num: '356', color: '#8A2BE2', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'}, {num: '49', color: '#BEBFC5', textColor: '#000000'}, {num: '66', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] }
          ]
        },
        {
          name: "Richting Aalsmeer Busstation",
          stops: [
            { name: 'Amsterdam, Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'}, {num: '49', color: '#BEBFC5', textColor: '#000000'}, {num: '66', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam, Holterbergweg', connecting: [{num: '255', color: '#8A2BE2', textColor: '#ffffff'}, {num: '300', color: '#8A2BE2', textColor: '#ffffff'}, {num: '356', color: '#8A2BE2', textColor: '#ffffff'}] },
            { name: 'Amsterdam, De Entree', connecting: [] },
            { name: 'Amsterdam, Ventweg', connecting: [] },
            { name: 'Ouderkerk aan de Amstel, Hoofdenburg', connecting: [] },
            { name: 'Ouderkerk aan de Amstel, Ouderkerk Oost', connecting: [] },
            { name: 'Ouderkerk aan de Amstel, Ouderkerk West', connecting: [] },
            { name: 'Amstelveen, Bankrashof', connecting: [] },
            { name: 'Amstelveen, Oranjebaan', connecting: [{num: '6', color: '#BEBFC5', textColor: '#000000'}, {num: '5', color: '#9966CC', textColor: '#ffffff'}, {num: '25', color: '#FF0800', textColor: '#ffffff'}, {num: '+', color: '#6c757d'}] },
            { name: 'Amstelveen, Stadstuinen', connecting: [{ num: '75', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen, Binnenhof', connecting: [{num: '149', color: '#BEBFC5', textColor: '#000000'}, {num: '174', color: '#BEBFC5', textColor: '#000000'}, {num: '199', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amstelveen, Busstation', connecting: [{num: '149', color: '#BEBFC5', textColor: '#000000'}, {num: '174', color: '#BEBFC5', textColor: '#000000'}, {num: '178', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amstelveen, Keizer Karelplein', connecting: [{num: '174', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amstelveen, Lindenlaan', connecting: [] },
            { name: 'Amstelveen, Maalderij', connecting: [] },
            { name: 'Amstelveen, Pastoor Brouwerslaan', connecting: [] },
            { name: 'Amstelveen, Zwarte Pad', connecting: [] },
            { name: 'Amstelveen, Schinkeldijkje', connecting: [] },
            { name: 'Aalsmeer, Aalsmeerderweg 481', connecting: [] },
            { name: 'Aalsmeer, Tuincentrum Het Oosten', connecting: [] },
            { name: 'Aalsmeer, Kerkweg', connecting: [] },
            { name: 'Aalsmeer, Julianalaan', connecting: [] },
            { name: 'Aalsmeer, Machineweg', connecting: [] },
            { name: 'Aalsmeer, Ecuadorlaan', connecting: [] },
            { name: 'Aalsmeer, Middenweg', connecting: [] },
            { name: 'Aalsmeer, FloraHolland Noord', connecting: [] },
            { name: 'Aalsmeer, P.F. von Sieboldlaan', connecting: [] },
            { name: 'Aalsmeer, Mendelstraat', connecting: [] },
            { name: 'Aalsmeer Busstation', connecting: [{num: '340', color: '#FF0800', textColor: '#ffffff'}, {num: '357', color: '#FF8C00', textColor: '#000000'}, {num: '+', color: '#6c757d'}] }
          ]
        }
      ]
    },

    ////// Route 178 Nederlands Series ///////////////////////////////////////////////////////////////////////////////////////////////
    {
    id: '178A',
      number: '178',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amstelveen Poortwachter - Amsterdam Station Zuid',     
      operator: 'Transdev (Connexxion)',
      concession: 'Amstelland Meerland',
      lineType: 'Stadsbus',
      since: '21 Juli 2024',
      predecessor: '274,347,348,358',
      image: 'Transdev/Lijn_178_Amsterdam.jpg',
      caption: 'Lijn 178 op Station Zuid Amsterdam',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '2x/uur',
        'Zaterdag': '2-4x/uur',
        'Zondag': '	2x/uur'
      },
      updates: [
        'Op 21 juli 2024 werd tram 25 verlengd van Amstelveen Westwijk naar Uithoorn. Hierdoor werd van omliggende buslijnen de routes aangepast, de frequenties aangepast of werden lijnen opgeheven. Lijn 178 werd ingevoerd tussen Amsterdam Zuid en Amstelveen Poortwachter ter vervanging van de opgeheven lijnen 347, 348 en 358. Langs de route van lijn 178 werden de haltes Koenenkade, Heemraadschapslaan, Doctor Plesmansingel en Startbaan opnieuw in gebruik genomen.',
        'Vanaf 1 november 2026 werd in Amsterdam richting Station Zuid niet meer via de De Boelelaan en Beethovenstraat gereden, maar via de Parnassusweg. Hier werd in deze richting de halte Station Zuid in gebruik genomen, die dicht bij de nieuwe ingang van Station Zuid via de Brittenpassage ligt. Het bestaande busstation kreeg de naam Station Zuid WTC-zijde.'
      ],
      directions: [
        {
          name: "Richting Amsterdam Station Zuid",
          stops: [
            { name: 'Amstelveen , Poortwachter ', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amstelveen , Grote beer ', connecting: [] },
            { name: 'Amstelveen , Startbaan ', connecting: [] },
            { name: 'Amstelveen , Sportlaan ', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen , Doctor Plesmansingel ', connecting: [] },
            { name: 'Amstelveen , Hueseplein ', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen , Busstation ', connecting: [{num: '149', color: '#BEBFC5', textColor: '#000000'},{num: '171', color: '#BEBFC5', textColor: '#000000'},{num: '174', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amstelveen , Heemraadschapslaan ', connecting: [{num: '186', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amstelveen , Kruiskerk', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen , Graaf Florislaan', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam  , Kalfjeslaan', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam  , Amsterdamse Bos', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam  , Koenenkade', connecting: [] },
            { name: 'Amsterdam  , VUmc Hoofdingang', connecting: [{num: '221', color: '#FF91AF', textColor: '#ffffff'},{num: '244', color: '#FFBF00', textColor: '#000000'},{num: '321', color: '#FFBF00', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam  , Boelelaan/VU', connecting: [{num: '244', color: '#FFBF00', textColor: '#000000'},{num: '346', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Amsterdam  , Amsterdam Station Zuid', connecting: [{num: '244', color: '#FFBF00', textColor: '#000000'},{num: '346', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Amsterdam, Station Zuid WTC-zijde ', connecting: [{num: '15', color: '#BEBFC5', textColor: '#000000'}, {num: '62', color: '#BEBFC5', textColor: '#000000'},{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
          ]
        },
        {
          name: "Richting Amstelveen Poortwachter",
          stops: 
            [
            { name: 'Amsterdam, Station Zuid WTC-zijde', connecting: [{num: '15', color: '#BEBFC5', textColor: '#000000'}, {num: '62', color: '#BEBFC5', textColor: '#000000'}, {num: '221', color: '#FF91AF', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam, Amsterdam Station Zuid', connecting: [{num: '244', color: '#FFBF00', textColor: '#000000'}, {num: '346', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Amsterdam, Boelelaan/VU', connecting: [{num: '244', color: '#FFBF00', textColor: '#000000'}, {num: '346', color: '#FFBF00', textColor: '#000000'}] },
            { name: 'Amsterdam, VUmc Hoofdingang', connecting: [{num: '221', color: '#FF91AF', textColor: '#ffffff'}, {num: '244', color: '#FFBF00', textColor: '#000000'}, {num: '321', color: '#FFBF00', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam, Koenenkade', connecting: [] },
            { name: 'Amsterdam, Amsterdamse Bos', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amsterdam, Kalfjeslaan', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen, Graaf Florislaan', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen, Kruiskerk', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen, Heemraadschapslaan', connecting: [{num: '186', color: '#0000FF', textColor: '#ffffff'}] },
            { name: 'Amstelveen, Busstation', connecting: [{num: '149', color: '#BEBFC5', textColor: '#000000'}, {num: '171', color: '#BEBFC5', textColor: '#000000'}, {num: '174', color: '#BEBFC5', textColor: '#000000'}, {num: '+', color: '#6c757d'}] },
            { name: 'Amstelveen, Hueseplein', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen, Doctor Plesmansingel', connecting: [] },
            { name: 'Amstelveen, Sportlaan', connecting: [{num: '357', color: '#FF8C00', textColor: '#000000'}] },
            { name: 'Amstelveen, Startbaan', connecting: [] },
            { name: 'Amstelveen , Poortwachter ', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'}] },
            ]
        },
      ]
    },

    {
      id: '233A',
      number: '233',
      type: 'Stadsbus',
      color: '#BEBFC5',
      textcolor: '#ffffff',
      title: 'Amsterdam Sloterdijk - Westpoort',
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Bus',
      since: '11 oktober 2021',
      predecessor: '-',
      image: 'GVB/Lijn_233_Amsterdam.jpg',
      caption: 'Buslijn 233 op Station Sloterdijk',
      frequencies: {
        'Spits': '2x/uur',
        'Dal': '2x/uur',
        'Avond': '2x/uur',
        'Zaterdag': 'niet rijdt',
        'Zondag': 'niet rijdt'
      },
      updates: [
        'Met ingang van 15 december 2024 gingen voortaan ook \'s ochtends de ritten richting station Sloterdijk en \'s middags de ritten richting Westpoort via de Hornweg rijden en de halte Maltaweg bedienen.',
      ],
      stops: [
        { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
        { name: 'Maltaweg', connecting: [] },
        { name: 'Siciliëweg', connecting: [] },
      ]
    },
    {
    id: '360A',
      number: '360',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Bijlmer Arena - IJburg Strandeiland',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '15 December 2024',
      predecessor: '-',
      image: 'GVB/Lijn_360_Amsterdam.jpg',
      caption: 'Buslijn 360 bij Amsterdam Bijlmer Arena',
      frequencies: {
        'Spits': '4x/uur',
        'Dal': '4x/uur',
        'Avond': '4x/uur',
        'Zaterdag': '4x/uur',
        'Zondag': '4x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting IJburg Strandeiland",
          stops: [
            { name: 'Amsterdam ,Bijlmer Arena', connecting: [{num: '44', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'},{num: '66', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Gaasperplas', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Diemen , Diemerknoop', connecting: [{num: '221', color: '#FF91AF', textColor: '#000000'},{num: '320', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam, Pieter Oosterhuisstraat', connecting: [{num: '47', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Centrumeiland', connecting: [{num: '49', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Buiteneilandlaan', connecting: [{num: '26', color: '#BEBFC5', textColor: '#000000'},{num: '49', color: '#BEBFC5', textColor: '#000000'}] },
          ]
        },
      ]
    },
    {
    id: '369A',
      number: '369',
      type: 'bus',
      color: '#BEBFC5',
      textColor: '#000000',
      title: 'Amsterdam Station Sloterdijk - Amsterdam Schiphol Airport',     
      operator: 'GVB (Randstadnet)',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: 'Januari 3 2021',
      predecessor: '69',
      image: 'GVB/Lijn_369_Amsterdam.jpg',
      caption: 'Buslijn 369 rijdt bij Schiphol',
      frequencies: {
        'Spits': '4-8x/uur',
        'Dal': '4-8x/uur',
        'Avond': '3-8x/uur',
        'Zaterdag': '3-6x/uur',
        'Zondag': '3-6x/uur'
      },
      updates: [
        'Met ingang van 4 juli 2026 werd de dienstregeling tijdens de zomervakantie aangepast: in het weekend werd voortaan over het gehele traject 3x/uur of 4x/uur gereden.'
      ],
      directions: [
        {
          name: "Richting Schiphol Airport",
          stops: [
            { name: 'Amsterdam , Station Sloterdijk ', connecting: [{num: '22', color: '#BEBFC5', textColor: '#000000'}, {num: '36', color: '#BEBFC5', textColor: '#000000'},{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Plein 40-45 ', connecting: [{num: '21', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam , Burgemeester Röellstraat', connecting: [{num: '7', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Ookmeerweg', connecting: [{num: '61', color: '#BEBFC5', textColor: '#000000'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Osdorpplein Oost', connecting: [{num: '63', color: '#BEBFC5', textColor: '#000000'},{num: '71', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Louis Davidsstraat', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'},] },
            { name: 'Amsterdam, Antwerpenbaan', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Antwerpenbaan', connecting: [{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Belgiëplein', connecting: [{num: '195', color: '#0000FF', textColor: '#ffffff'},{num: '247', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Anderlechtlaan', connecting: [{num: '218', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam, Knooppunt Schiphol Nrd', connecting: [{num: '180', color: '#0000FF', textColor: '#ffffff'},{num: '181', color: '#0000FF', textColor: '#ffffff'},{num: '186', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam, Schiphol Airport/Plaza', connecting: [{num: '180', color: '#0000FF', textColor: '#ffffff'},{num: '181', color: '#0000FF', textColor: '#ffffff'},{num: '185', color: '#0000FF', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
          ]
        },
      ]
    },
    {
    id: '464A',
      number: '464',
      type: 'bus',
      color: '#7BA05B',
      textColor: '#000000',
      title: 'Amsterdam Groot Gelderlandplein - Vivaldi',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '28 Febuari 2022',
      predecessor: '-',
      image: 'GVB/Lijn_464_Amsterdam.jpg',
      caption: 'Buslijn 464 op Amsterdam ',
      frequencies: {
        'Spits': 'rijdt niet',
        'Dal': '2-3x/uur',
        'Avond': 'rijdt niet',
        'Zaterdag': '2x/uur',
        'Zondag': '	2x/uur'
      },
      updates: [
        ''
      ],
      directions: [
        {
          name: "Richting Vivaldi",
          stops: [
            { name: 'Amsterdam , Gelderlandplein Noordoost', connecting: [{num: '461', color: '#000000', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Weerdestein', connecting: [] },
            { name: 'Amsterdam , Barbara Strozzilaan', connecting: [] },
            { name: 'Amsterdam , Domenico Scarlattilaan', connecting: [] },
            { name: 'Amsterdam , Antonio Vivaldistraat', connecting: [] },
          ]
        },
        {
          name: "Richting Groot Gelderlandplein",
          stops: [
            { name: 'Amsterdam , Antonio Vivaldistraat', connecting: [] },
            { name: 'Amsterdam , Gelderlandplein Noordoost', connecting: [{num: '461', color: '#000000', textColor: '#ffffff'}] },
          ]
        },
      ]
    },
    {
    id: '463A',
      number: '463',
      type: 'bus',
      color: '#FE6F5E',
      textColor: '#000000',
      title: 'Amsterdam Groot Gelderlandplein - Bolestein',     
      operator: 'GVB',
      concession: 'Stadsvervoer Amsterdam',
      lineType: 'Stadsbus',
      since: '18 December 2015',
      predecessor: '-',
      image: 'GVB/Lijn_463_Amsterdam.jpg',
      caption: 'Buslijn 463 op Gelderlandplein Oost ',
      frequencies: {
        'Spits': 'rijdt niet',
        'Dal': '2x/uur',
        'Avond': 'rijdt niet',
        'Zaterdag': '2x/uur',
        'Zondag': '	2x/uur'
      },
      updates: [
        'Op 28 februari 2022 werden de haltes Gijsbrecht van Aemstelpark en Nieuwerhoek toegevoegd aan de route van deze buslijn. In het weekend verviel de laatste rit en ontstonden er twee gaten van een uur in de dienstregeling.'
      ],
      directions: [
        {
          name: "Richting Bolestein",
          stops: [
            { name: 'Amsterdam , Gelderlandplein Oost', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Gijsbrecht van Aemstelpark', connecting: [] },
            { name: 'Amsterdam , Kastelenstraat ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Backershagen ', connecting: [{num: '62', color: '#BEBFC5', textColor: '#000000'}] },
            { name: 'Amsterdam , Van Boshuizenstraat', connecting: [{num: '25', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Noordhollandstraat', connecting: [] },
            { name: 'Amsterdam , Van der Boechorststraat ', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '6', color: '#BEBFC5', textColor: '#ffffff'},{num: '25', color: '#FF0800', textColor: '#ffffff'}] },
            { name: 'Amsterdam , Bolestein', connecting: [] },
            { name: 'Amsterdam , Nieuwerhoek', connecting: [] },
            { name: 'Amsterdam , Egelenburg', connecting: [] },
            { name: 'Amsterdam , Radboud', connecting: [] },
            { name: 'Amsterdam , Arent Janszoon Ernststraat', connecting: [{num: '5', color: '#9966CC', textColor: '#ffffff'},{num: '6', color: '#BEBFC5', textColor: '#ffffff'},{num: '25', color: '#FF0800', textColor: '#ffffff'},{num: '+', color: '#6c757d'}] },
            { name: 'Amsterdam , Gelderlandplein Noordoost', connecting: [{num: '461', color: '#000000', textColor: '#ffffff'}, {num: '464', color: '#7BA05B', textColor: '#000000'}] },
          ]
        }
      ]
    },

    // ==========================================
    // ---> PASTE FUTURE ROUTES RIGHT HERE <---
    // ==========================================

  ] // <--- DO NOT DELETE THIS CLOSING BRACKET
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderHomeLists();
});

// Navigation Controller
function showView(viewId) {
  document.querySelectorAll('.view-content').forEach(view => view.classList.add('hidden'));
  document.getElementById(viewId).classList.remove('hidden');
  window.scrollTo(0, 0);
}

// Render Homepage Search Lists
function renderHomeLists() {
  const routesContainer = document.getElementById('routes-list');
  const stationsContainer = document.getElementById('stations-list');

  // Render Routes
  routesContainer.innerHTML = appData.routes.map(r => `
    <div onclick="openRoute('${r.id}')" class="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100 hover:bg-emerald-50 cursor-pointer transition">
      <span class="route-badge" style="background-color: ${r.color};">
        <i class="fa-solid fa-bus text-xs mr-1.5"></i> ${r.number}
      </span>
      <span class="text-sm font-medium text-gray-800">${r.title}</span>
    </div>
  `).join('');

  // Extract all unique stations across single-direction and multi-direction routes
  const stationsMap = {};
  appData.routes.forEach(route => {
    const allStops = [];
    if (route.directions) {
      route.directions.forEach(d => allStops.push(...d.stops));
    } else if (route.stops) {
      allStops.push(...route.stops);
    }

    allStops.forEach(stop => {
      if (!stationsMap[stop.name]) {
        stationsMap[stop.name] = [];
      }
      if (!stationsMap[stop.name].some(r => r.id === route.id)) {
        stationsMap[stop.name].push(route);
      }
    });
  });

  stationsContainer.innerHTML = Object.keys(stationsMap).map(stationName => `
    <div onclick="openStation('${stationName}')" class="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 hover:bg-emerald-50 cursor-pointer transition">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-location-dot text-emerald-600 text-sm"></i>
        <span class="text-sm font-medium text-gray-800">${stationName}</span>
      </div>
      <div class="flex gap-1">
        ${stationsMap[stationName].map(r => `
          <span class="stop-connecting-badge" style="background-color: ${r.color}">${r.number}</span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Search Filters
function filterRoutes() {
  const query = document.getElementById('route-input').value.toLowerCase();
  const items = document.getElementById('routes-list').children;
  Array.from(items).forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? 'flex' : 'none';
  });
}

function filterStations() {
  const query = document.getElementById('station-input').value.toLowerCase();
  const items = document.getElementById('stations-list').children;
  Array.from(items).forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? 'flex' : 'none';
  });
}

// Open Route Detail Page
function openRoute(routeId) {
  const route = appData.routes.find(r => r.id === routeId);
  if (!route) return;

  // Header and Infobox
  const infoboxHeader = document.getElementById('infobox-header');
  infoboxHeader.style.backgroundColor = route.color;
  document.getElementById('infobox-title').innerText = `Lijn ${route.number}`;
  
  document.getElementById('infobox-operator').innerText = route.operator;
  document.getElementById('infobox-concession').innerText = route.concession;
  document.getElementById('infobox-type').innerText = route.lineType;
  document.getElementById('infobox-since').innerText = route.since;
  document.getElementById('infobox-predecessor').innerText = route.predecessor;

  // Frequencies Table
  const freqTable = document.getElementById('infobox-frequencies');
  freqTable.innerHTML = Object.entries(route.frequencies).map(([key, val]) => `
    <tr>
      <th class="py-1.5 px-3 font-semibold text-gray-700 bg-gray-50 w-2/5">${key}</th>
      <td class="py-1.5 px-3 text-gray-800">${val}</td>
    </tr>
  `).join('');

  // Image & Caption
  document.getElementById('infobox-img').src = route.image;
  document.getElementById('infobox-img-caption').innerText = route.caption;

  // Render Stops (Haltes) - Supports single stops list & multi-direction lists
  const stopsList = document.getElementById('route-stops-list');

  if (route.directions && route.directions.length > 0) {
    stopsList.innerHTML = route.directions.map(dir => `
      <div class="mb-6 last:mb-0">
        <h3 class="text-md font-bold text-slate-800 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-100 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-arrows-left-right text-emerald-600 text-xs"></i>
          ${dir.name}
        </h3>
        <div class="space-y-2 pl-2">
          ${dir.stops.map(stop => `
            <div class="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${route.color}"></span>
                <span class="text-gray-800 font-medium text-sm">${stop.name}</span>
              </div>
              <div class="flex items-center gap-1">
                ${stop.connecting.map(c => `
                  <span class="stop-connecting-badge" style="background-color: ${c.color}; color: ${c.textColor || '#ffffff'};">
                    ${c.num}
                  </span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  } else if (route.stops) {
    stopsList.innerHTML = route.stops.map(stop => `
      <div class="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${route.color}"></span>
          <span class="text-gray-800 font-medium text-sm">${stop.name}</span>
        </div>
        <div class="flex items-center gap-1">
          ${stop.connecting.map(c => `
            <span class="stop-connecting-badge" style="background-color: ${c.color}; color: ${c.textColor || '#ffffff'};">
              ${c.num}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // Updates List
  const updatesList = document.getElementById('route-updates-list');
  if (route.updates && route.updates.length > 0) {
    updatesList.innerHTML = route.updates.map(u => `<li>${u}</li>`).join('');
  } else {
    updatesList.innerHTML = '<li class="text-gray-500 italic">Geen recente updates bekend.</li>';
  }

  showView('route-detail-view');
}

// Open Station View
function openStation(stationName) {
  document.getElementById('station-detail-title').innerText = stationName;
  const linesContainer = document.getElementById('station-detail-lines');
  
  const matchingRoutes = appData.routes.filter(r => {
    if (r.directions) {
      return r.directions.some(d => d.stops.some(s => s.name === stationName));
    }
    return r.stops && r.stops.some(s => s.name === stationName);
  });
  
  linesContainer.innerHTML = matchingRoutes.map(r => `
    <div onclick="openRoute('${r.id}')" class="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
      <div class="flex items-center gap-3">
        <span class="route-badge" style="background-color: ${r.color}">Lijn ${r.number}</span>
        <span class="font-medium text-gray-800">${r.title}</span>
      </div>
      <i class="fa-solid fa-chevron-right text-gray-400 text-sm"></i>
    </div>
  `).join('');

  showView('station-detail-view');
}

// Global Header Search Bar Handler
function handleGlobalSearch(query) {
  const dropdown = document.getElementById('search-dropdown');
  const q = query.trim().toLowerCase();
  
  if (!q) {
    dropdown.classList.add('hidden');
    return;
  }

  const matchedRoutes = appData.routes.filter(r => 
    r.number.toLowerCase().includes(q) || r.title.toLowerCase().includes(q)
  );

  const matchedStations = [];
  appData.routes.forEach(r => {
    const allStops = [];
    if (r.directions) {
      r.directions.forEach(d => allStops.push(...d.stops));
    } else if (r.stops) {
      allStops.push(...r.stops);
    }

    allStops.forEach(s => {
      if (s.name.toLowerCase().includes(q) && !matchedStations.includes(s.name)) {
        matchedStations.push(s.name);
      }
    });
  });

  if (matchedRoutes.length === 0 && matchedStations.length === 0) {
    dropdown.innerHTML = `<div class="p-3 text-sm text-gray-500">Geen resultaten gevonden</div>`;
  } else {
    let html = '';
    if (matchedRoutes.length > 0) {
      html += `<div class="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase bg-gray-50">Routes</div>`;
      html += matchedRoutes.map(r => `
        <div onclick="openRoute('${r.id}'); document.getElementById('search-dropdown').classList.add('hidden');" class="px-4 py-2 hover:bg-emerald-50 cursor-pointer flex items-center justify-between">
          <span class="text-sm text-gray-800 font-medium">${r.title}</span>
          <span class="stop-connecting-badge" style="background-color: ${r.color}">${r.number}</span>
        </div>
      `).join('');
    }
    if (matchedStations.length > 0) {
      html += `<div class="px-3 py-1.5 text-xs font-bold text-gray-400 uppercase bg-gray-50">Stations & Haltes</div>`;
      html += matchedStations.map(s => `
        <div onclick="openStation('${s}'); document.getElementById('search-dropdown').classList.add('hidden');" class="px-4 py-2 hover:bg-emerald-50 cursor-pointer text-sm text-gray-800">
          <i class="fa-solid fa-location-dot text-emerald-600 mr-2"></i> ${s}
        </div>
      `).join('');
    }
    dropdown.innerHTML = html;
  }
  dropdown.classList.remove('hidden');
}