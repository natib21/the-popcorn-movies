function NavBarMap({
  handleStateOn,
  handleSetStateOn,
  text,
  icon,
  downIcon,
  upIcon,
  children,
}) {
  const stateOn = text === handleStateOn;
  const handleClick = () => {
    handleSetStateOn(stateOn ? "" : text);
  };
  return (
    <li onClick={handleClick}>
      <section className="clicksection">
        <div>
          <div className="section_icon">{icon}</div>
          <h3>{text}</h3>
        </div>
        <div>{stateOn ? downIcon : upIcon}</div>
      </section>
      {stateOn && children}
    </li>
  );
}

export default NavBarMap;
