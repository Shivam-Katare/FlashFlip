// Initialize Supabase client
const supabaseUrl = 'https://djndnyppwxxckfcwabeo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbmRueXBwd3h4Y2tmY3dhYmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjYyMzAsImV4cCI6MjAwMzY0MjIzMH0.x0gjUAwn2oyRvinOGUoYnBKJ2hGiF3Ej6CjlQlfRk-E';
const supabase = createClient(supabaseUrl, supabaseKey);


function CreateFolder({ setCurrentFolder }) {
  const [folderName, setFolderName] = useState('');

  const handleCreateFolder = async () => {
    if (folderName.trim() === '') return;

    // Save folderName to the 'folders' table in the database
    const { data, error } = await supabase.from('folders').insert([
      { folder_name: folderName },
    ]);

    if (error) {
      console.error('Error creating folder:', error);
    } else {
      // Set the current folder and clear the input field
      setCurrentFolder(folderName);
      setFolderName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter folder name"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <button onClick={handleCreateFolder}>Create Folder</button>
    </div>
  );
}

export default CreateFolder;
