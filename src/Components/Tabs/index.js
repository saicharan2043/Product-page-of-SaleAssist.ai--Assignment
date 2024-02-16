import "./index.css";

function Tabs(props) {
  const { eachTab, isTabActive, clickTab } = props;
  const { categoryId, name } = eachTab;

  const tabClick = () => {
    clickTab(categoryId);
  };

  return (
    <li className={`tabs ${isTabActive && "active-tab"}`} onClick={tabClick}>
      {name}
    </li>
  );
}

export default Tabs;
