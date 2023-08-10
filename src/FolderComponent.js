import { useParams } from "react-router-dom";
import CustomCards from "./components/ExtraPages/CustomCards";

function FolderComponent({folders}) {
  const { folderName } = useParams();

  // Find the folder based on the folderName in the URL
  const currentFolder = folders.find((folder) => folder.name === folderName);

  return (
    <div className="folder">
      <h3>{folderName} Card</h3>
      {currentFolder?.cards.map((card, cardIndex) => (
        <div className="flashcard" key={cardIndex}>
          <CustomCards frontText={card.front} backText={card.back} imageUrl={card.imageUrl} />
        </div>
      ))}
    </div>
  );
}

export default FolderComponent;