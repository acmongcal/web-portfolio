import ArtGallery from "../components/ArtGallery";
import PersonaPhoto from "../assets/images/kuuhaku.jpg";
import WindowGUI from "../components/WindowGUI";
import Socials from "../components/Socials";
function PageAbout() {
  return (
    <div className="about-section">
      <meta name="author" content="Alan Mongcal" />
      <meta
        name="keywords"
        content="My Story, About, Hobbies"
      />
      <meta
        name="description"
        content="This page shows what I do during my free time and how did I decided to become a web developer."
      />
      <section>
        <h1 className="page-header">My Story</h1>
        <p>
          I'm a junior web developer from Computer Science and with 6 years
          experience of QA testing for both hardware and software.
        </p>
        <p>
          While working as QA testing for a long time I got bored of doing the
          same repetive tasks for testing where we mostly create test cases,
          perform tests on the machine or software, create
          reports/documentations and doing bug fixes. Because of this I thought
          about wanting to challenge myself to do more coding and coincidentally
          I saw a well designed website with great ux/ui interactions where it
          sparked my interest with web development. Fast forward, I had to quit
          my job as an Associate Researcher Development Engineer because I was
          migrating to Canada. With this opportunity I enrolled in a front-end
          web development certificate program for a career shift.
        </p>
        <p>
          I am Filipino who migrated to Canada which makes me able to
          collaborate with more people of different languages and country. I
          speak english and tagalog fluently, and limited working proficiency
          for nihongo where I studied it for 6 months from my past company.
        </p>
        <img className="profile" src={PersonaPhoto} alt="A portrait drawn" />
        <Socials location="home" />
      </section>
      <section className="hobbies">
        <h2>What I Do During Free Time </h2>
        <WindowGUI header="Playing Computer Games" h={3}>
          <p>
            I play a lot of online gacha games such as Hololive Dreams,
            Arknights: Endfield, Wuthering Waves and Nikke. Whenever I get
            exhausted of gacha games i take a break and play online competitive
            games such as Valorant and also single player story games like
            Witcher 3. Some of the single player story games that I have
            completed are Hollow Knight, Hollow Knight: Silksong and Echoes of
            Aincrad.
          </p>
          <a
            className="about-social-link"
            href="https://steamcommunity.com/id/kuuhaku13/"
            aria-label="Steam profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <title>steam</title>
              <path
                fill="currentColor"
                d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10c-4.6 0-8.45-3.08-9.64-7.27l3.83 1.58a2.84 2.84 0 0 0 2.78 2.27c1.56 0 2.83-1.27 2.83-2.83v-.13l3.4-2.43h.08c2.08 0 3.77-1.69 3.77-3.77s-1.69-3.77-3.77-3.77s-3.78 1.69-3.78 3.77v.05l-2.37 3.46l-.16-.01c-.59 0-1.14.18-1.59.49L2 11.2C2.43 6.05 6.73 2 12 2M8.28 17.17c.8.33 1.72-.04 2.05-.84s-.05-1.71-.83-2.04l-1.28-.53c.49-.18 1.04-.19 1.56.03c.53.21.94.62 1.15 1.15c.22.52.22 1.1 0 1.62c-.43 1.08-1.7 1.6-2.78 1.15c-.5-.21-.88-.59-1.09-1.04zm9.52-7.75c0 1.39-1.13 2.52-2.52 2.52a2.52 2.52 0 0 1-2.51-2.52a2.5 2.5 0 0 1 2.51-2.51a2.52 2.52 0 0 1 2.52 2.51m-4.4 0c0 1.04.84 1.89 1.89 1.89c1.04 0 1.88-.85 1.88-1.89s-.84-1.89-1.88-1.89c-1.05 0-1.89.85-1.89 1.89"
              />
            </svg>
          </a>
        </WindowGUI>

        <WindowGUI header="Watching Shows" h={3}>
          <p>
            I watch most of the latest anime and as well of the previous ones as
            long as they are either one of the genres that I like such as
            Action, Slice of Life, Romance, SciFi, Adventure, Isekai, Romcom,
            Drama and Mystery. My top 3 animes are Sword Art Online, No Game No
            Life and Hyouka. Aside from anime, I also watch kdrama from time to
            time whenever IU is part of it.
          </p>
        </WindowGUI>
        <WindowGUI header="Reading Manga and Manhwa" h={3}>
          <p>
            Whenever I take a break from watching anime or getting cliffhangers,
            I read the manga/manhwa of the anime I watch to learn more what
            happens next to the story. Some of the top mangas that I like are
            Kaoru Hana Wa Rin To Saku, Call of the Night and Loner Life in
            Another World. For the manwhas that ones that I currently like are
            Solo Leveling, Sweet Home and Our Guild's Idol.
          </p>
        </WindowGUI>
        <WindowGUI header="Watching Vtubers" h={3}>
          <p>
            Whenever I have a bad day or just dont have anything to do, I
            usually watch vtuber streams where they play games, doing a watch
            along or just having a chat with viewers. I also love watching the
            3d live concerts that vtubers do during their debut anniversary or
            during their birthday. Most of the vtubers that I follow are from
            hololive but I also watch some indie vtubers. My kamioshi which
            introduced me to vtubers is Shirakami Fubuki.
          </p>
        </WindowGUI>
        <WindowGUI header="Listening to Music" h={3}>
          <p>
            I listen to a lot of music genres such as kpop, jrock, anisongs,
            vtuber music, rock and pop songs. Some of the artists/bands that are
            like are IU, Twice, One ok Rock, Eve, Arekun, Shawn Mendes, Green
            Day, MindaRyn and BoyWithUke.
          </p>
          <a
            className="about-social-link"
            href="https://open.spotify.com/user/22u3dspdoaewguhwr4rtr3kei?si=ab9165c68cab4be5"
            aria-label="Spotify profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <title>spotify</title>
              <path
                fill="currentColor"
                d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
              />
            </svg>
          </a>
        </WindowGUI>
        <WindowGUI header="Playing Guitar" h={3}>
          <h3></h3>
          <p>
            I play guitar for a couple years already but have been on and off. I
            consider myself as somewhat intermediate level since I mostly know
            how to play any chords and sing while playing it.
          </p>
        </WindowGUI>
        <WindowGUI header="Drawing" h={3}>
          <p>
            Lately I have been practicing drawing since I wanted to draw for the
            vtubers and streamers that I follow ,anime that I watch and also
            trying to do art commissions as a side gig.
          </p>
          <ArtGallery />
        </WindowGUI>
      </section>
    </div>
  );
}

export default PageAbout;
