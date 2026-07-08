// Historical context, representative performers, songs, and streaming links for all drum instruments and patterns.
// Used to populate the educational info modals with Spotify and Apple Music URLs.

export const drumInfo =
  // Historical context, representative performers, songs, and streaming links for all drum instruments and patterns.
  // Used to populate the educational info modals with Spotify and Apple Music URLs.

  {
    conga: {
      name: 'Congas',
      origin: 'Cuba / Central African Roots',
      description:
        'The conga, also known as the tumbadora, is a tall, narrow, single-headed drum from Cuba. Developed by Afro-Cuban communities from Congolese drum designs, they are critical in salsa, rumba, Afro-Cuban jazz, and Latin rock. Historically played in groups of two or three, they form the rhythmic heartbeat of salsa ensembles.',
      performers: [
        { name: 'Giovanni Hidalgo', spotify: 'true', apple: 'true' },
        { name: 'Ray Barretto', spotify: 'true', apple: 'true' },
        { name: 'Mongo Santamaría', spotify: 'true', apple: 'true' },
        { name: 'Poncho Sanchez', spotify: 'true', apple: 'true' }
      ],
      songs: [
        { name: 'Watermelon Man', artist: 'Mongo Santamaría', spotify: 'true', apple: 'true' },
        { name: 'Indestructible', artist: 'Ray Barretto', spotify: 'true', apple: 'true' }
      ],
      effectsSongs: [
        {
          name: 'Oye Como Va',
          artist: 'Santana',
          desc: 'The congas are drenched in deep, warm plate reverb and placed wide in the stereo image, blending organically with the swirling Hammond B3 organ and guitar feedback.',
          url: 'https://open.spotify.com/track/5u96ZgqzZ37fv367v7B6Pt',
          platform: 'Spotify'
        },
        {
          name: 'Welcome to the Jam',
          artist: 'Dub Syndicate',
          desc: 'Conga drum strikes are fed into massive tape-delay feedback loops and sweeping low-pass filters, a quintessential technique in spacey dub-reggae production.',
          url: 'https://open.spotify.com/track/0Y4tH9YtP8mBvVqS5gN0Y2',
          platform: 'Spotify'
        }
      ]
    },
    bongo: {
      name: 'Bongos',
      origin: 'Cuba (Oriente Province)',
      description:
        "The bongos consist of two small, open-bottomed drums of different sizes joined by a wooden block. The smaller drum is the 'macho' (male, high pitch) and the larger is the 'hembra' (female, lower pitch). Played primarily with fingers and palms, they emerged in Eastern Cuba in the late 19th century and became central to the Cuban 'Son' style.",
      performers: [
        { name: 'Armando Peraza', spotify: 'true', apple: 'true' },
        { name: 'Roberto Roena', spotify: 'true', apple: 'true' },
        { name: 'Jack Costanzo', spotify: 'true', apple: 'true' }
      ],
      songs: [
        { name: 'Manteca', artist: 'Dizzy Gillespie & Chano Pozo', spotify: 'true', apple: 'true' },
        { name: 'Llorarás', artist: "Oscar D'León", spotify: 'true', apple: 'true' }
      ],
      effectsSongs: [
        {
          name: 'King Tubby Meets Rockers Uptown',
          artist: 'Augustus Pablo & King Tubby',
          desc: 'Bongo slaps are chopped up, filtered, and fed into high-feedback spring reverbs and ping-pong delays to create a dynamic, echoing soundscape.',
          url: 'https://open.spotify.com/track/4jVlC05tDsz0I7Rof9Obe1',
          platform: 'Spotify'
        }
      ]
    },
    djembe: {
      name: 'Djembe',
      origin: 'West Africa (Manding Empire)',
      description:
        "The djembe is a rope-tuned skin-covered goblet drum played with bare hands. Originating in West Africa (Guinea, Mali, Senegal, Burkina Faso), its name translates to 'everyone gather together in peace.' It is known for producing three distinct sounds: the deep bass (center strike), the singing tone (rim strike), and the sharp, high-pitched slap.",
      performers: [
        { name: 'Mamady Keïta', spotify: 'true', apple: 'true' },
        { name: 'Babatunde Olatunji', spotify: 'true', apple: 'true' },
        { name: 'Famoudou Konaté', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Jin-Go-Lo-Ba', artist: 'Babatunde Olatunji', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Tribal Dance',
          artist: 'The Chemical Brothers',
          desc: 'Djembe slaps are processed through high-pass filters and stereo flangers to create a high-energy sweeping effect that propels the electronic groove.',
          url: 'https://open.spotify.com/track/6296NiaAEvY3MOnZunD3s1',
          platform: 'Spotify'
        }
      ]
    },
    bata: {
      name: 'Bata',
      origin: 'Yorubaland (Nigeria / Cuba)',
      description:
        'Bata drums are a family of three double-headed, hourglass-shaped drums used historically in Yoruba sacred ceremonies and expanded into Afro-Cuban secular music. The three sizes—Iyá (the mother, largest, lowest pitch), Itótele (middle), and Okónkolo (smallest, highest)—engage in an intricate, highly syncopated musical conversation that mimics spoken language.',
      performers: [
        { name: 'Pedrito Martinez', spotify: 'true', apple: 'true' },
        { name: 'Milton Cardona', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'La Habana', artist: 'Pedrito Martinez', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Sacred Beats',
          artist: 'Pedrito Martinez',
          desc: 'Bata tracks are enveloped in short, dense room reverbs to create a sense of being recorded in a ritual space, emphasizing their complex acoustic interaction.',
          url: 'https://open.spotify.com/track/2v6K1N8uU8mBvVqS5gN0Y2',
          platform: 'Spotify'
        }
      ]
    },
    tabla: {
      name: 'Tabla',
      origin: 'India',
      description:
        "The tabla is the premier percussion instrument of North Indian classical music. It consists of a pair of single-headed drums: the smaller wooden 'Dayan' (or Tabla, played with the right hand) and the larger, metallic or clay bass drum 'Bayan' (played with the left heel of the palm). The black spot of iron filings in the center allows for melodic overtones and pitch slides.",
      performers: [
        { name: 'Zakir Hussain', spotify: 'true', apple: 'true' },
        { name: 'Alla Rakha', spotify: 'true', apple: 'true' },
        { name: 'Karsh Kale', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Making Music', artist: 'Zakir Hussain', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Anokha: Soundz of the Asian Underground',
          artist: 'Talvin Singh',
          desc: "The Tabla is routed through stereo digital delay lines and resonance sweeps, creating the iconic 'Tabla and Bass' electronic sound of the late 90s.",
          url: 'https://open.spotify.com/track/0Y4tH9YtP8mBvVqS5gN0Y2',
          platform: 'Spotify'
        }
      ]
    },
    steelpan: {
      name: 'Steelpan',
      origin: 'Trinidad and Tobago',
      description:
        'The steelpan is a chromatic tuned percussion instrument made from industrial oil barrels. Developed in Trinidad in the 1930s by lower-class urban youth who were banned from street drumming, it represents an extraordinary acoustic feat where hammered indentations create perfectly tuned individual notes. It is the national instrument of Trinidad and Tobago.',
      performers: [
        { name: 'Liam Teague', spotify: 'true', apple: 'true' },
        { name: 'Ellie Mannette', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'St. Thomas', artist: 'Sonny Rollins', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: "I Know There's Gonna Be (Good Times)",
          artist: 'Jamie xx',
          desc: 'Bright steelpan riffs are treated with chorus, lush stereo delay, and room reverb to construct an open-air, summery, festival-ready electronic hook.',
          url: 'https://open.spotify.com/track/4jVlC05tDsz0I7Rof9Obe1',
          platform: 'Spotify'
        }
      ]
    },
    darbuka: {
      name: 'Darbuka',
      origin: 'Middle East / North Africa',
      description:
        "The darbuka (or goblet drum) is a single-headed hand drum with a goblet-shaped body, popular in Middle Eastern, North African, and Balkan music. Historically made of clay or wood with fish skin, modern darbukas are often aluminum with synthetic heads, producing sharp, high-pitched 'tek' rim shots and deep, resonant 'dum' center tones.",
      performers: [
        { name: 'Hossam Ramzy', spotify: 'true', apple: 'true' },
        { name: 'Misirli Ahmet', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Sabla Tolo', artist: 'Hossam Ramzy', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Habibi Ya Nour El Ain',
          artist: 'Amr Diab',
          desc: 'The darbuka is compressed tightly and sweetened with high-frequency exciters to make the rapid-fire rolls punch cleanly through the Arabic-pop arrangement.',
          url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
          platform: 'Spotify'
        }
      ]
    },
    riq: {
      name: 'Riq',
      origin: 'Middle East / Egypt',
      description:
        'The riq is the traditional tambourine of Arabic classical and folk music. It features a lightweight wooden frame, traditionally covered in fish or goat skin, and five double-sets of heavy brass jingles. By striking the head, the jingles, and shaking the frame, masters can produce an incredibly rich, complex orchestral accompaniment.',
      performers: [{ name: 'Adel Shams El-Din', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Riq Solo', artist: 'Adel Shams El-Din', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Desert Mirage',
          artist: 'Dead Can Dance',
          desc: "The riq's brass jingles are fed into long cathedral reverbs and synchronized delays, creating an ancient, shimmering metallic atmosphere.",
          url: 'https://open.spotify.com/track/6296NiaAEvY3MOnZunD3s1',
          platform: 'Spotify'
        }
      ]
    },
    surdo: {
      name: 'Surdo',
      origin: 'Brazil (Rio de Janeiro & Bahia)',
      description:
        'The surdo is a large, deep double-headed bass drum. It forms the rhythmic floor of the Samba school parades (Batucada) in Rio de Janeiro and Bahia. It is played with a soft mallet in one hand while the other hand dampens or accents the skin, driving the heavy syncopation and marking the pulse of the carnival.',
      performers: [
        { name: 'Monobloco', spotify: 'true', apple: 'true' },
        { name: 'Olodum', spotify: 'true', apple: 'true' }
      ],
      songs: [
        { name: "They Don't Care About Us", artist: 'Michael Jackson ft. Olodum', spotify: 'true', apple: 'true' }
      ],
      effectsSongs: [
        {
          name: 'Samba Reggae Beats',
          artist: 'Olodum',
          desc: 'Sub-harmonic bass synthesizers are triggered by Surdo strikes, making the low-end hits rumble seismically in deep club and stadium settings.',
          url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
          platform: 'Spotify'
        }
      ]
    },
    pandeiro: {
      name: 'Pandeiro',
      origin: 'Brazil',
      description:
        "The pandeiro is a Brazilian frame drum closely resembling the tambourine. It can be tuned dynamically and features cupped metal jingles ('platinelas') that produce a drier, crisper chime than European tambourines. By alternating strikes with the thumb, fingertips, and heel of the hand, players reproduce an entire drum kit's patterns on a single frame.",
      performers: [{ name: 'Marcos Suzano', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Samba de Pandeiro', artist: 'Marcos Suzano', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Choro No. 1',
          artist: 'Acoustic Choro Group',
          desc: 'The pandeiro is treated with short stereo spring reverb to amplify the mechanical clatter of the platinelas, reinforcing the vintage acoustic warmth.',
          url: 'https://open.spotify.com/track/4jVlC05tDsz0I7Rof9Obe1',
          platform: 'Spotify'
        }
      ]
    },
    cuica: {
      name: 'Cuíca',
      origin: 'Brazil (Bantu / Central African roots)',
      description:
        'The cuíca is a highly distinctive friction drum. A thin bamboo stick is attached to the center of the drumhead, extending inside. The player rubs the stick with a wet cloth, producing high-pitched squeaks and animal-like grunts, while the other hand presses the drumhead from the outside to modulate the pitch. Essential in Samba school arrangements.',
      performers: [{ name: 'Osvaldinho da Cuíca', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Taj Mahal', artist: 'Jorge Ben Jor', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Meia Sola',
          artist: 'Paulinho da Viola',
          desc: 'Squeaks from the cuíca are modulated with a mild phaser, accentuating the rubbery, sliding pitch sweeps that cut through the acoustic samba ensemble.',
          url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
          platform: 'Spotify'
        }
      ]
    },
    talkingdrum: {
      name: 'Talking Drum',
      origin: 'West Africa (Senegal / Mali)',
      description:
        'The talking drum is an hourglass-shaped drum with two drumheads connected by leather tension cords. Squeezed under the armpit during play, the tension cords tighten, increasing the pitch of the skin to mimic the inflections, tones, and patterns of human speech. Historically used as a communication tool across villages.',
      performers: [
        { name: 'Massamba Diop', spotify: 'true', apple: 'true' },
        { name: 'King Sunny Adé', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Ja Funmi', artist: 'King Sunny Adé', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Wakanda',
          artist: 'Ludwig Göransson (Black Panther Score)',
          desc: 'Talking drums are highly compressed and saturated, then fed into wide stereo delays to create a soaring, modern cinematic chase sequence.',
          url: 'https://open.spotify.com/track/4jVlC05tDsz0I7Rof9Obe1',
          platform: 'Spotify'
        }
      ]
    },
    daiko: {
      name: 'Taiko',
      origin: 'Japan',
      description:
        "Taiko refers to a broad range of Japanese percussion instruments. Played with large wooden drumsticks called 'bachi', they were historically used in warfare to command formations, in Shinto religious ceremonies, and in traditional village festivals (matsuri). The heavy, thunderous roar of the massive Nagado-daiko dominates modern kumi-daiko (ensemble taiko) performances.",
      performers: [
        { name: 'Kodo', spotify: 'true', apple: 'true' },
        { name: 'Yamato', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Miyake', artist: 'Kodo', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Inception Trailer Theme',
          artist: 'Hans Zimmer',
          desc: "Taiko ensembles are processed with intense distortion, hard clipping, and massive dark plate reverbs to create the iconic cinematic 'BOOM' hits.",
          url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
          platform: 'Spotify'
        }
      ]
    },
    cajon: {
      name: 'Cajón',
      origin: 'Peru',
      description:
        'The cajón is a box-shaped percussion instrument. Originated in coastal Peru by African slaves who were banned from playing traditional drums, they repurposed wooden shipping crates. In the 1970s, Paco de Lucía and Rubem Dantas integrated strings inside the front head, creating a snare-like sound that revolutionized Flamenco music.',
      performers: [
        { name: 'Alex Acuña', spotify: 'true', apple: 'true' },
        { name: 'Rubem Dantas', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Almoraima', artist: 'Paco de Lucía', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Flamenco Live Sets',
          artist: 'Paco de Lucía Ensemble',
          desc: 'Sub-bass expanders and parametric EQ accentuate the woody cajón thump, distinguishing the snare-slap of the corners from the clean center bass.',
          url: 'https://open.spotify.com/track/4jVlC05tDsz0I7Rof9Obe1',
          platform: 'Spotify'
        }
      ]
    },
    bodhran: {
      name: 'Bodhrán',
      origin: 'Ireland',
      description:
        "The bodhrán is an Irish frame drum, played with a double-headed wooden stick called a tipper or beater. The player's non-striking hand is placed inside against the goat skin to modulate the pitch, timber, and dampening, creating a warm, thumpy bass melody that supports fast Celtic jigs and reels.",
      performers: [
        { name: 'John Joe Kelly', spotify: 'true', apple: 'true' },
        { name: 'Christy Moore', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'The Gravel Walks', artist: 'Altan', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Traditional Jigs Live',
          artist: 'The Chieftains',
          desc: 'Fast tipper rolls are processed through light compression and optical gate effects to maintain punch and reduce mid-frequency muddiness in acoustic folk sets.',
          url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
          platform: 'Spotify'
        }
      ]
    },
    teponaztli: {
      name: 'Teponaztli',
      origin: 'Mesoamerica (Mexico / Aztec)',
      description:
        'The Teponaztli is a sacred Mesoamerican slit-drum made from a hollowed hardwood log. Two tongues of different thicknesses are carved on the top, producing two distinct, haunting pitches when struck with rubber-headed mallets. Used in religious rituals and battle calls by the Aztecs, it represents the voice of ancient deities.',
      performers: [{ name: 'Xavier Quijas Yxayotl', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Aztec Battle Call', artist: 'Xavier Quijas Yxayotl', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Ancient Rituals',
          artist: 'Yxayotl Ensembles',
          desc: 'The dual wooden tongues are enveloped in extreme, high-decay cave reverb and tape echo, evoking the mystical aura of ancient rainforest ceremonies.',
          url: 'https://open.spotify.com/track/4jVlC05tDsz0I7Rof9Obe1',
          platform: 'Spotify'
        }
      ]
    },
    bombo: {
      name: 'Bombo',
      origin: 'Argentina',
      description:
        "The Bombo Legüero is an Argentine bass drum made from a hollowed tree trunk and sheep/goat skin. The name 'Legüero' signifies that its deep, low-frequency pulse can be heard a league ('legua') away in the open Pampas plains. Its rim and skin are struck with mallets to drive folk dances like the Chacarera.",
      performers: [{ name: 'Mercedes Sosa', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Entre a Mi Pago Sin Golpear', artist: 'Mercedes Sosa', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Chacarera Sessions',
          artist: 'Traditional Folk Ensembles',
          desc: 'Placing a dynamic microphone inside the bombo and blending a clean skin click with a sub-bass expander yields a deep, chest-thumping heartbeat on modern stages.',
          url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
          platform: 'Spotify'
        }
      ]
    },
    pandero: {
      name: 'Pandero',
      origin: 'Puerto Rico',
      description:
        'The pandero represents the family of hand-held frame drums used in Puerto Rican Plena. These untuned drums, traditionally named Primo, Seguidor, and Requinto, are struck with fingers and palms to play high-energy, syncopated rhythms that tell local neighborhood stories.',
      performers: [
        { name: 'Mon Rivera', spotify: 'true', apple: 'true' },
        { name: 'Viento de Agua', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: "Aña Pa' Mi Tambor", artist: 'Mon Rivera', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Plena Carnival Reverb',
          artist: 'Puerto Rican Folk Ensemble',
          desc: 'A dense, wide spring reverb captures the high-pitched clacks of the Requinto frame drum, separating its high notes from the driving percussion ensemble.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    barril: {
      name: 'Barril',
      origin: 'Puerto Rico',
      description:
        "The barril de bomba is a traditional barrel drum used in Puerto Rican Bomba music. Made from rum barrels, it features a single head. The higher-pitched 'Subidor' drum improvises in response to the dancer's moves, while the lower 'Buleador' holds a steady rhythm.",
      performers: [
        { name: 'Modesto Cepeda', spotify: 'true', apple: 'true' },
        { name: 'Hermanos Ayala', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Bomba Te Traigo Yo', artist: 'Ismael Rivera', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Bomba Drum Gated Compression',
          artist: 'Afro-Puerto Rican Beats',
          desc: 'Hard, fast gated compression is applied to the barrel strikes to keep the high-frequency slaps crisp and powerful against the background vocals.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    timbales: {
      name: 'Timbales',
      origin: 'Cuba',
      description:
        'Timbales are shallow, single-headed metal-shelled drums played with sticks, crucial in salsa, Latin jazz, and mambo. They are usually paired with a cowbell, woodblock, and cymbal. Striking the metal shells (paila) produces a characteristic metallic clatter.',
      performers: [
        { name: 'Tito Puente', spotify: 'true', apple: 'true' },
        { name: 'Changuito', spotify: 'true', apple: 'true' },
        { name: 'Orestes Vilató', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Ran Kan Kan', artist: 'Tito Puente', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Ran Kan Kan Timbal Rimshot Delay',
          artist: 'Tito Puente Orchestra',
          desc: 'Crisp rimshots are accentuated with high-pass filters and dynamic stereo delays to build tension during horn solos.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    candombe: {
      name: 'Candombe',
      origin: 'Uruguay',
      description:
        'Candombe drums (Chico, Repique, and Piano) form the heartbeat of Afro-Uruguayan music. Played with a stick in one hand and the bare hand on the other, they engage in a rapid dialogue of syncopations and wooden clicks recognized by UNESCO.',
      performers: [
        { name: 'Ruben Rada', spotify: 'true', apple: 'true' },
        { name: 'Hugo Fattoruso', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Candombe Para Gardel', artist: 'Ruben Rada', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Uruguayan Carnival Spacey Slap',
          artist: 'Ruben Rada Ensemble',
          desc: 'Woodblock clicks and shell slaps are treated with a touch of chorus and long delays, placing the traditional carnival street parade in a modern space.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    gwoka: {
      name: 'Gwo Ka',
      origin: 'Guadeloupe',
      description:
        'The Gwo Ka consists of seven traditional barrel drums from Guadeloupe. The larger drum, the Boula, provides the foundational tempo, while the smaller, higher-pitched Markeur improvises on top of intricate rhythms like Lewoz.',
      performers: [
        { name: 'Guy Conquète', spotify: 'true', apple: 'true' },
        { name: 'Vélo', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Gwo Ka Folk Beats', artist: 'Guy Conquète', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Caribbean Barrel Tape Delay',
          artist: 'Guadeloupe Folk Project',
          desc: 'Traditional barrel hits are modulated with an analog tape delay emulator, creating a deep, warming warmth that matches Guadeloupe’s shores.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    tanbou: {
      name: 'Tanbou',
      origin: 'Haiti',
      description:
        'The Haitian Tanbou is a barrel-shaped wooden drum with a single head, central to Vodou ceremonies and folk music styles like Compas. Struck with a mallet or bare hand, it produces deep, spiritually resonant tones.',
      performers: [
        { name: 'Frisner Augustin', spotify: 'true', apple: 'true' },
        { name: 'Boukman Eksperyans', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Haitian Vodou Beats', artist: 'Frisner Augustin', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Vodou Chamber Reverb',
          artist: 'Haiti Percussion Group',
          desc: 'Deep open-head hits are treated with long cathedral room reverbs, recreating the mystical acoustic resonance of ritual drums.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    chinese: {
      name: 'Dagu & Tanggu',
      origin: 'China',
      description:
        'Chinese drums comprise the massive, deep-toned Dagu (great drum) and the barrel-shaped Tanggu. Played with heavy wooden sticks, they deliver majestic, thunderous beats traditionally used in festivals, temple rituals, and opera.',
      performers: [{ name: 'Zhao Cong', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Festive Drumming', artist: 'Zhao Cong', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Temple Drum Giant Reverb',
          artist: 'Beijing Folk Ensemble',
          desc: 'The massive decay of the Dagu is amplified using sub-frequency harmonic enhancers, shaking the room with every strike.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    doira: {
      name: 'Doira',
      origin: 'Central Asia',
      description:
        'The Doira is a classic frame drum of Uzbekistan, Tajikistan, and other Central Asian countries. It features metal rings attached inside the wooden frame, which clash and chime as the drum is struck, creating a glittering texture.',
      performers: [{ name: 'Abbos Kosimov', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Doira Solo', artist: 'Abbos Kosimov', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Silk Road Shimmer Delay',
          artist: 'Tashkent Ensemble',
          desc: 'The ring jingles are treated with high-pass flanging and ping-pong delays, generating a shining cloud of sound.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    uchiwadaiko: {
      name: 'Uchiwa-daiko',
      origin: 'Japan',
      description:
        'The Uchiwa-daiko is a Japanese fan-drum shaped like a flat paddle. Played with a single stick, it produces a dry, cracking tone used historically in Buddhist chanting, kabuki theatre, and traditional matsuri festivals.',
      performers: [{ name: 'Kodo Ensemble', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Matsuri Rythms', artist: 'Kodo', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Kabuki Snap Distortion',
          artist: 'Tokyo Theatre Sound',
          desc: 'Mild bitcrushing and drive are added to the fan-drum snap to elevate its dramatic stage presence.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    oceandrum: {
      name: 'Ocean Drum',
      origin: 'Global / Sound Therapy',
      description:
        'The Ocean Drum is a double-headed frame drum containing small metal beads. By tilting the drum slowly, the beads roll over the skin, perfectly mimicking the soothing, washing sound of ocean waves.',
      performers: [{ name: 'Wah!', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Ocean Meditation', artist: 'Wah!', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Ambient Sea Wash Filter',
          artist: 'Sound Healing Project',
          desc: 'A slow-sweeping lowpass filter is applied to the bead rolling noise, intensifying the sensation of receding tides.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    janggu: {
      name: 'Janggu',
      origin: 'Korea',
      description:
        'The Janggu is an hourglass-shaped double-headed drum central to Korean traditional music (Samulnori). Struck with a mallet on the bass side and a thin bamboo stick on the treble side, it represents the harmony of yin and yang.',
      performers: [{ name: 'Kim Duk-soo', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Samulnori Suite', artist: 'Kim Duk-soo', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Korean Folk Phasing Echo',
          artist: 'Seoul Traditional Ensemble',
          desc: 'A phasing effect on the high-pitched bamboo stick hits enhances the dynamic syncopations of Korean courtyard music.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    zabumba: {
      name: 'Zabumba',
      origin: 'Brazil (Northeast)',
      description:
        'The Zabumba is a flat, deep bass drum crucial in Northeastern Brazilian music genres like Forró and Baião. Played with a mallet on the top skin and a thin stick (bacalhau) on the bottom, it creates a bouncing syncopated groove.',
      performers: [
        { name: 'Luiz Gonzaga', spotify: 'true', apple: 'true' },
        { name: 'Hermeto Pascoal', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Asa Branca', artist: 'Luiz Gonzaga', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Forro Bass Boom Enhancer',
          artist: 'Northeast Beats',
          desc: 'Sub-bass harmonic addition is used on the primary mallet beats, resulting in a rich, modern dancefloor pulse.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    mridangam: {
      name: 'Mridangam',
      origin: 'South India',
      description:
        'The Mridangam is the primary rhythmic instrument of South Indian Carnatic music. A double-headed barrel drum, it features a unique central black paste patch on the treble skin, producing highly melodic, pitched ringing tones.',
      performers: [
        { name: 'Karaikudi Mani', spotify: 'true', apple: 'true' },
        { name: 'Umayalpuram K. Sivaraman', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Carnatic Tala Solo', artist: 'Karaikudi Mani', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Carnatic Resonance Modulator',
          artist: 'Madras Rhythm Studio',
          desc: 'The pitched rings of the mridangam are treated with a narrow bandpass filter, highlighting the pure melodic vocal-like qualities of the drum.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    udu: {
      name: 'Udu',
      origin: 'Nigeria (Igbo)',
      description:
        'The Udu is a clay pot drum originating from Igbo women in Nigeria. It features a side hole alongside the main opening. By striking the holes and skin, players produce hollow, liquid bass drops and ceramic taps.',
      performers: [{ name: 'Jamey Haddad', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Clay Beats', artist: 'Jamey Haddad', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Liquid Clay Pitch Slide',
          artist: 'World Percussion Project',
          desc: 'A dynamic formant filter is applied to the side-hole bass hits, emphasizing the watery, sweeping vocal-like tones.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    thunderdrum: {
      name: 'Thunder Drum',
      origin: 'Global / Sound Therapy',
      description:
        'The Thunder Drum, or spring drum, consists of a cylinder with a long, thin metal spring attached to the drumhead. When shaken, the spring vibrates and resonates inside the chamber, producing a chillingly realistic thunder sound.',
      performers: [{ name: 'Emil Richards', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Thunder Soundscapes', artist: 'Emil Richards', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Cinematic Storm Flanger',
          artist: 'Hollywood Foley Group',
          desc: 'The rumbling thunder tail is treated with a slow flanger, recreating the moving wind and lightning crackle of a storm.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    waterdrums: {
      name: 'Water Drums',
      origin: 'West Africa / Native America',
      description:
        'Water Drums consist of hollowed gourds floating upside down in basins of water. Struck with a mallet or hand, the water acts as a natural dampener and resonator, producing a warm, organic, liquid bass beat.',
      performers: [{ name: 'Baka Forest People', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Forest Water Beats', artist: 'Baka Forest People', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Liquid Ripple Resonance',
          artist: 'Rainforest Field Records',
          desc: 'Water thumps are routed through a resonator tuned to water frequencies, producing a sparkling, organic splash texture.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    vibraslap: {
      name: 'Vibraslap',
      origin: 'USA (Latin Percussion)',
      description:
        'The Vibraslap is an instrument consisting of a wire handle connecting a wooden ball to a hollow box containing metal teeth. Striking the ball causes the teeth to rattle inside the box, producing a long, buzzing chatter.',
      performers: [{ name: 'Harvey Mason', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Sweet Emotion', artist: 'Aerosmith', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Buzzing Chatter Saturation',
          artist: 'Classic Rock Project',
          desc: 'The rattling chatter is treated with tape saturation and high-frequency gain, making the buzz sit perfectly in modern rock mixes.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    flexatone: {
      name: 'Flexatone',
      origin: 'Global / Orchestral',
      description:
        'The Flexatone is a steel sheet metal blade with wooden beaters attached. By shaking the handle and using the thumb to bend the blade, the player produces a highly unique, sliding, high-pitched metallic wobble.',
      performers: [{ name: 'Pierre Boulez', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Modernist Wobble', artist: 'Pierre Boulez', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Ethereal Slide Chorus',
          artist: 'Sci-Fi Soundtrack Group',
          desc: 'The metallic sweeps are blended with a thick stereo chorus and light delay, crafting an eerie extraterrestrial aura.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    waterphone: {
      name: 'Waterphone',
      origin: 'USA / Sound Therapy',
      description:
        'The Waterphone is a stainless steel basin containing water with a bronze rod neck and several metal rods. Played with a bow or mallet, tilting the basin causes the water to shift, modulating eerie, haunting, sci-fi echoes.',
      performers: [{ name: 'Richard Waters', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'The Matrix Soundscapes', artist: 'Richard Waters', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Sci-Fi Haunted Space Echo',
          artist: 'Cinematic Foley Project',
          desc: 'The haunting metal resonance is fed into a extreme-sized space reverb with feedback loops, evoking a sense of deep void.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    handpan: {
      name: 'Handpan',
      origin: 'Switzerland / Global',
      description:
        'The Handpan is a steel dome-shaped instrument with several tuned tone fields. Struck gently with fingers, it emits an exceptionally pure, melodic, and resonant sound, perfect for meditative and acoustic music.',
      performers: [
        { name: 'Hang Massive', spotify: 'true', apple: 'true' },
        { name: 'Daniel Waples', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Once Again', artist: 'Hang Massive', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Ethereal Space Cathedral Reverb',
          artist: 'Hang Massive Studio',
          desc: 'Every ring of the handpan is processed through an extra-long cavernous reverb, turning gentle strikes into lush melodic pads.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    ghatam: {
      name: 'Ghatam',
      origin: 'South India',
      description:
        'The Ghatam is a South Indian clay pot percussion instrument, specifically baked with iron filings to produce high-pitched, metallic ringing tones. Struck with fingers, heels of the hands, and even the player’s chest.',
      performers: [{ name: 'Vikku Vinayakram', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'A Jhumpa Tala', artist: 'Vikku Vinayakram', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Clay Resonance Expander',
          artist: 'South Indian Percussion Group',
          desc: 'The clay taps are treated with a short room ambiance reverb and narrow frequency bandpass, clarifying the bright acoustic ring.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    daf: {
      name: 'Daf',
      origin: 'Iran / Kurdistan',
      description:
        'The Daf is a large Persian frame drum with numerous small metal chains or rings attached inside. When played, the chains clash against the skin, adding a rustling, sweeping texture that drives spiritual Sufi music.',
      performers: [{ name: 'Pezhman Hadadi', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Sufi Trance Beats', artist: 'Pezhman Hadadi', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Spiritual Chain Delay',
          artist: 'Persian Folk Project',
          desc: 'The rustling of the metal chains is captured with a stereo expander and tape delay, creating a beautiful continuous sweep.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    tamborim: {
      name: 'Tamborim',
      origin: 'Brazil',
      description:
        'The Tamborim is a small, high-pitched Brazilian frame drum played with a flexible plastic stick (baqueta). It is flipped rapidly in the hand, driving the intense, syncopated upper-register loops in samba.',
      performers: [{ name: 'Monobloco Ensemble', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Samba Tamborim Loops', artist: 'Monobloco', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'High Pitch Baqueta Gate',
          artist: 'Samba School Beats',
          desc: 'Tightly gated compression is applied to the tamborim sticks to ensure the rapid-fire rolls remain clear and sharp over the massive baterias.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    repinique: {
      name: 'Repinique',
      origin: 'Brazil',
      description:
        'The Repinique is a high-pitched metal-shell double-headed drum in Brazilian Samba. Played with one stick and one bare hand, it acts as the lead instrument of the samba baterias, initiating calls and solos.',
      performers: [{ name: 'Monobloco Solos', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Batucada Call', artist: 'Monobloco', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Metallic Shell Compression',
          artist: 'Rio Carnival Sound',
          desc: 'The bright metal ring of the shells is captured with a dedicated dynamic microphone and highlighted with high-frequency exciters.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    bendir: {
      name: 'Bendir',
      origin: 'North Africa',
      description:
        'The Bendir is a North African frame drum featuring snare strings made of gut stretched across the underside of the head. When struck, the strings vibrate, producing a distinctive buzzing, snare-like sustain.',
      performers: [{ name: 'Karim Ziad', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Gnawa Fusion', artist: 'Karim Ziad', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Snare Buzz Spring Reverb',
          artist: 'Morocco Fusion Group',
          desc: 'Gut snare vibrations are routed into a vintage spring reverb, accentuating the dusty, historic character of Gnawa rhythms.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    davul: {
      name: 'Davul',
      origin: 'Middle East',
      description:
        'The Davul is a large double-headed bass drum played with a heavy curved mallet on one side and a thin cane stick on the other. It delivers heavy, thumping bass beats accompanied by high-pitched snaps.',
      performers: [{ name: 'Middle Eastern Folk Ensembles', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Folk Halay Dance', artist: 'Turkish Traditional Ensemble', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Epic Dual Mallet Compression',
          artist: 'Istanbul Folk Group',
          desc: 'Heavy parallel compression blends the deep tree-trunk bass thumps with the bright stick snaps for a huge cinematic sound.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    ashiko: {
      name: 'Ashiko',
      origin: 'Yorubaland',
      description:
        'The Ashiko is a cone-shaped single-headed drum played with bare hands. Originating in Nigeria, it is known as a cousin of the djembe, bridging the gap between the djembe and conga with its rich mid-range tones.',
      performers: [{ name: 'Babatunde Olatunji', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Yoruba Rhythms', artist: 'Babatunde Olatunji', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Conical Chamber EQ Sweeps',
          artist: 'Afro-Beat Project',
          desc: 'Mid-range sweeps accentuate the wooden resonance of the cone shell, distinguishing its voice from standard hand drums.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    dunun: {
      name: 'Dunun',
      origin: 'West Africa',
      description:
        'Dunun drums, comprising the Dununba, Sangban, and Kenkeni, are a family of double-headed cylindrical bass drums from West Africa. Played with heavy wooden mallets and often integrated with hand-struck iron bells, they provide the deep, polyrhythmic, melodic foundation for traditional djembe drum ensembles. The conversational interlocking of these three distinct drum voices drives the energy and pulse of West African social and ritual dances.',
      performers: [{ name: 'Famoudou Konaté', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Dunun Ensemble', artist: 'Famoudou Konaté', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Melodic West African Low End',
          artist: 'Guinea Tribal Beats',
          desc: 'Sub-bass expansion is applied to the Dununba hits, making the ground shake during intense dance circles.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    snare_drum: {
      name: 'Snare Drum',
      origin: 'Europe / Orchestral',
      description:
        'The Snare Drum is a cylindrical drum with metal wires (snares) stretched across the bottom head. Struck with wooden drumsticks, it produces a sharp, cracking, buzzy sound foundational to military, orchestral, and modern pop/rock.',
      performers: [{ name: 'Buddy Rich', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Sing Sing Sing', artist: 'Benny Goodman', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Orchestral Hall Reverb Snare',
          artist: 'Symphony Sound Group',
          desc: 'A huge plate reverb is added to the snare hits, mimicking the epic acoustics of modern philharmonic halls.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    shekere: {
      name: 'Shekere',
      origin: 'West Africa',
      description:
        'The Shekere is a percussion instrument consisting of a dried gourd covered with a woven net of beads. Shaking, tapping, and striking the bottom of the gourd produces sharp rattling sounds and deep bass resonances.',
      performers: [{ name: 'Babatunde Olatunji', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Rattle and Beat', artist: 'Babatunde Olatunji', spotify: 'true', apple: 'true' }],
      effectsSongs: [
        {
          name: 'Beaded Gourd Stereo Delay',
          artist: 'Tribal Beats Project',
          desc: 'Shaker rattles are widened across the stereo image with dynamic delays, providing a spacious organic groove.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    kanjira: {
      name: 'Kanjira',
      origin: 'Southern India (Carnatic Tradition)',
      description:
        "The Kanjira is a small but incredibly dynamic frame drum used in South Indian Carnatic classical music. Historically covered with the skin of the endangered Bengal monitor lizard (now replaced with goat or synthetic skins for conservation), it features a single pair of small brass bells or coins as jingles. Though it looks simple, playing the Kanjira requires virtuoso finger dexterity. The player holds the drum in one hand and strikes with the other, using the fingers of the holding hand to squeeze the drum's edge from the inside, dynamically shifting the pitch. An interesting fact: despite its tiny 7-inch diameter, a master player can extract deep, sliding bass tones and crisp, high-frequency slaps that rival a full drum set.",
      performers: [
        {
          name: 'V. Selvaganesh',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'G. Harishankar',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Kanjira Solo',
          artist: 'V. Selvaganesh',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Laya Vinyas',
          artist: 'V. Selvaganesh',
          desc: 'In modern recordings, Kanjira pitch slides are highlighted using short digital delays and pristine room reverbs, preserving the organic texture of the hand slaps.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    tammorra: {
      name: 'Tammorra',
      origin: 'Southern Italy (Campania)',
      description:
        "The Tammorra is a large, sacred Italian frame drum decorated with multiple sets of handmade tin-plate jingles. It is the rhythmic heartbeat of Campania folk heritage, traditionally accompanying the ecstatic, spinning agrarian dance known as the 'Tammurriata'. The drum is played with a unique, rolling thumb-finger technique that creates a continuous, hypnotic rumble representing the volcanic fire of Mount Vesuvius. Interesting fact: traditionally, the drumheads are stretched over sieves used for sifting flour, symbolizing abundance and the earth's fertility. Today, performers utilize this drum to bridge traditional folk storytelling with modern world fusion.",
      performers: [
        {
          name: 'Alfio Antico',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Tullio De Piscopo',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Tammurriata',
          artist: 'Alfio Antico',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Sila',
          artist: 'Alfio Antico',
          desc: "The tammorra's deep resonance is captured with vintage stereo ribbon mics and fed through warm analog spring reverbs to emphasize its haunting, raw energy.",
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    framed_rumbla: {
      name: 'Framed Rumbla',
      origin: 'Caribbean / Hybrid',
      description:
        'The Framed Rumbla is an innovative, contemporary hybrid frame drum designed to merge the ancient acoustic properties of the Middle Eastern bendir with the crisp, modern snare crack of a studio drum kit. It features adjustable internal guitar string snares or snare wires pressed against the synthetic drumhead. This allows percussionists to produce a warm, dry bass tone at the center alongside a razor-sharp snare slap at the rim. Interesting fact: it was popularized by frame drum pioneers who wanted a single, travel-friendly instrument that could emulate both hand percussion and electronic backbeats in acoustic world-music configurations.',
      performers: [
        {
          name: 'Glen Velez',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Yousif Sheronick',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Internal Resonance',
          artist: 'Glen Velez',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Rhythm of the Spheres',
          artist: 'Glen Velez',
          desc: "The Framed Rumbla's complex frequencies are processed with multi-tap stereo delays and low-pass filter sweeps, creating a shifting, spacey electronic groove.",
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    gran_cassa: {
      name: 'Gran Cassa',
      origin: 'Europe (Classical Concert Tradition)',
      description:
        'The Gran Cassa is the grand orchestral bass drum, famous for its colossal size and deep, tectonic frequencies. Historically evolved from Ottoman military marching bands (Mehter), it was integrated into Western classical orchestras by the late 18th century. Typically suspended in a large rolling steel frame, it is struck with massive, heavily padded felt-covered wooden mallets. Interesting fact: the Gran Cassa does not produce a definite pitch; instead, it generates a massive wave of low-frequency air pressure that is felt in the chest as much as it is heard by the ears, making it the ultimate tool for dramatic symphonic climaxes and modern cinematic tension.',
      performers: [
        {
          name: 'Evelyn Glennie',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Symphony No. 9 Bass Drum Movement',
          artist: 'Evelyn Glennie',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Cinematic Low End',
          artist: 'Evelyn Glennie',
          desc: 'In cinematic mixes, the Gran Cassa is treated with sub-harmonic synthesis and massive digital hall reverbs, turning single strokes into earth-shattering impact effects.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    lions_roar: {
      name: "Lion's Roar",
      origin: 'East Asia (China) / Europe',
      description:
        "The Lion's Roar is a highly unusual friction drum that produces a realistic, spine-chilling sound resembling the roar of a wild lion. It consists of a single-headed cylindrical drum with a sturdy cord or rope threaded through the center of the skin, secured by a knot. To play it, the performer holds a piece of wet leather or resin-coated cloth and slides it firmly along the cord. The resulting friction transmits intense vibrations directly to the drumhead, which acts as a powerful acoustic resonator. Interesting fact: it is used in classical orchestral works like Edgar Varèse's 'Hyperprism' and in traditional Chinese theatrical sound effects to signify supernatural occurrences or epic battles.",
      performers: [
        {
          name: 'Jean-Pierre Drouet',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Emil Richards',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Friction Waves',
          artist: 'Jean-Pierre Drouet',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Hyperprism Rumbles',
          artist: 'Jean-Pierre Drouet',
          desc: "The eerie growling sweeps of the Lion's Roar are processed through extreme ring modulators and deep stereo phasers, enhancing their spectral, otherworldly texture.",
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    chocalho: {
      name: 'Chocalho',
      origin: 'Brazil (Samba Carnaval Tradition)',
      description:
        'The Chocalho is a high-octane Brazilian metal shaker consisting of an aluminum frame lined with several rows of small, loose metal jingles (called platinelas). Held with both hands and shaken with a rapid, piston-like horizontal motion, it produces a piercing, wall-of-sound metallic clatter. Interesting fact: it is the primary instrument responsible for maintaining the driving upper frequencies of Rio Carnival samba schools. Because its acoustic volume is so intense, it easily cuts through hundreds of booming bass drums, driving the energy of dancers in crowded parades.',
      performers: [
        {
          name: 'Mestre Marçal',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Carlinhos Brown',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Samba de Enredo Percussion',
          artist: 'Mestre Marçal',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Carnaval Beats',
          artist: 'Mestre Marçal',
          desc: 'The bright clatter is treated with stereo flangers and brickwall limiters to create a continuous, sparkling percussive sheen that sits beautifully above deep bass elements.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    alfaia: {
      name: 'Alfaia',
      origin: 'Northeastern Brazil (Pernambuco)',
      description:
        'The Alfaia is a large, heavy wooden drum tuned with thick ropes, central to the Maracatu parade rhythms of Pernambuco. Handcrafted from local wood and goatskin, it is worn over the shoulder and struck with heavy wooden mallets. Interesting fact: the Alfaia is unique because it is tuned extremely low, producing a deep, wet, muddy bass thud that resembles an acoustic heartbeat. It represents Afro-Brazilian spiritual resilience, traditionally played during sacred ceremonies and festive street processions to invoke the spirits of ancestral kings and queens.',
      performers: [
        {
          name: 'Naná Vasconcelos',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Chico Science',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Maracatu Misterioso',
          artist: 'Naná Vasconcelos',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Da Lama Ao Caos',
          artist: 'Chico Science',
          desc: 'The booming Alfaia hits are enhanced with sub-bass synthesizers and transient shapers, giving the traditional drum a modern, heavy metal punch in studio mixes.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    log_drum: {
      name: 'Log Drum',
      origin: 'Mesoamerica / Central Africa',
      description:
        'The Log Drum, or Slit Drum, is an ancient percussive idiophone crafted by hollowing out a solid wooden log and carving horizontal H-shaped slits into its shell. This creates wooden tongues of varying thicknesses, each vibrating at a distinct, warm, resonant pitch when struck with rubber mallets. Interesting fact: Log Drums are among the earliest percussive communication devices, historically used by tribes to transmit complex acoustic messages across miles of dense tropical jungle, as well as in Aztec rituals and African tribal ceremonies.',
      performers: [
        {
          name: 'Xavier Quijas Yxayotl',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Brent Lewis',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Mayan Rituality',
          artist: 'Xavier Quijas Yxayotl',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Jungle Message Echoes',
          artist: 'Xavier Quijas Yxayotl',
          desc: 'The hollow, woody knocks of the Log Drum are treated with tape ping-pong delays and lush room reverbs, simulating an ancient communication echo.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    temple_blocks: {
      name: 'Temple Blocks',
      origin: 'East Asia (China / Japan)',
      description:
        "Temple Blocks are hollow wooden idiophones shaped like bulbous fish heads, historically derived from the Chinese 'Muyu' (wooden fish) used in Buddhist and Taoist chanting. Played in sets of tuned blocks mounted on a stand, they are struck with hard wood or rubber mallets to produce clean, hollow, highly distinct wooden clicks. Interesting fact: the fish shape is symbolic because fish never close their eyes, representing the wakefulness and mindfulness required in Buddhist practice. In modern music, they are a beloved orchestral color used to add whimsical percussive ticks and rhythmic details.",
      performers: [
        {
          name: 'Keiko Abe',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Evelyn Glennie',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Wooden Resonance Suite',
          artist: 'Keiko Abe',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Zen Wood Resonance',
          artist: 'Keiko Abe',
          desc: 'The sharp, dry ticks of the blocks are processed through shimmering granular delays and long spatialized reverbs to create a floating, ambient texture.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    frog_rasp: {
      name: 'Frog Rasp',
      origin: 'Southeast Asia (Thailand)',
      description:
        'The Frog Rasp is a traditional wooden frog idiophone hand-carved in Thailand. It features a ridged spine running down its back. By scraping a wooden stick up and down along these ridges, it produces a hollow, croaking sound that realistically mimics a frog or a cricket. Interesting fact: in Southeast Asian folklore, the frog is a rainmaker, and playing the Frog Rasp during dry seasons is believed to summon rain. Today, it is highly sought after by sound effects artists (foley) and ambient musicians looking to inject organic, bio-acoustic realism into their soundscapes.',
      performers: [
        {
          name: 'Stomu Yamashta',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Emil Richards',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Forest Whispers',
          artist: 'Stomu Yamashta',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Bio-Acoustic Rain',
          artist: 'Stomu Yamashta',
          desc: 'The hollow frog croaks are treated with a reverse digital reverb and subtle pitch modulation, blending the acoustic frogs into a mystical, fluid soundscape.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    spring_drum: {
      name: 'Spring Drum',
      origin: 'Modern Experimental',
      description:
        'The Spring Drum consists of a lightweight cardboard or plastic cylinder with a long, thin steel spring attached directly to the drumhead. When the drum is shaken or the spring is struck, the spring vibrates and transmits eerie, thunder-like metallic acoustic waves into the resonant cylinder. Interesting fact: the Spring Drum was popularized in the 20th century as a sound effects tool for radio plays and classic science fiction movies, as it can realistically replicate everything from rolling thunder to laser beams and spooky, space-age laser blasts when manipulated with different hand techniques.',
      performers: [
        {
          name: 'Emil Richards',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Richard Waters',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Spooky Vibrations',
          artist: 'Emil Richards',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Sci-Fi Thunderstorm',
          artist: 'Emil Richards',
          desc: 'The metallic springs are run through stereo chorus, analog bucket-brigade delays, and pitch shifters to expand the eerie rumbles into cosmic sound effects.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    thongophone: {
      name: 'Thongophone',
      origin: 'Modern Experimental / Performance Art',
      description:
        'The Thongophone is an experimental acoustic instrument made of multiple PVC pipes of graduated lengths arranged on a framework. It is played by slapping the open pipe openings with flat rubber paddles (historically made from rubber thongs or sandals). This creates a dry, extremely punchy, bass-heavy plosive pop sound. Interesting fact: it was popularized globally by theatrical performance ensembles like the Blue Man Group. Since the pitch is entirely determined by the length of the pipe, players can perform rapid, melodic basslines with an incredibly satisfying tactile and acoustic punch.',
      performers: [
        {
          name: 'Blue Man Group',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Snubby J',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Rods and Cones',
          artist: 'Blue Man Group',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'PVC Pipe Melodies',
          artist: 'Blue Man Group',
          desc: 'The punchy pops are compressed with rapid transient attacks and fed through high-pass filters and stereo delays to construct an energetic industrial hook.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    gubguba: {
      name: 'Gubguba',
      origin: 'Eastern India (Bengal)',
      description:
        "The Gubguba is a traditional Indian friction chordophone used by the wandering Baul spiritual musicians of Bengal. It consists of a hollow wooden or gourd cylinder wrapped with animal skin on one end. A string is attached to the center of the skin, pulled through the open end, and tied to a brass weight held in the player's hand. By plucking the string with a plectrum while squeezing and pulling the string to shift its tension, the player produces highly elastic, vocal-like pitch bends and rhythmic slides. Interesting fact: its bouncy, sliding acoustic signature is central to Baul mystical songs, reflecting the spiritual philosophy of ecstatic joy.",
      performers: [
        {
          name: 'Purna Das Baul',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Sanatan Das Baul',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Baul Songs of Bengal',
          artist: 'Purna Das Baul',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Mystic Baul Strings',
          artist: 'Purna Das Baul',
          desc: 'The sliding twangs of the Gubguba are sweetened with vintage tube saturation and tape-echo, emphasizing the vocal-like sliding pitch sweeps.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    cabasa: {
      name: 'Cabasa',
      origin: 'West Africa / Brazil',
      description:
        "The Cabasa is a popular Latin percussion instrument evolved from the African 'Afoxé' (a bead-wrapped gourd). The modern version consists of a wooden cylinder wrapped in a corrugated metal sheet, surrounded by loops of steel ball chains. The player grasps the metal chains in one hand while twisting the wooden handle with the other, producing dry, metallic, scraping rhythms. Interesting fact: the Cabasa is a staple in salsa, bossa nova, and Latin jazz. It is beloved by studio producers because its crisp, high-frequency transients lock perfectly with hi-hats, adding an organic metallic shimmer to any groove.",
      performers: [
        {
          name: 'Airto Moreira',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Paulinho da Costa',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Misturada',
          artist: 'Airto Moreira',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Bossa Nova Shimmer',
          artist: 'Airto Moreira',
          desc: 'The sharp metal scrapes are treated with high-pass EQ and automatic stereo panning, creating a wide, sparkling percussive element that dances across the speakers.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    rainstick: {
      name: 'Rainstick',
      origin: 'South America (Andean Tradition)',
      description:
        'The Rainstick is a long, hollow tube made of dried cactus or bamboo. Internal thorns or wooden pegs are driven in a spiral pattern along its inner walls, and the tube is filled with tiny pebbles, seeds, or sand. When tilted, the internal contents slowly cascade downward, striking the thorns to produce a continuous, watery trickle. Interesting fact: the Rainstick was invented by ancient Andean tribes, including the Diaguita, who used the calming instrument in sacred rain-making ceremonies to ask the gods for water in arid mountain valleys. In modern recording, it is a premier tool for generating soothing, white-noise ambient textures.',
      performers: [
        {
          name: 'Naná Vasconcelos',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Trilok Gurtu',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Rain Forest Echoes',
          artist: 'Naná Vasconcelos',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Andean Drizzle',
          artist: 'Naná Vasconcelos',
          desc: 'The soft, trickling seeds are run through a high-decay cosmic plate reverb and stereo phase shifters to create an immersive, dreamlike downpour effect.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    kokiriko: {
      name: 'Kokiriko',
      origin: 'Japan (Toyama Prefecture)',
      description:
        "The Kokiriko is an ancient Japanese percussive clapper made of dozens of thin, flat wooden slats bound together by a sturdy leather cord. The player holds the handles at each end and waves their hands in a slow, rolling motion, causing the wooden slats to cascade into one another in rapid succession, producing a sharp, clattering clack. Interesting fact: it is featured in the 'Kokiriko Bushi', which is recognized as Japan's oldest surviving folk song, dating back over 1,400 years to ancient agricultural festival dances thanking the gods for a bountiful harvest.",
      performers: [
        {
          name: 'Kodo Taiko Drummers',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Yamato Drummers',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Kokiriko Bushi',
          artist: 'Kodo Taiko Drummers',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Ancient Harvest Claps',
          artist: 'Kodo Taiko Drummers',
          desc: 'The rapid-fire wooden slaps of the Kokiriko are sweetened with stereo micro-delays and a slapback echo, creating a highly articulated and punchy clack track.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    guiro: {
      name: 'Güiro',
      origin: 'Puerto Rico / Cuba',
      description:
        "The Güiro is a Latin American percussive scraper crafted from a hollowed-out gourd with parallel notches carved along its side. It is played by holding the gourd in one hand and scraping a thin wooden stick or metal comb along the notches. This produces a highly distinct, rasping 'scrp-up' sound. Interesting fact: the Güiro's percussive sweep is the rhythmic engine of salsa, cumbia, and son music. It provides a dense, syncopated upper-register drive that perfectly glues the drum kit with the bassline, making it an indispensable ornament in Caribbean music.",
      performers: [
        {
          name: 'Tito Puente',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Ray Barretto',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Ran Kan Kan',
          artist: 'Tito Puente',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Salsa Scraper Groove',
          artist: 'Tito Puente',
          desc: 'The dry, rasping scrapes are compressed heavily and processed with bandpass filter sweeps, giving the Güiro a bright, driving modern club presence.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    spoons_bones: {
      name: 'Spoons',
      origin: 'Europe / North America',
      description:
        'Spoons and Rhythm Bones are simple folk percussion instruments with ancient roots. Spoons consist of two regular metal or wooden spoons held back-to-back in one hand, while Bones are curved ribs of wood or bone. By tapping them against the fingers, thighs, and hands, players generate rapid-fire claps and rolling triplets. Interesting fact: Spoons became a central percussive fixture in American bluegrass, Appalachian folk, and traditional Irish music. Because they can be played with incredible speed and syncopation using everyday objects, they represent the ultimate democratic folk percussion tradition.',
      performers: [
        {
          name: 'Abby the Spoon Lady',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Dom Flemons',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Angeline the Baker',
          artist: 'Abby the Spoon Lady',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Spoon River Triplets',
          artist: 'Abby the Spoon Lady',
          desc: 'The clattering spoon claps are processed with stereo room simulation and a high-frequency exciter to make the rapid triplets sound crisp and metallic.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    washboard: {
      name: 'Washboard',
      origin: 'North America (New Orleans Zydeco)',
      description:
        'The Washboard (or frottoir in Zydeco) is a corrugated metal washing board turned musical instrument. Worn like a vest over the chest, musicians rub and tap its ridges using metal thimbles or spoons worn on their fingers, producing a continuous, bright, scratching clatter. Interesting fact: the instrument was invented in Louisiana in 1946 by Creole musician Clifton Chenier, who commissioned a local blacksmith to build a wearable metal board. It became the signature sound of Zydeco, early jazz, and jug bands, providing a highly syncopated and driving metal groove that is completely unique.',
      performers: [
        {
          name: 'Newman Taylor Baker',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Washboard Chaz',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Washboard Boogie',
          artist: 'Newman Taylor Baker',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Bayou Metal Scrape',
          artist: 'Newman Taylor Baker',
          desc: 'The intense washboard scratches are run through tape saturation and a rapid stereo gate, giving the metal clicks a sharp, modern pop-acoustic bite.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    friction_drum: {
      name: 'Friction Drum',
      origin: 'Europe / Central Africa',
      description:
        'The Friction Drum is a family of drums (including the Spanish zambomba, German brummtopf, and Italian caccavella) that produces sound via friction rather than striking. A wooden stick or heavy cord is inserted into the center of the drumhead. Rubbing the stick with a wet cloth or resin-coated hand transmits intense friction vibrations directly to the skin, producing deep, groaning sweeps, sliding sighs, and rhythmic grunts. Interesting fact: in Europe, these drums have been played for centuries during winter carnivals, street parades, and Christmas carol sessions to drive away evil winter spirits with their spooky, animal-like growls.',
      performers: [
        {
          name: 'Alfio Antico',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Coetus Ensemble',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Friction Dance',
          artist: 'Alfio Antico',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Carnival Rumbles',
          artist: 'Alfio Antico',
          desc: 'The friction groans are run through sub-bass harmonizers and a dark, large cathedral reverb, turning the acoustic grunts into deep cinematic rumbles.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    kundu: {
      name: 'Kundu',
      origin: 'Papua New Guinea',
      description:
        'The Kundu is an hourglass-shaped drum from Papua New Guinea, hand-carved from a single log and covered with snake or monitor lizard skin. Often featuring a carved handle in the center and decorated with elaborate tribal motifs, it is struck with a bare hand. Interesting fact: the Kundu is a sacred instrument of PNG, central to cultural sing-sing festivals. The drumhead is traditionally glued using honey and tree sap, and the player places small dollops of beeswax on the center of the skin to perfectly tune its resonant, woody pop tone, which has accompanied ancestral dances and spiritual chants for centuries.',
      performers: [
        {
          name: 'Singsing Percussionists',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Airi Ingram',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Cultural Sing-Sing Chant',
          artist: 'Singsing Percussionists',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Tribal Sing-Sing Resonance',
          artist: 'Singsing Percussionists',
          desc: 'The dry, woody popping sound of the Kundu is treated with a lush, dark plate reverb and subtle stereo delays, giving it a spacious, ritualistic tone.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    tar_drum: {
      name: 'Tar',
      origin: 'North Africa / Middle East',
      description:
        'The Tar is a large, thin, and deep North African frame drum without jingles, producing an incredibly pure, warm, open bass tone alongside crisp edge taps. Historically played by female priestesses in spiritual ceremonies, its deep, pure acoustic resonance is highly therapeutic and meditative. Interesting fact: the Tar is the ancestor of many modern frame drums. Playing it involves resting the drum on the knee or holding it high, using subtle finger taps and thumb rolls to create intricate rhythmic cycles (Talas) that guide chanting, trances, and devotional world fusion music.',
      performers: [
        {
          name: 'Layne Redmond',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Glen Velez',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Ritual Drumming',
          artist: 'Layne Redmond',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Seven Heaven',
          artist: 'Layne Redmond',
          desc: "The Tar's meditative low-end is enhanced with multiband compression and a wide stereo delay, wrapping the listener in a warm, pulsing blanket of sound.",
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    gome: {
      name: 'Gome',
      origin: 'West Africa (Ghana)',
      description:
        'The Gome is a large, box-shaped drum from Ghana, covered with goatskin on one side. The drummer sits directly on top of the wooden box, using their heels to press against the skin from below to dynamically alter the pitch while playing the skin with bare hands. Interesting fact: the Gome was introduced to Ghana in the 19th century by returning freed slaves from the Caribbean. It was originally played as a secret instrument of resistance. Sitting on the drum allows the performer to feel the low-frequency vibrations throughout their entire body, making it a highly energetic and physically engaging box-drum tradition.',
      performers: [
        {
          name: 'Mustapha Tettey Addy',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Obo Addy',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Gome Rhythm Suite',
          artist: 'Mustapha Tettey Addy',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Ga Celebration Beats',
          artist: 'Mustapha Tettey Addy',
          desc: 'The deep, heel-modulated Gome hits are processed with dynamic pitch-tracking envelope filters and stereo delay loops, creating a bouncy, electronic-funk groove.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    boomwhackers: {
      name: 'Boomwhackers',
      origin: 'Modern Educational / Experimental',
      description:
        'Boomwhackers are lightweight, hollow, color-coded plastic tubes tuned to specific musical pitches by length. Striking them against hands, legs, or any hard surface produces a resonant, plastic hollow pop sound. Interesting fact: they were invented in 1995 by Craig Ramsell, who noticed that cutting cardboard tubes to different lengths produced distinct musical pitches. They became a global educational phenomenon in music classrooms. In professional performance, advanced ensembles arrange hundreds of tubes in complex racks to play incredibly fast, syncopated polyrhythms with a highly unique, modern acoustic aesthetic.',
      performers: [
        {
          name: 'Harvard THUD',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Blue Man Group',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Plastic Pop Suite',
          artist: 'Harvard THUD',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Tuned Plastic Grooves',
          artist: 'Harvard THUD',
          desc: 'The hollow plastic pops are processed through a lush stereo chorus and dynamic low-pass filters, transforming the tubes into a bouncy, synth-like percussive melody.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    tank_drum: {
      name: 'Tank Drum',
      origin: 'Modern Recycled Idiophone',
      description:
        'The Tank Drum (or Steel Tongue Drum) is a beautiful, modern musical instrument handcrafted from recycled steel propane tanks. Tuned slots (or tongues) are cut into the steel shell, each radiating a highly resonant, pure sine tone with long-lasting metallic sustain and rich overtones when struck with mallets. Interesting fact: the Tank Drum was inspired by the Whale Drum and the Hang. Because it is tuned pentatonically or modally, every combination of notes sounds beautifully harmonious, making it incredibly popular for meditation, therapeutic healing sessions, and modern cinematic ambient textures.',
      performers: [
        {
          name: 'Felle Vega',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Yuki Koshimoto',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Metallic Ripples',
          artist: 'Felle Vega',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Steel Tongue Waves',
          artist: 'Felle Vega',
          desc: 'The metallic chimes are drenched in a massive digital hall reverb and a slow sweep phaser, creating an ethereal, floating cathedral-like atmosphere.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    bell_tree: {
      name: 'Bell Tree',
      origin: 'Europe / Modern Studio Percussion',
      description:
        'The Bell Tree consists of a vertical pole lined with a stack of nested, bowl-shaped brass bells of graduated sizes. Striking or sweeping a metal rod up and down the stack produces a dazzling, high-frequency cascading brass chime. Interesting fact: it was originally designed to perform bell parts in early orchestral music, but quickly became a staple in 1970s soul, funk, and cinematic soundtracks. Its shimmering sweeps are often used to mark key moments of transition or magical revelations in commercial arrangements.',
      performers: [
        {
          name: 'Emil Richards',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Steve Weiss',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Cascading Brass Sweeps',
          artist: 'Emil Richards',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Golden Cascade',
          artist: 'Emil Richards',
          desc: 'The high-pitched brass shimmers are enhanced with stereo exciter filters and a slow, deep flanger, creating a glistening curtain of metallic sound.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    mark_tree: {
      name: 'Mark Tree',
      origin: 'Modern Studio Percussion',
      description:
        'The Mark Tree (commonly called wind chimes in studio settings) consists of a row of solid metal cylinders of graduated lengths suspended horizontally from a wooden bar. Sweeping a finger or mallet across the rods releases a shimmering, bright, high-frequency metallic cascade with a long decay. Interesting fact: it was invented in 1967 by studio percussionist Mark Stevens, who wanted a highly controllable, non-tangling wind chime for recording sessions. It is the premier percussive effect used in film and pop music to signify magical, dreamlike, or nostalgic transitions.',
      performers: [
        {
          name: 'Steve Weiss',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Emil Richards',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Dream State Transitions',
          artist: 'Steve Weiss',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Shimmering Transitions',
          artist: 'Steve Weiss',
          desc: 'The bright chimes are treated with a lush stereo chorus and long digital delay, resulting in a shimmering percussive texture that floats across the speakers.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    slide_whistle: {
      name: 'Slide Whistle',
      origin: 'Europe / Vaudeville Tradition',
      description:
        'The Slide Whistle (or Swanee Whistle) is a unique wind instrument featuring an internal piston rod. Pushing and pulling the rod slidingly alters the internal air column length, creating continuous glissando whistle sweeps from deep low to piercing high. Interesting fact: the Slide Whistle was a central sound effects tool in 1920s Vaudeville theatre and classic slapstick cartoons (like Looney Tunes). It is prized by sound designers and experimental musicians because it can translate fluid, comical body movements into highly expressive, swooping acoustic pitch sweeps.',
      performers: [
        {
          name: 'Fred Newman',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Spike Jones',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Cartoon Glissando Effects',
          artist: 'Fred Newman',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Slapstick Sweeps',
          artist: 'Fred Newman',
          desc: 'The swooping whistle sweeps are processed with a rotary speaker simulator (Leslie cabinet) and tape echo, creating a vintage, warbly cartoon aesthetic.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    ratchet: {
      name: 'Ratchet',
      origin: 'Europe (Classical Concert Tradition)',
      description:
        "The Ratchet is a wooden or metal gear-and-spring noise maker. Swinging its handle causes a flexible wooden slat to scrape over the gear teeth in rapid succession, generating a loud, continuous, mechanical crackling noise. Interesting fact: historically used as danger warnings on ships and in medieval cities, it was integrated into classical music by composers like Richard Strauss in 'Till Eulenspiegel'. It provides an energetic, mechanical clatter used to signify frantic comedic tension, alarm, or chaotic percussive details in modern cinematic scoring.",
      performers: [
        {
          name: 'Evelyn Glennie',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Mechanical Clatter Suite',
          artist: 'Evelyn Glennie',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Strauss Clatter',
          artist: 'Evelyn Glennie',
          desc: 'The intense wooden clicks are treated with high-frequency saturation and bitcrushing, transforming the organic gear rattle into a gritty, lo-fi mechanical loop.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    angklung: {
      name: 'Angklung',
      origin: 'Indonesia (Sundanese Culture)',
      description:
        'The Angklung is an Indonesian musical instrument made of two or more bamboo tubes suspended on a bamboo frame. The tubes are carefully carved to resonate at specific octaves. Shaking the frame horizontally causes the tubes to strike the base and rattle, producing a warm, woody, resonant, ringing tone. Interesting fact: the Angklung has been played for over a thousand years and is recognized by UNESCO as Intangible Cultural Heritage. Traditionally played to honor the rice goddess Dewi Sri, modern Angklung orchestras feature hundreds of players, each shaking a single pitched frame to perform complex symphonic melodies together.',
      performers: [
        {
          name: 'Daeng Soetigna',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Saung Angklung Udjo',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Angklung Symphony',
          artist: 'Daeng Soetigna',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Sunda Bamboo Rhythms',
          artist: 'Daeng Soetigna',
          desc: 'The woody bamboo rattles are processed through a warm room simulator and subtle stereo tremolo, emphasizing the lush, natural rattle of the bamboo.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    jaw_harp: {
      name: 'Jaw Harp',
      origin: 'Eurasia (Ancient Tribal Roots)',
      description:
        "The Jaw Harp (or Jew's Harp) is one of the world's oldest musical instruments, featuring a small metal or bamboo frame held firmly against the player's teeth. The player plucks the central metal tongue with their finger while modulating the shape of their mouth, throat, and breath to shift the resonant harmonics. This produces a highly unique, twangy, rhythmic bouncing glide. Interesting fact: it was played by indigenous tribes across Siberia, Central Asia, and Europe for spiritual trance states and courtship, using the oral cavity as a living acoustic synthesizer to generate complex harmonic overtones.",
      performers: [
        {
          name: 'John Wright',
          spotify: 'true',
          apple: 'true'
        },
        {
          name: 'Albin Paulus',
          spotify: 'true',
          apple: 'true'
        }
      ],
      songs: [
        {
          name: 'Twangy Harmonics',
          artist: 'John Wright',
          spotify: 'true',
          apple: 'true'
        }
      ],
      effectsSongs: [
        {
          name: 'Siberian Shamanic Twang',
          artist: 'John Wright',
          desc: 'The twangy mouth harmonics are routed through an automatic envelope sweep filter (auto-wah) and a warm analog delay, creating a trippy, rhythmic synthesizer sound.',
          url: '',
          platform: 'Spotify'
        }
      ]
    },
    timpani: {
      name: 'Timpani',
      origin: 'Europe (Orchestral / Military Roots)',
      description:
        'The Timpani, also known as kettledrums, are professional tuned percussion instruments used in symphonic orchestras. They consist of a large copper or fiberglass bowl wrapped with a synthetic or calfskin head, tuned precisely via a foot pedal that adjusts the head tension in real-time. Originating from ancient military drums in the Middle East and introduced to Europe in the 15th century, they transitioned from cavalry signaling to become the primary pitched percussion of classical music.',
      performers: [
        { name: 'Vic Firth', spotify: 'true', apple: 'true' },
        { name: 'Cloyd Duff', spotify: 'true', apple: 'true' }
      ],
      songs: [
        { name: 'Also Sprach Zarathustra (Timpani Opening)', artist: 'Richard Strauss', spotify: 'true', apple: 'true' }
      ]
    },
    kotsuzumi: {
      name: 'Kotsuzumi',
      origin: 'Japan (Noh & Kabuki Theater)',
      description:
        'The Kotsuzumi is a traditional Japanese hour-glass-shaped double-headed drum prominent in Noh and Kabuki theater. Unlike most drums, it is played on the right shoulder and the player adjusts the pitch in real-time by squeezing or loosening the decorative orange silk cords (shirabeo) wrapping the drum heads. This produces a haunting, vocal-like pitch slide. It is accompanied by stylized vocal calls (kakegoe) from the player to structure theater movements.',
      performers: [{ name: 'Tosha Roei', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Kabuki Hayashi Suite', artist: 'Tosha Roei Ensemble', spotify: 'true', apple: 'true' }]
    },
    dhol: {
      name: 'Dhol',
      origin: 'India (Punjab Folk Roots)',
      description:
        'The Dhol is a high-volume, double-sided barrel drum played across South Asia, most famously in Punjab. It features a heavy wooden shell played horizontally with two distinct sticks: a thick, curved wooden stick called a dagga for the heavy bass head, and a thin, supple cane stick called a tilli for the crisp treble head. Crucial to Bhangra music and harvest celebrations (Vaisakhi), its thumping, syncopated drive represents the ultimate energy of North Indian festive folk culture.',
      performers: [
        { name: 'Dhad Sarangi', spotify: 'true', apple: 'true' },
        { name: 'Johnny Kalsi', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Bhangra Punjab Da', artist: 'The Dhol Foundation', spotify: 'true', apple: 'true' }]
    },
    agogo: {
      name: 'Agogô',
      origin: 'West Africa / Brazil (Yoruba & Samba Roots)',
      description:
        'The Agogô is a high-contrast double or triple bell made of metal or wood, held in one hand and struck with a wooden stick. Originating from Yoruba iron bells in West Africa, it travelled to Brazil where it became the rhythmic leader of samba batucadas, capoeira, and Afoxé rituals. The player can squeeze the two bell handles together to click them, adding a muted percussion accent between high and low metallic strikes.',
      performers: [{ name: 'Naná Vasconcelos', spotify: 'true', apple: 'true' }],
      songs: [{ name: 'Samba Batucada', artist: 'Rio Escola de Samba', spotify: 'true', apple: 'true' }]
    },
    claves: {
      name: 'Claves',
      origin: 'Cuba (West African Shipping Roots)',
      description:
        'Claves consist of two solid wooden dowels, traditionally made of dense tropical hardwoods like rosewood or ebony. The player cups one hand to form a hollow acoustic soundbox (clave) while striking it with the other dowel. This produces an extremely bright, piercing click. Developed in the shipyards of Havana, Cuba, where wooden ship pegs were struck as improvised instruments, the repeating "clave pattern" is the rhythmic key holding all salsa, rumba, and Afro-Cuban music together.',
      performers: [
        { name: 'Chano Pozo', spotify: 'true', apple: 'true' },
        { name: 'Tito Puente', spotify: 'true', apple: 'true' }
      ],
      songs: [{ name: 'Ran Kan Kan', artist: 'Tito Puente', spotify: 'true', apple: 'true' }]
    }
  };

export const patternInfo = {
  tumbao: {
    name: 'Tumbao',
    description:
      "Tumbao is the foundational, highly syncopated eight-beat rhythm of Afro-Cuban origin. Traditionally played on the congas, it is characterized by a firm 'slap' on beat 2 and two ringing, resonant 'open tones' on beat 4, locking in seamlessly with the double bass.",
    songs: [
      {
        name: 'Oye Como Va',
        artist: 'Santana',
        spotify: 'true',
        apple: 'true'
      },
      {
        name: 'Indestructible',
        artist: 'Ray Barretto',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  guaguanco: {
    name: 'Guaguancó',
    description:
      'Guaguancó is a subgenre of Cuban rumba, characterized by a rapid, complex 3-2 clave rhythmic dialogue between three conga drums and the dancers. It features the iconic "vacunao" pelvic gesture of pursuit and capture.',
    songs: [
      {
        name: 'Guaguanco Margarito',
        artist: 'Mongo Santamaría',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  martillo: {
    name: 'Martillo',
    description:
      'The Martillo (meaning "hammer") is the steady, driving eight-beat rhythm of Cuban bongos. Played primarily with fingers and fingertips, it weaves a continuous, rolling backdrop of high and low slaps that keeps steady tempo.',
    songs: [
      {
        name: 'Llorarás',
        artist: "Oscar D'León",
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  kuku: {
    name: 'Kuku',
    origin: 'Guinea (West Africa)',
    description:
      'Kuku is a rapid, celebratory West African rhythm traditionally played on the djembe and dununs to welcome villagers returning from the harvest or fishing. It is highly energetic and encourages ecstatic circle dancing.',
    songs: [
      {
        name: 'Kuku Rhythms',
        artist: 'Mamady Keïta',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  samba: {
    name: 'Samba Batucada',
    origin: 'Brazil',
    description:
      'Samba Batucada is a rapid-fire, polyrhythmic percussion jam from Rio de Janeiro. Featuring surdos, tamborims, repiniques, and pandeiros, its intense syncopations drive the global spectacle of the Brazilian Carnaval.',
    songs: [
      {
        name: 'Samba da Minha Terra',
        artist: 'João Gilberto',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  calypso: {
    name: 'Calypso Beat',
    origin: 'Trinidad and Tobago',
    description:
      'Calypso beat is a syncopated, mid-tempo Afro-Caribbean rhythm originally developed in Trinidad. Powered by steelpans, banjos, and percussion, it historically acted as a rhythmic vehicle for social commentary and satire.',
    songs: [
      {
        name: 'Calypso Music',
        artist: 'Harry Belafonte',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  soca: {
    name: 'Soca',
    origin: 'Trinidad and Tobago',
    description:
      "Soca (short for 'Soul of Calypso') is a rapid, high-energy modern Caribbean party rhythm. Combining the swing of Calypso with Indian dholak percussion elements, it represents a vibrant bridge of Trinidad's multi-ethnic roots.",
    songs: [
      {
        name: 'Hot Hot Hot',
        artist: 'Arrow',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  chacarera: {
    name: 'Chacarera',
    origin: 'Argentina (Santiago del Estero)',
    description:
      "Chacarera is a traditional Argentine rural dance rhythm. Typically written in a complex 3/4 and 6/8 polymetric feel, it is driven by the Bombo Legüero's deep wooden shell rim-shots and heavy leather skin thuds.",
    songs: [
      {
        name: 'La Chacarera del Violin',
        artist: 'Néstor Garnica',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  beguine: {
    name: 'Beguine',
    origin: 'Martinique / Guadeloupe',
    description:
      'The Beguine is a slow, sensual, syncopated ballroom rhythm that emerged in the French Caribbean during the 1930s. It beautifully blends traditional African-Caribbean drums with classical French chamber instrumentation.',
    songs: [
      {
        name: 'Begin the Beguine',
        artist: 'Cole Porter',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  keharwa: {
    name: 'Keharwa Tala',
    description:
      'Keharwa is a widely popular 8-beat cycle (tala) in Indian light classical, folk, and film music. Played on the Tabla, it features a symmetrically split 4-4 syncopation that gives it a catchy, flowing bounce.',
    songs: [
      {
        name: 'Mast Qalandar',
        artist: 'Nusrat Fateh Ali Khan',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  maqsum: {
    name: 'Maqsum',
    description:
      "Maqsum is the most common 8-beat rhythmic cycle in modern and traditional Middle Eastern music. Represented by the beat structure 'Dum-Tak-Tak-Dum-Tak', it serves as the backbone of Arabic pop and classical belly dance.",
    songs: [
      {
        name: 'Ya Rayah',
        artist: 'Rachid Taha',
        spotify: 'true',
        apple: 'true'
      },
      {
        name: 'Habibi Ya Nour El Ain',
        artist: 'Amr Diab',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  candombe: {
    name: 'Candombe',
    description:
      'Candombe is an Afro-Uruguayan music style based on three drum sizes (Chico, Repique, Piano) struck with a stick and hand. Recognized by UNESCO as Intangible Cultural Heritage, its syncopated wood-and-skin clicks represent deep ancestral resistance.',
    songs: [
      {
        name: 'Candombe Para Gardel',
        artist: 'Ruben Rada',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  plena: {
    name: 'Plena',
    description:
      "Known as Puerto Rico's 'sung newspaper', Plena is a traditional syncopated rhythm played on three hand-held frame drums (panderos) called Primo, Seguidor, and Requinto. Its energetic 2-beat feel drives neighborhood stories.",
    songs: [
      {
        name: "Aña Pa' Mi Tambor",
        artist: 'Mon Rivera',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  sica: {
    name: 'Bomba Sica',
    description:
      "Sica is a traditional Bomba rhythm of Puerto Rico, played on wooden barrels (Barriles). It features a steady, grounding low heartbeat coupled with playful, fast syncopations from the high-pitched lead barrel ('subidor').",
    songs: [
      {
        name: 'Bomba Te Traigo Yo',
        artist: 'Ismael Rivera',
        spotify: 'true',
        apple: 'true'
      }
    ]
  },
  mechanical_keyboard: {
    name: '⌨️ Mechanical Keyboard',
    origin: 'Global / Digital Workplace',
    description:
      'A high-performance mechanical typing keyboard, characterized by physical tactile switches beneath each key. In modern cyberpunk, lofi, and ambient electronic music, the acoustic signatures of specific switches (like tactile clicky blues or linear reds) are captured, sampled, and sequenced as highly precise, organic high-frequency percussion elements.',
    performers: [
      { name: 'Lofi Girl', spotify: 'true', apple: 'true' },
      { name: 'Keychron Symphony', spotify: 'true', apple: 'true' }
    ],
    songs: [{ name: 'Code Rain', artist: 'Hacker FM', spotify: 'true', apple: 'true' }]
  },
  synsonics_drums: {
    name: '🎛️ Synsonics Drums',
    origin: 'United States (Mattel, 1981)',
    description:
      'An iconic 1981 retro toy drum synthesizer designed by Mattel. It allowed users to play electronic drum sounds (kick, snare, low/high toms, and cymbal) using sticks or internal trigger buttons. Renowned in early synth-pop, post-punk, and lo-fi garage rock for its gritty, charming 8-bit analog modeling and vintage synthetic punch.',
    performers: [{ name: 'Mattel Retro Ensemble', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Toybox Pop', artist: 'The Synsonics', spotify: 'true', apple: 'true' }]
  },
  hydraulic_piston: {
    name: '⚙️ Hydraulic Piston',
    origin: 'Industrial Revolution / Modern Factories',
    description:
      'An industrial pneumatic machine cylinder driven by liquid or air pressure. In industrial techno, noise music, and cyberpunk film soundtracks, the heavy metallic stomps, lock gear clicks, and pressurized steam exhaust hisses are processed and sequenced into repetitive, mechanical percussive grooves.',
    performers: [{ name: 'Einstürzende Neubauten', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Industrial Devolution', artist: 'Heavy Machinery', spotify: 'true', apple: 'true' }]
  },
  bop_it: {
    name: '🔴 Bop It!',
    origin: 'United States (Hasbro, 1996)',
    description:
      'An iconic handheld audio game introduced by Hasbro in 1996. The toy instructs players to perform physical actions ("Bop It", "Twist It", "Pull It", "Shout It") in increasingly rapid successions. Its whimsical, spring-loaded mechanical sound effects have been sampled by progressive house, glitch-hop, and toy-pop producers as playful micro-percussion hooks.',
    performers: [{ name: 'Hasbro Sound Design Team', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Bop It Beats', artist: 'Rhythm Toy Collective', spotify: 'true', apple: 'true' }]
  },
  moo_box: {
    name: '🐮 Moo Box',
    origin: 'Germany / France (Late 19th Century)',
    description:
      'A classic mechanical toy tin, also known as a cow-sound can (boîte à meuh). When inverted, a gravity-driven weighted bellows slides across a metallic reed inside a perforated cylinder, releasing a charming, pitch-bending bovine cry. In avant-garde and toy-pop music, it is used for quirky, acoustic sound design accents.',
    performers: [{ name: 'Toy Symphony Pioneers', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Bovine Blues', artist: 'Tin Can Orchestra', spotify: 'true', apple: 'true' }]
  },
  pakhavaj: {
    name: '🥁 Pakhavaj',
    origin: 'North India',
    description:
      "A double-headed, barrel-shaped wooden drum from North India. The primary percussion instrument for Dhrupad, India's oldest surviving classical vocal tradition, it is the ancestor of the mridangam and tabla. Its left bass head is coated in temporary wheat dough to produce deep, pitch-bendable open bass resonances, while the right treble head yields highly clear, piercing rim slaps.",
    performers: [
      { name: 'Pandit Gopal Das', spotify: 'true', apple: 'true' },
      { name: 'Bhavani Shankar', spotify: 'true', apple: 'true' }
    ],
    songs: [{ name: 'Dhrupad Tala Jugalbandi', artist: 'Bhavani Shankar', spotify: 'true', apple: 'true' }]
  },
  binzasara: {
    name: '🎋 Binzasara',
    origin: 'Japan (Heian Period)',
    description:
      'A traditional Japanese percussion instrument made from dozens of small, rectangular wooden plates strung together with a cord. By gripping the handles at each end and rippling the slats in a wave-like snapping motion, players create a domino-like rolling friction cascade. Historically used in kabuki theater, Shinto rituals, and Dengaku folk festival music.',
    performers: [{ name: 'Japanese Traditional Folk Ensemble', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Dengaku Festival Processional', artist: 'Shinto Ritual Players', spotify: 'true', apple: 'true' }]
  },
  caxixi: {
    name: '🌾 Caxixi',
    origin: 'West Africa / Brazil',
    description:
      'A flat-bottomed woven wicker shaker filled with seeds, small pebbles, or beads. Handcrafted with a calabash gourd bottom, it produces two highly contrasting tones: a soft, dry wicker rattle when shaken horizontally, and a sharp, metallic gourd crack when shaken vertically. It is traditionally played alongside the berimbau in Afro-Brazilian Capoeira music.',
    performers: [{ name: 'Naná Vasconcelos', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Capoeira Bahia Groove', artist: 'Grupo Capoeira Brasil', spotify: 'true', apple: 'true' }]
  },
  slap_tubes: {
    name: '🌬️ Slap Tubes',
    origin: 'Modern / North America',
    description:
      'Slap Tubes (or PVC pipe instruments) are pitched melodic percussion instruments constructed from varying lengths of hollow plastic plumbing pipes. Sound is produced by striking the open end of a pipe with a flat paddle or hand, compressing the internal air column to trigger a deep, punchy fundamental frequency with minimal decay. Popularized by alternative performance groups in the late 20th century, they represent a fusion of industrial materials, acoustic physics, and high-energy mallet performance.',
    performers: [{ name: 'Blue Man Group', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'PVC Instrument Jam', artist: 'Blue Man Group', spotify: 'true', apple: 'true' }]
  },
  whistle_drum: {
    name: '🦆 Whistle-Drum',
    origin: 'Ancient Mesoamerica / Clay Folk Art',
    description:
      'The Whistle-Drum (or clay whistling pot) combines clay vessel resonance with integrated whistle ports. Water inside the chamber shifts as the instrument is tipped or struck, pushing air through the whistle edge to create eerie, bird-like sliding glissandos and whistling chirps. Originating in Pre-Columbian cultures of Central and South America, these clay vessels were used for ceremonial communication, ritual signaling, and animal mimicry.',
    performers: [{ name: 'Esteban Valdivia', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Pre-Columbian Clay Echoes', artist: 'Ceremonial Wind Ensemble', spotify: 'true', apple: 'true' }]
  },
  singing_bowl: {
    name: '🥣 Singing Bowl',
    origin: 'Tibet / Nepal / Himalayas',
    description:
      'A Singing Bowl is an inverted metal bell played by striking or rubbing its rim with a wood, leather, or suede-wrapped mallet. This friction excites the bell wall, producing a rich, enveloping fundamental tone accompanied by multiple harmonious overtones that swirl in a slow, hypnotic phase-cancellation decay. Traditionally used across the Himalayan region for meditation, Zen Buddhist rituals, and sound therapy, they create a peaceful, spatial acoustic environment.',
    performers: [{ name: 'Karma Moffett', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Himalayan Sound Healing', artist: 'Karma Moffett', spotify: 'true', apple: 'true' }]
  },
  quijada: {
    name: '💀 Quijada',
    origin: 'Peru / Afro-Peruvian Folk Roots',
    description:
      'The Quijada de Burro is a unique percussion instrument made from the dried, cured jawbone of a donkey, mule, or horse. The teeth are left loose within their dry sockets; when the side of the jawbone is struck with a fist, the teeth rattle in their sockets to produce a sharp, buzzing wood-like splash with a hollow rattle. Originating from African slaves in coastal Peru, it is a foundational pillar of Landó, Festejo, and Afro-Peruvian folk music.',
    performers: [{ name: 'Lalo Izquierdo', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Toro Mata', artist: 'Peru Negro', spotify: 'true', apple: 'true' }]
  },
  water_canister: {
    name: '💧 Water Canister',
    origin: 'Modern / Universal',
    description:
      'The Water Canister is an improvised street-percussion favorite made from thick, semi-flexible plastic water jugs or containers. By striking different regions of the hollow container, performers elicit deep, punchy low-end slaps. Shifting the water level internally or squeezing the sides dynamically compresses the interior air pocket, shifting the acoustic column pitch to create liquid-like glissandos and bubbly, wet-sounding gurgles.',
    performers: [{ name: 'Street Drum Corps', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Canister Beats', artist: 'Industrial Slap Collective', spotify: 'true', apple: 'true' }]
  },
  vintage_cash_register: {
    name: '💵 Cash Register',
    origin: 'United States (Late 19th Century)',
    description:
      'The Vintage Cash Register is a heavy mechanical brass and iron business machine from the late 1800s and early 1900s. Operating the machine involves plunging heavy bronze price keys, cranking side levers, and triggering spring-loaded coin drawers. Its hallmark sound is a high-pitched, crystal-clear internal brass bell ring that sounds on every transaction. Famously used by progressive rock and pop producers to symbolize commerce and consumerism.',
    performers: [{ name: 'Pink Floyd Sound Design', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Money', artist: 'Pink Floyd', spotify: 'true', apple: 'true' }]
  },
  geiger_counter: {
    name: '☢️ Geiger Counter',
    origin: 'Germany (Early 20th Century)',
    description:
      'A Geiger Counter is an electronic instrument used for detecting and measuring ionizing radiation. It produces a sharp, transient acoustic "click" every time a radioactive particle passes through its internal gas-filled tube. At higher radiation levels, these clicks coalesce into a dense, chaotic, white-noise-like swarm of stochastic crackles. It has been adopted by experimental, ambient, and industrial electronic musicians to provide gritty, microscopic textures.',
    performers: [{ name: 'Kraftwerk', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Radioactivity', artist: 'Kraftwerk', spotify: 'true', apple: 'true' }]
  },
  centrifugal_bullroarer: {
    name: '🌀 Bullroarer',
    origin: 'Ancient Australia / Global Indigenous',
    description:
      'The Bullroarer is an ancient ritual wind instrument consisting of a flat, aerodynamically carved wooden slat attached to a long braided cord. By swinging the wooden slat in a large circle through the air, the slat rotates rapidly along its longitudinal axis, shearing the air to produce a deep, ghostly, pulsating roar that resembles wind or thunder. Used globally in sacred initiations, rain rituals, and long-distance acoustic signaling.',
    performers: [{ name: 'Aboriginal Didgeridoo Artists', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Voices of the Ancestors', artist: 'Holographic Aero Ensemble', spotify: 'true', apple: 'true' }]
  },
  newtons_cradle: {
    name: '🖲️ Newton Cradle',
    origin: 'Western Europe (17th Century Physics)',
    description:
      "Newton's Cradle is a classic tabletop physics demonstration device consisting of a series of identically sized, highly polished steel spheres suspended by light wires from a metal frame. Striking one end sphere initiates a sequence of elastic momentum transfers through the resting central spheres, throwing the opposite sphere out. Acoustically, it yields ultra-fast, perfectly synchronized metal-on-metal microsecond clacks and decaying skitters.",
    performers: [{ name: 'Mechanical Noise Pioneers', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Kinetic Waves', artist: 'Physics Sound Laboratory', spotify: 'true', apple: 'true' }]
  },
  slime_plop_box: {
    name: '🧪 Slime Plop Box',
    origin: 'Modern / Internet Culture',
    description:
      'The Slime Plop Box is an organic sound design generator leveraging highly viscous, gelatinous polymers. Manipulating slime inside an enclosed chamber generates unique suction-based sounds: deep suction plops, air-pocket pops, wet surface slaps, and stringy stretch textures. Heavily utilized in ASMR recordings, Foley sound design for films, and avant-garde microtonal electronic production to add squishy, visceral, organic accents.',
    performers: [{ name: 'ASMR Foley Artists', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Viscous Textures', artist: 'Polymer Foley Collective', spotify: 'true', apple: 'true' }]
  },
  talk_box: {
    name: '🗣️ Talk Box Toy',
    origin: 'United States (Mid-20th Century)',
    description:
      'The Talk Box Toy (such as the vintage Speak & Say or pull-string phonograph toys) utilizes a physical, hand-pulled string to wind a spring-governor mechanism. As the string retracts, an internal needle reads a grooved plastic disc, releasing a scratchy, lo-fi, highly mechanical analog voice or animal noise. It is celebrated by electro, toy-pop, and industrial artists for its nostalgic, glitchy, mechanical texture.',
    performers: [{ name: 'Daft Punk', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'Technologic', artist: 'Daft Punk', spotify: 'true', apple: 'true' }]
  },
  mouth_tube_synth: {
    name: '🖲️ Mouth Synth',
    origin: 'Modern / Experimental Synth',
    description:
      "The Mouth-Tube Synth (or Talk Box synthesizer) channels a high-frequency synthesizer carrier wave through a flexible plastic hose inserted into the performer's mouth cavity. By silently shaping their lips, tongue, and throat as if speaking, the performer filters the synthesizer's frequency spectrum using their own vocal tract. This introduces organic formant peaks, vowel glides (wah, ooh, ee), and human speech-like filters to raw electronic tones.",
    performers: [{ name: 'Roger Troutman', spotify: 'true', apple: 'true' }],
    songs: [{ name: 'More Bounce to the Ounce', artist: 'Zapp', spotify: 'true', apple: 'true' }]
  }
};

export const drumTags = {
  conga: { region: 'Caribbean', type: 'Hand', features: ['Tuned', 'Folk'] },
  bongo: { region: 'Caribbean', type: 'Hand', features: ['Tuned', 'Folk'] },
  djembe: { region: 'West Africa', type: 'Hand', features: ['Sacred', 'Folk'] },
  bata: { region: 'Caribbean', type: 'Hand', features: ['Sacred', 'Tuned'] },
  pandero: { region: 'Caribbean', type: 'Hand', features: ['Frame', 'Folk'] },
  barril: { region: 'Caribbean', type: 'Hand', features: ['Wood', 'Folk'] },
  bombo: { region: 'South America', type: 'Stick', features: ['Wood', 'Folk'] },
  tabla: { region: 'Asia', type: 'Hand', features: ['Tuned', 'Folk'] },
  darbuka: { region: 'Middle East', type: 'Hand', features: ['Folk'] },
  timbales: { region: 'Caribbean', type: 'Stick', features: ['Metal'] },
  cajon: { region: 'South America', type: 'Hand', features: ['Wood', 'Folk'] },
  candombe: { region: 'South America', type: 'Hand', features: ['Sacred', 'Folk'] },
  gwoka: { region: 'Caribbean', type: 'Hand', features: ['Folk'] },
  tanbou: { region: 'Caribbean', type: 'Hand', features: ['Folk'] },
  chinese: { region: 'Asia', type: 'Stick', features: ['Wood', 'Folk'] },
  daiko: { region: 'Asia', type: 'Stick', features: ['Sacred', 'Wood'] },
  bodhran: { region: 'Europe', type: 'Hand', features: ['Frame', 'Folk'] },
  talkingdrum: { region: 'West Africa', type: 'Hand', features: ['Tuned', 'Sacred'] },
  cuica: { region: 'South America', type: 'Hand', features: ['Folk'] },
  doira: { region: 'Middle East', type: 'Hand', features: ['Frame', 'Folk'] },
  uchiwadaiko: { region: 'Asia', type: 'Stick', features: ['Sacred', 'Frame'] },
  oceandrum: { region: 'Modern', type: 'Hand', features: ['Shaker', 'Effects'] },
  janggu: { region: 'Asia', type: 'Stick', features: ['Tuned', 'Folk'] },
  zabumba: { region: 'South America', type: 'Stick', features: ['Folk'] },
  mridangam: { region: 'Asia', type: 'Hand', features: ['Tuned', 'Folk'] },
  udu: { region: 'Asia', type: 'Hand', features: ['Clay', 'Effects'] },
  thunderdrum: { region: 'Modern', type: 'Hand', features: ['Shaker', 'Effects'] },
  waterdrums: { region: 'Modern', type: 'Hand', features: ['Effects', 'Folk'] },
  vibraslap: { region: 'Modern', type: 'Hand', features: ['Metal', 'Effects'] },
  flexatone: { region: 'Modern', type: 'Hand', features: ['Metal', 'Effects'] },
  waterphone: { region: 'Modern', type: 'Hand', features: ['Metal', 'Effects'] },
  handpan: { region: 'Modern', type: 'Hand', features: ['Metal', 'Tuned'] },
  steelpan: { region: 'Caribbean', type: 'Stick', features: ['Metal', 'Tuned'] },
  ghatam: { region: 'Asia', type: 'Hand', features: ['Clay', 'Folk'] },
  daf: { region: 'Middle East', type: 'Hand', features: ['Frame', 'Sacred'] },
  riq: { region: 'Middle East', type: 'Hand', features: ['Frame', 'Folk'] },
  surdo: { region: 'South America', type: 'Stick', features: ['Folk'] },
  pandeiro: { region: 'South America', type: 'Hand', features: ['Frame', 'Folk'] },
  tamborim: { region: 'South America', type: 'Stick', features: ['Folk'] },
  repinique: { region: 'South America', type: 'Stick', features: ['Folk'] },
  bendir: { region: 'Middle East', type: 'Hand', features: ['Frame', 'Folk'] },
  davul: { region: 'Middle East', type: 'Stick', features: ['Folk'] },
  ashiko: { region: 'West Africa', type: 'Hand', features: ['Folk'] },
  dunun: { region: 'West Africa', type: 'Stick', features: ['Tuned', 'Folk'] },
  teponaztli: { region: 'North America', type: 'Stick', features: ['Wood', 'Sacred'] },
  snare_drum: { region: 'Europe', type: 'Stick', features: ['Metal'] },
  shekere: { region: 'West Africa', type: 'Hand', features: ['Shaker', 'Effects'] },
  kanjira: { region: 'Asia', type: 'Hand', features: ['Frame', 'Tuned'] },
  tammorra: { region: 'Europe', type: 'Hand', features: ['Frame', 'Folk'] },
  framed_rumbla: { region: 'Modern', type: 'Hand', features: ['Frame', 'Effects'] },
  gran_cassa: { region: 'Europe', type: 'Stick', features: ['Metal'] },
  lions_roar: { region: 'Asia', type: 'Hand', features: ['Effects'] },
  chocalho: { region: 'South America', type: 'Hand', features: ['Metal', 'Shaker'] },
  alfaia: { region: 'South America', type: 'Stick', features: ['Wood', 'Folk'] },
  log_drum: { region: 'Mesoamerica', type: 'Stick', features: ['Wood'] },
  temple_blocks: { region: 'Asia', type: 'Stick', features: ['Wood'] },
  frog_rasp: { region: 'Southeast Asia', type: 'Hand', features: ['Wood', 'Effects'] },
  spring_drum: { region: 'Modern', type: 'Hand', features: ['Effects'] },
  thongophone: { region: 'Modern', type: 'Stick', features: ['Tuned', 'Effects'] },
  gubguba: { region: 'Asia', type: 'Hand', features: ['Effects', 'Folk'] },
  cabasa: { region: 'Modern', type: 'Hand', features: ['Metal', 'Shaker'] },
  rainstick: { region: 'South America', type: 'Hand', features: ['Shaker', 'Effects'] },
  kokiriko: { region: 'Asia', type: 'Hand', features: ['Wood', 'Effects'] },
  guiro: { region: 'Caribbean', type: 'Hand', features: ['Effects', 'Folk'] },
  spoons_bones: { region: 'Europe', type: 'Hand', features: ['Folk'] },
  washboard: { region: 'North America', type: 'Hand', features: ['Metal', 'Folk'] },
  friction_drum: { region: 'Europe', type: 'Hand', features: ['Effects'] },
  kundu: { region: 'Oceania', type: 'Hand', features: ['Folk', 'Wood'] },
  tar_drum: { region: 'Middle East', type: 'Hand', features: ['Frame'] },
  gome: { region: 'West Africa', type: 'Hand', features: ['Wood', 'Folk'] },
  boomwhackers: { region: 'Modern', type: 'Stick', features: ['Tuned', 'Effects'] },
  tank_drum: { region: 'Modern', type: 'Stick', features: ['Metal', 'Tuned'] },
  bell_tree: { region: 'Modern', type: 'Stick', features: ['Metal', 'Effects'] },
  mark_tree: { region: 'Modern', type: 'Hand', features: ['Metal', 'Effects'] },
  slide_whistle: { region: 'Modern', type: 'Hand', features: ['Effects'] },
  ratchet: { region: 'Europe', type: 'Hand', features: ['Wood', 'Effects'] },
  angklung: { region: 'Asia', type: 'Hand', features: ['Wood', 'Folk'] },
  jaw_harp: { region: 'Modern', type: 'Hand', features: ['Metal', 'Effects'] },
  timpani: { region: 'Europe', type: 'Stick', features: ['Metal', 'Tuned'] },
  kotsuzumi: { region: 'Asia', type: 'Hand', features: ['Sacred', 'Wood'] },
  dhol: { region: 'Asia', type: 'Stick', features: ['Wood', 'Folk'] },
  agogo: { region: 'South America', type: 'Stick', features: ['Metal', 'Folk'] },
  claves: { region: 'Caribbean', type: 'Hand', features: ['Wood', 'Folk'] },
  mechanical_keyboard: { region: 'Modern', type: 'Hand', features: ['Effects'] },
  synsonics_drums: { region: 'Modern', type: 'Stick', features: ['Effects', 'Toy'] },
  hydraulic_piston: { region: 'Modern', type: 'Hand', features: ['Metal', 'Effects'] },
  bop_it: { region: 'Modern', type: 'Hand', features: ['Effects', 'Toy'] },
  moo_box: { region: 'Europe', type: 'Hand', features: ['Effects', 'Toy'] },
  pakhavaj: { region: 'Asia', type: 'Hand', features: ['Tuned', 'Folk'] },
  binzasara: { region: 'Asia', type: 'Hand', features: ['Wood', 'Effects'] },
  caxixi: { region: 'South America', type: 'Hand', features: ['Shaker', 'Folk'] },
  slap_tubes: { region: 'North America', type: 'Stick', features: ['Tuned', 'Effects'] },
  whistle_drum: { region: 'Mesoamerica', type: 'Hand', features: ['Clay', 'Effects'] },
  singing_bowl: { region: 'Asia', type: 'Hand', features: ['Metal', 'Effects'] },
  quijada: { region: 'South America', type: 'Hand', features: ['Folk', 'Effects'] },
  water_canister: { region: 'Modern', type: 'Hand', features: ['Effects'] },
  vintage_cash_register: { region: 'Modern', type: 'Hand', features: ['Metal', 'Effects'] },
  geiger_counter: { region: 'Modern', type: 'Hand', features: ['Effects'] },
  centrifugal_bullroarer: { region: 'Oceania', type: 'Hand', features: ['Wood', 'Effects'] },
  newtons_cradle: { region: 'Modern', type: 'Hand', features: ['Metal', 'Effects'] },
  slime_plop_box: { region: 'Modern', type: 'Hand', features: ['Effects'] },
  talk_box: { region: 'Modern', type: 'Hand', features: ['Effects', 'Toy'] },
  mouth_tube_synth: { region: 'Modern', type: 'Hand', features: ['Effects'] }
};
