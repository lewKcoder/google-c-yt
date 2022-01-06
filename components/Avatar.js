function Avatar({ url }) {
  return (
    <div>
      <img
        loading="lazy"
        className="h-10 w-20 cursor-pointer transition
    duration-150 transform hover:scale-110"
        src={url}
        alt="profile pick"
      />
    </div>
  );
}

export default Avatar;
