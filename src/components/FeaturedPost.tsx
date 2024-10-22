interface Props {
  title: string;
  description: string;
  avatar: string;
  date: string;
  backgroundImage: string;
  author?: string;
}

const FeaturedPost: React.FC<Props> = ({
  title,
  description,
  avatar,
  date,
  backgroundImage,
  author,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-full min-h-[280px] relative  bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent
          flex flex-col justify-end
          p-6
          "
      >
        <p className="text-white text-2xl ">{title}</p>

        <p className="text-white text-sm ">{description}</p>
        <div className="flex  justify-between align-center mt-3">
          <div className="flex gap-2 content-center">
            <img src={avatar} alt="" className="rounded-full w-[30px] " />
            <p className="text-dimmed self-center">{author}</p>
          </div>
          <p className="text-dimmed text-sm self-center">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
