import ArtGallery from "../components/ArtGallery";
import PersonaPhoto from "../assets/images/kuuhaku.jpg";
import WindowGUI from "../components/WindowGUI";
import Socials from "../components/Socials";
function PageAbout() {
  return (
    <div className="about-section">
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
        <Socials location="home"/>
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
          <a href="https://steamcommunity.com/id/kuuhaku13/">Steam Profile</a>
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
          <a href="https://open.spotify.com/user/22u3dspdoaewguhwr4rtr3kei?si=ab9165c68cab4be5">
            Spotify Profile
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
