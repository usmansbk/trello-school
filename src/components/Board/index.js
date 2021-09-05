import { nanoid } from "nanoid";
import { useState } from "react";
import IconButton from "../common/Button/IconButton";
import Icon from "../common/Icon";
import AddCard from "./AddCard";
import styles from "./index.module.css";

const COLUMNS = [
  {
    id: nanoid(),
    title: "Todo",
  },
  {
    id: nanoid(),
    title: "In progress",
  },
  {
    id: nanoid(),
    title: "Done",
  },
];

const ColumnHeader = ({ title }) => {
  return (
    <div className={styles.columnHeader}>
      <h2 className={styles.columnTitle}>{title}</h2>
      <IconButton name="fa-ellipsis-h" />
    </div>
  );
};

const FooterButton = ({ onClick }) => {
  return (
    <button className={styles.footerButton} onClick={onClick}>
      <Icon name="fa-plus" />
      <span className={styles.footerButtonText}>Add a card</span>
    </button>
  );
};

const ColumnFooter = () => {
  const [showComposer, setComposerVisible] = useState(false);

  const toggleComposer = () => setComposerVisible(!showComposer);

  return (
    <div className={styles.footer}>
      {showComposer && <AddCard onCancel={toggleComposer} />}
      {!showComposer && <FooterButton onClick={toggleComposer} />}
    </div>
  );
};

const CardList = ({ title }) => {
  return (
    <div className={styles.cardList}>
      <ColumnHeader title={title} />
      <div className={styles.cardBody}>
        <ColumnFooter />
      </div>
    </div>
  );
};

const HeaderButton = ({ text }) => {
  return (
    <div className={styles.headerButton}>
      <h1 className={styles.buttonText}>{text}</h1>
    </div>
  );
};

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <HeaderButton text="Board Name" />
        </header>
        <div className={styles.board}>
          <ul className={styles.columns}>
            {COLUMNS.map(({ title, id }) => (
              <li key={id} className={styles.column}>
                <CardList title={title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Board;
