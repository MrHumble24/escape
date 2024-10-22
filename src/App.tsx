import Categories from "./components/Categories";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import item1 from "./assets/images/item1.png";
import item2 from "./assets/images/item2.png";
import avatar from "./assets/images/avatar.png";
import FeaturedPost from "./components/FeaturedPost";
import PostCard from "./components/PostCard";
import card1 from "./assets/images/card1.png";
import card2 from "./assets/images/card2.png";
import card3 from "./assets/images/card3.png";
import card4 from "./assets/images/card4.png";
import card5 from "./assets/images/card5.png";
import card6 from "./assets/images/card6.png";
import CFooter from "./components/Footer";

const App = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <div className="px-4 md:px-0">
        <SectionTitle title="Featured Posts" />
        <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <FeaturedPost
            avatar={avatar}
            title="The Road Ahead"
            description="The road ahead might be paved - it might not be."
            backgroundImage={item1}
            date="June 23, 2022"
            author="John Doe"
          />
          <FeaturedPost
            avatar={avatar}
            title="From Top Down"
            description="Once a year, go someplace you’ve never been before."
            backgroundImage={item2}
            date="September 25, 2015"
            author="William Wong"
          />
        </div>
        <SectionTitle title="Most Recent" />
        <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <PostCard
            avatar={avatar}
            title="Still Standing Tall"
            description="Life begins at the end of your comfort zone."
            backgroundImage={card1}
            date="9/25/2015"
            author="William Wong"
          />
          <PostCard
            avatar={avatar}
            title="The Road Ahead"
            description="The road ahead might be paved - it might not be."
            backgroundImage={card2}
            date="9/25/2015"
            author="John Doe"
          />
          <PostCard
            avatar={avatar}
            title="The Road Ahead"
            description="The road ahead might be paved - it might not be."
            backgroundImage={card3}
            date="9/25/2015"
            author="John Doe"
          />
          <PostCard
            avatar={avatar}
            title="Still Standing Tall"
            description="Life begins at the end of your comfort zone."
            backgroundImage={card4}
            date="9/25/2015"
            author="William Wong"
          />
          <PostCard
            avatar={avatar}
            title="The Road Ahead"
            description="The road ahead might be paved - it might not be."
            backgroundImage={card5}
            date="9/25/2015"
            author="John Doe"
          />
          <PostCard
            avatar={avatar}
            title="The Road Ahead"
            description="The road ahead might be paved - it might not be."
            backgroundImage={card6}
            date="9/25/2015"
            author="John Doe"
          />
        </div>
        <CFooter />
      </div>
    </main>
  );
};

export default App;
