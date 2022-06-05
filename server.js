const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


const rappers = {
 'nicki minaj':{
     'lyric': "Don't worry 'bout me, and who I fire \n I get what I desire, it's my empire \n And yes, I call the shots, I am the umpire \n I sprinkle holy water, upon a vampire \n In this very moment, I'm king \n In this very moment, I slayed Goliath with a sling \n This very moment I bring \n Put it on everything, that I will retire with the ring",
     'song':'Moment 4 Life',
     'name': 'Onika Tanya Maraj',
     'location': 'Queens, New York',
     'dob': 'December 11, 1982',
     'age': '39',
     'video': 'https://female-rappers.herokuapp.com/getMovie/nicki'
 },
 'cardi b': {
    'lyric': "Had to talk to God, dropped down, and prayed for this \n To my surprise, He replied, said, 'You made for this' \n I seen the car I wanted, then I went and paid for it, cash cash \n Hit the Tay-K, I hit the race, hit the dash dash \n That's when they came for me on Twitter with the backlash",
    'song': 'Best Life',
    'name': 'Belcalis Marlenis Almánzar',
    'location': 'The Bronx, New York',
    'dob': 'October 11, 1992',
    'age': '29', //make js do calc
    'video': 'https://female-rappers.herokuapp.com/getMovie/cardi'
},
'megan thee stallion':{
    'lyric': "I'm the hood Mona Lisa, break a nigga into pieces \n Had to X some cheesy niggas out my circle like a pizza (yeah)",
    'song':'Savage',
    'name': 'Megan Jovon Ruth Pete',
    'location': 'Houston, TX',
    'dob': 'February 15, 1995',
    'age': '27',
    'video': 'https://female-rappers.herokuapp.com/getMovie/megan'
},
'asian doll':{
    'lyric': "Ten toes down, I'ma tell it how it go (gang) \n I'ma tell it what it is, bad bitch, no joke (Doll) \n You not like that, why you cappin' and sh*t? (Cap) \n All that sh*t whack, why you rappin' and sh*t? (You whack)",
    'song':'Nunnadet Sh*t',
    'name': 'Misharron Jermeisha Allen',
    'location': 'Dallas, TX',
    'dob': 'December 7, 1996',
    'age': '26',
    'video': 'https://female-rappers.herokuapp.com/getMovie/asian'
},
'bia':{
    'lyric': "I can't wear the shit you bitches wear 'cause it's cheap to me \n It's some money at my table, grab a seat with me \n Cost a ticket just to cover all my legal fees \n I don't hang with jealous b*tches, that's a weak disease",
    'song':'Whole Lotta Money',
    'name': 'Bianca Miquela Landrau',
    'location': 'Medford, MA',
    'dob': 'August 16, 1991',
    'age': '30',
    'video': 'https://female-rappers.herokuapp.com/getMovie/bia'
},
'latto':{
    'lyric': "I like what I see \n A boss like you need a boss like me \n Daddy from the streets, so he move low-key \n Tryna rock that mic' like karaoke",
    'song':'Big Energy',
    'name': 'Alyssa Michelle Stephens',
    'location': 'Columbus, OH',
    'dob': 'December 22, 1998',
    'age': '23',
    'video': 'https://female-rappers.herokuapp.com/getMovie/latto'
},
'lil kim':{
    'lyric': "While you tryin to catch Sea Breeze, I'm in the PV's \n All chrome D3's, decked out TV's \n CD's with crazy bass, keep my lady laced \n Don't be fooled by the baby face",
    'song':'Crush on You',
    'name': 'Kimberly Denise Jones',
    'location': 'Brooklyn, New York City',
    'dob': 'July 11, 1974',
    'age': '47',
    'video': 'https://female-rappers.herokuapp.com/getMovie/kim'
},
'trina':{
    'lyric': "I aint lookin atchu no more \n I'm lookin past you",
    'song':'Here We Go Again',
    'name': 'Katrina Laverne Taylor',
    'location': 'Miami, FL',
    'dob': 'December 3, 1974',
    'age': '47',
    'video': 'https://female-rappers.herokuapp.com/getMovie/trina'
},
'azealia banks':{
    'lyric': "I get the grams and the hundreds \n And the shoe with the bleed \n And fit the grams and the hundreds \n Send the Lou to the V \n High class, no school, the tuition is free",
    'song':'1991',
    'name': 'Azealia Amanda Banks',
    'location': 'Harlem, New York, NY',
    'dob': 'May 31, 1991',
    'age': '31',
    'video': 'https://female-rappers.herokuapp.com/getMovie/azealia'
},
'flo milli':{
    'lyric': "Yeah, they mad, I'm on top and I'm chilling \n Got 'em look up to me like these h*es is my children (I just shit on 'em) \n Fashion week, I made a killing \n Numbers goin' up, breakin' the charts on a billion",
    'song':'May I',
    'name': 'Tamia Monique Carter',
    'location': 'Mobile, AL',
    'dob': 'January 9, 2000',
    'age': '22',
    'video': 'https://female-rappers.herokuapp.com/getMovie/flo'
},
'eve':{
    'lyric': "Walk in, demandin' all eyes, baby, here I am (You know) \n Ain't a shame in my frame and I know you're watchin' \n Puttin' on a show for you, pop, and I ain't stoppin' (You know) \n Lot of action in your corner, yeah, you gonna do \n Only thing to make it better though is me with you (You know it)",
    'song':'Gangsta Lovin',
    'name': 'Eve Jihan Cooper',
    'location': 'Philadelphia, PA',
    'dob': 'November 10, 1978',
    'age': '43',
    'video': 'https://female-rappers.herokuapp.com/getMovie/eve'
},
'missy elliot':{
    'lyric': "I'm at your house around midnight (midnight), don't fall asleep \n It'll just be me, me, me on a late night creep \n I'ma show you thangs that you can't believe \n Jump in this b-e-d, and won't you sock it to me?",
    'song':'Sock It To Me',
    'name': 'Melissa Arnette Elliott',
    'location': 'Portsmouth, VA',
    'dob': 'July 1, 1971',
    'age': '51',
    'video': 'https://female-rappers.herokuapp.com/getMovie/missy'
},
'da brat':{
    'lyric': "Now best believe I got more Trix up my sleeve \n Then that silly rabbit",
    'song':"Sittin' on Top of the World",
    'name': 'Shawntae Harris',
    'location': 'Chicago, IL',
    'dob': 'April 14, 1974',
    'age': '48',
    'video': 'https://female-rappers.herokuapp.com/getMovie/brat'
},
'doja cat':{
    'lyric': "Don't ever think you ain't hella these niggas dream girl \n They wanna pit us against each other when we succeedin' for no reasons \n They wanna see us end up like we Regina on Mean Girls \n Princess or queen, tomboy or king (yeah) \n You've heard a lot, you've never seen (nah) \n Mother Earth, Mother Mary rise to the top \n Divine feminine, I'm feminine (why?)",
    'song':'Woman',
    'name': 'Amala Ratna Zandile Dlamini',
    'location': 'Los Angeles, CA',
    'dob': 'October 21, 1995',
    'age': '26',
    'video': 'https://female-rappers.herokuapp.com/getMovie/doja'
},
'kash doll':{
    'lyric': "Huh, what could you prove to me? \n What could you do for me that I can't do for me? \n Look, I ain't losing you, shit, you losing me",
    'song':'Single & Happy',
    'name': 'Arkeisha Antoinette Knight',
    'location': 'Detroit, MI',
    'dob': 'March 14, 1992',
    'age': '30',
    'video': 'https://female-rappers.herokuapp.com/getMovie/kash'
},
'left eye':{
    'lyric': "Dreams are hopeless aspirations in hopes of coming true \n Believe in yourself, the rest is up to me and you",
    'song':'Waterfalls',
    'name': 'Lisa Lopes',
    'location': 'Philadelphia, PA',
    'dob': 'May 27, 1971',
    'age': '51',
    'video': 'https://female-rappers.herokuapp.com/getMovie/tlc'
},
'saweetie':{
    'lyric': "Beep-beep, is that my bestie in a Tessie? \n Fresh blow out, skin on tan, ooh, she ready \n B*tch, you look goodt, with a T at the end \n I'ma hype her every time, that my motherfuckin' friend",
    'song':'Best Friend',
    'name': 'Diamonté Quiava Valentin Harper',
    'location': 'Santa Clara, CA',
    'dob': 'July 2, 1993',
    'age': '29',
    'video': 'https://female-rappers.herokuapp.com/getMovie/saweetie'
},
'remy ma':{
    'lyric': "Just left the big house to a bigger house \n Ain't have a girlfriend, but the bitch is out",
    'song':'All The Way Up',
    'name': 'Reminisce Mackie',
    'location': 'Castle Hill, New York, NY',
    'dob': 'May 30, 1980',
    'age': '42',
    'video': 'https://female-rappers.herokuapp.com/getMovie/remy'
},
'foxy brown':{
    'lyric': "'Cross the room throwin' signals I'm throwin' 'em back \n Flirt-in cause I, digs you like that \n Peep baby boy style, hopin' we match \n You sent me Crown Royale with a note attached \n It said, 'You look like the type that, know what you like' \n I could tell by the jewels you go for the ice",
    'song':'Get Me Home',
    'name': 'Inga DeCarlo Fung Marchand',
    'location': 'New York, NY',
    'dob': 'September 6, 1978',
    'age': '43',
    'video': 'https://female-rappers.herokuapp.com/getMovie/foxy'
},
'lauryn hill':{
    'lyric': "The second verse is dedicated to the men \n More concerned with his rims and his Tims than his women \n Him and his men come in the club like hooligans \n Don't care who they offend popping yang like you got yen",
    'song':'Doo Wop (That Thing)',
    'name': 'Lauryn Noelle Hill',
    'location': 'Newark, NJ',
    'dob': 'May 26, 1975',
    'age': '47',
    'video': 'https://female-rappers.herokuapp.com/getMovie/lauryn'
},
'queen latifah':{
    'lyric': "The ladies will kick it the rhyme that is wicked \n Those that don't know how to be pros get evicted \n A woman can bear you break you take you \n Now it's time to rhyme can you relate to",
    'song':'Ladies First',
    'name': 'Dana Elaine Owens',
    'location': 'Newark, NJ',
    'dob': 'March 18, 1970',
    'age': '52',
    'video': 'https://female-rappers.herokuapp.com/getMovie/queen'
},
'mc lyte':{
    'lyric': "Beware of the stare when I step into peace \n I come in peace but I got shit that need to be released \n Now who from the chosen shall I choose? \n Yeah, now you wish you was in his shoes",
    'song':"Keep On, Keepin' On",
    'name': 'Lana Michele Moorer',
    'location': "Brooklyn, NY",
    'dob': 'October 11, 1970',
    'age': '51',
    'video': 'https://female-rappers.herokuapp.com/getMovie/mc'
},
'tierra whack':{
    'lyric': "I must be a criminal (Yo) \n Keep your talkin' minimal (Yo) \n 'Cause most of it's subliminal (Yo) \n And it'll put you in a critical (Yo, yo)",
    'song':'Unemployed',
    'name': 'Tierra Helena Whack',
    'location': 'Philadelphia, PA',
    'dob': 'Aug 11, 1995',
    'age': '26',
    'video': 'https://female-rappers.herokuapp.com/getMovie/tierra'
},
'city girls':{
    'lyric': "I ain't got time for you fake a*s hoes \n Talkin' all loud in them fake a*s clothes \n Fake ass shoes match that fake a*s gold \n I'm the realest bitch ever to you snake a*s h*es",
    'song':'Act Up',
    'name': 'Yung Miami (born Caresha Romeka Brownlee) and JT (born Jatavia Shakara Johnson',
    'location': 'Miami, FL',
    'dob': 'February 1994 (Yung Miami) and December 1992 (JT)',
    'age': '28 and 29',
    'video': 'https://female-rappers.herokuapp.com/getMovie/cityg'
},
'dreezy':{
    'lyric': "They keep eating up the drip, I ain't even get to taste the sauce \n What the fuck they really on? \n Still the best like Giveon \n Married money, not Christiana but my last name should be Milian (Million)",
    'song':'Beat Box Freestyle',
    'name': 'Seandrea Sledge',
    'location': 'Chicago, IL',
    'dob': 'Mar 28, 1994',
    'age': '28',
    'video': 'https://female-rappers.herokuapp.com/getMovie/dreezy'
},
'rico nasty':{
    'lyric': "Eliantte, diamond princess (Ooh) \n All my VV's lookin' different (Yeah) \n When money talkin', I'ma listen (Shh) \n If he can't spend it, I go missin' (Oh)",
    'song':'Money',
    'name': 'Maria-Cecilia Simone Kelly',
    'location': 'Palmer Park, Maryland',
    'dob': 'May 7, 1997',
    'age': '25',
    'video': 'https://female-rappers.herokuapp.com/getMovie/rico'
},
'unknown':{
    'lyric': "unknown",
    'song':'unknown',
    'name': 'unknown',
    'location': 'unknown',
    'dob': 'unknown',
    'age': 'unknown',
},
}
 



