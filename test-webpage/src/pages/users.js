import React, { useEffect , useState} from 'react';
import Card from 'react-bootstrap/Card';


export default function Users ()  {
    const userPath = window.location.pathname;
    const pathParts = userPath.split('/');
    const nombre = pathParts[2];
    
    const user = "https://api.github.com/users/"+ nombre;
    console.log(user);

    const [avatarUrl, setAvatarURL] = useState();
    const [name, setname] =useState();
    const [bio, setBio] =useState();
    useEffect (() => {
        fetch(user)
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              setAvatarURL(result.avatar_url);
              setname(result.name);
              setBio(result.bio);
            },
            (error) => {
              console.log(error);
            }
          );
      }, [] )


    return (
        <div className="Users w-100 justify-content-center align-itmes-center d-flex" > 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {avatarUrl} />
        <Card.Body>
          <Card.Title className= "text-center">{name}</Card.Title>
          <Card.Text>
            {bio}
          </Card.Text>
        </Card.Body>
        
        <Card.Body>
          <Card.Link href={"https://github.com/"+ nombre}>Profile Link</Card.Link>
        </Card.Body>
      </Card>
      </div>
    );
}