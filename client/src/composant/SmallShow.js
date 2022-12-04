const SmallShow = ({ show }) => {
  return (
    <div>
      <p>{show.title}</p>
      <p>{show.time}</p>
      <p>{show.address}</p>
      <p></p>
    </div>
  );
};
export default SmallShow;
