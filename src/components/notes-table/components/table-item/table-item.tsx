
const TableItem: React.FC = () => {
  return (
    <li className="table__item item">
      <div className="item__box">
        <div className="item__img-container">
          <span className="item__img-wrapper">
            <img className="item__img button--light" src="./assets/lightbulb.png"
              alt="" /></span>
          <span>Shopping list</span>
        </div>
        <p className="item__createdAt">April,20 2021</p>
        <p className="item__category">task</p>
        <p className="item__content">tomatoes</p>
        <p className="item__dates">3/5/2021</p>
        <div className="item__buttons buttons__wrapper">
          <button className="button "><img src="./assets/editing.png" alt="" /></button>
          <button className="button "><img src="./assets/archive.png" alt="" /></button>
          <button className="button"><img src="./assets/delete.png" alt="" /></button>
        </div>
      </div>
    </li>
  )
}

export { TableItem }