import "./Action.scss";

export default function ActionEarth({ children }) {
  return (
    <div className="earth-wrapper">
      <div className="earth-img"></div>
      <div className="earth-children">{children}</div>
    </div>
  )
}
