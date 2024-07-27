import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <li
      key={props.foodItem}
      className={`${styles["kg-item"]} list-group-item `}
    >
      <span className={styles["kg-span"]}>{props.foodItem}</span>
    </li>
  );
};
export default Item;
// "list-group-item, kg-item"
