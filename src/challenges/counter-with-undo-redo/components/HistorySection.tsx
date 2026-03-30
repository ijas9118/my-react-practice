import style from "./HistorySection.module.css";

const HistorySection = ({
  past,
  future,
}: {
  past: number[];
  future: number[];
}) => {
  return (
    <div className={style.history}>
      <div className={style.historyBox}>
        <p>Past</p>
        {past.length > 0 ? (
          <ul>
            {past.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        ) : (
          <span className={style.empty}>No actions yet</span>
        )}
      </div>
      <div className={style.historyBox}>
        <p>Future</p>

        {future.length > 0 ? (
          <ul>
            {future.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        ) : (
          <span className={style.empty}>Nothing to redo</span>
        )}
      </div>
    </div>
  );
};

export default HistorySection;
