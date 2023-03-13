import "./Action.scss";

export default function Action({ children }) {
  return (
    <div className="earth-wrapper">
      <div className="earth-img"></div>
      <div className="earth-children">{children}</div>
    </div>
  )
}
