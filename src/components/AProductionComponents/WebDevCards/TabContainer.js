import React, { useState } from "react";
import styles from "./TabContainer.css"; // Import CSS modules

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }
  };

  return (
    <section className={styles.page}>
      <section>
        <ul className={styles.tabsControls}>
          {[1, 2, 3, 4, 5, 6].map((tabId) => (
            <li
              key={tabId}
              className={`${styles.tabsControlsItem} ${
                tabId === activeTab ? styles.active : ""
              }`}
            >
              <button
                className={styles.tabsControlsLink}
                onClick={() => handleTabClick(tabId)}
              >
                Tab {String.fromCharCode(64 + tabId)}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.cardsContainer}>
        {[1, 2, 3, 4, 5, 6].map((cardId) => (
          <div
            key={cardId}
            className={`${styles.card} ${
              cardId === activeTab ? styles.cardCurrent : ""
            } ${cardId < activeTab ? styles.hidden : ""}`}
          >
            <h1>
              {String.fromCharCode(64 + cardId)}.{" "}
              {cardId === activeTab
                ? "Lorem ipsum dolor sit amet"
                : "Other Tab Content"}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default TabsContainer;
