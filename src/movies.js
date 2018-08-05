const actionMovies = {
    'inception': {
        name: 'Inception',
        year: '2010',
        description: 'A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
        director: 'Christopher Nolan',
        stars: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Ken Watanabe',
        rating: 'PG-13',
        runtime: '148'
    },
    'gladiator': {
        name: 'Gladiator',
        year: '2000',
        description: 'When a Roman General is betrayed, and his family murdered by an emperor\'s corrupt son, he comes to Rome as a gladiator to seek revenge.',
        director: 'Ridley Scott',
        stars: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed',
        rating: 'R',
        runtime: '155'
    },
    'raiders_of_the_lost_ark': {
        name: 'Raiders of the Lost Ark',
        year: '1981',
        description: 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler\'s Nazis can obtain its awesome powers.',
        director: 'Steven Spielberg',
        stars: 'Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies',
        rating: 'PG',
        runtime: '115'
    },
    'mission_impossible_fallout': {
        name: 'Mission: Impossible - Fallout',
        year: '2018',
        description: 'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.',
        director: 'Christopher McQuarrie',
        stars: ' Tom Cruise, Henry Cavill, Ving Rhames, Simon Pegg',
        rating: 'PG-13',
        runtime: '147'
    },
    'die_hard': {
        name: 'Die Hard',
        year: '1998',
        description: 'John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles.',
        director: 'John McTiernan',
        stars: ' Bruce Willis, Alan Rickman, Bonnie Bedelia, Reginald VelJohnson',
        rating: 'R',
        runtime: '132'
    }
};

const dramaMovies = {
    'shawshank_redemption': {
        name: 'The Shawshank Redemption',
        year: '1994',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        director: 'Frank Darabont',
        stars: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        rating: 'R',
        runtime: '142'
    },
    'the_godfather': {
        name: 'The Godfather',
        year: '1972',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        director: 'Francis Ford Coppola',
        stars: 'Marlon Brando, Al Pacino, James Caan, Diane Keaton',
        rating: 'R',
        runtime: '175'
    },
    'pulp_fiction': {
        name: 'Pulp Fiction',
        year: '1994',
        description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        director: 'Quentin Tarantino',
        stars: 'John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis',
        rating: 'R',
        runtime: '154'
    },
    'schindlers_list': {
        name: 'Schindler\'s List',
        year: '1993',
        description: 'In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.',
        director: 'Steven Spielberg',
        stars: 'Liam Neeson, Ralph Fiennes, Ben Kingsley, Caroline Goodall',
        rating: 'R',
        runtime: '195'
    },
    'forrest_gump': {
        name: 'Forrest Gump',
        year: '1994',
        description: 'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.',
        director: 'Robert Zemeckis',
        stars: 'Tom Hanks, Robin Wright, Gary Sinise, Sally Field',
        rating: 'PG-13',
        runtime: '142'
    }
};

const comedyMovies = {
    'this_is_spinal_tap': {
        name: 'This Is Spinal Tap',
        year: '1984',
        description: 'Spinal Tap, one of England\'s loudest bands, is chronicled by film director Marty DiBergi on what proves to be a fateful tour.',
        director: 'Rob Reiner',
        stars: 'Rob Reiner, Michael McKean, Christopher Guest, Kimberly Stringer',
        rating: 'R',
        runtime: '82'
    },
    'office_space': {
        name: 'Office Space',
        year: '1999',
        description: 'Three company workers who hate their jobs decide to rebel against their greedy boss.',
        director: 'Mike Judge',
        stars: 'Ron Livingston, Jennifer Aniston, David Herman, Ajay Naidu',
        rating: 'R',
        runtime: '89'
    },
    'the_lego_movie': {
        name: 'The Lego Movie',
        year: '2014',
        description: 'An ordinary LEGO construction worker, thought to be the prophesied as "special", is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.',
        director: 'Phil Lord, Christopher Miller',
        stars: ' Chris Pratt, Will Ferrell, Elizabeth Banks, Will Arnett',
        rating: 'PG',
        runtime: '100'
    },
    'south_park': {
        name: 'South Park: Bigger, Longer & Uncut',
        year: '1999',
        description: 'When Cartman and his friends go see an R rated movie, they start cursing and their parents think that Canada is to blame.',
        director: 'Trey Parker',
        stars: 'Trey Parker, Matt Stone, Mary Kay Bergman, Isaac Hayes',
        rating: 'R',
        runtime: '81'
    },
    'the_hangover': {
        name: 'The Hangover',
        year: '2009',
        description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
        director: 'Todd Phillips',
        stars: 'Zach Galifianakis, Bradley Cooper, Justin Bartha, Ed Helms',
        rating: 'R',
        runtime: '100'
    }
};