app.get('/', (request, response) => {
   response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
   const rapperName = request.params.name.toLowerCase()
   if( rappers[rapperName] ){
    response.json(rappers[rapperName])
   }else{
    response.json(rappers['unknown'])
   }
   
})
//video files
app.get('/getMovie/nicki', (request, response) => {
    response.sendFile(__dirname + '/assets/nicki.mp4')
 })
 app.get('/getMovie/cardi', (request, response) => {
    response.sendFile(__dirname + '/assets/cardi.mp4')
 })
 app.get('/getMovie/megan', (request, response) => {
    response.sendFile(__dirname + '/assets/megan.mp4')
 })
 app.get('/getMovie/asian', (request, response) => {
    response.sendFile(__dirname + '/assets/asian.mp4')
 })
 app.get('/getMovie/bia', (request, response) => {
    response.sendFile(__dirname + '/assets/bia.mp4')
 })

 app.get('/getMovie/azealia', (request, response) => {
    response.sendFile(__dirname + '/assets/azealia.mp4')
 })
 app.get('/getMovie/brat', (request, response) => {
    response.sendFile(__dirname + '/assets/brat.mp4')
 })
 app.get('/getMovie/cityg', (request, response) => {
    response.sendFile(__dirname + '/assets/cityg.mp4')
 })
 app.get('/getMovie/eve', (request, response) => {
    response.sendFile(__dirname + '/assets/eve.mp4')
 })
 app.get('/getMovie/dreezy', (request, response) => {
    response.sendFile(__dirname + '/assets/dreezy.mp4')
 })

 app.get('/getMovie/flo', (request, response) => {
    response.sendFile(__dirname + '/assets/flo.mp4')
 })
 app.get('/getMovie/foxy', (request, response) => {
    response.sendFile(__dirname + '/assets/foxy.mp4')
 })
 app.get('/getMovie/kash', (request, response) => {
    response.sendFile(__dirname + '/assets/kash.mp4')
 })
 app.get('/getMovie/kim', (request, response) => {
    response.sendFile(__dirname + '/assets/kim.mp4')
 })
 app.get('/getMovie/latto', (request, response) => {
    response.sendFile(__dirname + '/assets/latto.mp4')
 })

 app.get('/getMovie/lauryn', (request, response) => {
    response.sendFile(__dirname + '/assets/lauryn.mp4')
 })
 app.get('/getMovie/mc', (request, response) => {
    response.sendFile(__dirname + '/assets/mc.mp4')
 })
 app.get('/getMovie/queen', (request, response) => {
    response.sendFile(__dirname + '/assets/queen.mp4')
 })
 app.get('/getMovie/remy', (request, response) => {
    response.sendFile(__dirname + '/assets/remy.mp4')
 })
 app.get('/getMovie/rico', (request, response) => {
    response.sendFile(__dirname + '/assets/rico.mp4')
 })

 app.get('/getMovie/saweetie', (request, response) => {
    response.sendFile(__dirname + '/assets/saweetie.mp4')
 })
 app.get('/getMovie/tierra', (request, response) => {
    response.sendFile(__dirname + '/assets/tierra.mp4')
 })
 app.get('/getMovie/tlc', (request, response) => {
    response.sendFile(__dirname + '/assets/tlc.mp4')
 })
 app.get('/getMovie/missy', (request, response) => {
    response.sendFile(__dirname + '/assets/missy.mp4')
 })
 app.get('/getMovie/trina', (request, response) => {
    response.sendFile(__dirname + '/assets/trina.mp4')
 })




app.listen(process.env.PORT || PORT , () => {
   console.log(`The server is now running on port ${PORT}! Betta Go Catch it!`)
})