import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect , useState} from 'react';

export default function HomeList () {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async (username) => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const result = await response.json();
        return {
          avatarUrl: result.avatar_url,
          username: result.login,
          name: result.name,
        };
      } catch (error) {
        console.error(`Error fetching data for ${username}:`, error);
        return null;
      }
    };

    const usernames = ['nategurian', 'mbarajas', 'alexgrant117', 'octocat'];

    const fetchDataForUsers = async () => {
      const userPromises = usernames.map((username) => fetchData(username));
      const userDataArray = await Promise.all(userPromises);
      setUserData(userDataArray);
    };

    fetchDataForUsers();
  }, []);

  return (
    <div style={{ display: 'inline', float: 'left', width: '350px' }}>
      <p className="text-center">
        <h1 style={{ color: 'blue' }}> List of People</h1>
      </p>
      <ListGroup defaultActiveKey="#link1">
        {userData.map((user, index) => (
          <ListGroup.Item key={index} action href={`/users/${user.username}`}>
            <p className="text-center">
              {user.name} "{user.username}" <img src={user.avatarUrl} height={50} width={50} />
            </p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}