const sciFiMovies = {
    'avengers_infinity_war': {
        name: 'Avengers: Infinity War',
        year: '2018',
        description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        director: 'Anthony Russo, Joe Russo',
        stars: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans',
        rating: 'PG-13',
        runtime: '149'
    },
    'the_matrix': {
        name: 'The Matrix',
        year: '1999',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        director: 'Lana Wachowski, Lilly Wachowski',
        stars: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
        rating: 'R',
        runtime: '136'
    },
    'alien': {
        name: 'Alien',
        year: '1979',
        description: 'After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.',
        director: 'Ridley Scott',
        stars: 'Sigourney Weaver, Tom Skerritt, John Hurt, Veronica Cartwright',
        rating: 'R',
        runtime: '116'
    },
    'terminator_2': {
        name: 'Terminator 2',
        year: '1991',
        description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.',
        director: 'James Cameron',
        stars: 'Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick',
        rating: 'R',
        runtime: '137'
    },
    '2001_a_space_odyssey': {
        name: '2001: A Space Odyssey',
        year: '1968',
        description: 'Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer HAL 9000, sets off on a quest.',
        director: 'Stanley Kubrick',
        stars: 'Keir Dullea, Gary Lockwood, William Sylvester, Daniel Richter',
        rating: 'G',
        runtime: '149'
    }
};

const fantasyMovies = {
    'lord_of_the_rings_return_of_the_king': {
        name: 'The Lord of the Rings: The Return of the King',
        year: '2003',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        director: 'Peter Jackson',
        stars: 'Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom',
        rating: 'PG-13',
        runtime: '201'
    },
    'harry_potter_and_the_deathly_hallows_2': {
        name: 'Harry Potter and the Deathly Hallows: Part 2',
        year: '2011',
        description: 'Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.',
        director: 'David Yates',
        stars: 'Daniel Radcliffe, Emma Watson, Rupert Grint, Michael Gambon',
        rating: 'PG-13',
        runtime: '113'
    },
    'the_princess_bride': {
        name: 'The Princess Bride',
        year: '1987',
        description: 'While home sick in bed, a young boy\'s grandfather reads him a story called The Princess Bride.',
        director: 'Rob Reiner',
        stars: 'Cary Elwes, Mandy Patinkin, Robin Wright, Chris Sarandon',
        rating: 'PG',
        runtime: '98'
    },
    'pirates_of_the_caribbean_curse_of_the_black_pearl': {
        name: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        year: '2003',
        description: 'Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governor\'s daughter, from Jack\'s former pirate allies, who are now undead.',
        director: 'Gore Verbinski',
        stars: 'Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley',
        rating: 'PG-13',
        runtime: '143'
    },
    'the_hobbit_an_unexpected_journey': {
        name: 'The Hobbit: An Unexpected Journey',
        year: '2012',
        description: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.',
        director: 'Peter Jackson',
        stars: 'Martin Freeman, Ian McKellen, Richard Armitage, Andy Serkis',
        rating: 'PG-13',
        runtime: '169'
    }
};

export default {
    action: actionMovies,
    drama: dramaMovies,
    comedy: comedyMovies,
    scifi: sciFiMovies,
    fantasy: fantasyMovies
};
