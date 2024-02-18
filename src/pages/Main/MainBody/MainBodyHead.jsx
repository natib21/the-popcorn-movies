function MainBodyHead({ title, discription }) {
  return (
    <div className="main_">
      <h3 className="main_head">{title}</h3>
      <p>{discription}</p>
    </div>
  );
}

export default MainBodyHead;
