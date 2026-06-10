interface Props {
  title: string;
  searches: string[];
  onLabelClicked: (tag: string) => void;
}

export const PreviousSearches = ({
  title,
  searches,
  onLabelClicked,
}: Props) => {
  return (
    <div className="previous-searches">
      <h2>{title}</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li
            key={searches.indexOf(search)}
            onClick={() => onLabelClicked(search)}
          >
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
