interface Props {
  title: string;
  description: string;
  avatar: string;
  date: string;
  backgroundImage: string;
  author?: string;
}

const PostCard: React.FC<Props> = ({
  avatar,
  backgroundImage,
  date,
  description,
  title,
  author,
}) => {
  return (
    <div className=" bg-white min-h-[291px] shadow-md">
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className=" min-h-[150px]  bg-cover bg-center bg-no-repeat"
      />

      <div className="p-2">
        <div className="my-2">
          <p>{title}</p>
          <p className="text-xs text-dimmed">{description}</p>
        </div>
        <div className="h-[1px] bg-gray-200 my-3"></div>
        <div className="flex bg-white justify-between align-center">
          <div className="flex gap-2 content-center">
            <img src={avatar} alt="" className="rounded-full w-[30px] " />
            <p>{author}</p>
          </div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
